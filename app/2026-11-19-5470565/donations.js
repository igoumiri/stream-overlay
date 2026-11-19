var D=Object.defineProperty;var z=(e,s,t)=>s in e?D(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var n=(e,s,t)=>z(e,typeof s!="symbol"?s+"":s,t);import{e as d,f as b,t as q}from"./chunks/format-BnO-nmXC.js";import{r as T}from"./chunks/runtime-config-mAo62F1c.js";import{c as _,p as M,l as U,a as c,b as E,d as F}from"./chunks/campaign-filters-B8DpfKcl.js";import{c as R,g as C}from"./chunks/supabase-client-DVT62H8M.js";class L extends HTMLElement{constructor(t){super();n(this,"root");n(this,"fallbackCss","");this.root=this.attachShadow({mode:"open"}),t&&this.adoptStyles(t)}adoptStyles(t){if("adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype){const r=new CSSStyleSheet;r.replaceSync(t),this.root.adoptedStyleSheets=[...this.root.adoptedStyleSheets,r]}else{this.fallbackCss+=t;const r=document.createElement("style");r.textContent=t,this.root.appendChild(r)}}setHtml(t){this.root.innerHTML=this.fallbackCss?`<style>${this.fallbackCss}</style>${t}`:t}$(t){return this.root.querySelector(t)}$$(t){return this.root.querySelectorAll(t)}emit(t,r,a){return this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:r,...a}))}}const N=`
/* Isolation: the host page's theme must not decide the box model or control fonts */
:host {
  display: block;
}

*, *::before, *::after {
  box-sizing: border-box;
}

button, input {
  font-family: inherit;
}

/* Widget styles */
.dw-wrap {
  --dw-bg: #fff;
  --dw-border: rgba(0,0,0,0.08);
  --dw-border-mid: rgba(0,0,0,0.15);
  --dw-accent: #2563eb;
  --dw-accent-bg: rgba(37,99,235,0.07);
  --dw-green: #059669;
  --dw-text: #111827;
  --dw-muted: #6b7280;
  --dw-subtle: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  max-width: 420px;
  margin: 0 auto;
  background: var(--dw-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  color: var(--dw-text);
}

.dw-header {
  background: #111;
  padding: 20px 24px 18px;
}

.dw-header-title {
  margin: 0 0 2px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.2px;
}

.dw-header-subtitle {
  margin: 0;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.02em;
}

.dw-body {
  padding: 20px 24px 20px;
}

.dw-section {
  margin-bottom: 18px;
}

.dw-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--dw-muted);
  margin: 0 0 8px;
  display: block;
}

.dw-optional {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: #bbb;
  font-size: 11px;
}

.dw-amounts {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  margin-bottom: 8px;
}

.dw-amt {
  background: var(--dw-subtle);
  border: 1.5px solid transparent;
  border-radius: 8px;
  padding: 9px 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: border-color .12s, background .12s, color .12s;
}

.dw-amt:hover {
  border-color: #ccc;
  background: #eee;
}

.dw-amt--active {
  border-color: var(--dw-accent) !important;
  background: var(--dw-accent-bg) !important;
  color: var(--dw-accent) !important;
}

.dw-custom-row {
  display: flex;
  align-items: center;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color .15s;
}

.dw-custom-row:focus-within {
  border-color: var(--dw-accent);
}

.dw-sym {
  padding: 0 10px;
  font-size: 15px;
  color: var(--dw-muted);
  background: #fafafa;
  border-right: 1px solid #e8e8e8;
  align-self: stretch;
  display: flex;
  align-items: center;
}

.dw-input {
  width: 100%;
  box-sizing: border-box;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 9px 12px;
  font-size: 14px;
  color: var(--dw-text);
  background: #fff;
  outline: none;
  transition: border-color .15s;
  -moz-appearance: textfield;
}

.dw-input::placeholder {
  color: #aaa;
}

.dw-input::-webkit-outer-spin-button,
.dw-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.dw-input:focus {
  border-color: var(--dw-accent);
}

.dw-custom-row .dw-input {
  border: none;
  border-radius: 0;
  padding: 9px 10px;
  background: transparent;
}

.dw-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.dw-tog {
  background: var(--dw-subtle);
  border: none;
  padding: 9px 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--dw-muted);
  cursor: pointer;
  transition: background .12s, color .12s;
}

.dw-tog + .dw-tog {
  border-left: 1px solid #e0e0e0;
}

.dw-tog--active {
  background: #fff;
  color: var(--dw-accent);
}

.dw-freq-row {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.dw-frq {
  flex: 1;
  background: var(--dw-subtle);
  border: 1.5px solid transparent;
  border-radius: 8px;
  padding: 7px 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--dw-muted);
  cursor: pointer;
  transition: border-color .12s, background .12s, color .12s;
}

.dw-frq--active {
  border-color: var(--dw-accent);
  background: var(--dw-accent-bg);
  color: var(--dw-accent);
}

.dw-currencies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.dw-cur {
  background: var(--dw-subtle);
  border: 1.5px solid transparent;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dw-muted);
  cursor: pointer;
  transition: border-color .12s, background .12s, color .12s;
  letter-spacing: 0.03em;
}

.dw-cur--active {
  border-color: var(--dw-accent);
  background: var(--dw-accent-bg);
  color: var(--dw-accent);
}

.dw-checkbox-row {
  margin-bottom: 14px;
}

.dw-checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--dw-muted);
  cursor: pointer;
  user-select: none;
}

