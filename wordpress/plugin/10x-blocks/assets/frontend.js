/**
 * 10X Blocks — Frontend interactivity.
 *
 * Handles:
 * - Expand / collapse toggles (playbook expanded text + comparison table)
 * - Side navigation smooth-scroll and submenu expand
 */

document.addEventListener('DOMContentLoaded', function () {
  /* ── Expand / collapse toggles ── */
  document.querySelectorAll('[data-tenx-expand]').forEach(function (wrapper) {
    var btn = wrapper.querySelector('.tenx-expand-btn');
    var content = wrapper.querySelector('.tenx-expand-content');
    if (!btn || !content) return;

    btn.addEventListener('click', function () {
      var isExpanded = content.classList.toggle('is-expanded');
      btn.classList.toggle('is-expanded', isExpanded);
      btn.setAttribute('aria-label', isExpanded ? 'Collapse section' : 'Expand section');

      // Stop bounce animation once expanded
      var svg = btn.querySelector('svg');
      if (svg) {
        svg.classList.toggle('tenx-bounce', !isExpanded);
      }
    });
  });

  /* ── Side navigation: smooth scroll ── */
  document.querySelectorAll('.tenx-sidenav a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      // If clicking "playbooks-vs-prompts", auto-expand the comparison table
      if (targetId === 'playbooks-vs-prompts') {
        var expandContent = target.querySelector('.tenx-expand-content');
        var expandBtn = target.querySelector('.tenx-expand-btn');
        if (expandContent && !expandContent.classList.contains('is-expanded')) {
          expandContent.classList.add('is-expanded');
          if (expandBtn) {
            expandBtn.classList.add('is-expanded');
            var svg = expandBtn.querySelector('svg');
            if (svg) svg.classList.remove('tenx-bounce');
          }
        }
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Side navigation: expandable submenu ── */
  document.querySelectorAll('.tenx-sidenav__expand-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var submenu = this.nextElementSibling;
      var chevron = this.querySelector('.tenx-sidenav__chevron');
      if (!submenu) return;

      var isOpen = submenu.classList.toggle('is-open');
      if (chevron) chevron.classList.toggle('is-open', isOpen);
    });
  });
});
