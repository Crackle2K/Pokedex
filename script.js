const app = document.getElementById('app');

// ── Router ──────────────────────────────────────────────────────────────────

function getPage() {
  return location.hash.slice(1).split('/')[0] || 'home';
}

function getSlug() {
  return location.hash.slice(1).split('/')[1] || null;
}

function navigate(page, slug) {
  location.hash = slug ? `${page}/${slug}` : page;
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

function render() {
  const page = getPage();
  const slug = getSlug();

  if (page === 'home')                  renderHome();
  else if (page === 'factions' && slug) renderFactionDetail(slug);
  else if (page === 'factions')         renderFactions();
  else if (page === 'pois' && slug)     renderPoiDetail(slug);
  else if (page === 'pois')             renderPois();
  else if (page === 'members' && slug)  renderMemberDetail(slug);
  else if (page === 'members')          renderMembers();
  else                                  renderHome();
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function getFaction(id) { return DATA.factions.find(f => f.id === id); }
function getPoi(id)     { return DATA.pois.find(p => p.id === id); }
function getMember(id)  { return DATA.members.find(m => m.id === id); }

function factionBadge(factionId) {
  const f = getFaction(factionId);
  if (!f) return '';
  return `<span class="badge" style="background:${f.color}20;color:${f.color};border-color:${f.color}40">${f.name}</span>`;
}

function skinUrl(username) {
  return `https://mc-heads.net/avatar/${username}/64`;
}

// ── Home ─────────────────────────────────────────────────────────────────────

function renderHome() {
  app.innerHTML = `
    <div class="home-grid">
      <div class="home-card" onclick="navigate('factions')">
        <h2>Factions</h2>
        <p>${DATA.factions.length} factions &mdash; alliances, territories, and rivalries.</p>
      </div>
      <div class="home-card" onclick="navigate('pois')">
        <h2>Points of Interest</h2>
        <p>${DATA.pois.length} locations &mdash; bases, farms, outposts, and landmarks.</p>
      </div>
      <div class="home-card" onclick="navigate('members')">
        <h2>Members</h2>
        <p>${DATA.members.length} players &mdash; roles, specialties, and stories.</p>
      </div>
    </div>

    <div class="home-factions-preview">
      <h2 class="section-title">Factions at a Glance</h2>
      <div class="faction-strip">
        ${DATA.factions.map(f => `
          <div class="faction-strip-item" onclick="navigate('factions','${f.id}')" style="border-color:${f.color}">
            <span class="strip-name" style="color:${f.color}">${f.name}</span>
            <span class="strip-count">${f.members.length} members &bull; ${f.pois.length} POIs</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── Factions List ────────────────────────────────────────────────────────────

function renderFactions() {
  app.innerHTML = `
    <div class="page-header">
      <h1>Factions</h1>
      <p>Groups of players united by territory, playstyle, and shared goals.</p>
    </div>
    <div class="card-grid">
      ${DATA.factions.map(f => `
        <div class="card faction-card" onclick="navigate('factions','${f.id}')" style="--accent:${f.color}">
          <h2 class="card-title" style="color:${f.color}">${f.name}</h2>
          <p class="card-desc">${f.description}</p>
          <div class="card-meta">
            <span>${f.members.length} members</span>
            <span>${f.pois.length} POIs</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ── Faction Detail ───────────────────────────────────────────────────────────

function renderFactionDetail(id) {
  const f = getFaction(id);
  if (!f) { renderFactions(); return; }

  const factionMembers = f.members.map(getMember).filter(Boolean);
  const factionPois    = f.pois.map(getPoi).filter(Boolean);

  app.innerHTML = `
    <div class="detail-back">
      <button onclick="navigate('factions')" class="back-btn">Back to Factions</button>
    </div>

    <div class="detail-hero" style="--accent:${f.color}">
      <div class="detail-hero-text">
        <h1 style="color:${f.color}">${f.name}</h1>
        <p>${f.description}</p>
      </div>
    </div>

    <div class="detail-sections">
      <section>
        <h2 class="section-title">Members <span class="count-pill">${factionMembers.length}</span></h2>
        <div class="member-list">
          ${factionMembers.map(m => `
            <div class="member-row" onclick="navigate('members','${m.id}')">
              <img class="member-avatar" src="${skinUrl(m.username)}" alt="${m.username}" onerror="this.style.display='none'" />
              <div class="member-row-info">
                <span class="member-row-name">${m.username}</span>
                <span class="member-row-role">${m.role}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section>
        <h2 class="section-title">Points of Interest <span class="count-pill">${factionPois.length}</span></h2>
        <div class="poi-list">
          ${factionPois.map(p => `
            <div class="poi-row" onclick="navigate('pois','${p.id}')">
              <div class="poi-row-left">
                <span class="poi-type-tag">${p.type}</span>
                <span class="poi-row-name">${p.name}</span>
              </div>
              <span class="poi-coords">${p.coordinates}</span>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

// ── POIs List ────────────────────────────────────────────────────────────────

function renderPois() {
  const types = [...new Set(DATA.pois.map(p => p.type))].sort();

  app.innerHTML = `
    <div class="page-header">
      <h1>Points of Interest</h1>
      <p>Notable builds, bases, farms, and landmarks across the world.</p>
    </div>

    <div class="filter-bar">
      <button class="filter-btn active" data-filter="all">All</button>
      ${types.map(t => `<button class="filter-btn" data-filter="${t}">${t}</button>`).join('')}
    </div>

    <div class="card-grid" id="poi-grid">
      ${DATA.pois.map(p => {
        const f = getFaction(p.faction);
        return `
          <div class="card poi-card" data-type="${p.type}" onclick="navigate('pois','${p.id}')" ${f ? `style="--accent:${f.color}"` : ''}>
            <div class="poi-card-top">
              <span class="poi-type-tag">${p.type}</span>
              <span class="poi-status ${p.status === 'Active' ? 'status-active' : 'status-inactive'}">${p.status}</span>
            </div>
            <h2 class="card-title">${p.name}</h2>
            <p class="card-desc">${p.description}</p>
            <div class="card-meta">
              ${f ? factionBadge(p.faction) : ''}
              <span class="coords-inline">${p.coordinates}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.poi-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.type === filter) ? '' : 'none';
      });
    });
  });
}

// ── POI Detail ───────────────────────────────────────────────────────────────

function renderPoiDetail(id) {
  const p = getPoi(id);
  if (!p) { renderPois(); return; }
  const f = getFaction(p.faction);
  const builder = getMember(p.builder);

  app.innerHTML = `
    <div class="detail-back">
      <button onclick="navigate('pois')" class="back-btn">Back to POIs</button>
    </div>

    <div class="detail-hero" ${f ? `style="--accent:${f.color}"` : ''}>
      <div class="detail-hero-text">
        <div class="poi-detail-tags">
          <span class="poi-type-tag">${p.type}</span>
          <span class="poi-status ${p.status === 'Active' ? 'status-active' : 'status-inactive'}">${p.status}</span>
        </div>
        <h1>${p.name}</h1>
        <p>${p.description}</p>
      </div>
    </div>

    <div class="detail-info-grid">
      <div class="info-block">
        <span class="info-label">Coordinates</span>
        <span class="info-value mono">${p.coordinates}</span>
      </div>
      <div class="info-block">
        <span class="info-label">Type</span>
        <span class="info-value">${p.type}</span>
      </div>
      <div class="info-block">
        <span class="info-label">Status</span>
        <span class="info-value">${p.status}</span>
      </div>
      <div class="info-block">
        <span class="info-label">Faction</span>
        <span class="info-value">${f ? `<span onclick="navigate('factions','${f.id}')" class="link-span" style="color:${f.color}">${f.name}</span>` : 'Independent'}</span>
      </div>
      <div class="info-block">
        <span class="info-label">Built by</span>
        <span class="info-value">${builder ? `<span onclick="navigate('members','${builder.id}')" class="link-span">${builder.username}</span>` : p.builder}</span>
      </div>
    </div>
  `;
}

// ── Members List ─────────────────────────────────────────────────────────────

function renderMembers() {
  app.innerHTML = `
    <div class="page-header">
      <h1>Members</h1>
      <p>The players who make CrackleSMP what it is.</p>
    </div>
    <div class="members-grid">
      ${DATA.members.map(m => {
        const f = getFaction(m.faction);
        return `
          <div class="member-card" onclick="navigate('members','${m.id}')" ${f ? `style="--accent:${f.color}"` : ''}>
            <img class="member-card-avatar" src="${skinUrl(m.username)}" alt="${m.username}" onerror="this.style.display='none'" />
            <h2 class="member-card-name">${m.username}</h2>
            <span class="member-card-role">${m.role}</span>
            ${f ? factionBadge(m.faction) : ''}
            <p class="member-card-specialty">${m.specialty}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── Member Detail ────────────────────────────────────────────────────────────

function renderMemberDetail(id) {
  const m = getMember(id);
  if (!m) { renderMembers(); return; }
  const f = getFaction(m.faction);
  const memberPois = DATA.pois.filter(p => p.builder === m.id);

  app.innerHTML = `
    <div class="detail-back">
      <button onclick="navigate('members')" class="back-btn">Back to Members</button>
    </div>

    <div class="detail-hero member-detail-hero" ${f ? `style="--accent:${f.color}"` : ''}>
      <img class="member-detail-avatar" src="${skinUrl(m.username)}" alt="${m.username}" onerror="this.style.display='none'" />
      <div class="detail-hero-text">
        <h1>${m.username}</h1>
        <p>${m.description}</p>
      </div>
    </div>

    <div class="detail-info-grid">
      <div class="info-block">
        <span class="info-label">Role</span>
        <span class="info-value">${m.role}</span>
      </div>
      <div class="info-block">
        <span class="info-label">Faction</span>
        <span class="info-value">${f ? `<span onclick="navigate('factions','${f.id}')" class="link-span" style="color:${f.color}">${f.name}</span>` : 'Independent'}</span>
      </div>
      <div class="info-block">
        <span class="info-label">Joined</span>
        <span class="info-value">${m.joinDate}</span>
      </div>
      <div class="info-block">
        <span class="info-label">Specialty</span>
        <span class="info-value">${m.specialty}</span>
      </div>
    </div>

    ${memberPois.length ? `
      <section class="detail-section">
        <h2 class="section-title">Built by ${m.username} <span class="count-pill">${memberPois.length}</span></h2>
        <div class="poi-list">
          ${memberPois.map(p => `
            <div class="poi-row" onclick="navigate('pois','${p.id}')">
              <div class="poi-row-left">
                <span class="poi-type-tag">${p.type}</span>
                <span class="poi-row-name">${p.name}</span>
              </div>
              <span class="poi-coords">${p.coordinates}</span>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}
  `;
}
