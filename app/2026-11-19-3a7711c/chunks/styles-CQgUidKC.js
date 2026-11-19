function n(a){const{root:t,fontFamily:r,keyframes:e}=a,o=a.rootFont?' font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;':"";return`
  ${t} { display: inline-block; text-align: center; text-decoration: none; color: inherit; -webkit-tap-highlight-color: transparent;${o} }
  ${t} .bulb-card { width: ${a.cardWidth??220}px; transition: transform 0.15s ease; }
  ${t}:hover .bulb-card { transform: scale(1.03); }
  ${t} svg { display: block; width: 100%; height: auto; overflow: visible; }
  ${t} .bulb-amount-text {
    font-family: ${r}, "Arial Black", sans-serif;
    font-weight: 800;
    fill: #1c2b3a;
    stroke: #fff8e7;
    stroke-width: 7px;
    paint-order: stroke;
    pointer-events: none;
    user-select: none;
  }
  @keyframes ${e}-wiggle {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(-7deg); }
    40% { transform: rotate(6deg); }
    60% { transform: rotate(-4deg); }
    80% { transform: rotate(2deg); }
  }
  ${t} .bulb-wiggle-wrap.wiggling { animation: ${e}-wiggle 0.6s ease; }
  @keyframes ${e}-wave-a { from { transform: translateX(0); } to { transform: translateX(-100px); } }
  @keyframes ${e}-wave-b { from { transform: translateX(0); } to { transform: translateX(85px); } }
  ${t} .bulb-wave-layer-a { animation: ${e}-wave-a 3.4s linear infinite; }
  ${t} .bulb-wave-layer-b { animation: ${e}-wave-b 5s linear infinite; }
  ${t} .bulb-liquid-level { transition: transform 1.1s cubic-bezier(0.4, 0, 0.2, 1); }
`}function i(a,t){return`
  @font-face {
    font-family: "${a}";
    src: url("${t}/RealGoodFont-Regular.otf") format("opentype"),
         url("${t}/RealGoodFont-Regular.ttf") format("truetype");
    font-display: swap;
  }
`}export{n as a,i as b};
//# sourceMappingURL=styles-CQgUidKC.js.map