.dw-checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--dw-accent);
  cursor: pointer;
  flex-shrink: 0;
}

.dw-submit {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 8px;
  background: var(--dw-green);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity .15s, transform .1s;
  margin-top: 4px;
  letter-spacing: 0.01em;
}

.dw-submit:hover:not(:disabled) {
  opacity: 0.85;
}

.dw-submit:active:not(:disabled) {
  transform: scale(0.99);
}

.dw-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dw-note {
  text-align: center;
  font-size: 11px;
  color: #aaa;
  margin: 8px 0 0;
}

.dw-error {
  text-align: center;
  font-size: 12px;
  color: #dc2626;
  margin: 6px 0 0;
  min-height: 16px;
}
`,g=[{code:"usd",sym:"$",label:"USD"},{code:"eur",sym:"€",label:"EUR"},{code:"gbp",sym:"£",label:"GBP"},{code:"cad",sym:"$",label:"CAD"},{code:"aud",sym:"$",label:"AUD"}],v=[5,10,20,50,100],f=20,I=1;function y(e,s){return{amount:s,customAmount:"",currency:e.code,sym:e.sym,recurring:!1,interval:"month",name:"",newsletterOptIn:!1}}function w(e){if(e.customAmount!==""){const s=parseFloat(e.customAmount);return Number.isFinite(s)?s:null}return e.amount}function O(e){return e!==null&&Number.isFinite(e)&&e>=I}function H(e,s){return{...e,amount:s,customAmount:""}}function P(e,s){return{...e,customAmount:s}}function k(e,s){return{...e,currency:s.code,sym:s.sym}}function j(e,s){if(s)return"Redirecting…";const t=w(e);return`Donate ${t?e.sym+t:"—"}`}function B(e){return e.recurring?`Recurring &middot; billed every ${e.interval} &middot; Stripe`:"One-time &middot; Processed securely by Stripe"}function Y(e){const s=w(e);return O(s)?{amount:s,currency:e.currency,displayName:e.name.trim()||void 0,recurring:e.recurring,interval:e.recurring?e.interval:void 0,newsletterOptIn:e.newsletterOptIn}:null}function G(e){if(!e)return[...v];const s=e.split(",").map(t=>Number(t.trim())).filter(t=>Number.isInteger(t)&&t>=I);return s.length?s:[...v]}function Q(e){if(!e)return[...g];const s=[];for(const t of e.split(",")){const r=g.find(a=>a.code===t.trim().toLowerCase());r&&!s.includes(r)&&s.push(r)}return s.length?s:[...g]}function A(e,s){const t=s?Number(s):f;return e.includes(t)?t:e.includes(f)?f:e[Math.floor(e.length/2)]}function V(e){return e!==null&&e.trim().toLowerCase()!=="false"}const W="Make a Donation",J="Every dollar supports our mission";class K extends L{constructor(){super(N);n(this,"state",y({code:"usd",sym:"$"},20));n(this,"amounts",[]);n(this,"currencies",[]);n(this,"loading",!1);n(this,"errorMessage","");n(this,"rendered",!1);this.root.addEventListener("click",t=>this.onClick(t)),this.root.addEventListener("input",t=>this.onInput(t)),this.root.addEventListener("change",t=>this.onChange(t))}static get observedAttributes(){return["checkout-url","newsletter","amounts","default-amount","currencies","title","subtitle"]}connectedCallback(){this.configure(),this.render()}attributeChangedCallback(){this.isConnected&&(this.configure(),this.render())}checkoutContext(){}checkoutUrl(){return this.getAttribute("checkout-url")??""}newsletterEnabled(){return V(this.getAttribute("newsletter"))}configure(){if(this.amounts=G(this.getAttribute("amounts")),this.currencies=Q(this.getAttribute("currencies")),!this.rendered){this.state=y(this.currencies[0],A(this.amounts,this.getAttribute("default-amount")));return}this.currencies.some(t=>t.code===this.state.currency)||(this.state=k(this.state,this.currencies[0])),this.state.amount!==null&&!this.amounts.includes(this.state.amount)&&(this.state={...this.state,amount:A(this.amounts,null)})}render(){const t=this.getAttribute("title")??W,r=this.getAttribute("subtitle")??J,a=this.newsletterEnabled();this.setHtml(`
      <div class="dw-wrap" id="dw-root" part="wrap">
        <div class="dw-header">
          <p class="dw-header-title">${d(t)}</p>
          <p class="dw-header-subtitle">${d(r)}</p>
        </div>
        <div class="dw-body">
          <div class="dw-section">
            <p class="dw-label">Donation amount</p>
            <div class="dw-amounts" id="dw-amounts" style="grid-template-columns: repeat(${this.amounts.length}, 1fr)">
              ${this.amounts.map(i=>`<button type="button" class="dw-amt" data-val="${i}"></button>`).join("")}
            </div>
            <div class="dw-custom-row">
              <span class="dw-sym" id="dw-sym"></span>
              <input class="dw-input" type="number" id="dw-custom" placeholder="Other amount" min="1" step="1" aria-label="Custom donation amount" value="${d(this.state.customAmount)}" />
            </div>
          </div>
          <div class="dw-section">
            <p class="dw-label">Frequency</p>
            <div class="dw-toggle">
              <button type="button" class="dw-tog" data-rec="false">Give once</button>
              <button type="button" class="dw-tog" data-rec="true">Give regularly</button>
            </div>
            <div class="dw-freq-row" id="dw-freq-row">
              <button type="button" class="dw-frq" data-frq="week">Weekly</button>
              <button type="button" class="dw-frq" data-frq="month">Monthly</button>
              <button type="button" class="dw-frq" data-frq="year">Yearly</button>
            </div>
          </div>
          <div class="dw-section">
            <p class="dw-label">Currency</p>
            <div class="dw-currencies" id="dw-currencies">
              ${this.currencies.map(i=>`<button type="button" class="dw-cur" data-cur="${i.code}">${i.label}</button>`).join("")}
            </div>
          </div>
          <div class="dw-section">
            <label class="dw-label" for="dw-name">Your name on the leaderboard <span class="dw-optional">(optional)</span></label>
            <input class="dw-input" type="text" id="dw-name" placeholder="Leave blank to donate anonymously" maxlength="60" value="${d(this.state.name)}" />
          </div>
          ${a?`<div class="dw-section dw-checkbox-row" id="dw-newsletter-row">
            <label class="dw-checkbox-label"><input type="checkbox" id="dw-newsletter" ${this.state.newsletterOptIn?"checked":""} /><span>Sign me up for the newsletter</span></label>
          </div>`:""}
          <button type="button" class="dw-submit" id="dw-submit" aria-live="polite"></button>
          <p class="dw-note" id="dw-note"></p>
          <p class="dw-error" id="dw-error" role="alert" aria-live="assertive"></p>
        </div>
      </div>`),this.rendered=!0,this.updateUI()}updateUI(){const t=this.state,r=w(t),a=(l,p)=>{const x=this.$(l);x&&(x.textContent=p)},i=this.$("#dw-submit");i&&(i.textContent=j(t,this.loading),i.disabled=this.loading||r===null||r<1);const o=this.$("#dw-note");o&&(o.innerHTML=B(t));const u=this.$("#dw-freq-row");u&&(u.style.display=t.recurring?"flex":"none",u.setAttribute("aria-hidden",String(!t.recurring))),a("#dw-sym",t.sym),a("#dw-error",this.errorMessage),this.$$(".dw-amt").forEach(l=>{const p=Number(l.dataset.val);l.textContent=`${t.sym}${p}`,l.classList.toggle("dw-amt--active",t.customAmount===""&&t.amount===p)}),this.$$(".dw-tog").forEach(l=>l.classList.toggle("dw-tog--active",l.dataset.rec==="true"===t.recurring)),this.$$(".dw-frq").forEach(l=>l.classList.toggle("dw-frq--active",l.dataset.frq===t.interval)),this.$$(".dw-cur").forEach(l=>l.classList.toggle("dw-cur--active",l.dataset.cur===t.currency))}onClick(t){const r=t.target,a=r==null?void 0:r.closest("button");if(a){if(this.errorMessage="",a.classList.contains("dw-amt")){this.state=H(this.state,Number(a.dataset.val));const i=this.$("#dw-custom");i&&(i.value="")}else if(a.classList.contains("dw-tog"))this.state={...this.state,recurring:a.dataset.rec==="true"};else if(a.classList.contains("dw-frq"))this.state={...this.state,interval:a.dataset.frq??"month"};else if(a.classList.contains("dw-cur")){const i=this.currencies.find(o=>o.code===a.dataset.cur);i&&(this.state=k(this.state,i))}else if(a.id==="dw-submit"){this.handleSubmit();return}else return;this.updateUI()}}onInput(t){const r=t.target;r.id==="dw-custom"?(this.errorMessage="",this.state=P(this.state,r.value),this.updateUI()):r.id==="dw-name"&&(this.state={...this.state,name:r.value})}onChange(t){const r=t.target;r.id==="dw-newsletter"&&(this.state={...this.state,newsletterOptIn:r.checked})}async handleSubmit(){if(this.loading)return;const t=Y(this.state);if(!t){this.errorMessage="Please enter an amount of at least 1.00.",this.updateUI();return}this.newsletterEnabled()||(t.newsletterOptIn=!1);const r=this.checkoutUrl();if(!r){this.errorMessage="This donation form is not configured (missing checkout-url).",this.updateUI();return}const a=this.checkoutContext(),i=a===void 0?t:{...t,context:a};if(this.emit("dw-donate-attempt",i,{cancelable:!0})){this.loading=!0,this.errorMessage="",this.updateUI();try{const o=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),u=await o.json();if(!o.ok||!u.url)throw new Error(u.error||"Something went wrong. Please try again.");window.location.href=u.url}catch(o){this.errorMessage=o instanceof Error?o.message:"Could not connect. Please try again.",this.loading=!1,this.updateUI()}}}}class X extends K{static get observedAttributes(){return[...super.observedAttributes,"campaign-slug"]}checkoutContext(){return _(M(this.getAttribute("campaign-slug")))}checkoutUrl(){return this.getAttribute("checkout-url")||`${T()}/functions/v1/create-checkout`}newsletterEnabled(){var s;return((s=this.getAttribute("newsletter"))==null?void 0:s.trim().toLowerCase())!=="false"}}function Z(e){return e===1?'<span aria-label="1st place">🥇</span>':e===2?'<span aria-label="2nd place">🥈</span>':e===3?'<span aria-label="3rd place">🥉</span>':`<span class="lb-rank-num" aria-label="rank ${e}">#${e}</span>`}function tt(e,s=Date.now()){return e===0?null:new Date(s-e*864e5).toISOString()}function et(e,s,t={},r=Date.now()){return{cutoff_ts:tt(e,r),row_limit:s,...t}}function rt(e){return!e||!e.length?'<li class="lb-state">No donations yet in this period — be the first! 🎉</li>':e.map((s,t)=>{const r=t+1,a=(s.original_currency||"usd").toLowerCase(),i=a==="usd"?"":`<span class="lb-usd-note">≈ ${b(s.total_usd??0,"usd")}</span>`;return`<li class="lb-item lb-rank-${Math.min(r,4)}" style="animation-delay:${t*55}ms"><span class="lb-medal">${Z(r)}</span><span class="lb-name">${d(s.display_name)}</span><span class="lb-amount">${b(s.total_original??0,a)}${i}</span></li>`}).join("")}const S=new Map;function st(e,s){if(!e||!s)throw new Error("Missing supabase-url or supabase-key attribute on the widget.");const t=`${e}|${s}`;let r=S.get(t);return r||(r=R(e,s,{auth:{persistSession:!1,autoRefreshToken:!1,detectSessionInUrl:!1}}),S.set(t,r)),r}const m=class m extends L{constructor(){super(...arguments);n(this,"channel",null);n(this,"client",null);n(this,"debounce");n(this,"started",!1);n(this,"instanceId",m.nextId++)}static get observedAttributes(){return["supabase-url","supabase-key","title","subtitle","limit"]}getSupabase(){return st(this.getAttribute("supabase-url"),this.getAttribute("supabase-key"))}realtimeFilters(){return[]}watchDeletes(){return!1}connectedCallback(){this.start()}disconnectedCallback(){this.started=!1,this.stop()}attributeChangedCallback(){this.started&&this.start()}start(){this.started=!0,this.stop(),this.render();try{this.client=this.getSupabase()}catch(t){this.client=null,this.showError(t instanceof Error?t.message:"Could not start.");return}this.subscribe(),this.refresh()}stop(){clearTimeout(this.debounce),this.channel&&this.client&&this.client.removeChannel(this.channel),this.channel=null}scheduleRefresh(){clearTimeout(this.debounce),this.debounce=setTimeout(()=>void this.refresh(),250)}subscribe(){if(!this.client)return;const t=this.realtimeFilters(),r=this.client.channel(`${this.channelPrefix()}-${this.instanceId}`);for(const a of t.length?t:[void 0])r.on("postgres_changes",{event:"*",schema:"public",table:"donations",...a?{filter:a}:{}},()=>this.scheduleRefresh());this.watchDeletes()&&r.on("postgres_changes",{event:"DELETE",schema:"public",table:"donations"},()=>this.scheduleRefresh()),r.subscribe(),this.channel=r}};n(m,"nextId",1);let h=m;const at=`
