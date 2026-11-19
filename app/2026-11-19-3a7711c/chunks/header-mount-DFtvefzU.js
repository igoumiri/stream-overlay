const t="rg-account-slot",l=`
.${t} { display: flex; align-items: center; }
/* About the gap between two nav items on the left. None on the right: Squarespace already spaces the
   Donate button from whatever comes before it. */
.header-display-desktop .${t} { margin: 0 0 0 1.85rem; }
.header-display-mobile .${t} { margin-right: .5rem; }
/* Squarespace gives the logo block a fixed calc(100% - 50px) basis that cannot shrink (50px = the menu
   button), so with our button it would push the menu button off-screen: let the logo block give way. */
.header-display-mobile:has(> .${t}) > .header-title-nav-wrapper { flex: 1 1 0; min-width: 0; }
`;function c(){const e=document.createElement("div");return e.className=t,e.appendChild(document.createElement("rg-account-button")),e}function i(e=document){let r=0;const n=e.querySelector(".header-display-desktop .header-actions--right");n&&!n.querySelector(`.${t}`)&&(n.insertBefore(c(),n.querySelector(".header-actions-action--cta")),r++);const o=e.querySelector(".header-display-mobile"),s=o==null?void 0:o.querySelector(":scope > .header-burger");if(o&&s&&!o.querySelector(`.${t}`)&&(o.insertBefore(c(),s),r++),r&&!e.getElementById("rg-account-slot-css")){const a=e.createElement("style");a.id="rg-account-slot-css",a.textContent=l,e.head.appendChild(a)}return r}export{i as mountHeaderAccountButtons};
//# sourceMappingURL=header-mount-DFtvefzU.js.map
