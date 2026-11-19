import{B as l}from"./base-element-M0S_n-xP.js";import{g as u}from"./supabase-client-DVT62H8M.js";import"./runtime-config-mAo62F1c.js";function d(t){var n;return(n=t==null?void 0:t.message)!=null&&n.includes("Rate limit exceeded")?"You have reached the limit of 50 clicks per 24 hours.":"An error occurred. Please try again later."}function c(t){return t.toLocaleString()}class m extends l{constructor(){super(":host { display: block; }")}connectedCallback(){this.setHtml(`
<div id="counter-widget" style="text-align: center; padding: 0; font-family: Verdana, Geneva, sans-serif;">
  <h3 style="margin-top: 0;">Help us reach our goal of 1,000 emails sharing REAL!!</h3>
  <p>Click this button if you sent a message to track a message sent!</p>
  <h2 style="font-size: 1.3rem; margin-bottom: 15px;">Already sent: <span id="counter-value">...</span></h2>

  <button id="increment-btn" style="padding: 20px 56px; font-size: 1.1rem; cursor: pointer; background-color: #000; color: #fff; border: none; border-radius: 8px; transition: background-color 0.2s;">
    One message sent!
  </button>

  <p id="counter-msg" style="color: #e63946; margin-top: 15px; font-weight: bold; min-height: 20px; display: none;"></p>

  <p style="margin-top: 45px;">Ok, be cool. We know you can misuse this button, but we are trusting you here.</p>
</div>`);const n=this.$("#counter-value"),e=this.$("#increment-btn"),s=this.$("#counter-msg"),i=u(),a=async()=>{const{data:o,error:r}=await i.from("global_counter").select("count").eq("id",1).single();o?n.innerText=c(o.count):(console.error("Error fetching count:",r),n.innerText="Error")};e.addEventListener("click",async()=>{e.disabled=!0,e.style.opacity="0.7",s.style.display="none";const{data:o,error:r}=await i.rpc("increment_counter");r?(console.error("RPC Error:",r),s.innerText=d(r),s.style.display="block"):o!==null&&(n.innerText=c(o),e.style.backgroundColor="#4CAF50",setTimeout(()=>{e.style.backgroundColor="#000"},500)),e.disabled=!1,e.style.opacity="1"}),a()}}customElements.get("rg-click-counter")||customElements.define("rg-click-counter",m);export{m as RgClickCounter};
//# sourceMappingURL=rg-click-counter-BS3ZfSJZ.js.map