/* Isolation: the host page's theme must not decide the box model or control fonts */
:host {
  display: block;
}

*, *::before, *::after {
  box-sizing: border-box;
}

button {
  font-family: inherit;
}

/* Widget styles */
.lb-wrap {
  --acc: #2563eb;
  --acc-bg: rgba(37,99,235,0.07);
  --green: #059669;
  --muted: #6b7280;
  background: #fff;
  border-radius: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  max-width: 480px;
  margin: 24px auto;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

.lb-header {
  background: #111;
  padding: 20px 20px 14px;
}

.lb-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.lb-trophy {
  font-size: 1.8rem;
  line-height: 1;
}

.lb-title {
  margin: 0 0 2px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.2px;
}

.lb-subtitle {
  margin: 0;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.02em;
}

.lb-live-dot {
  margin-left: auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  flex-shrink: 0;
  animation: sb-pulse 2.2s ease-in-out infinite;
}

@keyframes sb-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
  50% { box-shadow: 0 0 0 7px rgba(52,211,153,0); }
}

.lb-timeframes {
  display: flex;
  gap: 5px;
}

.lb-tf {
  flex: 1;
  background: rgba(255,255,255,0.1);
  border: 1.5px solid transparent;
  border-radius: 6px;
  color: rgba(255,255,255,0.55);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 5px 0;
  cursor: pointer;
  transition: background .12s, color .12s, border-color .12s;
}

