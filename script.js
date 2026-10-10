/* ==========================================================================
   JUVENILE SKILL & EMPLOYMENT LINKAGE PORTAL — INTERACTIONS

   EDITABLE DATA:
   - Demo credentials
   - Pathway messages
   - Skills
   - Stakeholders
   - Logo path
   ========================================================================== */

(function () {
  'use strict';

  /* ============================================================
     EDITABLE LOGIN CONFIGURATION
     ============================================================ */

  var DEMO_USERNAME = 'himanshugavhane';
  var DEMO_PASSWORD = '12345678';
  var SESSION_KEY = 'juvenilePortalDemoAuthenticated';
  var PO_SESSION_KEY = 'phoenixProbationOfficerAuthenticated';
  var PO_USERNAME = 'probation.officer';
  var PO_PASSWORD = 'PHX-PO-2026';

  var currentCaptcha = '7K4P2';


  /* ============================================================
     BASIC HELPERS
     ============================================================ */

  function byId(id) {
    return document.getElementById(id);
  }

  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }

  function setMessage(message, type) {
    var messageBox = byId('loginMessage');

    if (!messageBox) return;

    messageBox.textContent = message;
    messageBox.className = 'login-message ' + (type || '');
  }




  /* ============================================================
     ROLE-BASED PORTAL ACCESS
     ============================================================ */

  function isPOAuthenticated() {
    return sessionStorage.getItem(PO_SESSION_KEY) === 'true';
  }

  function showRolePortal() {
    var portal = byId('rolePortal');
    if (!portal) return;
    portal.classList.remove('is-hidden');
    portal.setAttribute('aria-hidden', 'false');
    portal.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function hideRolePortal() {
    var portal = byId('rolePortal');
    if (!portal) return;
    portal.classList.add('is-hidden');
    portal.setAttribute('aria-hidden', 'true');
    closePortalLogin();
  }

  window.openRolePortal = function (event) {
    if (event) event.preventDefault();
    if (isPOAuthenticated()) {
      var admin = byId('admin');
      if (admin) admin.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return false;
    }
    showRolePortal();
    return false;
  };

  function portalForm(role) {
    var isPO = role === 'po';
    return '' +
      '<div class="portal-login-head">' +
        '<div class="portal-login-icon">' + (isPO ? '▣' : '◉') + '</div>' +
        '<div><span>' + (isPO ? 'PROBATION OFFICER' : 'JUVENILE / PARTICIPANT') + '</span>' +
        '<h3>' + (isPO ? 'Probation Officer Login' : 'Juvenile Login') + '</h3>' +
        '<p>' + (isPO ? 'Authorised access to monitoring and follow-up functions.' : 'Access your personal PHOENIX learning and opportunity record.') + '</p></div>' +
      '</div>' +
      '<form onsubmit="return submitPortalLogin(event, \'${role}\')">'.replace('${role}', role) +
        '<label>Username / ID</label>' +
        '<input id="portalUsername" type="text" placeholder="Enter username or ID" autocomplete="username" required>' +
        '<label>Password</label>' +
        '<input id="portalPassword" type="password" placeholder="Enter password" autocomplete="current-password" required>' +
        '<label>Captcha</label>' +
        '<div class="portal-captcha-row"><div class="portal-captcha" id="portalCaptcha">' + currentCaptcha + '</div><button type="button" onclick="refreshPortalCaptcha()">↻</button><input id="portalCaptchaInput" type="text" placeholder="Enter code" required></div>' +
        '<button class="portal-submit-btn" type="submit">Continue to ' + (isPO ? 'Officer Portal' : 'My Journey') + '</button>' +
        '<div id="portalLoginMessage" class="login-message"></div>' +
        '<p class="portal-demo-note">Demo: ' + (isPO ? PO_USERNAME + ' / ' + PO_PASSWORD : DEMO_USERNAME + ' / ' + DEMO_PASSWORD) + '</p>' +
      '</form>';
  }

  window.openJuvenileLogin = function () {
    var panel = byId('portalLoginPanel');
    var content = byId('portalLoginContent');
    if (!panel || !content) return;
    content.innerHTML = portalForm('juvenile');
    panel.classList.remove('is-hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  window.openPOLogin = function () {
    var panel = byId('portalLoginPanel');
    var content = byId('portalLoginContent');
    if (!panel || !content) return;
    content.innerHTML = portalForm('po');
    panel.classList.remove('is-hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  window.closePortalLogin = function () {
    var panel = byId('portalLoginPanel');
    if (panel) panel.classList.add('is-hidden');
  };

  window.refreshPortalCaptcha = function () {
    var characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    currentCaptcha = '';
    for (var i = 0; i < 5; i += 1) currentCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
    var code = byId('portalCaptcha');
    if (code) code.textContent = currentCaptcha;
    var input = byId('portalCaptchaInput');
    if (input) input.value = '';
  };

  window.submitPortalLogin = function (event, role) {
    event.preventDefault();
    var username = byId('portalUsername').value.trim();
    var password = byId('portalPassword').value;
    var captcha = byId('portalCaptchaInput').value.trim().toUpperCase();
    var message = byId('portalLoginMessage');
    if (captcha !== currentCaptcha) {
      message.textContent = 'The CAPTCHA does not match. Please try again.';
      message.className = 'login-message error';
      return false;
    }
    if (role === 'po') {
      if (username !== PO_USERNAME || password !== PO_PASSWORD) {
        message.textContent = 'Invalid Probation Officer credentials.';
        message.className = 'login-message error';
        return false;
      }
      sessionStorage.setItem(PO_SESSION_KEY, 'true');
      var adminSection = byId('admin');
      if (adminSection) adminSection.classList.remove('is-hidden');
      hideRolePortal();
      byId('admin').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return false;
    }
    if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      message.textContent = 'Invalid juvenile login credentials.';
      message.className = 'login-message error';
      return false;
    }
    sessionStorage.setItem(SESSION_KEY, 'true');
    updateProtectedSections(true);
    closePortalLogin();
    byId('profile').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return false;
  };


  /* ============================================================
     PROTECTED PROFILE / PROGRESS
     ============================================================ */

  var DEMO_PROFILE = {
    name: 'Himanshu Gavhane',
    joinDate: '03 Jan 2026',
    basicDetails: 'Age 19, District: Pune',
    education: 'School-level / vocational readiness',
    trainingStatus: 'In Progress',
    preferredSector: 'General vocational roles',
    skillMatch: 'Retail, Hospitality, Digital Support',
    eligibility: 'Restricted for specified roles',
    metrics: {
      applied: 5,
      inProgress: 2,
      completed: 3,
      remaining: 1
    }
  };

  var DEMO_PROGRESS = {
    completedHours: 165,
    certificates: 2,
    remainingHours: 135,
    courses: 3,
    skills: [
      { name: 'Communication', value: 92 },
      { name: 'Digital Basics', value: 100 },
      { name: 'Workplace Skills', value: 74 },
      { name: 'Customer Readiness', value: 66 }
    ]
  };

  function renderAuthenticatedDashboard() {
    var detailsEl = document.querySelector('.candidate-details');
    var metricsEl = document.querySelector('.candidate-metrics');
    var progressGridEl = document.querySelector('#privateProgress .progress-grid');
    var progressPanelEl = document.querySelector('#privateProgress .skill-progress-panel');

    if (detailsEl) {
      detailsEl.innerHTML = [
        '<div><span>Candidate Name</span><strong>' + DEMO_PROFILE.name + '</strong></div>',
        '<div><span>Join Date</span><strong>' + DEMO_PROFILE.joinDate + '</strong></div>',
        '<div><span>Basic Details</span><strong>' + DEMO_PROFILE.basicDetails + '</strong></div>',
        '<div><span>Education</span><strong>' + DEMO_PROFILE.education + '</strong></div>',
        '<div><span>Training Status</span><strong>' + DEMO_PROFILE.trainingStatus + '</strong></div>',
        '<div><span>Preferred Sector</span><strong>' + DEMO_PROFILE.preferredSector + '</strong></div>',
        '<div><span>Skill Match</span><strong>' + DEMO_PROFILE.skillMatch + '</strong></div>',
        '<div><span>Eligibility</span><strong class="restricted">' + DEMO_PROFILE.eligibility + '</strong></div>'
      ].join('');
    }

    if (metricsEl) {
      metricsEl.innerHTML = [
        '<div class="metric-box"><span class="metric-label">Courses Applied</span><strong>' + DEMO_PROFILE.metrics.applied + '</strong></div>',
        '<div class="metric-box"><span class="metric-label">In Progress</span><strong>' + DEMO_PROFILE.metrics.inProgress + '</strong></div>',
        '<div class="metric-box"><span class="metric-label">Completed</span><strong>' + DEMO_PROFILE.metrics.completed + '</strong></div>',
        '<div class="metric-box"><span class="metric-label">Remaining</span><strong>' + DEMO_PROFILE.metrics.remaining + '</strong></div>'
      ].join('');
    }

    if (progressGridEl) {
      progressGridEl.innerHTML = [
        '<div class="progress-stat"><span class="progress-number">' + DEMO_PROGRESS.completedHours + '</span><span class="progress-unit">Hours</span><p>Completed in current learning record</p></div>',
        '<div class="progress-stat"><span class="progress-number">' + DEMO_PROGRESS.certificates + '</span><span class="progress-unit">Certificates</span><p>Verified course certificates</p></div>',
        '<div class="progress-stat"><span class="progress-number">' + DEMO_PROGRESS.remainingHours + '</span><span class="progress-unit">Hours</span><p>Remaining in Company Practices</p></div>',
        '<div class="progress-stat"><span class="progress-number">' + DEMO_PROGRESS.courses + '</span><span class="progress-unit">Courses</span><p>Recorded learning modules</p></div>'
      ].join('');
    }

    if (progressPanelEl) {
      progressPanelEl.innerHTML = [
        '<div class="panel-header"><h3>Skill Progress</h3><span>Updated Today</span></div>',
        DEMO_PROGRESS.skills.map(function (skill) {
          return '<div class="progress-track-row"><label>' + skill.name + '</label><div class="progress-bar"><span style="width: ' + skill.value + '%;"></span></div><strong>' + skill.value + '%</strong></div>';
        }).join('')
      ].join('');
    }
  }

  function updateProtectedSections(authenticated) {
    var profileLocked = byId('profileLocked');
    var privateProfile = byId('privateProfile');
    var progressLocked = byId('progressLocked');
    var privateProgress = byId('privateProgress');

    if (profileLocked) {
      profileLocked.classList.toggle('is-hidden', authenticated);
    }

    if (privateProfile) {
      privateProfile.classList.toggle('is-hidden', !authenticated);
      privateProfile.style.display = authenticated ? 'block' : 'none';
    }

    if (progressLocked) {
      progressLocked.classList.toggle('is-hidden', authenticated);
    }

    if (privateProgress) {
      privateProgress.classList.toggle('is-hidden', !authenticated);
      privateProgress.style.display = authenticated ? 'block' : 'none';
    }

    var profileIntro = byId('profileIntro');
    if (profileIntro) {
      profileIntro.textContent = authenticated
        ? 'Authorized candidate profile for ' + DEMO_USERNAME + '.'
        : 'Candidate information is available only after successful login.';
    }

    var progressIntro = byId('progressIntro');
    if (progressIntro) {
      progressIntro.textContent = authenticated
        ? 'Authorized learning progress for ' + DEMO_USERNAME + '.'
        : 'Login is required to view individual learning progress.';
    }

    if (authenticated) {
      renderAuthenticatedDashboard();
    }
  }


  /* ============================================================
     LOGGED-IN STATE
     ============================================================ */

  function showLoggedInState() {

    var loginCard = document.querySelector('.login-card');

    if (!loginCard) return;

    loginCard.innerHTML =
      '<div class="login-header">' +
        '<div class="login-icon">✓</div>' +
        '<div>' +
          '<h3>Welcome back!</h3>' +
          '<p>Your learning journey is ready to continue. ' 
           + DEMO_USERNAME + '</p>' +
        '</div>' +
      '</div>' +

      '<p class="login-message success">' +
        'Your protected profile and progress record are unlocked.' +
      '</p>' +

      '<button class="login-button logout-btn" ' +
      'type="button" onclick="logout()">' +
        'Logout' +
      '</button>';
  }


  /* ============================================================
     LOGIN FORM
     ============================================================ */

  function showLoginForm() {

    var loginCard = document.querySelector('.login-card');

    if (!loginCard) return;

    loginCard.innerHTML =
      '<div class="login-header">' +
        '<div class="login-icon">👤</div>' +
        '<div>' +
          '<h3>User Login</h3>' +
          '<p>Candidate / Authorized User</p>' +
        '</div>' +
      '</div>' +

      '<form id="loginForm" onsubmit="return doLogin(event)">' +

        '<label>Username</label>' +
        '<input id="username" type="text" ' +
        'placeholder="Enter username" ' +
        'autocomplete="username">' +

        '<label>Password</label>' +
        '<input id="password" type="password" ' +
        'placeholder="Enter password" ' +
        'autocomplete="current-password">' +

        '<label>Captcha</label>' +

        '<div class="captcha-row">' +

          '<div class="captcha" id="captchaCode">' +
            currentCaptcha +
          '</div>' +

          '<button type="button" ' +
          'class="refresh-captcha" ' +
          'onclick="refreshCaptcha()">' +
            '↻' +
          '</button>' +

          '<input id="captchaInput" type="text" ' +
          'placeholder="Enter captcha">' +

        '</div>' +

        '<button class="login-button" type="submit">' +
          'Login' +
        '</button>' +

        '<div id="loginMessage" class="login-message"></div>' +

        '<div class="login-links">' +

          '<a href="#" onclick="' +
          'alert(\'For the demonstration, use the credentials supplied with the prototype.\');' +
          'return false;">' +
            'Forgot Password?' +
          '</a>' +

          '<a href="#about">' +
            'Help / Guidelines' +
          '</a>' +

        '</div>' +

      '</form>';
  }


  /* ============================================================
     CAPTCHA
     ============================================================ */

  window.refreshCaptcha = function () {

    var characters =
      'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

    var nextCaptcha = '';

    for (var i = 0; i < 5; i += 1) {

      nextCaptcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );

    }

    currentCaptcha = nextCaptcha;

    var captchaCode = byId('captchaCode');

    if (captchaCode) {
      captchaCode.textContent = currentCaptcha;
    }

    var captchaInput = byId('captchaInput');

    if (captchaInput) {
      captchaInput.value = '';
    }

    setMessage(
      'Captcha refreshed. Please enter the new code.',
      ''
    );
  };


  /* ============================================================
     LOGIN
     ============================================================ */

  window.doLogin = function (event) {

    if (event) {
      event.preventDefault();
    }

    var username = byId('username').value.trim();
    var password = byId('password').value;
    var captcha =
      byId('captchaInput').value.trim().toUpperCase();


    /* USERNAME + PASSWORD CHECK */

    if (
      username !== DEMO_USERNAME ||
      password !== DEMO_PASSWORD
    ) {

      setMessage(
        'Invalid username or password. Please try again.',
        'error'
      );

      return false;
    }


    /* CAPTCHA CHECK */

    if (captcha !== currentCaptcha) {

      setMessage(
        'The CAPTCHA does not match. Please try again.',
        'error'
      );

      return false;
    }


    /* LOGIN SUCCESS */

    sessionStorage.setItem(
      SESSION_KEY,
      'true'
    );

    updateProtectedSections(true);

    showLoggedInState();

    window.location.hash = 'profile';

    byId('profile').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    return false;
  };


  /* ============================================================
     REQUIRE LOGIN
     ============================================================ */

  window.requireLogin = function (event) {

    if (isAuthenticated()) {
      return true;
    }

    if (event) {
      event.preventDefault();
    }

    focusLogin();

    setMessage(
      'Please log in to view protected candidate information.',
      'error'
    );

    return false;
  };


  /* ============================================================
     FOCUS LOGIN
     ============================================================ */

  window.focusLogin = function () {

    var username = byId('username');

    if (username) {

      byId('home').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      window.setTimeout(function () {
        username.focus();
      }, 350);
    }
  };


  /* ============================================================
     LOGOUT
     ============================================================ */

  window.logout = function () {

    sessionStorage.removeItem(
      SESSION_KEY
    );

    updateProtectedSections(false);

    showLoginForm();

    byId('home').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };


  /* ============================================================
     INITIAL LOGIN STATE
     ============================================================ */

  updateProtectedSections(
    isAuthenticated()
  );

  if (isAuthenticated()) {
    showLoggedInState();
  }
  window.addEventListener('hashchange', function () {
    if (window.location.hash === '#admin' && !isPOAuthenticated()) {
      showRolePortal();
      window.history.replaceState(null, '', window.location.pathname + window.location.search + '#rolePortal');
    }
  });

}());



