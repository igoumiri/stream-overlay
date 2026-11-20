var $=Object.defineProperty;var k=(t,e,r)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var f=(t,e,r)=>k(t,typeof e!="symbol"?e+"":e,r);import{B as x}from"./base-element-M0S_n-xP.js";import{d as C}from"./runtime-config-mAo62F1c.js";import{f as B}from"./api-SE-tQLIe.js";import{b as L,p as T,c as F,d as A,B as M,e as S,a as _}from"./geometry-CZa0vdP3.js";function q(t){const{root:e,fontFamily:r,keyframes:o}=t,c=t.rootFont?' font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;':"";return`
  ${e} { display: inline-block; text-align: center; text-decoration: none; color: inherit; -webkit-tap-highlight-color: transparent;${c} }
  ${e} .bulb-card { width: ${t.cardWidth??220}px; transition: transform 0.15s ease; }
  ${e}:hover .bulb-card { transform: scale(1.03); }
  ${e} svg { display: block; width: 100%; height: auto; overflow: visible; }
  ${e} .bulb-amount-text {
    font-family: ${r}, "Arial Black", sans-serif;
    font-weight: 800;
    fill: #1c2b3a;
    stroke: #fff8e7;
    stroke-width: 7px;
    paint-order: stroke;
    pointer-events: none;
    user-select: none;
  }
  @keyframes ${o}-wiggle {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(-7deg); }
    40% { transform: rotate(6deg); }
    60% { transform: rotate(-4deg); }
    80% { transform: rotate(2deg); }
  }
  ${e} .bulb-wiggle-wrap.wiggling { animation: ${o}-wiggle 0.6s ease; }
  @keyframes ${o}-wave-a { from { transform: translateX(0); } to { transform: translateX(-100px); } }
  @keyframes ${o}-wave-b { from { transform: translateX(0); } to { transform: translateX(85px); } }
  ${e} .bulb-wave-layer-a { animation: ${o}-wave-a 3.4s linear infinite; }
  ${e} .bulb-wave-layer-b { animation: ${o}-wave-b 5s linear infinite; }
  ${e} .bulb-liquid-level { transition: transform 1.1s cubic-bezier(0.4, 0, 0.2, 1); }
`}function E(t,e){return`
  @font-face {
    font-family: "${t}";
    src: url("${e}/RealGoodFont-Regular.otf") format("opentype"),
         url("${e}/RealGoodFont-Regular.ttf") format("truetype");
    font-display: swap;
  }
`}const y="rgai-brand-font";function I(t){return E("RealGoodFont",t)}function R(t=document){if(t.getElementById(y))return;const e=t.createElement("style");e.id=y,e.textContent=I(C()),t.head.appendChild(e)}function D(t,e){const r=e.maxTextWidth||300,o=e.animationMs||1100,c=e.wiggle!==!1,a={lap:null,isTransitioning:!1,pendingData:null,lastRenderedText:null},s=n=>new Promise(l=>setTimeout(l,n)),u=()=>new Promise(n=>requestAnimationFrame(()=>n()));t.wiggle.addEventListener("animationend",()=>t.wiggle.classList.remove("wiggling"));function b(){c&&(t.wiggle.classList.remove("wiggling"),t.wiggle.offsetWidth,t.wiggle.classList.add("wiggling"))}function m(n){const l=e.paletteColorOf(e.palette,n);t.waveA.setAttribute("fill",l.a),t.waveB.setAttribute("fill",l.b),t.baseFill.setAttribute("fill",n>0?e.paletteColorOf(e.palette,n-1).a:"none")}function g(n,l){t.liquid.style.transition=l?"none":"",t.liquid.style.transform="translateY("+e.geometry.liquidSurfaceY(n)+"px)",l&&t.liquid.offsetHeight}function p(n){const l="$"+Math.round(n/100).toLocaleString();if(l===a.lastRenderedText)return;t.amount.textContent=l;let i=100;t.amount.style.fontSize=i+"px";try{const d=t.amount.getBBox();d.width>r&&(i=Math.max(40,Math.floor(i*(r/d.width))),t.amount.style.fontSize=i+"px")}catch{}a.lastRenderedText=l}async function Q(n,l){a.isTransitioning=!0,g(1),await s(o),m(n),b(),g(0,!0),await u(),await u();const i=a.pendingData;i&&(p(i.raised),a.pendingData=null);const d=i?e.calculateLap(i.raised,i.goal):{lap:n,fraction:l};if(a.lap=d.lap,g(d.fraction),await s(o),a.isTransitioning=!1,a.pendingData){const h=a.pendingData;a.pendingData=null,w(h.raised,h.goal)}}function w(n,l){if(p(n),a.isTransitioning){a.pendingData={raised:n,goal:l};return}const i=e.calculateLap(n,l);a.lap!==null&&i.lap>a.lap?Q(i.lap,i.fraction):(m(i.lap),g(i.fraction),a.lap=i.lap)}return{render:w,wiggle:b}}function O(t){return{clip:`${t}-clip`,baseFill:`${t}-base-fill`,liquid:`${t}-liquid`,waveA:`${t}-wave-a`,waveB:`${t}-wave-b`,amount:`${t}-amount`}}function P(t){return`<svg viewBox="695 210 530 670" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="${t.clip}">
          <path d="M969.3,323.59 C909.18,322.01 849.57,351.95 820.65,405.83 C803.26,438.23 798.95,476.38 806.89,512.13 C814.98,548.59 838.86,580.47 857.16,612.51 C871.27,637.2 893.02,670.3 890.09,699.66 C887.69,723.67 890.09,734.07 908.49,736.47 L1030.29,736.49 C1048.69,734.09 1051.09,723.69 1048.69,699.68 C1045.76,670.32 1067.51,637.22 1081.62,612.53 C1099.93,580.49 1123.81,548.61 1131.89,512.15 C1135.96,493.8 1136.81,474.83 1134.32,456.32 C1140,420 1120,390 1093.88,372.75 C1061.96,339.92 1015.88,322.37 969.49,323.59 Z" />
        </clipPath>
      </defs>
      <path d="M908.49,736.47 L908.49,805.28 C908.49,805.28 910.89,825.68 928.89,825.68 L946.89,825.68 L946.89,851.69 C946.89,854.01 948.77,855.88 951.08,855.88 L987.7,855.88 C990.02,855.88 991.89,854.0 991.89,851.69 L991.89,825.7 L1009.89,825.7 C1027.89,825.7 1030.29,805.3 1030.29,805.3 L1030.29,736.49 L908.49,736.47 Z" fill="#b8b8b9" />
      <path d="M969.3,323.59 C909.18,322.01 849.57,351.95 820.65,405.83 C803.26,438.23 798.95,476.38 806.89,512.13 C814.98,548.59 838.86,580.47 857.16,612.51 C871.27,637.2 893.02,670.3 890.09,699.66 C887.69,723.67 890.09,734.07 908.49,736.47 L1030.29,736.49 C1048.69,734.09 1051.09,723.69 1048.69,699.68 C1045.76,670.32 1067.51,637.22 1081.62,612.53 C1099.93,580.49 1123.81,548.61 1131.89,512.15 C1135.96,493.8 1136.81,474.83 1134.32,456.32 C1140,420 1120,390 1093.88,372.75 C1061.96,339.92 1015.88,322.37 969.49,323.59 Z" fill="#fff6da" />
      <g clip-path="url(#${t.clip})">
        <rect id="${t.baseFill}" x="695" y="210" width="530" height="670" fill="none" />
        <g class="bulb-liquid-level" id="${t.liquid}" style="transform: translateY(736px);">
          <g class="bulb-wave-layer-b">
            <path id="${t.waveB}" fill="#ffd23f" opacity="0.6" d="M 600,3 Q 621.25,-3 642.5,3 Q 663.75,9 685,3 Q 706.25,-3 727.5,3 Q 748.75,9 770,3 Q 791.25,-3 812.5,3 Q 833.75,9 855,3 Q 876.25,-3 897.5,3 Q 918.75,9 940,3 Q 961.25,-3 982.5,3 Q 1003.75,9 1025,3 Q 1046.25,-3 1067.5,3 Q 1088.75,9 1110,3 Q 1131.25,-3 1152.5,3 Q 1173.75,9 1195,3 Q 1216.25,-3 1237.5,3 Q 1258.75,9 1280,3 Q 1301.25,-3 1322.5,3 Q 1343.75,9 1365,3 Q 1386.25,-3 1407.5,3 Q 1428.75,9 1450,3 Q 1471.25,-3 1492.5,3 Q 1513.75,9 1535,3 L 1535,470 L 600,470 Z" />
          </g>
          <g class="bulb-wave-layer-a">
            <path id="${t.waveA}" fill="#f9c116" d="M 600,0 Q 625,9 650,0 Q 675,-9 700,0 Q 725,9 750,0 Q 775,-9 800,0 Q 825,9 850,0 Q 875,-9 900,0 Q 925,9 950,0 Q 975,-9 1000,0 Q 1025,9 1050,0 Q 1075,-9 1100,0 Q 1125,9 1150,0 Q 1175,-9 1200,0 Q 1225,9 1250,0 Q 1275,-9 1300,0 Q 1325,9 1350,0 Q 1375,-9 1400,0 Q 1425,9 1450,0 Q 1475,-9 1500,0 Q 1525,9 1550,0 Q 1575,-9 1600,0 L 1600,450 L 600,450 Z" />
          </g>
        </g>
      </g>
      <path d="M969.3,323.59c-60.12-1.58-119.73,28.36-148.65,82.24-17.39,32.4-21.7,70.55-13.76,106.3,8.09,36.46,31.97,68.34,50.27,100.38,14.11,24.69,35.86,57.79,32.93,87.15-2.4,24.01,0,34.41,18.4,36.81v68.81s2.4,20.4,20.4,20.4h18v26.01c0,2.32,1.88,4.19,4.19,4.19h36.62c2.32,0,4.19-1.88,4.19-4.19v-25.99h18c18,0,20.4-20.4,20.4-20.4v-68.81c18.4-2.4,20.8-12.8,18.4-36.81-2.93-29.36,18.82-62.46,32.93-87.15,18.31-32.04,42.19-63.92,50.27-100.38,4.07-18.35,4.92-37.32,2.43-55.83" fill="none" stroke="#000" stroke-width="16.76" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1093.88,372.75c-31.92-32.83-78-50.38-124.39-49.16" fill="none" stroke="#000" stroke-width="16.76" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="908.49" y1="736.48" x2="1030.3" y2="736.48" stroke="#000" stroke-width="16.76" stroke-linecap="round" />
      <line x1="975.63" y1="782.61" x2="1030.3" y2="782.61" stroke="#000" stroke-width="16.76" stroke-linecap="round" />
      <line x1="908.49" y1="782.61" x2="945.75" y2="782.61" stroke="#000" stroke-width="16.76" stroke-linecap="round" />
      <line x1="946.9" y1="825.7" x2="1007.04" y2="825.7" stroke="#000" stroke-width="16.76" stroke-linecap="round" />
      <circle cx="1121" cy="411.49" r="9.82" />
      <text class="bulb-amount-text" id="${t.amount}" x="978" y="495" text-anchor="middle" dominant-baseline="central" style="font-size:100px;">$0</text>
    </svg>`}let G=0;const z=L(S,M,_);class v extends x{constructor(){super(`:host { display: contents; }
${q({root:".bulb-widget",fontFamily:'"RealGoodFont"',keyframes:"bulb"})}`);f(this,"uid",`rg-bulb-${G++}`);f(this,"poll");f(this,"controller");f(this,"started",!1)}static get observedAttributes(){return["slug"]}connectedCallback(){R(),this.start()}disconnectedCallback(){this.started=!1,this.stop()}attributeChangedCallback(){this.started&&this.start()}start(){this.started=!0,this.stop();const r=this.getAttribute("slug");if(!r)return;const o=O(this.uid);this.setHtml(`
      <a class="bulb-widget" href="${window.location.origin}/fundraising-campaigns/p/${encodeURIComponent(r)}" target="_blank" rel="noopener" aria-label="Campaign donation progress — click to view campaign">
        <div class="bulb-card">
          <div class="bulb-wiggle-wrap">${P(o)}</div>
        </div>
      </a>`);const c=s=>this.root.getElementById(s);this.controller=D({wiggle:this.$(".bulb-wiggle-wrap"),baseFill:c(o.baseFill),liquid:c(o.liquid),waveA:c(o.waveA),waveB:c(o.waveB),amount:c(o.amount)},{geometry:z,palette:A,calculateLap:F,paletteColorOf:T});const a=()=>{B([r]).then(s=>{var u;s.length&&((u=this.controller)==null||u.render(s[0].raised_cents,s[0].goal_cents))}).catch(s=>console.error("Bulb widget error:",s))};a(),this.poll=setInterval(a,6e4)}stop(){clearInterval(this.poll)}}customElements.get("rg-bulb")||customElements.define("rg-bulb",v);const H=Object.freeze(Object.defineProperty({__proto__:null,RgBulb:v},Symbol.toStringTag,{value:"Module"}));export{v as R,q as a,E as b,D as c,P as d,O as e,H as r};
//# sourceMappingURL=rg-bulb-BBu0whaC.js.map