.lb-tf:hover {
  background: rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.85);
}

.lb-tf--active {
  background: var(--acc) !important;
  border-color: var(--acc) !important;
  color: #fff !important;
}

.lb-list {
  list-style: none;
  margin: 0;
  padding: 0 0 6px;
}

.lb-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  opacity: 0;
  transform: translateY(5px);
  animation: sb-in 0.3s ease forwards;
}

@keyframes sb-in {
  to { opacity: 1; transform: none; }
}

.lb-item:last-child {
  border-bottom: none;
}

.lb-rank-1 {
  background: rgba(251,191,36,0.06);
  border-left: 3px solid #f59e0b;
  padding-left: 17px;
}

.lb-rank-2 {
  background: rgba(156,163,175,0.05);
  border-left: 3px solid #9ca3af;
  padding-left: 17px;
}

.lb-rank-3 {
  background: rgba(180,120,60,0.05);
  border-left: 3px solid #b45309;
  padding-left: 17px;
}

.lb-medal {
  width: 28px;
  text-align: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.lb-rank-num {
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
}

.lb-name {
  flex: 1;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lb-rank-1 .lb-name {
  font-weight: 700;
  color: #111;
}

.lb-amount {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--green);
  flex-shrink: 0;
  text-align: right;
}

.lb-usd-note {
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--muted);
  margin-top: 1px;
}