/* ==========================================================================
   DYNAMIC PORTAL CONTENT
   ========================================================================== */

(function () {

  'use strict';


  /* ============================================================
     EDITABLE LOGO
     ============================================================ */

  var logoPath = 'phoenix-logo(1).png';

  var brandEmblem =
    document.querySelector('.brand .emblem');

  if (brandEmblem) {

    brandEmblem.innerHTML =
      '<img src="' +
      logoPath +
      '" alt="Phoenix logo">';
  }


  /* ============================================================
     NAVIGATION TEXT
     ============================================================ */

  var coursesNav =
    document.querySelector(
      '.navigation a[href="#courses"]'
    );

  if (coursesNav) {
    coursesNav.textContent = 'Skills Available';
  }


  /* ============================================================
     GOVERNMENT AUTHORITY STRIP
     ============================================================ */

  var noticeBar =
    document.querySelector('.notice-bar');

  if (noticeBar) {

    noticeBar.insertAdjacentHTML(
      'beforebegin',

      '<div class="government-strip">' +

        '<div class="container authority-slider">' +

          '<div class="authority-slide-track">' +

            '<div class="authority-card">' +
              '<img src="dlsa.png" alt="DLSA logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="nalsa.jpg" alt="NALSA logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="ncpcr.png" alt="NCPCR logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="dlsa.png" alt="DLSA logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="nalsa.jpg" alt="NALSA logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="ncpcr.png" alt="NCPCR logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="dlsa.png" alt="DLSA logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="nalsa.jpg" alt="NALSA logo" class="authority-logo" />' +
            '</div>' +

            '<div class="authority-card">' +
              '<img src="ncpcr.png" alt="NCPCR logo" class="authority-logo" />' +
            '</div>' +

          '</div>' +

        '</div>' +

      '</div>'
    );


    /* ============================================================
       ANNOUNCEMENT TICKER
       ============================================================ */

    noticeBar.insertAdjacentHTML(
      'afterend',

      '<div class="announcement-ticker" ' +
      'aria-label="Portal announcements">' +

        '<div class="ticker-track">' +

          '<span>' +
            'Admissions and skill assessment pathways are being mapped' +
          '</span>' +

          '<span>' +
            'Explore job-ready skills, certification and entrepreneurship options' +
          '</span>' +

          '<span>' +
            'Candidate information remains protected behind authorized login' +
          '</span>' +

          '<span>' +
            'Age, safety and legal eligibility screening is required before placement' +
          '</span>' +

          '<span>' +
            'Admissions and skill assessment pathways are being mapped' +
          '</span>' +

          '<span>' +
            'Explore job-ready skills, certification and entrepreneurship options' +
          '</span>' +

          '<span>' +
            'Candidate information remains protected behind authorized login' +
          '</span>' +

          '<span>' +
            'Age, safety and legal eligibility screening is required before placement' +
          '</span>' +

        '</div>' +

      '</div>'
    );
  }


  /* ============================================================
     CAREER PATHWAY CAROUSEL
     ============================================================ */

  var heroButtons =
    document.querySelector('.hero-buttons');

  if (heroButtons) {

    heroButtons.insertAdjacentHTML(
      'beforebegin',

      '<div class="pathway-carousel" ' +
      'aria-label="Career pathway highlights">' +

        '<div class="pathway-window">' +

          '<div id="pathwaySlide" class="pathway-slide">' +
            '✦ Discover what you enjoy and what you are good at' +
          '</div>' +

        '</div>' +

        '<div id="pathwayDots" ' +
        'class="pathway-dots" ' +
        'aria-hidden="true"></div>' +

      '</div>'
    );
  }


  /* ============================================================
     EDITABLE PATHWAY MESSAGES
     ============================================================ */

  var pathwayMessages = [

    '✦ Discover what you enjoy and what you are good at',

    '✦ Learn practical skills through guided courses',

    '✦ Earn certificates and showcase your achievements',

    '✦ Explore career pathways, apprenticeships and opportunities',

    '✦ Keep growing with mentors and continued support'

  ];


  var dots =
    document.getElementById('pathwayDots');

  var slide =
    document.getElementById('pathwaySlide');

  var slideIndex = 0;


  if (dots && slide) {

    pathwayMessages.forEach(
      function (_, index) {

        var dot =
          document.createElement('span');

        dot.className =
          'pathway-dot' +
          (index === 0 ? ' active' : '');

        dots.appendChild(dot);
      }
    );


    window.setInterval(
      function () {

        slideIndex =
          (slideIndex + 1) %
          pathwayMessages.length;

        slide.style.transform =
          'translateY(-42px)';


        window.setTimeout(
          function () {

            slide.textContent =
              pathwayMessages[slideIndex];

            slide.style.transition =
              'none';

            slide.style.transform =
              'translateY(42px)';


            window.setTimeout(
              function () {

                slide.style.transition = '';

                slide.style.transform =
                  'translateY(0)';

              },
              30
            );


            Array.prototype.forEach.call(
              dots.children,
              function (dot, index) {

                dot.classList.toggle(
                  'active',
                  index === slideIndex
                );

              }
            );

          },
          350
        );

      },
      3300
    );
  }


  /* ============================================================
     EDITABLE SKILLS DATA
     ============================================================ */

  var skills = [

    {
     icon: '💻',
     title: 'IT & Digital Services',
     image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
     summary: 'Digital foundations for service-sector employment.',
     detail: '<strong>Certificate courses:</strong> Computer Fundamentals, Data Entry Operator, Domestic Data Entry Operator, IT Helpdesk Assistant, Digital Marketing, Graphic Design, Web Development, DTP, Video Editing, Tally / Accounting, Office Administration and Digital Literacy.',
     pathway: 'Potential livelihood: computer assistant, data-entry / office work, IT support, accounts assistant, digital-service roles.'
    },
    {
     icon: '🛍️', title: 'Retail Services',
     image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85',
     summary: 'Customer-facing operations for organised retail and MSMEs.',
     detail: '<strong>Possible courses:</strong> Retail Trainee Associate, Customer Service Associate, Sales Associate, Store Operations, Inventory / Stock Assistant, Cashier / Billing and Customer Relationship Executive.',
     pathway: 'Potential employers: retail stores, supermarkets, shopping centres, e-commerce support operations and MSMEs.'
    },
    {
     icon: '🏨', title: 'Hospitality & Tourism',
     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85',
     summary: 'Guest services and front-office readiness.',
     detail: '<strong>Possible courses:</strong> Front-office Operations, Guest Services, Food & Beverage Service and Hospitality Services.',
     pathway: 'Potential livelihood: hotel services, front-office and hospitality-support roles.'
    },
    {
     icon: '💆', title: 'Beauty & Wellness',
     image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
     summary: 'Employability and self-employment focused personal-care skills.',
     detail: '<strong>Possible certificates:</strong> Assistant Beauty Therapist, Beauty & Wellness Assistant, Hairdresser / Stylist, Nail-care Services, Makeup Services and Spa / Wellness Assistant.',
     pathway: 'Potential livelihood: salon employment, wellness support or supervised self-employment.'
    },
    {
     icon: '📋', title: 'Office & Administrative Services',
     image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85',
     summary: 'Practical pathways into organised office support roles.',
     detail: '<strong>Possible courses:</strong> Office Administration, Document Preparation, Filing & Records, Reception Support, Tally / Accounting, Digital Literacy and Workplace Communication.',
     pathway: 'Potential livelihood: office assistant, reception support, documentation and accounts-assistant roles.'
    },
    {
     icon: '🔧', title: 'Repair & Maintenance Services',
     image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85',
     summary: 'Entry-level technical skills with safety screening.',
     detail: '<strong>Possible training:</strong> Basic Electrical Work, Electronics Repair, Mobile Phone Repair, CCTV Installation, Solar-panel Installation / Maintenance and Automobile Service Assistance.',
     pathway: 'Potential livelihood: supervised repair, maintenance and workshop-support roles. Age and safety suitability must be checked.'
    },
    {
     icon: '🚚', title: 'Logistics & Delivery Support',
     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85',
     summary: 'Inventory, warehouse and e-commerce support pathways.',
     detail: '<strong>Possible courses:</strong> Inventory Clerk, Warehouse Associate, Logistics Associate, Supply-chain Assistant, Packaging Assistant and E-commerce Logistics.',
     pathway: 'Potential livelihood: stock, warehousing, packaging and logistics-support work.'
    },
    {
     icon: '☎️', title: 'Customer Service & BPO Operations',
     image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
     summary: 'Job-ready communication and customer-support skills for formal service roles.',
     detail: '<strong>Possible courses:</strong> Customer Care Executive, Call Centre Operations, CRM Basics, Voice / Non-Voice Support, Email / Chat Support, Complaint Handling and Workplace Communication.',
     pathway: 'Potential livelihood: customer-care executive, contact-centre support, helpdesk and back-office customer-service roles, subject to eligibility and safeguarding.'
    },
    {
     icon: '🏦', title: 'Banking & Financial Services Operations',
     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85',
     summary: 'Foundational banking and financial-operations skills for entry-level support roles.',
     detail: '<strong>Possible courses:</strong> Banking Operations Basics, Customer Onboarding, KYC Documentation, Digital Payments, Financial Literacy, Customer Relationship Support and Branch Operations.',
     pathway: 'Potential livelihood: banking operations and customer-support roles through eligible entry-level pathways.'
    },
    {
     icon: '🧾', title: 'Accounts, Billing & GST',
     image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85',
     summary: 'Practical finance and documentation skills for office employment.',
     detail: '<strong>Possible courses:</strong> Tally / Accounting Software, Bookkeeping Basics, GST & Invoice Basics, Billing Operations, MS Excel, Accounts Documentation and Financial Record Management.',
     pathway: 'Potential livelihood: billing assistant, accounts assistant, documentation and finance-support roles.'
    },
    {
     icon: '🛒', title: 'E-commerce & Back-office Operations',
     image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=85',
     summary: 'Digital operations, order processing and business-support skills.',
     detail: '<strong>Possible courses:</strong> E-commerce Operations Associate, Order Processing, Product Catalogue Management, CRM, MIS / Reporting, Data Handling, Document Processing and Digital Customer Support.',
     pathway: 'Potential livelihood: e-commerce operations, back-office support, order processing, catalogue and data-support roles.'
    },
    {
     icon: '🏥', title: 'Healthcare & Patient Support',
     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
     summary: 'Entry-level, supervised support skills for health-service settings.',
     detail: '<strong>Possible courses:</strong> Patient Care Assistant, Hospital Front Desk, Medical Records Basics, Appointment Scheduling, Patient Communication and Health-facility Support.',
     pathway: 'Potential livelihood: supervised hospital reception, patient-support and health-facility administrative roles, subject to age and eligibility.'
    },
    {
     icon: '📚', title: 'Education & Learning Support',
     image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
     summary: 'Communication and digital skills for education-support environments.',
     detail: '<strong>Possible courses:</strong> Library Assistant Basics, Learning Centre Support, Digital Learning Assistance, Records Management and Communication Skills.',
     pathway: 'Potential livelihood: supervised learning-centre, library and education-administration support roles.'
    },
    {
     icon: '🎨', title: 'Creative & Graphic Design',
     image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=85',
     summary: 'Visual communication and entry-level creative digital skills.',
     detail: '<strong>Possible courses:</strong> Design Fundamentals, Image Editing, Social Media Creatives, Presentation Design, Layout and Portfolio Development.',
     pathway: 'Potential livelihood: junior design assistance, digital content support and supervised freelance projects.'
    },
    {
     icon: '📱', title: 'Digital Marketing & Content',
     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
     summary: 'Digital communication, content planning and online promotion basics.',
     detail: '<strong>Possible courses:</strong> Social Media Basics, Content Writing, Digital Campaign Support, Search Basics, Analytics Fundamentals and Online Safety.',
     pathway: 'Potential livelihood: digital marketing assistant, content support and social-media operations roles.'
    },
    {
     icon: '🗣️', title: 'Communication & Workplace Readiness',
     image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
     summary: 'Foundational communication and professional readiness for multiple sectors.',
     detail: '<strong>Possible courses:</strong> Spoken English, Workplace Communication, Interview Preparation, Teamwork, Problem-solving, Time Management and Digital Etiquette.',
     pathway: 'Potential livelihood: a foundation for entry-level roles across retail, office, service and support sectors.'
    },
    {
     icon: '🛡️', title: 'Safety, Security & Facility Operations',
     image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85',
     summary: 'Safety awareness and supervised facility-support fundamentals.',
     detail: '<strong>Possible courses:</strong> Workplace Safety, Emergency Awareness, Facility Operations Basics, Visitor Management and Occupational Safety. Any regulated security role requires age and legal eligibility checks.',
     pathway: 'Potential livelihood: eligible facility-support and safety-assistance roles with appropriate supervision.'
    },
    {
     icon: '🌱', title: 'Entrepreneurship & Self-employment',
     image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
     summary: 'Practical foundations for planning a small service or micro-enterprise.',
     detail: '<strong>Possible courses:</strong> Business Planning, Customer Discovery, Costing, Basic Bookkeeping, Digital Payments, Marketing and Government Support Awareness.',
     pathway: 'Potential livelihood: supported micro-enterprise or self-employment planning where suitable.'
    }

  ];

  function buildCourseUrl(skill) {
    return 'course-detail.html?title=' + encodeURIComponent(skill.title);
  }

  /* ============================================================
     BUILD SKILLS SECTION
     ============================================================ */

  var courses =
    document.getElementById('courses');

  if (courses) {

    courses.className =
     'skills-section';

    courses.innerHTML =

     '<div class="container">' +

       '<div class="skills-intro">' +

         '<div>' +

           '<span class="section-label">' +
             'SKILLS AVAILABLE' +
           '</span>' +

           '<h2>' +
             'Explore job-ready skill pathways' +
           '</h2>' +

         '</div>' +

         '<p>' +
           'Hover or focus on a card to view the certificate options and potential livelihood pathway. Courses should be selected only after individual assessment, age-suitability review and safeguarding checks.' +
         '</p>' +

       '</div>' +


       '<div class="skills-grid">' +

         skills.map(
           function (skill) {

             return (

               '<a class="skill-card skill-card-link" href="' +
                 buildCourseUrl(skill) +
               '" target="_blank" rel="noopener" aria-label="Open certificate details for ' +
                 skill.title +
               '">' +

                 '<div class="skill-icon">' +
                   '<img src="' + skill.image + '" alt="' + skill.title + ' course image" loading="lazy" />' +
                 '</div>' +

                 '<h3>' +
                   skill.title +
                 '</h3>' +

                 '<p class="skill-summary">' +
                   skill.summary +
                 '</p>' +

                 '<span class="hover-hint">' +
                   'HOVER FOR DETAILS →' +
                 '</span>' +

                 '<div class="skill-detail">' +

                   '<h4>' +
                     skill.title +
                   '</h4>' +

                   '<p>' +
                     skill.detail +
                   '</p>' +

                   '<div class="pathway">' +
                     skill.pathway +
                   '</div>' +

                 '</div>' +

               '</a>'

             );
           }
         ).join('') +

       '</div>' +


       '<div class="governance-card">' +

         '<strong>Placement safeguard:</strong> ' +

         'specific roles, working conditions and work placement must be screened for age, safety, rehabilitation needs and applicable law before referral. This portal presents potential pathways, not automatic eligibility.' +

       '</div>' +

     '</div>';
  }


  /* ============================================================
     CAREER SUPPORT RAIL
     ============================================================ */

  var careerGrid =
    document.querySelector(
      '#career .industry-grid'
    );

  if (careerGrid) {

    careerGrid.insertAdjacentHTML(
      'beforebegin',

      '<div class="career-rail" ' +
      'aria-label="Career-focused support">' +

        '<div>Relevant skill courses</div>' +

        '<div>Recognised certification</div>' +

        '<div>Nearby skill centres</div>' +

        '<div>Jobs & placements</div>' +

        '<div>Apprenticeships / OJT</div>' +

      '</div>'
    );
  }


  /* ============================================================
     EDITABLE STAKEHOLDER / PARTNER DATA
     ============================================================ */

  var partners = [
    {
      name: 'NovaServe Solutions',
      description: 'Customer service, CRM and business-process support pathways.',
      image: 'assets/partner-logos/novaserve-solutions.svg',
      profile: 'A fictional service-sector example for exploring structured customer-support and business-process pathways.',
      location: 'Pune · illustrative location',
      roles: ['Customer support associate', 'CRM data assistant', 'Process support trainee'],
      skills: 'Clear communication, basic computer use, careful data handling and customer-focused problem solving.',
      support: 'Example induction, supervised practice, communication coaching and a named workplace mentor.',
      eligibility: 'Role requirements vary. Any real referral would require an authorised, individual assessment of age and applicable law, role safety, the learner’s rehabilitation plan, readiness and approvals.',
      sampleLearners: 14,
      sampleProgress: 68,
      sampleCertificates: 9,
      training: '6–8 weeks · illustrative'
    },
    {
      name: 'DigiCore Operations',
      description: 'Data handling, IT helpdesk and digital-operations pathways.',
      image: 'assets/partner-logos/digicore-operations.svg',
      profile: 'A fictional digital operations provider concept with entry-level technical support and data-service learning tracks.',
      location: 'Pune · illustrative location',
      roles: ['IT helpdesk trainee', 'Digital operations assistant', 'Data quality assistant'],
      skills: 'Digital fundamentals, typing, safe password practices, step-by-step troubleshooting and accurate records.',
      support: 'Example digital-skills bridge course, guided helpdesk simulations, accessible job aids and mentor check-ins.',
      eligibility: 'Role requirements vary. Any real referral would require an authorised, individual assessment of age and applicable law, role safety, the learner’s rehabilitation plan, readiness and approvals.',
      sampleLearners: 11,
      sampleProgress: 72,
      sampleCertificates: 8,
      training: '8–10 weeks · illustrative'
    },
    {
      name: 'Finora Business Services',
      description: 'Customer onboarding, KYC documentation and financial-operations support.',
      image: 'assets/partner-logos/finora-business-services.svg',
      profile: 'A fictional financial-services operations concept focused on supervised documentation and customer onboarding support.',
      location: 'Pune · illustrative location',
      roles: ['Onboarding support trainee', 'Document quality assistant', 'Service desk associate'],
      skills: 'Attention to detail, respectful communication, document organisation and confidentiality awareness.',
      support: 'Example compliance orientation, privacy and confidentiality training, supervised practice and regular feedback.',
      eligibility: 'Roles involving financial, identity or customer records require additional screening and supervision. Any real referral depends on authorised individual review, applicable law and formal approval.',
      sampleLearners: 8,
      sampleProgress: 61,
      sampleCertificates: 5,
      training: '8–12 weeks · illustrative'
    },
    {
      name: 'AccuLedger Services',
      description: 'Billing, bookkeeping, GST and accounts-support pathways.',
      image: 'assets/partner-logos/acculedger-services.svg',
      profile: 'A fictional accounts-support company concept for learners interested in structured finance and bookkeeping tasks.',
      location: 'Nashik · illustrative location',
      roles: ['Accounts support trainee', 'Billing assistant', 'Records support associate'],
      skills: 'Numeracy, spreadsheet basics, accurate data entry, organisation and responsible handling of records.',
      support: 'Example bookkeeping foundations, spreadsheet practice, task checklists and a supervised learning plan.',
      eligibility: 'Roles involving financial records require additional screening and supervision. Any real referral depends on authorised individual review, applicable law, role safety and formal approval.',
      sampleLearners: 9,
      sampleProgress: 64,
      sampleCertificates: 6,
      training: '8–10 weeks · illustrative'
    },
    {
      name: 'RetailEdge Commerce',
      description: 'Retail, e-commerce, sales-support and customer-service pathways.',
      image: 'assets/partner-logos/retailedge-commerce.svg',
      profile: 'A fictional retail and online-commerce concept covering store support and digital order workflows.',
      location: 'Pune · illustrative location',
      roles: ['Retail floor assistant', 'Online order support trainee', 'Catalogue assistant'],
      skills: 'Customer interaction, product organisation, basic digital skills, teamwork and safe workplace practices.',
      support: 'Example customer-service practice, task demonstrations, structured shifts and an assigned supervisor.',
      eligibility: 'Any real role match requires an authorised, individual assessment of age and applicable law, safe duties, working conditions, rehabilitation plan and approvals.',
      sampleLearners: 16,
      sampleProgress: 74,
      sampleCertificates: 12,
      training: '4–6 weeks · illustrative'
    },
    {
      name: 'OfficeBridge Solutions',
      description: 'Reception, records, documentation and administrative-support pathways.',
      image: 'assets/partner-logos/officebridge-solutions.svg',
      profile: 'A fictional office-services concept offering examples of administrative and front-desk support pathways.',
      location: 'Pune · illustrative location',
      roles: ['Office support trainee', 'Reception assistant', 'Records assistant'],
      skills: 'Professional communication, document organisation, scheduling, typing and basic office software.',
      support: 'Example office-readiness sessions, supervised task practice, accessible checklists and weekly mentoring.',
      eligibility: 'Any real role match requires an authorised, individual assessment of age and applicable law, privacy, role safety, rehabilitation plan and approvals.',
      sampleLearners: 10,
      sampleProgress: 70,
      sampleCertificates: 7,
      training: '6–8 weeks · illustrative'
    },
    {
      name: 'Connecta Customer Care',
      description: 'Voice, non-voice, email and chat-based customer-support pathways.',
      image: 'assets/partner-logos/connecta-customer-care.svg',
      profile: 'A fictional customer-care provider concept with several communication-focused service tracks.',
      location: 'Pune · illustrative location',
      roles: ['Email support trainee', 'Chat support associate', 'Customer care assistant'],
      skills: 'Written communication, active listening, respectful language, digital confidence and problem solving.',
      support: 'Example communication coaching, practice scenarios, clear escalation procedures and a trained mentor.',
      eligibility: 'Any real role match requires an authorised, individual assessment of age and applicable law, role suitability, working conditions, rehabilitation plan and approvals.',
      sampleLearners: 13,
      sampleProgress: 77,
      sampleCertificates: 10,
      training: '6–8 weeks · illustrative'
    },
    {
      name: 'Ecomatrix Fulfilment',
      description: 'Order processing, inventory, catalogue and e-commerce operations.',
      image: 'assets/partner-logos/ecomatrix-fulfilment.svg',
      profile: 'A fictional e-commerce fulfilment concept covering inventory information and online order support.',
      location: 'Nashik · illustrative location',
      roles: ['Order processing trainee', 'Inventory records assistant', 'Catalogue support trainee'],
      skills: 'Accuracy, basic computer use, organised task completion, teamwork and workplace safety awareness.',
      support: 'Example digital-order training, safe-work orientation, supervised practice and step-by-step task guides.',
      eligibility: 'Any real role match requires an authorised, individual assessment of age and applicable law, safe duties, workplace conditions, rehabilitation plan and approvals.',
      sampleLearners: 12,
      sampleProgress: 66,
      sampleCertificates: 8,
      training: '5–8 weeks · illustrative'
    },
    {
      name: 'SkillAxis Business Services',
      description: 'Data management, MIS, reporting and back-office operations.',
      image: 'assets/partner-logos/skillaxis-business-services.svg',
      profile: 'A fictional business-services concept with data organisation and reporting pathway examples.',
      location: 'Pune · illustrative location',
      roles: ['Data quality trainee', 'MIS support assistant', 'Back-office operations trainee'],
      skills: 'Spreadsheet fundamentals, careful data entry, attention to detail, task planning and confidentiality awareness.',
      support: 'Example spreadsheet lessons, simulated reporting tasks, data privacy guidance and supervisor reviews.',
      eligibility: 'Roles involving personal or business records require additional screening and supervision. Any real referral depends on authorised individual review and applicable law.',
      sampleLearners: 7,
      sampleProgress: 59,
      sampleCertificates: 4,
      training: '8–12 weeks · illustrative'
    },
    {
      name: 'PrimeDesk Services',
      description: 'Office administration, helpdesk and service-coordination pathways.',
      image: 'assets/partner-logos/primedesk-services.svg',
      profile: 'A fictional office-support concept combining service coordination, helpdesk and administrative tasks.',
      location: 'Pune · illustrative location',
      roles: ['Service desk trainee', 'Office coordination assistant', 'Administration support trainee'],
      skills: 'Clear communication, scheduling, basic computer use, reliable record keeping and teamwork.',
      support: 'Example office induction, guided service scenarios, task checklists and regular mentor check-ins.',
      eligibility: 'Any real role match requires an authorised, individual assessment of age and applicable law, role safety, rehabilitation plan, readiness and approvals.',
      sampleLearners: 9,
      sampleProgress: 71,
      sampleCertificates: 6,
      training: '6–8 weeks · illustrative'
    }
  ];


  /* ============================================================
     BUILD STAKEHOLDER SECTION
     ============================================================ */

  var stakeholder =
    document.getElementById(
      'stakeholder'
    );

  if (stakeholder) {

    var wordmarks =
      partners.concat(partners)
        .map(
          function (partner) {

            return (

              '<div class="wordmark">' +
                '<img src="' + partner.image + '" alt="' + partner.name + ' logo" loading="lazy" />' +
              '</div>'
            );
          }
        )
        .join('');


    stakeholder.className =
      'stakeholder-section';


    stakeholder.innerHTML =

      '<div class="container">' +

        '<div class="section-heading">' +

          '<span class="section-label">' +
            'STAKEHOLDER ECOSYSTEM' +
          '</span>' +

          '<h2>' +
            'Employment Ecosystem' +
          '</h2>' +

          '<p class="partner-note">' +
            'These are fictional companies created only for the PHOENIX demonstration. They are not real organisations and do not represent existing partnerships or recruitment arrangements.' +
          '</p>' +

        '</div>' +


        '<div class="logo-slider" ' +
        'aria-label="Potential stakeholder names">' +

          '<div class="logo-track">' +
            wordmarks +
          '</div>' +

        '</div>' +


        '<div class="stakeholder-grid">' +

          partners.map(
            function (partner, index) {

              return (

                '<article class="stakeholder-opportunity" tabindex="0" role="button" ' +
                'aria-haspopup="dialog" aria-controls="opportunityDetailsDialog" ' +
                'data-partner-index="' + index + '">' +

                  '<div class="stakeholder-visual">' +
                    '<img src="' + partner.image + '" alt="" />' +
                  '</div>' +

                  '<h3>' +
                    partner.name +
                  '</h3>' +

                  '<p>' +
                    partner.description +
                  '</p>' +

                  '<span class="opportunity-card-link">View company, roles &amp; eligibility <span aria-hidden="true">→</span></span>' +

                '</article>'
              );

            }
          ).join('') +

        '</div>' +


        '<div class="governance-card">' +

          '<strong>Responsible referral protocol:</strong> ' +

          'NALSA, NCPCR and the relevant DLSA / institutional authority would remain central to lawful, child-sensitive assessment and support. No candidate information should be shared with an employer without authority, consent where appropriate, screening and a documented referral process.' +

        '</div>' +

      '</div>';

    stakeholder.insertAdjacentHTML(
      'beforeend',
      '<dialog class="opportunity-dialog" id="opportunityDetailsDialog" aria-labelledby="opportunityDialogTitle">' +
        '<div class="opportunity-dialog-header">' +
          '<div class="opportunity-dialog-brand"><img id="opportunityDialogLogo" alt="" /><span class="opportunity-demo-label">FICTIONAL DEMONSTRATION PROFILE</span></div>' +
          '<button class="opportunity-dialog-close" type="button" aria-label="Close company details">×</button>' +
        '</div>' +
        '<div class="opportunity-dialog-content">' +
          '<p class="opportunity-dialog-kicker" id="opportunityDialogLocation"></p>' +
          '<h2 id="opportunityDialogTitle"></h2>' +
          '<p class="opportunity-dialog-description" id="opportunityDialogProfile"></p>' +
          '<div class="opportunity-stats-login" id="opportunityStatsLogin">' +
            '<p>Sign in to view illustrative company pathway statistics.</p>' +
            '<a href="juvenile-login.html">Participant login</a>' +
            '<a href="admin-login.html?role=stakeholder">Stakeholder login</a>' +
          '</div>' +
          '<div class="opportunity-sample-stats" id="opportunitySampleStats" aria-label="Illustrative sample statistics" hidden>' +
            '<div><strong id="opportunitySampleLearners"></strong><span>sample learner profiles</span></div>' +
            '<div><strong id="opportunitySampleProgress"></strong><span>sample pathway progress</span></div>' +
            '<div><strong id="opportunitySampleCertificates"></strong><span>sample certificates</span></div>' +
          '</div>' +
          '<div class="opportunity-detail-grid">' +
            '<section class="opportunity-detail-block"><h3>Example roles &amp; pathways</h3><ul id="opportunityRoles"></ul></section>' +
            '<section class="opportunity-detail-block"><h3>Skills to build</h3><p id="opportunitySkills"></p><p class="opportunity-training" id="opportunityTraining"></p></section>' +
          '</div>' +
          '<section class="opportunity-eligibility"><h3>Eligibility &amp; responsible referral</h3><p id="opportunityEligibility"></p><p id="opportunitySupport"></p></section>' +
          '<p class="opportunity-data-note">All profile details and statistics above are fictional examples—not real vacancies, hiring commitments, company information, learner data or credentials.</p>' +
          '<div class="opportunity-apply-actions">' +
            '<button class="opportunity-interest-button" id="saveOpportunityInterest" type="button">Apply</button>' +
            '<a class="opportunity-login-link" id="opportunityLoginLink" href="juvenile-login.html">Sign in to My Journey to discuss applying</a>' +
          '</div>' +
          '<p class="opportunity-interest-message" id="opportunityInterestMessage" aria-live="polite"></p>' +
        '</div>' +
      '</dialog>'
    );

    var opportunityDialog = document.getElementById('opportunityDetailsDialog');
    var opportunityTrigger = null;
    var selectedOpportunity = null;

    function hasOpportunityStatsAccess() {
      var stakeholderId = sessionStorage.getItem('phoenixStakeholderId');
      return sessionStorage.getItem('phoenixJuvenileAuth') === 'true' ||
        sessionStorage.getItem('phoenixPOAuth') === 'true' ||
        (sessionStorage.getItem('phoenixStakeholderAuth') === 'true' &&
          ['stakeholder1', 'stakeholder2', 'stakeholder3'].indexOf(stakeholderId) !== -1);
    }

    function openOpportunityDetails(card) {
      var index = Number(card.getAttribute('data-partner-index'));
      if (!Number.isInteger(index) || !partners[index]) return;

      var partner = partners[index];
      selectedOpportunity = partner;
      opportunityTrigger = card;
      document.getElementById('opportunityDialogLogo').src = partner.image;
      document.getElementById('opportunityDialogLogo').alt = partner.name + ' fictional example logo';
      document.getElementById('opportunityDialogLocation').textContent = partner.location;
      document.getElementById('opportunityDialogTitle').textContent = partner.name;
      document.getElementById('opportunityDialogProfile').textContent = partner.profile;
      var canViewStats = hasOpportunityStatsAccess();
      var stats = document.getElementById('opportunitySampleStats');
      var statsLogin = document.getElementById('opportunityStatsLogin');
      stats.hidden = !canViewStats;
      stats.setAttribute('aria-hidden', String(!canViewStats));
      statsLogin.hidden = canViewStats;
      if (canViewStats) {
        document.getElementById('opportunitySampleLearners').textContent = String(partner.sampleLearners);
        document.getElementById('opportunitySampleProgress').textContent = partner.sampleProgress + '%';
        document.getElementById('opportunitySampleCertificates').textContent = String(partner.sampleCertificates);
      } else {
        document.getElementById('opportunitySampleLearners').textContent = '';
        document.getElementById('opportunitySampleProgress').textContent = '';
        document.getElementById('opportunitySampleCertificates').textContent = '';
      }
      document.getElementById('opportunitySkills').textContent = partner.skills;
      document.getElementById('opportunityTraining').textContent = 'Example preparation: ' + partner.training;
      document.getElementById('opportunityEligibility').textContent = partner.eligibility;
      document.getElementById('opportunitySupport').textContent = partner.support;

      var roleList = document.getElementById('opportunityRoles');
      roleList.replaceChildren();
      partner.roles.forEach(function (role) {
        var item = document.createElement('li');
        item.textContent = role;
        roleList.appendChild(item);
      });

      var interestKey = 'phoenixOpportunityInterest_' + index;
      var hasInterest = sessionStorage.getItem(interestKey) === 'true';
      var interestButton = document.getElementById('saveOpportunityInterest');
      interestButton.textContent = hasInterest ? 'Applied' : 'Apply';
      interestButton.disabled = hasInterest;
      interestButton.setAttribute('aria-disabled', String(hasInterest));
      document.getElementById('opportunityInterestMessage').textContent = hasInterest
        ? 'Your application for ' + partner.name + ' is recorded in this browser session only.'
        : '';
      document.getElementById('opportunityLoginLink').textContent = sessionStorage.getItem('phoenixJuvenileAuth') === 'true'
        ? 'Continue to My Journey'
        : 'Sign in to My Journey to discuss applying';

      if (opportunityDialog.open) opportunityDialog.close();
      opportunityDialog.scrollTop = 0;
      opportunityDialog.showModal();
    }

    stakeholder.addEventListener('click', function (event) {
      var card = event.target.closest('.stakeholder-opportunity');
      if (card && stakeholder.contains(card)) openOpportunityDetails(card);
    });

    stakeholder.addEventListener('keydown', function (event) {
      var card = event.target.closest('.stakeholder-opportunity');
      if (!card || !stakeholder.contains(card) || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      openOpportunityDetails(card);
    });

    opportunityDialog.querySelector('.opportunity-dialog-close').addEventListener('click', function () {
      opportunityDialog.close();
    });

    opportunityDialog.addEventListener('click', function (event) {
      if (event.target === opportunityDialog) opportunityDialog.close();
    });

    opportunityDialog.addEventListener('close', function () {
      if (opportunityTrigger && opportunityTrigger.isConnected) opportunityTrigger.focus();
    });

    document.getElementById('saveOpportunityInterest').addEventListener('click', function () {
      if (!selectedOpportunity) return;
      var selectedIndex = partners.indexOf(selectedOpportunity);
      sessionStorage.setItem('phoenixOpportunityInterest_' + selectedIndex, 'true');
      var message = document.getElementById('opportunityInterestMessage');
      message.textContent = 'Application for ' + selectedOpportunity.name + ' is recorded in this browser session only.';
      this.textContent = 'Applied';
      this.disabled = true;
      this.setAttribute('aria-disabled', 'true');
    });

    document.getElementById('opportunityLoginLink').addEventListener('click', function (event) {
      if (!selectedOpportunity) return;
      sessionStorage.setItem('phoenixSelectedOpportunity', selectedOpportunity.name);
      if (sessionStorage.getItem('phoenixJuvenileAuth') === 'true') {
        event.preventDefault();
        window.location.assign('juvenile-portal.html');
      }
    });


    /* ============================================================
       FOOTER NOTE
       ============================================================ */

    stakeholder.insertAdjacentHTML(
      'afterend',

      '<footer class="footer-note">' +

        '<b>' +
          'Juvenile Skill & Employment Linkage Portal' +
        '</b>' +

        '&nbsp;•&nbsp;' +

        'Demonstration interface for a lawful, child-centred rehabilitation and employability pathway' +

        '&nbsp;•&nbsp;' +

        'NALSA · NCPCR · DLSA' +

      '</footer>'
    );


    /* ============================================================
       REPOSITION STAKEHOLDER SECTION
       ============================================================ */

    // Repositioning of the stakeholder section disabled to preserve the HTML authoring order.
    // Previous behaviour moved the stakeholder section to a different place in the DOM,
    // which interfered with the intended section ordering. Keeping this logic commented
    // out ensures the HTML-defined order remains unchanged.
    // var onlineServices =
    //   document.querySelector(
    //     '.services-grid'
    //   );
    //
    // if (onlineServices) {
    //
    //   onlineServices
    //     .closest('section')
    //     .parentNode
    //     .insertBefore(
    //       stakeholder,
    //       onlineServices.closest('section')
    //     );
    // }
  }


  /* ============================================================
     CONTACT SECTION
     ============================================================ */

  var careerSection =
    document.getElementById('career');

  if (
    careerSection &&
    !document.getElementById('contact')
  ) {

    careerSection.insertAdjacentHTML(
      'afterend',

      '<section id="contact" class="contact-section">' +

        '<div class="container">' +

          '<div class="section-heading">' +

            '<span class="section-label">' +
              'CONTACT & SUPPORT' +
            '</span>' +

            '<h2>' +
              'Get help with a skill pathway' +
            '</h2>' +

            '<p>' +
              'Use this demonstration contact form to request guidance on training, documentation or a responsible employment pathway.' +
            '</p>' +

          '</div>' +


          '<div class="contact-form-grid">' +


            '<div class="contact-details-panel">' +

              '<h3>' +
                'Portal helpdesk' +
              '</h3>' +

              '<p>' +
                'For immediate assistance, contact the sample helpline below. In a live deployment, this would route to the authorised district support team.' +
              '</p>' +

              '<div class="helpline-number">' +

                '<span>☎</span>' +

                '0000000000' +

              '</div>' +

              '<div class="contact-list">' +

                '<div>' +
                  '<strong>Support hours:</strong> Monday–Saturday, 9:30 AM–5:30 PM' +
                '</div>' +

                '<div>' +
                  '<strong>Help available:</strong> Training guidance, portal assistance and referral-process information' +
                '</div>' +

                '<div>' +
                  '<strong>Privacy:</strong> Do not share case details or sensitive personal information in this demonstration form.' +
                '</div>' +

              '</div>' +

            '</div>' +


            '<div class="contact-form-panel">' +

              '<h3>' +
                'Send a support request' +
              '</h3>' +

              '<form id="contactForm" class="contact-form">' +

                '<div>' +

                  '<label for="contactName">' +
                    'Name' +
                  '</label>' +

                  '<input id="contactName" required ' +
                  'placeholder="Enter your name">' +

                '</div>' +


                '<div>' +

                  '<label for="contactPhone">' +
                    'Phone number' +
                  '</label>' +

                  '<input id="contactPhone" ' +
                  'inputmode="numeric" ' +
                  'placeholder="Enter your phone number">' +

                '</div>' +


                '<div class="full">' +

                  '<label for="contactSubject">' +
                    'Subject' +
                  '</label>' +

                  '<input id="contactSubject" required ' +
                  'placeholder="Training, portal support or general enquiry">' +

                '</div>' +


                '<div class="full">' +

                  '<label for="contactMessage">' +
                    'Message' +
                  '</label>' +

                  '<textarea id="contactMessage" required ' +
                  'placeholder="Briefly describe the support you need"></textarea>' +

                '</div>' +


                '<div class="full">' +

                  '<button class="contact-submit" type="submit">' +
                    'Submit support request' +
                  '</button>' +

                  '<div id="contactStatus" ' +
                  'class="contact-status" ' +
                  'aria-live="polite"></div>' +

                '</div>' +

              '</form>' +

            '</div>' +

          '</div>' +

        '</div>' +

      '</section>'
    );


    /* ============================================================
       CONTACT FORM DEMO
       ============================================================ */

    var contactForm =
      document.getElementById(
        'contactForm'
      );

    if (contactForm) {

      contactForm.addEventListener(
        'submit',
        function (event) {

          event.preventDefault();

          document.getElementById(
            'contactStatus'
          ).textContent =
            'Your demonstration support request has been recorded. The helpdesk will contact you in a live deployment.';

          contactForm.reset();

        }
      );
    }
  }


  /* ============================================================
     SCROLL REVEAL ANIMATION
     ============================================================ */

  var observer =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(
          function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                'visible'
              );

              observer.unobserve(
                entry.target
              );
            }

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  Array.prototype.forEach.call(
    document.querySelectorAll('section'),
    function (section) {
      if (section.closest('dialog')) return;

      section.classList.add(
        'reveal-section'
      );

      observer.observe(section);
    }
  );

}());

