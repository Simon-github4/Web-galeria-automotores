import{o as xn,a as En,P as Nn,O as kn,h as un,b as cn,D as wn,i as On,c as fn,t as pn,E as Tn}from"./generated-flow-imports-TmN_mjkH.js";import{i as $e,a as Qe,c as Cn,t as Sn,d as hn,T as mn}from"./indexhtml-CTIiRdEB.js";const Ln=$e`
  [part='overlay'] {
    margin: var(--lumo-space-xs) 0;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
    max-width: calc(7 * (var(--_button-size) + var(--_button-margin) * 2));
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    --_button-size: 1.25rem;
    --_button-margin: 3px;
  }

  [part='content'] ::slotted(button) {
    border: none;
    width: var(--_button-size);
    height: var(--_button-size);
    margin: var(--_button-margin);
  }
`;Qe("vaadin-rich-text-editor-popup-overlay",[xn,Ln],{moduleId:"lumo-rich-text-editor-popup-overlay"});const jn=$e`
  :host {
    min-height: calc(var(--lumo-size-m) * 8);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  [part='toolbar'] {
    background-color: var(--lumo-contrast-5pct);
    padding: calc(var(--lumo-space-s) - 1px) var(--lumo-space-xs);
  }

  [part~='toolbar-group'] {
    margin: 0 calc(var(--lumo-space-l) / 2 - 1px);
  }

  [part~='toolbar-button'] {
    width: var(--lumo-size-m);
    height: var(--lumo-size-m);
    border-radius: var(--lumo-border-radius-m);
    color: var(--lumo-contrast-60pct);
    margin: 2px 1px;
    cursor: var(--lumo-clickable-cursor);
    transition:
      background-color 100ms,
      color 100ms;
  }

  [part~='toolbar-button']:focus,
  [part~='toolbar-button'][aria-expanded='true'] {
    outline: none;
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part~='toolbar-button']:hover {
    background-color: var(--lumo-contrast-5pct);
    color: var(--lumo-contrast-80pct);
  }

  @media (hover: none) {
    [part~='toolbar-button']:hover {
      background-color: transparent;
    }
  }

  [part~='toolbar-button'][on] {
    background-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    color: var(--lumo-primary-contrast-color);
  }

  [part~='toolbar-button']:active {
    background-color: var(--lumo-contrast-10pct);
    color: var(--lumo-contrast-90pct);
  }

  [part~='toolbar-button']::before {
    font-family: 'lumo-icons', var(--lumo-font-family);
    font-size: var(--lumo-icon-size-m);
  }

  [part~='toolbar-button-undo']::before {
    content: var(--lumo-icons-undo);
  }

  [part~='toolbar-button-redo']::before {
    content: var(--lumo-icons-redo);
  }

  [part~='toolbar-button-bold']::before,
  [part~='toolbar-button-background']::before,
  [part~='toolbar-button-color']::before,
  [part~='toolbar-button-italic']::before,
  [part~='toolbar-button-underline']::before,
  [part~='toolbar-button-strike']::before {
    font-size: var(--lumo-font-size-m);
    font-weight: 600;
  }

  [part~='toolbar-button-bold']::before {
    font-weight: 700;
  }

  [part~='toolbar-button-background']::before {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
  }

  [part~='toolbar-button-background']:hover::before {
    background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)),
      linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
  }

  [part~='toolbar-button-background']:active::before {
    background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)),
      linear-gradient(var(--lumo-contrast-10pct), var(--lumo-contrast-10pct));
  }

  [part~='toolbar-button-h1']::before,
  [part~='toolbar-button-h2']::before,
  [part~='toolbar-button-h3']::before {
    font-weight: 600;
  }

  [part~='toolbar-button-h1']::before {
    font-size: var(--lumo-font-size-m);
  }

  [part~='toolbar-button-h2']::before {
    font-size: var(--lumo-font-size-s);
  }

  [part~='toolbar-button-h3']::before {
    font-size: var(--lumo-font-size-xs);
  }

  [part~='toolbar-button-subscript']::before,
  [part~='toolbar-button-superscript']::before {
    font-weight: 600;
    font-size: var(--lumo-font-size-s);
  }

  [part~='toolbar-button-subscript']::after,
  [part~='toolbar-button-superscript']::after {
    font-size: 0.625em;
    font-weight: 700;
  }

  [part~='toolbar-button-list-ordered']::before {
    content: var(--lumo-icons-ordered-list);
  }

  [part~='toolbar-button-list-bullet']::before {
    content: var(--lumo-icons-unordered-list);
  }

  [part~='toolbar-button-align-left']::before {
    content: var(--lumo-icons-align-left);
  }

  [part~='toolbar-button-align-center']::before {
    content: var(--lumo-icons-align-center);
  }

  [part~='toolbar-button-align-right']::before {
    content: var(--lumo-icons-align-right);
  }

  [part~='toolbar-button-blockquote']::before {
    font-size: var(--lumo-font-size-xxl);
  }

  [part~='toolbar-button-code-block']::before {
    content: var(--lumo-icons-angle-left) var(--lumo-icons-angle-right);
    font-size: var(--lumo-font-size-l);
    letter-spacing: -0.5em;
    margin-left: -0.25em;
    font-weight: 600;
  }

  [part~='toolbar-button-image']::before {
    content: var(--lumo-icons-photo);
  }

  [part~='toolbar-button-link']::before {
    font-family: 'vaadin-rte-icons';
    font-size: var(--lumo-icon-size-m);
  }

  [part~='toolbar-button-clean']::before {
    font-family: 'vaadin-rte-icons';
    font-size: var(--lumo-font-size-l);
  }

  [part='content'] {
    background-color: var(--lumo-base-color);
  }

  /* TODO unsupported selector */
  [part='content'] > .ql-editor {
    padding: 0 var(--lumo-space-m);
    line-height: inherit;
  }

  /* Theme variants */

  /* No border */
  :host(:not([theme~='no-border'])) {
    border: 1px solid var(--lumo-contrast-20pct);
  }

  :host(:not([theme~='no-border']):not([readonly])) [part='content'] {
    border-top: 1px solid var(--lumo-contrast-20pct);
  }

  :host([theme~='no-border']) [part='toolbar'] {
    padding-top: var(--lumo-space-s);
    padding-bottom: var(--lumo-space-s);
  }

  /* Compact */
  :host([theme~='compact']) {
    min-height: calc(var(--lumo-size-m) * 6);
  }

  :host([theme~='compact']) [part='toolbar'] {
    padding: var(--lumo-space-xs) 0;
  }

  :host([theme~='compact'][theme~='no-border']) [part='toolbar'] {
    padding: calc(var(--lumo-space-xs) + 1px) 0;
  }

  :host([theme~='compact']) [part~='toolbar-button'] {
    width: var(--lumo-size-s);
    height: var(--lumo-size-s);
  }

  :host([theme~='compact']) [part~='toolbar-group'] {
    margin: 0 calc(var(--lumo-space-m) / 2 - 1px);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part~='toolbar-button-redo']::before {
    content: var(--lumo-icons-undo);
  }

  :host([dir='rtl']) [part~='toolbar-button-undo']::before {
    content: var(--lumo-icons-redo);
  }
`,qn=$e`
  :where(h1, h2, h3, h4, h5, h6) {
    margin-top: 1.25em;
  }

  :where(h1) {
    margin-bottom: 0.75em;
  }

  :where(h2) {
    margin-bottom: 0.5em;
  }

  :where(h3) {
    margin-bottom: 0.5em;
  }

  :where(h4) {
    margin-bottom: 0.5em;
  }

  :where(h5) {
    margin-bottom: 0.25em;
  }
`;Qe("vaadin-rich-text-editor",[Cn,Sn,jn,qn],{moduleId:"lumo-rich-text-editor"});/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Rn=Le=>class extends Le{static get properties(){return{target:{type:Object},opened:{type:Boolean,notify:!0},colors:{type:Array},renderer:{type:Object}}}static get observers(){return["__openedOrTargetChanged(opened, target)","__colorsChanged(colors)"]}__colorsChanged(j){this.renderer=U=>{U.firstChild||j.forEach(C=>{const p=document.createElement("button");p.style.background=C,p.dataset.color=C,p.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("color-selected",{detail:{color:C}}))}),U.appendChild(p)})}}__openedOrTargetChanged(j,U){U&&U.setAttribute("aria-expanded",j?"true":"false")}_onOverlayEscapePress(){this.target.focus()}};/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */Qe("vaadin-rich-text-editor-popup-overlay",[En],{moduleId:"vaadin-rich-text-editor-popup-overlay-styles"});class In extends Rn(cn){static get is(){return"vaadin-rich-text-editor-popup"}static get template(){return un`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-rich-text-editor-popup-overlay
        renderer="[[renderer]]"
        opened="{{opened}}"
        position-target="[[target]]"
        no-vertical-overlap
        horizontal-align="start"
        vertical-align="top"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        focus-trap
      ></vaadin-rich-text-editor-popup-overlay>
    `}}hn(In);class Bn extends Nn(kn(wn(mn(cn)))){static get is(){return"vaadin-rich-text-editor-popup-overlay"}static get template(){return un`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}hn(Bn);/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const vn=document.createElement("template");vn.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-rte-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAbIAAsAAAAAC3AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUsmY21hcAAAAYgAAAB2AAAB7jNk7w5nbHlmAAACAAAAAm8AAAOwZpaNL2hlYWQAAARwAAAAMAAAADZbE6SjaGhlYQAABKAAAAAdAAAAJAb9A15obXR4AAAEwAAAABAAAAAsJxAAAGxvY2EAAATQAAAAGAAAABgEUAVEbWF4cAAABOgAAAAfAAAAIAEbADtuYW1lAAAFCAAAAVYAAAMSlciz2nBvc3QAAAZgAAAAZwAAAJOZ/fmIeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGTuZZzAwMrAwFTFtIeBgaEHQjM+YDBkZAKKMrAyM2AFAWmuKQwOrxhfcTEH/c9iiGIOYpgGFGYEyQEA7gQLyQB4nO2RwRHDMAgEVxaWbcal5JmC8nItqVVNOBy4jDCzd8MN0gOAFejBKzBoFw3VJ9KWecczN945Y8qn33dok0ZvqUvMWvw42Ng58t3gX2fq9+lceytyk0uBvBe6yLRCu51roWvNUSDfCuR7gfwokHuB/wCP9xuPAAB4nI2SwU/TcBTH3/uNrRgJOtlvTSad/lq6wdTCaLuSuIzIFlmyBELWwLygARNn8ARREpJedpKriaAhIZwgGk+cMHr0H/CAN696IUYTLzZZ4detIBhNbN/r+77X5NNv+wphgMOvoQWyDyEQ4DxcgB6AHkaZyFM4VR3yrXlpB7e8eztnFdmv2tV2AMA/eX+eLR7+9LpO1/9k/dWb60Pcs+osj7R4Y6QBnXCRk6ioC6Klm0xAQbdEy31yPzlT/NEcN1F54Nw6MEmj8/Ht2qZjep+/vzwwIWB8CT0in6ADYgAoWiILR42UwuQIjcbiOhvO4Vz92fvmHtnIys09OZuVSVnO4lXnnZvxVTAF/lb8CD0nd4BCBjROU6g+nETaHbqGXBXQ0DBsFPAmmorcjbFkW2loMZORDcfRJgYxMVSQHae0WCotNj9oE1qgS/5d7TVOeLukNqlNavLoUGKyuPR0qejyrq147bAh0vKxQNZb3zkKl+EK9HM3/p5MRnE4HovIKSMn0hPVw+fqcYd9ZLz5lmc+0ddnqGoiKM7vEWnYrm3jvGr4Lf4Kqrdp2w/bmls49vEm2DflTtK+D5NFgxR0geqmYvHgheohnfKrn6ZyYqOVHysVh0cmY7fDcdCwvV0bt2y3pg7UVHt7wOuiGTqw7T8Wg10MQpw3qXRKkYVuFMQCWjk9J8ZFgUXJYb5cmbo7XV2R5uns6Fg5P2LeWMdlfGH0Sv3q6gwr1iUJ4zGVD0+YrwKmLESEdJSlcy1gkv85GqZT5NxUpZxfw+W16+ZIvjw2Ohufk1aq0yQs9Rpr3uq6GqOYlOpFNrOq9sMRAzTbGgB4nGNgZGBgAOI3/vVz4vltvjJwM78AijDUqG5oRND/nzGvZLoG5HIwMIFEAVO2DAV4nGNgZGBgDvqfBSRfMAAB80oGRgZUwA0AWFIDYwAAAHicY2BgYGB+QRwGAMEQCS8AAAAAACgATgB2AJgAvgECAUYBhAGuAdh4nGNgZGBg4GbQZ2BjAAEmIOYCQgaG/2A+AwAOlAFXAHicpZK7TsMwGIVPekO0CCEhsSFlQF2Q08vYjaXdO3REShMnTZXEkeNW7cbEI/AevANi5okQJ8YTQwdqS/bnc87/24oC4Aaf8NAMD/d2bUYLFzz9cpv04LhDfnLcxQDPjnvUM8d9POLV8QC3eGcHr3NJZYYPxy1c49txGzPvynGHPHfcxZ334rhH/c1xHyvvy/EAw9ZwH4ZxVgqdRRth5MEIGWdGaZFFqqyXMt3loT6ZOWmupK4zVfqTYHwyt5Cl1KGRsb8++vU+nRqT+IlWhT9XpZF5rvxKq62MTLAxppqNRonTg0gV2CPkjPkVSwho7hE2JAOJA1fBvXENFF1hfcVsjSWdFDvkrNdn9Pl/5YqO5p7Zs48JAozP6LegU9qeoU3H7LnGkWvzyhRTqgYJzwkzCgVpbmubdM6pqFTW21KJqAe8u6mq+BeOOJM/+cDeXvwAG1qfYAAAeJxth2sOAiEMBvut4AO4yh6KXSoSa0mwe3+N/HWSSWZooUmg/0QsOMHB44wLrrghICJRytKqrjur8QhzhO8WZ45WH+Z34ay+vXJlJ02fUdrb1u0QYUu/7qPw4OK+dndo6UQf3z4gAwA=) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --vaadin-rte-icons-align-center: "\\ea01";
      --vaadin-rte-icons-align-left: "\\ea02";
      --vaadin-rte-icons-align-right: "\\ea03";
      --vaadin-rte-icons-clean: "\\ea04";
      --vaadin-rte-icons-image: "\\ea05";
      --vaadin-rte-icons-link: "\\ea06";
      --vaadin-rte-icons-list-bullet: "\\ea07";
      --vaadin-rte-icons-list-ordered: "\\ea08";
      --vaadin-rte-icons-redo: "\\ea09";
      --vaadin-rte-icons-undo: "\\ea0a";
    }
  </style>
`;document.head.appendChild(vn.content);const yn=$e`
  [part~='toolbar-button-align-center']::before {
    content: var(--vaadin-rte-icons-align-center);
  }

  [part~='toolbar-button-align-left']::before {
    content: var(--vaadin-rte-icons-align-left);
  }

  [part~='toolbar-button-align-right']::before {
    content: var(--vaadin-rte-icons-align-right);
  }

  [part~='toolbar-button-clean']::before {
    content: var(--vaadin-rte-icons-clean);
  }

  [part~='toolbar-button-image']::before {
    content: var(--vaadin-rte-icons-image);
  }

  [part~='toolbar-button-link']::before {
    content: var(--vaadin-rte-icons-link);
  }

  [part~='toolbar-button-list-bullet']::before {
    content: var(--vaadin-rte-icons-list-bullet);
  }

  [part~='toolbar-button-list-ordered']::before {
    content: var(--vaadin-rte-icons-list-ordered);
  }

  [part~='toolbar-button-redo']::before {
    content: var(--vaadin-rte-icons-redo);
  }

  [part~='toolbar-button-undo']::before {
    content: var(--vaadin-rte-icons-undo);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part~='toolbar-button-redo']::before {
    content: var(--vaadin-rte-icons-undo);
  }

  :host([dir='rtl']) [part~='toolbar-button-undo']::before {
    content: var(--vaadin-rte-icons-redo);
  }
`;Qe("",yn,{moduleId:"vaadin-rich-text-editor-icons"});/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Dn=$e`
  [part='toolbar'] {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  [part~='toolbar-button'] {
    width: 2em;
    height: 2em;
    margin: 0;
    padding: 0;
    font: inherit;
    line-height: 1;
    text-transform: none;
    background: transparent;
    border: none;
    position: relative;
  }

  [part~='toolbar-button']:hover {
    outline: none;
  }

  @media (forced-colors: active) {
    [part~='toolbar-button']:focus,
    [part~='toolbar-button']:hover {
      outline: 1px solid !important;
    }

    [part~='toolbar-button'][on] {
      outline: 2px solid;
      outline-offset: -1px;
    }
  }

  [part~='toolbar-button']::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  [part~='toolbar-button-undo']::before,
  [part~='toolbar-button-redo']::before,
  [part~='toolbar-button-list-ordered']::before,
  [part~='toolbar-button-list-bullet']::before,
  [part~='toolbar-button-align-left']::before,
  [part~='toolbar-button-align-center']::before,
  [part~='toolbar-button-align-right']::before,
  [part~='toolbar-button-image']::before,
  [part~='toolbar-button-link']::before,
  [part~='toolbar-button-clean']::before {
    font-family: 'vaadin-rte-icons', sans-serif;
  }

  [part~='toolbar-group'] {
    display: flex;
    margin: 0 0.5em;
  }

  [part~='toolbar-button-bold']::before {
    content: 'B';
    font-weight: 700;
  }

  [part~='toolbar-button-italic']::before {
    content: 'I';
    font-style: italic;
  }

  [part~='toolbar-button-underline']::before {
    content: 'U';
    text-decoration: underline;
  }

  [part~='toolbar-button-strike']::before {
    content: 'T';
    text-decoration: line-through;
  }

  [part~='toolbar-button-h1']::before {
    content: 'H1';
    font-size: 1.25em;
  }

  [part~='toolbar-button-h2']::before {
    content: 'H2';
    font-size: 1em;
  }

  [part~='toolbar-button-h3']::before {
    content: 'H3';
    font-size: 0.875em;
  }

  [part~='toolbar-button-h1']::before,
  [part~='toolbar-button-h2']::before,
  [part~='toolbar-button-h3']::before {
    letter-spacing: -0.05em;
  }

  [part~='toolbar-button-subscript']::before,
  [part~='toolbar-button-superscript']::before {
    content: 'X';
  }

  [part~='toolbar-button-subscript']::after,
  [part~='toolbar-button-superscript']::after {
    content: '2';
    position: absolute;
    top: 50%;
    left: 70%;
    font-size: 0.625em;
  }

  [part~='toolbar-button-superscript']::after {
    top: 20%;
  }

  [part~='toolbar-button-blockquote']::before {
    content: '\\201D';
    font-size: 2em;
    height: 0.6em;
  }

  [part~='toolbar-button-code-block']::before {
    content: '</>';
    font-size: 0.875em;
  }

  [part~='toolbar-button-background']::before,
  [part~='toolbar-button-color']::before {
    content: 'A';
    font-size: 1em;
  }

  [part~='toolbar-button-color']::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 25%;
    right: 25%;
    width: 50%;
    height: 4px;
    background-color: var(--_color-value, currentColor);
  }

  [part~='toolbar-button-background']::before {
    z-index: 1;
  }

  [part~='toolbar-button-background']::after {
    content: '';
    position: absolute;
    inset: 20%;
    background: repeating-linear-gradient(
      135deg,
      var(--_background-value, currentColor),
      var(--_background-value, currentColor) 1px,
      transparent 1px,
      transparent 2px
    );
  }
`,_n=[yn,Dn];Qe("",_n,{moduleId:"vaadin-rich-text-editor-toolbar-styles"});var gn={};/*!
 * Quill Editor v1.3.6
 * http://quilljs.com
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */var bn;function Mn(){return bn||(bn=1,function(Le,Pe){Le.Quill=Pe()}(window,()=>(()=>{var Le={423:()=>{let C=document.createElement("div");if(C.classList.toggle("test-class",!1),C.classList.contains("test-class")){let p=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(O,k){return arguments.length>1&&!this.contains(O)==!k?k:p.call(this,O)}}String.prototype.startsWith||(String.prototype.startsWith=function(p,O){return O=O||0,this.substr(O,p.length)===p}),String.prototype.endsWith||(String.prototype.endsWith=function(p,O){var k=this.toString();(typeof O!="number"||!isFinite(O)||Math.floor(O)!==O||O>k.length)&&(O=k.length),O-=p.length;var q=k.indexOf(p,O);return q!==-1&&q===O}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(p){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof p!="function")throw new TypeError("predicate must be a function");for(var O,k=Object(this),q=k.length>>>0,E=arguments[1],S=0;S<q;S++)if(O=k[S],p.call(E,O,S,k))return O}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},418:C=>{var p=Object.prototype.hasOwnProperty,O="~";function k(){}function q(S,g,c){this.fn=S,this.context=g,this.once=c||!1}function E(){this._events=new k,this._eventsCount=0}Object.create&&(k.prototype=Object.create(null),new k().__proto__||(O=!1)),E.prototype.eventNames=function(){var S,g,c=[];if(this._eventsCount===0)return c;for(g in S=this._events)p.call(S,g)&&c.push(O?g.slice(1):g);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(S)):c},E.prototype.listeners=function(S,g){var c=O?O+S:S,b=this._events[c];if(g)return!!b;if(!b)return[];if(b.fn)return[b.fn];for(var f=0,l=b.length,o=new Array(l);f<l;f++)o[f]=b[f].fn;return o},E.prototype.emit=function(S,g,c,b,f,l){var o=O?O+S:S;if(!this._events[o])return!1;var u,s,r=this._events[o],m=arguments.length;if(r.fn){switch(r.once&&this.removeListener(S,r.fn,void 0,!0),m){case 1:return r.fn.call(r.context),!0;case 2:return r.fn.call(r.context,g),!0;case 3:return r.fn.call(r.context,g,c),!0;case 4:return r.fn.call(r.context,g,c,b),!0;case 5:return r.fn.call(r.context,g,c,b,f),!0;case 6:return r.fn.call(r.context,g,c,b,f,l),!0}for(s=1,u=new Array(m-1);s<m;s++)u[s-1]=arguments[s];r.fn.apply(r.context,u)}else{var A,x=r.length;for(s=0;s<x;s++)switch(r[s].once&&this.removeListener(S,r[s].fn,void 0,!0),m){case 1:r[s].fn.call(r[s].context);break;case 2:r[s].fn.call(r[s].context,g);break;case 3:r[s].fn.call(r[s].context,g,c);break;case 4:r[s].fn.call(r[s].context,g,c,b);break;default:if(!u)for(A=1,u=new Array(m-1);A<m;A++)u[A-1]=arguments[A];r[s].fn.apply(r[s].context,u)}}return!0},E.prototype.on=function(S,g,c){var b=new q(g,c||this),f=O?O+S:S;return this._events[f]?this._events[f].fn?this._events[f]=[this._events[f],b]:this._events[f].push(b):(this._events[f]=b,this._eventsCount++),this},E.prototype.once=function(S,g,c){var b=new q(g,c||this,!0),f=O?O+S:S;return this._events[f]?this._events[f].fn?this._events[f]=[this._events[f],b]:this._events[f].push(b):(this._events[f]=b,this._eventsCount++),this},E.prototype.removeListener=function(S,g,c,b){var f=O?O+S:S;if(!this._events[f])return this;if(!g)return--this._eventsCount==0?this._events=new k:delete this._events[f],this;var l=this._events[f];if(l.fn)l.fn!==g||b&&!l.once||c&&l.context!==c||(--this._eventsCount==0?this._events=new k:delete this._events[f]);else{for(var o=0,u=[],s=l.length;o<s;o++)(l[o].fn!==g||b&&!l[o].once||c&&l[o].context!==c)&&u.push(l[o]);u.length?this._events[f]=u.length===1?u[0]:u:--this._eventsCount==0?this._events=new k:delete this._events[f]}return this},E.prototype.removeAllListeners=function(S){var g;return S?(g=O?O+S:S,this._events[g]&&(--this._eventsCount==0?this._events=new k:delete this._events[g])):(this._events=new k,this._eventsCount=0),this},E.prototype.off=E.prototype.removeListener,E.prototype.addListener=E.prototype.on,E.prototype.setMaxListeners=function(){return this},E.prefixed=O,E.EventEmitter=E,C.exports=E},284:C=>{var p=-1,O=1,k=0;function q(r,m,A,x){if(r===m)return r?[[k,r]]:[];if(A!=null){var D=function(rt,ot,ht){var Bt=typeof ht=="number"?{index:ht,length:0}:ht.oldRange,Dt=typeof ht=="number"?null:ht.newRange,de=rt.length,Mt=ot.length;if(Bt.length===0&&(Dt===null||Dt.length===0)){var nt=Bt.index,Kt=rt.slice(0,nt),Q=rt.slice(nt),Rt=Dt?Dt.index:null,le=nt+Mt-de;if((Rt===null||Rt===le)&&!(le<0||le>Mt)){var Pt=ot.slice(0,le);if((yt=ot.slice(le))===Q){var $=Math.min(nt,le);if((It=Kt.slice(0,$))===(Nt=Pt.slice(0,$)))return u(It,Kt.slice($),Pt.slice($),Q)}}if(Rt===null||Rt===nt){var vt=nt,yt=(Pt=ot.slice(0,vt),ot.slice(vt));if(Pt===Kt){var ct=Math.min(de-vt,Mt-vt);if((Vt=Q.slice(Q.length-ct))===($t=yt.slice(yt.length-ct)))return u(Kt,Q.slice(0,Q.length-ct),yt.slice(0,yt.length-ct),Vt)}}}if(Bt.length>0&&Dt&&Dt.length===0){var It=rt.slice(0,Bt.index),Vt=rt.slice(Bt.index+Bt.length);if(!(Mt<($=It.length)+(ct=Vt.length))){var Nt=ot.slice(0,$),$t=ot.slice(Mt-ct);if(It===Nt&&Vt===$t)return u(It,rt.slice($,de-ct),ot.slice($,Mt-ct),Vt)}}return null}(r,m,A);if(D)return D}var P=S(r,m),M=r.substring(0,P);P=g(r=r.substring(P),m=m.substring(P));var Y=r.substring(r.length-P),at=function(rt,ot){var ht;if(!rt)return[[O,ot]];if(!ot)return[[p,rt]];var Bt=rt.length>ot.length?rt:ot,Dt=rt.length>ot.length?ot:rt,de=Bt.indexOf(Dt);if(de!==-1)return ht=[[O,Bt.substring(0,de)],[k,Dt],[O,Bt.substring(de+Dt.length)]],rt.length>ot.length&&(ht[0][0]=ht[2][0]=p),ht;if(Dt.length===1)return[[p,rt],[O,ot]];var Mt=function(vt,yt){var ct=vt.length>yt.length?vt:yt,It=vt.length>yt.length?yt:vt;if(ct.length<4||2*It.length<ct.length)return null;function Vt(Tt,kt,Ct){for(var I,dt,gt,Gt,Yt=Tt.substring(Ct,Ct+Math.floor(Tt.length/4)),_t=-1,St="";(_t=kt.indexOf(Yt,_t+1))!==-1;){var Ut=S(Tt.substring(Ct),kt.substring(_t)),zt=g(Tt.substring(0,Ct),kt.substring(0,_t));St.length<zt+Ut&&(St=kt.substring(_t-zt,_t)+kt.substring(_t,_t+Ut),I=Tt.substring(0,Ct-zt),dt=Tt.substring(Ct+Ut),gt=kt.substring(0,_t-zt),Gt=kt.substring(_t+Ut))}return 2*St.length>=Tt.length?[I,dt,gt,Gt,St]:null}var Nt,$t,pt,Lt,oe,Qt=Vt(ct,It,Math.ceil(ct.length/4)),ue=Vt(ct,It,Math.ceil(ct.length/2));if(!Qt&&!ue)return null;Nt=ue?Qt&&Qt[4].length>ue[4].length?Qt:ue:Qt,vt.length>yt.length?($t=Nt[0],pt=Nt[1],Lt=Nt[2],oe=Nt[3]):(Lt=Nt[0],oe=Nt[1],$t=Nt[2],pt=Nt[3]);var ie=Nt[4];return[$t,pt,Lt,oe,ie]}(rt,ot);if(Mt){var nt=Mt[0],Kt=Mt[1],Q=Mt[2],Rt=Mt[3],le=Mt[4],Pt=q(nt,Q),$=q(Kt,Rt);return Pt.concat([[k,le]],$)}return function(vt,yt){for(var ct=vt.length,It=yt.length,Vt=Math.ceil((ct+It)/2),Nt=Vt,$t=2*Vt,pt=new Array($t),Lt=new Array($t),oe=0;oe<$t;oe++)pt[oe]=-1,Lt[oe]=-1;pt[Nt+1]=0,Lt[Nt+1]=0;for(var Qt=ct-It,ue=Qt%2!=0,ie=0,Tt=0,kt=0,Ct=0,I=0;I<Vt;I++){for(var dt=-I+ie;dt<=I-Tt;dt+=2){for(var gt=Nt+dt,Gt=(zt=dt===-I||dt!==I&&pt[gt-1]<pt[gt+1]?pt[gt+1]:pt[gt-1]+1)-dt;zt<ct&&Gt<It&&vt.charAt(zt)===yt.charAt(Gt);)zt++,Gt++;if(pt[gt]=zt,zt>ct)Tt+=2;else if(Gt>It)ie+=2;else if(ue&&(St=Nt+Qt-dt)>=0&&St<$t&&Lt[St]!==-1&&zt>=(_t=ct-Lt[St]))return E(vt,yt,zt,Gt)}for(var Yt=-I+kt;Yt<=I-Ct;Yt+=2){for(var _t,St=Nt+Yt,Ut=(_t=Yt===-I||Yt!==I&&Lt[St-1]<Lt[St+1]?Lt[St+1]:Lt[St-1]+1)-Yt;_t<ct&&Ut<It&&vt.charAt(ct-_t-1)===yt.charAt(It-Ut-1);)_t++,Ut++;if(Lt[St]=_t,_t>ct)Ct+=2;else if(Ut>It)kt+=2;else if(!ue&&(gt=Nt+Qt-Yt)>=0&&gt<$t&&pt[gt]!==-1){var zt;if(Gt=Nt+(zt=pt[gt])-gt,zt>=(_t=ct-_t))return E(vt,yt,zt,Gt)}}}return[[p,vt],[O,yt]]}(rt,ot)}(r=r.substring(0,r.length-P),m=m.substring(0,m.length-P));return M&&at.unshift([k,M]),Y&&at.push([k,Y]),c(at,x),at}function E(r,m,A,x){var D=r.substring(0,A),P=m.substring(0,x),M=r.substring(A),Y=m.substring(x),at=q(D,P),rt=q(M,Y);return at.concat(rt)}function S(r,m){if(!r||!m||r.charAt(0)!==m.charAt(0))return 0;for(var A=0,x=Math.min(r.length,m.length),D=x,P=0;A<D;)r.substring(P,D)==m.substring(P,D)?P=A=D:x=D,D=Math.floor((x-A)/2+A);return b(r.charCodeAt(D-1))&&D--,D}function g(r,m){if(!r||!m||r.slice(-1)!==m.slice(-1))return 0;for(var A=0,x=Math.min(r.length,m.length),D=x,P=0;A<D;)r.substring(r.length-D,r.length-P)==m.substring(m.length-D,m.length-P)?P=A=D:x=D,D=Math.floor((x-A)/2+A);return f(r.charCodeAt(r.length-D))&&D--,D}function c(r,m){r.push([k,""]);for(var A,x=0,D=0,P=0,M="",Y="";x<r.length;)if(x<r.length-1&&!r[x][1])r.splice(x,1);else switch(r[x][0]){case O:P++,Y+=r[x][1],x++;break;case p:D++,M+=r[x][1],x++;break;case k:var at=x-P-D-1;if(m){if(at>=0&&o(r[at][1])){var rt=r[at][1].slice(-1);if(r[at][1]=r[at][1].slice(0,-1),M=rt+M,Y=rt+Y,!r[at][1]){r.splice(at,1),x--;var ot=at-1;r[ot]&&r[ot][0]===O&&(P++,Y=r[ot][1]+Y,ot--),r[ot]&&r[ot][0]===p&&(D++,M=r[ot][1]+M,ot--),at=ot}}l(r[x][1])&&(rt=r[x][1].charAt(0),r[x][1]=r[x][1].slice(1),M+=rt,Y+=rt)}if(x<r.length-1&&!r[x][1]){r.splice(x,1);break}if(M.length>0||Y.length>0){M.length>0&&Y.length>0&&((A=S(Y,M))!==0&&(at>=0?r[at][1]+=Y.substring(0,A):(r.splice(0,0,[k,Y.substring(0,A)]),x++),Y=Y.substring(A),M=M.substring(A)),(A=g(Y,M))!==0&&(r[x][1]=Y.substring(Y.length-A)+r[x][1],Y=Y.substring(0,Y.length-A),M=M.substring(0,M.length-A)));var ht=P+D;M.length===0&&Y.length===0?(r.splice(x-ht,ht),x-=ht):M.length===0?(r.splice(x-ht,ht,[O,Y]),x=x-ht+1):Y.length===0?(r.splice(x-ht,ht,[p,M]),x=x-ht+1):(r.splice(x-ht,ht,[p,M],[O,Y]),x=x-ht+2)}x!==0&&r[x-1][0]===k?(r[x-1][1]+=r[x][1],r.splice(x,1)):x++,P=0,D=0,M="",Y=""}r[r.length-1][1]===""&&r.pop();var Bt=!1;for(x=1;x<r.length-1;)r[x-1][0]===k&&r[x+1][0]===k&&(r[x][1].substring(r[x][1].length-r[x-1][1].length)===r[x-1][1]?(r[x][1]=r[x-1][1]+r[x][1].substring(0,r[x][1].length-r[x-1][1].length),r[x+1][1]=r[x-1][1]+r[x+1][1],r.splice(x-1,1),Bt=!0):r[x][1].substring(0,r[x+1][1].length)==r[x+1][1]&&(r[x-1][1]+=r[x+1][1],r[x][1]=r[x][1].substring(r[x+1][1].length)+r[x+1][1],r.splice(x+1,1),Bt=!0)),x++;Bt&&c(r,m)}function b(r){return r>=55296&&r<=56319}function f(r){return r>=56320&&r<=57343}function l(r){return f(r.charCodeAt(0))}function o(r){return b(r.charCodeAt(r.length-1))}function u(r,m,A,x){return o(r)||l(x)?null:function(D){for(var P=[],M=0;M<D.length;M++)D[M][1].length>0&&P.push(D[M]);return P}([[k,r],[p,m],[O,A],[k,x]])}function s(r,m,A){return q(r,m,A,!0)}s.INSERT=O,s.DELETE=p,s.EQUAL=k,C.exports=s},739:(C,p,O)=>{C=O.nmd(C);var k="__lodash_hash_undefined__",q=9007199254740991,E="[object Arguments]",S="[object Boolean]",g="[object Date]",c="[object Function]",b="[object GeneratorFunction]",f="[object Map]",l="[object Number]",o="[object Object]",u="[object Promise]",s="[object RegExp]",r="[object Set]",m="[object String]",A="[object Symbol]",x="[object WeakMap]",D="[object ArrayBuffer]",P="[object DataView]",M="[object Float32Array]",Y="[object Float64Array]",at="[object Int8Array]",rt="[object Int16Array]",ot="[object Int32Array]",ht="[object Uint8Array]",Bt="[object Uint8ClampedArray]",Dt="[object Uint16Array]",de="[object Uint32Array]",Mt=/\w*$/,nt=/^\[object .+?Constructor\]$/,Kt=/^(?:0|[1-9]\d*)$/,Q={};Q[E]=Q["[object Array]"]=Q[D]=Q[P]=Q[S]=Q[g]=Q[M]=Q[Y]=Q[at]=Q[rt]=Q[ot]=Q[f]=Q[l]=Q[o]=Q[s]=Q[r]=Q[m]=Q[A]=Q[ht]=Q[Bt]=Q[Dt]=Q[de]=!0,Q["[object Error]"]=Q[c]=Q[x]=!1;var Rt=typeof O.g=="object"&&O.g&&O.g.Object===Object&&O.g,le=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Rt||le||Function("return this")(),$=p&&!p.nodeType&&p,vt=$&&C&&!C.nodeType&&C,yt=vt&&vt.exports===$;function ct(_,L){return _.set(L[0],L[1]),_}function It(_,L){return _.add(L),_}function Vt(_,L,H,d){var N=-1,B=_?_.length:0;for(d;++N<B;)H=L(H,_[N],N,_);return H}function Nt(_){var L=!1;if(_!=null&&typeof _.toString!="function")try{L=!!(_+"")}catch{}return L}function $t(_){var L=-1,H=Array(_.size);return _.forEach(function(d,N){H[++L]=[N,d]}),H}function pt(_,L){return function(H){return _(L(H))}}function Lt(_){var L=-1,H=Array(_.size);return _.forEach(function(d){H[++L]=d}),H}var oe,Qt=Array.prototype,ue=Function.prototype,ie=Object.prototype,Tt=Pt["__core-js_shared__"],kt=(oe=/[^.]+$/.exec(Tt&&Tt.keys&&Tt.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"",Ct=ue.toString,I=ie.hasOwnProperty,dt=ie.toString,gt=RegExp("^"+Ct.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gt=yt?Pt.Buffer:void 0,Yt=Pt.Symbol,_t=Pt.Uint8Array,St=pt(Object.getPrototypeOf,Object),Ut=Object.create,zt=ie.propertyIsEnumerable,je=Qt.splice,_e=Object.getOwnPropertySymbols,Ue=Gt?Gt.isBuffer:void 0,Ee=pt(Object.keys,Object),ke=R(Pt,"DataView"),Ae=R(Pt,"Map"),we=R(Pt,"Promise"),fe=R(Pt,"Set"),qe=R(Pt,"WeakMap"),xe=R(Object,"create"),Ge=bt(ke),Re=bt(Ae),Ke=bt(we),Oe=bt(fe),Te=bt(qe),pe=Yt?Yt.prototype:void 0,se=pe?pe.valueOf:void 0;function Xt(_){var L=-1,H=_?_.length:0;for(this.clear();++L<H;){var d=_[L];this.set(d[0],d[1])}}function ne(_){var L=-1,H=_?_.length:0;for(this.clear();++L<H;){var d=_[L];this.set(d[0],d[1])}}function Jt(_){var L=-1,H=_?_.length:0;for(this.clear();++L<H;){var d=_[L];this.set(d[0],d[1])}}function ae(_){this.__data__=new ne(_)}function me(_,L){var H=wt(_)||function(F){return function(X){return function(Z){return!!Z&&typeof Z=="object"}(X)&&jt(X)}(F)&&I.call(F,"callee")&&(!zt.call(F,"callee")||dt.call(F)==E)}(_)?function(F,X){for(var Z=-1,ut=Array(F);++Z<F;)ut[Z]=X(Z);return ut}(_.length,String):[],d=H.length,N=!!d;for(var B in _)!I.call(_,B)||N&&(B=="length"||ft(B,d))||H.push(B);return H}function Ne(_,L,H){var d=_[L];I.call(_,L)&&Wt(d,H)&&(H!==void 0||L in _)||(_[L]=H)}function ve(_,L){for(var H=_.length;H--;)if(Wt(_[H][0],L))return H;return-1}function Ce(_,L,H,d,N,B,F){var X;if(d&&(X=B?d(_,N,B,F):d(_)),X!==void 0)return X;if(!ce(_))return _;var Z=wt(_);if(Z){if(X=function(z){var W=z.length,et=z.constructor(W);return W&&typeof z[0]=="string"&&I.call(z,"index")&&(et.index=z.index,et.input=z.input),et}(_),!L)return function(z,W){var et=-1,it=z.length;for(W||(W=Array(it));++et<it;)W[et]=z[et];return W}(_,X)}else{var ut=J(_),At=ut==c||ut==b;if(tt(_))return function(z,W){if(W)return z.slice();var et=new z.constructor(z.length);return z.copy(et),et}(_,L);if(ut==o||ut==E||At&&!B){if(Nt(_))return B?_:{};if(X=function(z){return typeof z.constructor!="function"||mt(z)?{}:(W=St(z),ce(W)?Ut(W):{});var W}(At?{}:_),!L)return function(z,W){return v(z,K(z),W)}(_,function(z,W){return z&&v(W,ye(W),z)}(X,_))}else{if(!Q[ut])return B?_:{};X=function(z,W,et,it){var he=z.constructor;switch(W){case D:return Ie(z);case S:case g:return new he(+z);case P:return function(lt,qt){var te=qt?Ie(lt.buffer):lt.buffer;return new lt.constructor(te,lt.byteOffset,lt.byteLength)}(z,it);case M:case Y:case at:case rt:case ot:case ht:case Bt:case Dt:case de:return function(lt,qt){var te=qt?Ie(lt.buffer):lt.buffer;return new lt.constructor(te,lt.byteOffset,lt.length)}(z,it);case f:return function(lt,qt,te){var ge=qt?te($t(lt),!0):$t(lt);return Vt(ge,ct,new lt.constructor)}(z,it,et);case l:case m:return new he(z);case s:return function(lt){var qt=new lt.constructor(lt.source,Mt.exec(lt));return qt.lastIndex=lt.lastIndex,qt}(z);case r:return function(lt,qt,te){var ge=qt?te(Lt(lt),!0):Lt(lt);return Vt(ge,It,new lt.constructor)}(z,it,et);case A:return Zt=z,se?Object(se.call(Zt)):{}}var Zt}(_,ut,Ce,L)}}F||(F=new ae);var re=F.get(_);if(re)return re;if(F.set(_,X),!Z)var Et=H?function(z){return function(W,et,it){var he=et(W);return wt(W)?he:function(Zt,lt){for(var qt=-1,te=lt.length,ge=Zt.length;++qt<te;)Zt[ge+qt]=lt[qt];return Zt}(he,it(W))}(z,ye,K)}(_):ye(_);return function(z,W){for(var et=-1,it=z?z.length:0;++et<it&&W(z[et],et,z)!==!1;);}(Et||_,function(z,W){Et&&(z=_[W=z]),Ne(X,W,Ce(z,L,H,d,W,_,F))}),X}function Ze(_){return!(!ce(_)||(L=_,kt&&kt in L))&&(Ft(_)||Nt(_)?gt:nt).test(bt(_));var L}function Ie(_){var L=new _.constructor(_.byteLength);return new _t(L).set(new _t(_)),L}function v(_,L,H,d){H||(H={});for(var N=-1,B=L.length;++N<B;){var F=L[N],X=void 0;Ne(H,F,X===void 0?_[F]:X)}return H}function w(_,L){var H,d,N=_.__data__;return((d=typeof(H=L))=="string"||d=="number"||d=="symbol"||d=="boolean"?H!=="__proto__":H===null)?N[typeof L=="string"?"string":"hash"]:N.map}function R(_,L){var H=function(d,N){return d?.[N]}(_,L);return Ze(H)?H:void 0}Xt.prototype.clear=function(){this.__data__=xe?xe(null):{}},Xt.prototype.delete=function(_){return this.has(_)&&delete this.__data__[_]},Xt.prototype.get=function(_){var L=this.__data__;if(xe){var H=L[_];return H===k?void 0:H}return I.call(L,_)?L[_]:void 0},Xt.prototype.has=function(_){var L=this.__data__;return xe?L[_]!==void 0:I.call(L,_)},Xt.prototype.set=function(_,L){return this.__data__[_]=xe&&L===void 0?k:L,this},ne.prototype.clear=function(){this.__data__=[]},ne.prototype.delete=function(_){var L=this.__data__,H=ve(L,_);return!(H<0)&&(H==L.length-1?L.pop():je.call(L,H,1),!0)},ne.prototype.get=function(_){var L=this.__data__,H=ve(L,_);return H<0?void 0:L[H][1]},ne.prototype.has=function(_){return ve(this.__data__,_)>-1},ne.prototype.set=function(_,L){var H=this.__data__,d=ve(H,_);return d<0?H.push([_,L]):H[d][1]=L,this},Jt.prototype.clear=function(){this.__data__={hash:new Xt,map:new(Ae||ne),string:new Xt}},Jt.prototype.delete=function(_){return w(this,_).delete(_)},Jt.prototype.get=function(_){return w(this,_).get(_)},Jt.prototype.has=function(_){return w(this,_).has(_)},Jt.prototype.set=function(_,L){return w(this,_).set(_,L),this},ae.prototype.clear=function(){this.__data__=new ne},ae.prototype.delete=function(_){return this.__data__.delete(_)},ae.prototype.get=function(_){return this.__data__.get(_)},ae.prototype.has=function(_){return this.__data__.has(_)},ae.prototype.set=function(_,L){var H=this.__data__;if(H instanceof ne){var d=H.__data__;if(!Ae||d.length<199)return d.push([_,L]),this;H=this.__data__=new Jt(d)}return H.set(_,L),this};var K=_e?pt(_e,Object):function(){return[]},J=function(_){return dt.call(_)};function ft(_,L){return!!(L=L??q)&&(typeof _=="number"||Kt.test(_))&&_>-1&&_%1==0&&_<L}function mt(_){var L=_&&_.constructor;return _===(typeof L=="function"&&L.prototype||ie)}function bt(_){if(_!=null){try{return Ct.call(_)}catch{}try{return _+""}catch{}}return""}function Wt(_,L){return _===L||_!=_&&L!=L}(ke&&J(new ke(new ArrayBuffer(1)))!=P||Ae&&J(new Ae)!=f||we&&J(we.resolve())!=u||fe&&J(new fe)!=r||qe&&J(new qe)!=x)&&(J=function(_){var L=dt.call(_),H=L==o?_.constructor:void 0,d=H?bt(H):void 0;if(d)switch(d){case Ge:return P;case Re:return f;case Ke:return u;case Oe:return r;case Te:return x}return L});var wt=Array.isArray;function jt(_){return _!=null&&function(L){return typeof L=="number"&&L>-1&&L%1==0&&L<=q}(_.length)&&!Ft(_)}var tt=Ue||function(){return!1};function Ft(_){var L=ce(_)?dt.call(_):"";return L==c||L==b}function ce(_){var L=typeof _;return!!_&&(L=="object"||L=="function")}function ye(_){return jt(_)?me(_):function(L){if(!mt(L))return Ee(L);var H=[];for(var d in Object(L))I.call(L,d)&&d!="constructor"&&H.push(d);return H}(_)}C.exports=function(_){return Ce(_,!0,!0)}},216:(C,p,O)=>{C=O.nmd(C);var k="__lodash_hash_undefined__",q=1,E=2,S=9007199254740991,g="[object Arguments]",c="[object Array]",b="[object AsyncFunction]",f="[object Boolean]",l="[object Date]",o="[object Error]",u="[object Function]",s="[object GeneratorFunction]",r="[object Map]",m="[object Number]",A="[object Null]",x="[object Object]",D="[object Promise]",P="[object Proxy]",M="[object RegExp]",Y="[object Set]",at="[object String]",rt="[object Symbol]",ot="[object Undefined]",ht="[object WeakMap]",Bt="[object ArrayBuffer]",Dt="[object DataView]",de=/^\[object .+?Constructor\]$/,Mt=/^(?:0|[1-9]\d*)$/,nt={};nt["[object Float32Array]"]=nt["[object Float64Array]"]=nt["[object Int8Array]"]=nt["[object Int16Array]"]=nt["[object Int32Array]"]=nt["[object Uint8Array]"]=nt["[object Uint8ClampedArray]"]=nt["[object Uint16Array]"]=nt["[object Uint32Array]"]=!0,nt[g]=nt[c]=nt[Bt]=nt[f]=nt[Dt]=nt[l]=nt[o]=nt[u]=nt[r]=nt[m]=nt[x]=nt[M]=nt[Y]=nt[at]=nt[ht]=!1;var Kt=typeof O.g=="object"&&O.g&&O.g.Object===Object&&O.g,Q=typeof self=="object"&&self&&self.Object===Object&&self,Rt=Kt||Q||Function("return this")(),le=p&&!p.nodeType&&p,Pt=le&&C&&!C.nodeType&&C,$=Pt&&Pt.exports===le,vt=$&&Kt.process,yt=function(){try{return vt&&vt.binding&&vt.binding("util")}catch{}}(),ct=yt&&yt.isTypedArray;function It(d,N){for(var B=-1,F=d==null?0:d.length;++B<F;)if(N(d[B],B,d))return!0;return!1}function Vt(d){var N=-1,B=Array(d.size);return d.forEach(function(F,X){B[++N]=[X,F]}),B}function Nt(d){var N=-1,B=Array(d.size);return d.forEach(function(F){B[++N]=F}),B}var $t,pt,Lt,oe=Array.prototype,Qt=Function.prototype,ue=Object.prototype,ie=Rt["__core-js_shared__"],Tt=Qt.toString,kt=ue.hasOwnProperty,Ct=($t=/[^.]+$/.exec(ie&&ie.keys&&ie.keys.IE_PROTO||""))?"Symbol(src)_1."+$t:"",I=ue.toString,dt=RegExp("^"+Tt.call(kt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gt=$?Rt.Buffer:void 0,Gt=Rt.Symbol,Yt=Rt.Uint8Array,_t=ue.propertyIsEnumerable,St=oe.splice,Ut=Gt?Gt.toStringTag:void 0,zt=Object.getOwnPropertySymbols,je=gt?gt.isBuffer:void 0,_e=(pt=Object.keys,Lt=Object,function(d){return pt(Lt(d))}),Ue=K(Rt,"DataView"),Ee=K(Rt,"Map"),ke=K(Rt,"Promise"),Ae=K(Rt,"Set"),we=K(Rt,"WeakMap"),fe=K(Object,"create"),qe=bt(Ue),xe=bt(Ee),Ge=bt(ke),Re=bt(Ae),Ke=bt(we),Oe=Gt?Gt.prototype:void 0,Te=Oe?Oe.valueOf:void 0;function pe(d){var N=-1,B=d==null?0:d.length;for(this.clear();++N<B;){var F=d[N];this.set(F[0],F[1])}}function se(d){var N=-1,B=d==null?0:d.length;for(this.clear();++N<B;){var F=d[N];this.set(F[0],F[1])}}function Xt(d){var N=-1,B=d==null?0:d.length;for(this.clear();++N<B;){var F=d[N];this.set(F[0],F[1])}}function ne(d){var N=-1,B=d==null?0:d.length;for(this.__data__=new Xt;++N<B;)this.add(d[N])}function Jt(d){var N=this.__data__=new se(d);this.size=N.size}function ae(d,N){var B=jt(d),F=!B&&wt(d),X=!B&&!F&&tt(d),Z=!B&&!F&&!X&&L(d),ut=B||F||X||Z,At=ut?function(z,W){for(var et=-1,it=Array(z);++et<z;)it[et]=W(et);return it}(d.length,String):[],re=At.length;for(var Et in d)!kt.call(d,Et)||ut&&(Et=="length"||X&&(Et=="offset"||Et=="parent")||Z&&(Et=="buffer"||Et=="byteLength"||Et=="byteOffset")||mt(Et,re))||At.push(Et);return At}function me(d,N){for(var B=d.length;B--;)if(Wt(d[B][0],N))return B;return-1}function Ne(d){return d==null?d===void 0?ot:A:Ut&&Ut in Object(d)?function(N){var B=kt.call(N,Ut),F=N[Ut];try{N[Ut]=void 0;var X=!0}catch{}var Z=I.call(N);return X&&(B?N[Ut]=F:delete N[Ut]),Z}(d):function(N){return I.call(N)}(d)}function ve(d){return _(d)&&Ne(d)==g}function Ce(d,N,B,F,X){return d===N||(d==null||N==null||!_(d)&&!_(N)?d!=d&&N!=N:function(Z,ut,At,re,Et,z){var W=jt(Z),et=jt(ut),it=W?c:ft(Z),he=et?c:ft(ut),Zt=(it=it==g?x:it)==x,lt=(he=he==g?x:he)==x,qt=it==he;if(qt&&tt(Z)){if(!tt(ut))return!1;W=!0,Zt=!1}if(qt&&!Zt)return z||(z=new Jt),W||L(Z)?v(Z,ut,At,re,Et,z):function(Ot,xt,Ye,ze,Xe,be,Be){switch(Ye){case Dt:if(Ot.byteLength!=xt.byteLength||Ot.byteOffset!=xt.byteOffset)return!1;Ot=Ot.buffer,xt=xt.buffer;case Bt:return!(Ot.byteLength!=xt.byteLength||!be(new Yt(Ot),new Yt(xt)));case f:case l:case m:return Wt(+Ot,+xt);case o:return Ot.name==xt.name&&Ot.message==xt.message;case M:case at:return Ot==xt+"";case r:var Fe=Vt;case Y:var He=ze&q;if(Fe||(Fe=Nt),Ot.size!=xt.size&&!He)return!1;var We=Be.get(Ot);if(We)return We==xt;ze|=E,Be.set(Ot,xt);var Je=v(Fe(Ot),Fe(xt),ze,Xe,be,Be);return Be.delete(Ot),Je;case rt:if(Te)return Te.call(Ot)==Te.call(xt)}return!1}(Z,ut,it,At,re,Et,z);if(!(At&q)){var te=Zt&&kt.call(Z,"__wrapped__"),ge=lt&&kt.call(ut,"__wrapped__");if(te||ge){var sn=te?Z.value():Z,rn=ge?ut.value():ut;return z||(z=new Jt),Et(sn,rn,At,re,z)}}return qt?(z||(z=new Jt),function(Ot,xt,Ye,ze,Xe,be){var Be=Ye&q,Fe=w(Ot),He=Fe.length,We=w(xt),Je=We.length;if(He!=Je&&!Be)return!1;for(var tn=He;tn--;){var a=Fe[tn];if(!(Be?a in xt:kt.call(xt,a)))return!1}var t=be.get(Ot);if(t&&be.get(xt))return t==xt;var e=!0;be.set(Ot,xt),be.set(xt,Ot);for(var n=Be;++tn<He;){var i=Ot[a=Fe[tn]],h=xt[a];if(ze)var y=Be?ze(h,i,a,xt,Ot,be):ze(i,h,a,Ot,xt,be);if(!(y===void 0?i===h||Xe(i,h,Ye,ze,be):y)){e=!1;break}n||(n=a=="constructor")}if(e&&!n){var T=Ot.constructor,V=xt.constructor;T==V||!("constructor"in Ot)||!("constructor"in xt)||typeof T=="function"&&T instanceof T&&typeof V=="function"&&V instanceof V||(e=!1)}return be.delete(Ot),be.delete(xt),e}(Z,ut,At,re,Et,z)):!1}(d,N,B,F,Ce,X))}function Ze(d){return!(!ye(d)||function(N){return!!Ct&&Ct in N}(d))&&(Ft(d)?dt:de).test(bt(d))}function Ie(d){if(B=(N=d)&&N.constructor,F=typeof B=="function"&&B.prototype||ue,N!==F)return _e(d);var N,B,F,X=[];for(var Z in Object(d))kt.call(d,Z)&&Z!="constructor"&&X.push(Z);return X}function v(d,N,B,F,X,Z){var ut=B&q,At=d.length,re=N.length;if(At!=re&&!(ut&&re>At))return!1;var Et=Z.get(d);if(Et&&Z.get(N))return Et==N;var z=-1,W=!0,et=B&E?new ne:void 0;for(Z.set(d,N),Z.set(N,d);++z<At;){var it=d[z],he=N[z];if(F)var Zt=ut?F(he,it,z,N,d,Z):F(it,he,z,d,N,Z);if(Zt!==void 0){if(Zt)continue;W=!1;break}if(et){if(!It(N,function(lt,qt){if(te=qt,!et.has(te)&&(it===lt||X(it,lt,B,F,Z)))return et.push(qt);var te})){W=!1;break}}else if(it!==he&&!X(it,he,B,F,Z)){W=!1;break}}return Z.delete(d),Z.delete(N),W}function w(d){return function(N,B,F){var X=B(N);return jt(N)?X:function(Z,ut){for(var At=-1,re=ut.length,Et=Z.length;++At<re;)Z[Et+At]=ut[At];return Z}(X,F(N))}(d,H,J)}function R(d,N){var B,F,X=d.__data__;return((F=typeof(B=N))=="string"||F=="number"||F=="symbol"||F=="boolean"?B!=="__proto__":B===null)?X[typeof N=="string"?"string":"hash"]:X.map}function K(d,N){var B=function(F,X){return F?.[X]}(d,N);return Ze(B)?B:void 0}pe.prototype.clear=function(){this.__data__=fe?fe(null):{},this.size=0},pe.prototype.delete=function(d){var N=this.has(d)&&delete this.__data__[d];return this.size-=N?1:0,N},pe.prototype.get=function(d){var N=this.__data__;if(fe){var B=N[d];return B===k?void 0:B}return kt.call(N,d)?N[d]:void 0},pe.prototype.has=function(d){var N=this.__data__;return fe?N[d]!==void 0:kt.call(N,d)},pe.prototype.set=function(d,N){var B=this.__data__;return this.size+=this.has(d)?0:1,B[d]=fe&&N===void 0?k:N,this},se.prototype.clear=function(){this.__data__=[],this.size=0},se.prototype.delete=function(d){var N=this.__data__,B=me(N,d);return!(B<0)&&(B==N.length-1?N.pop():St.call(N,B,1),--this.size,!0)},se.prototype.get=function(d){var N=this.__data__,B=me(N,d);return B<0?void 0:N[B][1]},se.prototype.has=function(d){return me(this.__data__,d)>-1},se.prototype.set=function(d,N){var B=this.__data__,F=me(B,d);return F<0?(++this.size,B.push([d,N])):B[F][1]=N,this},Xt.prototype.clear=function(){this.size=0,this.__data__={hash:new pe,map:new(Ee||se),string:new pe}},Xt.prototype.delete=function(d){var N=R(this,d).delete(d);return this.size-=N?1:0,N},Xt.prototype.get=function(d){return R(this,d).get(d)},Xt.prototype.has=function(d){return R(this,d).has(d)},Xt.prototype.set=function(d,N){var B=R(this,d),F=B.size;return B.set(d,N),this.size+=B.size==F?0:1,this},ne.prototype.add=ne.prototype.push=function(d){return this.__data__.set(d,k),this},ne.prototype.has=function(d){return this.__data__.has(d)},Jt.prototype.clear=function(){this.__data__=new se,this.size=0},Jt.prototype.delete=function(d){var N=this.__data__,B=N.delete(d);return this.size=N.size,B},Jt.prototype.get=function(d){return this.__data__.get(d)},Jt.prototype.has=function(d){return this.__data__.has(d)},Jt.prototype.set=function(d,N){var B=this.__data__;if(B instanceof se){var F=B.__data__;if(!Ee||F.length<199)return F.push([d,N]),this.size=++B.size,this;B=this.__data__=new Xt(F)}return B.set(d,N),this.size=B.size,this};var J=zt?function(d){return d==null?[]:(d=Object(d),function(N,B){for(var F=-1,X=N==null?0:N.length,Z=0,ut=[];++F<X;){var At=N[F];B(At,F,N)&&(ut[Z++]=At)}return ut}(zt(d),function(N){return _t.call(d,N)}))}:function(){return[]},ft=Ne;function mt(d,N){return!!(N=N??S)&&(typeof d=="number"||Mt.test(d))&&d>-1&&d%1==0&&d<N}function bt(d){if(d!=null){try{return Tt.call(d)}catch{}try{return d+""}catch{}}return""}function Wt(d,N){return d===N||d!=d&&N!=N}(Ue&&ft(new Ue(new ArrayBuffer(1)))!=Dt||Ee&&ft(new Ee)!=r||ke&&ft(ke.resolve())!=D||Ae&&ft(new Ae)!=Y||we&&ft(new we)!=ht)&&(ft=function(d){var N=Ne(d),B=N==x?d.constructor:void 0,F=B?bt(B):"";if(F)switch(F){case qe:return Dt;case xe:return r;case Ge:return D;case Re:return Y;case Ke:return ht}return N});var wt=ve(function(){return arguments}())?ve:function(d){return _(d)&&kt.call(d,"callee")&&!_t.call(d,"callee")},jt=Array.isArray,tt=je||function(){return!1};function Ft(d){if(!ye(d))return!1;var N=Ne(d);return N==u||N==s||N==b||N==P}function ce(d){return typeof d=="number"&&d>-1&&d%1==0&&d<=S}function ye(d){var N=typeof d;return d!=null&&(N=="object"||N=="function")}function _(d){return d!=null&&typeof d=="object"}var L=ct?function(d){return function(N){return d(N)}}(ct):function(d){return _(d)&&ce(d.length)&&!!nt[Ne(d)]};function H(d){return(N=d)!=null&&ce(N.length)&&!Ft(N)?ae(d):Ie(d);var N}C.exports=function(d,N){return Ce(d,N)}},124:(C,p,O)=>{C=O.nmd(C);var k="__lodash_hash_undefined__",q=9007199254740991,E="[object Arguments]",S="[object AsyncFunction]",g="[object Function]",c="[object GeneratorFunction]",b="[object Null]",f="[object Object]",l="[object Proxy]",o="[object Undefined]",u=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r[E]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r[g]=r["[object Map]"]=r["[object Number]"]=r[f]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1;var m=typeof O.g=="object"&&O.g&&O.g.Object===Object&&O.g,A=typeof self=="object"&&self&&self.Object===Object&&self,x=m||A||Function("return this")(),D=p&&!p.nodeType&&p,P=D&&C&&!C.nodeType&&C,M=P&&P.exports===D,Y=M&&m.process,at=function(){try{var v=P&&P.require&&P.require("util").types;return v||Y&&Y.binding&&Y.binding("util")}catch{}}(),rt=at&&at.isTypedArray,ot,ht,Bt,Dt=Array.prototype,de=Function.prototype,Mt=Object.prototype,nt=x["__core-js_shared__"],Kt=de.toString,Q=Mt.hasOwnProperty,Rt=(ot=/[^.]+$/.exec(nt&&nt.keys&&nt.keys.IE_PROTO||""))?"Symbol(src)_1."+ot:"",le=Mt.toString,Pt=Kt.call(Object),$=RegExp("^"+Kt.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vt=M?x.Buffer:void 0,yt=x.Symbol,ct=x.Uint8Array;vt&&vt.allocUnsafe;var It=(ht=Object.getPrototypeOf,Bt=Object,function(v){return ht(Bt(v))}),Vt=Object.create,Nt=Mt.propertyIsEnumerable,$t=Dt.splice,pt=yt?yt.toStringTag:void 0,Lt=function(){try{var v=qe(Object,"defineProperty");return v({},"",{}),v}catch{}}(),oe=vt?vt.isBuffer:void 0,Qt=Math.max,ue=Date.now,ie=qe(x,"Map"),Tt=qe(Object,"create"),kt=function(){function v(){}return function(w){if(!ae(w))return{};if(Vt)return Vt(w);v.prototype=w;var R=new v;return v.prototype=void 0,R}}();function Ct(v){var w=-1,R=v==null?0:v.length;for(this.clear();++w<R;){var K=v[w];this.set(K[0],K[1])}}function I(v){var w=-1,R=v==null?0:v.length;for(this.clear();++w<R;){var K=v[w];this.set(K[0],K[1])}}function dt(v){var w=-1,R=v==null?0:v.length;for(this.clear();++w<R;){var K=v[w];this.set(K[0],K[1])}}function gt(v){var w=this.__data__=new I(v);this.size=w.size}function Gt(v,w){var R=pe(v),K=!R&&Te(v),J=!R&&!K&&Xt(v),ft=!R&&!K&&!J&&Ne(v),mt=R||K||J||ft,bt=mt?function(jt,tt){for(var Ft=-1,ce=Array(jt);++Ft<jt;)ce[Ft]=tt(Ft);return ce}(v.length,String):[],Wt=bt.length;for(var wt in v)mt&&(wt=="length"||J&&(wt=="offset"||wt=="parent")||ft&&(wt=="buffer"||wt=="byteLength"||wt=="byteOffset")||xe(wt,Wt))||bt.push(wt);return bt}function Yt(v,w,R){(R!==void 0&&!Oe(v[w],R)||R===void 0&&!(w in v))&&Ut(v,w,R)}function _t(v,w,R){var K=v[w];Q.call(v,w)&&Oe(K,R)&&(R!==void 0||w in v)||Ut(v,w,R)}function St(v,w){for(var R=v.length;R--;)if(Oe(v[R][0],w))return R;return-1}function Ut(v,w,R){w=="__proto__"&&Lt?Lt(v,w,{configurable:!0,enumerable:!0,value:R,writable:!0}):v[w]=R}Ct.prototype.clear=function(){this.__data__=Tt?Tt(null):{},this.size=0},Ct.prototype.delete=function(v){var w=this.has(v)&&delete this.__data__[v];return this.size-=w?1:0,w},Ct.prototype.get=function(v){var w=this.__data__;if(Tt){var R=w[v];return R===k?void 0:R}return Q.call(w,v)?w[v]:void 0},Ct.prototype.has=function(v){var w=this.__data__;return Tt?w[v]!==void 0:Q.call(w,v)},Ct.prototype.set=function(v,w){var R=this.__data__;return this.size+=this.has(v)?0:1,R[v]=Tt&&w===void 0?k:w,this},I.prototype.clear=function(){this.__data__=[],this.size=0},I.prototype.delete=function(v){var w=this.__data__,R=St(w,v);return!(R<0)&&(R==w.length-1?w.pop():$t.call(w,R,1),--this.size,!0)},I.prototype.get=function(v){var w=this.__data__,R=St(w,v);return R<0?void 0:w[R][1]},I.prototype.has=function(v){return St(this.__data__,v)>-1},I.prototype.set=function(v,w){var R=this.__data__,K=St(R,v);return K<0?(++this.size,R.push([v,w])):R[K][1]=w,this},dt.prototype.clear=function(){this.size=0,this.__data__={hash:new Ct,map:new(ie||I),string:new Ct}},dt.prototype.delete=function(v){var w=fe(this,v).delete(v);return this.size-=w?1:0,w},dt.prototype.get=function(v){return fe(this,v).get(v)},dt.prototype.has=function(v){return fe(this,v).has(v)},dt.prototype.set=function(v,w){var R=fe(this,v),K=R.size;return R.set(v,w),this.size+=R.size==K?0:1,this},gt.prototype.clear=function(){this.__data__=new I,this.size=0},gt.prototype.delete=function(v){var w=this.__data__,R=w.delete(v);return this.size=w.size,R},gt.prototype.get=function(v){return this.__data__.get(v)},gt.prototype.has=function(v){return this.__data__.has(v)},gt.prototype.set=function(v,w){var R=this.__data__;if(R instanceof I){var K=R.__data__;if(!ie||K.length<199)return K.push([v,w]),this.size=++R.size,this;R=this.__data__=new dt(K)}return R.set(v,w),this.size=R.size,this};var zt=function(v,w,R){for(var K=-1,J=Object(v),ft=R(v),mt=ft.length;mt--;){var bt=ft[++K];if(w(J[bt],bt,J)===!1)break}return v};function je(v){return v==null?v===void 0?o:b:pt&&pt in Object(v)?function(w){var R=Q.call(w,pt),K=w[pt];try{w[pt]=void 0;var J=!0}catch{}var ft=le.call(w);return J&&(R?w[pt]=K:delete w[pt]),ft}(v):function(w){return le.call(w)}(v)}function _e(v){return me(v)&&je(v)==E}function Ue(v){return!(!ae(v)||function(w){return!!Rt&&Rt in w}(v))&&(ne(v)?$:u).test(function(w){if(w!=null){try{return Kt.call(w)}catch{}try{return w+""}catch{}}return""}(v))}function Ee(v){if(!ae(v))return function(J){var ft=[];if(J!=null)for(var mt in Object(J))ft.push(mt);return ft}(v);var w=Ge(v),R=[];for(var K in v)(K!="constructor"||!w&&Q.call(v,K))&&R.push(K);return R}function ke(v,w,R,K,J){v!==w&&zt(w,function(ft,mt){if(J||(J=new gt),ae(ft))(function(Wt,wt,jt,tt,Ft,ce,ye){var _=Re(Wt,jt),L=Re(wt,jt),H=ye.get(L);if(H)return void Yt(Wt,jt,H);var d=ce?ce(_,L,jt+"",Wt,wt,ye):void 0,N=d===void 0;if(N){var B=pe(L),F=!B&&Xt(L),X=!B&&!F&&Ne(L);d=L,B||F||X?pe(_)?d=_:me(Et=_)&&se(Et)?d=function(z,W){var et=-1,it=z.length;for(W||(W=Array(it));++et<it;)W[et]=z[et];return W}(_):F?(N=!1,d=function(z,W){return z.slice()}(L)):X?(N=!1,Z=L,ut=(At=Z.buffer,re=new At.constructor(At.byteLength),new ct(re).set(new ct(At)),re),d=new Z.constructor(ut,Z.byteOffset,Z.length)):d=[]:function(z){if(!me(z)||je(z)!=f)return!1;var W=It(z);if(W===null)return!0;var et=Q.call(W,"constructor")&&W.constructor;return typeof et=="function"&&et instanceof et&&Kt.call(et)==Pt}(L)||Te(L)?(d=_,Te(_)?d=function(z){return function(W,et,it,he){var Zt=!it;it||(it={});for(var lt=-1,qt=et.length;++lt<qt;){var te=et[lt],ge=void 0;ge===void 0&&(ge=W[te]),Zt?Ut(it,te,ge):_t(it,te,ge)}return it}(z,ve(z))}(_):ae(_)&&!ne(_)||(d=function(z){return typeof z.constructor!="function"||Ge(z)?{}:kt(It(z))}(L))):N=!1}var Z,ut,At,re,Et;N&&(ye.set(L,d),Ft(d,L,tt,ce,ye),ye.delete(L)),Yt(Wt,jt,d)})(v,w,mt,R,ke,K,J);else{var bt=K?K(Re(v,mt),ft,mt+"",v,w,J):void 0;bt===void 0&&(bt=ft),Yt(v,mt,bt)}},ve)}function Ae(v,w){return Ke(function(R,K,J){return K=Qt(K===void 0?R.length-1:K,0),function(){for(var ft=arguments,mt=-1,bt=Qt(ft.length-K,0),Wt=Array(bt);++mt<bt;)Wt[mt]=ft[K+mt];mt=-1;for(var wt=Array(K+1);++mt<K;)wt[mt]=ft[mt];return wt[K]=J(Wt),function(jt,tt,Ft){switch(Ft.length){case 0:return jt.call(tt);case 1:return jt.call(tt,Ft[0]);case 2:return jt.call(tt,Ft[0],Ft[1]);case 3:return jt.call(tt,Ft[0],Ft[1],Ft[2])}return jt.apply(tt,Ft)}(R,this,wt)}}(v,w,Ie),v+"")}var we=Lt?function(v,w){return Lt(v,"toString",{configurable:!0,enumerable:!1,value:(R=w,function(){return R}),writable:!0});var R}:Ie;function fe(v,w){var R,K,J=v.__data__;return((K=typeof(R=w))=="string"||K=="number"||K=="symbol"||K=="boolean"?R!=="__proto__":R===null)?J[typeof w=="string"?"string":"hash"]:J.map}function qe(v,w){var R=function(K,J){return K?.[J]}(v,w);return Ue(R)?R:void 0}function xe(v,w){var R=typeof v;return!!(w=w??q)&&(R=="number"||R!="symbol"&&s.test(v))&&v>-1&&v%1==0&&v<w}function Ge(v){var w=v&&v.constructor;return v===(typeof w=="function"&&w.prototype||Mt)}function Re(v,w){if((w!=="constructor"||typeof v[w]!="function")&&w!="__proto__")return v[w]}var Ke=function(v){var w=0,R=0;return function(){var K=ue(),J=16-(K-R);if(R=K,J>0){if(++w>=800)return arguments[0]}else w=0;return v.apply(void 0,arguments)}}(we);function Oe(v,w){return v===w||v!=v&&w!=w}var Te=_e(function(){return arguments}())?_e:function(v){return me(v)&&Q.call(v,"callee")&&!Nt.call(v,"callee")},pe=Array.isArray;function se(v){return v!=null&&Jt(v.length)&&!ne(v)}var Xt=oe||function(){return!1};function ne(v){if(!ae(v))return!1;var w=je(v);return w==g||w==c||w==S||w==l}function Jt(v){return typeof v=="number"&&v>-1&&v%1==0&&v<=q}function ae(v){var w=typeof v;return v!=null&&(w=="object"||w=="function")}function me(v){return v!=null&&typeof v=="object"}var Ne=rt?function(v){return function(w){return v(w)}}(rt):function(v){return me(v)&&Jt(v.length)&&!!r[je(v)]};function ve(v){return se(v)?Gt(v):Ee(v)}var Ce,Ze=(Ce=function(v,w,R){ke(v,w,R)},Ae(function(v,w){var R=-1,K=w.length,J=K>1?w[K-1]:void 0,ft=K>2?w[2]:void 0;for(J=Ce.length>3&&typeof J=="function"?(K--,J):void 0,ft&&function(bt,Wt,wt){if(!ae(wt))return!1;var jt=typeof Wt;return!!(jt=="number"?se(wt)&&xe(Wt,wt.length):jt=="string"&&Wt in wt)&&Oe(wt[Wt],bt)}(w[0],w[1],ft)&&(J=K<3?void 0:J,K=1),v=Object(v);++R<K;){var mt=w[R];mt&&Ce(v,mt,R,J)}return v}));function Ie(v){return v}C.exports=Ze},538:function(C){var p;p=function(){return function(O){var k={};function q(E){if(k[E])return k[E].exports;var S=k[E]={i:E,l:!1,exports:{}};return O[E].call(S.exports,S,S.exports,q),S.l=!0,S.exports}return q.m=O,q.c=k,q.d=function(E,S,g){q.o(E,S)||Object.defineProperty(E,S,{configurable:!1,enumerable:!0,get:g})},q.n=function(E){var S=E&&E.__esModule?function(){return E.default}:function(){return E};return q.d(S,"a",S),S},q.o=function(E,S){return Object.prototype.hasOwnProperty.call(E,S)},q.p="",q(q.s=9)}([function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,r){s.__proto__=r}||function(s,r){for(var m in r)r.hasOwnProperty(m)&&(s[m]=r[m])},function(s,r){function m(){this.constructor=s}E(s,r),s.prototype=r===null?Object.create(r):(m.prototype=r.prototype,new m)});Object.defineProperty(k,"__esModule",{value:!0});var g=function(s){function r(m){var A=this;return m="[Parchment] "+m,(A=s.call(this,m)||this).message=m,A.name=A.constructor.name,A}return S(r,s),r}(Error);k.ParchmentError=g;var c,b={},f={},l={},o={};function u(s,r){var m;if(r===void 0&&(r=c.ANY),typeof s=="string")m=o[s]||b[s];else if(s instanceof Text||s.nodeType===Node.TEXT_NODE)m=o.text;else if(typeof s=="number")s&c.LEVEL&c.BLOCK?m=o.block:s&c.LEVEL&c.INLINE&&(m=o.inline);else if(s instanceof HTMLElement){var A=(s.getAttribute("class")||"").split(/\s+/);for(var x in A)if(m=f[A[x]])break;m=m||l[s.tagName]}return m==null?null:r&c.LEVEL&m.scope&&r&c.TYPE&m.scope?m:null}k.DATA_KEY="__blot",function(s){s[s.TYPE=3]="TYPE",s[s.LEVEL=12]="LEVEL",s[s.ATTRIBUTE=13]="ATTRIBUTE",s[s.BLOT=14]="BLOT",s[s.INLINE=7]="INLINE",s[s.BLOCK=11]="BLOCK",s[s.BLOCK_BLOT=10]="BLOCK_BLOT",s[s.INLINE_BLOT=6]="INLINE_BLOT",s[s.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",s[s.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",s[s.ANY=15]="ANY"}(c=k.Scope||(k.Scope={})),k.create=function(s,r){var m=u(s);if(m==null)throw new g("Unable to create "+s+" blot");var A=m,x=s instanceof Node||s.nodeType===Node.TEXT_NODE?s:A.create(r);return new A(x,r)},k.find=function s(r,m){return m===void 0&&(m=!1),r==null?null:r[k.DATA_KEY]!=null?r[k.DATA_KEY].blot:m?s(r.parentNode,m):null},k.query=u,k.register=function s(){for(var r=[],m=0;m<arguments.length;m++)r[m]=arguments[m];if(r.length>1)return r.map(function(x){return s(x)});var A=r[0];if(typeof A.blotName!="string"&&typeof A.attrName!="string")throw new g("Invalid definition");if(A.blotName==="abstract")throw new g("Cannot register abstract class");return o[A.blotName||A.attrName]=A,typeof A.keyName=="string"?b[A.keyName]=A:(A.className!=null&&(f[A.className]=A),A.tagName!=null&&(Array.isArray(A.tagName)?A.tagName=A.tagName.map(function(x){return x.toUpperCase()}):A.tagName=A.tagName.toUpperCase(),(Array.isArray(A.tagName)?A.tagName:[A.tagName]).forEach(function(x){l[x]!=null&&A.className!=null||(l[x]=A)}))),A}},function(O,k,q){Object.defineProperty(k,"__esModule",{value:!0});var E=q(0),S=function(){function g(c,b,f){f===void 0&&(f={}),this.attrName=c,this.keyName=b;var l=E.Scope.TYPE&E.Scope.ATTRIBUTE;f.scope!=null?this.scope=f.scope&E.Scope.LEVEL|l:this.scope=E.Scope.ATTRIBUTE,f.whitelist!=null&&(this.whitelist=f.whitelist)}return g.keys=function(c){return[].map.call(c.attributes,function(b){return b.name})},g.prototype.add=function(c,b){return!!this.canAdd(c,b)&&(c.setAttribute(this.keyName,b),!0)},g.prototype.canAdd=function(c,b){return E.query(c,E.Scope.BLOT&(this.scope|E.Scope.TYPE))!=null&&(this.whitelist==null||(typeof b=="string"?this.whitelist.indexOf(b.replace(/["']/g,""))>-1:this.whitelist.indexOf(b)>-1))},g.prototype.remove=function(c){c.removeAttribute(this.keyName)},g.prototype.value=function(c){var b=c.getAttribute(this.keyName);return this.canAdd(c,b)&&b?b:""},g}();k.default=S},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,u){o.__proto__=u}||function(o,u){for(var s in u)u.hasOwnProperty(s)&&(o[s]=u[s])},function(o,u){function s(){this.constructor=o}E(o,u),o.prototype=u===null?Object.create(u):(s.prototype=u.prototype,new s)});Object.defineProperty(k,"__esModule",{value:!0});var g=q(11),c=q(5),b=q(0),f=function(o){function u(s){var r=o.call(this,s)||this;return r.build(),r}return S(u,o),u.prototype.appendChild=function(s){this.insertBefore(s)},u.prototype.attach=function(){o.prototype.attach.call(this),this.children.forEach(function(s){s.attach()})},u.prototype.build=function(){var s=this;this.children=new g.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(r){try{var m=l(r);s.insertBefore(m,s.children.head||void 0)}catch(A){if(A instanceof b.ParchmentError)return;throw A}})},u.prototype.deleteAt=function(s,r){if(s===0&&r===this.length())return this.remove();this.children.forEachAt(s,r,function(m,A,x){m.deleteAt(A,x)})},u.prototype.descendant=function(s,r){var m=this.children.find(r),A=m[0],x=m[1];return s.blotName==null&&s(A)||s.blotName!=null&&A instanceof s?[A,x]:A instanceof u?A.descendant(s,x):[null,-1]},u.prototype.descendants=function(s,r,m){r===void 0&&(r=0),m===void 0&&(m=Number.MAX_VALUE);var A=[],x=m;return this.children.forEachAt(r,m,function(D,P,M){(s.blotName==null&&s(D)||s.blotName!=null&&D instanceof s)&&A.push(D),D instanceof u&&(A=A.concat(D.descendants(s,P,x))),x-=M}),A},u.prototype.detach=function(){this.children.forEach(function(s){s.detach()}),o.prototype.detach.call(this)},u.prototype.formatAt=function(s,r,m,A){this.children.forEachAt(s,r,function(x,D,P){x.formatAt(D,P,m,A)})},u.prototype.insertAt=function(s,r,m){var A=this.children.find(s),x=A[0],D=A[1];if(x)x.insertAt(D,r,m);else{var P=m==null?b.create("text",r):b.create(r,m);this.appendChild(P)}},u.prototype.insertBefore=function(s,r){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(m){return s instanceof m}))throw new b.ParchmentError("Cannot insert "+s.statics.blotName+" into "+this.statics.blotName);s.insertInto(this,r)},u.prototype.length=function(){return this.children.reduce(function(s,r){return s+r.length()},0)},u.prototype.moveChildren=function(s,r){this.children.forEach(function(m){s.insertBefore(m,r)})},u.prototype.optimize=function(s){if(o.prototype.optimize.call(this,s),this.children.length===0)if(this.statics.defaultChild!=null){var r=b.create(this.statics.defaultChild);this.appendChild(r),r.optimize(s)}else this.remove()},u.prototype.path=function(s,r){r===void 0&&(r=!1);var m=this.children.find(s,r),A=m[0],x=m[1],D=[[this,s]];return A instanceof u?D.concat(A.path(x,r)):(A!=null&&D.push([A,x]),D)},u.prototype.removeChild=function(s){this.children.remove(s)},u.prototype.replace=function(s){s instanceof u&&s.moveChildren(this),o.prototype.replace.call(this,s)},u.prototype.split=function(s,r){if(r===void 0&&(r=!1),!r){if(s===0)return this;if(s===this.length())return this.next}var m=this.clone();return this.parent.insertBefore(m,this.next),this.children.forEachAt(s,this.length(),function(A,x,D){A=A.split(x,r),m.appendChild(A)}),m},u.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},u.prototype.update=function(s,r){var m=this,A=[],x=[];s.forEach(function(D){D.target===m.domNode&&D.type==="childList"&&(A.push.apply(A,D.addedNodes),x.push.apply(x,D.removedNodes))}),x.forEach(function(D){if(!(D.parentNode!=null&&D.tagName!=="IFRAME"&&document.body.compareDocumentPosition(D)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var P=b.find(D);P!=null&&(P.domNode.parentNode!=null&&P.domNode.parentNode!==m.domNode||P.detach())}}),A.filter(function(D){return D.parentNode==m.domNode}).sort(function(D,P){return D===P?0:D.compareDocumentPosition(P)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(D){var P=null;D.nextSibling!=null&&(P=b.find(D.nextSibling));var M=l(D);M.next==P&&M.next!=null||(M.parent!=null&&M.parent.removeChild(m),m.insertBefore(M,P||void 0))})},u}(c.default);function l(o){var u=b.find(o);if(u==null)try{u=b.create(o)}catch{u=b.create(b.Scope.INLINE),[].slice.call(o.childNodes).forEach(function(r){u.domNode.appendChild(r)}),o.parentNode&&o.parentNode.replaceChild(u.domNode,o),u.attach()}return u}k.default=f},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,u){o.__proto__=u}||function(o,u){for(var s in u)u.hasOwnProperty(s)&&(o[s]=u[s])},function(o,u){function s(){this.constructor=o}E(o,u),o.prototype=u===null?Object.create(u):(s.prototype=u.prototype,new s)});Object.defineProperty(k,"__esModule",{value:!0});var g=q(1),c=q(6),b=q(2),f=q(0),l=function(o){function u(s){var r=o.call(this,s)||this;return r.attributes=new c.default(r.domNode),r}return S(u,o),u.formats=function(s){return typeof this.tagName=="string"||(Array.isArray(this.tagName)?s.tagName.toLowerCase():void 0)},u.prototype.format=function(s,r){var m=f.query(s);m instanceof g.default?this.attributes.attribute(m,r):r&&(m==null||s===this.statics.blotName&&this.formats()[s]===r||this.replaceWith(s,r))},u.prototype.formats=function(){var s=this.attributes.values(),r=this.statics.formats(this.domNode);return r!=null&&(s[this.statics.blotName]=r),s},u.prototype.replaceWith=function(s,r){var m=o.prototype.replaceWith.call(this,s,r);return this.attributes.copy(m),m},u.prototype.update=function(s,r){var m=this;o.prototype.update.call(this,s,r),s.some(function(A){return A.target===m.domNode&&A.type==="attributes"})&&this.attributes.build()},u.prototype.wrap=function(s,r){var m=o.prototype.wrap.call(this,s,r);return m instanceof u&&m.statics.scope===this.statics.scope&&this.attributes.move(m),m},u}(b.default);k.default=l},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,l){f.__proto__=l}||function(f,l){for(var o in l)l.hasOwnProperty(o)&&(f[o]=l[o])},function(f,l){function o(){this.constructor=f}E(f,l),f.prototype=l===null?Object.create(l):(o.prototype=l.prototype,new o)});Object.defineProperty(k,"__esModule",{value:!0});var g=q(5),c=q(0),b=function(f){function l(){return f!==null&&f.apply(this,arguments)||this}return S(l,f),l.value=function(o){return!0},l.prototype.index=function(o,u){return this.domNode===o||this.domNode.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(u,1):-1},l.prototype.position=function(o,u){var s=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return o>0&&(s+=1),[this.parent.domNode,s]},l.prototype.value=function(){return(o={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,o;var o},l.scope=c.Scope.INLINE_BLOT,l}(g.default);k.default=b},function(O,k,q){Object.defineProperty(k,"__esModule",{value:!0});var E=q(0),S=function(){function g(c){this.domNode=c,this.domNode[E.DATA_KEY]={blot:this}}return Object.defineProperty(g.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),g.create=function(c){if(this.tagName==null)throw new E.ParchmentError("Blot definition missing tagName");var b;return Array.isArray(this.tagName)?(typeof c=="string"&&(c=c.toUpperCase(),parseInt(c).toString()===c&&(c=parseInt(c))),b=typeof c=="number"?document.createElement(this.tagName[c-1]):this.tagName.indexOf(c)>-1?document.createElement(c):document.createElement(this.tagName[0])):b=document.createElement(this.tagName),this.className&&b.classList.add(this.className),b},g.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},g.prototype.clone=function(){var c=this.domNode.cloneNode(!1);return E.create(c)},g.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[E.DATA_KEY]},g.prototype.deleteAt=function(c,b){this.isolate(c,b).remove()},g.prototype.formatAt=function(c,b,f,l){var o=this.isolate(c,b);if(E.query(f,E.Scope.BLOT)!=null&&l)o.wrap(f,l);else if(E.query(f,E.Scope.ATTRIBUTE)!=null){var u=E.create(this.statics.scope);o.wrap(u),u.format(f,l)}},g.prototype.insertAt=function(c,b,f){var l=f==null?E.create("text",b):E.create(b,f),o=this.split(c);this.parent.insertBefore(l,o)},g.prototype.insertInto=function(c,b){b===void 0&&(b=null),this.parent!=null&&this.parent.children.remove(this);var f=null;c.children.insertBefore(this,b),b!=null&&(f=b.domNode),this.domNode.parentNode==c.domNode&&this.domNode.nextSibling==f||c.domNode.insertBefore(this.domNode,f),this.parent=c,this.attach()},g.prototype.isolate=function(c,b){var f=this.split(c);return f.split(b),f},g.prototype.length=function(){return 1},g.prototype.offset=function(c){return c===void 0&&(c=this.parent),this.parent==null||this==c?0:this.parent.children.offset(this)+this.parent.offset(c)},g.prototype.optimize=function(c){this.domNode[E.DATA_KEY]!=null&&delete this.domNode[E.DATA_KEY].mutations},g.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},g.prototype.replace=function(c){c.parent!=null&&(c.parent.insertBefore(this,c.next),c.remove())},g.prototype.replaceWith=function(c,b){var f=typeof c=="string"?E.create(c,b):c;return f.replace(this),f},g.prototype.split=function(c,b){return c===0?this:this.next},g.prototype.update=function(c,b){},g.prototype.wrap=function(c,b){var f=typeof c=="string"?E.create(c,b):c;return this.parent!=null&&this.parent.insertBefore(f,this.next),f.appendChild(this),f},g.blotName="abstract",g}();k.default=S},function(O,k,q){Object.defineProperty(k,"__esModule",{value:!0});var E=q(1),S=q(7),g=q(8),c=q(0),b=function(){function f(l){this.attributes={},this.domNode=l,this.build()}return f.prototype.attribute=function(l,o){o?l.add(this.domNode,o)&&(l.value(this.domNode)!=null?this.attributes[l.attrName]=l:delete this.attributes[l.attrName]):(l.remove(this.domNode),delete this.attributes[l.attrName])},f.prototype.build=function(){var l=this;this.attributes={};var o=E.default.keys(this.domNode),u=S.default.keys(this.domNode),s=g.default.keys(this.domNode);o.concat(u).concat(s).forEach(function(r){var m=c.query(r,c.Scope.ATTRIBUTE);m instanceof E.default&&(l.attributes[m.attrName]=m)})},f.prototype.copy=function(l){var o=this;Object.keys(this.attributes).forEach(function(u){var s=o.attributes[u].value(o.domNode);l.format(u,s)})},f.prototype.move=function(l){var o=this;this.copy(l),Object.keys(this.attributes).forEach(function(u){o.attributes[u].remove(o.domNode)}),this.attributes={}},f.prototype.values=function(){var l=this;return Object.keys(this.attributes).reduce(function(o,u){return o[u]=l.attributes[u].value(l.domNode),o},{})},f}();k.default=b},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,f){b.__proto__=f}||function(b,f){for(var l in f)f.hasOwnProperty(l)&&(b[l]=f[l])},function(b,f){function l(){this.constructor=b}E(b,f),b.prototype=f===null?Object.create(f):(l.prototype=f.prototype,new l)});function g(b,f){return(b.getAttribute("class")||"").split(/\s+/).filter(function(l){return l.indexOf(f+"-")===0})}Object.defineProperty(k,"__esModule",{value:!0});var c=function(b){function f(){return b!==null&&b.apply(this,arguments)||this}return S(f,b),f.keys=function(l){return(l.getAttribute("class")||"").split(/\s+/).map(function(o){return o.split("-").slice(0,-1).join("-")})},f.prototype.add=function(l,o){return!!this.canAdd(l,o)&&(this.remove(l),l.classList.add(this.keyName+"-"+o),!0)},f.prototype.remove=function(l){g(l,this.keyName).forEach(function(o){l.classList.remove(o)}),l.classList.length===0&&l.removeAttribute("class")},f.prototype.value=function(l){var o=(g(l,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(l,o)?o:""},f}(q(1).default);k.default=c},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,f){b.__proto__=f}||function(b,f){for(var l in f)f.hasOwnProperty(l)&&(b[l]=f[l])},function(b,f){function l(){this.constructor=b}E(b,f),b.prototype=f===null?Object.create(f):(l.prototype=f.prototype,new l)});function g(b){var f=b.split("-"),l=f.slice(1).map(function(o){return o[0].toUpperCase()+o.slice(1)}).join("");return f[0]+l}Object.defineProperty(k,"__esModule",{value:!0});var c=function(b){function f(){return b!==null&&b.apply(this,arguments)||this}return S(f,b),f.keys=function(l){return(l.getAttribute("style")||"").split(";").map(function(o){return o.split(":")[0].trim()})},f.prototype.add=function(l,o){return!!this.canAdd(l,o)&&(l.style[g(this.keyName)]=o,!0)},f.prototype.remove=function(l){l.style[g(this.keyName)]="",l.getAttribute("style")||l.removeAttribute("style")},f.prototype.value=function(l){var o=l.style[g(this.keyName)];return this.canAdd(l,o)?o:""},f}(q(1).default);k.default=c},function(O,k,q){O.exports=q(10)},function(O,k,q){Object.defineProperty(k,"__esModule",{value:!0});var E=q(2),S=q(3),g=q(4),c=q(12),b=q(13),f=q(14),l=q(15),o=q(16),u=q(1),s=q(7),r=q(8),m=q(6),A=q(0),x={Scope:A.Scope,create:A.create,find:A.find,query:A.query,register:A.register,Container:E.default,Format:S.default,Leaf:g.default,Embed:l.default,Scroll:c.default,Block:f.default,Inline:b.default,Text:o.default,Attributor:{Attribute:u.default,Class:s.default,Style:r.default,Store:m.default}};k.default=x},function(O,k,q){Object.defineProperty(k,"__esModule",{value:!0});var E=function(){function S(){this.head=this.tail=null,this.length=0}return S.prototype.append=function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];this.insertBefore(g[0],null),g.length>1&&this.append.apply(this,g.slice(1))},S.prototype.contains=function(g){for(var c,b=this.iterator();c=b();)if(c===g)return!0;return!1},S.prototype.insertBefore=function(g,c){g&&(g.next=c,c!=null?(g.prev=c.prev,c.prev!=null&&(c.prev.next=g),c.prev=g,c===this.head&&(this.head=g)):this.tail!=null?(this.tail.next=g,g.prev=this.tail,this.tail=g):(g.prev=null,this.head=this.tail=g),this.length+=1)},S.prototype.offset=function(g){for(var c=0,b=this.head;b!=null;){if(b===g)return c;c+=b.length(),b=b.next}return-1},S.prototype.remove=function(g){this.contains(g)&&(g.prev!=null&&(g.prev.next=g.next),g.next!=null&&(g.next.prev=g.prev),g===this.head&&(this.head=g.next),g===this.tail&&(this.tail=g.prev),this.length-=1)},S.prototype.iterator=function(g){return g===void 0&&(g=this.head),function(){var c=g;return g!=null&&(g=g.next),c}},S.prototype.find=function(g,c){c===void 0&&(c=!1);for(var b,f=this.iterator();b=f();){var l=b.length();if(g<l||c&&g===l&&(b.next==null||b.next.length()!==0))return[b,g];g-=l}return[null,0]},S.prototype.forEach=function(g){for(var c,b=this.iterator();c=b();)g(c)},S.prototype.forEachAt=function(g,c,b){if(!(c<=0))for(var f,l=this.find(g),o=l[0],u=g-l[1],s=this.iterator(o);(f=s())&&u<g+c;){var r=f.length();g>u?b(f,g-u,Math.min(c,u+r-g)):b(f,0,Math.min(r,g+c-u)),u+=r}},S.prototype.map=function(g){return this.reduce(function(c,b){return c.push(g(b)),c},[])},S.prototype.reduce=function(g,c){for(var b,f=this.iterator();b=f();)c=g(c,b);return c},S}();k.default=E},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,o){l.__proto__=o}||function(l,o){for(var u in o)o.hasOwnProperty(u)&&(l[u]=o[u])},function(l,o){function u(){this.constructor=l}E(l,o),l.prototype=o===null?Object.create(o):(u.prototype=o.prototype,new u)});Object.defineProperty(k,"__esModule",{value:!0});var g=q(2),c=q(0),b={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},f=function(l){function o(u){var s=l.call(this,u)||this;return s.scroll=s,s.observer=new MutationObserver(function(r){s.update(r)}),s.observer.observe(s.domNode,b),s.attach(),s}return S(o,l),o.prototype.detach=function(){l.prototype.detach.call(this),this.observer.disconnect()},o.prototype.deleteAt=function(u,s){this.update(),u===0&&s===this.length()?this.children.forEach(function(r){r.remove()}):l.prototype.deleteAt.call(this,u,s)},o.prototype.formatAt=function(u,s,r,m){this.update(),l.prototype.formatAt.call(this,u,s,r,m)},o.prototype.insertAt=function(u,s,r){this.update(),l.prototype.insertAt.call(this,u,s,r)},o.prototype.optimize=function(u,s){var r=this;u===void 0&&(u=[]),s===void 0&&(s={}),l.prototype.optimize.call(this,s);for(var m=[].slice.call(this.observer.takeRecords());m.length>0;)u.push(m.pop());for(var A=function(M,Y){Y===void 0&&(Y=!0),M!=null&&M!==r&&M.domNode.parentNode!=null&&(M.domNode[c.DATA_KEY].mutations==null&&(M.domNode[c.DATA_KEY].mutations=[]),Y&&A(M.parent))},x=function(M){M.domNode[c.DATA_KEY]!=null&&M.domNode[c.DATA_KEY].mutations!=null&&(M instanceof g.default&&M.children.forEach(x),M.optimize(s))},D=u,P=0;D.length>0;P+=1){if(P>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(D.forEach(function(M){var Y=c.find(M.target,!0);Y!=null&&(Y.domNode===M.target&&(M.type==="childList"?(A(c.find(M.previousSibling,!1)),[].forEach.call(M.addedNodes,function(at){var rt=c.find(at,!1);A(rt,!1),rt instanceof g.default&&rt.children.forEach(function(ot){A(ot,!1)})})):M.type==="attributes"&&A(Y.prev)),A(Y))}),this.children.forEach(x),m=(D=[].slice.call(this.observer.takeRecords())).slice();m.length>0;)u.push(m.pop())}},o.prototype.update=function(u,s){var r=this;s===void 0&&(s={}),(u=u||this.observer.takeRecords()).map(function(m){var A=c.find(m.target,!0);return A==null?null:A.domNode[c.DATA_KEY].mutations==null?(A.domNode[c.DATA_KEY].mutations=[m],A):(A.domNode[c.DATA_KEY].mutations.push(m),null)}).forEach(function(m){m!=null&&m!==r&&m.domNode[c.DATA_KEY]!=null&&m.update(m.domNode[c.DATA_KEY].mutations||[],s)}),this.domNode[c.DATA_KEY].mutations!=null&&l.prototype.update.call(this,this.domNode[c.DATA_KEY].mutations,s),this.optimize(u,s)},o.blotName="scroll",o.defaultChild="block",o.scope=c.Scope.BLOCK_BLOT,o.tagName="DIV",o}(g.default);k.default=f},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,l){f.__proto__=l}||function(f,l){for(var o in l)l.hasOwnProperty(o)&&(f[o]=l[o])},function(f,l){function o(){this.constructor=f}E(f,l),f.prototype=l===null?Object.create(l):(o.prototype=l.prototype,new o)});Object.defineProperty(k,"__esModule",{value:!0});var g=q(3),c=q(0),b=function(f){function l(){return f!==null&&f.apply(this,arguments)||this}return S(l,f),l.formats=function(o){if(o.tagName!==l.tagName)return f.formats.call(this,o)},l.prototype.format=function(o,u){var s=this;o!==this.statics.blotName||u?f.prototype.format.call(this,o,u):(this.children.forEach(function(r){r instanceof g.default||(r=r.wrap(l.blotName,!0)),s.attributes.copy(r)}),this.unwrap())},l.prototype.formatAt=function(o,u,s,r){this.formats()[s]!=null||c.query(s,c.Scope.ATTRIBUTE)?this.isolate(o,u).format(s,r):f.prototype.formatAt.call(this,o,u,s,r)},l.prototype.optimize=function(o){f.prototype.optimize.call(this,o);var u=this.formats();if(Object.keys(u).length===0)return this.unwrap();var s=this.next;s instanceof l&&s.prev===this&&function(r,m){if(Object.keys(r).length!==Object.keys(m).length)return!1;for(var A in r)if(r[A]!==m[A])return!1;return!0}(u,s.formats())&&(s.moveChildren(this),s.remove())},l.blotName="inline",l.scope=c.Scope.INLINE_BLOT,l.tagName="SPAN",l}(g.default);k.default=b},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,l){f.__proto__=l}||function(f,l){for(var o in l)l.hasOwnProperty(o)&&(f[o]=l[o])},function(f,l){function o(){this.constructor=f}E(f,l),f.prototype=l===null?Object.create(l):(o.prototype=l.prototype,new o)});Object.defineProperty(k,"__esModule",{value:!0});var g=q(3),c=q(0),b=function(f){function l(){return f!==null&&f.apply(this,arguments)||this}return S(l,f),l.formats=function(o){var u=c.query(l.blotName).tagName;if(o.tagName!==u)return f.formats.call(this,o)},l.prototype.format=function(o,u){c.query(o,c.Scope.BLOCK)!=null&&(o!==this.statics.blotName||u?f.prototype.format.call(this,o,u):this.replaceWith(l.blotName))},l.prototype.formatAt=function(o,u,s,r){c.query(s,c.Scope.BLOCK)!=null?this.format(s,r):f.prototype.formatAt.call(this,o,u,s,r)},l.prototype.insertAt=function(o,u,s){if(s==null||c.query(u,c.Scope.INLINE)!=null)f.prototype.insertAt.call(this,o,u,s);else{var r=this.split(o),m=c.create(u,s);r.parent.insertBefore(m,r)}},l.prototype.update=function(o,u){navigator.userAgent.match(/Trident/)?this.build():f.prototype.update.call(this,o,u)},l.blotName="block",l.scope=c.Scope.BLOCK_BLOT,l.tagName="P",l}(g.default);k.default=b},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,b){c.__proto__=b}||function(c,b){for(var f in b)b.hasOwnProperty(f)&&(c[f]=b[f])},function(c,b){function f(){this.constructor=c}E(c,b),c.prototype=b===null?Object.create(b):(f.prototype=b.prototype,new f)});Object.defineProperty(k,"__esModule",{value:!0});var g=function(c){function b(){return c!==null&&c.apply(this,arguments)||this}return S(b,c),b.formats=function(f){},b.prototype.format=function(f,l){c.prototype.formatAt.call(this,0,this.length(),f,l)},b.prototype.formatAt=function(f,l,o,u){f===0&&l===this.length()?this.format(o,u):c.prototype.formatAt.call(this,f,l,o,u)},b.prototype.formats=function(){return this.statics.formats(this.domNode)},b}(q(4).default);k.default=g},function(O,k,q){var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,l){f.__proto__=l}||function(f,l){for(var o in l)l.hasOwnProperty(o)&&(f[o]=l[o])},function(f,l){function o(){this.constructor=f}E(f,l),f.prototype=l===null?Object.create(l):(o.prototype=l.prototype,new o)});Object.defineProperty(k,"__esModule",{value:!0});var g=q(4),c=q(0),b=function(f){function l(o){var u=f.call(this,o)||this;return u.text=u.statics.value(u.domNode),u}return S(l,f),l.create=function(o){return document.createTextNode(o)},l.value=function(o){var u=o.data;return u.normalize&&(u=u.normalize()),u},l.prototype.deleteAt=function(o,u){this.domNode.data=this.text=this.text.slice(0,o)+this.text.slice(o+u)},l.prototype.index=function(o,u){return this.domNode===o?u:-1},l.prototype.insertAt=function(o,u,s){s==null?(this.text=this.text.slice(0,o)+u+this.text.slice(o),this.domNode.data=this.text):f.prototype.insertAt.call(this,o,u,s)},l.prototype.length=function(){return this.text.length},l.prototype.optimize=function(o){f.prototype.optimize.call(this,o),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof l&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},l.prototype.position=function(o,u){return[this.domNode,o]},l.prototype.split=function(o,u){if(u===void 0&&(u=!1),!u){if(o===0)return this;if(o===this.length())return this.next}var s=c.create(this.domNode.splitText(o));return this.parent.insertBefore(s,this.next),this.text=this.statics.value(this.domNode),s},l.prototype.update=function(o,u){var s=this;o.some(function(r){return r.type==="characterData"&&r.target===s.domNode})&&(this.text=this.statics.value(this.domNode))},l.prototype.value=function(){return this.text},l.blotName="text",l.scope=c.Scope.INLINE_BLOT,l}(g.default);k.default=b}])},C.exports=p()},204:function(C,p,O){var k=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(p,"__esModule",{value:!0});var q,E=k(O(739)),S=k(O(216));(function(g){g.compose=function(c,b,f){c===void 0&&(c={}),b===void 0&&(b={}),typeof c!="object"&&(c={}),typeof b!="object"&&(b={});var l=E.default(b);for(var o in f||(l=Object.keys(l).reduce(function(u,s){return l[s]!=null&&(u[s]=l[s]),u},{})),c)c[o]!==void 0&&b[o]===void 0&&(l[o]=c[o]);return Object.keys(l).length>0?l:void 0},g.diff=function(c,b){c===void 0&&(c={}),b===void 0&&(b={}),typeof c!="object"&&(c={}),typeof b!="object"&&(b={});var f=Object.keys(c).concat(Object.keys(b)).reduce(function(l,o){return S.default(c[o],b[o])||(l[o]=b[o]===void 0?null:b[o]),l},{});return Object.keys(f).length>0?f:void 0},g.invert=function(c,b){c===void 0&&(c={}),b===void 0&&(b={}),c=c||{};var f=Object.keys(b).reduce(function(l,o){return b[o]!==c[o]&&c[o]!==void 0&&(l[o]=b[o]),l},{});return Object.keys(c).reduce(function(l,o){return c[o]!==b[o]&&b[o]===void 0&&(l[o]=null),l},f)},g.transform=function(c,b,f){if(f===void 0&&(f=!1),typeof c!="object")return b;if(typeof b=="object"){if(!f)return b;var l=Object.keys(b).reduce(function(o,u){return c[u]===void 0&&(o[u]=b[u]),o},{});return Object.keys(l).length>0?l:void 0}}})(q||(q={})),p.default=q},802:function(C,p,O){var k=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}},q=k(O(284)),E=k(O(739)),S=k(O(216)),g=k(O(204)),c=k(O(933)),b="\0",f=function(){function l(o){Array.isArray(o)?this.ops=o:o!=null&&Array.isArray(o.ops)?this.ops=o.ops:this.ops=[]}return l.prototype.insert=function(o,u){var s={};return typeof o=="string"&&o.length===0?this:(s.insert=o,u!=null&&typeof u=="object"&&Object.keys(u).length>0&&(s.attributes=u),this.push(s))},l.prototype.delete=function(o){return o<=0?this:this.push({delete:o})},l.prototype.retain=function(o,u){if(o<=0)return this;var s={retain:o};return u!=null&&typeof u=="object"&&Object.keys(u).length>0&&(s.attributes=u),this.push(s)},l.prototype.push=function(o){var u=this.ops.length,s=this.ops[u-1];if(o=E.default(o),typeof s=="object"){if(typeof o.delete=="number"&&typeof s.delete=="number")return this.ops[u-1]={delete:s.delete+o.delete},this;if(typeof s.delete=="number"&&o.insert!=null&&(u-=1,typeof(s=this.ops[u-1])!="object"))return this.ops.unshift(o),this;if(S.default(o.attributes,s.attributes)){if(typeof o.insert=="string"&&typeof s.insert=="string")return this.ops[u-1]={insert:s.insert+o.insert},typeof o.attributes=="object"&&(this.ops[u-1].attributes=o.attributes),this;if(typeof o.retain=="number"&&typeof s.retain=="number")return this.ops[u-1]={retain:s.retain+o.retain},typeof o.attributes=="object"&&(this.ops[u-1].attributes=o.attributes),this}}return u===this.ops.length?this.ops.push(o):this.ops.splice(u,0,o),this},l.prototype.chop=function(){var o=this.ops[this.ops.length-1];return o&&o.retain&&!o.attributes&&this.ops.pop(),this},l.prototype.filter=function(o){return this.ops.filter(o)},l.prototype.forEach=function(o){this.ops.forEach(o)},l.prototype.map=function(o){return this.ops.map(o)},l.prototype.partition=function(o){var u=[],s=[];return this.forEach(function(r){(o(r)?u:s).push(r)}),[u,s]},l.prototype.reduce=function(o,u){return this.ops.reduce(o,u)},l.prototype.changeLength=function(){return this.reduce(function(o,u){return u.insert?o+c.default.length(u):u.delete?o-u.delete:o},0)},l.prototype.length=function(){return this.reduce(function(o,u){return o+c.default.length(u)},0)},l.prototype.slice=function(o,u){o===void 0&&(o=0),u===void 0&&(u=1/0);for(var s=[],r=c.default.iterator(this.ops),m=0;m<u&&r.hasNext();){var A=void 0;m<o?A=r.next(o-m):(A=r.next(u-m),s.push(A)),m+=c.default.length(A)}return new l(s)},l.prototype.compose=function(o){var u=c.default.iterator(this.ops),s=c.default.iterator(o.ops),r=[],m=s.peek();if(m!=null&&typeof m.retain=="number"&&m.attributes==null){for(var A=m.retain;u.peekType()==="insert"&&u.peekLength()<=A;)A-=u.peekLength(),r.push(u.next());m.retain-A>0&&s.next(m.retain-A)}for(var x=new l(r);u.hasNext()||s.hasNext();)if(s.peekType()==="insert")x.push(s.next());else if(u.peekType()==="delete")x.push(u.next());else{var D=Math.min(u.peekLength(),s.peekLength()),P=u.next(D),M=s.next(D);if(typeof M.retain=="number"){var Y={};typeof P.retain=="number"?Y.retain=D:Y.insert=P.insert;var at=g.default.compose(P.attributes,M.attributes,typeof P.retain=="number");if(at&&(Y.attributes=at),x.push(Y),!s.hasNext()&&S.default(x.ops[x.ops.length-1],Y)){var rt=new l(u.rest());return x.concat(rt).chop()}}else typeof M.delete=="number"&&typeof P.retain=="number"&&x.push(M)}return x.chop()},l.prototype.concat=function(o){var u=new l(this.ops.slice());return o.ops.length>0&&(u.push(o.ops[0]),u.ops=u.ops.concat(o.ops.slice(1))),u},l.prototype.diff=function(o,u){if(this.ops===o.ops)return new l;var s=[this,o].map(function(D){return D.map(function(P){if(P.insert!=null)return typeof P.insert=="string"?P.insert:b;throw new Error("diff() called "+(D===o?"on":"with")+" non-document")}).join("")}),r=new l,m=q.default(s[0],s[1],u),A=c.default.iterator(this.ops),x=c.default.iterator(o.ops);return m.forEach(function(D){for(var P=D[1].length;P>0;){var M=0;switch(D[0]){case q.default.INSERT:M=Math.min(x.peekLength(),P),r.push(x.next(M));break;case q.default.DELETE:M=Math.min(P,A.peekLength()),A.next(M),r.delete(M);break;case q.default.EQUAL:M=Math.min(A.peekLength(),x.peekLength(),P);var Y=A.next(M),at=x.next(M);S.default(Y.insert,at.insert)?r.retain(M,g.default.diff(Y.attributes,at.attributes)):r.push(at).delete(M)}P-=M}}),r.chop()},l.prototype.eachLine=function(o,u){u===void 0&&(u=`
`);for(var s=c.default.iterator(this.ops),r=new l,m=0;s.hasNext();){if(s.peekType()!=="insert")return;var A=s.peek(),x=c.default.length(A)-s.peekLength(),D=typeof A.insert=="string"?A.insert.indexOf(u,x)-x:-1;if(D<0)r.push(s.next());else if(D>0)r.push(s.next(D));else{if(o(r,s.next(1).attributes||{},m)===!1)return;m+=1,r=new l}}r.length()>0&&o(r,{},m)},l.prototype.invert=function(o){var u=new l;return this.reduce(function(s,r){if(r.insert)u.delete(c.default.length(r));else{if(r.retain&&r.attributes==null)return u.retain(r.retain),s+r.retain;if(r.delete||r.retain&&r.attributes){var m=r.delete||r.retain;return o.slice(s,s+m).forEach(function(A){r.delete?u.push(A):r.retain&&r.attributes&&u.retain(c.default.length(A),g.default.invert(r.attributes,A.attributes))}),s+m}}return s},0),u.chop()},l.prototype.transform=function(o,u){if(u===void 0&&(u=!1),u=!!u,typeof o=="number")return this.transformPosition(o,u);for(var s=o,r=c.default.iterator(this.ops),m=c.default.iterator(s.ops),A=new l;r.hasNext()||m.hasNext();)if(r.peekType()!=="insert"||!u&&m.peekType()==="insert")if(m.peekType()==="insert")A.push(m.next());else{var x=Math.min(r.peekLength(),m.peekLength()),D=r.next(x),P=m.next(x);if(D.delete)continue;P.delete?A.push(P):A.retain(x,g.default.transform(D.attributes,P.attributes,u))}else A.retain(c.default.length(r.next()));return A.chop()},l.prototype.transformPosition=function(o,u){u===void 0&&(u=!1),u=!!u;for(var s=c.default.iterator(this.ops),r=0;s.hasNext()&&r<=o;){var m=s.peekLength(),A=s.peekType();s.next(),A!=="delete"?(A==="insert"&&(r<o||!u)&&(o+=m),r+=m):o-=Math.min(m,o-r)}return o},l.Op=c.default,l.AttributeMap=g.default,l}();C.exports=f},908:function(C,p,O){var k=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(p,"__esModule",{value:!0});var q=k(O(933)),E=function(){function S(g){this.ops=g,this.index=0,this.offset=0}return S.prototype.hasNext=function(){return this.peekLength()<1/0},S.prototype.next=function(g){g||(g=1/0);var c=this.ops[this.index];if(c){var b=this.offset,f=q.default.length(c);if(g>=f-b?(g=f-b,this.index+=1,this.offset=0):this.offset+=g,typeof c.delete=="number")return{delete:g};var l={};return c.attributes&&(l.attributes=c.attributes),typeof c.retain=="number"?l.retain=g:typeof c.insert=="string"?l.insert=c.insert.substr(b,g):l.insert=c.insert,l}return{retain:1/0}},S.prototype.peek=function(){return this.ops[this.index]},S.prototype.peekLength=function(){return this.ops[this.index]?q.default.length(this.ops[this.index])-this.offset:1/0},S.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},S.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var g=this.offset,c=this.index,b=this.next(),f=this.ops.slice(this.index);return this.offset=g,this.index=c,[b].concat(f)}return[]},S}();p.default=E},933:function(C,p,O){var k=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(p,"__esModule",{value:!0});var q,E=k(O(908));(function(S){S.iterator=function(g){return new E.default(g)},S.length=function(g){return typeof g.delete=="number"?g.delete:typeof g.retain=="number"?g.retain:typeof g.insert=="string"?g.insert.length:1}})(q||(q={})),p.default=q}},Pe={};function j(C){var p=Pe[C];if(p!==void 0)return p.exports;var O=Pe[C]={id:C,loaded:!1,exports:{}};return Le[C].call(O.exports,O,O.exports,j),O.loaded=!0,O.exports}j.n=C=>{var p=C&&C.__esModule?()=>C.default:()=>C;return j.d(p,{a:p}),p},j.d=(C,p)=>{for(var O in p)j.o(p,O)&&!j.o(C,O)&&Object.defineProperty(C,O,{enumerable:!0,get:p[O]})},j.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),j.o=(C,p)=>Object.prototype.hasOwnProperty.call(C,p),j.nmd=C=>(C.paths=[],C.children||(C.children=[]),C);var U={};return(()=>{j.d(U,{default:()=>tn});var C=j(538),p=j.n(C),O=(j(423),j(124)),k=j.n(O),q=j(802),E=j.n(q),S=j(739),g=j.n(S),c=j(216),b=j.n(c);class f extends p().Embed{static value(){}insertInto(t,e){t.children.length===0?super.insertInto(t,e):this.remove()}length(){return 0}value(){return""}}f.blotName="break",f.tagName="BR";const l=f;class o extends p().Text{}const u=o;class s extends p().Inline{static compare(t,e){let n=s.order.indexOf(t),i=s.order.indexOf(e);return n>=0||i>=0?n-i:t===e?0:t<e?-1:1}formatAt(t,e,n,i){if(s.compare(this.statics.blotName,n)<0&&p().query(n,p().Scope.BLOT)){let h=this.isolate(t,e);i&&h.wrap(n,i)}else super.formatAt(t,e,n,i)}optimize(t){if(super.optimize(t),this.parent instanceof s&&s.compare(this.statics.blotName,this.parent.statics.blotName)>0){let e=this.parent.isolate(this.offset(),this.length());this.moveChildren(e),e.wrap(this)}}}s.allowedChildren=[s,p().Embed,u],s.order=["cursor","inline","underline","strike","italic","bold","script","link","code"];const r=s;class m extends p().Embed{attach(){super.attach(),this.attributes=new(p()).Attributor.Store(this.domNode)}delta(){return new(E())().insert(this.value(),k()(this.formats(),this.attributes.values()))}format(t,e){let n=p().query(t,p().Scope.BLOCK_ATTRIBUTE);n!=null&&this.attributes.attribute(n,e)}formatAt(t,e,n,i){this.format(n,i)}insertAt(t,e,n){if(typeof e=="string"&&e.endsWith(`
`)){let i=p().create(A.blotName);this.parent.insertBefore(i,t===0?this:this.next),i.insertAt(0,e.slice(0,-1))}else super.insertAt(t,e,n)}}m.scope=p().Scope.BLOCK_BLOT;class A extends p().Block{constructor(t){super(t),this.cache={}}delta(){return this.cache.delta==null&&(this.cache.delta=this.descendants(p().Leaf).reduce((t,e)=>e.length()===0?t:t.insert(e.value(),x(e)),new(E())).insert(`
`,x(this))),this.cache.delta}deleteAt(t,e){super.deleteAt(t,e),this.cache={}}formatAt(t,e,n,i){e<=0||(p().query(n,p().Scope.BLOCK)?t+e===this.length()&&this.format(n,i):super.formatAt(t,Math.min(e,this.length()-t-1),n,i),this.cache={})}insertAt(t,e,n){if(n!=null)return super.insertAt(t,e,n);if(e.length===0)return;let i=e.split(`
`),h=i.shift();h.length>0&&(t<this.length()-1||this.children.tail==null?super.insertAt(Math.min(t,this.length()-1),h):this.children.tail.insertAt(this.children.tail.length(),h),this.cache={});let y=this;i.reduce(function(T,V){return y=y.split(T,!0),y.insertAt(0,V),V.length},t+h.length)}insertBefore(t,e){let n=this.children.head;super.insertBefore(t,e),n instanceof l&&n.remove(),this.cache={}}length(){return this.cache.length==null&&(this.cache.length=super.length()+1),this.cache.length}moveChildren(t,e){super.moveChildren(t,e),this.cache={}}optimize(t){super.optimize(t),this.cache={}}path(t){return super.path(t,!0)}removeChild(t){super.removeChild(t),this.cache={}}split(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(e&&(t===0||t>=this.length()-1)){let n=this.clone();return t===0?(this.parent.insertBefore(n,this),this):(this.parent.insertBefore(n,this.next),n)}{let n=super.split(t,e);return this.cache={},n}}}function x(a){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return a==null?t:(typeof a.formats=="function"&&(t=k()(t,a.formats())),a.parent==null||a.parent.blotName=="scroll"||a.parent.statics.scope!==a.statics.scope?t:x(a.parent,t))}A.blotName="block",A.tagName="P",A.defaultChild="break",A.allowedChildren=[r,p().Embed,u];class D extends r{}D.blotName="code",D.tagName="CODE";class P extends A{static create(t){let e=super.create(t);return e.setAttribute("spellcheck",!1),e}static formats(){return!0}delta(){let t=this.domNode.textContent;return t.endsWith(`
`)&&(t=t.slice(0,-1)),t.split(`
`).reduce((e,n)=>e.insert(n).insert(`
`,this.formats()),new(E()))}format(t,e){if(t===this.statics.blotName&&e)return;let[n]=this.descendant(u,this.length()-1);n?.deleteAt(n.length()-1,1),super.format(t,e)}formatAt(t,e,n,i){if(e===0||p().query(n,p().Scope.BLOCK)==null||n===this.statics.blotName&&i===this.statics.formats(this.domNode))return;let h=this.newlineIndex(t);if(h<0||h>=t+e)return;let y=this.newlineIndex(t,!0)+1,T=h-y+1,V=this.isolate(y,T),G=V.next;V.format(n,i),G instanceof P&&G.formatAt(0,t-y+e-T,n,i)}insertAt(t,e,n){if(n!=null)return;let[i,h]=this.descendant(u,t);i.insertAt(h,e)}length(){let t=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?t:t+1}newlineIndex(t){if(arguments.length>1&&arguments[1]!==void 0&&arguments[1])return this.domNode.textContent.slice(0,t).lastIndexOf(`
`);{let e=this.domNode.textContent.slice(t).indexOf(`
`);return e>-1?t+e:-1}}optimize(t){this.domNode.textContent.endsWith(`
`)||this.appendChild(p().create("text",`
`)),super.optimize(t);let e=this.next;e!=null&&e.prev===this&&e.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===e.statics.formats(e.domNode)&&(e.optimize(t),e.moveChildren(this),e.remove())}replace(t){super.replace(t),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(e){let n=p().find(e);n==null?e.parentNode.removeChild(e):n instanceof p().Embed?n.remove():n.unwrap()})}}P.blotName="code-block",P.tagName="PRE",P.TAB="  ";class M extends p().Embed{static value(){}constructor(t,e){super(t),this.selection=e,this.textNode=document.createTextNode(M.CONTENTS),this.domNode.appendChild(this.textNode),this._length=0}detach(){this.parent!=null&&this.parent.removeChild(this)}format(t,e){if(this._length!==0)return super.format(t,e);let n=this,i=0;for(;n!=null&&n.statics.scope!==p().Scope.BLOCK_BLOT;)i+=n.offset(n.parent),n=n.parent;n!=null&&(this._length=M.CONTENTS.length,n.optimize(),n.formatAt(i,M.CONTENTS.length,t,e),this._length=0)}index(t,e){return t===this.textNode?0:super.index(t,e)}length(){return this._length}position(){return[this.textNode,this.textNode.data.length]}remove(){super.remove(),this.parent=null}restore(){if(this.selection.composing||this.parent==null)return;let t,e,n,i=this.textNode,h=this.selection.getNativeRange();for(h!=null&&h.start.node===i&&h.end.node===i&&([t,e,n]=[i,h.start.offset,h.end.offset]);this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==M.CONTENTS){let y=this.textNode.data.split(M.CONTENTS).join("");this.next instanceof u?(t=this.next.domNode,this.next.insertAt(0,y),this.textNode.data=M.CONTENTS):(this.textNode.data=y,this.parent.insertBefore(p().create(this.textNode),this),this.textNode=document.createTextNode(M.CONTENTS),this.domNode.appendChild(this.textNode))}return this.remove(),e!=null?([e,n]=[e,n].map(function(y){return Math.max(0,Math.min(t.data.length,y-1))}),{startNode:t,startOffset:e,endNode:t,endOffset:n}):void 0}update(t,e){if(t.some(n=>n.type==="characterData"&&n.target===this.textNode)){let n=this.restore();n&&(e.range=n)}}value(){return""}}M.blotName="cursor",M.className="ql-cursor",M.tagName="span",M.CONTENTS="\uFEFF";const Y=M,at=/^[ -~]*$/;function rt(a,t){return Object.keys(t).reduce(function(e,n){return a[n]==null||(t[n]===a[n]?e[n]=t[n]:Array.isArray(t[n])?t[n].indexOf(a[n])<0&&(e[n]=t[n].concat([a[n]])):e[n]=[t[n],a[n]]),e},{})}const ot=class{constructor(a){this.scroll=a,this.delta=this.getDelta()}applyDelta(a){let t=!1;this.scroll.update();let e=this.scroll.length();return this.scroll.batchStart(),(a=function(n){return n.reduce(function(i,h){if(h.insert===1){let y=g()(h.attributes);return delete y.image,i.insert({image:h.attributes.image},y)}if(h.attributes==null||h.attributes.list!==!0&&h.attributes.bullet!==!0||((h=g()(h)).attributes.list?h.attributes.list="ordered":(h.attributes.list="bullet",delete h.attributes.bullet)),typeof h.insert=="string"){let y=h.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return i.insert(y,h.attributes)}return i.push(h)},new(E()))}(a)).reduce((n,i)=>{let h=i.retain||i.delete||i.insert.length||1,y=i.attributes||{};if(i.insert!=null){if(typeof i.insert=="string"){let T=i.insert;T.endsWith(`
`)&&t&&(t=!1,T=T.slice(0,-1)),n>=e&&!T.endsWith(`
`)&&(t=!0),this.scroll.insertAt(n,T);let[V,G]=this.scroll.line(n),st=k()({},x(V));if(V instanceof A){let[ee]=V.descendant(p().Leaf,G);st=k()(st,x(ee))}y=q.AttributeMap.diff(st,y)||{}}else if(typeof i.insert=="object"){let T=Object.keys(i.insert)[0];if(T==null)return n;this.scroll.insertAt(n,T,i.insert[T])}e+=h}return Object.keys(y).forEach(T=>{this.scroll.formatAt(n,h,T,y[T])}),n+h},0),a.reduce((n,i)=>typeof i.delete=="number"?(this.scroll.deleteAt(n,i.delete),n):n+(i.retain||i.insert.length||1),0),this.scroll.batchEnd(),this.update(a)}deleteText(a,t){return this.scroll.deleteAt(a,t),this.update(new(E())().retain(a).delete(t))}formatLine(a,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(e).forEach(n=>{if(this.scroll.whitelist!=null&&!this.scroll.whitelist[n])return;let i=this.scroll.lines(a,Math.max(t,1)),h=t;i.forEach(y=>{let T=y.length();if(y instanceof P){let V=a-y.offset(this.scroll),G=y.newlineIndex(V+h)-V+1;y.formatAt(V,G,n,e[n])}else y.format(n,e[n]);h-=T})}),this.scroll.optimize(),this.update(new(E())().retain(a).retain(t,g()(e)))}formatText(a,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(e).forEach(n=>{this.scroll.formatAt(a,t,n,e[n])}),this.update(new(E())().retain(a).retain(t,g()(e)))}getContents(a,t){return this.delta.slice(a,a+t)}getDelta(){return this.scroll.lines().reduce((a,t)=>a.concat(t.delta()),new(E()))}getFormat(a){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=[],n=[];t===0?this.scroll.path(a).forEach(function(y){let[T]=y;T instanceof A?e.push(T):T instanceof p().Leaf&&n.push(T)}):(e=this.scroll.lines(a,t),n=this.scroll.descendants(p().Leaf,a,t));const[i,h]=[e,n].map(function(y){if(y.length===0)return{};let T=x(y.shift());for(;Object.keys(T).length>0;){let V=y.shift();if(V==null)return T;T=rt(x(V),T)}return T});return{...i,...h}}getText(a,t){return this.getContents(a,t).filter(function(e){return typeof e.insert=="string"}).map(function(e){return e.insert}).join("")}insertEmbed(a,t,e){return this.scroll.insertAt(a,t,e),this.update(new(E())().retain(a).insert({[t]:e}))}insertText(a,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return t=t.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(a,t),Object.keys(e).forEach(n=>{this.scroll.formatAt(a,t.length,n,e[n])}),this.update(new(E())().retain(a).insert(t,g()(e)))}isBlank(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;let a=this.scroll.children.head;return a.statics.blotName===A.blotName&&!(a.children.length>1)&&a.children.head instanceof l}removeFormat(a,t){let e=this.getText(a,t),[n,i]=this.scroll.line(a+t),h=0,y=new(E());n!=null&&(h=n instanceof P?n.newlineIndex(i)-i+1:n.length()-i,y=n.delta().slice(i,i+h-1).insert(`
`));let T=this.getContents(a,t+h).diff(new(E())().insert(e).concat(y)),V=new(E())().retain(a).concat(T);return this.applyDelta(V)}update(a){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,n=this.delta;if(t.length===1&&t[0].type==="characterData"&&t[0].target.data.match(at)&&p().find(t[0].target)){let i=p().find(t[0].target),h=x(i),y=i.offset(this.scroll),T=t[0].oldValue.replace(Y.CONTENTS,""),V=new(E())().insert(T),G=new(E())().insert(i.value());a=new(E())().retain(y).concat(V.diff(G,e)).reduce(function(st,ee){return ee.insert?st.insert(ee.insert,h):st.push(ee)},new(E())),this.delta=n.compose(a)}else this.delta=this.getDelta(),a&&b()(n.compose(a),this.delta)||(a=n.diff(this.delta,e));return a}};var ht=j(418),Bt=j.n(ht);let Dt=["error","warn","log","info"],de="warn";function Mt(a){if(Dt.indexOf(a)<=Dt.indexOf(de)){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];console[a](...e)}}function nt(a){return Dt.reduce(function(t,e){return t[e]=Mt.bind(console,e,a),t},{})}Mt.level=nt.level=function(a){de=a};const Kt=nt,Q=Kt("quill:events"),Rt=[],le="getRootNode"in document;["selectionchange","mousedown","mouseup","click"].forEach(function(a){document.addEventListener(a,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Rt.forEach(i=>{i.handleDOM(...e)})})});class Pt extends Bt(){constructor(){super(),this.listeners={},this.on("error",Q.error)}emit(){Q.log.apply(Q,arguments),super.emit.apply(this,arguments)}connect(){Rt.push(this)}disconnect(){Rt.splice(Rt.indexOf(this),1)}handleDOM(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];const h=t.composedPath?t.composedPath()[0]:t.target;(this.listeners[t.type]||[]).forEach(function(y){let{node:T,handler:V}=y;(h===T||((G,st)=>{if(!le||st.getRootNode()===document)return G.contains(st);for(;!G.contains(st);){const ee=st.getRootNode();if(!ee||!ee.host)return!1;st=ee.host}return!0})(T,h))&&V(t,...n)})}listenDOM(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({node:e,handler:n})}}Pt.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},Pt.sources={API:"api",SILENT:"silent",USER:"user"};const $=Pt;class vt{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.quill=t,this.options=e}}vt.DEFAULTS={};const yt=vt,ct=typeof window.ShadowRoot.prototype.getSelection=="function",It=window.InputEvent&&typeof window.InputEvent.prototype.getTargetRanges=="function",Vt=window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1,Nt=!(!window.navigator.userAgent.match(/Trident/)||window.navigator.userAgent.match(/MSIE/)),$t=window.navigator.userAgent.match(/Edge/);let pt=!1;class Lt{constructor(){this._ranges=[]}get rangeCount(){return this._ranges.length}getRangeAt(t){return this._ranges[t]}addRange(t){if(this._ranges.push(t),!pt){let e=window.getSelection();e.removeAllRanges(),e.setBaseAndExtent(t.startContainer,t.startOffset,t.endContainer,t.endOffset)}}removeAllRanges(){this._ranges=[]}}if((Vt||Nt||$t)&&!ct&&(window.ShadowRoot.prototype.getSelection=function(){return document.getSelection()}),!Vt&&!ct&&It){let a=new Lt;window.ShadowRoot.prototype.getSelection=function(){return a},window.addEventListener("selectionchange",()=>{if(!pt){pt=!0;const t=function(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}();t&&t.getAttribute("contenteditable")==="true"?document.execCommand("indent"):a.removeAllRanges(),pt=!1}},!0),window.addEventListener("beforeinput",t=>{if(pt){const e=t.getTargetRanges()[0],n=new Range;n.setStart(e.startContainer,e.startOffset),n.setEnd(e.endContainer,e.endOffset),a.removeAllRanges(),a.addRange(n),t.preventDefault(),t.stopImmediatePropagation()}},!0),window.addEventListener("selectstart",()=>{a.removeAllRanges()},!0)}const oe=Kt("quill:selection");class Qt{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this.index=t,this.length=e}}class ue{constructor(t,e){this.emitter=e,this.scroll=t,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.rootDocument=this.root.getRootNode?this.root.getRootNode():document,this.cursor=p().create("cursor",this),this.lastRange=this.savedRange=new Qt(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,()=>{this.mouseDown||this.composing||setTimeout(this.update.bind(this,$.sources.USER),1)}),this.emitter.on($.events.SCROLL_BEFORE_UPDATE,(n,i)=>{if(!this.hasFocus())return;const h=this.getNativeRange();if(h==null)return;const y=h.start.offset===0&&h.start.offset===h.end.offset&&this.rootDocument.getSelection()instanceof Lt&&i.some(T=>T.type==="characterData"&&T.oldValue==="")?1:0;h.start.node!==this.cursor.textNode&&this.emitter.once($.events.SCROLL_UPDATE,()=>{try{this.root.contains(h.start.node)&&this.root.contains(h.end.node)&&this.setNativeRange(h.start.node,h.start.offset+y,h.end.node,h.end.offset+y),this.update($.sources.SILENT)}catch{}})}),this.emitter.on($.events.SCROLL_OPTIMIZE,(n,i)=>{if(i.range){const{startNode:h,startOffset:y,endNode:T,endOffset:V}=i.range;this.setNativeRange(h,y,T,V)}}),this.update($.sources.SILENT)}handleComposition(){this.root.addEventListener("compositionstart",()=>{this.composing=!0}),this.root.addEventListener("compositionend",()=>{if(this.composing=!1,this.cursor.parent){const t=this.cursor.restore();if(!t)return;setTimeout(()=>{this.setNativeRange(t.startNode,t.startOffset,t.endNode,t.endOffset)},1)}})}handleDragging(){this.emitter.listenDOM("mousedown",document.body,()=>{this.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,()=>{this.mouseDown=!1,this.update($.sources.USER)})}focus(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}format(t,e){if(this.scroll.whitelist!=null&&!this.scroll.whitelist[t])return;this.scroll.update();let n=this.getNativeRange();if(n!=null&&n.native.collapsed&&!p().query(t,p().Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){let i=p().find(n.start.node,!1);if(i==null)return;if(i instanceof p().Leaf){let h=i.split(n.start.offset);i.parent.insertBefore(this.cursor,h)}else i.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}getBounds(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;let i,[h,y]=this.scroll.leaf(t);if(h==null)return null;[i,y]=h.position(y,!0);let T=document.createRange();if(e>0)return T.setStart(i,y),[h,y]=this.scroll.leaf(t+e),h==null?null:([i,y]=h.position(y,!0),T.setEnd(i,y),T.getBoundingClientRect());{let V,G="left";return i instanceof Text?(y<i.data.length?(T.setStart(i,y),T.setEnd(i,y+1)):(T.setStart(i,y-1),T.setEnd(i,y),G="right"),V=T.getBoundingClientRect()):(V=h.domNode.getBoundingClientRect(),y>0&&(G="right")),{bottom:V.top+V.height,height:V.height,left:V[G],right:V[G],top:V.top,width:0}}}getNativeRange(){const t=this.rootDocument.getSelection();if(t==null||t.rangeCount<=0)return null;const e=t.getRangeAt(0);if(e==null)return null;let n=this.normalizeNative(e);return oe.info("getNativeRange",n),n}getRange(){let t=this.getNativeRange();return t==null?[null,null]:[this.normalizedToRange(t),t]}hasFocus(){return this.rootDocument.activeElement===this.root}normalizedToRange(t){let e=[[t.start.node,t.start.offset]];t.native.collapsed||e.push([t.end.node,t.end.offset]);let n=e.map(y=>{let[T,V]=y,G=p().find(T,!0),st=G.offset(this.scroll);return V===0?st:G instanceof p().Container?st+G.length():st+G.index(T,V)}),i=Math.min(Math.max(...n),this.scroll.length()-1),h=Math.min(i,...n);return new Qt(h,i-h)}normalizeNative(t){if(!ie(this.root,t.startContainer)||!t.collapsed&&!ie(this.root,t.endContainer))return null;let e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach(function(n){let i=n.node,h=n.offset;for(;!(i instanceof Text)&&i.childNodes.length>0;)if(i.childNodes.length>h)i=i.childNodes[h],h=0;else{if(i.childNodes.length!==h)break;i=i.lastChild,h=i instanceof Text?i.data.length:i.childNodes.length+1}n.node=i,n.offset=h}),e}rangeToNative(t){let e=t.collapsed?[t.index]:[t.index,t.index+t.length],n=[],i=this.scroll.length();return e.forEach((h,y)=>{h=Math.min(i-1,h);let T,[V,G]=this.scroll.leaf(h);[T,G]=V.position(G,y!==0),n.push(T,G)}),n.length<2&&(n=n.concat(n)),n}scrollIntoView(t){let e=this.lastRange;if(e==null)return;let n=this.getBounds(e.index,e.length);if(n==null)return;let i=this.scroll.length()-1,[h]=this.scroll.line(Math.min(e.index,i)),y=h;if(e.length>0&&([y]=this.scroll.line(Math.min(e.index+e.length,i))),h==null||y==null)return;let T=t.getBoundingClientRect();n.top<T.top?t.scrollTop-=T.top-n.top:n.bottom>T.bottom&&(t.scrollTop+=n.bottom-T.bottom)}setNativeRange(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e,h=arguments.length>4&&arguments[4]!==void 0&&arguments[4];if(oe.info("setNativeRange",t,e,n,i),t!=null&&(this.root.parentNode==null||t.parentNode==null||n.parentNode==null))return;const y=this.rootDocument.getSelection();if(y!=null)if(t!=null){this.hasFocus()||this.root.focus();let T=(this.getNativeRange()||{}).native;if(T==null||h||t!==T.startContainer||e!==T.startOffset||n!==T.endContainer||i!==T.endOffset){t.tagName=="BR"&&(e=[].indexOf.call(t.parentNode.childNodes,t),t=t.parentNode),n.tagName=="BR"&&(i=[].indexOf.call(n.parentNode.childNodes,n),n=n.parentNode);let V=document.createRange();V.setStart(t,e),V.setEnd(n,i),y.removeAllRanges(),y.addRange(V)}}else y.removeAllRanges(),this.root.blur(),document.body.focus()}setRange(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:$.sources.API;if(typeof e=="string"&&(n=e,e=!1),oe.info("setRange",t),t!=null){let i=this.rangeToNative(t);this.setNativeRange(...i,e)}else this.setNativeRange(null);this.update(n)}update(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$.sources.USER,e=this.lastRange,[n,i]=this.getRange();if(this.lastRange=n,this.lastRange!=null&&(this.savedRange=this.lastRange),!b()(e,this.lastRange)){!this.composing&&i!=null&&i.native.collapsed&&i.start.node!==this.cursor.textNode&&this.cursor.restore();let h=[$.events.SELECTION_CHANGE,g()(this.lastRange),g()(e),t];this.emitter.emit($.events.EDITOR_CHANGE,...h),t!==$.sources.SILENT&&this.emitter.emit(...h)}}}function ie(a,t){try{t.parentNode}catch{return!1}return t instanceof Text&&(t=t.parentNode),a.contains(t)}class Tt{constructor(t,e){this.quill=t,this.options=e,this.modules={}}init(){Object.keys(this.options.modules).forEach(t=>{this.modules[t]==null&&this.addModule(t)})}addModule(t){let e=this.quill.constructor.import(`modules/${t}`);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}Tt.DEFAULTS={modules:{}},Tt.themes={default:Tt};const kt=Tt;let Ct=Kt("quill");class I{static debug(t){t===!0&&(t="log"),Kt.level(t)}static find(t){return t.__quill||p().find(t)}static import(t){return this.imports[t]==null&&Ct.error(`Cannot import ${t}. Are you sure it was registered?`),this.imports[t]}static register(t,e){let n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(typeof t!="string"){let i=t.attrName||t.blotName;typeof i=="string"?this.register("formats/"+i,t,e):Object.keys(t).forEach(h=>{this.register(h,t[h],e)})}else this.imports[t]==null||n||Ct.warn(`Overwriting ${t} with`,e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&e.blotName!=="abstract"?p().register(e):t.startsWith("modules")&&typeof e.register=="function"&&e.register()}constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.options=function(h,y){if(y=k()({container:h,modules:{clipboard:!0,keyboard:!0,history:!0}},y),y.theme&&y.theme!==I.DEFAULTS.theme){if(y.theme=I.import(`themes/${y.theme}`),y.theme==null)throw new Error(`Invalid theme ${y.theme}. Did you register it?`)}else y.theme=kt;let T=k()({},y.theme.DEFAULTS);[T,y].forEach(function(G){G.modules=G.modules||{},Object.keys(G.modules).forEach(function(st){G.modules[st]===!0&&(G.modules[st]={})})});let V=Object.keys(T.modules).concat(Object.keys(y.modules)).reduce(function(G,st){let ee=I.import(`modules/${st}`);return ee==null?Ct.error(`Cannot load ${st} module. Are you sure you registered it?`):G[st]=ee.DEFAULTS||{},G},{});return y.modules!=null&&y.modules.toolbar&&y.modules.toolbar.constructor!==Object&&(y.modules.toolbar={container:y.modules.toolbar}),y=k()({},I.DEFAULTS,{modules:V},T,y),["bounds","container","scrollingContainer"].forEach(function(G){typeof y[G]=="string"&&(y[G]=document.querySelector(y[G]))}),y.modules=Object.keys(y.modules).reduce(function(G,st){return y.modules[st]&&(G[st]=y.modules[st]),G},{}),y}(t,e),this.container=this.options.container,this.container==null)return Ct.error("Invalid Quill container",t);this.options.debug&&I.debug(this.options.debug);let n=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new $,this.scroll=p().create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new ot(this.scroll),this.selection=new ue(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on($.events.EDITOR_CHANGE,h=>{h===$.events.TEXT_CHANGE&&this.root.classList.toggle("ql-blank",this.editor.isBlank())}),this.emitter.on($.events.SCROLL_UPDATE,(h,y)=>{let T=this.selection.lastRange,V=T&&T.length===0?T.index:void 0;dt.call(this,()=>this.editor.update(null,y,V),h)});let i=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">${n}<p><br></p></div>`);this.setContents(i),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}addContainer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof t=="string"){let n=t;(t=document.createElement("div")).classList.add(n)}return this.container.insertBefore(t,e),t}blur(){this.selection.setRange(null)}deleteText(t,e,n){return[t,e,,n]=gt(t,e,n),dt.call(this,()=>this.editor.deleteText(t,e),n,t,-1*e)}disable(){this.enable(!1)}enable(){let t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}focus(){let t=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=t,this.scrollIntoView()}format(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:$.sources.API;return dt.call(this,()=>{let i=this.getSelection(!0),h=new(E());if(i==null)return h;if(p().query(t,p().Scope.BLOCK))h=this.editor.formatLine(i.index,i.length,{[t]:e});else{if(i.length===0)return this.selection.format(t,e),h;h=this.editor.formatText(i.index,i.length,{[t]:e})}return this.setSelection(i,$.sources.SILENT),h},n)}formatLine(t,e,n,i,h){let y;return[t,e,y,h]=gt(t,e,n,i,h),dt.call(this,()=>this.editor.formatLine(t,e,y),h,t,0)}formatText(t,e,n,i,h){let y;return[t,e,y,h]=gt(t,e,n,i,h),dt.call(this,()=>this.editor.formatText(t,e,y),h,t,0)}getBounds(t){let e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;e=typeof t=="number"?this.selection.getBounds(t,n):this.selection.getBounds(t.index,t.length);let i=this.container.getBoundingClientRect();return{bottom:e.bottom-i.top,height:e.height,left:e.left-i.left,right:e.right-i.left,top:e.top-i.top,width:e.width}}getContents(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-t;return[t,e]=gt(t,e),this.editor.getContents(t,e)}getFormat(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof t=="number"?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}getIndex(t){return t.offset(this.scroll)}getLength(){return this.scroll.length()}getLeaf(t){return this.scroll.leaf(t)}getLine(t){return this.scroll.line(t)}getLines(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof t!="number"?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}getModule(t){return this.theme.modules[t]}getSelection(){return arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}getText(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-t;return[t,e]=gt(t,e),this.editor.getText(t,e)}hasFocus(){return this.selection.hasFocus()}insertEmbed(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:I.sources.API;return dt.call(this,()=>this.editor.insertEmbed(t,e,n),i,t)}insertText(t,e,n,i,h){let y;return[t,,y,h]=gt(t,0,n,i,h),dt.call(this,()=>this.editor.insertText(t,e,y),h,t,e.length)}isEnabled(){return!this.container.classList.contains("ql-disabled")}off(){return this.emitter.off.apply(this.emitter,arguments)}on(){return this.emitter.on.apply(this.emitter,arguments)}once(){return this.emitter.once.apply(this.emitter,arguments)}pasteHTML(t,e,n){this.clipboard.dangerouslyPasteHTML(t,e,n)}removeFormat(t,e,n){return[t,e,,n]=gt(t,e,n),dt.call(this,()=>this.editor.removeFormat(t,e),n,t)}scrollIntoView(){this.selection.scrollIntoView(this.scrollingContainer)}setContents(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$.sources.API;return dt.call(this,()=>{t=new(E())(t);let n=this.getLength(),i=this.editor.deleteText(0,n),h=this.editor.applyDelta(t),y=h.ops[h.ops.length-1];return y!=null&&typeof y.insert=="string"&&y.insert[y.insert.length-1]===`
`&&(this.editor.deleteText(this.getLength()-1,1),h.delete(1)),i.compose(h)},e)}setSelection(t,e,n){t==null?this.selection.setRange(null,e||I.sources.API):([t,e,,n]=gt(t,e,n),this.selection.setRange(new Qt(t,e),n),n!==$.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer))}setText(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$.sources.API,n=new(E())().insert(t);return this.setContents(n,e)}update(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$.sources.USER,e=this.scroll.update(t);return this.selection.update(t),e}updateContents(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$.sources.API;return dt.call(this,()=>(t=new(E())(t),this.editor.applyDelta(t,e)),e,!0)}}function dt(a,t,e,n){if(this.options.strict&&!this.isEnabled()&&t===$.sources.USER)return new(E());let i=e==null?null:this.getSelection(),h=this.editor.delta,y=a();if(i!=null&&(e===!0&&(e=i.index),n==null?i=Gt(i,y,t):n!==0&&(i=Gt(i,e,n,t)),this.setSelection(i,$.sources.SILENT)),y.length()>0){let T=[$.events.TEXT_CHANGE,y,h,t];this.emitter.emit($.events.EDITOR_CHANGE,...T),t!==$.sources.SILENT&&this.emitter.emit(...T)}return y}function gt(a,t,e,n,i){let h={};return typeof a.index=="number"&&typeof a.length=="number"?typeof t!="number"?(i=n,n=e,e=t,t=a.length,a=a.index):(t=a.length,a=a.index):typeof t!="number"&&(i=n,n=e,e=t,t=0),typeof e=="object"?(h=e,i=n):typeof e=="string"&&(n!=null?h[e]=n:i=e),[a,t,h,i=i||$.sources.API]}function Gt(a,t,e,n){if(a==null)return null;let i,h;return t instanceof E()?[i,h]=[a.index,a.index+a.length].map(function(y){return t.transformPosition(y,n!==$.sources.USER)}):[i,h]=[a.index,a.index+a.length].map(function(y){return y<t||y===t&&n===$.sources.USER?y:e>=0?y+e:Math.max(t,y+e)}),new Qt(i,h-i)}I.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},I.events=$.events,I.sources=$.sources,I.version="1.3.6",I.imports={delta:E(),parchment:p(),"core/module":yt,"core/theme":kt};class Yt extends p().Container{}Yt.allowedChildren=[A,m,Yt];const _t=Yt,St="\uFEFF";class Ut extends p().Embed{constructor(t){super(t),this.contentNode=document.createElement("span"),this.contentNode.setAttribute("contenteditable",!1),[].slice.call(this.domNode.childNodes).forEach(e=>{this.contentNode.appendChild(e)}),this.leftGuard=document.createTextNode(St),this.rightGuard=document.createTextNode(St),this.domNode.appendChild(this.leftGuard),this.domNode.appendChild(this.contentNode),this.domNode.appendChild(this.rightGuard)}index(t,e){return t===this.leftGuard?0:t===this.rightGuard?1:super.index(t,e)}restore(t){let e,n,i=t.data.split(St).join("");if(t===this.leftGuard)if(this.prev instanceof u){let h=this.prev.length();this.prev.insertAt(h,i),e={startNode:this.prev.domNode,startOffset:h+i.length}}else n=document.createTextNode(i),this.parent.insertBefore(p().create(n),this),e={startNode:n,startOffset:i.length};else t===this.rightGuard&&(this.next instanceof u?(this.next.insertAt(0,i),e={startNode:this.next.domNode,startOffset:i.length}):(n=document.createTextNode(i),this.parent.insertBefore(p().create(n),this.next),e={startNode:n,startOffset:i.length}));return t.data=St,e}update(t,e){t.forEach(n=>{if(n.type==="characterData"&&(n.target===this.leftGuard||n.target===this.rightGuard)){let i=this.restore(n.target);i&&(e.range=i)}})}}const zt=Ut;function je(a){return a instanceof A||a instanceof m}class _e extends p().Scroll{constructor(t,e){super(t),this.emitter=e.emitter,Array.isArray(e.whitelist)&&(this.whitelist=e.whitelist.reduce(function(n,i){return n[i]=!0,n},{})),this.optimize(),this.enable()}batchStart(){this.batch=!0}batchEnd(){this.batch=!1,this.optimize()}deleteAt(t,e){let[n,i]=this.line(t),[h]=this.line(t+e);if(super.deleteAt(t,e),h!=null&&n!==h&&i>0){if(n instanceof m||h instanceof m)return void this.optimize();if(n instanceof P){let T=n.newlineIndex(n.length(),!0);if(T>-1&&(n=n.split(T+1),n===h))return void this.optimize()}else if(h instanceof P){let T=h.newlineIndex(0);T>-1&&h.split(T+1)}let y=h.children.head instanceof l?null:h.children.head;n.moveChildren(h,y),n.remove()}this.optimize()}enable(){let t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];this.domNode.setAttribute("contenteditable",t)}formatAt(t,e,n,i){(this.whitelist==null||this.whitelist[n])&&(super.formatAt(t,e,n,i),this.optimize())}insertAt(t,e,n){if(n==null||this.whitelist==null||this.whitelist[e]){if(t>=this.length())if(n==null||p().query(e,p().Scope.BLOCK)==null){let i=p().create(this.statics.defaultChild);this.appendChild(i),n==null&&e.endsWith(`
`)&&(e=e.slice(0,-1)),i.insertAt(0,e,n)}else{let i=p().create(e,n);this.appendChild(i)}else super.insertAt(t,e,n);this.optimize()}}insertBefore(t,e){if(t.statics.scope===p().Scope.INLINE_BLOT){let n=p().create(this.statics.defaultChild);n.appendChild(t),t=n}super.insertBefore(t,e)}leaf(t){return this.path(t).pop()||[null,-1]}line(t){return t===this.length()?this.line(t-1):this.descendant(je,t)}lines(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,n=(i,h,y)=>{let T=[],V=y;return i.children.forEachAt(h,y,function(G,st,ee){je(G)?T.push(G):G instanceof p().Container&&(T=T.concat(n(G,st,V))),V-=ee}),T};return n(this,t,e)}optimize(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(super.optimize(t,e),t.length>0&&this.emitter.emit($.events.SCROLL_OPTIMIZE,t,e))}path(t){return super.path(t).slice(1)}update(t){if(this.batch===!0)return;let e=$.sources.USER;typeof t=="string"&&(e=t),Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit($.events.SCROLL_BEFORE_UPDATE,e,t),super.update(t.concat([])),t.length>0&&this.emitter.emit($.events.SCROLL_UPDATE,e,t)}}_e.blotName="scroll",_e.className="ql-editor",_e.tagName="DIV",_e.defaultChild="block",_e.allowedChildren=[A,m,_t];const Ue=_e;let Ee={scope:p().Scope.BLOCK,whitelist:["right","center","justify"]},ke=new(p()).Attributor.Attribute("align","align",Ee),Ae=new(p()).Attributor.Class("align","ql-align",Ee),we=new(p()).Attributor.Style("align","text-align",Ee);class fe extends p().Attributor.Style{value(t){let e=super.value(t);return e.startsWith("rgb(")?(e=e.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+e.split(",").map(function(n){return("00"+parseInt(n).toString(16)).slice(-2)}).join("")):e}}let qe=new(p()).Attributor.Class("color","ql-color",{scope:p().Scope.INLINE}),xe=new fe("color","color",{scope:p().Scope.INLINE}),Ge=new(p()).Attributor.Class("background","ql-bg",{scope:p().Scope.INLINE}),Re=new fe("background","background-color",{scope:p().Scope.INLINE}),Ke={scope:p().Scope.BLOCK,whitelist:["rtl"]},Oe=new(p()).Attributor.Attribute("direction","dir",Ke),Te=new(p()).Attributor.Class("direction","ql-direction",Ke),pe=new(p()).Attributor.Style("direction","direction",Ke),se={scope:p().Scope.INLINE,whitelist:["serif","monospace"]},Xt=new(p()).Attributor.Class("font","ql-font",se);class ne extends p().Attributor.Style{value(t){return super.value(t).replace(/["']/g,"")}}let Jt=new ne("font","font-family",se),ae=new(p()).Attributor.Class("size","ql-size",{scope:p().Scope.INLINE,whitelist:["small","large","huge"]}),me=new(p()).Attributor.Style("size","font-size",{scope:p().Scope.INLINE,whitelist:["10px","18px","32px"]}),Ne=Kt("quill:clipboard");const ve="__ql-matcher",Ce=[[Node.TEXT_NODE,function(a,t){let e=a.data;if(a.parentNode.tagName==="O:P")return t.insert(e.trim());if(e.trim().length===0&&a.parentNode.classList.contains("ql-clipboard"))return t;if(!R(a.parentNode).whiteSpace.startsWith("pre")){let n=function(i,h){return(h=h.replace(/[^\u00a0]/g,"")).length<1&&i?" ":h};e=e.replace(/\r\n/g," ").replace(/\n/g," "),e=e.replace(/\s\s+/g,n.bind(n,!0)),(a.previousSibling==null&&J(a.parentNode)||a.previousSibling!=null&&J(a.previousSibling))&&(e=e.replace(/^\s+/,n.bind(n,!1))),(a.nextSibling==null&&J(a.parentNode)||a.nextSibling!=null&&J(a.nextSibling))&&(e=e.replace(/\s+$/,n.bind(n,!1)))}return t.insert(e)}],[Node.TEXT_NODE,bt],["br",function(a,t){return K(t,`
`)||t.insert(`
`),t}],[Node.ELEMENT_NODE,bt],[Node.ELEMENT_NODE,function(a,t){let e=p().query(a);if(e==null)return t;if(e.prototype instanceof p().Embed){let n={},i=e.value(a);i!=null&&(n[e.blotName]=i,t=new(E())().insert(n,e.formats(a)))}else typeof e.formats=="function"&&(t=w(t,e.blotName,e.formats(a)));return t}],[Node.ELEMENT_NODE,function(a,t){let e=p().Attributor.Attribute.keys(a),n=p().Attributor.Class.keys(a),i=p().Attributor.Style.keys(a),h={};return e.concat(n).concat(i).forEach(y=>{let T=p().query(y,p().Scope.ATTRIBUTE);T!=null&&(h[T.attrName]=T.value(a),h[T.attrName])||(T=Ze[y],T==null||T.attrName!==y&&T.keyName!==y||(h[T.attrName]=T.value(a)||void 0),T=Ie[y],T==null||T.attrName!==y&&T.keyName!==y||(T=Ie[y],h[T.attrName]=T.value(a)||void 0))}),Object.keys(h).length>0&&(t=w(t,h)),t}],[Node.ELEMENT_NODE,function(a,t){let e={},n=a.style||{};return n.fontStyle&&R(a).fontStyle==="italic"&&(e.italic=!0),n.fontWeight&&(R(a).fontWeight.startsWith("bold")||parseInt(R(a).fontWeight)>=700)&&(e.bold=!0),Object.keys(e).length>0&&(t=w(t,e)),parseFloat(n.textIndent||0)>0&&(t=new(E())().insert("	").concat(t)),t}],["li",function(a,t){let e=p().query(a);if(e==null||e.blotName!=="list-item"||!K(t,`
`))return t;let n=-1,i=a.parentNode;for(;!i.classList.contains("ql-clipboard");)(p().query(i)||{}).blotName==="list"&&(n+=1),i=i.parentNode;return n<=0?t:t.compose(new(E())().retain(t.length()-1).retain(1,{indent:n}))}],["b",mt.bind(mt,"bold")],["i",mt.bind(mt,"italic")],["style",function(){return new(E())}]],Ze=[ke,Oe].reduce(function(a,t){return a[t.keyName]=t,a},{}),Ie=[we,Re,xe,pe,Jt,me].reduce(function(a,t){return a[t.keyName]=t,a},{});class v extends yt{constructor(t,e){super(t,e),this.quill.root.addEventListener("paste",this.onPaste.bind(this)),this.container=this.quill.addContainer("ql-clipboard"),this.container.setAttribute("contenteditable",!0),this.container.setAttribute("tabindex",-1),this.matchers=[],Ce.concat(this.options.matchers).forEach(n=>{let[i,h]=n;this.addMatcher(i,h)})}addMatcher(t,e){this.matchers.push([t,e])}convert(t){if(typeof t=="string")return this.container.innerHTML=t.replace(/\>\r?\n +\</g,"><"),this.convert();const e=this.quill.getFormat(this.quill.selection.savedRange.index);if(e[P.blotName]){const y=this.container.innerText;return this.container.innerHTML="",new(E())().insert(y,{[P.blotName]:e[P.blotName]})}let[n,i]=this.prepareMatching(),h=ft(this.container,n,i);return K(h,`
`)&&h.ops[h.ops.length-1].attributes==null&&(h=h.compose(new(E())().retain(h.length()-1).delete(1))),Ne.log("convert",this.container.innerHTML,h),this.container.innerHTML="",h}dangerouslyPasteHTML(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:I.sources.API;if(typeof t=="string")this.quill.setContents(this.convert(t),e),this.quill.setSelection(0,I.sources.SILENT);else{let i=this.convert(e);this.quill.updateContents(new(E())().retain(t).concat(i),n),this.quill.setSelection(t+i.length(),I.sources.SILENT)}}onPaste(t){if(t.defaultPrevented||!this.quill.isEnabled())return;let e=this.quill.getSelection(),n=new(E())().retain(e.index),i=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(I.sources.SILENT),setTimeout(()=>{n=n.concat(this.convert()).delete(e.length),this.quill.updateContents(n,I.sources.USER),this.quill.setSelection(n.length()-e.length,I.sources.SILENT),this.quill.scrollingContainer.scrollTop=i,this.quill.focus()},1)}prepareMatching(){let t=[],e=[];return this.matchers.forEach(n=>{let[i,h]=n;switch(i){case Node.TEXT_NODE:e.push(h);break;case Node.ELEMENT_NODE:t.push(h);break;default:[].forEach.call(this.container.querySelectorAll(i),y=>{y[ve]=y[ve]||[],y[ve].push(h)})}}),[t,e]}}function w(a,t,e){return typeof t=="object"?Object.keys(t).reduce(function(n,i){return w(n,i,t[i])},a):a.reduce(function(n,i){return i.attributes&&i.attributes[t]?n.push(i):n.insert(i.insert,k()({},{[t]:e},i.attributes))},new(E()))}function R(a){if(a.nodeType!==Node.ELEMENT_NODE)return{};const t="__ql-computed-style";return a[t]||(a[t]=window.getComputedStyle(a))}function K(a,t){let e="";for(let n=a.ops.length-1;n>=0&&e.length<t.length;--n){let i=a.ops[n];if(typeof i.insert!="string")break;e=i.insert+e}return e.slice(-1*t.length)===t}function J(a){if(a.childNodes.length===0)return!1;let t=R(a);return["block","list-item"].indexOf(t.display)>-1}function ft(a,t,e){return a.nodeType===a.TEXT_NODE?e.reduce(function(n,i){return i(a,n)},new(E())):a.nodeType===a.ELEMENT_NODE?[].reduce.call(a.childNodes||[],(n,i)=>{let h=ft(i,t,e);return i.nodeType===a.ELEMENT_NODE&&(h=t.reduce(function(y,T){return T(i,y)},h),h=(i[ve]||[]).reduce(function(y,T){return T(i,y)},h)),n.concat(h)},new(E())):new(E())}function mt(a,t,e){return w(e,a,!0)}function bt(a,t){return K(t,`
`)||(J(a)||t.length()>0&&a.nextSibling&&J(a.nextSibling))&&t.insert(`
`),t}v.DEFAULTS={matchers:[],matchVisual:!1};class Wt extends yt{constructor(t,e){super(t,e),this.lastRecorded=0,this.ignoreChange=!1,this.clear(),this.quill.on(I.events.EDITOR_CHANGE,(n,i,h,y)=>{n!==I.events.TEXT_CHANGE||this.ignoreChange||(this.options.userOnly&&y!==I.sources.USER?this.transform(i):this.record(i,h))}),this.quill.keyboard.addBinding({key:"Z",shortKey:!0},this.undo.bind(this)),this.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},this.redo.bind(this)),/Win/i.test(navigator.platform)&&this.quill.keyboard.addBinding({key:"Y",shortKey:!0},this.redo.bind(this))}change(t,e){if(this.stack[t].length===0)return;let n=this.stack[t].pop();this.stack[e].push(n),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n[t],I.sources.USER),this.ignoreChange=!1;let i=function(h){let y=h.reduce(function(V,G){return V+=G.delete||0},0),T=h.length()-y;return function(V){let G=V.ops[V.ops.length-1];return G==null?!1:G.insert!=null?typeof G.insert=="string"&&G.insert.endsWith(`
`):G.attributes!=null?Object.keys(G.attributes).some(function(st){return p().query(st,p().Scope.BLOCK)!=null}):!1}(h)&&(T-=1),T}(n[t]);this.quill.setSelection(i)}clear(){this.stack={undo:[],redo:[]}}cutoff(){this.lastRecorded=0}record(t,e){if(t.ops.length===0)return;this.stack.redo=[];let n=this.quill.getContents().diff(e),i=Date.now();if(this.lastRecorded+this.options.delay>i&&this.stack.undo.length>0){let h=this.stack.undo.pop();n=n.compose(h.undo),t=h.redo.compose(t)}else this.lastRecorded=i;this.stack.undo.push({redo:t,undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}redo(){this.change("redo","undo")}transform(t){this.stack.undo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}),this.stack.redo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})}undo(){this.change("undo","redo")}}Wt.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};let wt=Kt("quill:keyboard");const jt=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey";class tt extends yt{static match(t,e){return e=N(e),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(n){return!!e[n]!==t[n]&&e[n]!==null})&&e.key===(t.which||t.keyCode)}constructor(t,e){super(t,e),this.bindings={},Object.keys(this.options.bindings).forEach(n=>{(n!=="list autofill"||t.scroll.whitelist==null||t.scroll.whitelist.list)&&this.options.bindings[n]&&this.addBinding(this.options.bindings[n])}),this.addBinding({key:tt.keys.ENTER,shiftKey:null},L),this.addBinding({key:tt.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(this.addBinding({key:tt.keys.BACKSPACE},{collapsed:!0},ce),this.addBinding({key:tt.keys.DELETE},{collapsed:!0},ye)):(this.addBinding({key:tt.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},ce),this.addBinding({key:tt.keys.DELETE},{collapsed:!0,suffix:/^.?$/},ye)),this.addBinding({key:tt.keys.BACKSPACE},{collapsed:!1},_),this.addBinding({key:tt.keys.DELETE},{collapsed:!1},_),this.addBinding({key:tt.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},ce),this.listen()}addBinding(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=N(t);if(i==null||i.key==null)return wt.warn("Attempted to add invalid keyboard binding",i);typeof e=="function"&&(e={handler:e}),typeof n=="function"&&(n={handler:n}),i=k()(i,e,n),this.bindings[i.key]=this.bindings[i.key]||[],this.bindings[i.key].push(i)}listen(){this.quill.root.addEventListener("keydown",t=>{if(t.defaultPrevented)return;let e=t.which||t.keyCode,n=(this.bindings[e]||[]).filter(function(Ht){return tt.match(t,Ht)});if(n.length===0)return;let i=this.quill.getSelection();if(i==null||!this.quill.hasFocus())return;let[h,y]=this.quill.getLine(i.index),[T,V]=this.quill.getLeaf(i.index),[G,st]=i.length===0?[T,V]:this.quill.getLeaf(i.index+i.length),ee=T instanceof p().Text?T.value().slice(0,V):"",en=G instanceof p().Text?G.value().slice(st):"",Se={collapsed:i.length===0,empty:i.length===0&&h.length()<=1,format:this.quill.getFormat(i),offset:y,prefix:ee,suffix:en};n.some(Ht=>{if(Ht.collapsed!=null&&Ht.collapsed!==Se.collapsed||Ht.empty!=null&&Ht.empty!==Se.empty||Ht.offset!=null&&Ht.offset!==Se.offset)return!1;if(Array.isArray(Ht.format)){if(Ht.format.every(function(De){return Se.format[De]==null}))return!1}else if(typeof Ht.format=="object"&&!Object.keys(Ht.format).every(function(De){return Ht.format[De]===!0?Se.format[De]!=null:Ht.format[De]===!1?Se.format[De]==null:b()(Ht.format[De],Se.format[De])}))return!1;return!(Ht.prefix!=null&&!Ht.prefix.test(Se.prefix))&&!(Ht.suffix!=null&&!Ht.suffix.test(Se.suffix))&&Ht.handler.call(this,i,Se)!==!0})&&t.preventDefault()})}}function Ft(a,t){const e=a===tt.keys.LEFT?"prefix":"suffix";return{key:a,shiftKey:t,altKey:null,[e]:/^$/,handler:function(n){let i=n.index;a===tt.keys.RIGHT&&(i+=n.length+1);const[h]=this.quill.getLeaf(i);return!(h instanceof p().Embed)||(a===tt.keys.LEFT?t?this.quill.setSelection(n.index-1,n.length+1,I.sources.USER):this.quill.setSelection(n.index-1,I.sources.USER):t?this.quill.setSelection(n.index,n.length+1,I.sources.USER):this.quill.setSelection(n.index+n.length+1,I.sources.USER),!1)}}}function ce(a,t){if(a.index===0||this.quill.getLength()<=1)return;let[e]=this.quill.getLine(a.index),n={};if(t.offset===0){let[h]=this.quill.getLine(a.index-1);if(h!=null&&h.length()>1){let y=e.formats(),T=this.quill.getFormat(a.index-1,1);n=q.AttributeMap.diff(y,T)||{}}}let i=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix)?2:1;this.quill.deleteText(a.index-i,i,I.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(a.index-i,i,n,I.sources.USER),this.quill.focus()}function ye(a,t){let e=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix)?2:1;if(a.index>=this.quill.getLength()-e)return;let n={},i=0,[h]=this.quill.getLine(a.index);if(t.offset>=h.length()-1){let[y]=this.quill.getLine(a.index+1);if(y){let T=h.formats(),V=this.quill.getFormat(a.index,1);n=q.AttributeMap.diff(T,V)||{},i=y.length()}}this.quill.deleteText(a.index,e,I.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(a.index+i-1,e,n,I.sources.USER)}function _(a){let t=this.quill.getLines(a),e={};if(t.length>1){let n=t[0].formats(),i=t[t.length-1].formats();e=q.AttributeMap.diff(i,n)||{}}this.quill.deleteText(a,I.sources.USER),Object.keys(e).length>0&&this.quill.formatLine(a.index,1,e,I.sources.USER),this.quill.setSelection(a.index,I.sources.SILENT),this.quill.focus()}function L(a,t){a.length>0&&this.quill.scroll.deleteAt(a.index,a.length);let e=Object.keys(t.format).reduce(function(n,i){return p().query(i,p().Scope.BLOCK)&&!Array.isArray(t.format[i])&&(n[i]=t.format[i]),n},{});this.quill.insertText(a.index,`
`,e,I.sources.USER),this.quill.setSelection(a.index+1,I.sources.SILENT),this.quill.focus(),Object.keys(t.format).forEach(n=>{e[n]==null&&(Array.isArray(t.format[n])||n!=="link"&&this.quill.format(n,t.format[n],I.sources.USER))})}function H(a){return{key:tt.keys.TAB,shiftKey:!a,format:{"code-block":!0},handler:function(t){let e=p().query("code-block"),n=t.index,i=t.length,[h,y]=this.quill.scroll.descendant(e,n);if(h==null)return;let T=this.quill.getIndex(h),V=h.newlineIndex(y,!0)+1,G=h.newlineIndex(T+y+i),st=h.domNode.textContent.slice(V,G).split(`
`);y=0,st.forEach((ee,en)=>{a?(h.insertAt(V+y,e.TAB),y+=e.TAB.length,en===0?n+=e.TAB.length:i+=e.TAB.length):ee.startsWith(e.TAB)&&(h.deleteAt(V+y,e.TAB.length),y-=e.TAB.length,en===0?n-=e.TAB.length:i-=e.TAB.length),y+=ee.length+1}),this.quill.update(I.sources.USER),this.quill.setSelection(n,i,I.sources.SILENT)}}}function d(a){return{key:a[0].toUpperCase(),shortKey:!0,handler:function(t,e){this.quill.format(a,!e.format[a],I.sources.USER)}}}function N(a){if(typeof a=="string"||typeof a=="number")return N({key:a});if(typeof a=="object"&&(a=g()(a,!1)),typeof a.key=="string")if(tt.keys[a.key.toUpperCase()]!=null)a.key=tt.keys[a.key.toUpperCase()];else{if(a.key.length!==1)return null;a.key=a.key.toUpperCase().charCodeAt(0)}return a.shortKey&&(a[jt]=a.shortKey,delete a.shortKey),a}tt.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},tt.DEFAULTS={bindings:{bold:d("bold"),italic:d("italic"),underline:d("underline"),indent:{key:tt.keys.TAB,format:["blockquote","indent","list"],handler:function(a,t){if(t.collapsed&&t.offset!==0)return!0;this.quill.format("indent","+1",I.sources.USER)}},outdent:{key:tt.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(a,t){if(t.collapsed&&t.offset!==0)return!0;this.quill.format("indent","-1",I.sources.USER)}},"outdent backspace":{key:tt.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(a,t){t.format.indent!=null?this.quill.format("indent","-1",I.sources.USER):t.format.list!=null&&this.quill.format("list",!1,I.sources.USER)}},"indent code-block":H(!0),"outdent code-block":H(!1),"remove tab":{key:tt.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(a){this.quill.deleteText(a.index-1,1,I.sources.USER)}},tab:{key:tt.keys.TAB,handler:function(a){this.quill.history.cutoff();let t=new(E())().retain(a.index).delete(a.length).insert("	");this.quill.updateContents(t,I.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(a.index+1,I.sources.SILENT)}},"list empty enter":{key:tt.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(a,t){this.quill.format("list",!1,I.sources.USER),t.format.indent&&this.quill.format("indent",!1,I.sources.USER)}},"checklist enter":{key:tt.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(a){let[t,e]=this.quill.getLine(a.index),n=k()({},t.formats(),{list:"checked"}),i=new(E())().retain(a.index).insert(`
`,n).retain(t.length()-e-1).retain(1,{list:"unchecked"});this.quill.updateContents(i,I.sources.USER),this.quill.setSelection(a.index+1,I.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:tt.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(a,t){let[e,n]=this.quill.getLine(a.index),i=new(E())().retain(a.index).insert(`
`,t.format).retain(e.length()-n-1).retain(1,{header:null});this.quill.updateContents(i,I.sources.USER),this.quill.setSelection(a.index+1,I.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(a,t){let e,n=t.prefix.length,[i,h]=this.quill.getLine(a.index);if(h>n)return!0;switch(t.prefix.trim()){case"[]":case"[ ]":e="unchecked";break;case"[x]":e="checked";break;case"-":case"*":e="bullet";break;default:e="ordered"}this.quill.insertText(a.index," ",I.sources.USER),this.quill.history.cutoff();let y=new(E())().retain(a.index-h).delete(n+1).retain(i.length()-2-h).retain(1,{list:e});this.quill.updateContents(y,I.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(a.index-n,I.sources.SILENT)}},"code exit":{key:tt.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(a){const[t,e]=this.quill.getLine(a.index),n=new(E())().retain(a.index+t.length()-e-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(n,I.sources.USER)}},"embed left":Ft(tt.keys.LEFT,!1),"embed left shift":Ft(tt.keys.LEFT,!0),"embed right":Ft(tt.keys.RIGHT,!1),"embed right shift":Ft(tt.keys.RIGHT,!0)}},I.register({"blots/block":A,"blots/block/embed":m,"blots/break":l,"blots/container":_t,"blots/cursor":Y,"blots/embed":zt,"blots/inline":r,"blots/scroll":Ue,"blots/text":u,"modules/clipboard":v,"modules/history":Wt,"modules/keyboard":tt}),p().register(A,l,Y,r,Ue,u);const B=I;class F extends p().Attributor.Class{add(t,e){if(e==="+1"||e==="-1"){let n=this.value(t)||0;e=e==="+1"?n+1:n-1}return e===0?(this.remove(t),!0):super.add(t,e)}canAdd(t,e){return super.canAdd(t,e)||super.canAdd(t,parseInt(e))}value(t){return parseInt(super.value(t))||void 0}}let X=new F("indent","ql-indent",{scope:p().Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});class Z extends A{}Z.blotName="blockquote",Z.tagName="blockquote";const ut=Z;class At extends A{static formats(t){return this.tagName.indexOf(t.tagName)+1}}At.blotName="header",At.tagName=["H1","H2","H3","H4","H5","H6"];const re=At;class Et extends A{static formats(t){return t.tagName===this.tagName?void 0:super.formats(t)}format(t,e){t!==z.blotName||e?super.format(t,e):this.replaceWith(p().create(this.statics.scope))}remove(){this.prev==null&&this.next==null?this.parent.remove():super.remove()}replaceWith(t,e){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,e),this):(this.parent.unwrap(),super.replaceWith(t,e))}}Et.blotName="list-item",Et.tagName="LI";class z extends _t{static create(t){let e=t==="ordered"?"OL":"UL",n=super.create(e);return t!=="checked"&&t!=="unchecked"||n.setAttribute("data-checked",t==="checked"),n}static formats(t){return t.tagName==="OL"?"ordered":t.tagName==="UL"?t.hasAttribute("data-checked")?t.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet":void 0}constructor(t){super(t);const e=n=>{if(n.target.parentNode!==t)return;let i=this.statics.formats(t),h=p().find(n.target);i==="checked"?h.format("list","unchecked"):i==="unchecked"&&h.format("list","checked")};t.addEventListener("touchstart",e),t.addEventListener("mousedown",e)}format(t,e){this.children.length>0&&this.children.tail.format(t,e)}formats(){return{[this.statics.blotName]:this.statics.formats(this.domNode)}}insertBefore(t,e){if(t instanceof Et)super.insertBefore(t,e);else{let n=e==null?this.length():e.offset(this),i=this.split(n);i.parent.insertBefore(t,i)}}optimize(t){super.optimize(t);let e=this.next;e!=null&&e.prev===this&&e.statics.blotName===this.statics.blotName&&e.domNode.tagName===this.domNode.tagName&&e.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(e.moveChildren(this),e.remove())}replace(t){if(t.statics.blotName!==this.statics.blotName){let e=p().create(this.statics.defaultChild);t.moveChildren(e),this.appendChild(e)}super.replace(t)}}z.blotName="list",z.scope=p().Scope.BLOCK_BLOT,z.tagName=["OL","UL"],z.defaultChild="list-item",z.allowedChildren=[Et];class W extends r{static create(){return super.create()}static formats(){return!0}optimize(t){super.optimize(t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}W.blotName="bold",W.tagName=["STRONG","B"];const et=W;class it extends et{}it.blotName="italic",it.tagName=["EM","I"];const he=it;class Zt extends r{static create(t){let e=super.create(t);return t=this.sanitize(t),e.setAttribute("href",t),e.setAttribute("target","_blank"),e}static formats(t){return t.getAttribute("href")}static sanitize(t){return lt(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}format(t,e){if(t!==this.statics.blotName||!e)return super.format(t,e);e=this.constructor.sanitize(e),this.domNode.setAttribute("href",e)}}function lt(a,t){let e=document.createElement("a");e.href=a;let n=e.href.slice(0,e.href.indexOf(":"));return t.indexOf(n)>-1}Zt.blotName="link",Zt.tagName="A",Zt.SANITIZED_URL="about:blank",Zt.PROTOCOL_WHITELIST=["http","https","mailto","tel"];class qt extends r{static create(t){return t==="super"?document.createElement("sup"):t==="sub"?document.createElement("sub"):super.create(t)}static formats(t){return t.tagName==="SUB"?"sub":t.tagName==="SUP"?"super":void 0}}qt.blotName="script",qt.tagName=["SUB","SUP"];const te=qt;class ge extends r{}ge.blotName="strike",ge.tagName="S";const sn=ge;class rn extends r{}rn.blotName="underline",rn.tagName="U";const Ot=rn,xt=["alt","height","width"];class Ye extends p().Embed{static create(t){let e=super.create(t);return typeof t=="string"&&e.setAttribute("src",this.sanitize(t)),e}static formats(t){return xt.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}static match(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}static sanitize(t){return lt(t,["http","https","data"])?t:"//:0"}static value(t){return t.getAttribute("src")}format(t,e){xt.indexOf(t)>-1?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t):super.format(t,e)}}Ye.blotName="image",Ye.tagName="IMG";const ze=Ye,Xe=["height","width"];class be extends m{static create(t){let e=super.create(t);return e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",!0),e.setAttribute("src",this.sanitize(t)),e}static formats(t){return Xe.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}static sanitize(t){return Zt.sanitize(t)}static value(t){return t.getAttribute("src")}format(t,e){Xe.indexOf(t)>-1?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t):super.format(t,e)}}be.blotName="video",be.className="ql-video",be.tagName="IFRAME";const Be=be,Fe="getRootNode"in document;let He=Kt("quill:toolbar");class We extends yt{constructor(t,e){if(super(t,e),Array.isArray(this.options.container)){let n=document.createElement("div");(function(i,h){Array.isArray(h[0])||(h=[h]),h.forEach(function(y){let T=document.createElement("span");T.classList.add("ql-formats"),y.forEach(function(V){if(typeof V=="string")Je(T,V);else{let G=Object.keys(V)[0],st=V[G];Array.isArray(st)?function(ee,en,Se){let Ht=document.createElement("select");Ht.classList.add("ql-"+en),Se.forEach(function(De){let an=document.createElement("option");De!==!1?an.setAttribute("value",De):an.setAttribute("selected","selected"),Ht.appendChild(an)}),ee.appendChild(Ht)}(T,G,st):Je(T,G,st)}}),i.appendChild(T)})})(n,this.options.container),t.container.parentNode.insertBefore(n,t.container),this.container=n}else if(typeof this.options.container=="string"){const n=Fe?t.container.getRootNode():document;this.container=n.querySelector(this.options.container)}else this.container=this.options.container;if(!(this.container instanceof HTMLElement))return He.error("Container required for toolbar",this.options);this.container.classList.add("ql-toolbar"),this.controls=[],this.handlers={},Object.keys(this.options.handlers).forEach(n=>{this.addHandler(n,this.options.handlers[n])}),[].forEach.call(this.container.querySelectorAll("button, select"),n=>{this.attach(n)}),this.quill.on(I.events.EDITOR_CHANGE,(n,i)=>{n===I.events.SELECTION_CHANGE&&this.update(i)}),this.quill.on(I.events.SCROLL_OPTIMIZE,()=>{let[n]=this.quill.selection.getRange();this.update(n)})}addHandler(t,e){this.handlers[t]=e}attach(t){let e=[].find.call(t.classList,i=>i.indexOf("ql-")===0);if(!e)return;if(e=e.slice(3),t.tagName==="BUTTON"&&t.setAttribute("type","button"),this.handlers[e]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[e]==null)return void He.warn("ignoring attaching to disabled format",e,t);if(p().query(e)==null)return void He.warn("ignoring attaching to nonexistent format",e,t)}let n=t.tagName==="SELECT"?"change":"click";t.addEventListener(n,i=>{let h;if(t.tagName==="SELECT"){if(t.selectedIndex<0)return;let T=t.options[t.selectedIndex];h=!T.hasAttribute("selected")&&(T.value||!1)}else h=!t.classList.contains("ql-active")&&(t.value||!t.hasAttribute("value")),i.preventDefault();this.quill.focus();let[y]=this.quill.selection.getRange();if(this.handlers[e]!=null)this.handlers[e].call(this,h);else if(p().query(e).prototype instanceof p().Embed){if(h=prompt(`Enter ${e}`),!h)return;this.quill.updateContents(new(E())().retain(y.index).delete(y.length).insert({[e]:h}),I.sources.USER)}else this.quill.format(e,h,I.sources.USER);this.update(y)}),this.controls.push([e,t])}update(t){let e=t==null?{}:this.quill.getFormat(t);this.controls.forEach(function(n){let[i,h]=n;if(h.tagName==="SELECT"){let y;if(t==null)y=null;else if(e[i]==null)y=h.querySelector("option[selected]");else if(!Array.isArray(e[i])){let T=e[i];typeof T=="string"&&(T=T.replace(/\"/g,'\\"')),y=h.querySelector(`option[value="${T}"]`)}y==null?(h.value="",h.selectedIndex=-1):y.selected=!0}else if(t==null)h.classList.remove("ql-active");else if(h.hasAttribute("value")){let y=e[i]===h.getAttribute("value")||e[i]!=null&&e[i].toString()===h.getAttribute("value")||e[i]==null&&!h.getAttribute("value");h.classList.toggle("ql-active",y)}else h.classList.toggle("ql-active",e[i]!=null)})}}function Je(a,t,e){let n=document.createElement("button");n.setAttribute("type","button"),n.classList.add("ql-"+t),e!=null&&(n.value=e),a.appendChild(n)}We.DEFAULTS={},We.DEFAULTS={container:null,handlers:{clean:function(){let a=this.quill.getSelection();if(a!=null)if(a.length==0){let t=this.quill.getFormat();Object.keys(t).forEach(e=>{p().query(e,p().Scope.INLINE)!=null&&this.quill.format(e,!1)})}else this.quill.removeFormat(a,I.sources.USER)},direction:function(a){let t=this.quill.getFormat().align;a==="rtl"&&t==null?this.quill.format("align","right",I.sources.USER):a||t!=="right"||this.quill.format("align",!1,I.sources.USER),this.quill.format("direction",a,I.sources.USER)},indent:function(a){let t=this.quill.getSelection(),e=this.quill.getFormat(t),n=parseInt(e.indent||0);if(a==="+1"||a==="-1"){let i=a==="+1"?1:-1;e.direction==="rtl"&&(i*=-1),this.quill.format("indent",n+i,I.sources.USER)}},link:function(a){a===!0&&(a=prompt("Enter link URL:")),this.quill.format("link",a,I.sources.USER)},list:function(a){let t=this.quill.getSelection(),e=this.quill.getFormat(t);a==="check"?e.list==="checked"||e.list==="unchecked"?this.quill.format("list",!1,I.sources.USER):this.quill.format("list","unchecked",I.sources.USER):this.quill.format("list",a,I.sources.USER)}}},B.register({"attributors/attribute/direction":Oe,"attributors/class/align":Ae,"attributors/class/background":Ge,"attributors/class/color":qe,"attributors/class/direction":Te,"attributors/class/font":Xt,"attributors/class/size":ae,"attributors/style/align":we,"attributors/style/background":Re,"attributors/style/color":xe,"attributors/style/direction":pe,"attributors/style/font":Jt,"attributors/style/size":me},!0),B.register({"formats/align":Ae,"formats/direction":Te,"formats/indent":X,"formats/background":Re,"formats/color":xe,"formats/font":Xt,"formats/size":ae,"formats/blockquote":ut,"formats/code-block":P,"formats/header":re,"formats/list":z,"formats/bold":et,"formats/code":D,"formats/italic":he,"formats/link":Zt,"formats/script":te,"formats/strike":sn,"formats/underline":Ot,"formats/image":ze,"formats/video":Be,"formats/list/item":Et,"modules/toolbar":We},!0);const tn=B})(),U=U.default})())),gn}Mn();/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const Ve=window.Quill,ln=Ve.import("blots/inline");class dn extends ln{constructor(Pe,j){super(Pe,j),Pe.style.color=Pe.color;const U=this.replaceWith(new ln(ln.create()));return U.children.forEach(C=>{C.attributes&&C.attributes.copy(U),C.unwrap&&C.unwrap()}),this.remove(),U}}dn.blotName="customColor";dn.tagName="FONT";Ve.register(dn,!0);const Pn=["bold","italic","underline","strike","header","script","list","align","blockquote","code-block"],Me={API:"api",USER:"user",SILENT:"silent"},nn={DEFAULT:0,FOCUSED:1,CLICKED:2},on=9,Un=Le=>class extends Le{static get properties(){return{value:{type:String,notify:!0,value:"",sync:!0},htmlValue:{type:String,notify:!0,readOnly:!0},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object,value:()=>({undo:"undo",redo:"redo",bold:"bold",italic:"italic",underline:"underline",strike:"strike",color:"color",background:"background",h1:"h1",h2:"h2",h3:"h3",subscript:"subscript",superscript:"superscript",listOrdered:"list ordered",listBullet:"list bullet",alignLeft:"align left",alignCenter:"align center",alignRight:"align right",image:"image",link:"link",blockquote:"blockquote",codeBlock:"code block",clean:"clean",linkDialogTitle:"Link address",ok:"OK",cancel:"Cancel",remove:"Remove"})},colorOptions:{type:Array,value:()=>["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"]},_editor:{type:Object,sync:!0},__oldValue:String,__lastCommittedChange:{type:String,value:""},_linkEditing:{type:Boolean,value:!1},_linkRange:{type:Object,value:null},_linkIndex:{type:Number,value:null},_linkUrl:{type:String,value:""},_colorEditing:{type:Boolean,value:!1},_colorValue:{type:String,value:""},_backgroundEditing:{type:Boolean,value:!1},_backgroundValue:{type:String,value:""}}}static get observers(){return["_valueChanged(value, _editor)","_disabledChanged(disabled, readonly, _editor)"]}get _toolbarButtons(){return Array.from(this.shadowRoot.querySelectorAll('[part="toolbar"] button')).filter(j=>j.clientHeight>0)}attributeChangedCallback(j,U,C){super.attributeChangedCallback(j,U,C),j==="dir"&&(this.__dir=C,this.__setDirection(C))}disconnectedCallback(){super.disconnectedCallback(),this._editor.emitter.disconnect()}__setDirection(j){if(!this._editor)return;const U=Ve.import("attributors/class/align");U.whitelist=[j==="rtl"?"left":"right","center","justify"],Ve.register(U,!0);const C=this._toolbar.querySelector('[part~="toolbar-group-alignment"]');j==="rtl"?(C.querySelector('[part~="toolbar-button-align-left"]').value="left",C.querySelector('[part~="toolbar-button-align-right"]').value=""):(C.querySelector('[part~="toolbar-button-align-left"]').value="",C.querySelector('[part~="toolbar-button-align-right"]').value="right"),this._editor.getModule("toolbar").update(this._editor.getSelection())}connectedCallback(){super.connectedCallback(),this._editor.emitter.connect()}ready(){super.ready(),this._toolbarConfig=this._prepareToolbar(),this._toolbar=this._toolbarConfig.container,this._addToolbarListeners();const j=this.shadowRoot.querySelector('[part="content"]');this._editor=new Ve(j,{modules:{toolbar:this._toolbarConfig}}),this.__patchToolbar(),this.__patchKeyboard(),On&&this.__patchFirefoxFocus(),this.__setDirection(this.__dir);const U=j.querySelector(".ql-editor");U.setAttribute("role","textbox"),U.setAttribute("aria-multiline","true"),this._editor.on("text-change",()=>{this.__debounceSetValue=fn.debounce(this.__debounceSetValue,pn.after(200),()=>{this.value=JSON.stringify(this._editor.getContents().ops)})}),this._editor.on("editor-change",()=>{const p=this._editor.getSelection();if(p){const O=this._editor.getFormat(p.index,p.length);this._toolbar.style.setProperty("--_color-value",O.color||null),this._toolbar.style.setProperty("--_background-value",O.background||null)}});const C=9;U.addEventListener("keydown",p=>{p.key==="Escape"?this.__tabBindings||(this.__tabBindings=this._editor.keyboard.bindings[C],this._editor.keyboard.bindings[C]=null):this.__tabBindings&&(this._editor.keyboard.bindings[C]=this.__tabBindings,this.__tabBindings=null)}),U.addEventListener("blur",()=>{this.__tabBindings&&(this._editor.keyboard.bindings[C]=this.__tabBindings,this.__tabBindings=null)}),U.addEventListener("focusout",()=>{this._toolbarState===nn.FOCUSED?this._cleanToolbarState():this.__emitChangeEvent()}),U.addEventListener("focus",()=>{this._toolbarState===nn.CLICKED&&!this._linkEditing&&this._cleanToolbarState()}),this._editor.on("selection-change",this.__announceFormatting.bind(this)),this.__flushPendingHtmlValue(),this.$.backgroundPopup.target=this.shadowRoot.querySelector("#btn-background"),this.$.colorPopup.target=this.shadowRoot.querySelector("#btn-color"),requestAnimationFrame(()=>{this.$.linkDialog.$.dialog.$.overlay.addEventListener("vaadin-overlay-open",()=>{this.$.linkUrl.focus()})})}_prepareToolbar(){const j=Ve.imports["modules/toolbar"].DEFAULTS.handlers.clean,U=this,C={container:this.shadowRoot.querySelector('[part="toolbar"]'),handlers:{clean(){U._markToolbarClicked(),j.call(this)}}};return Pn.forEach(p=>{C.handlers[p]=O=>{this._markToolbarClicked(),this._editor.format(p,O,Me.USER)}}),C}_addToolbarListeners(){const j=this._toolbarButtons,U=this._toolbar;j.forEach((C,p)=>p>0&&C.setAttribute("tabindex","-1")),U.addEventListener("keydown",C=>{if([37,39].indexOf(C.keyCode)>-1){C.preventDefault();let p=j.indexOf(C.target);j[p].setAttribute("tabindex","-1");let O;C.keyCode===39?O=1:C.keyCode===37&&(O=-1),p=(j.length+p+O)%j.length,j[p].removeAttribute("tabindex"),j[p].focus()}(C.keyCode===27||C.keyCode===on&&!C.shiftKey)&&(C.preventDefault(),this._editor.focus())}),U.addEventListener("mousedown",C=>{j.indexOf(C.composedPath()[0])>-1&&this._markToolbarFocused()})}_markToolbarClicked(){this._toolbarState=nn.CLICKED}_markToolbarFocused(){this._toolbarState=nn.FOCUSED}_cleanToolbarState(){this._toolbarState=nn.DEFAULT}__createFakeFocusTarget(){const j=document.documentElement.getAttribute("dir")==="rtl",U=document.createElement("textarea");U.style.border="0",U.style.padding="0",U.style.margin="0",U.style.position="absolute",U.style[j?"right":"left"]="-9999px";const C=window.pageYOffset||document.documentElement.scrollTop;return U.style.top=`${C}px`,U}__patchFirefoxFocus(){const j=this.shadowRoot.querySelector(".ql-editor");let U=!1;const C=()=>(U=!0,this.__fakeTarget=this.__createFakeFocusTarget(),document.body.appendChild(this.__fakeTarget),this.__fakeTarget.focus(),new Promise(O=>{setTimeout(O)})),p=(O,k)=>{this._editor.focus(),O&&this._editor.selection.setNativeRange(O,k),document.body.removeChild(this.__fakeTarget),delete this.__fakeTarget,U=!1};j.addEventListener("mousedown",O=>{if(!this._editor.hasFocus()){const{x:k,y:q}=O,{offset:E,offsetNode:S}=document.caretPositionFromPoint(k,q);C().then(()=>{p(S,E)})}}),j.addEventListener("focusin",()=>{U===!1&&C().then(()=>p())})}__patchToolbar(){const j=this._editor.getModule("toolbar"),U=j.update;j.controls.push(["link",this.shadowRoot.querySelector('[part~="toolbar-button-link"]')]),j.update=function(C){U.call(j,C),j.controls.forEach(p=>{const O=p[1],k=O.classList.contains("ql-active");O.toggleAttribute("on",k),O.part.toggle("toolbar-button-pressed",k)})}}__patchKeyboard(){const j=()=>{this._markToolbarFocused(),this._toolbar.querySelector("button:not([tabindex])").focus()},U=this._editor.getModule("keyboard"),p=U.bindings[on].filter(k=>!k.shiftKey||k.format&&k.format["code-block"]),O={key:on,shiftKey:!0,handler:j};U.bindings[on]=[...p,O],U.addBinding({key:121,altKey:!0,handler:j})}__emitChangeEvent(){let j=this.__lastCommittedChange;this.__debounceSetValue&&this.__debounceSetValue.isActive()&&(j=this.value,this.__debounceSetValue.flush()),j!==this.value&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1})),this.__lastCommittedChange=this.value)}_onLinkClick(){const j=this._editor.getSelection();if(j){const U=Ve.imports["formats/link"],[C,p]=this._editor.scroll.descendant(U,j.index);C!=null?(this._linkRange={index:j.index-p,length:C.length()},this._linkUrl=U.formats(C.domNode)):j.length===0&&(this._linkIndex=j.index),this._linkEditing=!0}}_applyLink(j){j&&(this._markToolbarClicked(),this._editor.format("link",j,Me.USER),this._editor.getModule("toolbar").update(this._editor.selection.savedRange)),this._closeLinkDialog()}_insertLink(j,U){j&&(this._markToolbarClicked(),this._editor.insertText(U,j,{link:j}),this._editor.setSelection(U,j.length)),this._closeLinkDialog()}_updateLink(j,U){this._markToolbarClicked(),this._editor.formatText(U,"link",j,Me.USER),this._closeLinkDialog()}_removeLink(){this._markToolbarClicked(),this._linkRange!=null&&this._editor.formatText(this._linkRange,{link:!1,color:!1},Me.USER),this._closeLinkDialog()}_closeLinkDialog(){this._linkEditing=!1,this._linkUrl="",this._linkIndex=null,this._linkRange=null}_onLinkEditConfirm(){this._linkIndex!=null?this._insertLink(this._linkUrl,this._linkIndex):this._linkRange?this._updateLink(this._linkUrl,this._linkRange):this._applyLink(this._linkUrl)}_onLinkEditCancel(){this._closeLinkDialog(),this._editor.focus()}_onLinkEditRemove(){this._removeLink(),this._closeLinkDialog()}_onLinkKeydown(j){j.keyCode===13&&(j.preventDefault(),j.stopPropagation(),this.$.confirmLink.click())}__onColorClick(){this._colorEditing=!0}__onColorSelected(j){const U=j.detail.color;this._colorValue=U==="#000000"?null:U,this._markToolbarClicked(),this._editor.format("color",this._colorValue,Me.USER),this._toolbar.style.setProperty("--_color-value",this._colorValue),this._colorEditing=!1}__onBackgroundClick(){this._backgroundEditing=!0}__onBackgroundSelected(j){const U=j.detail.color;this._backgroundValue=U==="#ffffff"?null:U,this._markToolbarClicked(),this._editor.format("background",this._backgroundValue,Me.USER),this._toolbar.style.setProperty("--_background-value",this._backgroundValue),this._backgroundEditing=!1}__updateHtmlValue(){let U=this.shadowRoot.querySelector(".ql-editor").innerHTML;U=U.replace(/class="([^"]*)"/gu,(C,p)=>`class="${p.split(" ").filter(k=>!k.startsWith("ql-")||k.startsWith("ql-align")).join(" ")}"`),U=U.replace(/<span[^>]*><\/span>/gu,""),[this.__dir==="rtl"?"left":"right","center","justify"].forEach(C=>{U=U.replace(new RegExp(` class=[\\\\]?"\\s?ql-align-${C}[\\\\]?"`,"gu"),` style="text-align: ${C}"`)}),U=U.replace(/ class=""/gu,""),this._setHtmlValue(U)}dangerouslySetHtmlValue(j){if(!this._editor){this.__savePendingHtmlValue(j);return}if(!getComputedStyle(this).display){this.__savePendingHtmlValue(j);const p=new IntersectionObserver(()=>{getComputedStyle(this).display&&(this.__flushPendingHtmlValue(),p.disconnect())});p.observe(this);return}const U={"	":"__VAADIN_RICH_TEXT_EDITOR_TAB","  ":"__VAADIN_RICH_TEXT_EDITOR_DOUBLE_SPACE"};Object.entries(U).forEach(([p,O])=>{j=j.replaceAll(/>[^<]*</gu,k=>k.replaceAll(p,O))});const C=this._editor.clipboard.convert(j);Object.entries(U).forEach(([p,O])=>{C.ops.forEach(k=>{typeof k.insert=="string"&&(k.insert=k.insert.replaceAll(O,p))})}),this._editor.setContents(C,Me.API)}__savePendingHtmlValue(j){this.__pendingHtmlValue=j,this.value=""}__flushPendingHtmlValue(){this.__pendingHtmlValue&&this.dangerouslySetHtmlValue(this.__pendingHtmlValue)}__announceFormatting(){const U=this.shadowRoot.querySelector(".announcer");U.textContent="",this.__debounceAnnounceFormatting=fn.debounce(this.__debounceAnnounceFormatting,pn.after(200),()=>{const C=Array.from(this.shadowRoot.querySelectorAll('[part="toolbar"] .ql-active')).map(p=>this.shadowRoot.querySelector(`[for="${p.id}"]`).text).join(", ");U.textContent=C})}_clear(){this._editor.deleteText(0,this._editor.getLength(),Me.SILENT),this.__updateHtmlValue()}_undo(j){j.preventDefault(),this._editor.history.undo(),this._editor.focus()}_redo(j){j.preventDefault(),this._editor.history.redo(),this._editor.focus()}_toggleToolbarDisabled(j){const U=this._toolbarButtons;j?U.forEach(C=>C.setAttribute("disabled","true")):U.forEach(C=>C.removeAttribute("disabled"))}_onImageTouchEnd(j){j.preventDefault(),this._onImageClick()}_onImageClick(){this.$.fileInput.value="",this.$.fileInput.click()}_uploadImage(j){const U=j.target;if(U.files!=null&&U.files[0]!=null){const C=new FileReader;C.onload=p=>{const O=p.target.result,k=this._editor.getSelection(!0);this._editor.updateContents(new Ve.imports.delta().retain(k.index).delete(k.length).insert({image:O}),Me.USER),this._markToolbarClicked(),this._editor.setSelection(k.index+1,Me.SILENT),U.value=""},C.readAsDataURL(U.files[0])}}_disabledChanged(j,U,C){j===void 0||U===void 0||C===void 0||(j||U?(C.enable(!1),j&&this._toggleToolbarDisabled(!0)):(C.enable(),this.__oldDisabled&&this._toggleToolbarDisabled(!1)),this.__oldDisabled=j)}_valueChanged(j,U){if(j&&this.__pendingHtmlValue&&(this.__pendingHtmlValue=void 0),U===void 0)return;if(j==null||j==='[{"insert":"\\n"}]'){this.value="";return}if(j===""){this._clear();return}let C;try{if(C=JSON.parse(j),Array.isArray(C))this.__oldValue=j;else throw new Error(`expected JSON string with array of objects, got: ${j}`)}catch(O){this.value=this.__oldValue,console.error("Invalid value set to rich-text-editor:",O);return}const p=new Ve.imports.delta(C);JSON.stringify(U.getContents())!==JSON.stringify(p)&&U.setContents(p,Me.SILENT),this.__updateHtmlValue(),this._toolbarState===nn.CLICKED?(this._cleanToolbarState(),this.__emitChangeEvent()):this._editor.hasFocus()||(this.__lastCommittedChange=this.value)}};/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const An=$e`
  [part='content'] {
    box-sizing: border-box;
    position: relative;
    flex: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /*
    Quill core styles.
    CSS selectors removed: margin & padding reset, check list, indentation, video, colors, ordered & unordered list, h1-6, anchor
  */
  .ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
  }

  .ql-clipboard p {
    margin: 0;
    padding: 0;
  }

  .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 0.75em 1em;
    -moz-tab-size: 4;
    tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    flex: 1;
  }

  .ql-editor > * {
    cursor: text;
  }

  .ql-align-left {
    text-align: left;
  }

  .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
  }

  .ql-align-center {
    text-align: center;
  }

  .ql-align-justify {
    text-align: justify;
  }

  .ql-align-right {
    text-align: right;
  }
  /* quill core end */

  blockquote {
    border-left: 0.25em solid #ccc;
    margin-bottom: 0.3125em;
    margin-top: 0.3125em;
    padding-left: 1em;
  }

  code,
  pre {
    background-color: #f0f0f0;
    border-radius: 0.1875em;
  }

  pre {
    white-space: pre-wrap;
    margin-bottom: 0.3125em;
    margin-top: 0.3125em;
    padding: 0.3125em 0.625em;
  }

  code {
    font-size: 85%;
    padding: 0.125em 0.25em;
  }

  img {
    max-width: 100%;
  }

  /* RTL specific styles */
  :host([dir='rtl']) .ql-editor {
    direction: rtl;
    text-align: right;
  }
`;Qe("",An,{moduleId:"vaadin-rich-text-editor-content-styles"});/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */const zn=$e`
  :host {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  :host([hidden]) {
    display: none !important;
  }

  .announcer {
    position: fixed;
    clip: rect(0, 0, 0, 0);
  }

  input[type='file'] {
    display: none;
  }

  .vaadin-rich-text-editor-container {
    display: flex;
    flex-direction: column;
    min-height: inherit;
    max-height: inherit;
    flex: auto;
  }
`,Fn=$e`
  :host([readonly]) [part='toolbar'] {
    display: none;
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: 0.5;
    -webkit-user-select: none;
    user-select: none;
  }

  :host([disabled]) [part~='toolbar-button'] {
    background-color: transparent;
  }
`,Kn=[zn,An,_n,Fn];/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 *
 * See https://vaadin.com/commercial-license-and-service-terms for the full
 * license.
 */Qe("vaadin-rich-text-editor",Kn,{moduleId:"vaadin-rich-text-editor-styles"});class Hn extends Un(Tn(mn(cn))){static get template(){return un`
      <div class="vaadin-rich-text-editor-container">
        <!-- Create toolbar container -->
        <div part="toolbar" role="toolbar">
          <span part="toolbar-group toolbar-group-history">
            <!-- Undo and Redo -->
            <button id="btn-undo" type="button" part="toolbar-button toolbar-button-undo" on-click="_undo"></button>
            <vaadin-tooltip for="btn-undo" text="[[i18n.undo]]"></vaadin-tooltip>

            <button id="btn-redo" type="button" part="toolbar-button toolbar-button-redo" on-click="_redo"></button>
            <vaadin-tooltip for="btn-redo" text="[[i18n.redo]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-emphasis">
            <!-- Bold -->
            <button id="btn-bold" class="ql-bold" part="toolbar-button toolbar-button-bold"></button>
            <vaadin-tooltip for="btn-bold" text="[[i18n.bold]]"></vaadin-tooltip>

            <!-- Italic -->
            <button id="btn-italic" class="ql-italic" part="toolbar-button toolbar-button-italic"></button>
            <vaadin-tooltip for="btn-italic" text="[[i18n.italic]]"></vaadin-tooltip>

            <!-- Underline -->
            <button id="btn-underline" class="ql-underline" part="toolbar-button toolbar-button-underline"></button>
            <vaadin-tooltip for="btn-underline" text="[[i18n.underline]]"></vaadin-tooltip>

            <!-- Strike -->
            <button id="btn-strike" class="ql-strike" part="toolbar-button toolbar-button-strike"></button>
            <vaadin-tooltip for="btn-strike" text="[[i18n.strike]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-style">
            <!-- Color -->
            <button
              id="btn-color"
              type="button"
              part="toolbar-button toolbar-button-color"
              on-click="__onColorClick"
            ></button>
            <vaadin-tooltip for="btn-color" text="[[i18n.color]]"></vaadin-tooltip>
            <!-- Background -->
            <button
              id="btn-background"
              type="button"
              part="toolbar-button toolbar-button-background"
              on-click="__onBackgroundClick"
            ></button>
            <vaadin-tooltip for="btn-background" text="[[i18n.background]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-heading">
            <!-- Header buttons -->
            <button
              id="btn-h1"
              type="button"
              class="ql-header"
              value="1"
              part="toolbar-button toolbar-button-h1"
            ></button>
            <vaadin-tooltip for="btn-h1" text="[[i18n.h1]]"></vaadin-tooltip>
            <button
              id="btn-h2"
              type="button"
              class="ql-header"
              value="2"
              part="toolbar-button toolbar-button-h2"
            ></button>
            <vaadin-tooltip for="btn-h2" text="[[i18n.h2]]"></vaadin-tooltip>
            <button
              id="btn-h3"
              type="button"
              class="ql-header"
              value="3"
              part="toolbar-button toolbar-button-h3"
            ></button>
            <vaadin-tooltip for="btn-h3" text="[[i18n.h3]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-glyph-transformation">
            <!-- Subscript and superscript -->
            <button
              id="btn-subscript"
              class="ql-script"
              value="sub"
              part="toolbar-button toolbar-button-subscript"
            ></button>
            <vaadin-tooltip for="btn-subscript" text="[[i18n.subscript]]"></vaadin-tooltip>
            <button
              id="btn-superscript"
              class="ql-script"
              value="super"
              part="toolbar-button toolbar-button-superscript"
            ></button>
            <vaadin-tooltip for="btn-superscript" text="[[i18n.superscript]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-list">
            <!-- List buttons -->
            <button
              id="btn-ol"
              type="button"
              class="ql-list"
              value="ordered"
              part="toolbar-button toolbar-button-list-ordered"
            ></button>
            <vaadin-tooltip for="btn-ol" text="[[i18n.listOrdered]]"></vaadin-tooltip>
            <button
              id="btn-ul"
              type="button"
              class="ql-list"
              value="bullet"
              part="toolbar-button toolbar-button-list-bullet"
            ></button>
            <vaadin-tooltip for="btn-ul" text="[[i18n.listBullet]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-alignment">
            <!-- Align buttons -->
            <button
              id="btn-left"
              type="button"
              class="ql-align"
              value=""
              part="toolbar-button toolbar-button-align-left"
            ></button>
            <vaadin-tooltip for="btn-left" text="[[i18n.alignLeft]]"></vaadin-tooltip>
            <button
              id="btn-center"
              type="button"
              class="ql-align"
              value="center"
              part="toolbar-button toolbar-button-align-center"
            ></button>
            <vaadin-tooltip for="btn-center" text="[[i18n.alignCenter]]"></vaadin-tooltip>
            <button
              id="btn-right"
              type="button"
              class="ql-align"
              value="right"
              part="toolbar-button toolbar-button-align-right"
            ></button>
            <vaadin-tooltip for="btn-right" text="[[i18n.alignRight]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-rich-text">
            <!-- Image -->
            <button
              id="btn-image"
              type="button"
              part="toolbar-button toolbar-button-image"
              on-touchend="_onImageTouchEnd"
              on-click="_onImageClick"
            ></button>
            <vaadin-tooltip for="btn-image" text="[[i18n.image]]"></vaadin-tooltip>
            <!-- Link -->
            <button
              id="btn-link"
              type="button"
              part="toolbar-button toolbar-button-link"
              on-click="_onLinkClick"
            ></button>
            <vaadin-tooltip for="btn-link" text="[[i18n.link]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-block">
            <!-- Blockquote -->
            <button
              id="btn-blockquote"
              type="button"
              class="ql-blockquote"
              part="toolbar-button toolbar-button-blockquote"
            ></button>
            <vaadin-tooltip for="btn-blockquote" text="[[i18n.blockquote]]"></vaadin-tooltip>
            <!-- Code block -->
            <button
              id="btn-code"
              type="button"
              class="ql-code-block"
              part="toolbar-button toolbar-button-code-block"
            ></button>
            <vaadin-tooltip for="btn-code" text="[[i18n.codeBlock]]"></vaadin-tooltip>
          </span>

          <span part="toolbar-group toolbar-group-format">
            <!-- Clean -->
            <button id="btn-clean" type="button" class="ql-clean" part="toolbar-button toolbar-button-clean"></button>
            <vaadin-tooltip for="btn-clean" text="[[i18n.clean]]"></vaadin-tooltip>
          </span>

          <input
            id="fileInput"
            type="file"
            accept="image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
            on-change="_uploadImage"
          />
        </div>

        <div part="content"></div>

        <div class="announcer" aria-live="polite"></div>
      </div>

      <vaadin-confirm-dialog id="linkDialog" opened="{{_linkEditing}}" header="[[i18n.linkDialogTitle]]">
        <vaadin-text-field
          id="linkUrl"
          value="{{_linkUrl}}"
          style="width: 100%;"
          on-keydown="_onLinkKeydown"
        ></vaadin-text-field>
        <vaadin-button id="confirmLink" slot="confirm-button" theme="primary" on-click="_onLinkEditConfirm">
          [[i18n.ok]]
        </vaadin-button>
        <vaadin-button
          id="removeLink"
          slot="reject-button"
          theme="error"
          on-click="_onLinkEditRemove"
          hidden$="[[!_linkRange]]"
        >
          [[i18n.remove]]
        </vaadin-button>
        <vaadin-button id="cancelLink" slot="cancel-button" on-click="_onLinkEditCancel">
          [[i18n.cancel]]
        </vaadin-button>
      </vaadin-confirm-dialog>

      <vaadin-rich-text-editor-popup
        id="colorPopup"
        colors="[[colorOptions]]"
        opened="{{_colorEditing}}"
        on-color-selected="__onColorSelected"
      ></vaadin-rich-text-editor-popup>

      <vaadin-rich-text-editor-popup
        id="backgroundPopup"
        colors="[[colorOptions]]"
        opened="{{_backgroundEditing}}"
        on-color-selected="__onBackgroundSelected"
      ></vaadin-rich-text-editor-popup>
    `}static get is(){return"vaadin-rich-text-editor"}static get cvdlName(){return"vaadin-rich-text-editor"}}hn(Hn);
