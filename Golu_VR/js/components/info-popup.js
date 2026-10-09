/**
 * Custom A-Frame component that attaches an interactive 3D text panel
 * to any station when gazed at or clicked using Meta Quest controllers.
 */
AFRAME.registerComponent('info-popup', {
  schema: {
    title: { type: 'string', default: 'SDG Goal' },
    desc: { type: 'string', default: 'Sustainable Development Goal description.' }
  },

  init: function () {
    const el = this.el;
    const data = this.data;

    // Create container for the popup UI
    this.popup = document.createElement('a-entity');
    this.popup.setAttribute('position', '0 1.6 0');
    this.popup.setAttribute('visible', 'false');

    // Create Background Plane
    const bg = document.createElement('a-plane');
    bg.setAttribute('width', '3.2');
    bg.setAttribute('height', '0.9');
    bg.setAttribute('color', '#1a0c00');
    bg.setAttribute('material', 'opacity: 0.9; transparent: true');
    bg.setAttribute('border', 'color: #FFD700');

    // Create Text Label
    const text = document.createElement('a-text');
    text.setAttribute('value', `${data.title}\n${data.desc}`);
    text.setAttribute('align', 'center');
    text.setAttribute('color', '#FFF8E1');
    text.setAttribute('scale', '0.5 0.5 0.5');
    text.setAttribute('position', '0 0 0.02');

    // Assemble Popup
    this.popup.appendChild(bg);
    this.popup.appendChild(text);
    el.appendChild(this.popup);

    // Event Listeners for Hover/Trigger Interaction
    el.addEventListener('mouseenter', () => {
      this.popup.setAttribute('visible', 'true');
      el.setAttribute('scale', '1.08 1.08 1.08');
    });

    el.addEventListener('mouseleave', () => {
      this.popup.setAttribute('visible', 'false');
      el.setAttribute('scale', '1 1 1');
    });

    el.addEventListener('click', () => {
      const isVisible = this.popup.getAttribute('visible');
      this.popup.setAttribute('visible', !isVisible);
    });
  }
});