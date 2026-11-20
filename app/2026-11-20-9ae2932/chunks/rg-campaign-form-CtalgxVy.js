var U=Object.defineProperty;var D=(t,n,e)=>n in t?U(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var k=(t,n,e)=>D(t,typeof n!="symbol"?n+"":n,e);import{B as R}from"./base-element-M0S_n-xP.js";import{r as I,c as T}from"./runtime-config-mAo62F1c.js";import{e as q}from"./format-BnO-nmXC.js";const P=1*1024*1024,x=["image/jpeg","image/png","image/webp"],z=10;function A(t){return t.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function y(t){return t?x.includes(t.type)?t.size>P?"Image must be under 1MB.":null:"Image must be JPEG, PNG, or WebP.":"An image is required."}function G(t,n=Date.now()){if(!t)return null;const e=new Date(t);return isNaN(e.getTime())?"Invalid end date.":e.getTime()<=n?"Campaign end date must be in the future.":null}function M(t=Date.now()){return new Date(t+3600*1e3).toISOString().slice(0,16)}function N(t){const n=t.trim();if(!n)return null;try{if(new URL(n).protocol!=="https:")return"Webhook URL should use https:// for security."}catch{return"Invalid webhook URL."}return null}function O(t){const n=[];for(const e of t){const o=e.label.trim(),l=e.url.trim();o&&l&&n.push({label:o,url:l})}return n}const W=`
:host { display: block; }
#campaign-form-root { max-width: 560px; margin: 0 auto; }
.cf-field { margin-bottom: 1.25em; display: flex; flex-direction: column; gap: 0.35em; }
.cf-field label, .cf-field legend { font-weight: 600; }
.cf-field input, .cf-field textarea { padding: 0.6em; border: 1px solid #ccc; border-radius: 4px; font: inherit; }
.cf-slug-row { display: flex; align-items: center; gap: 0.4em; }
.cf-slug-prefix { color: #666; white-space: nowrap; font-size: 0.9em; }
.cf-optional { font-weight: 400; color: #888; font-size: 0.85em; }
fieldset.cf-field { border: 1px solid #ddd; border-radius: 6px; padding: 1em; }
fieldset.cf-field input { margin-bottom: 0.5em; }
.cf-honeypot { position: absolute; left: -9999px; top: -9999px; }
.cf-error { color: #b00020; font-size: 0.9em; }
#cf-other-links .cf-other-link-row { display: flex; gap: 0.5em; margin-bottom: 0.5em; }
#cf-submit { padding: 0.75em 1.5em; font-weight: 600; cursor: pointer; font-family: inherit; }
#cf-submit:disabled { opacity: 0.6; cursor: not-allowed; }
/* Not in production (it overflowed a phone, making the page 512px wide at a 390px viewport): on a
   narrow screen the URL prefix gets its own line and the field takes the full width below it.
   Wider than 480px nothing changes. */
@media (max-width: 480px) {
  .cf-slug-row { flex-wrap: wrap; }
  .cf-slug-prefix { white-space: normal; overflow-wrap: anywhere; }
  .cf-slug-row input { flex: 1 1 100%; min-width: 0; }
}
`;function H(){try{return new URL(T.siteUrl).host.replace(/^www\./,"")}catch{return""}}class B extends R{constructor(){super(W);k(this,"otherLinkCount",0)}connectedCallback(){this.render()}render(){this.otherLinkCount=0,this.setHtml(`
    <div id="campaign-form-root">
      <form id="campaign-form" novalidate>
        <div class="cf-field">
          <label for="cf-name">Campaign name</label>
          <input id="cf-name" name="name" type="text" maxlength="100" required />
        </div>
        <div class="cf-field">
          <label for="cf-organizer-name">Your name (shown publicly on the page)</label>
          <input id="cf-organizer-name" name="organizer_name" type="text" maxlength="100" required />
        </div>
        <div class="cf-field">
          <label for="cf-slug">Campaign URL</label>
          <div class="cf-slug-row">
            <span class="cf-slug-prefix">${q(H())}/fundraising-campaigns/p/</span>
            <input id="cf-slug" name="slug" type="text" maxlength="60" pattern="[a-z0-9-]+" />
          </div>
          <small>Leave blank to auto-generate from the campaign name.</small>
        </div>
        <div class="cf-field">
          <label for="cf-description">Description</label>
          <textarea id="cf-description" name="description" rows="5" maxlength="2000" required></textarea>
        </div>
        <div class="cf-field">
          <label for="cf-goal">Goal (USD)</label>
          <input id="cf-goal" name="goal_dollars" type="number" min="1" step="1" required />
        </div>
        <div class="cf-field">
          <label for="cf-target-date">Campaign end date <span class="cf-optional">(optional)</span></label>
          <input id="cf-target-date" name="target_date" type="datetime-local" />
          <small>Leave blank for an ongoing campaign with no end date. Shown to visitors as "X days left".</small>
          <p id="cf-target-date-error" class="cf-error" hidden></p>
        </div>
        <div class="cf-field">
          <label for="cf-image">Campaign image</label>
          <input id="cf-image" name="image" type="file" accept="${x.join(",")}" required />
          <small>JPEG, PNG or WebP. 1MB max. 16:9 aspect ratio recommended.</small>
          <p id="cf-image-error" class="cf-error" hidden></p>
        </div>
        <fieldset class="cf-field">
          <legend>Social links (optional)</legend>
          <input name="twitch_url" type="url" placeholder="Twitch URL" />
          <input name="youtube_url" type="url" placeholder="YouTube URL" />
          <input name="tiktok_url" type="url" placeholder="TikTok URL" />
          <input name="instagram_url" type="url" placeholder="Instagram URL" />
          <input name="discord_url" type="url" placeholder="Discord URL" />
        </fieldset>
        <div class="cf-field">
          <div id="cf-other-links"></div>
          <button type="button" id="cf-add-link">+ Add another link</button>
        </div>
        <div class="cf-field">
          <label for="cf-webhook-url">Donation webhook URL <span class="cf-optional">(optional)</span></label>
          <input id="cf-webhook-url" name="webhook_url" type="url" maxlength="2048" placeholder="https://example.com/hooks/abc123..." />
          <small>Get a notification (e.g. in-game via a Minecraft mod) whenever your campaign receives a donation. Use HTTPS, and include a long random token in the URL (rather than a guessable path) since anyone who has this URL can trigger it — treat it like a password.</small>
          <p id="cf-webhook-url-error" class="cf-error" hidden></p>
        </div>
        <div class="cf-field">
          <label for="cf-email">Your email (not shown publicly, used only if we need to reach you)</label>
          <input id="cf-email" name="email" type="email" />
        </div>
        <!-- Honeypot: real visitors never see this field. Off-screen rather than display:none, since
             some bots skip display:none / visibility:hidden fields. -->
        <div class="cf-honeypot" aria-hidden="true">
          <label for="cf-website">Website</label>
          <input id="cf-website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <input type="hidden" name="form_rendered_at" id="cf-rendered-at" />
        <p id="cf-form-error" class="cf-error" hidden></p>
        <button type="submit" id="cf-submit">Create campaign</button>
      </form>
    </div>`),this.wire()}wire(){const e=r=>this.$(r),o=e("#campaign-form"),l=e("#cf-name"),L=e("#cf-slug"),m=e("#cf-image"),u=e("#cf-image-error"),c=e("#cf-target-date"),E=e("#cf-target-date-error"),S=e("#cf-webhook-url"),_=e("#cf-webhook-url-error"),p=e("#cf-form-error"),d=e("#cf-submit"),g=e("#cf-other-links"),i=(r,s)=>{r.hidden=!s,r.textContent=s??""};e("#cf-rendered-at").value=String(Date.now()),c.min=M(),l.addEventListener("input",()=>{L.placeholder=A(l.value)}),e("#cf-add-link").addEventListener("click",()=>{if(this.otherLinkCount>=z)return;this.otherLinkCount++;const r=document.createElement("div");r.className="cf-other-link-row",r.innerHTML='<input type="text" class="cf-other-link-label" placeholder="Label (e.g. Website)" maxlength="40" /><input type="url" class="cf-other-link-url" placeholder="https://..." /><button type="button" class="cf-remove-link">Remove</button>',r.querySelector(".cf-remove-link").addEventListener("click",()=>r.remove()),g.appendChild(r)}),m.addEventListener("change",()=>{var r;return i(u,y((r=m.files)==null?void 0:r[0]))}),o.addEventListener("submit",r=>{var w;r.preventDefault(),i(p,null);const s=y((w=m.files)==null?void 0:w[0]);if(i(u,s),s)return;const h=G(c.value);if(i(E,h),h)return;const b=N(S.value);if(i(_,b),b)return;const f=new FormData(o),C=[...g.querySelectorAll(".cf-other-link-row")].map(a=>({label:a.querySelector(".cf-other-link-label").value,url:a.querySelector(".cf-other-link-url").value}));f.set("other_links",JSON.stringify(O(C))),c.value?f.set("target_date",new Date(c.value).toISOString()):f.delete("target_date"),d.disabled=!0,d.textContent="Creating...",fetch(`${I()}/functions/v1/create-campaign`,{method:"POST",body:f}).then(async a=>{const v=await a.json();if(!a.ok)throw new Error(v.error||"Something went wrong");return v}).then(a=>{if(!a.url)throw new Error("Something went wrong");window.location.href=a.url}).catch(a=>{i(p,a instanceof Error&&a.message||"Something went wrong. Please try again."),d.disabled=!1,d.textContent="Create campaign"})})}}customElements.get("rg-campaign-form")||customElements.define("rg-campaign-form",B);export{B as RgCampaignForm};
//# sourceMappingURL=rg-campaign-form-CtalgxVy.js.map
