var g=Object.defineProperty;var l=(i,e,t)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var s=(i,e,t)=>l(i,typeof e!="symbol"?e+"":e,t);import{B as m}from"./base-element-M0S_n-xP.js";import{f as d}from"./api-SE-tQLIe.js";import{p,a as f,m as u}from"./progress-03dKlBPE.js";import{c as h}from"./safe-DKiyyRQy.js";import{e as c}from"./format-BnO-nmXC.js";import"./runtime-config-mAo62F1c.js";const x=`
.cg-intro,
.cg-grid {
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

.cg-intro {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 0;
}

.cg-intro-text {
  flex: 1 1 320px;
  min-width: 0;
  margin: 0;
  font-size: 1.02em;
  line-height: 1.6;
  color: #5a6b7a;
}

.cg-intro-cta {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
  background: #111;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92em;
  padding: 0.75em 1.5em;
  border-radius: 999px;
  white-space: nowrap;
  transition: opacity .15s ease, transform .1s ease;
}

.cg-intro-cta:hover {
  opacity: 0.85;
}

.cg-intro-cta:active {
  transform: scale(0.98);
}

.cg-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
  gap: 1.75em;
  margin-top: 1em;
}

@media (max-width: 640px) {
  .cg-intro {
    flex-direction: column;
    align-items: stretch;
    gap: 1em;
  }
  .cg-intro-text {
    flex: 0 0 auto;
  }
  .cg-intro-cta {
    justify-content: center;
  }
  .cg-grid {
    gap: 1.25em;
  }
}

.cg-tile {
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  background: #fff;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.cg-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}

.cg-tile-image {
  aspect-ratio: 16 / 9;
  background-color: #e5e7eb;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.cg-tile-body {
  padding: 1em 1.1em 1.2em;
}

.cg-tile-title {
  margin: 0 0 0.6em;
  font-size: 1.05em;
  font-weight: 700;
  color: #16324a;
}

.cg-tile-countdown {
  font-size: 0.8em;
  color: #5a6b7a;
  margin-top: 0.5em;
}
`,b="Campaigns are pages anyone in our community can start to raise money toward a specific goal. Below are the campaigns currently active — jump in and support one, or start your own.";class w extends m{constructor(){super(`:host { display: block; }
${p}
${x}`);s(this,"stops",[])}connectedCallback(){this.setHtml(`
      <div class="cg-intro">
        <p class="cg-intro-text">${c(b)}</p>
        <a class="cg-intro-cta" href="/new-fundraising-campaign">Start a campaign →</a>
      </div>
      <div class="cg-grid"></div>`),d(null).then(t=>this.renderTiles(t)).catch(t=>console.error("Failed to load campaign grid:",t))}disconnectedCallback(){this.stops.forEach(t=>t()),this.stops=[]}renderTiles(t){const n=this.$(".cg-grid");if(n)for(const a of t){const o=document.createElement("a");o.className="cg-tile",o.href=`/fundraising-campaigns/p/${encodeURIComponent(a.slug)}`,o.innerHTML=`<div class="cg-tile-image"></div><div class="cg-tile-body"><h3 class="cg-tile-title">${c(a.name)}</h3><div class="cg-tile-progress">${f(a.raised_cents,a.goal_cents)}</div><div class="cg-tile-countdown"></div></div>`;const r=h(a.image_url);r&&(o.querySelector(".cg-tile-image").style.backgroundImage=r),n.appendChild(o),this.stops.push(u(o.querySelector(".cg-tile-countdown"),a.target_date,6e4))}}}customElements.get("rg-campaign-listing")||customElements.define("rg-campaign-listing",w);export{w as RgCampaignListing};
//# sourceMappingURL=campaign-listing-Cdub4F6s.js.map
