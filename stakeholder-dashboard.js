(function () {
  'use strict';

  var stakeholderId = sessionStorage.getItem('phoenixStakeholderId');
  var validAccounts = ['stakeholder1', 'stakeholder2', 'stakeholder3'];
  if (sessionStorage.getItem('phoenixStakeholderAuth') !== 'true' || validAccounts.indexOf(stakeholderId) === -1) {
    window.location.replace('admin-login.html');
    return;
  }

  var learners = [
    { id: 'PHX-D-241', name: 'Learner A', district: 'Pune', pathway: 'Digital support', progress: 82, status: 'ready', certificates: [{ course: 'Digital Foundations', date: '18 September 2026', hours: 40, id: 'PHX-DEMO-241-01' }] },
    { id: 'PHX-D-242', name: 'Learner B', district: 'Nashik', pathway: 'Retail operations', progress: 61, status: 'follow-up', certificates: [{ course: 'Workplace Communication', date: '06 August 2026', hours: 24, id: 'PHX-DEMO-242-01' }] },
    { id: 'PHX-D-243', name: 'Learner C', district: 'Pune', pathway: 'Hospitality support', progress: 94, status: 'ready', certificates: [{ course: 'Customer Service Basics', date: '28 September 2026', hours: 32, id: 'PHX-DEMO-243-01' }, { course: 'Workplace Safety', date: '12 September 2026', hours: 16, id: 'PHX-DEMO-243-02' }] },
    { id: 'PHX-D-244', name: 'Learner D', district: 'Nagpur', pathway: 'Retail operations', progress: 38, status: 'learning', certificates: [] },
    { id: 'PHX-D-245', name: 'Learner E', district: 'Nashik', pathway: 'Digital support', progress: 76, status: 'ready', certificates: [{ course: 'Digital Foundations', date: '30 September 2026', hours: 40, id: 'PHX-DEMO-245-01' }] },
    { id: 'PHX-D-246', name: 'Learner F', district: 'Pune', pathway: 'Hospitality support', progress: 52, status: 'follow-up', certificates: [{ course: 'Workplace Safety', date: '11 July 2026', hours: 16, id: 'PHX-DEMO-246-01' }] }
  ];

  var statusLabels = {
    learning: 'Learning',
    'follow-up': 'Follow-up due',
    ready: 'Partner-ready (demo)'
  };
  var updatesKey = 'phoenixStakeholderUpdates_' + stakeholderId;
  var updates = JSON.parse(sessionStorage.getItem(updatesKey) || '{}');
  var learnerSearch = document.getElementById('learnerSearch');
  var readinessFilter = document.getElementById('readinessFilter');
  var recordDialog = document.getElementById('recordDialog');
  var certificateDialog = document.getElementById('certificateDialog');

  document.getElementById('stakeholderAccount').textContent = stakeholderId;

  function getStatus(learner) {
    return updates[learner.id] && statusLabels[updates[learner.id].status]
      ? updates[learner.id].status
      : learner.status;
  }

  function makeCell(text, className) {
    var cell = document.createElement('td');
    if (className) cell.className = className;
    cell.textContent = text;
    return cell;
  }

  function renderCourses() {
    var courses = [
      { name: 'Digital foundations', progress: 72 },
      { name: 'Workplace communication', progress: 86 },
      { name: 'Customer service', progress: 64 },
      { name: 'Workplace safety', progress: 91 }
    ];
    var list = document.getElementById('courseProgressList');
    courses.forEach(function (course) {
      var row = document.createElement('div');
      row.className = 'course-progress-row';
      var label = document.createElement('div');
      label.className = 'course-progress-label';
      var name = document.createElement('span');
      name.textContent = course.name;
      var value = document.createElement('strong');
      value.textContent = course.progress + '%';
      label.append(name, value);
      var progress = document.createElement('progress');
      progress.max = 100;
      progress.value = course.progress;
      progress.setAttribute('aria-label', course.name + ' sample completion');
      row.append(label, progress);
      list.appendChild(row);
    });
  }

  function renderLearners() {
    var search = learnerSearch.value.trim().toLowerCase();
    var filter = readinessFilter.value;
    var body = document.getElementById('learnerTableBody');
    body.replaceChildren();

    var matches = learners.filter(function (learner) {
      var searchMatch = !search || [learner.id, learner.name, learner.pathway, learner.district].some(function (value) {
        return value.toLowerCase().indexOf(search) !== -1;
      });
      var filterMatch = filter === 'all' || getStatus(learner) === filter;
      return searchMatch && filterMatch;
    });

    matches.forEach(function (learner) {
      var row = document.createElement('tr');
      var identity = document.createElement('td');
      identity.className = 'learner-identity';
      var name = document.createElement('strong');
      name.textContent = learner.name;
      var id = document.createElement('span');
      id.textContent = learner.id;
      identity.append(name, id);
      row.appendChild(identity);
      row.appendChild(makeCell(learner.district));
      row.appendChild(makeCell(learner.pathway));

      var progressCell = document.createElement('td');
      var progressWrap = document.createElement('div');
      progressWrap.className = 'table-progress';
      var progress = document.createElement('progress');
      progress.max = 100;
      progress.value = learner.progress;
      progress.setAttribute('aria-label', learner.name + ' sample learning progress');
      var progressValue = document.createElement('strong');
      progressValue.textContent = learner.progress + '%';
      progressWrap.append(progress, progressValue);
      progressCell.appendChild(progressWrap);
      row.appendChild(progressCell);

      var status = getStatus(learner);
      var statusCell = document.createElement('td');
      var statusBadge = document.createElement('span');
      statusBadge.className = 'status-badge status-' + status;
      statusBadge.textContent = statusLabels[status];
      statusCell.appendChild(statusBadge);
      row.appendChild(statusCell);
      row.appendChild(makeCell(String(learner.certificates.length)));

      var actions = document.createElement('td');
      actions.className = 'learner-actions';
      if (learner.certificates.length) {
        var certificateButton = document.createElement('button');
        certificateButton.className = 'table-action';
        certificateButton.type = 'button';
        certificateButton.textContent = 'Certificate';
        certificateButton.setAttribute('aria-label', 'View sample certificate for ' + learner.name);
        certificateButton.addEventListener('click', function () {
          openCertificate(learner, learner.certificates[0]);
        });
        actions.appendChild(certificateButton);
      }
      var manageButton = document.createElement('button');
      manageButton.className = 'table-action manage-action';
      manageButton.type = 'button';
      manageButton.textContent = 'Manage';
      manageButton.setAttribute('aria-label', 'Manage demo follow-up for ' + learner.name);
      manageButton.addEventListener('click', function () {
        openRecord(learner);
      });
      actions.appendChild(manageButton);
      row.appendChild(actions);
      body.appendChild(row);
    });

    document.getElementById('emptyResults').classList.toggle('is-hidden', matches.length > 0);
  }

  function updateStats() {
    document.getElementById('totalLearners').textContent = String(learners.length);
    document.getElementById('readyLearners').textContent = String(learners.filter(function (learner) {
      return getStatus(learner) === 'ready';
    }).length);
    document.getElementById('followupLearners').textContent = String(learners.filter(function (learner) {
      return getStatus(learner) === 'follow-up';
    }).length);
    document.getElementById('issuedCertificates').textContent = String(learners.reduce(function (count, learner) {
      return count + learner.certificates.length;
    }, 0));
  }

  function openRecord(learner) {
    var saved = updates[learner.id] || {};
    document.getElementById('dialogLearnerId').value = learner.id;
    document.getElementById('dialogLearnerName').textContent = learner.name + ' · ' + learner.id;
    document.getElementById('dialogStatus').value = statusLabels[saved.status] ? saved.status : learner.status;
    document.getElementById('dialogNote').value = saved.note || '';
    recordDialog.showModal();
  }

  function openCertificate(learner, certificate) {
    document.getElementById('certificateRecipient').textContent = learner.name;
    document.getElementById('certificateCourse').textContent = certificate.course;
    document.getElementById('certificateDate').textContent = certificate.date;
    document.getElementById('certificateHours').textContent = certificate.hours + ' hours';
    document.getElementById('certificateId').textContent = certificate.id;
    certificateDialog.showModal();
  }

  document.getElementById('recordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = document.getElementById('dialogLearnerId').value;
    var status = document.getElementById('dialogStatus').value;
    var learnerExists = learners.some(function (learner) { return learner.id === id; });
    if (!learnerExists || !statusLabels[status]) {
      throw new Error('The sample learner or workflow status is invalid.');
    }
    updates[id] = { status: status, note: document.getElementById('dialogNote').value.trim() };
    sessionStorage.setItem(updatesKey, JSON.stringify(updates));
    recordDialog.close();
    renderLearners();
    updateStats();
  });

  document.querySelectorAll('[data-close-dialog]').forEach(function (button) {
    button.addEventListener('click', function () {
      button.closest('dialog').close();
    });
  });

  [recordDialog, certificateDialog].forEach(function (dialog) {
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
  });

  document.getElementById('printCertificate').addEventListener('click', function () {
    window.print();
  });

  learnerSearch.addEventListener('input', renderLearners);
  readinessFilter.addEventListener('change', renderLearners);

  document.getElementById('stakeholderLogout').addEventListener('click', function () {
    sessionStorage.removeItem('phoenixStakeholderAuth');
    sessionStorage.removeItem('phoenixStakeholderId');
    sessionStorage.removeItem(updatesKey);
    window.location.replace('admin-login.html');
  });

  renderCourses();
  renderLearners();
  updateStats();
}());
