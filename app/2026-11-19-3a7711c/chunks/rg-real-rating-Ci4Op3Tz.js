var h=Object.defineProperty;var m=(e,n,t)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var p=(e,n,t)=>m(e,typeof n!="symbol"?n+"":n,t);import{B as b}from"./base-element-M0S_n-xP.js";const _=["https://images.squarespace-cdn.com/content/677c1269fe60517a0976d6fc/c1a68ac5-3b6d-4c52-be08-d0f677b942dc/0+REAL+rating.png?content-type=image%2Fpng","https://images.squarespace-cdn.com/content/677c1269fe60517a0976d6fc/88536fac-ac54-445d-90ca-9be9a43b9622/1+REAL+rating.png?content-type=image%2Fpng","https://images.squarespace-cdn.com/content/677c1269fe60517a0976d6fc/881d643b-6634-4b26-b9a0-7b42ec044ae6/2+REAL+rating.png?content-type=image%2Fpng","https://images.squarespace-cdn.com/content/677c1269fe60517a0976d6fc/db06f6df-8c10-4791-ad59-82bec050e991/3+REAL+rating.png?content-type=image%2Fpng","https://images.squarespace-cdn.com/content/677c1269fe60517a0976d6fc/7da18b37-c0e0-4530-b148-1aca29353118/4+REAL+rating.png?content-type=image%2Fpng","https://images.squarespace-cdn.com/content/677c1269fe60517a0976d6fc/93d51ec6-af00-4aac-b11b-dfa7e8f7d20e/5+REAL+rating.png?content-type=image%2Fpng"],y=["Your work was created entirely by humans without AI involvement.","You used only basic automated tools (spell-check, audio cleanup, captions). No generative AI was involved.","You used AI for ideas or structure only. No AI-generated content appears in the final work.","Some AI-generated elements appear in your work, but they are incidental and don't change the core meaning.","AI made substantial contributions — equivalent to a co-author or creator. The work would be noticeably different without AI.","The work is largely or entirely AI-generated, or end-users interact directly with AI in the product."],l=[{id:"visuals",label:"Visuals",sub:"Video, images, graphics",icon:"🖼️"},{id:"audio",label:"Audio",sub:"Music, speech, sound",icon:"🎙️"},{id:"text",label:"Text",sub:"Writing, scripts, research",icon:"📄"}],v=[{id:"q_ai_prompt",text:"Did you use generative AI to brainstorm, prompt, or get ideas for any part of your work?",context:null,applicableTo:["visuals","audio","text"],yes:{next:"q_content_visuals_or_first"},no:{next:"q_source_material"}},{id:"q_content_visuals_or_first",_router:!0,route:["q_gen_visuals","q_gen_audio","q_gen_text"]},{id:"q_gen_visuals",text:"Are any AI-generated images, video clips, or visual effects present in the final work?",context:"Even if edited or stylized afterward.",applicableTo:["visuals"],yes:{set:{visuals:3},next:"q_central_visuals"},no:{set:{visuals:2},next:"q_gen_audio_if_selected"}},{id:"q_central_visuals",text:"Are those AI-generated visuals a central or defining part of the work?",context:"Would removing them significantly change the piece?",applicableTo:["visuals"],yes:{next:"q_human_visuals"},no:{set:{visuals:3},next:"q_gen_audio_if_selected"}},{id:"q_human_visuals",text:"Are any significant portions of the visuals entirely human-made?",context:"e.g. hand-drawn, photographed, filmed without AI generation.",applicableTo:["visuals"],yes:{set:{visuals:4},next:"q_gen_audio_if_selected"},no:{set:{visuals:5},next:"q_gen_audio_if_selected"}},{id:"q_gen_audio_if_selected",_router:!0,route:["q_gen_audio","q_gen_text"]},{id:"q_gen_audio",text:"Are any AI-generated sounds, music, voice lines, or audio clips in the final work?",context:"Even if edited, pitch-shifted, or mixed with human recordings.",applicableTo:["audio"],yes:{set:{audio:3},next:"q_central_audio"},no:{set:{audio:2},next:"q_gen_text_if_selected"}},{id:"q_central_audio",text:"Is the AI-generated audio a central or defining part of the work?",context:"Would removing it significantly change the piece?",applicableTo:["audio"],yes:{next:"q_human_audio"},no:{set:{audio:3},next:"q_gen_text_if_selected"}},{id:"q_human_audio",text:"Are any significant portions of the audio entirely human-performed or recorded?",context:"e.g. live instruments, human voice, field recordings.",applicableTo:["audio"],yes:{set:{audio:4},next:"q_gen_text_if_selected"},no:{set:{audio:5},next:"q_gen_text_if_selected"}},{id:"q_gen_text_if_selected",_router:!0,route:["q_gen_text"]},{id:"q_gen_text",text:"Are any AI-generated phrases, sentences, or passages present in the final text?",context:"Includes scripts, captions, lyrics, copy, or research summaries.",applicableTo:["text"],yes:{set:{text:3},next:"q_central_text"},no:{set:{text:2},next:"q_automation_check"}},{id:"q_central_text",text:"Would the AI text require authorship credit if it had been written by a human collaborator?",context:"i.e. it's more than a minor fill-in — it meaningfully shapes the work.",applicableTo:["text"],yes:{next:"q_human_text"},no:{set:{text:3},next:"q_automation_check"}},{id:"q_human_text",text:"Are significant portions of the text entirely human-written?",context:"Beyond just prompts or editing — actual written content.",applicableTo:["text"],yes:{set:{text:4},next:"q_automation_check"},no:{set:{text:5},next:"q_automation_check"}},{id:"q_source_material",text:"Did any source material, assets, or components you used come from AI generation?",context:"e.g. stock AI images, AI-written templates, AI-generated audio beds.",applicableTo:["visuals","audio","text"],yes:{next:"q_content_visuals_or_first"},no:{next:"q_automation_check"}},{id:"q_automation_check",_router:!0,route:["q_auto_visuals","q_auto_audio","q_auto_text"]},{id:"q_auto_visuals",text:"Did you use automated tools on your visuals?",context:"e.g. AI-powered cleanup, background removal, upscaling, auto-color grading.",applicableTo:["visuals"],_autoOnly:"visuals",yes:{set:{visuals:1},next:"q_auto_audio_if_selected"},no:{next:"q_auto_audio_if_selected"}},{id:"q_auto_audio_if_selected",_router:!0,route:["q_auto_audio","q_auto_text"]},{id:"q_auto_audio",text:"Did you use automated tools on your audio?",context:"e.g. noise removal, AI mastering, auto-transcription, automated captions.",applicableTo:["audio"],_autoOnly:"audio",yes:{set:{audio:1},next:"q_auto_text_if_selected"},no:{next:"q_auto_text_if_selected"}},{id:"q_auto_text_if_selected",_router:!0,route:["q_auto_text"]},{id:"q_auto_text",text:"Did you use automated writing tools on your text?",context:"e.g. spell-check, grammar correction, predictive text, autocomplete.",applicableTo:["text"],_autoOnly:"text",yes:{set:{text:1},next:"DONE"},no:{next:"DONE"}}],c={};v.forEach(e=>{c[e.id]=e});function g(){return{phase:"select",selected:[],qid:null,scores:{},history:[]}}function f(e,n){if(!n.applicableTo)return!0;if(n._autoOnly){const t=n._autoOnly;return!(!e.selected.includes(t)||(e.scores[t]||0)>=2)}return n.applicableTo.some(t=>e.selected.includes(t))}function d(e,n){if(!n||n==="DONE")return"DONE";const t=c[n];if(!t)return"DONE";if(t._router){for(const r of t.route??[]){const o=c[r];if(o&&f(e,o))return d(e,r)}return"DONE"}if(!f(e,t)){const r=t.no,o=typeof r=="object"?r.next:r;return d(e,o)}return n}function q(e,n){if(n)for(const[t,r]of Object.entries(n))e.selected.includes(t)&&(e.scores[t]=Math.max(e.scores[t]||0,r))}function k(e,n){const r=c[e.qid][n];e.history.push({qid:e.qid,scores:{...e.scores}}),r&&typeof r=="object"&&r.set&&q(e,r.set);const o=r&&typeof r=="object"?r.next:r,i=d(e,o);i==="DONE"?(e.selected.forEach(a=>{a in e.scores||(e.scores[a]=0)}),e.phase="result"):e.qid=i}function w(e){if(!e.history.length)return;const n=e.history.pop();e.qid=n.qid,e.scores={...n.scores},e.phase="question"}function A(e){if(!e.selected.length)return;const n={};e.selected.forEach(r=>n[r]=0),e.scores=n,e.history=[];const t=d(e,"q_ai_prompt");e.qid=t,e.phase=t==="DONE"?"result":"question"}function F(e,n){const t=e.selected.indexOf(n);t===-1?e.selected.push(n):e.selected.splice(t,1)}function C(e){return 2+e.selected.length*3}function E(e){const n=e.selected.map(r=>({...l.find(i=>i.id===r),score:e.scores[r]||0})),t=Math.max(...n.map(r=>r.score));return{facets:n,overall:t,highest:n.filter(r=>r.score===t).map(r=>r.id)}}const I=`
:host { display: block; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  #rr-widget {
    font-family: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
    max-width: 680px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    color: #2C2C2A;
  }
  .rr-header { text-align: center; margin-bottom: 1.5rem; }
  .rr-header h2 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #2C2C2A;
  }
  .rr-header p { font-size: 14px; color: #5F5E5A; margin-top: 4px; }

  /* ── Facet selection ── */
  .rr-facet-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 1rem;
  }
  .rr-facet-btn {
    background: #F5F4EF;
    border: 2px solid #D3D1C7;
    border-radius: 10px;
    padding: 18px 8px 14px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transition: background 0.15s, border-color 0.15s, transform 0.1s;
    font-family: inherit;
    width: 100%;
    position: relative;
  }
  .rr-facet-btn:hover { background: #FFF3CC; border-color: #FFB800; transform: translateY(-1px); }
  .rr-facet-btn.selected {
    background: #FFB800;
    border-color: #FFB800;
  }
  .rr-facet-btn.selected .rr-facet-check { opacity: 1; }
  .rr-facet-check {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    background: #2C2C2A;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rr-facet-check::after {
    content: '✓';
    color: #FFB800;
    font-size: 10px;
    font-weight: 900;
    line-height: 1;
  }
  .rr-facet-icon { font-size: 28px; }
  .rr-facet-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #2C2C2A;
    text-align: center;
    line-height: 1.3;
  }
  .rr-facet-sub {
    font-size: 10px;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0;
    color: #5F5E5A;
    text-align: center;
    line-height: 1.3;
    margin-top: -4px;
  }
  .rr-facet-btn.selected .rr-facet-sub { color: #2C2C2A; }
  .rr-start-btn {
    width: 100%;
    background: #2C2C2A;
    border: none;
    border-radius: 8px;
    color: #FFB800;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 13px 24px;
    cursor: pointer;
    transition: background 0.15s, opacity 0.15s;
    margin-bottom: 1.5rem;
  }
  .rr-start-btn:disabled { opacity: 0.35; cursor: not-allowed; }
  .rr-start-btn:not(:disabled):hover { background: #444440; }

  /* ── Facet chips (shown during Q&A) ── */
  .rr-chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 0.75rem;
  }
  .rr-chip {
    background: #F5F4EF;
    border: 1.5px solid #D3D1C7;
    border-radius: 20px;
    padding: 3px 10px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #888780;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .rr-chip.active { background: #FFB800; border-color: #FFB800; color: #2C2C2A; }

  /* ── Card & question ── */
  .rr-card {
    background: #ffffff;
    border: 1px solid #D3D1C7;
    border-radius: 12px;
    padding: 1.25rem;
  }
  .rr-progress { display: flex; gap: 4px; margin-bottom: 1rem; }
  .rr-dot {
    height: 4px;
    border-radius: 2px;
    background: #D3D1C7;
    flex: 1;
    transition: background 0.2s;
  }
  .rr-dot.done { background: #FFB800; }
  .rr-question {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    color: #2C2C2A;
  }
  .rr-q-context {
    font-size: 12px;
    color: #888780;
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }
  .rr-btn-group { display: flex; gap: 10px; }
  .rr-answer-btn {
    flex: 1;
    padding: 12px 16px;
    border-radius: 8px;
    border: 2px solid #FFB800;
    background: transparent;
    color: #2C2C2A;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, transform 0.1s;
    text-transform: uppercase;
  }
  .rr-answer-btn:hover { background: #FFB800; color: #2C2C2A; }
  .rr-answer-btn:active { transform: scale(0.97); }
  .rr-back-btn {
    background: transparent;
    border: none;
    color: #888780;
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    margin-top: 0.75rem;
    text-decoration: underline;
    display: block;
  }
  .rr-back-btn:hover { color: #2C2C2A; }
  .rr-footer { text-align: center; margin-top: 1rem; }
  .rr-restart-btn {
    background: #FFB800;
    border: none;
    border-radius: 8px;
    color: #2C2C2A;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 10px 24px;
    cursor: pointer;
    transition: background 0.15s;
  }
  .rr-restart-btn:hover { background: #e6a600; }

  /* ── Results ── */
  .rr-result { text-align: center; padding: 0.5rem 0; }
  .rr-result-overall-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: #888780;
    margin-bottom: 0.5rem;
  }
  .rr-result-img {
    width: 100%;
    max-width: 170px !important;
    height: auto;
    display: block;
    margin: 0 auto 1rem;
    border-radius: 8px;
  }
  .rr-result-desc {
    font-size: 14px;
    color: #5F5E5A;
    line-height: 1.6;
    max-width: 420px;
    margin: 0 auto 1.5rem;
  }
  .rr-breakdown {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }
  .rr-breakdown-item {
    background: #F5F4EF;
    border: 1px solid #D3D1C7;
    border-radius: 8px;
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    min-width: 90px;
  }
  .rr-breakdown-icon { font-size: 18px; }
  .rr-breakdown-facet {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: #888780;
  }
  .rr-breakdown-score {
    font-size: 22px;
    font-weight: 700;
    color: #2C2C2A;
    line-height: 1;
  }
  .rr-breakdown-item.highest {
    background: #FFF3CC;
    border-color: #FFB800;
  }
  .rr-breakdown-item.highest .rr-breakdown-facet { color: #2C2C2A; }
`;class $ extends b{constructor(){super(I);p(this,"state",g());this.root.addEventListener("click",t=>{const r=t.target.closest("[data-action]");if(r){switch(r.dataset.action){case"toggle":F(this.state,r.dataset.id);break;case"start":A(this.state);break;case"yes":case"no":k(this.state,r.dataset.action);break;case"back":w(this.state);break;case"restart":this.state=g();break;default:return}this.render()}})}connectedCallback(){this.setHtml(`
<div id="rr-widget">
  <div class="rr-header">
    <h2>REAL Rating Questionnaire</h2>
    <p>Select all the components in your work, then answer a few questions</p>
  </div>
  <div id="rr-screen"></div>
</div>`),this.render()}render(){const t=this.$("#rr-screen");t&&(this.state.phase==="select"?t.innerHTML=this.selectHtml():this.state.phase==="question"?t.innerHTML=this.questionHtml():t.innerHTML=this.resultHtml())}selectHtml(){const t=this.state,r=t.selected.length>0;return`
    <div class="rr-facet-grid">
      ${l.map(o=>`
        <button class="rr-facet-btn${t.selected.includes(o.id)?" selected":""}"
                data-action="toggle" data-id="${o.id}">
          <span class="rr-facet-check"></span>
          <span class="rr-facet-icon">${o.icon}</span>
          <span class="rr-facet-label">${o.label}</span>
          <span class="rr-facet-sub">${o.sub}</span>
        </button>
      `).join("")}
    </div>
    <button class="rr-start-btn" data-action="start" ${r?"":"disabled"}>
      ${r?"Start questionnaire →":"Select at least one component"}
    </button>
  `}questionHtml(){const t=this.state,r=c[t.qid],o=C(t),i=Math.min(t.history.length,o),a=l.filter(s=>t.selected.includes(s.id)).map(s=>`<span class="rr-chip${r.applicableTo&&r.applicableTo.includes(s.id)?" active":""}">${s.icon} ${s.label}</span>`).join(""),x=Array.from({length:o},(s,u)=>`<div class="rr-dot${u<i?" done":""}"></div>`).join("");return`
    <div class="rr-card">
      <div class="rr-chips">${a}</div>
      <div class="rr-progress">${x}</div>
      <div class="rr-question">${r.text}</div>
      ${r.context?`<div class="rr-q-context">${r.context}</div>`:""}
      <div class="rr-btn-group">
        <button class="rr-answer-btn" data-action="yes">Yes</button>
        <button class="rr-answer-btn" data-action="no">No</button>
      </div>
      ${t.history.length>0?'<button class="rr-back-btn" data-action="back">← Back</button>':""}
    </div>
    <div class="rr-footer">
      <button class="rr-restart-btn" data-action="restart">↩ Restart</button>
    </div>
  `}resultHtml(){const{facets:t,overall:r,highest:o}=E(this.state),i=t.length>1?`
    <div class="rr-breakdown">
      ${t.map(a=>`
        <div class="rr-breakdown-item${o.includes(a.id)?" highest":""}">
          <span class="rr-breakdown-icon">${a.icon}</span>
          <span class="rr-breakdown-facet">${a.label}</span>
          <span class="rr-breakdown-score">${a.score}</span>
        </div>
      `).join("")}
    </div>
  `:"";return`
    <div class="rr-card rr-result">
      <p class="rr-result-overall-label">Your REAL Rating</p>
      <img class="rr-result-img" src="${_[r]}" alt="REAL Rating Level ${r}" />
      <p class="rr-result-desc">${y[r]}</p>
      ${i}
      <button class="rr-restart-btn" data-action="restart">↩ Start Over</button>
    </div>
  `}}customElements.get("rg-real-rating")||customElements.define("rg-real-rating",$);export{$ as RgRealRating};
//# sourceMappingURL=rg-real-rating-Ci4Op3Tz.js.map
