// ==========================================================================
// "CAN YOU SPOT THE SCAM?" - INTERACTIVE APPLICATION ENGINE
// ==========================================================================

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1046.50, now + 0.1); // C6

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.1);
      osc1.stop(now + 0.4);
      osc2.stop(now + 0.4);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + i * 0.09;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.28);
      });
    } catch (e) {}
  }
}

// Confetti Particle Engine
class ConfettiCannon {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 70) {
    if (!this.canvas || !this.ctx) return;
    const colors = ['#00F0FF', '#FF2E93', '#F59E0B', '#10B981', '#6366F1', '#A78BFA', '#FBBF24'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16 - 3,
        size: Math.random() * 9 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.012
      });
    }
    if (!this.animationId) {
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38; // gravity
      p.rotation += p.rSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.loop());
    } else {
      this.animationId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// Master Academy App State & Controller
class ScamAcademyApp {
  constructor() {
    this.audio = new AudioSynth();
    this.confetti = null;

    this.state = {
      xp: 0,
      levelIndex: 0,
      playerName: "Agent Alex",
      badgesUnlocked: {},
      scenariosCompleted: {},
      quizzesPassed: {},
      rapidHighScore: 0
    };

    // Runtime state
    this.currentScenarioIndex = 0;
    this.currentInspectedHotspots = new Set();
    this.rapidIndex = 0;
    this.rapidScore = 0;
    this.rapidStreak = 0;
    this.activeQuiz = null;
    this.activeQuizKey = 'quiz_phishing';
    this.activeQuizQIndex = 0;
    this.activeQuizScore = 0;

    this.loadState();
  }

  init() {
    this.confetti = new ConfettiCannon('confetti-canvas');
    this.bindEvents();
    this.renderLessons();
    this.renderSimulatorTabs();
    this.renderSimulatorScenario(0);
    this.renderQuizSelectionBar();
    this.launchQuiz('quiz_phishing', false); // preload initial quiz view
    this.renderBadges();
    this.renderEmergencyChecklist();
    this.updateUserStatsDisplay();

    // Keyboard shortcuts for Rapid Game
    window.addEventListener('keydown', (e) => {
      const minigameSection = document.getElementById('view-minigame');
      if (minigameSection && minigameSection.classList.contains('active')) {
        if (e.key === 'ArrowLeft' || e.key === '1') {
          this.submitRapidChoice(true);
        } else if (e.key === 'ArrowRight' || e.key === '2') {
          this.submitRapidChoice(false);
        }
      }
    });
  }

  loadState() {
    try {
      const saved = localStorage.getItem('spot_the_scam_data_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) {
      console.warn("Could not read localStorage", e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('spot_the_scam_data_v2', JSON.stringify(this.state));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  addXp(points, originEl = null) {
    this.state.xp += points;
    const oldLevel = this.state.levelIndex;
    let newLevel = 0;
    for (let i = ACADEMY_DATA.levels.length - 1; i >= 0; i--) {
      if (this.state.xp >= ACADEMY_DATA.levels[i].minXp) {
        newLevel = i;
        break;
      }
    }

    this.state.levelIndex = newLevel;
    this.saveState();
    this.updateUserStatsDisplay();

    if (newLevel > oldLevel) {
      this.triggerLevelUpCelebration(ACADEMY_DATA.levels[newLevel]);
    } else if (originEl) {
      const rect = originEl.getBoundingClientRect();
      this.confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
    }
  }

  unlockBadge(badgeId) {
    if (this.state.badgesUnlocked[badgeId]) return;
    this.state.badgesUnlocked[badgeId] = true;
    this.saveState();
    this.renderBadges();
    this.updateUserStatsDisplay();
    this.audio.playFanfare();

    const badge = ACADEMY_DATA.badges.find(b => b.id === badgeId);
    if (badge) {
      this.showToast(`🏆 Badge Unlocked: ${badge.name}!`, badge.icon);
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 3, 90);
    }
  }

  triggerLevelUpCelebration(levelObj) {
    this.audio.playFanfare();
    this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 120);
    this.showToast(`🎉 Level Up! You are now a ${levelObj.name}!`, levelObj.icon);
  }

  showToast(message, icon = "⭐") {
    const toast = document.createElement('div');
    toast.className = 'app-floating-toast';
    toast.innerHTML = `<span style="font-size:24px;">${icon}</span> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }

  updateUserStatsDisplay() {
    const currentLevel = ACADEMY_DATA.levels[this.state.levelIndex];
    const nextLevel = ACADEMY_DATA.levels[this.state.levelIndex + 1];

    // Nav pills
    const levelPill = document.getElementById('nav-level-pill');
    if (levelPill) {
      levelPill.innerHTML = `<span class="icon">${currentLevel.icon}</span> ${currentLevel.name}`;
    }

    const xpPill = document.getElementById('nav-xp-pill');
    if (xpPill) {
      xpPill.innerHTML = `<span class="icon">⚡</span> ${this.state.xp} XP`;
    }

    // Hero Widget
    const heroRankBadge = document.getElementById('hero-rank-badge');
    if (heroRankBadge) {
      heroRankBadge.innerHTML = `${currentLevel.icon} ${currentLevel.name}`;
      heroRankBadge.style.borderColor = currentLevel.color;
    }

    const heroXpDisplay = document.getElementById('hero-xp-display');
    if (heroXpDisplay) {
      heroXpDisplay.innerText = `${this.state.xp} Total XP`;
    }

    const progressBar = document.getElementById('hero-progress-fill');
    const heroNextRank = document.getElementById('hero-next-rank');

    if (nextLevel) {
      const currentLevelBase = currentLevel.minXp;
      const nextLevelBase = nextLevel.minXp;
      const progressPercent = Math.min(100, Math.max(0, ((this.state.xp - currentLevelBase) / (nextLevelBase - currentLevelBase)) * 100));
      if (progressBar) progressBar.style.width = `${progressPercent}%`;
      if (heroNextRank) heroNextRank.innerText = `Next: ${nextLevel.name} (${nextLevel.minXp} XP)`;
    } else {
      if (progressBar) progressBar.style.width = '100%';
      if (heroNextRank) heroNextRank.innerText = `Max Rank Achieved! 👑`;
    }

    // Mini badges in hero
    const miniBadgesContainer = document.getElementById('hero-mini-badges');
    if (miniBadgesContainer) {
      miniBadgesContainer.innerHTML = ACADEMY_DATA.badges.map(b => {
        const isUnlocked = !!this.state.badgesUnlocked[b.id];
        return `<div class="mini-badge ${isUnlocked ? 'unlocked' : ''}" title="${b.name}: ${b.desc}">${b.icon}</div>`;
      }).join('');
    }

    // Certificate Name sync
    const certInput = document.getElementById('cert-player-name');
    if (certInput && !certInput.value) {
      certInput.value = this.state.playerName;
    }
  }

  // Bind Navigation and Global Events
  bindEvents() {
    // Navigation Tabs
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        const targetView = btn.dataset.view;
        this.switchView(targetView);
      });
    });

    // Sound Toggle
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.audio.muted = !this.audio.muted;
        soundBtn.innerHTML = this.audio.muted ? '🔇 Muted' : '🔊 Sound ON';
        if (!this.audio.muted) this.audio.playClick();
      });
    }

    // Certificate Name Change
    const certNameInput = document.getElementById('cert-player-name');
    if (certNameInput) {
      certNameInput.addEventListener('input', (e) => {
        this.state.playerName = e.target.value || "Cyber Sleuth";
        this.saveState();
      });
    }

    const printCertBtn = document.getElementById('btn-print-cert');
    if (printCertBtn) {
      printCertBtn.addEventListener('click', () => {
        this.audio.playFanfare();
        window.print();
      });
    }
  }

  switchView(viewId) {
    document.querySelectorAll('.nav-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === viewId);
    });

    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const activeSec = document.getElementById(`view-${viewId}`);
    if (activeSec) {
      activeSec.classList.add('active');
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    if (viewId === 'minigame') {
      this.initRapidMinigame();
    }
  }

  // ==========================================================================
  // LESSONS VIEW & MODAL READER
  // ==========================================================================

  renderLessons() {
    const grid = document.getElementById('lessons-grid');
    if (!grid) return;

    grid.innerHTML = ACADEMY_DATA.lessons.map(lesson => {
      const redFlagsHtml = lesson.redFlags.slice(0, 3).map(rf => `
        <li><strong>${rf.label}:</strong> ${rf.desc}</li>
      `).join('');

      return `
        <div class="lesson-card" style="--card-color: ${lesson.color}">
          <div class="lesson-card-inner">
            <div class="card-top">
              <div class="lesson-icon">${lesson.icon}</div>
              <span class="lesson-badge">${lesson.tag} • ${lesson.readTime}</span>
            </div>
            <h3>${lesson.title}</h3>
            <p>${lesson.summary}</p>
            <div class="red-flags-preview">
              <h4>🚩 Key Red Flags</h4>
              <ul class="flags-list">
                ${redFlagsHtml}
              </ul>
            </div>
            <div class="pro-tip-box">
              ${lesson.proTip}
            </div>
          </div>
          <div class="lesson-actions">
            <button class="btn-sm-read" onclick="app.openLessonModal('${lesson.id}')">
              <span>📖 Read Full Lesson</span>
            </button>
            <button class="btn-sm-primary" onclick="app.launchQuiz('${lesson.quizId}')">
              <span>🎯 Quiz</span>
            </button>
            <button class="btn-sm-outline" onclick="app.jumpToSimulation('${lesson.id}')">
              <span>🔍 Simulator</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  openLessonModal(lessonId) {
    this.audio.playClick();
    const lesson = ACADEMY_DATA.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const modalOverlay = document.getElementById('lesson-modal-overlay');
    const modalTitle = document.getElementById('lesson-modal-title');
    const modalTag = document.getElementById('lesson-modal-tag');
    const modalBody = document.getElementById('lesson-modal-body');
    const modalActions = document.getElementById('lesson-modal-actions');

    if (!modalOverlay) return;

    modalTitle.innerHTML = `${lesson.icon} ${lesson.title}`;
    modalTag.innerText = `${lesson.tag} • ${lesson.readTime}`;
    modalBody.innerHTML = `
      <div class="lesson-modal-rich-text">
        ${lesson.fullContent}
      </div>
      <div class="lesson-modal-flags-highlight">
        <h3>🚩 Summary Red Flags Checklist:</h3>
        <ul>
          ${lesson.redFlags.map(rf => `<li><strong>${rf.label}:</strong> ${rf.desc}</li>`).join('')}
        </ul>
      </div>
    `;

    modalActions.innerHTML = `
      <button class="btn-primary" onclick="app.closeLessonModal(); app.launchQuiz('${lesson.quizId}')">
        🎯 Take Module Quiz (+150 XP)
      </button>
      <button class="btn-secondary" onclick="app.closeLessonModal(); app.jumpToSimulation('${lesson.id}')">
        🔍 Practice in Simulator
      </button>
      <button class="btn-secondary" onclick="app.closeLessonModal()">
        ✖ Close Lesson
      </button>
    `;

    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  closeLessonModal() {
    const modalOverlay = document.getElementById('lesson-modal-overlay');
    if (modalOverlay) modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  jumpToSimulation(lessonId) {
    this.audio.playClick();
    this.switchView('simulator');
    let targetIndex = 0;
    if (lessonId === 'social') targetIndex = 1;
    else if (lessonId === 'smishing') targetIndex = 2;
    else if (lessonId === 'malware') targetIndex = 4;
    else if (lessonId === 'phishing') targetIndex = 0;
    else if (lessonId === 'ai_scams') targetIndex = 3;

    this.renderSimulatorScenario(targetIndex);
  }

  // ==========================================================================
  // SIMULATOR ARENA
  // ==========================================================================

  renderSimulatorTabs() {
    const tabsContainer = document.getElementById('sim-scenarios-pills');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = ACADEMY_DATA.simulatorScenarios.map((scen, idx) => `
      <button class="scenario-pill-btn ${idx === this.currentScenarioIndex ? 'active' : ''}" onclick="app.renderSimulatorScenario(${idx})">
        <span>${scen.category}</span>
      </button>
    `).join('');
  }

  renderSimulatorScenario(index) {
    this.audio.playClick();
    this.currentScenarioIndex = index;
    this.currentInspectedHotspots.clear();

    // Update pill highlights
    document.querySelectorAll('.scenario-pill-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });

    const scen = ACADEMY_DATA.simulatorScenarios[index];
    const previewContainer = document.getElementById('simulator-window-stage');
    const resultModal = document.getElementById('verdict-result-modal');
    if (resultModal) resultModal.style.display = 'none';

    // Update counter
    const flagsCountEl = document.getElementById('red-flags-detected-count');
    if (flagsCountEl) flagsCountEl.innerText = `0 / ${scen.hotspots.length} Red Flags Discovered`;

    // Render Window Framework
    let headerMeta = '';
    if (scen.type === 'email') {
      headerMeta = `
        <div class="sim-email-meta">
          <div class="sim-meta-row">
            <span class="sim-label">From:</span>
            <span class="sim-sender-tag hotspot-trigger" data-spot="spot_sender">${scen.senderName} &lt;${scen.senderEmail}&gt;</span>
          </div>
          <div class="sim-meta-row">
            <span class="sim-label">To:</span>
            <span style="color:#94A3B8;">${scen.recipient}</span>
          </div>
          <div class="sim-meta-row">
            <span class="sim-label">Subject:</span>
            <span class="sim-subject-tag">${scen.subject}</span>
          </div>
        </div>
      `;
    } else if (scen.type === 'dm') {
      headerMeta = `
        <div style="display:flex; align-items:center; gap:12px; padding:14px; background:rgba(255,255,255,0.04); border-radius:8px; margin-bottom:16px;">
          <div style="font-size:26px;">${scen.avatarIcon || '💬'}</div>
          <div>
            <div style="font-weight:700; font-size:15px; color:#F3F4F6;">${scen.senderName}</div>
            <div style="font-size:12px; color:#94A3B8;">${scen.senderHandle} • Active Now</div>
          </div>
        </div>
      `;
    } else if (scen.type === 'sms') {
      headerMeta = `
        <div class="sim-sms-sender-info" style="text-align:center; padding:12px; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="font-size:28px;">${scen.avatarIcon || '📱'}</div>
          <div style="font-weight:700; font-size:14px; color:#F8FAFC;">${scen.senderName}</div>
          <div style="font-size:11px; color:#9CA3AF;">Text Message • ${scen.date}</div>
        </div>
      `;
    }

    previewContainer.innerHTML = `
      <div class="sim-window-header">
        <div class="window-dots">
          <div class="dot red"></div>
          <div class="dot yellow"></div>
          <div class="dot green"></div>
        </div>
        <div class="window-title">${scen.title} [Interactive Detective Mode]</div>
        <div style="font-size:12px; color:#FCD34D; font-weight:700;">Difficulty: ${scen.difficulty}</div>
      </div>
      <div class="sim-email-layout">
        ${headerMeta}
        ${scen.contentHtml}
      </div>
      <div class="url-preview-bar" id="live-url-preview-bar">
        <span>🔗 Link Destination Preview:</span>
        <span class="target-url" id="target-url-label">Hover over buttons or links in the message to preview destination!</span>
      </div>
    `;

    // Attach Hotspot Listeners and Hover Previews
    this.attachSimulatorInteractions(scen, previewContainer);
  }

  attachSimulatorInteractions(scen, container) {
    const urlLabel = document.getElementById('target-url-label');

    // Hover URL previews
    const hoverElements = container.querySelectorAll('[data-hover-url]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (urlLabel) urlLabel.innerText = el.dataset.hoverUrl;
      });
      el.addEventListener('mouseleave', () => {
        if (urlLabel) urlLabel.innerText = "Hover over buttons or links in the message to preview destination!";
      });
    });

    // Make target hotspot elements clickable
    scen.hotspots.forEach(hotspot => {
      const matchEls = container.querySelectorAll(hotspot.selector);
      matchEls.forEach(el => {
        el.classList.add('hotspot-clickable');
        el.title = "Click to inspect red flag";
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          this.inspectHotspot(hotspot, el, scen);
        });
      });
    });
  }

  inspectHotspot(hotspot, el, scen) {
    this.audio.playCorrect();
    el.classList.add('inspected');
    this.currentInspectedHotspots.add(hotspot.id);

    // Update count
    const flagsCountEl = document.getElementById('red-flags-detected-count');
    if (flagsCountEl) {
      flagsCountEl.innerText = `${this.currentInspectedHotspots.size} / ${scen.hotspots.length} Red Flags Discovered`;
    }

    this.unlockBadge('badge_first_scan');
    this.showToast(`🔍 ${hotspot.title}: ${hotspot.explanation}`, '🚩');

    // Sparkle confetti on hotspot click
    const rect = el.getBoundingClientRect();
    this.confetti.burst(rect.left + rect.width / 2, rect.top, 25);
  }

  submitVerdict(userChoseScam) {
    const scen = ACADEMY_DATA.simulatorScenarios[this.currentScenarioIndex];
    const isCorrect = (userChoseScam === scen.isScam);
    const resultModal = document.getElementById('verdict-result-modal');
    if (!resultModal) return;

    resultModal.style.display = 'block';
    resultModal.className = `verdict-result-modal ${isCorrect ? 'correct' : 'incorrect'}`;

    if (isCorrect) {
      this.audio.playCorrect();
      this.addXp(100, resultModal);
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);

      resultModal.innerHTML = `
        <div class="result-title" style="color: var(--green-neon)">
          <span>✅ BRILLIANT DETECTIVE WORK!</span>
        </div>
        <div class="result-explanation">
          ${scen.verdictReason}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <span style="color:#A7F3D0; font-weight:700;">+100 XP Awarded!</span>
          <button class="btn-primary" onclick="app.nextScenario()">Next Scenario ➡️</button>
        </div>
      `;
    } else {
      this.audio.playWrong();
      resultModal.innerHTML = `
        <div class="result-title" style="color: var(--red-neon)">
          <span>❌ NOT QUITE! CAUGHT IN THE TRAP!</span>
        </div>
        <div class="result-explanation">
          ${scen.verdictReason}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <span style="color:#FECACA; font-weight:700;">Review the red flags above and try again!</span>
          <button class="btn-secondary" onclick="app.nextScenario()">Next Scenario ➡️</button>
        </div>
      `;
    }

    resultModal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  nextScenario() {
    const nextIdx = (this.currentScenarioIndex + 1) % ACADEMY_DATA.simulatorScenarios.length;
    this.renderSimulatorScenario(nextIdx);
  }

  // ==========================================================================
  // RAPID-FIRE MINI-GAME
  // ==========================================================================

  initRapidMinigame() {
    this.rapidIndex = 0;
    this.rapidScore = 0;
    this.rapidStreak = 0;
    this.renderRapidCard();
  }

  renderRapidCard() {
    const hudScore = document.getElementById('rapid-score-val');
    const hudStreak = document.getElementById('rapid-streak-val');
    const hudCardNum = document.getElementById('rapid-card-number');
    const container = document.getElementById('rapid-card-container');
    const gameOverContainer = document.getElementById('rapid-game-over');

    if (hudScore) hudScore.innerText = this.rapidScore;
    if (hudStreak) hudStreak.innerText = this.rapidStreak;

    if (this.rapidIndex >= ACADEMY_DATA.rapidScenarios.length) {
      if (container) container.style.display = 'none';
      if (gameOverContainer) {
        gameOverContainer.style.display = 'block';
        const finalScoreEl = document.getElementById('rapid-final-score');
        if (finalScoreEl) finalScoreEl.innerText = `${this.rapidScore} / ${ACADEMY_DATA.rapidScenarios.length * 10}`;
      }
      this.audio.playFanfare();
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 100);
      return;
    }

    if (container) container.style.display = 'block';
    if (gameOverContainer) gameOverContainer.style.display = 'none';

    if (hudCardNum) hudCardNum.innerText = `Card ${this.rapidIndex + 1} of ${ACADEMY_DATA.rapidScenarios.length}`;

    const card = ACADEMY_DATA.rapidScenarios[this.rapidIndex];
    const textEl = document.getElementById('rapid-card-text');
    if (textEl) {
      textEl.innerText = card.scenario;
    }

    const flashcardEl = document.getElementById('rapid-flashcard-box');
    if (flashcardEl) {
      flashcardEl.className = 'rapid-flashcard';
    }
  }

  submitRapidChoice(userSaidScam) {
    if (this.rapidIndex >= ACADEMY_DATA.rapidScenarios.length) return;

    const card = ACADEMY_DATA.rapidScenarios[this.rapidIndex];
    const flashcardEl = document.getElementById('rapid-flashcard-box');
    const isCorrect = (userSaidScam === card.isScam);

    if (flashcardEl) {
      flashcardEl.classList.add(userSaidScam ? 'swipe-left' : 'swipe-right');
    }

    if (isCorrect) {
      this.audio.playCorrect();
      this.rapidScore += 10;
      this.rapidStreak += 1;
      this.addXp(20);

      if (this.rapidStreak >= 5) {
        this.unlockBadge('badge_speed_demon');
      }
    } else {
      this.audio.playWrong();
      this.rapidStreak = 0;
      this.showToast(`Tip: ${card.tip}`, '💡');
    }

    setTimeout(() => {
      this.rapidIndex++;
      this.renderRapidCard();
    }, 280);
  }

  // ==========================================================================
  // QUIZ ARENA
  // ==========================================================================

  renderQuizSelectionBar() {
    const selectorBar = document.getElementById('quiz-modules-selector');
    if (!selectorBar) return;

    const quizKeys = Object.keys(ACADEMY_DATA.quizzes);
    selectorBar.innerHTML = quizKeys.map((k, idx) => {
      const q = ACADEMY_DATA.quizzes[k];
      return `
        <button class="quiz-nav-pill ${k === this.activeQuizKey ? 'active' : ''}" onclick="app.launchQuiz('${k}', true)">
          <span>${q.title.split(':')[0]}</span>
        </button>
      `;
    }).join('');
  }

  launchQuiz(quizId, shouldScroll = true) {
    this.audio.playClick();
    const quiz = ACADEMY_DATA.quizzes[quizId];
    if (!quiz) return;

    this.activeQuiz = quiz;
    this.activeQuizKey = quizId;
    this.activeQuizQIndex = 0;
    this.activeQuizScore = 0;

    this.renderQuizSelectionBar();
    if (shouldScroll) {
      this.switchView('quiz');
    }
    this.renderCurrentQuizQuestion();
  }

  renderCurrentQuizQuestion() {
    const quiz = this.activeQuiz;
    if (!quiz) return;

    const quizCardContent = document.getElementById('quiz-card-content');
    if (!quizCardContent) return;

    if (this.activeQuizQIndex >= quiz.questions.length) {
      this.renderQuizResults();
      return;
    }

    const q = quiz.questions[this.activeQuizQIndex];

    quizCardContent.innerHTML = `
      <div class="quiz-top-info">
        <h3 id="quiz-title-display" style="font-family: var(--font-heading); font-size: 18px; font-weight: 800; color: #E2E8F0;">
          ${quiz.title}
        </h3>
        <span class="quiz-question-number" id="quiz-q-progress">Question ${this.activeQuizQIndex + 1} of ${quiz.questions.length}</span>
      </div>

      <h4 class="quiz-question-text" id="quiz-q-text">
        ${q.question}
      </h4>

      <div class="quiz-options-list" id="quiz-options-container">
        ${q.options.map((opt, i) => `
          <button class="quiz-option-btn" onclick="app.submitQuizAnswer(${i})">
            <span style="color:var(--cyan-neon); font-weight:800;">${String.fromCharCode(65 + i)}.</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      <div class="quiz-feedback-box" id="quiz-feedback-box" style="display:none;"></div>

      <div style="text-align: right; margin-top: 20px;">
        <button class="btn-primary" id="quiz-next-btn" style="display: none;" onclick="app.nextQuizQuestion()">
          <span>Next Question ➡️</span>
        </button>
      </div>
    `;
  }

  submitQuizAnswer(selectedIndex) {
    const q = this.activeQuiz.questions[this.activeQuizQIndex];
    const isCorrect = (selectedIndex === q.correctIndex);
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const nextBtn = document.getElementById('quiz-next-btn');
    const optionButtons = document.querySelectorAll('.quiz-option-btn');

    optionButtons.forEach((btn, idx) => {
      btn.classList.add('disabled');
      btn.style.pointerEvents = 'none';
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      this.audio.playCorrect();
      this.activeQuizScore++;
      this.addXp(30);
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.borderColor = 'var(--green-neon)';
        feedbackBox.innerHTML = `<strong>✅ Correct!</strong> ${q.explanation}`;
      }
    } else {
      this.audio.playWrong();
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.borderColor = 'var(--red-neon)';
        feedbackBox.innerHTML = `<strong>❌ Not quite!</strong> ${q.explanation}`;
      }
    }

    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
    }
  }

  nextQuizQuestion() {
    this.activeQuizQIndex++;
    this.renderCurrentQuizQuestion();
  }

  renderQuizResults() {
    const quiz = this.activeQuiz;
    const isPassed = this.activeQuizScore >= Math.ceil(quiz.questions.length * 0.6);
    const quizCard = document.getElementById('quiz-card-content');
    if (!quizCard) return;

    if (isPassed) {
      this.audio.playFanfare();
      this.addXp(quiz.xpReward || 150);
      if (quiz.badgeReward) {
        this.unlockBadge(quiz.badgeReward);
      }
      this.unlockBadge('badge_sleuth_cert');
      this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 100);

      quizCard.innerHTML = `
        <div style="text-align:center; padding:24px;">
          <div style="font-size:64px; margin-bottom:16px;">🏆</div>
          <h2 style="font-family:var(--font-heading); font-size:28px; margin-bottom:12px; color:var(--cyan-neon);">
            Quiz Passed with Flying Colors!
          </h2>
          <p style="font-size:16px; color:#E2E8F0; margin-bottom:24px;">
            You scored <strong>${this.activeQuizScore} / ${quiz.questions.length}</strong>! You earned <strong>+${quiz.xpReward} XP</strong>.
          </p>
          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <button class="btn-primary" onclick="app.switchView('badges')">🎓 View Certificate & Badges</button>
            <button class="btn-secondary" onclick="app.switchView('lessons')">📚 More Lessons</button>
          </div>
        </div>
      `;
    } else {
      this.audio.playWrong();
      quizCard.innerHTML = `
        <div style="text-align:center; padding:24px;">
          <div style="font-size:64px; margin-bottom:16px;">📚</div>
          <h2 style="font-family:var(--font-heading); font-size:28px; margin-bottom:12px; color:#F87171;">
            Almost there!
          </h2>
          <p style="font-size:16px; color:#E2E8F0; margin-bottom:24px;">
            You scored <strong>${this.activeQuizScore} / ${quiz.questions.length}</strong>. Review the lesson tips and try again to unlock your badge!
          </p>
          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <button class="btn-primary" onclick="app.launchQuiz('${this.activeQuizKey}')">🔄 Retake Quiz</button>
            <button class="btn-secondary" onclick="app.switchView('lessons')">📖 Review Lessons</button>
          </div>
        </div>
      `;
    }
  }

  // ==========================================================================
  // BADGES & SURVIVAL
  // ==========================================================================

  renderBadges() {
    const grid = document.getElementById('badges-grid');
    if (!grid) return;

    grid.innerHTML = ACADEMY_DATA.badges.map(b => {
      const isUnlocked = !!this.state.badgesUnlocked[b.id];
      return `
        <div class="badge-card ${isUnlocked ? 'unlocked' : ''}">
          <div class="badge-big-icon">${b.icon}</div>
          <div>
            <h4>${b.name}</h4>
            <p>${b.desc}</p>
            <span style="font-size:10px; font-weight:800; color:${isUnlocked ? 'var(--amber-neon)' : '#6B7280'}; text-transform:uppercase; margin-top:4px; display:block;">
              ${isUnlocked ? '✅ UNLOCKED' : '🔒 LOCKED'}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  renderEmergencyChecklist() {
    const container = document.getElementById('checklist-grid');
    if (!container) return;

    container.innerHTML = ACADEMY_DATA.emergencyChecklist.map((item, idx) => `
      <div class="checklist-card">
        <div class="step-num">${idx + 1}</div>
        <div class="step-info">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span class="step-action-tag">👉 ${item.action}</span>
        </div>
      </div>
    `).join('');
  }
}

// Global exposure
window.app = new ScamAcademyApp();

// Reliable startup
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.app.init());
} else {
  window.app.init();
}