.lb-state {
  padding: 32px 20px;
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
  font-style: italic;
}

.lb-error {
  color: #dc2626;
}
`,it=[{days:30,label:"30d"},{days:90,label:"3mo"},{days:180,label:"6mo"},{days:365,label:"1yr"},{days:0,label:"All"}],$=180,nt=10;class ot extends h{constructor(){super(at);n(this,"activeDays",$);n(this,"requestSeq",0);this.root.addEventListener("click",t=>{const r=t.target.closest(".lb-tf");r&&(this.activeDays=parseInt(r.dataset.days??String($),10),this.markActiveTimeframe(),this.setList('<li class="lb-state">Loading…</li>'),this.refresh())})}static get observedAttributes(){return super.observedAttributes}leaderboardArgs(){return{}}channelPrefix(){return"dw-leaderboard"}render(){const t=this.getAttribute("title")??"Top Supporters",r=this.getAttribute("subtitle")??"Cumulative giving · live updates";this.setHtml(`
      <div class="lb-wrap" part="wrap">
        <div class="lb-header">
          <div class="lb-title-row">
            <span class="lb-trophy" aria-hidden="true">🏆</span>
            <div>
              <h3 class="lb-title">${d(t)}</h3>
              <p class="lb-subtitle">${d(r)}</p>
            </div>
            <span class="lb-live-dot" title="Live data"></span>
          </div>
          <div class="lb-timeframes" role="group" aria-label="Timeframe">
            ${it.map(a=>`<button type="button" class="lb-tf" data-days="${a.days}">${a.label}</button>`).join("")}
          </div>
        </div>
        <ol class="lb-list" aria-live="polite" aria-label="Leaderboard"><li class="lb-state">Loading…</li></ol>
      </div>`),this.markActiveTimeframe()}markActiveTimeframe(){this.$$(".lb-tf").forEach(t=>t.classList.toggle("lb-tf--active",Number(t.dataset.days)===this.activeDays))}setList(t){const r=this.$(".lb-list");r&&(r.innerHTML=t)}showError(t){this.setList(`<li class="lb-state lb-error">${d(t)}</li>`)}async refresh(){const t=++this.requestSeq,r=Number(this.getAttribute("limit"))||nt;try{const{data:a,error:i}=await this.getSupabase().rpc("leaderboard_rankings",et(this.activeDays,r,this.leaderboardArgs()));if(t!==this.requestSeq)return;if(i)throw i;this.setList(rt(a))}catch(a){if(t!==this.requestSeq)return;console.error("Leaderboard error:",a),this.showError("Could not load leaderboard. Please refresh.")}}}class lt extends ot{static get observedAttributes(){return[...super.observedAttributes,"campaign-id"]}leaderboardArgs(){return U(c(this.getAttribute("campaign-id")))}realtimeFilters(){return E(c(this.getAttribute("campaign-id")))}watchDeletes(){return c(this.getAttribute("campaign-id"))!==null}getSupabase(){return c(this.getAttribute("campaign-id")),C()}}const dt="name, original_amount, original_currency, amount_usd, stripe_subscription_id, created_at";function ct(e,s=Date.now()){return!e||!e.length?'<li class="rd-state">No donations yet — be the first! 🎉</li>':e.map((t,r)=>{const a=(t.original_currency||"usd").toLowerCase(),i=a==="usd"?"":`<span class="rd-usd-note">≈ ${b(t.amount_usd,"usd")}</span>`,o=t.stripe_subscription_id?'<span class="rd-recur-badge" title="Recurring donation">↻</span>':"";return`<li class="rd-item" style="animation-delay:${r*55}ms"><span class="rd-dot" aria-hidden="true"></span><span class="rd-main"><span class="rd-name">${d(t.name)}${o}</span><span class="rd-time">${q(t.created_at,s)}</span></span><span class="rd-amount">${b(t.original_amount,a)}${i}</span></li>`}).join("")}const ut=`
