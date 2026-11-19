const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunks/account-dialog-CE4nBkgA.js","./chunks/preload-helper-Dp1pzeXC.js","./chunks/base-element-M0S_n-xP.js","./chunks/supabase-client-DVT62H8M.js","./chunks/runtime-config-mAo62F1c.js"])))=>i.map(i=>d[i]);
var xe=Object.defineProperty;var Se=(a,s,e)=>s in a?xe(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var u=(a,s,e)=>Se(a,typeof s!="symbol"?s+"":s,e);import{_ as je}from"./chunks/preload-helper-Dp1pzeXC.js";import{e as g,r as he}from"./chunks/sanitize-C-6oEckY.js";import{B as O}from"./chunks/base-element-M0S_n-xP.js";import{g as x}from"./chunks/supabase-client-DVT62H8M.js";import{validateAndGetSession as Ee}from"./chunks/auth-utils-BsMfo1VO.js";import"./chunks/runtime-config-mAo62F1c.js";const Te=`
:host {
  display: block; max-width: 420px; margin: 2rem auto; box-sizing: border-box; color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
*, *::before, *::after { box-sizing: border-box; }
.card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .05), 0 2px 4px -1px rgba(0, 0, 0, .03);
}
h2 { font-size: 1.35rem; font-weight: 700; margin: 0 0 .5rem; color: #0f172a; }
p { font-size: .95rem; line-height: 1.5; color: #475569; margin: 0 0 1.5rem; }
.actions { display: flex; flex-direction: column; gap: .6rem; }
button {
  width: 100%; padding: .75rem; border-radius: 6px; font: inherit; font-size: .95rem; font-weight: 600; cursor: pointer;
  transition: background-color .15s ease;
}
.primary { background: #0284c7; color: #fff; border: none; }
.primary:hover { background: #0369a1; }
.secondary { background: #fff; color: #0284c7; border: 1px solid #cbd5e1; }
.secondary:hover { background: #f1f5f9; }
`;class ge extends HTMLElement{constructor(){super(...arguments);u(this,"root",this.attachShadow({mode:"open"}))}connectedCallback(){this.render()}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("heading")||"Sign in to continue",t=this.getAttribute("message")||"Sign in to your Real Good AI account, or create one. It only takes a minute.";this.root.innerHTML=`<style>${Te}</style>
      <div class="card">
        <h2>${g(e)}</h2>
        <p>${g(t)}</p>
        <div class="actions">
          <button type="button" class="primary" data-mode="login">Sign in</button>
          <button type="button" class="secondary" data-mode="signup">Create an account</button>
        </div>
      </div>`,this.root.querySelectorAll("button[data-mode]").forEach(i=>i.addEventListener("click",async()=>{const{openAuthDialog:n}=await je(async()=>{const{openAuthDialog:r}=await import("./chunks/account-dialog-CE4nBkgA.js");return{openAuthDialog:r}},__vite__mapDeps([0,1,2,3,4]),import.meta.url);n(i.dataset.mode==="signup"?"signup":"login")}))}}u(ge,"observedAttributes",["heading","message"]);customElements.get("rg-sign-in-prompt")||customElements.define("rg-sign-in-prompt",ge);const U=(a,s)=>{const e=new Set(s);return a.filter(t=>t.active||e.has(t.slug))},W=a=>a.active?a.label:`${a.label} (retired)`;function Ae(a,s){const e=new Set(a.default_blocked_triggers||[]);return`
      <div class="account-card">
        <div class="header">
          <h2 class="title">My Account</h2>
        </div>

        <div id="status-msg" class="msg"></div>

        <form id="account-form">
          <div class="section">
            <div class="form-group">
              <label for="display-name">Display Name</label>
              <input type="text" id="display-name" value="${g(a.display_name||"")}" required />
            </div>
          </div>

          <div class="section">
            <h3 class="section-title">Default Content Avoidance (Triggers)</h3>
            <p class="section-desc">
              Stories with these themes will automatically be excluded when assigning stories to review.
              You can also customize this per event.
            </p>
            <div class="trigger-list">
              ${U(s,e).map(t=>`
                <label class="trigger-item">
                  <input type="checkbox" name="trigger" value="${g(t.slug)}" ${e.has(t.slug)?"checked":""} />
                  <div class="trigger-info">
                    <div class="trigger-label">${g(W(t))}</div>
                    ${t.description?`<div class="trigger-desc">${g(t.description)}</div>`:""}
                  </div>
                </label>
              `).join("")}
            </div>
          </div>

          <div class="section">
            <h3 class="section-title">Notifications & Updates</h3>
            <div class="checkbox-row">
              <input type="checkbox" id="email-digest" ${a.email_digest?"checked":""} />
              <label for="email-digest" style="margin:0;">
                <strong>Daily Review Digest</strong>
                <div class="trigger-desc">Receive a daily status digest when you have stories pending review.</div>
              </label>
            </div>

            <div class="checkbox-row">
              <input type="checkbox" id="newsletter-opt-in" ${a.newsletter_opt_in?"checked":""} />
              <label for="newsletter-opt-in" style="margin:0;">
                <strong>Real Good AI Newsletter</strong>
                <div class="trigger-desc">Opt-in to event announcements, results, and calls for submissions.</div>
              </label>
            </div>
          </div>

          <button type="submit" class="btn-save" id="btn-save">Save Profile Changes</button>
        </form>
      </div>
    `}const Re=`
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a1a1a;
  max-width: 600px;
  margin: 2rem auto;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.account-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.btn-secondary {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-secondary:hover {
  background: #e2e8f0;
  color: #1e293b;
}

.section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 0.5rem 0;
}

.section-desc {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 1rem 0;
}

.form-group {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.35rem;
  color: #334155;
}

input[type="text"] {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
}

input[type="text"]:focus {
  border-color: #0284c7;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
}

.trigger-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trigger-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #f1f5f9;
}

.trigger-item:hover {
  background: #f8fafc;
}

.trigger-info {
  flex: 1;
}

.trigger-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e293b;
}

.trigger-desc {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 0.15rem;
}

.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-top: 0.75rem;
}

.btn-save {
  padding: 0.75rem 1.5rem;
  background-color: #0284c7;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.btn-save:hover {
  background-color: #0369a1;
}

.msg {
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: none;
}
.msg.success {
  display: block;
  background-color: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
}
.msg.error {
  display: block;
  background-color: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}
`;class Le extends O{constructor(){super(Re);u(this,"profile",null);u(this,"triggers",[]);u(this,"loading",!0)}async connectedCallback(){await this.loadData()}async loadData(){const e=x();this.loading=!0,this.render();try{const{data:t}=await e.auth.getUser();if(!t.user){this.emit("rgai-unauthenticated");return}const{data:i,error:n}=await e.from("profiles").select("*").eq("id",t.user.id).single();if(n)throw n;this.profile=i;const{data:r,error:o}=await e.from("triggers").select("*").order("position").order("label");!o&&r&&(this.triggers=r)}catch(t){console.error("Failed to load profile:",t)}finally{this.loading=!1,this.render()}}render(){var e;if(this.loading){this.root.innerHTML='<div class="account-card"><p>Loading profile...</p></div>';return}if(!this.profile){this.root.innerHTML=`
        <div class="account-card" style="text-align: center; padding: 2.5rem 1rem;">
          <h2 class="title" style="margin-bottom: 0.5rem; font-size: 1.3rem;">Not Signed In or Session Expired</h2>
          <p style="color: #64748b; margin-bottom: 1.5rem; max-width: 420px; margin-left: auto; margin-right: auto;">
            We couldn't load your account profile. Your session may have expired or been reset. Try again, or sign out
            and back in with the account button at the top of the page.
          </p>
          <button type="button" class="btn-save" id="btn-retry-profile" style="padding: 0.65rem 1.5rem; cursor: pointer;">
            Try again
          </button>
        </div>
      `,(e=this.$("#btn-retry-profile"))==null||e.addEventListener("click",()=>void this.loadData());return}this.root.innerHTML=Ae(this.profile,this.triggers),this.bindEvents()}bindEvents(){var e;(e=this.$("#account-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault(),await this.saveProfile()})}async saveProfile(){var o,c,l;if(!this.profile)return;const e=(((o=this.$("#display-name"))==null?void 0:o.value)||"").trim(),t=((c=this.$("#email-digest"))==null?void 0:c.checked)??!0,i=((l=this.$("#newsletter-opt-in"))==null?void 0:l.checked)??!1,n=[];this.$$('input[name="trigger"]:checked').forEach(h=>{n.push(h.value)});const r=this.$("#status-msg");try{const h=x(),{error:p}=await h.from("profiles").update({display_name:e,default_blocked_triggers:n,email_digest:t,newsletter_opt_in:i}).eq("id",this.profile.id);if(p)throw p;this.profile.display_name=e,this.profile.default_blocked_triggers=n,this.profile.email_digest=t,this.profile.newsletter_opt_in=i,r&&(r.textContent="Profile updated successfully!",r.className="msg success")}catch(h){r&&(r.textContent=h instanceof Error?h.message:String(h),r.className="msg error")}}}customElements.get("rgai-account")||customElements.define("rgai-account",Le);const ze=[[/jwt expired|invalid jwt|not authenticated|authentication required/i,"Your session has expired. Please sign in again."],[/failed to fetch|networkerror|load failed/i,"Could not reach the server. Check your connection and try again."],[/permission denied|row-level security|violates row-level/i,"You do not have permission to do that."],[/duplicate key/i,"That already exists."]];function $(a,s="Something went wrong. Please try again."){const e=typeof a=="string"?a:a&&typeof a=="object"&&"message"in a?String(a.message):"";if(!e)return s;for(const[t,i]of ze)if(t.test(e))return i;return e}async function b(a,s={}){const{data:e,error:t}=await x().rpc(a,s);if(t)throw new Error($(t));return e}const Ce=a=>b("accept_round_invite",{p_round_id:a}),Me=a=>b("decline_round_invite",{p_round_id:a}),Ie=a=>b("unregister_as_judge",{p_event_id:a}),qe=(a,s,e)=>b("stop_judging",{p_event_id:a,p_reason:s,p_note:e}),Ne=(a,s)=>b("register_as_judge",{p_event_id:a,p_blocked_triggers:s}),De=(a,s)=>b("submit_review",{p_assignment_id:a,p_answers:s}),Fe=(a,s,e,t)=>b("skip_story",{p_assignment_id:a,p_reason:s,p_note:e,p_flagged_triggers:t}),Oe=(a,s,e)=>b("mark_did_not_finish",{p_assignment_id:a,p_reason:s,p_note:e}),He=(a,s,e)=>b("leave_group",{p_group_assignment_id:a,p_reason:s,p_note:e}),Be=a=>b("request_more_groups",{p_round_id:a}),Ye=a=>b("close_event_submissions",{p_event_id:a}),Ge=(a,s)=>b("draft_story_groups",{p_round_id:a,p_method:s}),be=a=>b("preview_story_groups",{p_round_id:a}),Pe=a=>b("confirm_story_groups",{p_round_id:a}),Je=a=>b("propose_first_pass_seats",{p_round_id:a}),Ue=a=>b("release_first_pass_seats",{p_round_id:a}),We=a=>b("admin_seed_round_questions",{p_round_id:a}),Qe=a=>b("admin_close_round",{p_round_id:a}),Ve=a=>b("admin_create_next_round",{p_from_round_id:a}),pe=a=>b("admin_get_groups",{p_round_id:a}),Ke=async a=>j("admin_get_seats",{p_round_id:a}),me=async a=>j("admin_get_judges",{p_round_id:a}),Xe=async a=>j("admin_get_judge_candidates",{p_round_id:a}),Ze=async a=>(await j("admin_find_user_by_email",{p_email:a}))[0]??null,K=(a,s)=>b("admin_invite_judges",{p_round_id:a,p_user_ids:s}),et=async a=>j("admin_get_triggers",{p_event_id:a}),tt=async(a=50)=>j("admin_get_trigger_changes",{p_limit:a}),st=(a,s)=>b("admin_add_trigger",{p_label:a,p_description:s}),X=(a,s)=>b("admin_update_trigger",{p_slug:a,...s.label!==void 0&&{p_label:s.label},...s.description!==void 0&&{p_description:s.description},...s.position!==void 0&&{p_position:s.position}}),Z=(a,s)=>b("admin_set_trigger_active",{p_slug:a,p_active:s}),it=a=>b("admin_delete_trigger",{p_slug:a}),nt=(a,s,e,t)=>b("admin_add_to_blocklist",{p_event_id:a,p_judge_id:s,p_slugs:e,p_opened_seats:t}),fe=a=>b("admin_get_question_form",{p_round_id:a}),at=async(a,s=30)=>j("admin_get_question_changes",{p_round_id:a,p_limit:s}),rt=(a,s)=>b("admin_add_question",{p_round_id:a,p_label:s.label,p_help_text:s.help_text,p_type:s.type,p_config:s.config,p_required:s.required,p_weight:s.weight}),ot=(a,s,e)=>b("admin_update_question",{p_question_id:a,p_expected_updated_at:s,p_changes:e}),dt=(a,s,e)=>b("admin_set_question_archived",{p_question_id:a,p_expected_updated_at:s,p_archived:e}),lt=(a,s)=>b("admin_delete_question",{p_question_id:a,p_expected_updated_at:s}),ct=(a,s)=>b("admin_reorder_questions",{p_round_id:a,p_ids:s}),ut=async a=>j("admin_get_unregistrations",{p_event_id:a}),ht=()=>b("admin_get_outbox_summary"),gt=()=>b("admin_retry_failed_emails"),bt=(a,s)=>b("admin_nudge_judge",{p_round_id:a,p_judge_id:s}),pt=a=>b("admin_remind_unopened",{p_round_id:a});async function mt(a=50){var t;const{data:s,error:e}=await x().functions.invoke("send-emails",{body:{limit:a}});if(e){const i=(t=e.context)==null?void 0:t.status;throw i===401?new Error("Only an administrator can send the emails. Sign in again and retry."):i===500?new Error("The sending failed. The email settings may be missing or wrong: see docs/email-setup.md, and look at the function logs."):new Error($(e,"The emails could not be sent. Check that the send-emails function is deployed."))}return s}const ft=async a=>j("admin_get_review_export",{p_round_id:a}),Q=async a=>j("get_group_results",{p_round_id:a}),vt=async a=>j("propose_advancement",{p_round_id:a}),H=(a,s,e,t)=>b("set_advancement",{p_round_id:a,p_story_ids:s,p_advances:e,p_note:t}),yt=(a,s,e)=>b("admin_move_story",{p_round_id:a,p_story_id:s,p_to_group_id:e}),ve=(a,s)=>b("admin_release_seat",{p_seat_id:a,p_note:s}),wt=(a,s)=>b("admin_assign_seat",{p_group_id:a,p_judge_id:s}),ee=(a,s)=>b("admin_review_trigger_report",{p_assignment_id:a,p_action:s}),$t=a=>b("admin_force_complete_group",{p_group_id:a}),_t=(a,s,e)=>b("admin_set_bonus_groups",{p_round_id:a,p_judge_id:s,p_bonus:e});async function j(a,s){return await b(a,s)??[]}const kt=`
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f172a;
  max-width: 820px;
  margin: 2rem auto;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.submit-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.title-group {
  flex: 1;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
}

.subtitle {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
  font-family: inherit;
}

.btn-primary {
  background-color: #0284c7;
  color: #ffffff;
}
.btn-primary:hover:not(:disabled) {
  background-color: #0369a1;
}

.btn-success {
  background-color: #059669;
  color: #ffffff;
}
.btn-success:hover:not(:disabled) {
  background-color: #047857;
}

.btn-secondary {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #334155;
}
.btn-secondary:hover:not(:disabled) {
  background: #e2e8f0;
  color: #0f172a;
}

.btn-danger {
  background: #fef2f2;
  border-color: #fecaca;
  color: #b91c1c;
}
.btn-danger:hover:not(:disabled) {
  background: #fee2e2;
  color: #991b1b;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Story List ── */
.story-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  background: #ffffff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.story-item:hover {
  border-color: #cbd5e1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
}

.story-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.story-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.badge-draft { background: #f1f5f9; color: #475569; }
.badge-submitted { background: #e0f2fe; color: #0369a1; }
.badge-locked { background: #f3e8ff; color: #7e22ce; }
.badge-withdrawn { background: #fee2e2; color: #b91c1c; }

.story-summary {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
  margin: 0 0 0.85rem 0;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.tag {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #64748b;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.story-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 0.85rem;
}

/* ── Form Styles ── */
.form-group {
  margin-bottom: 1.35rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.35rem;
}

.help-text {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1.5px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #0f172a;
  outline: none;
  background: #ffffff;
  transition: border-color 0.15s ease;
}

/* Our own chevron: the native one sits against the right border, whatever the padding. */
select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 2.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5l5 5 5-5' fill='none' stroke='%2364748b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.85rem center;
  background-size: 12px 8px;
}

input[type="text"]:focus,
textarea:focus,
select:focus {
  border-color: #0284c7;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
}

.trigger-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.85rem;
  border-radius: 8px;
}

.trigger-checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: #334155;
  cursor: pointer;
  padding: 0.35rem;
  border-radius: 4px;
}

.trigger-checkbox-label:hover {
  background: #f1f5f9;
}

.trigger-checkbox-label input {
  margin-top: 0.15rem;
  cursor: pointer;
}

/* ── Editor Tabs & Markdown Preview ── */
.editor-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.editor-tabs {
  display: inline-flex;
  background: #f1f5f9;
  padding: 3px;
  border-radius: 6px;
  gap: 2px;
}

.editor-tab-btn {
  background: none;
  border: none;
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  border-radius: 4px;
  cursor: pointer;
}

.editor-tab-btn.active {
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

.word-count {
  font-size: 0.78rem;
  color: #64748b;
}

.content-textarea {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  min-height: 320px;
  resize: vertical;
}

.markdown-preview {
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  padding: 1.25rem 1.75rem;
  min-height: 320px;
  background: #ffffff;
  line-height: 1.7;
  font-size: 1rem;
  color: #1e293b;
  overflow-y: auto;
}

.markdown-preview p {
  margin: 0 0 1.2em 0;
}

.markdown-preview h1,
.markdown-preview h2,
.markdown-preview h3 {
  color: #0f172a;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.markdown-preview blockquote {
  border-left: 3px solid #0284c7;
  padding-left: 1rem;
  color: #475569;
  margin: 1em 0;
}

.empty-state {
  text-align: center;
  padding: 3rem 1.5rem;
  color: #64748b;
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.alert {
  padding: 0.85rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.alert-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; }
.alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; }
.alert-warning { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; }
`;class xt extends O{constructor(){super(kt);u(this,"stories",[]);u(this,"openEvents",[]);u(this,"selectedEventId","");u(this,"triggers",[]);u(this,"mode","list");u(this,"editorTab","write");u(this,"editingStory",null);u(this,"loading",!0);u(this,"saving",!1);u(this,"statusMessage",null)}get selectedEvent(){return this.openEvents.find(e=>e.id===this.selectedEventId)}get submissionsClosed(){const e=this.selectedEvent;return e?!!e.submissions_closed||!!e.submissions_close_at&&Date.parse(e.submissions_close_at)<=Date.now():!0}closedBanner(){const e=this.selectedEvent;if(!e)return'<div class="alert alert-warning">There is no event open for submissions right now.</div>';if(this.submissionsClosed)return`<div class="alert alert-warning">🔒 Submissions for “${g(e.title)}” are closed. Your stories are read-only. If you need to withdraw one, please contact the organizers.</div>`;if(e.submissions_close_at){const t=new Date(e.submissions_close_at).toLocaleString(void 0,{dateStyle:"long",timeStyle:"short"});return`<div class="alert alert-success">Submissions are open until ${g(t)}. Stories lock when submissions close.</div>`}return""}async connectedCallback(){await this.loadInitialData()}async loadInitialData(){var e;this.loading=!0,this.render();try{const t=x(),{data:i}=await t.auth.getUser(),{data:n}=await t.from("events").select("*").eq("status","open").order("created_at",{ascending:!1});this.openEvents=n??[],this.selectedEventId=((e=this.openEvents[0])==null?void 0:e.id)??"";const{data:r}=await t.from("triggers").select("*").order("position").order("label");if(this.triggers=r??[],i!=null&&i.user){const{data:o}=await t.from("stories").select("*").eq("author_id",i.user.id).order("updated_at",{ascending:!1});this.stories=o??[]}}catch(t){console.warn("Error loading the submission portal:",t),this.statusMessage={text:$(t,"The submission portal could not be loaded."),type:"error"}}finally{this.loading=!1,this.render()}}render(){if(this.loading){this.root.innerHTML=`
        <div class="submit-card">
          <p style="text-align:center; color:#64748b;">Loading story submission portal...</p>
        </div>
      `;return}this.mode==="editor"?this.renderEditor():this.renderList()}renderList(){this.root.innerHTML=`
      <div class="submit-card">
        <div class="header">
          <div class="title-group">
            <h2 class="title">My Stories</h2>
            <p class="subtitle">Draft, preview, and submit stories for blind peer review</p>
          </div>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            ${this.submissionsClosed?"":`<button type="button" class="btn btn-primary" id="btn-create-story">
              + Write a New Story
            </button>`}
          </div>
        </div>

        ${this.statusMessage?`<div class="alert alert-${this.statusMessage.type}">${g(this.statusMessage.text)}</div>`:""}
        ${this.closedBanner()}

        <!-- Event selector -->
        <div class="form-group" style="max-width: 380px;">
          <label for="event-select">Submitting to Event:</label>
          <select id="event-select">
            ${this.openEvents.map(e=>`
              <option value="${e.id}" ${e.id===this.selectedEventId?"selected":""}>
                ${g(e.title)}
              </option>
            `).join("")}
          </select>
        </div>

        <!-- Story List -->
        ${this.stories.length===0?`
            <div class="empty-state">
              <div class="empty-icon">✍️</div>
              <p>You haven't drafted any stories for this event yet.</p>
              ${this.submissionsClosed?"":`<button type="button" class="btn btn-primary" id="btn-empty-create" style="margin-top: 0.5rem;">
                Write Your First Story
              </button>`}
            </div>
          `:`
            <div class="story-list">
              ${this.stories.map(e=>{const t=e.locked?"badge-locked":e.status==="submitted"?"badge-submitted":e.status==="withdrawn"?"badge-withdrawn":"badge-draft",i=e.locked?"🔒 Locked · In Review":e.status==="submitted"?"Submitted":e.status==="withdrawn"?"Withdrawn":"Draft";return`
                  <div class="story-item" data-id="${e.id}">
                    <div class="story-header">
                      <div>
                        <h3 class="story-title">${g(e.title)}</h3>
                        <span class="badge ${t}" style="margin-top: 0.35rem;">${i}</span>
                      </div>
                      <span class="word-count">
                        ${e.content.trim().split(/\\s+/).filter(Boolean).length} words
                      </span>
                    </div>

                    <p class="story-summary">${g(e.summary)}</p>

                    <div class="tag-list">
                      ${e.trigger_slugs.length>0?e.trigger_slugs.map(n=>{const r=this.triggers.find(o=>o.slug===n);return`<span class="tag">⚠️ ${g(r?r.label:n)}</span>`}).join(""):'<span class="tag" style="color:#059669;">No content warnings</span>'}
                    </div>

                    <div class="story-actions">
                      ${this.submissionsClosed?`<button type="button" class="btn btn-secondary btn-view" data-id="${e.id}">View Story</button>`:!e.locked&&e.status==="draft"?`
                          <button type="button" class="btn btn-secondary btn-edit" data-id="${e.id}">Edit</button>
                          <button type="button" class="btn btn-success btn-quick-submit" data-id="${e.id}">Submit for Review</button>
                          <button type="button" class="btn btn-danger btn-delete" data-id="${e.id}">Delete</button>
                        `:!e.locked&&e.status==="submitted"?`
                          <button type="button" class="btn btn-secondary btn-edit" data-id="${e.id}">Edit</button>
                          <button type="button" class="btn btn-danger btn-withdraw" data-id="${e.id}">Withdraw</button>
                        `:`
                          <button type="button" class="btn btn-secondary btn-view" data-id="${e.id}">View Story</button>
                        `}
                    </div>
                  </div>
                `}).join("")}
            </div>
          `}
      </div>
    `,this.bindListEvents()}renderEditor(){var l,h,p,m,f,v;const e=!!((l=this.editingStory)!=null&&l.id),t=!!((h=this.editingStory)!=null&&h.locked)||this.submissionsClosed,i=((p=this.editingStory)==null?void 0:p.title)||"",n=((m=this.editingStory)==null?void 0:m.summary)||"",r=((f=this.editingStory)==null?void 0:f.content)||"",o=new Set(((v=this.editingStory)==null?void 0:v.trigger_slugs)||[]),c=r.trim().split(/\s+/).filter(Boolean).length;this.root.innerHTML=`
      <div class="submit-card">
        <div class="header">
          <div class="title-group">
            <h2 class="title">${t?"View Story (Locked)":e?"Edit Story":"New Story"}</h2>
            <p class="subtitle">Stories lock when submissions close</p>
          </div>
          <button type="button" class="btn btn-secondary" id="btn-back">
            ← Back to Stories
          </button>
        </div>

        ${this.statusMessage?`<div class="alert alert-${this.statusMessage.type}">${g(this.statusMessage.text)}</div>`:""}

        ${t?'<div class="alert alert-warning">🔒 This story is locked: submissions are closed. Edits are disabled.</div>':""}

        <form id="story-form">
          <div class="form-group">
            <label for="input-title">Story Title</label>
            <input
              type="text"
              id="input-title"
              required
              maxlength="150"
              placeholder="Give your story a title..."
              value="${g(i)}"
              ${t?"disabled":""}
            />
          </div>

          <div class="form-group">
            <label for="input-summary">Synopsis / Hook</label>
            <p class="help-text">A 1–2 sentence summary shown to peer reviewers before they accept the assignment.</p>
            <textarea
              id="input-summary"
              rows="3"
              required
              maxlength="400"
              placeholder="Brief summary of the story hook..."
              ${t?"disabled":""}
            >${g(n)}</textarea>
          </div>

          <div class="form-group">
            <label>Content & Trigger Warnings</label>
            <p class="help-text">
              Select all themes present in your story. Reviewers who have added these to their blocklist will not be assigned your story.
            </p>
            <div class="trigger-grid">
              ${U(this.triggers,o).map(y=>`
                <label class="trigger-checkbox-label">
                  <input
                    type="checkbox"
                    name="trigger-tag"
                    value="${g(y.slug)}"
                    ${o.has(y.slug)?"checked":""}
                    ${t?"disabled":""}
                  />
                  <div>
                    <strong>${g(W(y))}</strong>
                    ${y.description?`<div style="font-size:0.75rem; color:#64748b;">${g(y.description)}</div>`:""}
                  </div>
                </label>
              `).join("")}
            </div>
          </div>

          <div class="form-group">
            <div class="editor-toolbar">
              <div class="editor-tabs">
                <button type="button" class="editor-tab-btn ${this.editorTab==="write"?"active":""}" id="tab-write">Write</button>
                <button type="button" class="editor-tab-btn ${this.editorTab==="preview"?"active":""}" id="tab-preview">Preview</button>
              </div>
              <span class="word-count" id="editor-word-count">${c} words</span>
            </div>

            <div id="editor-container">
              ${this.editorTab==="write"?`
                  <textarea
                    id="input-content"
                    class="content-textarea"
                    rows="16"
                    placeholder="Write or paste your story here in Markdown..."
                    ${t?"disabled":""}
                  >${g(r)}</textarea>
                `:`
                  <div class="markdown-preview" id="preview-box">
                    ${r?he(r):'<em style="color:#94a3b8;">Nothing to preview yet.</em>'}
                  </div>
                `}
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:1rem; border-top:1px solid #e2e8f0;">
            <button type="button" class="btn btn-secondary" id="btn-cancel">Cancel</button>

            ${t?"":`
                <div style="display:flex; gap:0.5rem;">
                  <button type="button" class="btn btn-secondary" id="btn-save-draft" ${this.saving?"disabled":""}>
                    ${this.saving?"Saving...":"Save Draft"}
                  </button>
                  <button type="button" class="btn btn-success" id="btn-submit-story" ${this.saving?"disabled":""}>
                    Submit for Review
                  </button>
                </div>
              `}
          </div>
        </form>
      </div>
    `,this.bindEditorEvents()}bindListEvents(){var e,t,i;(e=this.$("#btn-create-story"))==null||e.addEventListener("click",()=>this.openEditor(null)),(t=this.$("#btn-empty-create"))==null||t.addEventListener("click",()=>this.openEditor(null)),(i=this.$("#event-select"))==null||i.addEventListener("change",n=>{this.selectedEventId=n.target.value,this.render()}),this.$$(".btn-edit").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-id"),o=this.stories.find(c=>c.id===r);o&&this.openEditor(o)})}),this.$$(".btn-view").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-id"),o=this.stories.find(c=>c.id===r);o&&this.openEditor(o)})}),this.$$(".btn-quick-submit").forEach(n=>{n.addEventListener("click",async()=>{const r=n.getAttribute("data-id");r&&await this.submitStoryDirect(r)})}),this.$$(".btn-delete").forEach(n=>{n.addEventListener("click",async()=>{const r=n.getAttribute("data-id");r&&confirm("Are you sure you want to delete this draft?")&&await this.deleteStory(r)})}),this.$$(".btn-withdraw").forEach(n=>{n.addEventListener("click",async()=>{const r=n.getAttribute("data-id");r&&confirm("Withdraw this story from review consideration?")&&await this.withdrawStory(r)})})}bindEditorEvents(){var t,i,n,r,o,c;(t=this.$("#btn-back"))==null||t.addEventListener("click",()=>this.closeEditor()),(i=this.$("#btn-cancel"))==null||i.addEventListener("click",()=>this.closeEditor());const e=this.$("#input-content");e==null||e.addEventListener("input",()=>{this.editingStory&&(this.editingStory.content=e.value);const l=e.value.trim().split(/\s+/).filter(Boolean).length,h=this.$("#editor-word-count");h&&(h.textContent=`${l} words`)}),(n=this.$("#tab-write"))==null||n.addEventListener("click",()=>{this.syncEditorState(),this.editorTab="write",this.render()}),(r=this.$("#tab-preview"))==null||r.addEventListener("click",()=>{this.syncEditorState(),this.editorTab="preview",this.render()}),(o=this.$("#btn-save-draft"))==null||o.addEventListener("click",async()=>{await this.saveStory(!1)}),(c=this.$("#btn-submit-story"))==null||c.addEventListener("click",async()=>{confirm("Submit your story for peer review? You can still edit it until submissions close; then it locks.")&&await this.saveStory(!0)})}syncEditorState(){const e=this.$("#input-title"),t=this.$("#input-summary"),i=this.$("#input-content"),n=[];this.$$('input[name="trigger-tag"]:checked').forEach(r=>{n.push(r.value)}),this.editingStory||(this.editingStory={}),e&&(this.editingStory.title=e.value),t&&(this.editingStory.summary=t.value),i&&(this.editingStory.content=i.value),this.editingStory.trigger_slugs=n}openEditor(e){this.editingStory=e?{...e}:{event_id:this.selectedEventId,trigger_slugs:[]},this.editorTab="write",this.mode="editor",this.saving=!1,this.statusMessage=null,this.render()}closeEditor(){this.mode="list",this.editingStory=null,this.saving=!1,this.render()}async saveStory(e=!1){var o,c,l,h,p;this.syncEditorState();const t=(((o=this.editingStory)==null?void 0:o.title)||"").trim(),i=(((c=this.editingStory)==null?void 0:c.summary)||"").trim(),n=(((l=this.editingStory)==null?void 0:l.content)||"").trim(),r=((h=this.editingStory)==null?void 0:h.trigger_slugs)||[];if(!t||!i||!n){this.statusMessage={text:"Title, summary, and story content are all required.",type:"error"},this.render();return}this.saving=!0,this.render();try{const m=x(),{data:f}=await m.auth.getUser(),v={event_id:this.selectedEventId,title:t,summary:i,content:n,trigger_slugs:r,status:e?"submitted":"draft",submitted_at:e?new Date().toISOString():void 0,updated_at:new Date().toISOString()};if(!(f!=null&&f.user))throw new Error("Please sign in to save a story.");if(v.author_id=f.user.id,(p=this.editingStory)!=null&&p.id){const{error:y}=await m.from("stories").update(v).eq("id",this.editingStory.id);if(y)throw y}else{const{error:y}=await m.from("stories").insert(v);if(y)throw y}this.statusMessage={text:e?"Story submitted for review successfully!":"Draft saved successfully.",type:"success"},this.closeEditor(),await this.loadInitialData()}catch(m){this.statusMessage={text:$(m),type:"error"},this.render()}finally{this.saving=!1}}async submitStoryDirect(e){try{const t=x(),{data:i}=await t.auth.getUser();if(!(i!=null&&i.user))throw new Error("Please sign in to submit a story.");const{error:n}=await t.from("stories").update({status:"submitted",submitted_at:new Date().toISOString()}).eq("id",e);if(n)throw n;this.statusMessage={text:"Story submitted for review!",type:"success"},await this.loadInitialData()}catch(t){this.statusMessage={text:$(t),type:"error"},this.render()}}async deleteStory(e){try{const t=x(),{data:i}=await t.auth.getUser();if(!(i!=null&&i.user))throw new Error("Please sign in to delete a story.");const{error:n}=await t.from("stories").delete().eq("id",e);if(n)throw n;this.statusMessage={text:"Draft deleted.",type:"warning"},await this.loadInitialData()}catch(t){this.statusMessage={text:$(t),type:"error"},this.render()}}async withdrawStory(e){try{const t=x(),{data:i}=await t.auth.getUser();if(!(i!=null&&i.user))throw new Error("Please sign in to withdraw a story.");const{error:n}=await t.from("stories").update({status:"withdrawn"}).eq("id",e);if(n)throw n;this.statusMessage={text:"Story withdrawn from review.",type:"warning"},await this.loadInitialData()}catch(t){this.statusMessage={text:$(t),type:"error"},this.render()}}}customElements.get("rgai-submit")||customElements.define("rgai-submit",xt);function N(a){const s=a.config;return{min:Number.isFinite(s==null?void 0:s.min)?s.min:0,max:Number.isFinite(s==null?void 0:s.max)?s.max:10,minLabel:(s==null?void 0:s.min_label)??"",maxLabel:(s==null?void 0:s.max_label)??""}}function E(a){var e;const s=(e=a.config)==null?void 0:e.options;return Array.isArray(s)?s.map(String):[]}function ye(a,s){return s==null?!0:typeof s=="string"&&(a.type==="short_text"||a.type==="long_text")?s.trim()==="":Array.isArray(s)&&a.type==="multi_choice"?s.length===0:!1}function St(a,s){if(ye(a,s))return a.required?"Please answer this question.":null;switch(a.type){case"scale":{const{min:e,max:t}=N(a);return typeof s=="number"&&s>=e&&s<=t?null:`Choose a score from ${e} to ${t}.`}case"single_choice":return typeof s=="string"&&E(a).includes(s)?null:"Choose one of the options.";case"multi_choice":return Array.isArray(s)&&s.every(e=>E(a).includes(String(e)))?null:"Choose from the options.";case"boolean":return typeof s=="boolean"?null:"Choose yes or no.";case"short_text":case"long_text":return typeof s=="string"&&s.length<=2e4?null:"That answer is too long.";default:return"This question type is not supported."}}function te(a,s){const e={};for(const t of a){if(t.archived)continue;const i=St(t,s[t.id]);i&&(e[t.id]=i)}return e}const jt=a=>({id:a.id,position:a.position,label:a.label,help_text:a.help_text??null,type:a.type,config:a.config,required:a.required});function Et(a,s){const e=t=>JSON.stringify([...t].filter(i=>!i.archived).sort((i,n)=>i.id.localeCompare(n.id)).map(jt));return e(a)!==e(s)}function Tt(a,s){const e=new Set(a.filter(t=>!t.archived).map(t=>t.id));return Object.fromEntries(Object.entries(s).filter(([t])=>e.has(t)))}function At(a,s){const e={};for(const t of a){if(t.archived)continue;const i=s[t.id];ye(t,i)||(e[t.id]=typeof i=="string"?i.trim():i)}return e}const Rt=[{value:"too_long",label:"It is too long for me"},{value:"lost_interest",label:"I lost interest"},{value:"unreadable",label:"It is hard to read or broken"},{value:"other",label:"Another reason"}],B=[{value:"undeclared_trigger",label:"It has a content warning the author did not declare",needsTriggers:!0},{value:"misdeclared_trigger",label:"It does not have a content warning the author declared",needsTriggers:!0},{value:"conflict_of_interest",label:"Conflict of interest (for example I recognize the author)",needsTriggers:!1}],we="rgai_review_draft:",$e=720*60*60*1e3,V=a=>`${we}${a}`;function se(a,s,e,t=Date.now()){if(a)try{a.setItem(V(s),JSON.stringify({v:1,savedAt:t,answers:e}))}catch{}}function Lt(a,s,e,t=Date.now()){if(!a)return{};try{const i=a.getItem(V(s));if(!i)return{};const n=JSON.parse(i);if((n==null?void 0:n.v)!==1||typeof n.savedAt!="number"||t-n.savedAt>$e||typeof n.answers!="object"||!n.answers)return{};const r=new Set(e.filter(o=>!o.archived).map(o=>o.id));return Object.fromEntries(Object.entries(n.answers).filter(([o])=>r.has(o)))}catch{return{}}}function Y(a,s){try{a==null||a.removeItem(V(s))}catch{}}function zt(a,s=Date.now()){if(a)try{const e=[];for(let t=0;t<a.length;t++){const i=a.key(t);if(i!=null&&i.startsWith(we))try{const n=JSON.parse(a.getItem(i)??"").savedAt;(typeof n!="number"||s-n>$e)&&e.push(i)}catch{e.push(i)}}e.forEach(t=>a.removeItem(t))}catch{}}function L(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}const Ct=`
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f172a;
  max-width: 900px;
  margin: 2rem auto;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.review-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.title-group {
  flex: 1;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
}

.subtitle {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.badge-info { background: #e0f2fe; color: #0369a1; }
.badge-success { background: #dcfce7; color: #15803d; }
.badge-warning { background: #fef3c7; color: #b45309; }
.badge-danger { background: #fee2e2; color: #b91c1c; }
.badge-secondary { background: #f1f5f9; color: #475569; }

.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.85rem 1.25rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.status-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.status-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
  font-family: inherit;
  text-decoration: none;
}

.btn-sm {
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
}

.btn-primary {
  background-color: #0284c7;
  color: #ffffff;
}
.btn-primary:hover:not(:disabled) { background-color: #0369a1; }

.btn-success {
  background-color: #059669;
  color: #ffffff;
}
.btn-success:hover:not(:disabled) { background-color: #047857; }

.btn-secondary {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #334155;
}
.btn-secondary:hover:not(:disabled) {
  background: #e2e8f0;
  color: #0f172a;
}

.btn-danger-outline {
  background: transparent;
  border-color: #fca5a5;
  color: #dc2626;
}
.btn-danger-outline:hover:not(:disabled) {
  background: #fef2f2;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.alert {
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.alert-info { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; }
.alert-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; }
.alert-warning { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; }

.trigger-tag {
  display: inline-flex;
  align-items: center;
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 0.35rem;
  margin-bottom: 0.35rem;
}

.trigger-tag-neutral {
  background: #f1f5f9;
  color: #475569;
  border-color: #e2e8f0;
}

.stories-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.15s ease;
  background: #ffffff;
}

.story-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}

.story-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;
}

.story-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
}

.story-summary {
  font-size: 0.875rem;
  color: #475569;
  margin: 0.5rem 0;
  line-height: 1.45;
}

/* Reader & Form Screen */
.reader-screen {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.reader-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.story-content-box {
  background: #fdfdfd;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  max-height: 500px;
  overflow-y: auto;
  line-height: 1.7;
  font-size: 1rem;
  color: #1e293b;
}

.story-content-box p {
  margin-top: 0;
  margin-bottom: 1.25rem;
}

.form-section {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.form-section-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 1rem 0;
}

.question-block {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.question-block:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.question-label {
  display: block;
  font-weight: 600;
  font-size: 0.925rem;
  color: #0f172a;
  margin-bottom: 0.35rem;
}

.question-weight {
  display: inline-block;
  background: #fef3c7;
  color: #92400e;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  margin-left: 0.5rem;
}

.question-help {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 0.65rem;
}

.scale-buttons {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.scale-btn {
  flex: 1;
  min-width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.scale-btn:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
}

.scale-btn.selected {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
}

.scale-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.35rem;
}

.textarea-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
  resize: vertical;
  min-height: 100px;
}
.textarea-field:focus {
  outline: none;
  border-color: #0284c7;
  box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.15);
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
}

/* Modals */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.75rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #0f172a;
}

.modal-desc {
  font-size: 0.875rem;
  color: #475569;
  margin-bottom: 1.25rem;
  line-height: 1.45;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.q-error { color: #b91c1c; font-size: 0.8rem; margin-top: 0.35rem; font-weight: 600; }
.question-block.has-error { border-color: #fca5a5; }
.badge-dnf { background: #ede9fe; color: #6d28d9; }
.link-btn { background: none; border: none; padding: 0; color: #475569; text-decoration: underline; cursor: pointer; font-size: 0.8rem; }
.readonly-answer { font-weight: 600; color: #0f172a; }
.choice-list { display: flex; flex-direction: column; gap: 0.5rem; }
`;class Mt extends O{constructor(){super(Ct);u(this,"event",null);u(this,"round",null);u(this,"triggers",[]);u(this,"isRegistered",!1);u(this,"judgeNumber",null);u(this,"blockedTriggers",[]);u(this,"pendingInvites",[]);u(this,"inRound",!1);u(this,"editingFilters",!1);u(this,"activeGroupData",null);u(this,"detail",null);u(this,"answers",{});u(this,"problems",{});u(this,"modal",null);u(this,"judgeExit",null);u(this,"loading",!0);u(this,"loadError",null);u(this,"busy",!1);u(this,"feedback",null)}connectedCallback(){this.load()}async load(){this.loading=!0,this.loadError=null,this.render();try{const e=x(),t=await e.from("triggers").select("*").order("position").order("label");if(t.error)throw t.error;this.triggers=t.data??[];const i=await e.from("events").select("*").eq("status","open").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(i.error)throw i.error;if(this.event=i.data,this.round=null,this.activeGroupData=null,this.pendingInvites=[],this.inRound=!1,this.event){const n=await b("get_my_judge_profile",{p_event_id:this.event.id});this.round=(n==null?void 0:n.round)??null,this.isRegistered=!!(n!=null&&n.is_registered),this.judgeNumber=(n==null?void 0:n.judge_number)??null,this.blockedTriggers=(n==null?void 0:n.blocked_triggers)??[],this.pendingInvites=(n==null?void 0:n.pending_invites)??[],this.judgeExit=(n==null?void 0:n.judge_exit)??null,this.inRound=!!(n!=null&&n.round_judge&&n.round_judge.accepted_at),this.isRegistered&&this.round&&this.inRound&&(this.activeGroupData=await b("get_my_active_group",{p_round_id:this.round.id}))}}catch(e){console.warn("Error loading the review dashboard:",e),this.loadError=$(e,"The review dashboard could not be loaded.")}finally{this.loading=!1,this.render()}}async act(e){this.busy=!0,this.render();try{await e()}catch(t){this.feedback={type:"error",text:$(t)}}finally{this.busy=!1,this.render()}}register(e){return this.act(async()=>{this.event&&(await Ne(this.event.id,e),this.editingFilters=!1,this.feedback={type:"success",text:this.isRegistered?"Your content filters are saved.":"You are registered as a judge!"},await this.load())})}answerInvite(e,t){if(!(!t&&!confirm(`Decline the invitation to ${e.name}? You can ask the organizers to invite you again.`)))return this.act(async()=>{t?await Ce(e.round_id):await Me(e.round_id),this.feedback=t?{type:"success",text:`You are in ${e.name}. Thank you! Your group will appear here once the stories are grouped.`}:{type:"info",text:`You declined ${e.name}.`},await this.load()})}async openStory(e){this.loading=!0,this.render();try{const t=await b("get_assignment_detail",{p_assignment_id:e});if(this.detail=t,this.answers={...t.assignment.answers??{}},this.problems={},this.feedback=null,t.assignment.status==="assigned"){zt(L());const i=Lt(L(),e,t.questions);Object.keys(i).length&&(this.answers={...this.answers,...i},this.feedback={type:"info",text:"Your unfinished answers were restored."})}}catch(t){this.detail=null,this.feedback={type:"error",text:$(t,"This story could not be opened.")}}finally{this.loading=!1,this.render()}}async backToGroup(e=!0){this.detail=null,this.modal=null,this.problems={},e?await this.load():this.render()}submit(){if(this.detail){if(this.problems=te(this.detail.questions,this.answers),Object.keys(this.problems).length){this.feedback={type:"error",text:"Please fix the highlighted questions."},this.render();return}this.act(async()=>{try{await De(this.detail.assignment.id,At(this.detail.questions,this.answers))}catch(e){if(await this.reloadChangedForm())return;throw e}Y(L(),this.detail.assignment.id),this.feedback={type:"success",text:"Review submitted. Thank you!"},await this.backToGroup()})}}async reloadChangedForm(){const e=this.detail;if(!e)return!1;let t;try{t=await b("get_assignment_detail",{p_assignment_id:e.assignment.id})}catch{return!1}return Et(e.questions,t.questions)?(this.detail={...e,questions:t.questions},this.answers=Tt(t.questions,this.answers),se(L(),e.assignment.id,this.answers),this.problems=te(t.questions,this.answers),this.feedback={type:"info",text:"The organizers changed the review form while you were working. Your answers are kept; please check the highlighted questions and submit again."},!0):!1}requestMore(){this.act(async()=>{if(!this.round)return;const e=await Be(this.round.id);this.feedback=e.seated_immediately?{type:"success",text:"Another group of stories is on your dashboard."}:{type:"info",text:"You're on the list for another group. It will appear here as soon as one is free."},await this.load()})}resume(){this.act(async()=>{this.round&&(await b("resume_reviewing",{p_round_id:this.round.id}),this.feedback={type:"success",text:"Welcome back! Reviewing resumed."},await this.load())})}render(){var e;if(this.loading){this.root.innerHTML='<div class="review-card" style="text-align: center; padding: 3rem 1rem;"><div style="font-size: 1.1rem; color: #64748b; font-weight: 500;">Loading…</div></div>';return}if(this.loadError){this.root.innerHTML=`<div class="review-card" style="text-align: center; padding: 3rem 1rem;"><h2 style="color: #991b1b;">The review dashboard could not be loaded</h2><p style="color: #64748b;">${g(this.loadError)}</p><button type="button" class="btn btn-secondary btn-retry">Try again</button></div>`,(e=this.$(".btn-retry"))==null||e.addEventListener("click",()=>void this.load());return}if(!this.event){this.root.innerHTML='<div class="review-card"><div class="alert alert-info">There is no event open for judging right now. Please check back later.</div></div>';return}this.detail?this.renderReader():!this.isRegistered||this.editingFilters?this.renderRegistration():this.renderDashboard()}feedbackHtml(){return this.feedback?`<div class="alert alert-${this.feedback.type}">${g(this.feedback.text)}</div>`:""}get filtersEditable(){return!this.round||this.round.status==="planned"||this.round.status==="closed"}renderRegistration(){var t,i,n;const e=this.filtersEditable||!this.isRegistered;this.root.innerHTML=`
      <div class="review-card">
        <div class="header">
          <div class="title-group">
            <h1 class="title">${this.isRegistered?"My content filters":"Judge Registration"}</h1>
            <p class="subtitle">${g(((t=this.event)==null?void 0:t.title)||"Story Crowd-Review")}</p>
          </div>
          <span class="badge badge-info">${this.isRegistered?"Registered judge":"Open for judges"}</span>
        </div>
        ${this.feedbackHtml()}
        ${this.isRegistered?"":`<div class="alert alert-info"><strong>How crowd-reviewing works:</strong>
          <p style="margin: 0.5rem 0 0 0;">Volunteer judges get a group of 5 stories to read and score once submissions close. Reviews are blind: author names are never shown. Your scores decide which stories move on.</p></div>`}
        <div style="margin: 1.5rem 0;">
          <label style="display: block; font-weight: 700; margin-bottom: 0.5rem; color: #0f172a;">Themes I do not want to read (my blocklist)</label>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 0; margin-bottom: 1rem;">
            You will never get a group that contains these themes.
            ${e?"You can change this until the stories of a round are grouped.":"Grouping has started, so you can no longer change the filters yourself until this round is over. If you need to avoid another theme, ask an organizer: they can add it for you."}
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${U(this.triggers,this.blockedTriggers).map(r=>`
              <label style="display: flex; align-items: flex-start; gap: 0.65rem; ${e?"cursor: pointer;":""}">
                <input type="checkbox" class="trigger-cb" value="${g(r.slug)}" ${this.blockedTriggers.includes(r.slug)?"checked":""} ${e?"":"disabled"} style="margin-top: 0.2rem;" />
                <div><div style="font-weight: 600; font-size: 0.9rem; color: #0f172a;">${g(W(r))}</div>
                ${r.description?`<div style="font-size: 0.8rem; color: #64748b;">${g(r.description)}</div>`:""}</div>
              </label>`).join("")}
          </div>
        </div>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 1.25rem; display: flex; justify-content: flex-end; gap: 0.75rem;">
          ${this.isRegistered?'<button type="button" class="btn btn-secondary btn-cancel-filters">Back</button>':""}
          ${e?`<button type="button" class="btn btn-primary btn-register" ${this.busy?"disabled":""}>${this.isRegistered?"Save my filters":this.busy?"Registering…":"Register as a judge"}</button>`:""}
        </div>
      </div>`,(i=this.$(".btn-register"))==null||i.addEventListener("click",()=>{this.blockedTriggers=Array.from(this.$$(".trigger-cb:checked")).map(r=>r.value),this.register(this.blockedTriggers)}),(n=this.$(".btn-cancel-filters"))==null||n.addEventListener("click",()=>{this.editingFilters=!1,this.feedback=null,this.render()})}statusBadge(e){switch(e.status){case"submitted":return'<span class="badge badge-success">Reviewed</span>';case"skipped":return'<span class="badge badge-warning">Skipped</span>';case"dnf":return'<span class="badge badge-dnf">Did not finish</span>';default:return'<span class="badge badge-secondary">Not started</span>'}}waitingMessage(){var t,i,n;const e=(t=this.round)==null?void 0:t.status;return this.round?!this.inRound&&this.round.number>1?`You are not judging ${this.round.name}. Thank you for your earlier reviews! If you are invited to a round, the invitation appears at the top of this page and in your email.`:this.inRound&&this.round.number>1&&e!=="reviewing"&&e!=="closed"?`You are in ${this.round.name}. Your group will appear here once the stories are grouped and the groups are released.`:e==="closed"?"This round of reviewing is closed. Thank you for your help!":e==="reviewing"?(n=(i=this.activeGroupData)==null?void 0:i.round_judge)!=null&&n.more_requested_at?"You're on the list for a group. It will appear here as soon as one is free.":"No group has been assigned to you yet. If you are eligible for one, it will appear here.":"Submissions are still underway. Once the stories are grouped and the groups are released, your group will appear here.":"The review round has not been set up yet. Please check back soon."}renderDashboard(){var l,h,p,m,f,v,y,w,T,_,z,M;const e=(l=this.activeGroupData)==null?void 0:l.round_judge,t=(e==null?void 0:e.intake)==="paused",i=(h=this.activeGroupData)==null?void 0:h.progress,n=this.activeGroupData,r=!!(n!=null&&n.has_group&&n.group),o=((p=n==null?void 0:n.group_assignment)==null?void 0:p.status)==="assigned",c=((m=this.round)==null?void 0:m.status)==="reviewing"&&this.inRound;this.root.innerHTML=`
      <div class="review-card">
        <div class="header">
          <div class="title-group">
            <h1 class="title">Judge Dashboard</h1>
            <p class="subtitle">${g(((f=this.event)==null?void 0:f.title)||"")}${this.round&&this.round.number>1?` · ${g(this.round.name)}`:""}</p>
          </div>
          <span class="badge badge-success">Judge #${this.judgeNumber??""}</span>
        </div>
        ${this.feedbackHtml()}
        ${this.invitesHtml()}
        <div class="status-bar">
          <div class="status-info">
            ${this.inRound?`<span class="badge ${t?"badge-warning":"badge-info"}">Reviewing: ${t?"paused":"active"}</span>`:'<span class="badge badge-secondary">Not in this round</span>'}
            ${i?`<span style="font-size: 0.875rem; font-weight: 600; color: #334155;">${i.done} of ${i.total} stories done</span>`:""}
          </div>
          <div class="status-actions">
            ${n!=null&&n.can_request_more&&c?`<button type="button" class="btn btn-success btn-sm btn-more" ${this.busy?"disabled":""}>✨ Send me another group</button>`:""}
            ${this.inRound?t?`<button type="button" class="btn btn-secondary btn-sm btn-resume" ${this.busy?"disabled":""}>I'm back</button>`:c?'<button type="button" class="btn btn-secondary btn-sm btn-pause">No more please</button>':"":""}
          </div>
        </div>
        ${r?this.groupHtml(o):`
          <div style="text-align: center; padding: 2rem 1rem;">
            <div style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">${((v=this.round)==null?void 0:v.status)==="reviewing"&&this.inRound?"Waiting for a group":"You're all set"}</div>
            <p style="color: #64748b; font-size: 0.95rem; max-width: 520px; margin: 0 auto 1.25rem auto; line-height: 1.5;">${g(this.waitingMessage())}</p>
          </div>`}
        <div style="border-top: 1px solid #e2e8f0; margin-top: 1rem; padding-top: 1rem; font-size: 0.85rem; color: #475569;">
          My content filters:
          ${this.blockedTriggers.length?this.blockedTriggers.map(k=>{var S;return`<span class="trigger-tag">${g(((S=this.triggers.find(I=>I.slug===k))==null?void 0:S.label)??k)}</span>`}).join(""):'<span style="color:#059669; font-weight:600;">none, every theme is fine</span>'}
          <button type="button" class="link-btn btn-edit-filters" style="margin-left: 0.5rem;">${this.filtersEditable?"Change":"View"}</button>
          ${this.judgeExit?`<div style="margin-top: 0.6rem;">Not able to judge any more?
            <button type="button" class="link-btn btn-exit" style="margin-left: 0.25rem;">${this.judgeExit==="unregister"?"Unregister as a judge":"Stop judging"}</button></div>`:""}
        </div>
      </div>
      <div id="modal-container"></div>`,this.renderModal(),this.$$(".btn-accept-invite").forEach(k=>k.addEventListener("click",()=>{const S=this.pendingInvites.find(I=>I.round_id===k.getAttribute("data-round"));S&&this.answerInvite(S,!0)})),this.$$(".btn-decline-invite").forEach(k=>k.addEventListener("click",()=>{const S=this.pendingInvites.find(I=>I.round_id===k.getAttribute("data-round"));S&&this.answerInvite(S,!1)})),(y=this.$(".btn-more"))==null||y.addEventListener("click",()=>this.requestMore()),(w=this.$(".btn-resume"))==null||w.addEventListener("click",()=>this.resume()),(T=this.$(".btn-pause"))==null||T.addEventListener("click",()=>{this.modal="pause",this.renderModal()}),(_=this.$(".btn-exit"))==null||_.addEventListener("click",()=>{this.modal=this.judgeExit==="unregister"?"unregister":"stop",this.renderModal()}),(z=this.$(".btn-leave"))==null||z.addEventListener("click",()=>{this.modal="leave",this.renderModal()}),(M=this.$(".btn-edit-filters"))==null||M.addEventListener("click",()=>{this.editingFilters=!0,this.feedback=null,this.render()}),this.$$(".btn-open-story").forEach(k=>k.addEventListener("click",()=>{const S=k.getAttribute("data-id");S&&this.openStory(S)}))}invitesHtml(){if(!this.pendingInvites.length)return"";const e=this.filtersEditable;return this.pendingInvites.map(t=>`
      <div class="alert alert-info" style="display:flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <div><strong>You are invited to judge ${g(t.name)}.</strong>
          <div style="font-size: 0.85rem; margin-top: 0.25rem;">${e?"Check your content filters below first if you like: they can still be changed. ":""}You only get stories once you accept.</div></div>
        <div style="display:flex; gap: 0.5rem;">
          <button type="button" class="btn btn-primary btn-sm btn-accept-invite" data-round="${g(t.round_id)}" ${this.busy?"disabled":""}>Accept</button>
          <button type="button" class="btn btn-secondary btn-sm btn-decline-invite" data-round="${g(t.round_id)}" ${this.busy?"disabled":""}>No thanks</button>
        </div>
      </div>`).join("")}groupHtml(e){var i,n,r;const t=this.activeGroupData;return`
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <h2 style="font-size: 1.15rem; font-weight: 700; margin: 0; color: #0f172a;">Story group #${(i=t.group)==null?void 0:i.number}</h2>
          <div style="font-size: 0.8rem; color: #64748b;">Content warnings in this group:
            ${(r=(n=t.group)==null?void 0:n.trigger_slugs)!=null&&r.length?t.group.trigger_slugs.map(o=>{var c;return`<span class="trigger-tag">${g(((c=this.triggers.find(l=>l.slug===o))==null?void 0:c.label)??o)}</span>`}).join(""):'<span class="trigger-tag trigger-tag-neutral">none</span>'}
          </div>
        </div>
        <div class="stories-list">
          ${(t.stories??[]).map((o,c)=>`
            <div class="story-card">
              <div class="story-header">
                <div><div style="font-size: 0.8rem; font-weight: 700; color: #64748b; margin-bottom: 0.2rem;">STORY ${c+1}</div><h3 class="story-title">${g(o.title)}</h3></div>
                ${this.statusBadge(o)}
              </div>
              <p class="story-summary">${g(o.summary)}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                <div>${o.trigger_slugs.map(l=>{var h;return`<span class="trigger-tag">${g(((h=this.triggers.find(p=>p.slug===l))==null?void 0:h.label)??l)}</span>`}).join("")}</div>
                ${o.status==="assigned"?`<button type="button" class="btn btn-primary btn-sm btn-open-story" data-id="${g(o.assignment_id)}">Read &amp; score</button>`:o.status==="submitted"?`<button type="button" class="btn btn-secondary btn-sm btn-open-story" data-id="${g(o.assignment_id)}">View my review</button>`:""}
              </div>
            </div>`).join("")}
        </div>
        ${e?'<div style="text-align:right; margin-top: 0.75rem;"><button type="button" class="link-btn btn-leave">I cannot do this group</button></div>':""}
      </div>`}renderReader(){var n,r,o,c;const e=this.detail,t=e.assignment.status!=="assigned",i=[...e.questions].sort((l,h)=>l.position-h.position);this.root.innerHTML=`
      <div class="review-card">
        <div class="reader-header">
          <button type="button" class="btn btn-secondary btn-sm btn-back">← Back to my group</button>
          ${t?"":`<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-secondary btn-sm btn-dnf">I could not finish it</button>
            <button type="button" class="btn btn-danger-outline btn-sm btn-skip">Skip: trigger or conflict</button></div>`}
        </div>
        ${this.feedbackHtml()}
        <div style="margin: 1.5rem 0;">
          <h2 style="font-size: 1.4rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem 0;">${g(e.story.title)}</h2>
          <div style="margin-bottom: 1rem;">${e.story.trigger_slugs.map(l=>{var h;return`<span class="trigger-tag">${g(((h=this.triggers.find(p=>p.slug===l))==null?void 0:h.label)??l)}</span>`}).join("")}</div>
          <div class="story-content-box">${he(e.story.content)}</div>
        </div>
        <div class="form-section">
          <h3 class="form-section-title">Your review</h3>
          ${i.map(l=>`
            <div class="question-block ${this.problems[l.id]?"has-error":""}" data-qid="${g(l.id)}">
              <label class="question-label">${g(l.label)} ${l.required?'<span style="color: #dc2626;">*</span>':""}</label>
              ${l.help_text?`<div class="question-help">${g(l.help_text)}</div>`:""}
              ${this.questionInput(l,t)}
              ${this.problems[l.id]?`<div class="q-error">${g(this.problems[l.id])}</div>`:""}
            </div>`).join("")}
          ${t?"":`<div style="margin-top: 1.5rem; display: flex; justify-content: flex-end;">
            <button type="button" class="btn btn-primary btn-submit-review" ${this.busy?"disabled":""}>${this.busy?"Submitting…":"Submit review"}</button></div>`}
        </div>
      </div>
      <div id="modal-container"></div>`,this.renderModal(),(n=this.$(".btn-back"))==null||n.addEventListener("click",()=>void this.backToGroup()),(r=this.$(".btn-skip"))==null||r.addEventListener("click",()=>{this.modal="skip",this.renderModal()}),(o=this.$(".btn-dnf"))==null||o.addEventListener("click",()=>{this.modal="dnf",this.renderModal()}),(c=this.$(".btn-submit-review"))==null||c.addEventListener("click",()=>this.submit()),t||this.bindQuestionInputs()}questionInput(e,t){const i=this.answers[e.id],n=t?"disabled":"",r=g(e.id);switch(e.type){case"scale":{const{min:o,max:c,minLabel:l,maxLabel:h}=N(e),p=[];for(let m=o;m<=c;m++)p.push(`<button type="button" class="scale-btn ${i===m?"selected":""}" data-qid="${r}" data-val="${m}" ${n}>${m}</button>`);return`<div class="scale-buttons">${p.join("")}</div><div class="scale-labels"><span>${g(l)}</span><span>${g(h)}</span></div>`}case"single_choice":return`<div class="radio-group">${E(e).map(o=>`<label class="radio-option"><input type="radio" class="radio-input" name="${r}" value="${g(o)}" ${i===o?"checked":""} ${n} /><span>${g(o)}</span></label>`).join("")}</div>`;case"multi_choice":{const o=Array.isArray(i)?i.map(String):[];return`<div class="choice-list">${E(e).map(c=>`<label class="radio-option"><input type="checkbox" class="multi-input" data-qid="${r}" value="${g(c)}" ${o.includes(c)?"checked":""} ${n} /><span>${g(c)}</span></label>`).join("")}</div>`}case"boolean":return`<div class="radio-group">${[["yes",!0],["no",!1]].map(([o,c])=>`<label class="radio-option"><input type="radio" class="bool-input" name="${r}" data-qid="${r}" value="${o}" ${i===c?"checked":""} ${n} /><span>${o==="yes"?"Yes":"No"}</span></label>`).join("")}</div>`;case"short_text":return`<input type="text" class="textarea-field text-input" style="min-height:auto; height: 40px;" data-qid="${r}" maxlength="500" value="${g(String(i??""))}" ${n} />`;default:return`<textarea class="textarea-field text-input" data-qid="${r}" placeholder="${t?"":"Thoughtful, constructive feedback helps the author…"}" ${n}>${g(String(i??""))}</textarea>`}}bindQuestionInputs(){const e=(t,i)=>{t&&(this.answers[t]=i,delete this.problems[t],this.detail&&se(L(),this.detail.assignment.id,this.answers))};this.$$(".scale-btn").forEach(t=>t.addEventListener("click",()=>{var i;e(t.getAttribute("data-qid"),Number(t.getAttribute("data-val"))),(i=t.closest(".question-block"))==null||i.querySelectorAll(".scale-btn").forEach(n=>n.classList.remove("selected")),t.classList.add("selected")})),this.$$(".radio-input").forEach(t=>t.addEventListener("change",()=>e(t.name,t.value))),this.$$(".bool-input").forEach(t=>t.addEventListener("change",()=>e(t.getAttribute("data-qid"),t.value==="yes"))),this.$$(".multi-input").forEach(t=>t.addEventListener("change",()=>{const i=t.getAttribute("data-qid");e(i,Array.from(this.$$(".multi-input:checked")).filter(n=>n.getAttribute("data-qid")===i).map(n=>n.value))})),this.$$(".text-input").forEach(t=>t.addEventListener("input",()=>e(t.getAttribute("data-qid"),t.value)))}renderModal(){var c,l;const e=this.$("#modal-container");if(!e)return;if(!this.modal){e.innerHTML="";return}const t=(h,p,m,f,v=!1)=>`
      <div class="modal-overlay"><div class="modal">
        <h3 class="modal-title">${h}</h3><p class="modal-desc">${p}</p>
        ${m}
        <div id="modal-error" class="q-error"></div>
        <div class="modal-footer"><button type="button" class="btn btn-secondary btn-sm btn-cancel-modal">Cancel</button>
        <button type="button" class="btn ${v?"btn-danger-outline":"btn-primary"} btn-sm btn-confirm-modal">${f}</button></div>
      </div></div>`,i=(h,p,m=!0)=>`<div style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom: 1rem;">${p.map((f,v)=>`<label style="display:flex; gap:0.5rem; align-items:flex-start; cursor:pointer;"><input type="radio" name="${h}" value="${f.value}" ${m&&v===0?"checked":""} /><span style="font-size:0.9rem; font-weight:600;">${g(f.label)}</span></label>`).join("")}</div>`,n=(h,p)=>`<textarea class="textarea-field" id="${h}" placeholder="${g(p)}"></textarea>`;this.modal==="skip"?e.innerHTML=t("Skip this story","Use this when the story has a content warning that is wrong or missing, or you have a conflict of interest. A skipped story counts as done for you. An organizer looks at trigger reports.",i("reason",B)+`<div id="flag-box"><div style="font-size:0.85rem; font-weight:600; margin-bottom:0.4rem;">Which themes?</div><div style="display:flex; flex-wrap:wrap; gap:0.5rem 1rem; margin-bottom:1rem;">${this.triggers.filter(h=>h.active).map(h=>`<label style="font-size:0.85rem;"><input type="checkbox" class="flag-cb" value="${g(h.slug)}" /> ${g(h.label)}</label>`).join("")}</div></div>`+n("note","Optional note for the organizers"),"Skip this story",!0):this.modal==="dnf"?e.innerHTML=t("I could not finish this story","It counts as done for you, and you can ask for another group. It is not scored, and the organizers see how many readers could not finish a story.",i("reason",Rt)+n("note","Optional note"),"Mark as not finished"):this.modal==="leave"?e.innerHTML=t("Give this group back","The stories you have not reviewed go back to the pool for other judges. Reviews you already submitted stay.",i("reason",[{value:"no_time",label:"I do not have the time"},{value:"lost_interest",label:"I lost interest"},{value:"content",label:"The content is not for me"},{value:"other",label:"Another reason"}])+n("note","Optional note"),"Give it back",!0):this.modal==="unregister"?e.innerHTML=t("Unregister as a judge","Reviewing has not started, so nobody has read anything yet. Your registration for this event, your content filters for it and any group proposed for you are removed, and you will get no stories. Your own stories are not touched. You can register again until reviewing starts; you would get a new judge number.","","Unregister",!0):this.modal==="stop"?e.innerHTML=t("Stop judging","You give back the group you have not finished (the reviews you already submitted stay and count), no new groups are assigned to you, your reminder emails that are waiting are cancelled, and invitations you have not accepted are declined. You stay registered: “I'm back” brings you back, as long as you are still in a round.",`<div style="margin-bottom: 1rem;"><label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Reason</label>
        <select class="textarea-field" id="pause-reason" style="min-height:auto; height:38px;"><option value="too_busy">Too busy</option><option value="finished">I have read all I wanted</option><option value="content">Content preferences</option><option value="lost_interest">Lost interest</option><option value="other" selected>Another reason</option></select></div>`,"Stop judging",!0):e.innerHTML=t("Take a break from reviewing","No new groups will be assigned to you. You can resume at any time with “I'm back”.",`<div style="margin-bottom: 1rem;"><label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Reason</label>
        <select class="textarea-field" id="pause-reason" style="min-height:auto; height:38px;"><option value="too_busy">Too busy</option><option value="finished">I have read all I wanted</option><option value="content">Content preferences</option><option value="lost_interest">Lost interest</option><option value="other" selected>Another reason</option></select></div>
        <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; cursor:pointer;"><input type="checkbox" id="release-unopened" /> <span>Also give back groups I have not opened yet</span></label>`,"Pause reviewing");const r=e.querySelector("#flag-box"),o=()=>{var p,m;const h=(p=e.querySelector('input[name="reason"]:checked'))==null?void 0:p.value;r&&(r.style.display=(m=B.find(f=>f.value===h))!=null&&m.needsTriggers?"block":"none")};e.querySelectorAll('input[name="reason"]').forEach(h=>h.addEventListener("change",o)),o(),(c=e.querySelector(".btn-cancel-modal"))==null||c.addEventListener("click",()=>{this.modal=null,this.renderModal()}),(l=e.querySelector(".btn-confirm-modal"))==null||l.addEventListener("click",()=>void this.confirmModal(e))}async confirmModal(e){var o,c,l,h,p,m;const t=((o=e.querySelector('input[name="reason"]:checked'))==null?void 0:o.value)??"",i=((c=e.querySelector("#note"))==null?void 0:c.value.trim())||null,n=e.querySelector("#modal-error"),r=e.querySelector(".btn-confirm-modal");r&&(r.disabled=!0);try{const f=this.modal;if(f==="skip"&&this.detail){const v=Array.from(e.querySelectorAll(".flag-cb:checked")).map(w=>w.value),y=(l=B.find(w=>w.value===t))==null?void 0:l.needsTriggers;if(y&&v.length===0)throw new Error("Please tick the theme(s) you mean.");await Fe(this.detail.assignment.id,t,i,y?v:[]),Y(L(),this.detail.assignment.id),this.feedback={type:"success",text:"Story skipped."},await this.backToGroup()}else if(f==="dnf"&&this.detail)await Oe(this.detail.assignment.id,t,i),Y(L(),this.detail.assignment.id),this.feedback={type:"success",text:"Noted: you could not finish that story."},await this.backToGroup();else if(f==="leave"&&((h=this.activeGroupData)!=null&&h.group_assignment))await He(this.activeGroupData.group_assignment.id,t,i),this.modal=null,this.feedback={type:"info",text:"You gave the group back. Thank you for telling us."},await this.load();else if(f==="unregister"&&this.event)await Ie(this.event.id),this.modal=null,this.feedback={type:"success",text:"You are no longer registered as a judge. You can register again until reviewing starts."},await this.load();else if(f==="stop"&&this.event){const v=await qe(this.event.id,((p=e.querySelector("#pause-reason"))==null?void 0:p.value)??"other",null);this.modal=null,this.feedback={type:"info",text:`You have stopped judging${v.groups_left?" and given your group back":""}. Your submitted reviews stay. Click “I'm back” when you want to return.`},await this.load()}else if(f==="pause"&&this.round){const v=e.querySelector("#pause-reason");await b("pause_reviewing",{p_round_id:this.round.id,p_release_unopened:!!((m=e.querySelector("#release-unopened"))!=null&&m.checked),p_reason:(v==null?void 0:v.value)??"other",p_note:null}),this.modal=null,this.feedback={type:"info",text:"Reviewing paused. Click “I'm back” when you want more."},await this.load()}}catch(f){n&&(n.textContent=$(f)),r&&(r.disabled=!1)}}}customElements.get("rgai-review")||customElements.define("rgai-review",Mt);const It=`
:host { display: block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0f172a; max-width: 1040px; margin: 2rem auto; box-sizing: border-box; }
*, *::before, *::after { box-sizing: border-box; }
.admin-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 1.25rem; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem; }
.title { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem 0; }
.subtitle { font-size: 0.875rem; color: #64748b; margin: 0; }
h3 { font-size: 1.05rem; margin: 0 0 0.75rem 0; }
.badge { display: inline-flex; align-items: center; padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; background: #f1f5f9; color: #475569; }
.badge-admin { background: #fee2e2; color: #991b1b; } .badge-info { background: #e0f2fe; color: #0369a1; } .badge-success { background: #dcfce7; color: #15803d; } .badge-warning { background: #fef3c7; color: #b45309; }
.tabs { display: flex; gap: 0.25rem; border-bottom: 1px solid #e2e8f0; margin-bottom: 1.5rem; flex-wrap: wrap; }
.tab-btn { background: none; border: none; border-bottom: 2px solid transparent; padding: 0.6rem 1rem; font-size: 0.9rem; font-weight: 600; color: #64748b; cursor: pointer; }
.tab-btn:hover { color: #0f172a; } .tab-btn.active { color: #0284c7; border-bottom-color: #0284c7; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid transparent; font-size: 0.85rem; font-weight: 600; cursor: pointer; font-family: inherit; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-sm { padding: 0.3rem 0.65rem; font-size: 0.78rem; }
.btn-primary { background: #0284c7; color: #fff; } .btn-primary:hover:not(:disabled) { background: #0369a1; }
.btn-success { background: #059669; color: #fff; } .btn-success:hover:not(:disabled) { background: #047857; }
.btn-danger { background: #fff; border-color: #fca5a5; color: #b91c1c; } .btn-danger:hover:not(:disabled) { background: #fef2f2; }
.btn-secondary { background: #f1f5f9; border-color: #cbd5e1; color: #334155; } .btn-secondary:hover:not(:disabled) { background: #e2e8f0; }
.alert { padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.875rem; line-height: 1.45; }
.alert-info { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; } .alert-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; }
.alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; } .alert-warning { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; }
.section { border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; margin-bottom: 1.25rem; }
.section.done { background: #f8fafc; }
.step-head { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
.step-num { width: 1.75rem; height: 1.75rem; border-radius: 50%; background: #e2e8f0; color: #334155; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex: none; }
.step-num.ok { background: #059669; color: #fff; } .step-num.now { background: #0284c7; color: #fff; }
.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.9rem 1.25rem; }
.field label { display: block; font-size: 0.78rem; font-weight: 700; color: #475569; margin-bottom: 0.25rem; }
.field input, .field select, .field textarea { width: 100%; padding: 0.5rem 0.65rem; border: 1px solid #cbd5e1; border-radius: 8px; font: inherit; font-size: 0.875rem; background-color: #fff; }
select { appearance: none; -webkit-appearance: none; padding: 0.4rem 2.1rem 0.4rem 0.65rem; border: 1px solid #cbd5e1; border-radius: 8px; font: inherit; font-size: 0.875rem; background-color: #fff; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5l5 5 5-5' fill='none' stroke='%2364748b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0.7rem center; background-size: 12px 8px; }
.field select { padding-right: 2.1rem; }
.field .hint { font-size: 0.75rem; color: #64748b; margin-top: 0.2rem; }
.row { display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap; }
.metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; margin-bottom: 1.25rem; }
.metric { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.85rem 1rem; }
.metric b { display: block; font-size: 1.5rem; line-height: 1.2; } .metric span { font-size: 0.78rem; color: #64748b; }
table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
th { text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.03em; color: #64748b; padding: 0.5rem 0.6rem; border-bottom: 1px solid #e2e8f0; white-space: nowrap; }
td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
td.num, th.num { text-align: right; font-variant-numeric: tabular-nums; }
.table-wrap { overflow-x: auto; }
.tag { display: inline-block; padding: 0.1rem 0.45rem; margin: 0 0.25rem 0.25rem 0; border-radius: 6px; background: #fff7ed; color: #9a3412; border: 1px solid #fed7aa; font-size: 0.72rem; font-weight: 600; }
.tag-none { background: #f1f5f9; color: #64748b; border-color: #e2e8f0; }
.group-card { border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 0.75rem; }
.group-card > header { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; padding: 0.65rem 0.9rem; background: #f8fafc; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; border-radius: 10px 10px 0 0; }
.group-card .story { display: flex; justify-content: space-between; gap: 0.75rem; padding: 0.5rem 0.9rem; border-bottom: 1px solid #f1f5f9; flex-wrap: wrap; align-items: center; }
.group-card .story:last-child { border-bottom: none; }
.empty { text-align: center; color: #64748b; padding: 1.5rem; }
.event-img { max-width: 220px; max-height: 120px; border-radius: 8px; border: 1px solid #e2e8f0; display: block; margin-top: 0.5rem; }
.muted { color: #64748b; font-size: 0.82rem; }
.good { color: #15803d; font-weight: 600; } .bad { color: #b91c1c; font-weight: 600; }
.modal-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 1rem; }
.modal { background: #fff; border-radius: 12px; padding: 1.5rem; max-width: 520px; width: 100%; }
`,d=a=>g(a==null?"":String(a));function R(a){if(!a)return"";const s=new Date(a);return Number.isNaN(s.getTime())?"":s.toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}function ie(a){if(!a)return"";const s=new Date(a);if(Number.isNaN(s.getTime()))return"";const e=t=>String(t).padStart(2,"0");return`${s.getFullYear()}-${e(s.getMonth()+1)}-${e(s.getDate())}T${e(s.getHours())}:${e(s.getMinutes())}`}function ne(a){if(!a)return null;const s=new Date(a);return Number.isNaN(s.getTime())?null:s.toISOString()}function ae(a){return/^https:\/\/[^\s<>"]+$/.test(a)}const F=(a,s)=>a.length?a.map(e=>{var t;return`<span class="tag">${d(((t=s.find(i=>i.slug===e))==null?void 0:t.label)??e)}</span>`}).join(""):'<span class="tag tag-none">none</span>',qt=a=>{if(!a.length)return 0;const s=[...a].sort((t,i)=>t-i),e=Math.floor(s.length/2);return s.length%2?s[e]:(s[e-1]+s[e])/2};class Nt{constructor(){u(this,"id","capacity");u(this,"label","Capacity");u(this,"groups",[]);u(this,"seats",[]);u(this,"judges",[]);u(this,"results",new Map);u(this,"preview",new Map)}async load(s){if(this.groups=[],this.seats=[],this.judges=[],this.results.clear(),this.preview.clear(),!s.round)return;const e=s.round.id,[t,i,n,r,o]=await Promise.all([me(e),pe(e),Ke(e),Q(e),be(e)]);this.judges=t,this.groups=i,this.seats=n;for(const c of r)this.results.set(c.group_id,c);for(const c of o.groups??[])this.preview.set(c.group_id,c)}render(s){var o,c;if(!s.round)return'<div class="empty">Create the round on the “Round setup” tab first.</div>';const e=(o=s.dashboard)==null?void 0:o.capacity,t=(c=s.dashboard)==null?void 0:c.stats,i=s.round.target_judges_per_group,n=[...this.preview.values()].map(l=>l.eligible_judges_count),r=this.judges.filter(l=>l.accepted_at&&l.eligible_groups===0&&this.groups.some(h=>h.status!=="draft"));return`
      <div class="metrics">
        <div class="metric"><b>${(e==null?void 0:e.seats_filled)??0} / ${(e==null?void 0:e.seats_needed)??0}</b><span>seats filled / needed</span></div>
        <div class="metric"><b class="${((e==null?void 0:e.shortfall_seats)??0)>0?"bad":"good"}">${(e==null?void 0:e.shortfall_seats)??0}</b><span>seats short</span></div>
        <div class="metric"><b>${(e==null?void 0:e.registered_judges)??0}</b><span>judges (${(e==null?void 0:e.unrestricted_judges)??0} unrestricted)</span></div>
        <div class="metric"><b>${(e==null?void 0:e.waiting_more)??0}</b><span>waiting for another group</span></div>
        <div class="metric"><b>${(e==null?void 0:e.paused_judges)??0}</b><span>paused</span></div>
        <div class="metric"><b>${(t==null?void 0:t.complete_groups)??0} / ${(t==null?void 0:t.total_groups)??0}</b><span>groups complete</span></div>
        <div class="metric"><b>${(t==null?void 0:t.total_reviews)??0}</b><span>reviews (${(t==null?void 0:t.total_skips)??0} skipped, ${(t==null?void 0:t.total_dnfs)??0} did not finish)</span></div>
        ${n.length?`<div class="metric"><b>${Math.min(...n)} / ${qt(n)}</b><span>eligible judges per group, min / median</span></div>`:""}
      </div>
      ${r.length?`<div class="alert alert-warning"><b>${r.length} judge${r.length===1?"":"s"} cannot be seated on any group</b> (their blocklist or their own stories rule every group out). Ask them to loosen the blocklist: ${r.map(l=>d(l.display_name)).join(", ")}.</div>`:""}
      <div class="section"><h3>Groups</h3>${this.groupsTable(s,i)}</div>
      <div class="section"><h3>Judges</h3>${this.judgesTable(s)}</div>
      <div class="section"><h3>Seats</h3>${this.seatsTable(s)}</div>`}groupsTable(s,e){if(!this.groups.length)return'<div class="empty">No groups yet. Draft them on the “Round setup” tab.</div>';const t=this.judges.filter(i=>i.accepted_at).map(i=>`<option value="${d(i.user_id)}">#${d(i.judge_number??"?")} ${d(i.display_name)}</option>`).join("");return`<div class="table-wrap"><table><thead><tr><th>Group</th><th>Status</th><th>Warnings</th><th class="num">Seats</th><th class="num">Eligible judges</th><th class="num">Reviews per story</th><th>Actions</th></tr></thead><tbody>
      ${this.groups.map(i=>{var l;const n=this.results.get(i.group_id),r=(n==null?void 0:n.stories.map(h=>h.submitted_count))??[],o=(l=this.preview.get(i.group_id))==null?void 0:l.eligible_judges_count,c=i.status==="open"||i.status==="complete";return`<tr><td><b>${i.number}</b></td><td><span class="badge ${i.status==="complete"?"badge-success":i.status==="open"?"badge-info":""}">${d(i.status)}</span></td>
          <td>${F(i.trigger_slugs,s.triggers)}</td>
          <td class="num ${i.seats<e?"bad":"good"}">${i.seats} / ${e}</td><td class="num ${o!==void 0&&o<e?"bad":""}">${o??""}</td>
          <td class="num">${r.length?`${Math.min(...r)}–${Math.max(...r)} (min ${s.round.min_reviews_per_story})`:""}</td>
          <td>${c?`<div class="row"><select aria-label="Judge" data-judge-for="${d(i.group_id)}"><option value="">Seat a judge…</option>${t}</select><button type="button" class="btn btn-secondary btn-sm" data-action="assign-seat" data-group="${d(i.group_id)}" ${s.busy?"disabled":""}>Seat</button>
            ${i.status==="open"?`<button type="button" class="btn btn-secondary btn-sm" data-action="force-complete" data-group="${d(i.group_id)}" ${s.busy?"disabled":""}>Mark complete</button>`:""}</div>`:""}</td></tr>`}).join("")}</tbody></table></div>`}judgesTable(s){return this.judges.length?`<div class="table-wrap"><table><thead><tr><th class="num">#</th><th>Judge</th><th class="num">Blocks</th><th>Reviewing</th><th class="num">Bonus</th><th class="num">Held</th><th class="num">Done</th><th class="num">Left</th><th class="num">Reviews</th><th class="num">Skipped</th><th class="num">DNF</th><th class="num">Could still take</th></tr></thead><tbody>
      ${this.judges.map(e=>`<tr><td class="num">${d(e.judge_number??"")}</td><td>${d(e.display_name)}${e.accepted_at?"":' <span class="badge badge-info" title="Invited; not seated until they accept">invited</span>'}${e.waiting_since?` <span class="badge badge-warning" title="since ${d(R(e.waiting_since))}">waiting for more</span>`:""}</td>
        <td class="num" title="${d((e.blocked_triggers??[]).join(", "))}">${e.blocked_count??0}</td>
        <td>${e.intake==="paused"?`<span class="badge badge-warning">paused${e.pause_reason?`: ${d(e.pause_reason)}`:""}</span>`:"active"}</td>
        <td class="num"><button type="button" class="btn btn-secondary btn-sm" data-action="bonus" data-judge="${d(e.user_id)}" data-bonus="${e.bonus_groups-1}" ${e.bonus_groups<=0||s.busy?"disabled":""} aria-label="Take back a bonus group">−</button>
          ${e.bonus_groups} <button type="button" class="btn btn-secondary btn-sm" data-action="bonus" data-judge="${d(e.user_id)}" data-bonus="${e.bonus_groups+1}" ${s.busy?"disabled":""} aria-label="Grant a bonus group">+</button></td>
        <td class="num">${e.groups_held}</td><td class="num">${e.groups_completed}</td><td class="num">${e.groups_left}</td><td class="num">${e.submitted_count}</td><td class="num">${e.skipped_count}</td><td class="num">${e.dnf_count}</td>
        <td class="num ${e.eligible_groups===0&&e.accepted_at?"bad":""}">${e.eligible_groups}</td></tr>`).join("")}</tbody></table></div>`:'<div class="empty">No judges have registered yet.</div>'}seatsTable(s){if(!this.seats.length)return'<div class="empty">No seats yet.</div>';const e=s.round.reminder_after_days;return`<div class="table-wrap"><table><thead><tr><th>Group</th><th>Judge</th><th>Status</th><th>Source</th><th class="num">Progress</th><th>Since</th><th></th></tr></thead><tbody>
      ${this.seats.map(t=>{const i=t.assigned_count+t.submitted_count+t.skipped_count+t.dnf_count,n=(Date.now()-Date.parse(t.assigned_at))/864e5,r=t.status==="assigned"&&!t.first_opened_at&&n>=e;return`<tr><td>${t.group_number}</td><td>${d(t.judge_name)}</td>
          <td>${d(t.status)}${t.release_reason?` (${d(t.release_reason)})`:""}${t.left_reason?` (${d(t.left_reason)})`:""}${r?` <span class="badge badge-warning">not opened for ${Math.floor(n)} days</span>`:""}</td>
          <td>${d(t.source)}</td><td class="num">${t.submitted_count+t.skipped_count+t.dnf_count} / ${i}</td><td>${d(R(t.assigned_at))}</td>
          <td>${t.status==="assigned"?`<div class="row"><button type="button" class="btn btn-secondary btn-sm" data-action="nudge" data-judge="${d(t.judge_id)}" title="Queue a reminder email" ${s.busy?"disabled":""}>Nudge</button>
            <button type="button" class="btn btn-danger btn-sm" data-action="release-seat" data-seat="${d(t.seat_id)}" ${s.busy?"disabled":""}>Release</button></div>`:""}</td></tr>`}).join("")}</tbody></table></div>`}async onAction(s,e,t){var i,n;switch(s){case"assign-seat":{const r=e.getAttribute("data-group")??"",o=(n=(i=e.parentElement)==null?void 0:i.querySelector("select"))==null?void 0:n.value;return o?t.run(async()=>(await wt(r,o),"Judge seated.")):t.flash("error","Choose the judge to seat.")}case"force-complete":return confirm("Mark this group complete? It will count as done even if some stories have fewer reviews than the minimum.")?t.run(async()=>(await $t(e.getAttribute("data-group")??""),"Group marked complete.")):void 0;case"release-seat":return confirm("Release this seat? The stories the judge has not reviewed go back to the pool; their submitted reviews stay.")?t.run(async()=>(await ve(e.getAttribute("data-seat")??"",null),"Seat released.")):void 0;case"nudge":{const r=e.getAttribute("data-judge")??"";return t.run(async()=>(await bt(t.round.id,r)).queued?"A reminder is queued. Send the queued emails on the Emails tab.":"A reminder was already queued for this seat today.")}case"bonus":return t.run(async()=>{await _t(t.round.id,e.getAttribute("data-judge")??"",Number(e.getAttribute("data-bonus")))})}}}class Dt{constructor(){u(this,"id","judges");u(this,"label","Judges");u(this,"candidates",[]);u(this,"unregistered",[]);u(this,"selected",new Set);u(this,"filter","all");u(this,"email","");u(this,"found",null);u(this,"searched",!1);u(this,"blockFor",null)}async load(s){this.candidates=s.round?await Xe(s.round.id):[],this.unregistered=s.event?await ut(s.event.id):[];const e=new Set(this.candidates.filter(t=>!t.invitation).map(t=>t.user_id));for(const t of[...this.selected])e.has(t)||this.selected.delete(t)}render(s){const e=s.round;if(!e)return'<div class="empty">Create the round on the “Round setup” tab first.</div>';const t=this.candidates.filter(c=>c.invitation==="invited").length,i=this.candidates.filter(c=>c.invitation==="accepted").length,n=e.status==="closed",r=e.status!=="planned",o=e.number===1?"Round 1 fills itself: everyone who registers as a judge is in. You can still invite someone here, for instance a person who has not registered yet.":"Choose who judges this round. Each person gets an email and accepts in the app; until they do, they are not seated and do not count. The list shows what each did in the earlier rounds.";return`
      <div class="metrics">
        <div class="metric"><b>${this.candidates.length}</b><span>registered judges</span></div>
        <div class="metric"><b>${t}</b><span>invited, not yet accepted</span></div>
        <div class="metric"><b class="${i?"good":""}">${i}</b><span>accepted</span></div>
        <div class="metric"><b>${this.unregistered.length}</b><span>unregistered</span></div>
      </div>
      <p class="muted">${d(o)}</p>
      ${n?'<div class="alert alert-info">This round is closed; nobody can be invited to it.</div>':this.lookupSection(s)}
      ${this.blockPanel(s)}
      ${this.unregisteredSection()}
      <div class="section">
        <div class="row" style="justify-content: space-between; margin-bottom: 0.75rem;">
          <h3 style="margin:0;">Registered judges</h3>
          <div class="field"><label for="jd-filter" style="display:inline; margin-right: 0.4rem;">Show</label>
            <select id="jd-filter" data-action="filter" style="width:auto;">${[["all","everyone"],["not-invited","not invited"],["invited","invited"],["accepted","accepted"]].map(([c,l])=>`<option value="${c}" ${this.filter===c?"selected":""}>${l}</option>`).join("")}</select></div>
        </div>
        ${this.table(r,n)}
        ${n?"":this.inviteBar(s)}
      </div>`}lookupSection(s){const e=this.found,t=e&&this.candidates.find(n=>n.user_id===e.user_id);let i="";return this.searched&&!e?i='<p class="bad" style="margin-bottom:0;">Nobody has an account with that email.</p>':e&&(i=`<p style="margin-bottom:0;"><b>${d(e.display_name)}</b> ${e.registered_as_judge?'<span class="muted">is a registered judge</span>':'<span class="muted">has an account but is not a registered judge yet; they will be registered with their default blocklist</span>'}
        ${t!=null&&t.invitation?`<span class="badge badge-info">${d(t.invitation)}</span>`:`<button type="button" class="btn btn-primary btn-sm" data-action="invite-found" ${s.busy?"disabled":""}>Invite</button>`}</p>`),`
      <div class="section">
        <h3>Invite someone by email</h3>
        <div class="row">
          <div class="field" style="flex: 1; min-width: 240px;"><label for="jd-email">Their account email</label><input id="jd-email" type="email" autocomplete="off" maxlength="254" value="${d(this.email)}" placeholder="name@example.org" /></div>
          <button type="button" class="btn btn-secondary" data-action="find-email" style="align-self:flex-end;" ${s.busy?"disabled":""}>Look up</button>
        </div>
        <div class="hint muted">The exact address only. The screen shows the name, never the address.</div>
        ${i?`<div style="margin-top: 0.75rem;">${i}</div>`:""}
      </div>`}unregisteredSection(){return this.unregistered.length?`<details class="section"><summary style="cursor:pointer;"><b>${this.unregistered.length} ${this.unregistered.length===1?"judge has":"judges have"} unregistered</b> <span class="muted">(their numbers are not reused)</span></summary>
      <div class="table-wrap" style="margin-top:0.75rem;"><table><thead><tr><th>When</th><th>Judge</th><th class="num">#</th><th>Round 1 was</th><th class="num">Seats removed</th></tr></thead><tbody>
        ${this.unregistered.map(s=>`<tr><td>${d(R(s.unregistered_at))}</td><td>${d(s.display_name??"(account deleted)")}</td><td class="num">${d(s.judge_number)}</td><td>${d(s.round_status??"not created yet")}</td><td class="num">${s.seats_removed}</td></tr>`).join("")}
      </tbody></table></div></details>`:""}blockPanel(s){const e=this.blockFor,t=e&&this.candidates.find(r=>r.user_id===e.judgeId);if(!e||!t)return"";const i=s.triggers.filter(r=>r.active&&!(t.blocked_triggers??[]).includes(r.slug)),n=(t.blocked_triggers??[]).map(r=>{var o;return((o=s.triggers.find(c=>c.slug===r))==null?void 0:o.label)??r});return`<div class="section">
      <h3>Add to the blocklist of ${d(t.display_name)}</h3>
      <p class="muted">Judges cannot change their blocklist while a round is running. A judge who asks can have themes <b>added</b> here; nothing is ever taken off. Their seats on groups that have an added theme are released (the stories go back to the pool), unless a story of the seat was already opened: then you choose.</p>
      <p>Blocks now: ${n.length?d(n.join(", ")):"<i>nothing</i>"}</p>
      ${e.ask?`<div class="alert alert-warning"><b>${d(e.ask.seats_opened??0)}</b> of the seats affected ${e.ask.seats_opened===1?"has":"have"} a story the judge already opened${e.ask.seats_unopened?`; ${d(e.ask.seats_unopened)} more ${e.ask.seats_unopened===1?"seat is":"seats are"} unopened and will be released either way`:""}. Release the opened ${e.ask.seats_opened===1?"seat":"seats"} too (the opened story stays unreviewed by this judge), or keep ${e.ask.seats_opened===1?"it":"them"}?
        <div class="row" style="margin-top:0.6rem;"><button type="button" class="btn btn-danger btn-sm" data-action="block-confirm" data-choice="release" ${s.busy?"disabled":""}>Release the opened seats too</button>
          <button type="button" class="btn btn-secondary btn-sm" data-action="block-confirm" data-choice="keep" ${s.busy?"disabled":""}>Keep the opened seats</button></div></div>`:""}
      <div class="row" style="margin-bottom: 0.75rem;">${i.length?i.map(r=>`<label style="font-size:0.85rem;"><input type="checkbox" data-action="block-pick" data-slug="${d(r.slug)}" ${e.picked.has(r.slug)?"checked":""} ${e.ask?"disabled":""} /> ${d(r.label)}</label>`).join(""):'<span class="muted">They already block every active theme.</span>'}</div>
      <div class="row"><button type="button" class="btn btn-primary" data-action="block-add" ${s.busy||!e.picked.size||e.ask?"disabled":""}>Add ${e.picked.size||""} to their blocklist</button>
        <button type="button" class="btn btn-secondary" data-action="block-cancel">Cancel</button></div>
    </div>`}async addBlocks(s,e){var n;const t=this.blockFor,i=(n=s.event)==null?void 0:n.id;if(!(!t||!i))return s.run(async()=>{const r=await nt(i,t.judgeId,[...t.picked],e);if(r.needs_choice){t.ask=r;return}this.blockFor=null;const o=r.seats_released??0,c=r.seats_kept??0;return`Added to the blocklist. ${o} ${o===1?"seat":"seats"} released${c?`, ${c} kept (a story was already opened)`:""}.`})}visible(){return this.candidates.filter(s=>this.filter==="all"||(this.filter==="not-invited"?!s.invitation:s.invitation===this.filter))}table(s,e){const t=this.visible();return this.candidates.length?t.length?`<div class="table-wrap"><table><thead><tr><th></th><th class="num">#</th><th>Judge</th><th class="num">Reviews</th><th class="num">DNF</th><th class="num">Skipped</th><th class="num">Groups left</th><th class="num" title="Average length of the written comments">Comment</th><th class="num">Blocks</th><th class="num" title="How many of this round's drafted sets they could take">Sets</th><th>Status</th><th></th></tr></thead><tbody>
      ${t.map(i=>`<tr>
        <td>${i.invitation||e?"":`<input type="checkbox" data-action="toggle-judge" data-judge="${d(i.user_id)}" aria-label="Select ${d(i.display_name)}" ${this.selected.has(i.user_id)?"checked":""} />`}</td>
        <td class="num">${d(i.judge_number)}</td><td>${d(i.display_name)}</td>
        <td class="num">${i.earlier_reviews}</td><td class="num">${i.earlier_dnf}</td><td class="num">${i.earlier_skips}</td><td class="num">${i.earlier_groups_left}</td>
        <td class="num">${i.avg_comment_length||""}</td><td class="num" title="${d((i.blocked_triggers??[]).join(", "))}">${i.blocked_count}</td>
        <td class="num ${s&&i.eligible_sets===0?"bad":""}">${s?i.eligible_sets:"–"}</td>
        <td>${i.invitation==="accepted"?'<span class="badge badge-success">accepted</span>':i.invitation==="invited"?'<span class="badge badge-info">invited</span>':""}</td>
        <td><button type="button" class="btn btn-secondary btn-sm" data-action="block-more" data-judge="${d(i.user_id)}" title="Add themes to this judge's blocklist, at their request">Block more</button></td></tr>`).join("")}
      </tbody></table></div>`:'<div class="empty">Nobody matches this filter.</div>':'<div class="empty">Nobody has registered as a judge yet.</div>'}inviteBar(s){const e=this.visible().filter(t=>!t.invitation);return`<div class="row" style="margin-top: 1rem;">
      <button type="button" class="btn btn-primary" data-action="invite-selected" id="jd-invite" ${s.busy||!this.selected.size?"disabled":""}>${this.inviteLabel()}</button>
      <button type="button" class="btn btn-secondary btn-sm" data-action="select-visible" ${s.busy||!e.length?"disabled":""}>Select everyone shown who is not invited</button>
      <button type="button" class="btn btn-secondary btn-sm" data-action="clear-selection" ${s.busy||!this.selected.size?"disabled":""}>Clear</button>
    </div>`}inviteLabel(){const s=this.selected.size;return s?`Invite ${s} selected`:"Invite selected"}async onAction(s,e,t,i){var r;const n=t.round;if(n)switch(s){case"block-more":return this.blockFor={judgeId:e.getAttribute("data-judge")??"",picked:new Set,ask:null},t.rerender();case"block-cancel":return this.blockFor=null,t.rerender();case"block-pick":{const o=e.getAttribute("data-slug")??"";return this.blockFor?(e.checked?this.blockFor.picked.add(o):this.blockFor.picked.delete(o),t.rerender()):void 0}case"block-add":return this.addBlocks(t,"ask");case"block-confirm":return this.addBlocks(t,e.getAttribute("data-choice")==="release"?"release":"keep");case"filter":return this.filter=e.value,t.rerender();case"toggle-judge":{const o=e.getAttribute("data-judge")??"";e.checked?this.selected.add(o):this.selected.delete(o);const c=i.querySelector("#jd-invite");c&&(c.textContent=this.inviteLabel(),c.disabled=!this.selected.size);return}case"select-visible":for(const o of this.visible())o.invitation||this.selected.add(o.user_id);return t.rerender();case"clear-selection":return this.selected.clear(),t.rerender();case"find-email":{const o=(((r=i.querySelector("#jd-email"))==null?void 0:r.value)??"").trim();return this.email=o,o?(this.found=null,this.searched=!1,t.run(async()=>{this.found=await Ze(o),this.searched=!0})):t.flash("error","Type the email address of the person first.")}case"invite-found":{const o=this.found;return o?t.run(async()=>(await K(n.id,[o.user_id]),this.found=null,this.searched=!1,this.email="",`${o.display_name} is invited. They get an email with a link to accept.`)):void 0}case"invite-selected":{const o=[...this.selected];return!o.length||!confirm(`Invite ${o.length} ${o.length===1?"person":"people"} to ${n.name}? Each gets an email with a link to accept.`)?void 0:t.run(async()=>{const c=await K(n.id,o);return this.selected.clear(),`${c.invited} invited${c.already_in_round?` (${c.already_in_round} already were)`:""}. The emails go out when you send the queued emails (Emails tab).`})}}}}class Ft{constructor(){u(this,"id","emails");u(this,"label","Emails");u(this,"summary",null);u(this,"lastSend",null)}async load(){this.summary=await ht()}render(s){const e=this.summary,t=this.lastSend;return`
      <div class="metrics">
        <div class="metric"><b class="${e&&e.due_now?"bad":""}">${(e==null?void 0:e.due_now)??0}</b><span>ready to send now</span></div>
        <div class="metric"><b>${(e==null?void 0:e.waiting_later)??0}</b><span>waiting for a later try</span></div>
        <div class="metric"><b class="${e&&e.failed?"bad":""}">${(e==null?void 0:e.failed)??0}</b><span>given up on</span></div>
        <div class="metric"><b class="${e&&e.sent_last_day?"good":""}">${(e==null?void 0:e.sent_last_day)??0}</b><span>sent in the last 24 hours</span></div>
      </div>
      <div class="section">
        <h3>Send the queued emails</h3>
        <p class="muted">The messages are written when something happens (the groups are released, a judge finishes a group, someone is invited) and wait here. Each press sends up to 50 of the ones that are ready. Check your provider's daily limit first: a free plan allows 100 to 300 a day.</p>
        <div class="row">
          <button type="button" class="btn btn-primary" data-action="send-emails" ${s.busy||!(e!=null&&e.due_now)?"disabled":""}>Send ${e!=null&&e.due_now?`${Math.min(e.due_now,50)} of the ${e.due_now} `:""}ready emails</button>
          <button type="button" class="btn btn-secondary btn-sm" data-action="refresh-emails" ${s.busy?"disabled":""}>Refresh</button>
        </div>
        ${t?`<p style="margin-bottom:0;">Last press: <b>${t.sent}</b> sent${t.failed?`, <b class="bad">${t.failed}</b> failed (they are tried again later)`:""}.</p>`:""}
        ${e&&e.waiting_later?`<div class="alert alert-info" style="margin-top: 1rem; margin-bottom: 0;"><b>${e.waiting_later}</b> ${e.waiting_later===1?"message is":"messages are"} waiting for a later try${e.next_try_at?`, the first one from ${d(R(e.next_try_at))}`:""}.
          After a failure the wait grows (5 minutes, 30 minutes, 2 hours, 8 hours, then a day).${e.throttled?` ${e.throttled} failed because the provider's sending limit was reached; those are kept for up to 48 hours, so a daily limit has time to clear.`:""}</div>`:""}
      </div>
      ${e&&e.failed?`<div class="section">
        <h3>Messages given up on</h3>
        <p class="muted">${e.failed} ${e.failed===1?"message was":"messages were"} given up on (five failures, or the provider's limit for 48 hours). The usual causes are a wrong or missing email setting (docs/email-setup.md) or a daily limit that was reached. After fixing the cause, put them back in the queue.</p>
        <button type="button" class="btn btn-secondary" data-action="retry-failed" ${s.busy?"disabled":""}>Retry the ${e.failed} failed ${e.failed===1?"message":"messages"}</button>
      </div>`:""}
      <div class="section">
        <h3>Remind judges who have not opened their group</h3>
        ${s.round?`<p class="muted">Queues one reminder (once a day at most) for every judge of ${d(s.round.name)} who has held a group for ${d(s.round.reminder_after_days)} days without opening it. Reminders for one judge are on the Capacity tab (Nudge).</p>
             <button type="button" class="btn btn-secondary" data-action="remind-unopened" ${s.busy?"disabled":""}>Queue the reminders</button>`:'<p class="muted">There is no round yet.</p>'}
      </div>`}async onAction(s,e,t){switch(s){case"refresh-emails":return t.reload();case"send-emails":return t.run(async()=>(this.lastSend=await mt(50),this.lastSend.claimed?void 0:"Nothing was waiting."));case"retry-failed":return confirm("Put every failed message back in the queue? They will be ready to send at once.")?t.run(async()=>{const i=await gt();return`${i.requeued} ${i.requeued===1?"message":"messages"} back in the queue. Send them when your provider's limit allows.`}):void 0;case"remind-unopened":return t.run(async()=>{const i=await pt(t.round.id);return i.queued?`${i.queued} reminder${i.queued===1?"":"s"} queued. Send them with the button above.`:"Nobody needs a reminder right now."})}}}const Ot={undeclared_trigger:"has a warning that was not declared",misdeclared_trigger:"does not have a warning that was declared"};class Ht{constructor(){u(this,"id","reports");u(this,"label","Trigger reports");u(this,"judges",[]);u(this,"toReview",null)}async load(s){this.judges=s.round?await me(s.round.id):[]}render(s){var t;const e=((t=s.dashboard)==null?void 0:t.trigger_queue)??[];return`
      ${this.toReview?this.toReviewHtml(s):""}
      <div class="section"><h3>Reports waiting for you (${e.length})</h3>
        ${e.length===0?'<div class="empty">No open trigger reports.</div>':`<div class="table-wrap"><table><thead><tr><th>Story</th><th>The judge says it…</th><th>Themes</th><th>Note</th><th></th></tr></thead><tbody>
          ${e.map(i=>`<tr><td><b>${d(i.story_title)}</b></td><td>${d(Ot[i.skip_reason]??i.skip_reason)}</td><td>${F(i.flagged_triggers??[],s.triggers)}</td><td>${d(i.skip_note??"")}</td>
            <td><div class="row"><button type="button" class="btn btn-success btn-sm" data-action="confirm-report" data-id="${d(i.assignment_id)}" data-story="${d(i.story_title)}" ${s.busy||!(i.flagged_triggers??[]).length?"disabled":""}>Confirm</button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="dismiss-report" data-id="${d(i.assignment_id)}" ${s.busy?"disabled":""}>Dismiss</button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="new-trigger-from-report" data-note="${d(i.skip_note??"")}" title="The list has no theme for this: add one, filled in from the note">Add as a new trigger</button></div></td></tr>`).join("")}
        </tbody></table></div>`}
        <p class="muted">Confirm: the story's content warnings change as the judge says and its group's warnings follow. Dismiss: nothing changes. Either way the report leaves this list.</p>
      </div>`}toReviewHtml(s){const e=this.toReview;return e.seats.length?`<div class="alert alert-warning"><b>Confirmed for “${d(e.story)}”.</b> These judges hold the group and blocked one of its themes. Release their seat so another judge can take it:
      <ul>${e.seats.map(t=>{var i;return`<li>${d(((i=this.judges.find(n=>n.user_id===t.judge_id))==null?void 0:i.display_name)??t.judge_id)}
        <button type="button" class="btn btn-danger btn-sm" data-action="release-seat" data-seat="${d(t.seat_id)}" ${s.busy?"disabled":""}>Release seat</button></li>`}).join("")}</ul></div>`:`<div class="alert alert-success">Confirmed for “${d(e.story)}”. No judge holding that group blocked the new theme.</div>`}async onAction(s,e,t){const i=e.getAttribute("data-id")??"";switch(s){case"confirm-report":return t.run(async()=>{const n=await ee(i,"confirm");this.toReview={story:e.getAttribute("data-story")??"",seats:n.seats_to_review??[]}});case"new-trigger-from-report":{const n=(e.getAttribute("data-note")??"").trim();return t.draftTrigger={label:n.slice(0,80),description:n.slice(0,300)},t.go("triggers")}case"dismiss-report":return t.run(async()=>(await ee(i,"dismiss"),this.toReview=null,"Report dismissed."));case"release-seat":return t.run(async()=>(await ve(e.getAttribute("data-seat")??"","trigger confirmed"),this.toReview&&(this.toReview.seats=this.toReview.seats.filter(n=>n.seat_id!==e.getAttribute("data-seat"))),"Seat released."))}}}const Bt=/^[=+\-@\t\r]/;function Yt(a){if(a==null)return"";let s;return typeof a=="number"?s=Number.isFinite(a)?String(a):"":typeof a=="boolean"?s=a?"yes":"no":(s=Array.isArray(a)?a.map(e=>String(e)).join("; "):String(a),Bt.test(s)&&(s=`'${s}`)),/[",\r\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}function _e(a){return a.map(s=>s.map(Yt).join(",")).join(`\r
`)+`\r
`}function Gt(a,s){const e=[...s].filter(n=>!n.archived).sort((n,r)=>n.position-r.position),t=["Group","Story","Judge number","Judge","Outcome","Submitted at","Skip reason","DNF reason","Note",...e.map(n=>n.label)],i=a.map(n=>[n.group_number,n.story_title,n.judge_number,n.judge_name,n.status,n.submitted_at,n.skip_reason,n.dnf_reason,n.note,...e.map(r=>{var o;return((o=n.answers)==null?void 0:o[r.id])??""})]);return _e([t,...i])}function Pt(a){const s=["Group","Rank","Story","Centered score","Raw score","Scored reviews","Submitted","DNF","Skipped","Positive recommendations","Recommendations","Positive share","Advances","Group margin","Close call","Close-call reasons"],e=a.flatMap(t=>t.stories.map(i=>[t.group_number,i.rank,i.title,i.weighted_score,i.raw_score,i.review_count,i.submitted_count,i.dnf_count,i.skip_count,i.positive_recommendations,i.recommendations,i.positive_share,i.advances,t.margin,t.close_call,t.close_call_reasons]));return _e([s,...e])}function re(a,s){const e=URL.createObjectURL(new Blob(["\uFEFF",s],{type:"text/csv;charset=utf-8"})),t=document.createElement("a");t.href=e,t.download=a,document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}const oe={tie:"the top two are tied",second_has_more_positive_recommendations:"second place has more positive recommendations",raw_mean_differs:"the plain average (no centering) picks a different winner"},de=a=>a==null?"–":`${Math.round(a*100)}%`,D=a=>a==null?"–":a.toFixed(2);class Jt{constructor(){u(this,"id","results");u(this,"label","Results");u(this,"results",[]);u(this,"proposed",[]);u(this,"form",null)}async load(s){this.results=[],this.proposed=[],this.form=null,s.round&&([this.results,this.proposed,this.form]=await Promise.all([Q(s.round.id),vt(s.round.id),fe(s.round.id)]))}render(s){var c;if(!s.round)return'<div class="empty">Create the round on the “Round setup” tab first.</div>';const e=this.results.filter(l=>l.scored_stories>0),t=e.filter(l=>l.close_call),i=this.results.flatMap(l=>l.stories).filter(l=>l.advances).length,n=s.round.status==="reviewing"||s.round.status==="closed",r=this.proposed.filter(l=>l.kind==="winner"),o=this.proposed.filter(l=>l.kind==="wildcard_candidate");return`
      <div class="metrics">
        <div class="metric"><b>${e.length} / ${this.results.length}</b><span>groups with a result</span></div>
        <div class="metric"><b>${t.length}</b><span>close calls</span></div>
        <div class="metric"><b>${o.length}</b><span>wildcard candidates</span></div>
        <div class="metric"><b class="${i?"good":""}">${i}</b><span>stories confirmed to advance</span></div>
      </div>
      <div class="row" style="margin-bottom: 1.25rem;">
        <button type="button" class="btn btn-secondary" data-action="export-reviews" ${s.busy?"disabled":""}>Download reviews (CSV)</button>
        <button type="button" class="btn btn-secondary" data-action="export-results" ${s.busy||!this.results.length?"disabled":""}>Download group results (CSV)</button>
        <span class="muted">Judge number and name only, no emails. Titles and names that look like formulas are made safe for spreadsheets.</span>
      </div>
      ${(c=this.form)!=null&&c.scoring_changed_after_advancement?`<div class="alert alert-warning"><b>The scoring changed after ${d(this.form.advancing_count)} ${this.form.advancing_count===1?"advancement was":"advancements were"} confirmed.</b> A weight, the recommendations that count as positive, or a scored question was changed (${d(R(this.form.scoring_changed_at))}). The scores and proposals below use the current form; the confirmed advancements stay as you set them. Look at the proposal again and confirm again if you want it to follow.</div>`:""}
      ${n?"":'<div class="alert alert-info">Advancement can be set once reviewing has started.</div>'}
      ${e.length===0?'<div class="empty">No story has a score yet. Scores need at least two reviews from a judge in the same group.</div>':`
        <div class="section"><h3>Wildcard candidates, strongest first (${o.length})</h3>
          <p class="muted">The runner-up of a close call. The strongest have the larger share of positive recommendations, then the smaller margin behind their group's winner.</p>
          ${o.length?this.proposalTable(s,o,n):'<div class="empty">None: no group is a close call.</div>'}</div>
        <div class="section"><h3>Group winners (${r.length})</h3>
          <div class="row" style="margin-bottom:0.75rem;"><button type="button" class="btn btn-success btn-sm" data-action="confirm-clear-winners" ${s.busy||!n?"disabled":""}>Confirm all winners that are not close calls</button>
          <span class="muted">Close calls stay for you to decide.</span></div>
          ${this.proposalTable(s,r,n)}</div>
        <div class="section"><h3>All groups</h3>${this.results.map(l=>this.groupCard(s,l,n)).join("")}</div>`}`}proposalTable(s,e,t){return`<div class="table-wrap"><table><thead><tr><th class="num">Group</th><th>Story</th><th class="num">Positive recommendations</th><th class="num">Margin behind winner / ahead of second</th><th>Why</th><th></th></tr></thead><tbody>
      ${e.map(i=>`<tr><td class="num">${i.group_number}</td><td><b>${d(i.story_title)}</b></td>
        <td class="num">${i.positive_recommendations} of ${i.recommendations} (${de(i.positive_share)})</td><td class="num">${D(i.margin)}</td>
        <td>${i.close_call?i.close_call_reasons.map(n=>d(oe[n]??n)).join("; "):'<span class="muted">clear winner</span>'}</td>
        <td>${this.advanceButton(s,i.story_id,i.currently_advances,i.kind==="winner"?"winner":"wildcard",t)}</td></tr>`).join("")}
    </tbody></table></div>`}advanceButton(s,e,t,i,n){return t?`<button type="button" class="btn btn-danger btn-sm" data-action="unconfirm" data-story="${d(e)}" ${s.busy||!n?"disabled":""}>Unconfirm</button> <span class="badge badge-success">advances</span>`:`<button type="button" class="btn btn-success btn-sm" data-action="confirm" data-story="${d(e)}" data-note="${d(i)}" ${s.busy||!n?"disabled":""}>Confirm</button>`}groupCard(s,e,t){return`<div class="group-card"><header>
        <div><b>Group ${e.group_number}</b> <span class="badge ${e.group_status==="complete"?"badge-success":""}">${d(e.group_status)}</span>
          ${e.close_call?'<span class="badge badge-warning">close call</span>':e.scored_stories>1?'<span class="badge badge-success">clear</span>':""}</div>
        <div class="muted">${e.margin!==null?`margin ${D(e.margin)}`:""}</div></header>
      ${e.close_call?`<div class="story muted">${e.close_call_reasons.map(i=>d(oe[i]??i)).join("; ")}</div>`:""}
      <div class="table-wrap"><table><thead><tr><th class="num">Rank</th><th>Story</th><th class="num">Score</th><th class="num">Plain avg</th><th class="num">Scored</th><th class="num">Reviews</th><th class="num">DNF</th><th class="num">Skipped</th><th class="num">Positive</th><th></th></tr></thead><tbody>
        ${e.stories.map(i=>`<tr><td class="num">${i.rank??"–"}</td><td>${d(i.title)}${i.meets_min_reviews?"":' <span class="badge badge-warning">too few reviews</span>'}</td>
          <td class="num">${D(i.weighted_score)}</td><td class="num">${D(i.raw_score)}</td><td class="num">${i.review_count}</td><td class="num">${i.submitted_count}</td><td class="num">${i.dnf_count}</td><td class="num">${i.skip_count}</td>
          <td class="num">${i.positive_recommendations}/${i.recommendations} (${de(i.positive_share)})</td>
          <td>${this.advanceButton(s,i.story_id,i.advances,"manual",t)}</td></tr>`).join("")}
      </tbody></table></div></div>`}async onAction(s,e,t){const i=e.getAttribute("data-story")??"";switch(s){case"confirm":return t.run(async()=>{await H(t.round.id,[i],!0,e.getAttribute("data-note"))});case"unconfirm":return t.run(async()=>{await H(t.round.id,[i],!1,null)});case"confirm-clear-winners":{const n=this.proposed.filter(r=>r.kind==="winner"&&!r.close_call&&!r.currently_advances).map(r=>r.story_id);return n.length?confirm(`Confirm ${n.length} clear winners as advancing?`)?t.run(async()=>(await H(t.round.id,n,!0,"winner"),`${n.length} winners confirmed.`)):void 0:t.flash("info","Every clear winner is already confirmed.")}case"export-reviews":return t.run(async()=>{const n=await ft(t.round.id);return re(`round-${t.round.number}-reviews-${new Date().toISOString().slice(0,10)}.csv`,Gt(n,t.questions)),`Downloaded ${n.length} reviews.`});case"export-results":re(`round-${t.round.number}-group-results-${new Date().toISOString().slice(0,10)}.csv`,Pt(this.results));return}}}const G={scale:"Scale (a number)",single_choice:"One choice",multi_choice:"Several choices",boolean:"Yes / no",short_text:"Short text",long_text:"Long text"},Ut={created:"added",deleted:"deleted",label:"question",help_text:"help text",type:"type",config:"settings",positive:"counts as positive",required:"required",weight:"weight",archived:"archived",position:"place"},C=a=>a.config??{},Wt=a=>C(a).purpose==="recommendation",le=a=>Array.isArray(C(a).positive)?C(a).positive.map(String):[],P=(a,s=70)=>a===null?"":a.length>s?`${a.slice(0,s)}…`:a;class Qt{constructor(){u(this,"form",null);u(this,"changes",[]);u(this,"editing",null);u(this,"previewing",!1);u(this,"draftType","scale");u(this,"typed",null)}async load(s){this.form=null,this.changes=[],s.round&&([this.form,this.changes]=await Promise.all([fe(s.round.id),at(s.round.id,30)]),this.editing&&this.editing!=="new"&&!s.questions.some(e=>e.id===this.editing)&&(this.editing=null))}get state(){var s;return((s=this.form)==null?void 0:s.state)??"before"}reviews(){var e;const s=((e=this.form)==null?void 0:e.submitted_reviews)??0;return`${s} ${s===1?"review is":"reviews are"} submitted in this round`}locked(s){if(this.state==="closed")return"This round is closed, so its review form is read-only.";if(this.state==="started"){if(s==="type")return`${this.reviews()}, so the type cannot change.`;if(s==="scale")return`${this.reviews()}, so the ends of the scale cannot change (a 7 would mean something else). The end labels can.`;if(s==="option-text")return`${this.reviews()}; answers store an option's text, so options cannot be renamed or removed. You can add options.`;if(s==="purpose")return`${this.reviews()}, so which question is the recommendation cannot change.`;if(s==="new-weight")return`${this.reviews()}; earlier reviews lack an answer to a new question, so it cannot be scored.`}return""}lastScoredReason(s,e){var i;const t=n=>n.type==="scale"&&n.weight>0&&!n.archived;return((i=s.round)==null?void 0:i.status)!=="reviewing"||!t(e)?"":s.questions.filter(t).length<=1?"A round that is reviewing must keep at least one scored question.":""}render(s){const e=[...s.questions].sort((n,r)=>n.position-r.position),t=e.filter(n=>!n.archived),i=this.state==="closed";return!e.length&&!this.editing?`<div class="section"><h3>Review form</h3><div class="alert alert-warning">This round has no questions yet, so judges cannot review.</div>
        <div class="row"><button type="button" class="btn btn-primary" data-action="seed-questions" ${s.busy||i?"disabled":""}>Add the default review form</button>
        <button type="button" class="btn btn-secondary" data-action="edit-question" data-id="new" ${s.busy||i?"disabled":""}>Start with an empty form</button></div>
        <p class="muted">The default is last year's nine 0–10 scores (“How scary is it?” counts 5×, the others 1×) and the four-option recommendation.</p></div>`:`
      <div class="section">
        <div class="row" style="justify-content: space-between; margin-bottom: 0.5rem;">
          <h3 style="margin:0;">Review form <span class="muted" style="font-weight:400;">(${t.length} ${t.length===1?"question":"questions"}${e.length>t.length?`, ${e.length-t.length} archived`:""})</span></h3>
          <div class="row"><button type="button" class="btn btn-secondary btn-sm" data-action="toggle-preview">${this.previewing?"Hide the preview":"Preview as a judge"}</button>
            <button type="button" class="btn btn-primary btn-sm" data-action="edit-question" data-id="new" ${s.busy||i||this.editing==="new"?"disabled":""} ${i?`title="${d(this.locked("any"))}"`:""}>+ Add a question</button></div>
        </div>
        ${this.stateNote()}
        ${this.editing==="new"?this.editForm(s,null):""}
        <div class="table-wrap"><table><thead><tr><th>Order</th><th>Question</th><th class="num">Weight</th><th>Required</th><th></th></tr></thead><tbody>
          ${e.map((n,r)=>this.editing===n.id?`<tr><td></td><td colspan="4">${this.editForm(s,n)}</td></tr>`:this.row(s,n,r,e.length)).join("")}
        </tbody></table></div>
        ${this.previewing?this.preview(t):""}
        ${this.changes.length?`<details style="margin-top: 1rem;"><summary class="muted" style="cursor:pointer;">Recent changes to this form (${this.changes.length})</summary>
          <div class="table-wrap"><table><thead><tr><th>When</th><th>Who</th><th>Question</th><th>What</th><th>From</th><th>To</th></tr></thead><tbody>
            ${this.changes.map(n=>`<tr><td>${d(R(n.changed_at))}</td><td>${d(n.changed_by_name??"")}</td><td>${d(P(n.question_label,40))}</td><td>${d(Ut[n.field]??n.field)}</td><td>${d(P(n.old_value))}</td><td>${d(P(n.new_value))}</td></tr>`).join("")}
          </tbody></table></div></details>`:""}
      </div>`}stateNote(){return this.state==="closed"?'<div class="alert alert-info">This round is closed, so its review form is a record and cannot be changed.</div>':this.state==="started"?`<div class="alert alert-warning"><b>${d(this.reviews())}.</b> You can still change the weights (scores are re-computed at once), the wording, the order, whether a question is required, which recommendations count as positive, add options, add questions that are not scored, and archive questions. You cannot change types, scale ends, option texts or add a scored question. When you edit wording, fix the wording, not the meaning: earlier answers were given to the old words.</div>`:'<div class="alert alert-info">No review is submitted yet, so everything can change. Once the first review is submitted, types, scales, option texts and new scored questions are locked.</div>'}row(s,e,t,i){const n=this.state==="closed",r=this.lastScoredReason(s,e),o=[G[e.type]??e.type];if(e.type==="scale"){const l=N(e);o.push(`${l.min} to ${l.max}${l.minLabel||l.maxLabel?` (${l.minLabel} … ${l.maxLabel})`:""}`)}(e.type==="single_choice"||e.type==="multi_choice")&&o.push(E(e).map(l=>le(e).includes(l)?`${l} ✓`:l).join(" · "));const c=l=>l?`title="${d(l)}"`:"";return`<tr style="${e.archived?"opacity: 0.6;":""}">
      <td style="white-space:nowrap;"><button type="button" class="btn btn-secondary btn-sm" data-action="move-question" data-id="${d(e.id)}" data-dir="-1" aria-label="Move up" ${s.busy||n||t===0?"disabled":""} ${c(n?this.locked("any"):"")}>↑</button>
        <button type="button" class="btn btn-secondary btn-sm" data-action="move-question" data-id="${d(e.id)}" data-dir="1" aria-label="Move down" ${s.busy||n||t===i-1?"disabled":""} ${c(n?this.locked("any"):"")}>↓</button></td>
      <td><b>${d(e.label)}</b> ${e.required?'<span class="muted">*</span>':""} ${e.archived?'<span class="badge badge-warning">archived</span>':""} ${Wt(e)?'<span class="badge badge-info">recommendation</span>':""}
        ${e.help_text?`<div class="muted">${d(e.help_text)}</div>`:""}<div class="muted">${d(o.join(" · "))}</div></td>
      <td class="num">${e.type==="scale"?d(e.weight):""}</td><td>${e.required?"yes":"no"}</td>
      <td><div class="row">
        <button type="button" class="btn btn-secondary btn-sm" data-action="edit-question" data-id="${d(e.id)}" ${s.busy||n?"disabled":""} ${c(n?this.locked("any"):"")}>Edit</button>
        ${e.archived?`<button type="button" class="btn btn-secondary btn-sm" data-action="archive-question" data-id="${d(e.id)}" data-archived="false" ${s.busy||n?"disabled":""} ${c(n?this.locked("any"):"")}>Restore</button>`:`<button type="button" class="btn btn-secondary btn-sm" data-action="archive-question" data-id="${d(e.id)}" data-archived="true" ${s.busy||n||r?"disabled":""} ${c(n?this.locked("any"):r||"Hides it from judges and stops scoring it; the answers are kept")}>Archive</button>`}
        ${this.state==="before"?`<button type="button" class="btn btn-danger btn-sm" data-action="delete-question" data-id="${d(e.id)}" data-label="${d(e.label)}" ${s.busy||r?"disabled":""} ${c(r)}>Delete</button>`:`<button type="button" class="btn btn-danger btn-sm" disabled title="${d(n?this.locked("any"):`${this.reviews()}: archive it instead, the answers are kept.`)}">Delete</button>`}
      </div></td></tr>`}editForm(s,e){var w,T;const t=e?e.type:this.draftType,i=this.state==="started",n=e?C(e):{},r=e?N(e):{min:0,max:10,minLabel:"",maxLabel:""},o=e?E(e):[],c=e?le(e):[],l=_=>_?`<div class="hint bad">${d(_)}</div>`:"",h=_=>_?"disabled":"",p=e?this.locked("type"):"",m=e?this.locked("scale"):"",f=!e&&i?this.locked("new-weight"):"",v=e?this.lastScoredReason(s,e):"",y=t==="single_choice"||t==="multi_choice";return`
      <div class="section" style="margin: 0.75rem 0;">
        <h3>${e?"Edit the question":"Add a question"}</h3>
        ${i&&e?'<div class="alert alert-warning">Earlier reviews answered the old wording. Change the wording to be clearer, not to mean something else.</div>':""}
        <div class="form-grid">
          <div class="field" style="grid-column: 1 / -1;"><label for="qe-label">Question</label><input id="qe-label" maxlength="300" value="${d(((w=this.typed)==null?void 0:w.label)??(e==null?void 0:e.label)??"")}" /></div>
          <div class="field" style="grid-column: 1 / -1;"><label for="qe-help">Help text (optional, shown under the question)</label><input id="qe-help" maxlength="1000" value="${d(((T=this.typed)==null?void 0:T.help)??(e==null?void 0:e.help_text)??"")}" /></div>
          <div class="field"><label for="qe-type">Type</label>
            <select id="qe-type" data-action="question-type" ${h(p)}>${Object.keys(G).map(_=>`<option value="${_}" ${_===t?"selected":""}>${d(G[_])}</option>`).join("")}</select>${l(p)}</div>
          <div class="field"><label for="qe-required">Required</label><select id="qe-required"><option value="yes" ${!e||e.required?"selected":""}>Yes</option><option value="no" ${e&&!e.required?"selected":""}>No</option></select>
            ${i?'<div class="hint">Turning it on applies to reviews submitted from now on; earlier reviews stay valid.</div>':""}</div>
          ${t==="scale"?`
            <div class="field"><label for="qe-weight">Weight (0 = not scored)</label><input id="qe-weight" type="number" min="0" step="0.5" value="${d((e==null?void 0:e.weight)??0)}" ${h(f)} />${l(f)}
              ${v?`<div class="hint bad">${d(v)}</div>`:'<div class="hint">A weight changes every score in the round at once.</div>'}</div>
            <div class="field"><label for="qe-min">Lowest score</label><input id="qe-min" type="number" value="${d(r.min)}" ${h(m)} />${l(m)}</div>
            <div class="field"><label for="qe-max">Highest score</label><input id="qe-max" type="number" value="${d(r.max)}" ${h(m)} /></div>
            <div class="field"><label for="qe-minlabel">Label of the lowest score</label><input id="qe-minlabel" maxlength="40" value="${d(r.minLabel)}" /></div>
            <div class="field"><label for="qe-maxlabel">Label of the highest score</label><input id="qe-maxlabel" maxlength="40" value="${d(r.maxLabel)}" /></div>`:""}
          ${y?this.optionFields(e,t,o,c,i,n):""}
        </div>
        <div class="row" style="margin-top: 0.9rem;">
          <button type="button" class="btn btn-primary" data-action="save-question" data-id="${d((e==null?void 0:e.id)??"new")}" ${s.busy?"disabled":""}>${e?"Save":"Add the question"}</button>
          <button type="button" class="btn btn-secondary" data-action="cancel-question">Cancel</button>
        </div>
      </div>`}optionFields(s,e,t,i,n,r){const o=s?this.locked("option-text"):"",c=s?this.locked("purpose"):n?this.locked("purpose"):"";return`
      <div class="field" style="grid-column: 1 / -1;">
        ${n&&s?`<label>Options (cannot be renamed or removed)</label><div>${t.map(l=>`<span class="tag">${d(l)}</span>`).join("")}</div>
            <label for="qe-newoptions" style="margin-top:0.5rem;">Add options (one per line)</label><textarea id="qe-newoptions" rows="2"></textarea>
            <div class="hint bad">${d(o)}</div>`:`<label for="qe-options">Options (one per line, at least two)</label><textarea id="qe-options" rows="4">${d(t.join(`
`))}</textarea>`}
      </div>
      ${e==="single_choice"?`
        <div class="field" style="grid-column: 1 / -1;">
          <label><input type="checkbox" id="qe-purpose" ${r.purpose==="recommendation"?"checked":""} ${c?"disabled":""} /> This is the recommendation question (the results count its positive options)</label>${Vt(c)}
          ${t.length?`<div style="margin-top:0.4rem;"><span class="muted">Counts as a positive recommendation:</span> ${t.map(l=>`<label style="margin-right:0.75rem; font-weight:400;"><input type="checkbox" class="qe-positive" value="${d(l)}" ${i.includes(l)?"checked":""} /> ${d(l)}</label>`).join("")}</div>`:""}
        </div>`:""}`}preview(s){const e=t=>{switch(t.type){case"scale":{const i=N(t),n=Math.min(i.max-i.min+1,101);return`<div class="row" style="gap:0.25rem;">${Array.from({length:n},(r,o)=>`<span class="badge">${i.min+o}</span>`).join("")}</div><div class="muted">${d(i.minLabel)} … ${d(i.maxLabel)}</div>`}case"single_choice":return E(t).map(i=>`<div><input type="radio" disabled /> ${d(i)}</div>`).join("");case"multi_choice":return E(t).map(i=>`<div><input type="checkbox" disabled /> ${d(i)}</div>`).join("");case"boolean":return'<div><input type="radio" disabled /> Yes <input type="radio" disabled /> No</div>';case"short_text":return'<input type="text" disabled style="width:100%;" />';default:return'<textarea disabled rows="2" style="width:100%;"></textarea>'}};return`<div class="section" style="margin-top: 1rem; background:#f8fafc;"><h3>As a judge sees it</h3>
      ${s.length?s.map(t=>`<div style="margin-bottom: 1rem;"><div><b>${d(t.label)}</b> ${t.required?'<span class="bad">*</span>':""}</div>${t.help_text?`<div class="muted">${d(t.help_text)}</div>`:""}${e(t)}</div>`).join(""):'<div class="empty">No active question.</div>'}
      <p class="muted" style="margin-bottom:0;">Read-only: nothing here is saved.</p></div>`}async onAction(s,e,t,i){var o,c;const n=e.getAttribute("data-id")??"",r=t.questions.find(l=>l.id===n);switch(s){case"toggle-preview":return this.previewing=!this.previewing,t.rerender(),!0;case"edit-question":return this.typed=null,this.editing=n,this.draftType=(r==null?void 0:r.type)??"scale",t.rerender(),!0;case"cancel-question":return this.typed=null,this.editing=null,t.rerender(),!0;case"question-type":return this.typed={label:((o=i.querySelector("#qe-label"))==null?void 0:o.value)??"",help:((c=i.querySelector("#qe-help"))==null?void 0:c.value)??""},this.draftType=e.value,t.rerender(),!0;case"save-question":return await this.save(t,i,r??null),!0;case"archive-question":return r!=null&&r.updated_at&&await t.run(async()=>{const l=e.getAttribute("data-archived")==="true";return await dt(r.id,r.updated_at,l),l?"Archived: judges no longer see it and it is no longer scored. The answers are kept.":"Restored."}),!0;case"delete-question":return!(r!=null&&r.updated_at)||!confirm(`Delete “${e.getAttribute("data-label")??""}”? No review is submitted yet, so nothing is lost. This cannot be undone.`)||await t.run(async()=>(await lt(r.id,r.updated_at),"Deleted.")),!0;case"move-question":{const l=[...t.questions].sort((m,f)=>m.position-f.position),h=l.findIndex(m=>m.id===n),p=h+Number(e.getAttribute("data-dir"));return h<0||p<0||p>=l.length||!t.round||([l[h],l[p]]=[l[p],l[h]],await t.run(async()=>(await ct(t.round.id,l.map(m=>m.id)),"Order saved."))),!0}}return!1}async save(s,e,t){var m;const i=f=>{var v;return(((v=e.querySelector(`#${f}`))==null?void 0:v.value)??"").trim()},n=f=>!!e.querySelector(`#${f}`),r=n("qe-type")?i("qe-type"):(t==null?void 0:t.type)??"scale",o=i("qe-label");if(!o)return s.flash("error","Type the question first.");const c=i("qe-required")!=="no",l={...t&&t.type===r?C(t):{}};let h=(t==null?void 0:t.weight)??0;if(r==="scale")n("qe-min")&&(l.min=Number(i("qe-min"))),n("qe-max")&&(l.max=Number(i("qe-max"))),l.min_label=i("qe-minlabel"),l.max_label=i("qe-maxlabel"),n("qe-weight")&&(h=Number(i("qe-weight"))||0);else{h=0;for(const f of["min","max","min_label","max_label"])delete l[f]}if(r==="single_choice"||r==="multi_choice"){const f=y=>i(y).split(`
`).map(w=>w.trim()).filter(Boolean),v=n("qe-options")?f("qe-options"):[...E(t),...f("qe-newoptions").filter(y=>!E(t).includes(y))];if(l.options=v,r==="single_choice"){const y=Array.from(e.querySelectorAll(".qe-positive:checked")).map(w=>w.value).filter(w=>v.includes(w));n("qe-purpose")&&!e.querySelector("#qe-purpose:disabled")&&((m=e.querySelector("#qe-purpose"))!=null&&m.checked?l.purpose="recommendation":delete l.purpose),l.purpose==="recommendation"?l.positive=y:delete l.positive}else delete l.purpose,delete l.positive}else delete l.options,delete l.purpose,delete l.positive;if(!t)return s.run(async()=>(await rt(s.round.id,{label:o,help_text:i("qe-help")||null,type:r,config:l,required:c,weight:h}),this.editing=null,this.typed=null,"Question added at the end of the form."));const p={};return o!==t.label&&(p.label=o),i("qe-help")!==(t.help_text??"")&&(p.help_text=i("qe-help")),r!==t.type&&(p.type=r),(JSON.stringify(ce(l))!==JSON.stringify(ce(C(t)))||r!==t.type)&&(p.config=l),c!==t.required&&(p.required=c),h!==t.weight&&(p.weight=h),Object.keys(p).length?t.updated_at?s.run(async()=>(await ot(t.id,t.updated_at,p),this.editing=null,this.typed=null,"Saved.")):s.flash("error","Reload the page and try again."):(this.editing=null,s.rerender())}}const Vt=a=>a?`<div class="hint bad">${d(a)}</div>`:"";function ce(a){return Object.fromEntries(Object.entries(a).sort(([s],[e])=>s.localeCompare(e)))}const A=(a,s)=>{var e;return(((e=a.querySelector(`#${s}`))==null?void 0:e.value)??"").trim()},q=(a,s)=>Number(A(a,s));class Kt{constructor(){u(this,"id","setup");u(this,"label","Round setup");u(this,"groups",[]);u(this,"preview",new Map);u(this,"proposed",null);u(this,"method","trigger_aware");u(this,"advancingOut",0);u(this,"advancingIn",0);u(this,"editor",new Qt)}async load(s){var n;await this.editor.load(s),this.groups=[],this.preview.clear(),this.advancingOut=0,this.advancingIn=0;const e=(n=s.round)==null?void 0:n.status,t=async r=>(await Q(r)).flatMap(o=>o.stories).filter(o=>o.advances).length;s.round&&(e==="reviewing"||e==="closed")&&(this.advancingOut=await t(s.round.id));const i=s.round?s.rounds.find(r=>r.number===s.round.number-1):void 0;if(i&&(this.advancingIn=await t(i.id)),s.round&&(e==="grouping"||e==="assigning")){this.groups=await pe(s.round.id);const r=await be(s.round.id);for(const o of r.groups??[])this.preview.set(o.group_id,o)}}render(s){return`${this.eventSection(s)}${this.roundSection(s)}${s.round?this.formSection(s)+this.stepsSection(s)+this.nextRoundSection(s):""}`}eventSection(s){const e=s.event;return`
      <div class="section">
        <h3>Event</h3>
        <div class="row" style="margin-bottom: 1rem;">
          ${s.events.length>1?`<div class="field"><label for="ev-pick">Event</label><select id="ev-pick" data-action="pick-event">${s.events.map(t=>`<option value="${d(t.id)}" ${t.id===(e==null?void 0:e.id)?"selected":""}>${d(t.title)} (${d(t.status)})</option>`).join("")}</select></div>`:""}
          <button type="button" class="btn btn-secondary btn-sm" data-action="new-event">+ New event</button>
        </div>
        ${e?`
        <div class="form-grid">
          <div class="field"><label for="ev-title">Title</label><input id="ev-title" maxlength="150" value="${d(e.title)}" /></div>
          <div class="field"><label for="ev-status">Status</label>
            <select id="ev-status">${["draft","open","archived"].map(t=>`<option value="${t}" ${e.status===t?"selected":""}>${t}</option>`).join("")}</select>
            <div class="hint">Judges and authors only see an <b>open</b> event.</div></div>
          <div class="field"><label for="ev-deadline">Submissions close at</label><input id="ev-deadline" type="datetime-local" value="${d(ie(e.submissions_close_at))}" />
            <div class="hint">After this time authors can no longer write or edit. Leave empty to close by hand.</div></div>
          <div class="field"><label for="ev-image">Image URL (https)</label><input id="ev-image" value="${d(e.image_url??"")}" placeholder="https://…" />
            ${e.image_url&&ae(e.image_url)?`<img class="event-img" src="${d(e.image_url)}" alt="" referrerpolicy="no-referrer" loading="lazy" />`:""}</div>
          <div class="field" style="grid-column: 1 / -1;"><label for="ev-desc">Description</label><textarea id="ev-desc" rows="3">${d(e.description??"")}</textarea></div>
        </div>
        <div class="row" style="margin-top: 1rem;"><button type="button" class="btn btn-primary" data-action="save-event" ${s.busy?"disabled":""}>Save event</button>
        ${e.submissions_closed?'<span class="badge badge-warning">Submissions closed</span>':""}</div>`:'<div class="empty">No event yet. Create one to get started.</div>'}
      </div>`}roundSection(s){if(!s.event)return"";const e=s.round;if(!e)return`<div class="section"><h3>Round 1</h3><p class="muted">This event has no round yet.</p><button type="button" class="btn btn-primary" data-action="create-round" ${s.busy?"disabled":""}>Create round 1</button></div>`;const t=e.status==="planned"||e.status==="grouping",i=(n,r,o,c="")=>`<div class="field"><label for="${n}">${r}</label><input id="${n}" type="number" min="1" value="${d(o)}" ${t?"":"disabled"} />${c?`<div class="hint">${c}</div>`:""}</div>`;return`
      <div class="section">
        <div class="step-head"><h3 style="margin:0;">${d(e.name)}</h3><span class="badge badge-info">${d(e.status)}</span></div>
        <div class="form-grid">
          <div class="field"><label for="rd-name">Name</label><input id="rd-name" value="${d(e.name)}" ${t?"":"disabled"} /></div>
          ${i("rd-group-size","Stories per group",e.group_size,e.number===1?"2 to 20; last year 5.":"2 to 20; the default for a later round is 10.")}
          ${i("rd-target","Judges per group (target)",e.target_judges_per_group)}
          ${i("rd-min","Reviews per story (minimum)",e.min_reviews_per_story,"A group is “complete” at this many.")}
          ${i("rd-per-judge","Groups per judge at first",e.groups_per_judge)}
          ${i("rd-throttle","New judges per group per day",e.max_new_judges_per_group_per_day,"Spreads top-ups out.")}
          <div class="field"><label for="rd-due">Reviews due by</label><input id="rd-due" type="datetime-local" value="${d(ie(e.review_due_at))}" ${t?"":"disabled"} /></div>
        </div>
        ${t?`<div class="row" style="margin-top:1rem;"><button type="button" class="btn btn-primary" data-action="save-round" ${s.busy?"disabled":""}>Save round settings</button></div>`:'<p class="muted" style="margin-bottom:0;">Settings are locked once the groups are confirmed.</p>'}
      </div>`}formSection(s){return this.editor.render(s)}stepsSection(s){var T,_;const e=s.round,t=s.event,i=(T=s.dashboard)==null?void 0:T.stats,n=(_=s.dashboard)==null?void 0:_.capacity,r=t.submissions_closed,o=e.status,c=o==="assigning"||o==="reviewing"||o==="closed",l=o==="reviewing"||o==="closed",h=s.questions.some(z=>!z.archived),p=(z,M,k)=>`<span class="step-num ${M?"ok":k?"now":""}">${M?"✓":z}</span>`,m=e.number>1,f=m?`
      <div class="section done">
        <div class="step-head">${p(1,!0,!1)}<h3 style="margin:0;">The stories</h3></div>
        <p class="muted" style="margin-bottom:0;">${this.advancingIn} ${this.advancingIn===1?"story":"stories"} advanced from round ${e.number-1}. They are read again, in new sets, by the judges you invite to this round.</p>
      </div>`:`
      <div class="section ${r?"done":""}">
        <div class="step-head">${p(1,r,!r)}<h3 style="margin:0;">Close submissions</h3></div>
        <p class="muted">${i?`${i.submitted_stories} submitted stories (${i.total_stories-i.submitted_stories} drafts or withdrawn).`:""}
          ${r?"Submissions are closed and the submitted stories are locked.":"Closing locks every submitted story: authors can no longer edit or withdraw. Drafting the groups does this too."}</p>
        ${r?"":`<button type="button" class="btn btn-secondary" data-action="close-submissions" ${s.busy?"disabled":""}>Close submissions &amp; lock stories</button>`}
      </div>`,v=o==="planned"||o==="grouping",y=`
      <div class="section ${c?"done":""}">
        <div class="step-head">${p(2,c,v)}<h3 style="margin:0;">Group the stories</h3></div>
        <p class="muted">${n?`${n.registered_judges} ${m?"judges accepted this round":"judges registered"} (${n.unrestricted_judges} with no blocklist). `:""}Stories with the same content warnings are put together so that more judges can read each group.${m?" Invite the judges on the Judges tab first: only those who accepted are counted and seated. A judge never gets a story they already read in an earlier round.":""}</p>
        ${v?`
          <div class="row">
            <div class="field"><label for="draft-method">Method</label><select id="draft-method" data-action="pick-method"><option value="trigger_aware" ${this.method==="trigger_aware"?"selected":""}>Cluster by content warnings (recommended)</option><option value="random" ${this.method==="random"?"selected":""}>Random (for comparison)</option></select></div>
            <button type="button" class="btn btn-primary" data-action="draft-groups" ${s.busy||!h?"disabled":""} style="align-self:flex-end;">${o==="grouping"?"Draft again":"Draft groups"}</button>
          </div>
          ${h?"":'<p class="bad">Add the review form first.</p>'}`:""}
        ${o==="grouping"||o==="assigning"?this.groupsHtml(s,o==="grouping"):""}
        ${o==="grouping"?`<div class="row" style="margin-top:1rem;"><button type="button" class="btn btn-success" data-action="confirm-groups" ${s.busy?"disabled":""}>Confirm these groups</button><span class="muted">Moving stories is no longer possible after this.</span></div>`:""}
      </div>`,w=`
      <div class="section ${l?"done":""}">
        <div class="step-head">${p(3,l,o==="assigning")}<h3 style="margin:0;">Seat the first judges and start reviewing</h3></div>
        ${o==="assigning"?`
          <p class="muted">Propose seats first and look at the numbers (the Capacity tab shows who sits where). Nobody sees a seat until you release.</p>
          <div class="row"><button type="button" class="btn btn-secondary" data-action="propose-seats" ${s.busy?"disabled":""}>Propose seats</button>
          ${this.proposed!==null?`<span class="good">${this.proposed} seats proposed.</span>`:""}
          <button type="button" class="btn btn-success" data-action="release-seats" ${s.busy?"disabled":""}>Release seats &amp; start reviewing</button></div>`:l?`<p class="good">Reviewing ${o==="closed"?"is closed.":"is under way."} See the Capacity and Results tabs.</p>`:'<p class="muted">Available once the groups are confirmed.</p>'}
      </div>`;return f+y+w}nextRoundSection(s){var o;const e=s.round;if(!(((o=s.rounds[s.rounds.length-1])==null?void 0:o.id)===e.id)||e.status!=="reviewing"&&e.status!=="closed")return"";const i=e.number+1,n=e.status==="reviewing"?`<p class="muted">Closing the round stops reviewing: nobody can submit, skip, leave or be seated any more. Do it when the results are in.</p>
         <button type="button" class="btn btn-secondary" data-action="close-round" ${s.busy?"disabled":""}>Close ${d(e.name)}</button>`:'<p class="good" style="margin-top:0;">This round is closed.</p>',r=this.advancingOut>0?`<p class="muted">${this.advancingOut} ${this.advancingOut===1?"story is":"stories are"} confirmed to advance. Round ${i} starts with sets of 10 stories, 4 judges per set and at least 3 reviews per story, and the same review form; you can change all of these before drafting.</p>
         <button type="button" class="btn btn-primary" data-action="create-next-round" ${s.busy?"disabled":""}>Create round ${i}</button>`:`<p class="muted">Confirm which stories advance on the Results tab first; round ${i} is made from them.</p>`;return`
      <div class="section">
        <h3>Next round</h3>
        ${n}
        <div style="margin-top: 1rem;">${r}</div>
      </div>`}groupsHtml(s,e){if(!this.groups.length)return'<div class="empty">No groups yet.</div>';const t=s.round.target_judges_per_group;return`<div style="margin-top: 1rem;">${this.groups.map(i=>{const n=this.preview.get(i.group_id),r=(n==null?void 0:n.eligible_judges_count)??0,o=r<t;return`<div class="group-card"><header>
          <div><b>Group ${i.number}</b> <span class="muted">· ${i.stories.length} stories · warnings:</span> ${F(i.trigger_slugs,s.triggers)}</div>
          <div class="${o?"bad":"good"}">${r} eligible judges${o?` (fewer than ${t})`:""}</div></header>
        ${i.stories.map(c=>`<div class="story"><div><b>${d(c.title)}</b> <span class="muted">by ${d(c.author_name)}</span><div>${F(c.trigger_slugs,s.triggers)}</div></div>
          ${e?`<div class="row"><select aria-label="Move to group" data-move-for="${d(c.story_id)}"><option value="">Move to…</option>${this.groups.filter(l=>l.group_id!==i.group_id).map(l=>`<option value="${d(l.group_id)}">Group ${l.number}</option>`).join("")}</select>
            <button type="button" class="btn btn-secondary btn-sm" data-action="move-story" data-story="${d(c.story_id)}" ${s.busy?"disabled":""}>Move</button></div>`:""}</div>`).join("")}
      </div>`}).join("")}</div>`}async onAction(s,e,t,i){var r,o;if(await this.editor.onAction(s,e,t,i))return;const n=x();switch(s){case"pick-event":{const c=e.value;t.event=t.events.find(l=>l.id===c)??t.event,await t.reload();return}case"pick-method":this.method=e.value==="random"?"random":"trigger_aware";return;case"new-event":return t.run(async()=>{const{data:c,error:l}=await n.from("events").insert({title:"New event",status:"draft"}).select("*").single();if(l)throw l;return t.events=[c,...t.events],t.event=c,"Event created as a draft. Fill it in and save."});case"save-event":{const c={title:A(i,"ev-title"),description:A(i,"ev-desc"),image:A(i,"ev-image"),status:A(i,"ev-status"),deadline:A(i,"ev-deadline")};return t.run(async()=>{if(c.image&&!ae(c.image))throw new Error("The image URL must start with https:// and contain no spaces.");if(!c.title)throw new Error("The event needs a title.");const{error:l}=await n.from("events").update({title:c.title,description:c.description||null,image_url:c.image||null,status:c.status,submissions_close_at:ne(c.deadline)}).eq("id",t.event.id);if(l)throw l;return"Event saved."})}case"create-round":return t.run(async()=>{const{error:c}=await n.from("rounds").insert({event_id:t.event.id,number:1,name:"Round 1"});if(c)throw c;return"Round 1 created with the default settings."});case"save-round":{const c={name:A(i,"rd-name"),group_size:q(i,"rd-group-size"),target:q(i,"rd-target"),min:q(i,"rd-min"),perJudge:q(i,"rd-per-judge"),throttle:q(i,"rd-throttle"),due:A(i,"rd-due")};return t.run(async()=>{const{error:l}=await n.from("rounds").update({name:c.name||t.round.name,group_size:c.group_size,target_judges_per_group:c.target,min_reviews_per_story:c.min,groups_per_judge:c.perJudge,max_new_judges_per_group_per_day:c.throttle,review_due_at:ne(c.due)}).eq("id",t.round.id);if(l)throw l;return"Round settings saved."})}case"close-round":return confirm(`Close ${t.round.name}? Nobody will be able to submit, skip, leave or be seated in it any more.`)?t.run(async()=>(await Qe(t.round.id),`${t.round.name} is closed.`)):void 0;case"create-next-round":return t.run(async()=>{const c=await Ve(t.round.id);return t.selectRound(c.number),`Round ${c.number} created from ${c.advancing_stories} advancing stories. Check its settings, invite judges, then draft the groups.`});case"seed-questions":return t.run(async()=>`Added ${(await We(t.round.id)).questions} questions.`);case"close-submissions":return confirm("Close submissions and lock every submitted story? Authors will no longer be able to edit them.")?t.run(async()=>`Submissions closed; ${(await Ye(t.event.id)).newly_locked_stories} stories locked.`):void 0;case"draft-groups":return t.run(async()=>{const c=await Ge(t.round.id,this.method);return`Drafted ${c.total_groups} groups from ${c.total_stories} stories. Look them over, move stories if you want, then confirm.`});case"move-story":{const c=e.getAttribute("data-story")??"",l=(o=(r=e.parentElement)==null?void 0:r.querySelector("select"))==null?void 0:o.value;if(!l){t.flash("error","Choose the group to move the story to.");return}return t.run(async()=>(await yt(t.round.id,c,l),"Story moved."))}case"confirm-groups":return confirm("Confirm the groups? After this, stories can no longer be moved between groups.")?t.run(async()=>(await Pe(t.round.id),"Groups confirmed. Now propose the first seats.")):void 0;case"propose-seats":return t.run(async()=>{const c=await Je(t.round.id);this.proposed=c.seats_proposed});case"release-seats":return confirm("Release the seats and start reviewing? Judges can then see and read their stories.")?t.run(async()=>`Reviewing has started: ${(await Ue(t.round.id)).total_seats_released} seats released.`):void 0}}}const Xt=["grouping","assigning","reviewing"],Zt={created:"added",label:"label",description:"description",position:"place in the list",active:"active",deleted:"deleted"};class es{constructor(){u(this,"id","triggers");u(this,"label","Triggers");u(this,"list",[]);u(this,"changes",[]);u(this,"editing",null)}async load(s){var e;[this.list,this.changes]=await Promise.all([et(((e=s.event)==null?void 0:e.id)??null),tt(30)]),this.editing&&!this.list.some(t=>t.slug===this.editing)&&(this.editing=null)}render(s){var i;const e=s.round&&Xt.includes(s.round.status),t=s.draftTrigger;return`
      <p class="muted">These are the content-warning themes. Authors tag their stories with them and judges block the ones they do not want to read. A theme's short name (its slug) is fixed when it is added and never changes.</p>
      ${e?`<div class="alert alert-warning"><b>Round ${d(s.round.number)} is ${d(s.round.status)}.</b> Judges chose their blocklists from the current wording, so edit a label or description to make it clearer, not to change what it means. A new meaning is a new theme.</div>`:""}
      <div class="section">
        <h3>Add a theme</h3>
        ${t?`<div class="alert alert-info">Filled in from a judge's report. Change the wording as you like, then add it. It does not tag the story: do that by hand.</div>`:""}
        <div class="form-grid">
          <div class="field"><label for="tg-label">Label (what people see)</label><input id="tg-label" maxlength="80" value="${d((t==null?void 0:t.label)??"")}" placeholder="e.g. Medical procedures" /></div>
          <div class="field"><label for="tg-desc">Description (optional)</label><input id="tg-desc" maxlength="300" value="${d((t==null?void 0:t.description)??"")}" placeholder="One line that tells a reader what it covers" /></div>
        </div>
        <div class="row" style="margin-top: 0.75rem;">
          <button type="button" class="btn btn-primary" data-action="add-trigger" ${s.busy?"disabled":""}>Add the theme</button>
          ${t?'<button type="button" class="btn btn-secondary" data-action="clear-draft">Clear</button>':""}
        </div>
      </div>
      <div class="section">
        <h3>The list (${this.list.length})</h3>
        ${this.list.length?this.table(s,!!e):'<div class="empty">No themes yet.</div>'}
        <p class="muted" style="margin-bottom:0;">Counts: stories include drafts and withdrawn ones. "Judges" are the registered judges of ${d(((i=s.event)==null?void 0:i.title)??"the event")} who block the theme.</p>
      </div>
      <div class="section">
        <h3>Recent changes</h3>
        ${this.changes.length?`<div class="table-wrap"><table><thead><tr><th>When</th><th>Who</th><th>Theme</th><th>What</th><th>From</th><th>To</th></tr></thead><tbody>
          ${this.changes.map(n=>`<tr><td>${d(R(n.changed_at))}</td><td>${d(n.changed_by_name??"")}</td><td>${d(n.slug)}</td><td>${d(Zt[n.field]??n.field)}</td><td>${d(n.old_value??"")}</td><td>${d(n.new_value??"")}</td></tr>`).join("")}
        </tbody></table></div>`:'<div class="empty">Nothing has been changed yet.</div>'}
      </div>`}table(s,e){const t=this.list.length-1;return`<div class="table-wrap"><table><thead><tr><th>Order</th><th>Theme</th><th class="num">Stories here</th><th class="num">Stories, all events</th><th class="num">Judges</th><th></th></tr></thead><tbody>
      ${this.list.map((i,n)=>this.editing===i.slug?this.editRow(i,s,e):`<tr>
        <td style="white-space:nowrap;"><button type="button" class="btn btn-secondary btn-sm" data-action="move-up" data-slug="${d(i.slug)}" data-index="${n}" aria-label="Move ${d(i.label)} up" ${s.busy||n===0?"disabled":""}>↑</button>
          <button type="button" class="btn btn-secondary btn-sm" data-action="move-down" data-slug="${d(i.slug)}" data-index="${n}" aria-label="Move ${d(i.label)} down" ${s.busy||n===t?"disabled":""}>↓</button></td>
        <td><b>${d(i.label)}</b> ${i.active?"":'<span class="badge badge-warning">retired</span>'}
          ${i.description?`<div class="muted">${d(i.description)}</div>`:""}<div class="muted">${d(i.slug)}</div></td>
        <td class="num">${i.stories_in_event}</td><td class="num">${i.stories_total}</td>
        <td class="num" title="${d(`${i.default_blockers} people have it in their default blocklist`)}">${i.judges_blocking}</td>
        <td><div class="row">
          <button type="button" class="btn btn-secondary btn-sm" data-action="edit-trigger" data-slug="${d(i.slug)}" ${s.busy?"disabled":""}>Edit</button>
          ${i.active?`<button type="button" class="btn btn-secondary btn-sm" data-action="retire-trigger" data-slug="${d(i.slug)}" title="Authors and judges can no longer pick it; it stays where it is and still counts for matching" ${s.busy?"disabled":""}>Retire</button>`:`<button type="button" class="btn btn-secondary btn-sm" data-action="reactivate-trigger" data-slug="${d(i.slug)}" ${s.busy?"disabled":""}>Reactivate</button>`}
          ${i.deletable?`<button type="button" class="btn btn-danger btn-sm" data-action="delete-trigger" data-slug="${d(i.slug)}" data-label="${d(i.label)}" ${s.busy?"disabled":""}>Delete</button>`:""}
        </div></td></tr>`).join("")}
      </tbody></table></div>`}editRow(s,e,t){return`<tr><td></td><td colspan="4">
        <div class="form-grid">
          <div class="field"><label for="tg-edit-label">Label</label><input id="tg-edit-label" maxlength="80" value="${d(s.label)}" /></div>
          <div class="field"><label for="tg-edit-desc">Description</label><input id="tg-edit-desc" maxlength="300" value="${d(s.description??"")}" /></div>
        </div>
        <div class="muted" style="margin-top: 0.4rem;">${t?"A round is running: judges chose from the current wording, so change it for clarity, not meaning. ":""}The short name <b>${d(s.slug)}</b> stays.</div>
      </td><td><div class="row">
        <button type="button" class="btn btn-primary btn-sm" data-action="save-trigger" data-slug="${d(s.slug)}" ${e.busy?"disabled":""}>Save</button>
        <button type="button" class="btn btn-secondary btn-sm" data-action="cancel-edit">Cancel</button>
      </div></td></tr>`}async onAction(s,e,t,i){const n=e.getAttribute("data-slug")??"",r=o=>{var c;return((c=i.querySelector(`#${o}`))==null?void 0:c.value)??""};switch(s){case"add-trigger":{const o=r("tg-label").trim();return o?t.run(async()=>(await st(o,r("tg-desc").trim()||null),t.draftTrigger=null,`“${o}” is added (active, last in the list).`)):t.flash("error","Type a label first.")}case"clear-draft":return t.draftTrigger=null,t.rerender();case"edit-trigger":return this.editing=n,t.rerender();case"cancel-edit":return this.editing=null,t.rerender();case"save-trigger":{const o=r("tg-edit-label").trim();return o?t.run(async()=>(await X(n,{label:o,description:r("tg-edit-desc").trim()}),this.editing=null,"Saved.")):t.flash("error","The label cannot be empty.")}case"move-up":case"move-down":{const o=Number(e.getAttribute("data-index"))+(s==="move-up"?0:2);return t.run(async()=>{await X(n,{position:o})})}case"retire-trigger":return confirm("Retire this theme? Authors and judges can no longer pick it. Stories and blocklists that already have it keep it, and it still counts when judges are matched to stories.")?t.run(async()=>(await Z(n,!1),"Retired.")):void 0;case"reactivate-trigger":return t.run(async()=>(await Z(n,!0),"Active again."));case"delete-trigger":return confirm(`Delete “${e.getAttribute("data-label")??n}”? Nothing uses it. This cannot be undone (the change log keeps a record).`)?t.run(async()=>(await it(n),"Deleted.")):void 0}}}class ts extends O{constructor(){super(It);u(this,"events",[]);u(this,"event",null);u(this,"round",null);u(this,"rounds",[]);u(this,"questions",[]);u(this,"triggers",[]);u(this,"dashboard",null);u(this,"testClock",null);u(this,"draftTrigger",null);u(this,"busy",!1);u(this,"isAdmin",!1);u(this,"loading",!0);u(this,"loadError",null);u(this,"message",null);u(this,"tabs",[new Kt,new Dt,new Nt,new Ht,new es,new Jt,new Ft]);u(this,"active","setup");u(this,"roundNumber",null);u(this,"roundEventId",null);this.root.addEventListener("click",e=>void this.dispatch(e)),this.root.addEventListener("change",e=>{const t=e.target.closest("select[data-action], input[data-action]");t&&this.dispatch(e,t)})}connectedCallback(){this.start()}flash(e,t){this.message={type:e,text:t},this.render()}async run(e){this.busy=!0,this.message=null,this.render();try{const t=await e();t&&(this.message={type:"success",text:t}),await this.reload()}catch(t){this.message={type:"error",text:$(t)},this.busy=!1,this.render();return}this.busy=!1,this.render()}async reload(){var t;await this.loadData();const e=this.tabs.find(i=>i.id===this.active);try{await((t=e==null?void 0:e.load)==null?void 0:t.call(e,this))}catch(i){this.message={type:"error",text:$(i)}}this.render()}rerender(){this.render()}selectRound(e){this.roundNumber=e}go(e){this.active=e,this.message=null,this.reload()}async start(){var e,t;this.loading=!0,this.render();try{this.isAdmin=!!await b("is_admin"),this.isAdmin&&await this.loadData(!0),this.isAdmin&&await((t=(e=this.tabs.find(i=>i.id===this.active))==null?void 0:e.load)==null?void 0:t.call(e,this))}catch(i){this.isAdmin=!1,this.loadError=$(i,"The admin screen could not be loaded.")}finally{this.loading=!1,this.render()}}async loadData(e=!1){var o,c;const t=x();this.testClock=((o=await b("admin_get_test_clock"))==null?void 0:o.override)??null;const i=await t.from("triggers").select("*").order("position").order("label");if(i.error)throw i.error;this.triggers=i.data??[];const n=await t.from("events").select("*").order("created_at",{ascending:!1});if(n.error)throw n.error;this.events=n.data??[];const r=this.event&&this.events.find(l=>l.id===this.event.id);if(this.event=r??(e?this.events.find(l=>l.status==="open"):void 0)??this.events[0]??null,this.round=null,this.rounds=[],this.questions=[],this.dashboard=null,this.event){const l=await t.from("rounds").select("*").eq("event_id",this.event.id).order("number");if(l.error)throw l.error;if(this.rounds=l.data??[],this.roundEventId!==this.event.id&&(this.roundNumber=null),this.roundEventId=this.event.id,this.round=this.rounds.find(h=>h.number===this.roundNumber)??this.rounds[this.rounds.length-1]??null,this.roundNumber=((c=this.round)==null?void 0:c.number)??null,this.round){const h=await t.from("review_questions").select("*").eq("round_id",this.round.id).order("position");if(h.error)throw h.error;this.questions=h.data??[],this.dashboard=await b("get_admin_dashboard_stats",{p_round_id:this.round.id}),this.round=this.dashboard.round??this.round}}}async dispatch(e,t){var r,o;const i=t??e.target.closest("[data-action]");if(!i||e.type==="click"&&(i.tagName==="SELECT"||i.tagName==="INPUT"))return;const n=i.getAttribute("data-action")??"";if(n==="tab")return this.go(i.getAttribute("data-tab")??"setup");if(n==="round")return this.selectRound(Number(i.getAttribute("data-round"))),this.message=null,void await this.reload();if(n==="dismiss")return this.message=null,this.render();try{await((o=(r=this.tabs.find(c=>c.id===this.active))==null?void 0:r.onAction)==null?void 0:o.call(r,n,i,this,this.root))}catch(c){this.flash("error",$(c))}}render(){var i;if(this.loading){this.root.innerHTML='<div class="admin-card"><div class="empty">Loading the admin screen…</div></div>';return}if(this.loadError){this.root.innerHTML=`<div class="admin-card"><div class="alert alert-error"><b>The admin screen could not be loaded.</b> ${d(this.loadError)}</div></div>`;return}if(!this.isAdmin){this.root.innerHTML='<div class="admin-card" style="text-align:center; padding: 3rem;"><h2 style="color:#991b1b; margin-top:0;">Access denied</h2><p class="muted">This screen is for the organizers. To switch to an administrator account, sign out with the account button at the top of the page.</p></div>';return}const e=this.tabs.find(n=>n.id===this.active)??this.tabs[0],t=window.scrollY;this.root.innerHTML=`
      <div class="admin-card">
        ${this.testClock?`<div class="alert alert-error clock-banner" role="alert"><b>Test clock is set to ${d(R(this.testClock))}:</b> every story-review rule runs as if it were then.</div>`:""}
        <div class="header">
          <div><h1 class="title">Story review: organizers</h1>
            <p class="subtitle">${d(((i=this.event)==null?void 0:i.title)??"No event yet")}${this.round?` · round ${d(this.round.number)} is ${d(this.round.status)}`:""}</p></div>
          <div class="row"><span class="badge badge-admin">Admin</span></div>
        </div>
        ${this.rounds.length>1?`<div class="tabs round-switch" role="group" aria-label="Round">${this.rounds.map(n=>{var r,o;return`<button type="button" class="tab-btn ${n.number===((r=this.round)==null?void 0:r.number)?"active":""}" data-action="round" data-round="${d(n.number)}" aria-pressed="${n.number===((o=this.round)==null?void 0:o.number)}">${d(n.name)}</button>`}).join("")}</div>`:""}
        <div class="tabs">${this.tabs.map(n=>`<button type="button" class="tab-btn ${n.id===e.id?"active":""}" data-action="tab" data-tab="${d(n.id)}">${d(n.label)}</button>`).join("")}</div>
        ${this.message?`<div class="alert alert-${this.message.type}">${d(this.message.text)} <button type="button" class="btn btn-sm btn-secondary" data-action="dismiss" style="float:right;">OK</button></div>`:""}
        ${e.render(this)}
      </div>`,window.scrollTo({top:t})}}customElements.get("rgai-admin")||customElements.define("rgai-admin",ts);const ue={account:["Your account","Sign in or create an account to see your account settings."],submit:["Submit a story","Sign in or create an account to submit your story."],review:["Review stories","Sign in to see the stories assigned to you."],admin:["Story review admin","Sign in with an organizer account."]};class ke extends HTMLElement{constructor(){super(...arguments);u(this,"view","account");u(this,"shownUser");u(this,"unsubscribe",null);u(this,"onAuthChanged",e=>{var t,i;this.show(((i=(t=e.detail)==null?void 0:t.user)==null?void 0:i.id)??null)})}connectedCallback(){this.view=this.getAttribute("data-view")||"account",this.initApp()}attributeChangedCallback(e,t,i){this.view=i||"account",this.shownUser!==void 0&&(this.shownUser?this.renderView():this.renderAuth())}disconnectedCallback(){var e;(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}async initApp(){if(!this.unsubscribe){window.addEventListener("rgai-auth-changed",this.onAuthChanged),this.unsubscribe=()=>window.removeEventListener("rgai-auth-changed",this.onAuthChanged);try{const{user:e}=await Ee();if(!this.unsubscribe)return;this.show((e==null?void 0:e.id)??null);const{data:t}=x().auth.onAuthStateChange((n,r)=>{var o;this.show(((o=r==null?void 0:r.user)==null?void 0:o.id)??null)}),i=this.unsubscribe;this.unsubscribe=()=>{i(),t.subscription.unsubscribe()}}catch(e){console.warn("Supabase auth error. Rendering sign-in:",e),this.show(null)}}}show(e){e!==this.shownUser&&(this.shownUser=e,e?this.renderView():this.renderAuth())}renderAuth(){const[e,t]=ue[this.view]??ue.account,i=document.createElement("rg-sign-in-prompt");i.setAttribute("heading",e),i.setAttribute("message",t),this.replaceChildren(i)}renderView(){switch(this.view){case"account":this.innerHTML="<rgai-account></rgai-account>";break;case"submit":this.innerHTML="<rgai-submit></rgai-submit>";break;case"review":this.innerHTML="<rgai-review></rgai-review>";break;case"admin":this.innerHTML="<rgai-admin></rgai-admin>";break;default:this.innerHTML="<rgai-account></rgai-account>"}}}u(ke,"observedAttributes",["data-view"]);customElements.get("rgai-app")||customElements.define("rgai-app",ke);function J(){document.querySelectorAll('#rgai-app:not([data-mounted="true"])').forEach(s=>{s.setAttribute("data-mounted","true");const e=s.getAttribute("data-view")||"account",t=document.createElement("rgai-app");t.setAttribute("data-view",e),s.appendChild(t)})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",J):J(),window.addEventListener("mercury:load",J));export{ke as RgaiAppElement,J as mountRgaiApp};
//# sourceMappingURL=story-review.js.map
