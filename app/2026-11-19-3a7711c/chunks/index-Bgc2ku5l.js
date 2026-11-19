var T=Object.defineProperty;var I=(t,a,e)=>a in t?T(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var m=(t,a,e)=>I(t,typeof a!="symbol"?a+"":a,e);import{B as M,a as _,c as L,p as O,b as P,d as A,e as U,f as F,g as H,h as R}from"./rg-bulb-CFnUq_LI.js";import{R as xe}from"./rg-bulb-CFnUq_LI.js";import{B as x}from"./base-element-M0S_n-xP.js";import"../donations.js";import{RgProgressBar as Ce}from"./progress-bar-bL5iJqkk.js";import{f as D,m as N}from"./progress-vpEOc0y3.js";import{d as k,e as C,r as $}from"./runtime-config-mAo62F1c.js";import{b as G,a as V}from"./styles-CQgUidKC.js";import{c as j,s as K}from"./safe-DKiyyRQy.js";import{e as c}from"./format-BnO-nmXC.js";import{RgCampaignListing as Se}from"./campaign-listing-C5-pY8VZ.js";import"./api-SE-tQLIe.js";import"./campaign-filters-B8DpfKcl.js";import"./supabase-client-DVT62H8M.js";function Z(t){if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(t.slug))throw new Error("Invalid campaign slug");const a=r=>JSON.stringify(r).replace(/</g,"\\u003c"),e=`rga-bulb-${t.slug}`,i=R(e),n=`RealGoodFont-${e}`,o=G(n,t.overlayBaseUrl)+V({root:`#${e}`,fontFamily:`"${n}"`,keyframes:e,rootFont:!0}),l={campaignSlug:t.slug,siteUrl:t.siteUrl,supabaseUrl:t.supabaseUrl,supabaseAnonKey:t.supabaseKey,pollIntervalMs:6e4},d=`(function () {
  "use strict";
  var CONFIG = ${a(l)};
  var PALETTE = ${a(F)};
  var calculateLap = ${L.toString()};
  var paletteColorOf = ${O.toString()};
  var createBulbGeometry = ${P.toString()};
  var createBulbController = ${A.toString()};

  var geometry = createBulbGeometry(${a(H)}, ${M}, ${_});
  var linkEl = document.getElementById(${a(e)});
  linkEl.href = CONFIG.siteUrl.replace(/\\/$/, "") + "/fundraising-campaigns/p/" + CONFIG.campaignSlug;
  var bulb = createBulbController({
    wiggle: document.getElementById(${a(e+"-wiggle")}),
    baseFill: document.getElementById(${a(i.baseFill)}),
    liquid: document.getElementById(${a(i.liquid)}),
    waveA: document.getElementById(${a(i.waveA)}),
    waveB: document.getElementById(${a(i.waveB)}),
    amount: document.getElementById(${a(i.amount)})
  }, { geometry: geometry, palette: PALETTE, calculateLap: calculateLap, paletteColorOf: paletteColorOf });

  function tick() {
    var url = CONFIG.supabaseUrl + "/rest/v1/rpc/campaign_progress?p_slugs={" + encodeURIComponent(CONFIG.campaignSlug) + "}";
    fetch(url, { headers: { apikey: CONFIG.supabaseAnonKey, Authorization: "Bearer " + CONFIG.supabaseAnonKey } })
      .then(function (res) { return res.json(); })
      .then(function (rows) { if (rows && rows.length) bulb.render(rows[0].raised_cents, rows[0].goal_cents); })
      .catch(function (err) { console.error("[bulb widget] failed to load campaign progress", err); });
  }
  tick();
  setInterval(tick, CONFIG.pollIntervalMs);
})();`;return`<!-- Real Good AI campaign progress widget — safe to paste anywhere -->
<style>${o}</style>
<a id="${e}" href="#" target="_blank" rel="noopener" aria-label="Campaign donation progress — click to view campaign">
  <div class="bulb-card" id="${e}-card">
    <div class="bulb-wiggle-wrap" id="${e}-wiggle">
    ${U(i)}
    </div>
  </div>
</a>
<script>
${d}
<\/script>`}const q=`
.embed-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,15,20,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
  z-index: 9999;
  animation: embed-fade-in 0.15s ease;
}

@keyframes embed-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.embed-modal {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: embed-pop-in 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes embed-pop-in {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.embed-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  background: #111;
  padding: 18px 22px;
  border-radius: 16px 16px 0 0;
  position: sticky;
  top: 0;
}

.embed-modal-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
}

.embed-modal-subtitle {
  margin: 2px 0 0;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
}

.embed-modal-close {
  background: none;
  border: none;
  color: rgba(255,255,255,0.6);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background .12s, color .12s;
}

.embed-modal-close:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.embed-modal-body {
  padding: 24px 22px 26px;
}

.embed-preview {
  display: flex;
  justify-content: center;
  padding: 12px 0 20px;
}

.embed-code-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0 0 8px;
}

.embed-code-row {
  display: flex;
  gap: 8px;
  align-items: stretch;
}

.embed-textarea {
  flex: 1;
  min-width: 0;
  height: 110px;
  resize: vertical;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11.5px;
  line-height: 1.5;
  color: #1f2937;
  background: #f8f9fa;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 12px;
  box-sizing: border-box;
}

.embed-copy-btn {
  flex-shrink: 0;
  align-self: flex-start;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 18px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity .15s, transform .1s, background .15s;
  min-height: 40px;
}

.embed-copy-btn:hover {
  opacity: 0.85;
}

.embed-copy-btn:active {
  transform: scale(0.97);
}

.embed-copy-btn--copied {
  background: #059669;
  opacity: 1;
}

.embed-modal-hint {
  margin: 10px 0 0;
  font-size: 0.78rem;
  color: #6b7280;
  line-height: 1.5;
}

@media (max-width: 480px) {
  .embed-code-row {
    flex-direction: column;
  }
  .embed-copy-btn {
    align-self: stretch;
    padding: 10px;
  }
}

.ov-modal {
  max-width: 640px;
}

.ov-preview-wrap {
  margin-bottom: 14px;
}

.ov-preview-frame {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  zoom: 40%;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 10px;
  background-image:
      linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
      linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
      linear-gradient(-45deg, transparent 75%, #e5e7eb 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  background-color: #f3f4f6;
}

.ov-field--action {
  justify-content: flex-end;
}

.ov-test-btn {
  box-sizing: border-box;
  width: 100%;
  height: var(--ov-control-h);
  margin-top: auto;
  background: #111;
  color: #fff;
  border: 1.5px solid #111;
  border-radius: 8px;
  padding: 0.5em 0.6em;
  font-size: 13px;
  line-height: normal;
  font-weight: 700;
  cursor: pointer;
  transition: opacity .15s ease, transform .1s ease;
}

.ov-test-btn:hover {
  opacity: 0.85;
}

.ov-test-btn:active {
  transform: scale(0.97);
}

.ov-controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 18px;
  margin-bottom: 20px;
}

@media (max-width: 480px) {
  .ov-controls {
    grid-template-columns: 1fr;
  }
}

.ov-modal {
  --ov-control-h: 32px;
}

.ov-field {
  display: flex;
  flex-direction: column;
}

.ov-field label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #5a6b7a;
  margin-bottom: 6px;
}

.ov-field-value {
  font-weight: 700;
  color: #16324a;
}

.ov-field select,
.ov-field input[type="range"] {
  width: 100%;
}

.ov-field select {
  box-sizing: border-box;
  height: var(--ov-control-h);
  padding: 0.5em 0.6em;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 13px;
  background: #fff;
  color: #16324a;
}

.ov-field input[type="range"] {
  accent-color: #2563eb;
  margin: auto;
}

.ov-url-input {
  width: 100%;
  padding: 0.5em 0.6em;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 13px;
  background: #fff;
  color: #16324a;
}
`;function W(t){return`${t.replace(/\/$/,"")}/stream-overlay.html`}function Y(t,a,e,i,n){const o=new URL(W(t));return o.searchParams.set("slug",a),o.searchParams.set("supabaseUrl",e),o.searchParams.set("supabaseAnonKey",i),o.searchParams.set("bulbPos",n.bulbPos),o.searchParams.set("bulbScale",n.bulbScale),o.searchParams.set("toastPos",n.toastPos),o.searchParams.set("toastScale",n.toastScale),o.searchParams.set("toastTheme",n.toastTheme),o.searchParams.set("toastDuration",String(n.toastDuration)),o.searchParams.set("sound",n.sound),o.toString()}const J="sb-overlay-test-donation",y=["Resplendent Capybara","Magnificent Quokka","Jamie R.","Alex Chen","Dauntless Otter"],w=[5,10,20,25,50,100];class S extends x{constructor(){super(`button, input { font-family: inherit; }
${q}`);m(this,"onClose",null)}wireDismiss(){var i;const e=this.$(".embed-modal-overlay");e==null||e.addEventListener("click",n=>{var o;n.target===e&&((o=this.onClose)==null||o.call(this))}),(i=this.$(".embed-modal-close"))==null||i.addEventListener("click",()=>{var n;return(n=this.onClose)==null?void 0:n.call(this)})}focusClose(){var e;(e=this.$(".embed-modal-close"))==null||e.focus()}wireCopy(e,i){e.addEventListener("click",()=>{var l;i.select(),i.setSelectionRange(0,i.value.length);const n=()=>{e.textContent="Copied!",e.classList.add("embed-copy-btn--copied"),setTimeout(()=>{e.textContent="Copy",e.classList.remove("embed-copy-btn--copied")},1800)},o=()=>{document.execCommand("copy"),n()};(l=navigator.clipboard)!=null&&l.writeText?navigator.clipboard.writeText(i.value).then(n).catch(o):o()})}}class Q extends S{constructor(){super(...arguments);m(this,"slug","")}connectedCallback(){const e=Z({slug:this.slug,siteUrl:window.location.origin,supabaseUrl:$(),supabaseKey:C(),overlayBaseUrl:k()});this.setHtml(`
      <div class="embed-modal-overlay">
        <div class="embed-modal" role="dialog" aria-modal="true" aria-labelledby="embed-modal-title">
          <div class="embed-modal-header">
            <div>
              <p class="embed-modal-title" id="embed-modal-title">Embed this campaign's progress</p>
              <p class="embed-modal-subtitle">Paste it anywhere — your site, a Twitch panel, wherever</p>
            </div>
            <button type="button" class="embed-modal-close" aria-label="Close">&times;</button>
          </div>
          <div class="embed-modal-body">
            <div class="embed-preview"></div>
            <p class="embed-code-label">Embed code</p>
            <div class="embed-code-row">
              <textarea class="embed-textarea" readonly spellcheck="false" aria-label="Embed code"></textarea>
              <button type="button" class="embed-copy-btn">Copy</button>
            </div>
            <p class="embed-modal-hint">Paste this anywhere that allows custom HTML. It keeps itself up to date — no need to re-copy it as donations come in.</p>
          </div>
        </div>
      </div>`);const i=this.$(".embed-textarea");i.value=e;const n=document.createElement("rg-bulb");n.setAttribute("slug",this.slug),this.$(".embed-preview").appendChild(n),this.wireDismiss(),this.wireCopy(this.$(".embed-copy-btn"),i)}}class X extends S{constructor(){super(...arguments);m(this,"slug","")}connectedCallback(){this.setHtml(`
      <div class="embed-modal-overlay">
        <div class="embed-modal ov-modal" role="dialog" aria-modal="true" aria-labelledby="ov-modal-title">
          <div class="embed-modal-header">
            <div>
              <p class="embed-modal-title" id="ov-modal-title">Stream overlay</p>
              <p class="embed-modal-subtitle">Add as a Browser Source in OBS, Streamlabs, or similar</p>
            </div>
            <button type="button" class="embed-modal-close" aria-label="Close">&times;</button>
          </div>
          <div class="embed-modal-body">
            <div class="ov-preview-wrap">
              <iframe class="ov-preview-frame" title="Overlay preview" allow="autoplay"></iframe>
            </div>
            <div class="ov-controls">
              <div class="ov-field">
                <label>Bulb position</label>
                <select class="ov-bulb-pos">
                  <option value="bottom-right">Bottom right</option>
                  <option value="bottom-left">Bottom left</option>
                  <option value="top-right">Top right</option>
                  <option value="top-left">Top left</option>
                  <option value="center">Center</option>
                  <option value="hidden">Hidden</option>
                </select>
              </div>
              <div class="ov-field">
                <label>Bulb size <span class="ov-field-value ov-bulb-scale-val">100%</span></label>
                <input type="range" class="ov-bulb-scale" min="50" max="200" step="5" value="100" />
              </div>
              <div class="ov-field">
                <label>Donation toast position</label>
                <select class="ov-toast-pos">
                  <option value="top-right">Top right</option>
                  <option value="top-left">Top left</option>
                  <option value="bottom-right">Bottom right</option>
                  <option value="bottom-left">Bottom left</option>
                  <option value="top-center">Top center</option>
                  <option value="bottom-center">Bottom center</option>
                  <option value="hidden">Hidden</option>
                </select>
              </div>
              <div class="ov-field">
                <label>Toast size <span class="ov-field-value ov-toast-scale-val">100%</span></label>
                <input type="range" class="ov-toast-scale" min="50" max="200" step="10" value="100" />
              </div>
              <div class="ov-field">
                <label>Toast theme</label>
                <select class="ov-toast-theme">
                  <option value="dark">Dark (fits most backgrounds)</option>
                  <option value="light">Light</option>
                </select>
              </div>
              <div class="ov-field">
                <label>Toast duration <span class="ov-field-value ov-toast-duration-val">6s</span></label>
                <input type="range" class="ov-toast-duration" min="1" max="11" step="1" value="6" />
              </div>
              <div class="ov-field">
                <label>Donation sound</label>
                <select class="ov-sound-select">
                  <option value="locomotive">Locomotive</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div class="ov-field ov-field--action">
                <button type="button" class="ov-test-btn">🎉 Test donation</button>
              </div>
            </div>
            <p class="embed-code-label">Overlay URL — paste into your streaming software as a Browser Source</p>
            <div class="embed-code-row">
              <input type="text" class="ov-url-input" readonly aria-label="Overlay URL" />
              <button type="button" class="embed-copy-btn ov-copy-btn">Copy</button>
            </div>
            <p class="embed-modal-hint">Recommended Browser Source size: 1920×1080, with "Refresh browser when scene becomes active" and a transparent background enabled. It updates itself — no need to re-copy it as the campaign progresses.</p>
          </div>
        </div>
      </div>`);const e=s=>this.$(s),i=e(".ov-preview-frame"),n=e(".ov-url-input"),o={bulbPos:"bottom-right",bulbScale:100,toastPos:"top-right",toastScale:100,toastTheme:"dark",toastDuration:6,sound:"locomotive"},l=()=>{const s=Y(k(),this.slug,$(),C(),{bulbPos:o.bulbPos,bulbScale:(o.bulbScale/100).toFixed(2),toastPos:o.toastPos,toastScale:(o.toastScale/100).toFixed(2),toastTheme:o.toastTheme,toastDuration:o.toastDuration,sound:o.sound});n.value=s,i.src=s},d=(s,u)=>e(s).addEventListener("change",g=>{u(g.target.value),l()}),r=(s,u,g,E)=>e(s).addEventListener("input",z=>{const h=parseInt(z.target.value,10);E(h),e(u).textContent=h+g,l()});d(".ov-bulb-pos",s=>o.bulbPos=s),r(".ov-bulb-scale",".ov-bulb-scale-val","%",s=>o.bulbScale=s),d(".ov-toast-pos",s=>o.toastPos=s),r(".ov-toast-scale",".ov-toast-scale-val","%",s=>o.toastScale=s),d(".ov-toast-theme",s=>o.toastTheme=s),r(".ov-toast-duration",".ov-toast-duration-val","s",s=>o.toastDuration=s),d(".ov-sound-select",s=>o.sound=s),e(".ov-test-btn").addEventListener("click",()=>{i.contentWindow&&i.contentWindow.postMessage({type:J,name:y[Math.floor(Math.random()*y.length)],amount:w[Math.floor(Math.random()*w.length)],currency:"usd",recurring:Math.random()<.3},"*")}),this.wireDismiss(),this.wireCopy(e(".ov-copy-btn"),n),l()}}customElements.get("rg-embed-modal")||customElements.define("rg-embed-modal",Q);customElements.get("rg-overlay-modal")||customElements.define("rg-overlay-modal",X);let b=null;function v(){if(!b)return;document.removeEventListener("keydown",b.onKeydown),b.el.remove(),document.body.style.overflow="";const t=b.trigger;b=null,t&&typeof t.focus=="function"&&t.focus()}function B(t,a){v();const e=i=>{i.key==="Escape"&&v()};t.onClose=v,document.addEventListener("keydown",e),document.body.appendChild(t),document.body.style.overflow="hidden",t.focusClose(),b={el:t,trigger:a,onKeydown:e}}function ee(t,a){const e=document.createElement("rg-embed-modal");e.slug=t,B(e,a)}function te(t,a){const e=document.createElement("rg-overlay-modal");e.slug=t,B(e,a)}const oe={twitch:{viewBox:"0 0 512 512",path:"M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"},youtube:{viewBox:"0 0 576 512",path:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},tiktok:{viewBox:"0 0 448 512",path:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},instagram:{viewBox:"0 0 448 512",path:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},discord:{viewBox:"0 0 640 512",path:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},code:{viewBox:"0 0 640 512",path:"M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"},tv:{viewBox:"0 0 640 512",path:"M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"}};function f(t){const a=oe[t],e=Number(a.viewBox.split(" ")[2])/512;return`<svg class="cd-icon" viewBox="${a.viewBox}" width="${e}em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="${a.path}"/></svg>`}const ae={Twitch:"twitch",YouTube:"youtube",TikTok:"tiktok",Instagram:"instagram",Discord:"discord"},ie=`
.cd-not-found {
  max-width: 640px;
  margin: 3em auto;
  text-align: center;
  color: #5a6b7a;
  font-size: 1.1em;
}

.cd-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "info donate" "recent leaderboard";
  gap: 1.75em;
  margin: 2em auto 3em;
  align-items: start;
  max-width: var(--sqs-site-max-width, 1200px);
  width: 100%;
}

.cd-info {
  grid-area: info;
}

.cd-donate {
  grid-area: donate;
}

.cd-recent {
  grid-area: recent;
}

.cd-leaderboard {
  grid-area: leaderboard;
}

@media (max-width: 860px) {
  .cd-grid {
    grid-template-columns: 1fr;
    grid-template-areas: "info" "donate" "recent" "leaderboard";
  }
}

.cd-recent .rd-wrap,
.cd-leaderboard .lb-wrap {
  max-width: none;
  width: 100%;
  margin: 0;
}

.cd-info-card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}

.cd-info-image {
  aspect-ratio: 16 / 9;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #e5e7eb;
}

.cd-info-body {
  padding: 1.5em 1.6em 1.75em;
}

.cd-title {
  margin: 0 0 0.3em;
  font-size: 1.6em;
  font-weight: 700;
  color: #16324a;
}

.cd-organizer {
  font-size: 1em;
  font-style: italic;
  color: #5a6b7a;
  margin: 0 0 1em;
}

.cd-description {
  font-size: 1.02em;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 0 0 1.3em;
  color: #1c2b3a;
}

.cd-goal {
  display: inline-block;
  font-size: 1.05em;
  font-weight: 700;
  color: #16324a;
  background: #f5cf6b;
  padding: 0.45em 0.9em;
  border-radius: 999px;
  margin: 0 0 1.3em;
}

.cd-socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6em;
  margin-bottom: 1.4em;
}

.cd-social-link {
  display: inline-block;
  padding: 0.5em 1.1em;
  border-radius: 999px;
  background: #16324a;
  color: #fff;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 600;
  transition: opacity 0.15s ease;
}

.cd-social-link:hover {
  opacity: 0.8;
}

.cd-social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #16324a;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  transition: opacity 0.15s ease;
}

.cd-social-icon:hover {
  opacity: 0.8;
}

.cd-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75em;
  margin: 0 0 0.3em;
}

.cd-title-row .cd-title {
  margin: 0;
}

.cd-countdown-badge {
  flex-shrink: 0;
  display: inline-block;
  margin-top: 0.2em;
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #b45309;
  background: #fef3c7;
  padding: 0.4em 0.85em;
  border-radius: 999px;
  white-space: nowrap;
}

.cd-countdown-badge.sb-countdown--done {
  background: #e5e7eb;
  color: #4b5563;
}

.cd-goal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  flex-wrap: wrap;
  margin: 0 0 1.3em;
}

.cd-goal-row .cd-goal {
  margin: 0;
}

.cd-goal-row-actions {
  display: flex;
  gap: 0.6em;
  flex-wrap: wrap;
}

.cd-embed-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  background: #fff;
  border: 1.5px solid #16324a;
  color: #16324a;
  font-weight: 700;
  font-size: 0.85em;
  padding: 0.55em 1.1em;
  border-radius: 999px;
  cursor: pointer;
  transition: background .15s ease, color .15s ease, transform .1s ease;
  white-space: nowrap;
}

.cd-embed-btn:hover {
  background: #16324a;
  color: #fff;
}

.cd-embed-btn:active {
  transform: scale(0.97);
}

.cd-embed-btn i {
  font-size: 0.95em;
}
`,ne=`
:host { display: block; }
.cd-donate rg-donation-form::part(wrap),
.cd-recent rg-recent-donations::part(wrap),
.cd-leaderboard rg-leaderboard::part(wrap) { max-width: none; width: 100%; margin: 0; }
.cd-icon { display: block; }
.cd-embed-btn, .cd-social-link { font-family: inherit; }
.cd-embed-btn .cd-icon { font-size: 0.95em; }
`;function p(t,a){const e=K(a);if(!e)return"";const i=ae[t];return i?`<a href="${c(e)}" target="_blank" rel="noopener noreferrer" class="cd-social-icon" aria-label="${c(t)}">${f(i)}</a>`:`<a class="cd-social-link" href="${c(e)}" target="_blank" rel="noopener noreferrer">${c(t)}</a>`}class se extends x{constructor(){super(`${ne}
${ie}`);m(this,"_campaign",null);m(this,"_notFound",!1);m(this,"fallbackImageUrl","");m(this,"stopCountdown")}set campaign(e){this._campaign=e,this.isConnected&&this.render()}set notFound(e){this._notFound=e,this.isConnected&&this.render()}connectedCallback(){this.render()}disconnectedCallback(){var e;(e=this.stopCountdown)==null||e.call(this)}render(){var d;(d=this.stopCountdown)==null||d.call(this);const e=this._campaign;if(!e){this.setHtml(this._notFound?'<p class="cd-not-found">This campaign could not be found. It may have ended or the link may be incorrect.</p>':"");return}const i=p("Twitch",e.twitch_url)+p("YouTube",e.youtube_url)+p("TikTok",e.tiktok_url)+p("Instagram",e.instagram_url)+p("Discord",e.discord_url)+(e.other_links??[]).map(r=>p(r.label,r.url)).join(""),n=c(e.slug),o=c(e.id);this.setHtml(`
      <div class="cd-grid">
        <div class="cd-info"><div class="cd-info-card">
          <div class="cd-info-image"></div>
          <div class="cd-info-body">
            <div class="cd-title-row">
              <h1 class="cd-title">${c(e.name)}</h1>
              <span class="cd-countdown-badge" id="cd-countdown"></span>
            </div>
            <p class="cd-organizer">Organized by ${c(e.organizer_name)}</p>
            <p class="cd-description">${c(e.description)}</p>
            <div class="cd-goal-row">
              <p class="cd-goal">Goal: ${D(e.goal_cents)}</p>
              <div class="cd-goal-row-actions">
                <button type="button" class="cd-embed-btn" id="cd-embed-btn">${f("code")}<span>Embed widget</span></button>
                <button type="button" class="cd-embed-btn" id="cd-overlay-btn">${f("tv")}<span>Stream overlay</span></button>
              </div>
            </div>
            ${i?`<nav class="cd-socials">${i}</nav>`:""}
            <div id="campaign-progress"><rg-progress-bar slug="${n}" campaign-id="${o}"></rg-progress-bar></div>
          </div>
        </div></div>
        <div class="cd-donate" id="campaign-donate-widget"><rg-donation-form campaign-slug="${n}"></rg-donation-form></div>
        <div class="cd-recent" id="campaign-recent"><rg-recent-donations campaign-id="${o}"></rg-recent-donations></div>
        <div class="cd-leaderboard" id="campaign-leaderboard"><rg-leaderboard campaign-id="${o}"></rg-leaderboard></div>
      </div>`);const l=j(e.image_url||this.fallbackImageUrl);l&&(this.$(".cd-info-image").style.backgroundImage=l),this.stopCountdown=N(this.$("#cd-countdown"),e.target_date,3e4),this.$("#cd-embed-btn").addEventListener("click",r=>ee(e.slug,r.currentTarget)),this.$("#cd-overlay-btn").addEventListener("click",r=>te(e.slug,r.currentTarget)),window.location.hash==="#thank-you"&&setTimeout(()=>{var r;return(r=this.$(".cd-recent"))==null?void 0:r.scrollIntoView({behavior:"smooth",block:"start"})},400)}}customElements.get("rg-campaign-detail")||customElements.define("rg-campaign-detail",se);export{xe as RgBulb,se as RgCampaignDetail,Se as RgCampaignListing,Ce as RgProgressBar};
//# sourceMappingURL=index-Bgc2ku5l.js.map