/* Isolation: the host page's theme must not decide the box model or control fonts */
:host {
  display: block;
}

*, *::before, *::after {
  box-sizing: border-box;
}

button {
  font-family: inherit;
}

/* Widget styles */
.rd-wrap {
  --acc: #2563eb;
  --acc-bg: rgba(37,99,235,0.07);
  --green: #059669;
  --muted: #6b7280;
  background: #fff;
  border-radius: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  max-width: 480px;
  margin: 24px auto;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

.rd-header {
  background: #111;
  padding: 20px 20px 14px;
}

.rd-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.rd-bolt {
  font-size: 1.8rem;
  line-height: 1;
}

.rd-title {
  margin: 0 0 2px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.2px;
}

.rd-subtitle {
  margin: 0;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.02em;
}

.rd-live-dot {
  margin-left: auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  flex-shrink: 0;
  animation: sb-pulse 2.2s ease-in-out infinite;
}

@keyframes sb-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
  50% { box-shadow: 0 0 0 7px rgba(52,211,153,0); }
}

.rd-list {
  list-style: none;
  margin: 0;
  padding: 0 0 6px;
}

.rd-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  opacity: 0;
  transform: translateY(5px);
  animation: sb-in 0.3s ease forwards;
}

@keyframes sb-in {
  to { opacity: 1; transform: none; }
}

