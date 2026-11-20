import{a as c}from"./api-SE-tQLIe.js";import{d as l,i as d}from"../site-loader.js";import"./runtime-config-mAo62F1c.js";import"./preload-helper-Dp1pzeXC.js";const s=`
.product-content-wrapper {
  display: none !important;
}

.product-list-container,
.product-list-nav-and-filters,
.product-list-filters-drawer-open-button-container,
.product-list-result-count-container {
  display: none !important;
}
`,i="rgai-page-styles";function u(){return`${s}
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
}`}function a(){if(document.getElementById(i))return;const t=document.createElement("style");t.id=i,t.textContent=u(),document.head.appendChild(t)}const o="data-rgai-page";function p(){document.querySelectorAll(`[${o}]`).forEach(t=>t.remove())}function m(t){t.setAttribute(o,"");const e=document.querySelector(".product-content-wrapper");if(e){e.insertAdjacentElement("afterend",t);return}const n=document.querySelector(".product-detail");if(n){n.appendChild(t);return}console.error("campaign detail page: no anchor found — nothing inserted to avoid clobbering the page.")}async function g(t){const e=document.querySelector(".product-gallery-slides-item-image"),n=document.createElement("rg-campaign-detail");n.fallbackImageUrl=e&&(e.currentSrc||e.src)||"";try{const r=await c(t);r?n.campaign=r:n.notFound=!0}catch(r){console.error("Failed to load campaign:",r),n.notFound=!0}m(n)}function f(){const t=document.querySelector(".product-list-container");if(!t){console.error("campaign grid: .product-list-container not found — nothing inserted.");return}const e=document.createElement("rg-campaign-listing");e.setAttribute(o,""),t.insertAdjacentElement("afterend",e)}function S(t=window.location.pathname){p();const e=l(t);e?(a(),g(e)):d(t)&&(a(),f())}export{S as mountCampaignPages};
//# sourceMappingURL=pages-CcW3niR_.js.map