// Homepage participant login (visual design retained from the earlier PHOENIX page).
function phoenixHomeLogin(event) {
  event.preventDefault();
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var captcha = document.getElementById('captchaInput');
  var captchaCode = document.getElementById('captchaCode');
  var message = document.getElementById('loginMessage');
  if (!username || !password || !captcha || !captchaCode || !message) return false;
  if (captcha.value.trim().toUpperCase() !== captchaCode.textContent.trim().toUpperCase()) {
    message.textContent = 'Captcha does not match. Please try again.';
    message.className = 'login-message error';
    return false;
  }
  if (username.value.trim() !== 'himanshugavhane' || password.value !== '12345678') {
    message.textContent = 'Invalid participant credentials.';
    message.className = 'login-message error';
    return false;
  }
  sessionStorage.setItem('phoenixJuvenileAuth', 'true');
  window.location.assign('juvenile-portal.html');
  return false;
}

var homepageContactForm = document.getElementById('homepageContactForm');
if (homepageContactForm) {
  homepageContactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var status = document.getElementById('homepageContactStatus');
    if (!status) return;

    status.textContent = 'Enquiry sent! You will receive a call from our support team soon. This is a demonstration form; no enquiry was actually transmitted.';
    homepageContactForm.reset();
  });
}

var homepageNavigation = document.querySelector('.navigation');
if (homepageNavigation) {
  var homepageNavigationLinks = Array.prototype.slice.call(
    homepageNavigation.querySelectorAll('a[href^="#"]')
  );

  function updateHomepageNavigation() {
    var currentLink = homepageNavigationLinks.find(function (link) {
      return link.getAttribute('href') === window.location.hash;
    });

    if (!currentLink && !window.location.hash) {
      currentLink = homepageNavigationLinks.find(function (link) {
        return link.getAttribute('href') === '#home';
      });
    }

    homepageNavigationLinks.forEach(function (link) {
      var isCurrent = link === currentLink;
      link.classList.toggle('active', isCurrent);

      if (isCurrent) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  homepageNavigation.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (link && homepageNavigation.contains(link)) {
      homepageNavigationLinks.forEach(function (navigationLink) {
        var isCurrent = navigationLink === link;
        navigationLink.classList.toggle('active', isCurrent);

        if (isCurrent) {
          navigationLink.setAttribute('aria-current', 'page');
        } else {
          navigationLink.removeAttribute('aria-current');
        }
      });
    }
  });

  window.addEventListener('hashchange', updateHomepageNavigation);
  updateHomepageNavigation();
}
