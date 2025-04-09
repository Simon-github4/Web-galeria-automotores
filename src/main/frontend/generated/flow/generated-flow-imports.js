import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';
import 'Frontend/generated/jar-resources/ReactRouterOutletElement.tsx';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '4f32e6ea821fd553dcd3a97f54fdba5fd9b132e5098b7ea509e8741df6774ffd') {
    pending.push(import('./chunks/chunk-f0230b3617d5c73e20e63cf7c0430bdd25d625e285e84e6510fb95f543c762d7.js'));
  }
  if (key === 'b357c01f9f64b5e0cdb61a4efe50f89a7ccb0f7ee6e0358d40240194281de2d4') {
    pending.push(import('./chunks/chunk-f0230b3617d5c73e20e63cf7c0430bdd25d625e285e84e6510fb95f543c762d7.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}