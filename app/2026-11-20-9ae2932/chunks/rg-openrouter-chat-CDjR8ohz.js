import{B as u}from"./base-element-M0S_n-xP.js";function f(e,o){if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=o,document.head.appendChild(t)}const h="https://openrouter.ai/api/v1/chat/completions",b="openrouter/free";function i(e){return!!e&&e.startsWith("sk-or-")}function x(e,o,t){return{url:h,init:{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json","HTTP-Referer":t,"X-Title":"Squarespace Chat"},body:JSON.stringify({model:b,messages:o})}}}function m(e){return e.error?{error:e.error.message||"OpenRouter error occurred."}:e.choices&&e.choices.length>0?{text:e.choices[0].message.content}:{error:"No response received from OpenRouter."}}const y="https://unpkg.com/deep-chat@2.5.1/dist/deepChat.bundle.js";let g;const k=()=>g??(g=import(y)),w=`
  .sqs-block-code,
  .sqs-block-code .sqs-block-content,
  .sqs-block-code .code-block {
    width: 100% !important;
    max-width: 100% !important;
    display: block !important;
  }
`,C=`
  :host { display: block; }
  .chat-wrapper {
    width: 100% !important;
    max-width: 1000px; /* Adjust max width as preferred */
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
  }
  deep-chat#chat-element {
    width: 100% !important;
    min-width: 100% !important;
    display: block !important;
  }
  .key-container {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    width: 100%;
    box-sizing: border-box;
  }
  .key-label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #334155;
    margin-bottom: 8px;
  }
  .input-row {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .key-input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .key-input:focus {
    border-color: #0284c7;
  }
  .status-badge {
    font-size: 12px;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 20px;
    background: #f1f5f9;
    color: #64748b;
  }
  .status-badge.active {
    background: #dcfce7;
    color: #15803d;
  }
`;class v extends u{constructor(){super(C)}connectedCallback(){f("rgai-openrouter-chat-page",w),this.setHtml(`
<div class="chat-wrapper">
  <!-- Key Input Card -->
  <div class="key-container">
    <label for="apiKey" class="key-label">OpenRouter API Key</label>
    <div class="input-row">
      <input
        type="password"
        id="apiKey"
        placeholder="sk-or-v1-..."
        class="key-input"
      />
      <span id="key-status" class="status-badge">Key Required</span>
    </div>
  </div>

  <!-- DeepChat Component -->
  <deep-chat
    id="chat-element"
    introMessage='{"text": "Enter your OpenRouter API key above to start chatting!"}'
    style="
      width: 100%;
      min-height: 400px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      background-color: #ffffff;
      font-family: inherit;
    "
    chatStyle='{
      "backgroundColor": "#f8fafc"
    }'
    messageStyles='{
      "default": {
        "user": {
          "bubble": {"backgroundColor": "#0284c7", "color": "#ffffff", "borderRadius": "16px 16px 4px 16px"}
        },
        "ai": {
          "bubble": {"backgroundColor": "#ffffff", "color": "#1e293b", "border": "1px solid #e2e8f0", "borderRadius": "16px 16px 16px 4px"}
        }
      }
    }'
    inputAreaStyle='{
      "backgroundColor": "#ffffff",
      "borderTop": "1px solid #e2e8f0", "padding": "12px"
    }'
    textInput='{
      "placeholder": {"text": "Type a message..."}
    }'
  ></deep-chat>
</div>`);const o=this.$("#apiKey"),t=this.$("#key-status"),c=this.$("#chat-element");let n="";o.addEventListener("input",r=>{n=r.target.value.trim(),i(n)?(t.textContent="Key Set",t.classList.add("active")):(t.textContent="Key Required",t.classList.remove("active"))}),k().then(()=>customElements.whenDefined("deep-chat")).then(()=>{c.request={handler:async(r,a)=>{if(!i(n)){a.onResponse({error:"Please enter a valid OpenRouter API key above."});return}const p=r.messages.map(s=>({role:s.role==="user"?"user":"assistant",content:s.text}));try{const{url:s,init:d}=x(n,p,window.location.href),l=await fetch(s,d);a.onResponse(m(await l.json()))}catch{a.onResponse({error:"Network or connection error. Please check your key or console."})}}}}).catch(r=>console.error("Could not load the chat component:",r))}}customElements.get("rg-openrouter-chat")||customElements.define("rg-openrouter-chat",v);export{v as RgOpenrouterChat};
//# sourceMappingURL=rg-openrouter-chat-CDjR8ohz.js.map
