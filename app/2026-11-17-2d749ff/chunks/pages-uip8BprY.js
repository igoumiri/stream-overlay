import{a as c}from"./api-SE-tQLIe.js";import{d as l}from"./runtime-config-mAo62F1c.js";import{b as d}from"./styles-CQgUidKC.js";import{d as s,i as u}from"../site-loader.js";import"./preload-helper-Dp1pzeXC.js";const m=`
.product-content-wrapper {
  display: none !important;
}

.product-list-container,
.product-list-nav-and-filters,
.product-list-filters-drawer-open-button-container,
.product-list-result-count-container {
  display: none !important;
}
`,i="rgai-page-styles";function p(t){return`${m}
rg-campaign-detail { display: block; }
rg-campaign-listing {
  display: block;
  contain: inline-size;
  min-width: 0;
  box-sizing: border-box;
  width: 100% !important;
  max-width: min(var(--container-width, 1200px), 100%);
  flex: 1 1 100% !important;
  grid-column: 1 / -1 !important;
  margin-left: auto;
  margin-right: auto;
}
${d("RealGoodFont",t)}`}function a(){if(document.getElementById(i))return;const t=document.createElement("style");t.id=i,t.textContent=p(l()),document.head.appendChild(t)}const r="data-rgai-page";function g(){document.querySelectorAll(`[${r}]`).forEach(t=>t.remove())}function f(t){t.setAttribute(r,"");const e=document.querySelector(".product-content-wrapper");if(e){e.insertAdjacentElement("afterend",t);return}const n=document.querySelector(".product-detail");if(n){n.appendChild(t);return}console.error("campaign detail page: no anchor found — nothing inserted to avoid clobbering the page.")}async function y(t){const e=document.querySelector(".product-gallery-slides-item-image"),n=document.createElement("rg-campaign-detail");n.fallbackImageUrl=e&&(e.currentSrc||e.src)||"";try{const o=await c(t);o?n.campaign=o:n.notFound=!0}catch(o){console.error("Failed to load campaign:",o),n.notFound=!0}f(n)}function h(){const t=document.querySelector(".product-list-container");if(!t){console.error("campaign grid: .product-list-container not found — nothing inserted.");return}const e=document.createElement("rg-campaign-listing");e.setAttribute(r,""),t.insertAdjacentElement("afterend",e)}function x(t=window.location.pathname){g();const e=s(t);e?(a(),y(e)):u(t)&&(a(),h())}export{x as mountCampaignPages};
//# sourceMappingURL=pages-uip8BprY.js.map
