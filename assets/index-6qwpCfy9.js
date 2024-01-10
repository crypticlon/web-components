var b=Object.defineProperty;var p=(o,t,s)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var c=(o,t,s)=>(p(o,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();function m(o){const t=document.createElement("template");t.innerHTML=`
     <style>
        #card {
            border: var(--border-width) solid var(--secondary-border-color);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            margin-bottom: var(--spacing);
        }

        #title {
          color: var(--primary-text-color);
          background-color: var(--secondary-color);
          margin: 0
        }

        #title, #header, #body, #footer {
            padding: var(--spacing);
            border-bottom: var(--border-width) solid var(--secondary-border-color);
        }

        #title, #header, #footer {
            display: none;
        }

        #header, #body, #footer {
            color: var(--content-text-color);
            background-color: var(--content-background-color);
        }

    </style>

    <div id="card">
        <h3 id="title"></h3>
        <header id="header"></header>
        <div id="body">
            <slot></slot>
        </div>
        <footer id="footer"></footer>
    </div>
`;class s extends HTMLElement{static get observedAttributes(){return["title","header","footer"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)))}connectedCallback(){this.updateTitle(),this.updateHeader(),this.updateFooter()}attributeChangedCallback(r){r==="title"?this.updateTitle():r==="header"?this.updateHeader():r==="footer"&&this.updateFooter()}updateTitle(){if(!this.shadowRoot)return;const r=this.getAttribute("title"),e=this.shadowRoot.querySelector("#title");if(!e)return;const n=this.querySelector('template[slot="title"]');if(n){const a=n.content.cloneNode(!0);e.innerHTML="",e.appendChild(a),e.style.display="block"}else e.innerHTML=r?`${r}`:"",e.style.display=r?"block":"none"}updateHeader(){if(!this.shadowRoot)return;const r=this.getAttribute("header"),e=this.shadowRoot.querySelector("#header"),n=this.querySelector('template[slot="header"]');if(n){const a=n.content.cloneNode(!0);e.innerHTML="",e.appendChild(a),e.style.display="block"}else e.innerHTML=r?`<header>${r}</header>`:"",e.style.display=r?"block":"none"}updateFooter(){if(!this.shadowRoot)return;const r=this.getAttribute("footer"),e=this.shadowRoot.querySelector("#footer"),n=this.querySelector('template[slot="footer"]');if(n){const a=n.content.cloneNode(!0);e.innerHTML="",e.appendChild(a),e.style.display="block"}else e.innerHTML=r?`<footer>${r}</footer>`:"",e.style.display=r?"block":"none"}}customElements.define("s-card",s)}function f(o){const t=document.createElement("template");t.innerHTML=`
    <style>
        .menubar {
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;
            background-color: var(--primary-color);
            border: var(--border-width) solid var(--primary-border-color);
            border-radius: var(--border-radius);
        }


        .hamburger {
            display: none;
            cursor: pointer;
            color: var(--primary-text-color);
            padding: 14px 16px;
            text-align: center;
            background-color: var(--primary-color);
            border: var(--border-width) solid var(--primary-border-color);
            border-radius: var(--border-radius);
        }

        @media screen and (max-width: 600px) {
            .menubar {
                display: none;
                flex-direction: column;
            }

            .hamburger {
                display: block;
            }

            .menubar.open {
                display: flex;
            }
        }
    </style>
    <div class="hamburger">☰</div>
    <ul class="menubar">
        <slot></slot>
    </ul>
`;class s extends HTMLElement{constructor(){super();c(this,"hamburger",null);c(this,"menubar",null);this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.hamburger=this.shadowRoot.querySelector(".hamburger"),this.menubar=this.shadowRoot.querySelector(".menubar"),this.hamburger&&this.hamburger.addEventListener("click",()=>this.toggleMenu()))}toggleMenu(){this.menubar&&this.menubar.classList.toggle("open")}}customElements.define("s-menubar",s)}function y(o){const t=document.createElement("template");t.innerHTML=`
    <style>
        .menuitem {
            display: block;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            cursor: pointer;
            color: var(--primary-text-color);
        }

        .menuitem:hover {
            background-color: var(--primary-hover-color);
            color: var(--primary-text-color);
        }
    </style>
    <li class="menuitem">
        <slot></slot>
    </li>
`;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)))}}customElements.define("s-menuitem",s)}function g(o){const t=document.createElement("template");t.innerHTML=`
    <style>
      :host {
        display: inline-block;
      }

      .button {
        padding: var(--spacing);
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .button:hover {
        filter: brightness(85%);
      }

      .button.default {
        background-color: var(--primary-color);
        color: var(--primary-text-color);
      }

      .button.primary {
        background-color: var(--primary-color);
        color: var(--primary-text-color);
      }

      .button.secondary {
        background-color: var(--secondary-color);
        color: var(--secondary-text-color);
      }

       .button.success {
        background-color: var(--success-color);
        color: var(--success-text-color);
      }

      .button.warning {
        background-color: var(--warning-color);
        color: var(--warning-text-color);
      }

      .button.danger {
        background-color: var(--error-color);
        color: var(--error-text-color);
      }

    </style>

    <button class="button default">
      <slot></slot>
    </button>
  `;class s extends HTMLElement{constructor(){super();c(this,"button",null);this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.button=this.shadowRoot.querySelector(".button"))}connectedCallback(){this.addEventListener("click",this._onClick)}disconnectedCallback(){this.removeEventListener("click",this._onClick)}_onClick(e){this.dispatchEvent(new CustomEvent("s-button-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}get severity(){return this.getAttribute("severity")}set severity(e){e&&this.setAttribute("severity",e)}static get observedAttributes(){return["text","severity"]}attributeChangedCallback(e,n,a){this.button&&(e==="text"?this.button.textContent=a:e==="severity"&&this.updateButtonSeverity(a))}updateButtonSeverity(e){this.button&&(this.button.className="button",e&&this.button.classList.add(e))}}customElements.define("s-button",s)}function v(o){const t=document.createElement("template");t.innerHTML=`
    <style>
      :host {
        display: block;
      }

      .tabs-header {
        display: flex;
      }

      .tab-button {
        cursor: pointer;
        padding: var(--spacing);
        background-color: var(--primary-color);
        color: var(--secondary-text-color);
        border: none;
        border-bottom: 4px solid transparent;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        margin-right: .25rem;
      }

      .tab-button.active {
        border-bottom-color: var(--primary-active-color);
      }

      .tab-content {
        display: none;
        padding: var(--spacing);
        background-color: var(--content-background-color);
        color: var(--content-text-color);
        border: var(--border-width) solid var(--primary-border-color);
        border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
      }

      .tab-content.active {
        display: block;
      }
    </style>

    <div class="tabs-header"></div>
    <div class="tabs-content"></div>
  `;class s extends HTMLElement{constructor(){super();c(this,"tabsHeader",null);c(this,"tabsContent",null);this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.tabsHeader=this.shadowRoot.querySelector(".tabs-header"),this.tabsContent=this.shadowRoot.querySelector(".tabs-content"))}connectedCallback(){this.renderTabs()}renderTabs(){!this.tabsHeader||!this.tabsContent||(this.tabsHeader.innerHTML="",this.tabsContent.innerHTML="",Array.from(this.children).forEach((e,n)=>{if(e.tagName.toLowerCase()==="s-tab"){const a=e,i=document.createElement("button");if(i.classList.add("tab-button"),i.textContent=a.title,i.addEventListener("click",()=>this.selectTab(n)),!this.tabsHeader)return;this.tabsHeader.appendChild(i);const d=document.createElement("div");for(d.classList.add("tab-content");e.firstChild;)d.appendChild(e.firstChild);if(!this.tabsContent)return;this.tabsContent.appendChild(d)}}),this.selectTab(0))}selectTab(e){if(!this.tabsHeader||!this.tabsContent)return;const n=this.tabsHeader.querySelectorAll(".tab-button"),a=this.tabsContent.querySelectorAll(".tab-content");n.forEach((i,d)=>{i.classList.toggle("active",d===e)}),a.forEach((i,d)=>{i.classList.toggle("active",d===e)})}}customElements.define("s-tabs",s)}function w(o){class t extends HTMLElement{constructor(){super()}get title(){return this.getAttribute("title")??""}}customElements.define("s-tab",t)}function x(o){const t=document.createElement("template");t.innerHTML=`
        <style>
            :host {
                display: block;
                overflow-x: auto;
            }
            table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                border-radius: var(--border-radius);
            }
            th, td {
                padding: var(--spacing);
                text-align: left;
            }
            th {
                background-color: var(--secondary-color);
                color: var(--secondary-text-color);
                border: var(--border-width) solid var(--secondary-border-color);
            }

            th:first-child {
                border-top-left-radius: var(--border-radius);
            }

            th:last-child {
                border-top-right-radius: var(--border-radius);
            }
            
            td {
                border-bottom: var(--border-width) solid var(--secondary-border-color);
                border-left: var(--border-width) solid var(--secondary-border-color);
                background-color: var(--content-background-color);
                color: var(--content-text-color);
            }

            td:last-child {
                border-right: var(--border-width) solid var(--secondary-border-color);
            }
        </style>
        <table>
            <thead>
                <tr id="table-header"></tr>
            </thead>
            <tbody id="table-body"></tbody>
        </table>
    `;class s extends HTMLElement{constructor(){super();c(this,"tableHeader",null);c(this,"tableBody",null);this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.tableHeader=this.shadowRoot.querySelector("#table-header"),this.tableBody=this.shadowRoot.querySelector("#table-body"),console.log("STable constructor"))}set data(e){e&&e.headers&&e.rows&&this.renderTable(e)}renderTable(e){this.renderTableHeader(e.headers),this.renderTableBody(e.rows)}renderTableHeader(e){this.tableHeader&&(this.tableHeader.innerHTML="",e.forEach(n=>{const a=document.createElement("th");a.textContent=n,this.tableHeader&&this.tableHeader.appendChild(a)}))}renderTableBody(e){this.tableBody&&(this.tableBody.innerHTML="",e.forEach(n=>{const a=document.createElement("tr");n.forEach(i=>{const d=document.createElement("td");d.textContent=i.toString(),a.appendChild(d)}),this.tableBody&&this.tableBody.appendChild(a)}))}}customElements.define("s-table",s)}function k(o){const t=document.createElement("template");t.innerHTML=`
    <style>
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        display: none;
      }
      
      dialog.modal-content {
        background-color: var(--content-background-color);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        max-width: 500px;
        width: 100%;
        color: var(--content-text-color);
        padding: 0;
        border: var(--border-width) solid var(--secondary-border-color);
      }

      #modal-header {
        display:flex;
        justify-content: space-between;
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        background-color: var(--secondary-color);
        color: var(--secondary-text-color);
        padding: var(--spacing);
        border-bottom: var(--border-width) solid var(--secondary-border-color);
      }

      #modal-title {
        margin: 0;
      }

      .close-button {
        cursor: pointer;
        align-self: center;
        font-size: 1.5rem;
      }

      #modal-body, #modal-footer {   
        padding: var(--spacing);
        border-bottom: var(--border-width) solid var(--secondary-border-color);
      }
    </style>
    <dialog class="modal-content">
      <header id="modal-header">
        <h3 id="modal-title"></h3>
        <span class="close-button">&times;</span>
      </header>
      <div id="modal-body">
        <slot></slot>
      </div>
      <footer id="modal-footer"></footer>
    </dialog>
  `;class s extends HTMLElement{constructor(){super();c(this,"_modalVisible",!1);this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)))}static get observedAttributes(){return["visible","title","footer"]}connectedCallback(){if(this.hasAttribute("visible")&&(this._modalVisible=!0),this._updateRendering(),this.updateContent("#modal-title",'template[slot="title"]',"title"),this.updateContent("#modal-footer",'template[slot="footer"]',"footer"),!this.shadowRoot)return;const e=this.shadowRoot.querySelector(".close-button");e&&e.addEventListener("click",()=>this.hide())}updateContent(e,n,a){if(!this.shadowRoot)return;const i=this.shadowRoot.querySelector(e);if(!i)return;const d=this.querySelector(n);if(i){if(i.innerHTML="",d){const h=d;i.appendChild(h.content.cloneNode(!0))}else{const h=this.getAttribute(a);i.textContent=h??""}i.style.display=d||this.hasAttribute(a)?"block":"none"}}attributeChangedCallback(e,n,a){e==="visible"?(this._modalVisible=a!==null,this._updateRendering()):e==="title"?this.updateContent("#modal-title",'template[slot="title"]',"title"):e==="footer"&&this.updateContent("#modal-footer",'template[slot="footer"]',"footer")}show(){this._modalVisible=!0,this._updateRendering(),this.setAttribute("visible","")}hide(){this._modalVisible=!1,this._updateRendering(),this.removeAttribute("visible")}_updateRendering(){if(this.shadowRoot){const e=this.shadowRoot.querySelector("dialog");if(!e)return;this._modalVisible?e.showModal():e.close(),this.style.display=this._modalVisible?"flex":"none"}}}customElements.define("s-modal",s)}function C(o){const t=document.createElement("template");t.innerHTML=`
    <style>
      :host {
        display: block;
      }

      input {
        box-sizing: border-box;
        padding: 0.5rem;
        border: 1px solid var(--primary-border-color);
        border-radius: var(--border-radius, 4px);
        font-size: 1rem;
        background-color: var(--content-background-color);
        width: 100%;
      }

      input:focus {
        outline: none;
        border-color: var(--primary-active-color);
        box-shadow: 0 0 0 2px rgba(0, 113, 255, 0.2);
      }
    </style>
    <input type="text" />
  `;class s extends HTMLElement{constructor(){super();c(this,"inputElement",null);this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.inputElement=this.shadowRoot.querySelector("input"),this.updateType(),this.updatePlaceholder(),this.updateValue())}static get observedAttributes(){return["type","placeholder","value"]}attributeChangedCallback(e,n,a){e==="type"?this.updateType():e==="placeholder"?this.updatePlaceholder():e==="value"&&this.updateValue()}updateType(){if(!this.inputElement)return;const e=this.getAttribute("type")||"text";this.inputElement.type=e}updatePlaceholder(){if(!this.inputElement)return;const e=this.getAttribute("placeholder")||"";this.inputElement.placeholder=e}updateValue(){if(!this.inputElement)return;const e=this.getAttribute("value")||"";this.inputElement.value=e}}customElements.define("s-input",s)}function S(o){const t=document.createElement("template");t.innerHTML=`
    <style>
      :host {
        position: fixed;
        top: 10px;
        right: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        z-index: 1000;
      }

      .message {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        color: white;
        animation: fadein 0.5s, fadeout 0.5s 4.5s;
      }

      .success { background-color: var(--success-color); }
      .error { background-color: var(--error-color); }
      .warning { background-color: var(--warning-color); }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fadeout {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    </style>
    <slot></slot>
  `;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)))}showMessage(r,e="success",n=5e3){if(!this.shadowRoot)return;const a=document.createElement("div");a.className=`message ${e}`,a.textContent=r,this.shadowRoot.appendChild(a),setTimeout(()=>{this.shadowRoot&&this.shadowRoot.removeChild(a)},n)}}customElements.define("s-messages",s)}function E(o){const t=document.createElement("template");t.innerHTML=`
    <style>
      :host {
        display: inline-block;
        font-family: sans-serif;
      }

      .checkbox-container {
        display: flex;
        align-items: center;
      }

      .checkbox-label {
        margin-left: 0.5rem;
      }

      /* Customize the native checkbox */
      .checkbox-input {
        accent-color: var(--primary-color, blue);
      }
    </style>
    <label class="checkbox-container">
      <input type="checkbox" class="checkbox-input">
      <span class="checkbox-label"><slot></slot></span>
    </label>
  `;class s extends HTMLElement{constructor(){super();c(this,"checkboxInput",null);this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.checkboxInput=this.shadowRoot.querySelector(".checkbox-input"),this.checkboxInput&&this.checkboxInput.addEventListener("change",this.handleChange.bind(this)))}handleChange(e){const n=e.target;this.dispatchEvent(new CustomEvent("change",{detail:n.checked}))}get checked(){return this.hasAttribute("checked")}set checked(e){!!e?(this.setAttribute("checked",""),this.checkboxInput&&(this.checkboxInput.checked=!0)):(this.removeAttribute("checked"),this.checkboxInput&&(this.checkboxInput.checked=!1))}static get observedAttributes(){return["checked"]}attributeChangedCallback(e,n,a){e==="checked"&&this.checkboxInput&&(this.checkboxInput.checked=this.hasAttribute("checked"))}}customElements.define("s-checkbox",s)}function T(o){const t=document.createElement("template");t.innerHTML=`
      <style>
      :host {
        display: block;
        font-family: 'Courier New', monospace;
      }

      pre {
        margin: 0; /* Reset default margin */
        padding: 1rem;
        color: var(--content-text-color);
        background-color: var(--content-background-color);
        border: 1px solid var(--primary-border-color);
        border-radius: 4px;
        overflow-x: auto;
        white-space: pre-wrap; /* Handle whitespace */
      }

      code {
        display: block; /* Ensure block-level display */
      }
    </style>
    <pre><code><slot></slot></code></pre>
  `;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[o],this.shadowRoot.appendChild(t.content.cloneNode(!0)))}}customElements.define("s-code",s)}function R(){return fetch("./theme.css").then(o=>o.text()).then(o=>{const t=new CSSStyleSheet;t.replaceSync(o),m(t),f(t),y(t),g(t),v(t),w(),x(t),k(t),C(t),S(t),E(t),T(t)})}document.addEventListener("DOMContentLoaded",()=>{R().then(()=>{const o=document.querySelector("s-table");if(o){const s={headers:["Name","Age","City"],rows:[["Alice",30,"New York"],["Bob",25,"San Francisco"],["Charlie",35,"London"]]};o.data=s}const t=document.getElementById("messageBox");t&&(t.showMessage("Submission successful!","success"),t.showMessage("An error occurred!","error"),t.showMessage("Please check your input.","warning"))})});function u(o){console.log("triggerMessage");const t=document.getElementById("messageBox");t&&(o==="success"&&t.showMessage("Submission successful!",o),o==="error"&&t.showMessage("An error occurred!",o),o==="warning"&&t.showMessage("Please check your input.",o))}document.addEventListener("DOMContentLoaded",()=>{var o,t,s;(o=document.getElementById("successButton"))==null||o.addEventListener("click",()=>u("success")),(t=document.getElementById("warningButton"))==null||t.addEventListener("click",()=>u("warning")),(s=document.getElementById("dangerButton"))==null||s.addEventListener("click",()=>u("error"))});document.addEventListener("DOMContentLoaded",()=>{var o;(o=document.getElementById("myCheckbox"))==null||o.addEventListener("change",t=>{console.log("Checkbox state:",t.detail)})});