.rd-item:last-child {
  border-bottom: none;
}

.rd-name {
  flex: 1;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rd-amount {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--green);
  flex-shrink: 0;
  text-align: right;
}

.rd-usd-note {
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--muted);
  margin-top: 1px;
}

.rd-state {
  padding: 32px 20px;
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
  font-style: italic;
}

.rd-error {
  color: #dc2626;
}

.rd-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
}

.rd-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.rd-name {
  font-weight: 600;
}

.rd-recur-badge {
  display: inline-block;
  margin-left: 5px;
  font-size: 0.7rem;
  color: var(--acc);
  background: var(--acc-bg);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
}

.rd-time {
  font-size: 0.72rem;
  color: var(--muted);
  margin-top: 1px;
}
`,pt=10,bt=6e4;class ht extends h{constructor(){super(ut);n(this,"requestSeq",0);n(this,"ticker")}static get observedAttributes(){return super.observedAttributes}recentQuery(t){return t}channelPrefix(){return"dw-recent-donations"}render(){const t=this.getAttribute("title")??"Recent Donations",r=this.getAttribute("subtitle")??"Latest gifts · live updates";this.setHtml(`
      <div class="rd-wrap" part="wrap">
        <div class="rd-header">
          <div class="rd-title-row">
            <span class="rd-bolt" aria-hidden="true">⚡</span>
            <div>
              <h3 class="rd-title">${d(t)}</h3>
              <p class="rd-subtitle">${d(r)}</p>
            </div>
            <span class="rd-live-dot" title="Live data"></span>
          </div>
        </div>
        <ol class="rd-list" aria-live="polite" aria-label="Recent donations"><li class="rd-state">Loading…</li></ol>
      </div>`)}start(){super.start(),clearInterval(this.ticker),this.ticker=setInterval(()=>void this.refresh(),bt)}stop(){clearInterval(this.ticker),super.stop()}setList(t){const r=this.$(".rd-list");r&&(r.innerHTML=t)}showError(t){this.setList(`<li class="rd-state rd-error">${d(t)}</li>`)}async refresh(){const t=++this.requestSeq,r=Number(this.getAttribute("limit"))||pt;try{const a=this.getSupabase().from("donations").select(dt),{data:i,error:o}=await this.recentQuery(a).order("created_at",{ascending:!1}).limit(r);if(t!==this.requestSeq)return;if(o)throw o;this.setList(ct(i))}catch(a){if(t!==this.requestSeq)return;console.error("Recent donations error:",a),this.showError("Could not load recent donations. Please refresh.")}}}class mt extends ht{static get observedAttributes(){return[...super.observedAttributes,"campaign-id"]}recentQuery(s){const t=c(this.getAttribute("campaign-id"));return t?s.or(F(t)):s}realtimeFilters(){return E(c(this.getAttribute("campaign-id")))}watchDeletes(){return c(this.getAttribute("campaign-id"))!==null}getSupabase(){return c(this.getAttribute("campaign-id")),C()}}customElements.get("rg-donation-form")||customElements.define("rg-donation-form",X);customElements.get("rg-leaderboard")||customElements.define("rg-leaderboard",lt);customElements.get("rg-recent-donations")||customElements.define("rg-recent-donations",mt);export{X as RgDonationForm,lt as RgLeaderboard,mt as RgRecentDonations};
//# sourceMappingURL=donations.js.map
