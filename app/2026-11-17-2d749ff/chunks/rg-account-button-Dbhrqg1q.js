const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./account-dialog-CE4nBkgA.js","./preload-helper-Dp1pzeXC.js","./base-element-M0S_n-xP.js","./supabase-client-DVT62H8M.js","./runtime-config-mAo62F1c.js"])))=>i.map(i=>d[i]);
var g=Object.defineProperty;var m=(i,t,e)=>t in i?g(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var s=(i,t,e)=>m(i,typeof t!="symbol"?t+"":t,e);import{_ as c}from"./preload-helper-Dp1pzeXC.js";import{e as l}from"./sanitize-C-6oEckY.js";import{r as p}from"./runtime-config-mAo62F1c.js";function h(i=p()){return`sb-${new URL(i).hostname.split(".")[0]}-auth-token`}function f(){var t,e;let i;try{i=localStorage.getItem(h())}catch{return null}if(!i)return null;try{const n=JSON.parse(i),o=(n==null?void 0:n.user)??((t=n==null?void 0:n.currentSession)==null?void 0:t.user);if(!(o!=null&&o.id))return null;const r=typeof o.email=="string"?o.email:"",a=(e=o.user_metadata)==null?void 0:e.display_name;return{name:typeof a=="string"&&a.trim()?a.trim():r.split("@")[0],email:r}}catch{return null}}function b(i){const t=i.trim().split(/[\s._-]+/).filter(Boolean);if(!t.length)return"?";const e=[...t[0]][0]??"",n=t.length>1?[...t[t.length-1]][0]??"":[...t[0]][1]??"";return(e+n).toUpperCase()}const u="rgai-auth-changed",d=`
:host { display: inline-flex; position: relative; color: inherit; font-family: inherit; line-height: 1; }
*, *::before, *::after { box-sizing: border-box; }
/* Works on any page colour: a light pastel disc inside a black ring, with a black icon (signed out) or black
   initials (signed in). Each page of the site has its own colours, so nothing here follows the theme.
   The disc is four flat diagonal bands (light apricot, yellow, green, cyan). A 135° gradient runs corner to corner of
   the square box, but the circle only covers its middle 70.7% (14.64%–85.36%), so the stops are spread over
   that part: every band shows at the same width inside the circle. */
.trigger {
  --rg-account-bands: linear-gradient(135deg, #ffe8b3 0 32.32%, #fdffb6 32.32% 50%, #caffbf 50% 67.68%, #9bf6ff 67.68% 100%);
  width: var(--rg-account-size, 34px); height: var(--rg-account-size, 34px); border-radius: 999px; padding: 0; margin: 0;
  display: inline-flex; align-items: center; justify-content: center; cursor: pointer;
  border: none; background: #fff var(--rg-account-bands); color: #000; font: inherit; box-shadow: 0 0 0 1.5px #000, 0 0 0 3px rgba(255, 255, 255, .55);
  transition: background-color .15s ease, transform .1s ease;
}
.trigger:hover { background-image: linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08)), var(--rg-account-bands); }
.trigger:active { transform: scale(.96); }
.trigger:focus-visible { outline: 2px solid #000; outline-offset: 4px; }
.trigger { overflow: hidden; }
.trigger svg.avatar { width: 100%; height: 100%; }
.trigger span { font-weight: 700; font-size: calc(var(--rg-account-size, 34px) * .4); letter-spacing: .02em; }
.menu {
  position: absolute; top: calc(100% + 10px); right: 0; z-index: 1000; min-width: 220px; max-width: 280px;
  background: #fff; color: #0f172a; border-radius: 12px; padding: .4rem;
  box-shadow: 0 12px 32px rgba(15, 23, 42, .22), 0 2px 6px rgba(15, 23, 42, .12);
  font: 15px/1.35 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; text-align: left;
}
.menu[hidden] { display: none; }
.who { padding: .55rem .7rem .65rem; border-bottom: 1px solid #e2e8f0; margin-bottom: .3rem; }
.who b { display: block; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.who small { display: block; color: #64748b; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.item {
  display: block; width: 100%; padding: .55rem .7rem; border: none; border-radius: 8px; background: none;
  color: inherit; font: inherit; text-align: left; text-decoration: none; cursor: pointer;
}
.item:hover, .item:focus-visible { background: #f1f5f9; outline: none; }
`,v='<svg class="avatar" viewBox="0 0 34 34" fill="currentColor" aria-hidden="true"><circle cx="17" cy="13" r="6"/><path d="M4 34c0-7.5 5.8-12.5 13-12.5S30 26.5 30 34z"/></svg>';class w extends HTMLElement{constructor(){super();s(this,"root");s(this,"user",null);s(this,"menuOpen",!1);s(this,"refresh",()=>this.update());s(this,"onStorage",e=>{(e.key===null||e.key===h())&&this.update()});s(this,"onOutside",e=>{this.menuOpen&&!e.composedPath().includes(this)&&this.setMenu(!1)});s(this,"onKey",e=>{var n;e.key==="Escape"&&this.menuOpen&&(this.setMenu(!1),(n=this.root.querySelector(".trigger"))==null||n.focus())});this.root=this.attachShadow({mode:"open"})}connectedCallback(){window.addEventListener(u,this.refresh),window.addEventListener("storage",this.onStorage),document.addEventListener("click",this.onOutside,!0),document.addEventListener("keydown",this.onKey),this.update()}disconnectedCallback(){window.removeEventListener(u,this.refresh),window.removeEventListener("storage",this.onStorage),document.removeEventListener("click",this.onOutside,!0),document.removeEventListener("keydown",this.onKey)}update(){this.user=f(),this.menuOpen=!1,this.render()}setMenu(e){var r;this.menuOpen=e;const n=this.root.querySelector(".menu"),o=this.root.querySelector(".trigger");n&&(n.hidden=!e),o==null||o.setAttribute("aria-expanded",String(e)),e&&((r=this.root.querySelector(".item"))==null||r.focus())}render(){var o;const e=this.user,n=this.getAttribute("account-href")||"/my-account";this.root.innerHTML=e?`<style>${d}</style>
         <button type="button" class="trigger" aria-haspopup="menu" aria-expanded="false" aria-label="Account menu for ${l(e.name)}" title="${l(e.name)}"><span>${l(b(e.name))}</span></button>
         <div class="menu" role="menu" hidden>
           <div class="who"><b>${l(e.name)}</b>${e.email?`<small>${l(e.email)}</small>`:""}</div>
           <a class="item" role="menuitem" href="${l(n)}">Account settings</a>
           <button type="button" class="item" role="menuitem" data-action="sign-out">Sign out</button>
         </div>`:`<style>${d}</style>
         <button type="button" class="trigger" aria-haspopup="dialog" aria-label="Sign in or create an account" title="Sign in">${v}</button>`,this.root.querySelector(".trigger").addEventListener("click",async()=>{if(this.user)this.setMenu(!this.menuOpen);else{const{openAuthDialog:r}=await c(async()=>{const{openAuthDialog:a}=await import("./account-dialog-CE4nBkgA.js");return{openAuthDialog:a}},__vite__mapDeps([0,1,2,3,4]),import.meta.url);r()}}),(o=this.root.querySelector('[data-action="sign-out"]'))==null||o.addEventListener("click",async()=>{this.setMenu(!1);const{signOut:r}=await c(async()=>{const{signOut:a}=await import("./account-dialog-CE4nBkgA.js");return{signOut:a}},__vite__mapDeps([0,1,2,3,4]),import.meta.url);await r()})}}customElements.get("rg-account-button")||customElements.define("rg-account-button",w);export{w as RgAccountButton};
//# sourceMappingURL=rg-account-button-Dbhrqg1q.js.map
