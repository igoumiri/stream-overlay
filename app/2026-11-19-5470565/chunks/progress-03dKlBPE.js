function d(t){return(t/100).toLocaleString(void 0,{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})}function l(t,e){return`${t} ${e}${t===1?"":"s"}`}function m(t,e=Date.now()){if(!t)return null;const o=new Date(t);if(isNaN(o.getTime()))return null;const f=o.toLocaleString(void 0,{dateStyle:"long",timeStyle:"short"}),a=o.getTime()-e;if(a<=0)return null;const i=a/6e4,n=i/60,r=n/24;let s;if(r>=1)s=`${l(Math.floor(r),"day")} left`;else if(n>=12)s=`${l(Math.floor(n),"hour")} left`;else if(n>=1){const u=Math.floor(n),c=Math.floor(i-u*60);s=`${l(u,"hour")}${c>0?" "+l(c,"minute"):""} left`}else s=`${l(Math.max(1,Math.round(i)),"minute")} left`;return{text:s,tooltip:f}}function p(t,e,o,f=Date.now){if(!t)return()=>{};let a;const i=()=>clearInterval(a),n=()=>{const r=m(e,f());return r?(t.textContent=r.text,t.title=r.tooltip,!0):(t.style.display="none",t.textContent="",t.title="",i(),!1)};return n()&&o&&(a=setInterval(n,o)),i}function h(t,e){return`<div class="pb-wrap"><div class="pb-track"><div class="pb-fill" style="width:${e>0?Math.min(100,Math.round(t/e*100)):0}%"></div></div><div class="pb-label">${d(t)} raised of ${d(e)} goal</div></div>`}const b=`
.pb-wrap {
  margin: 0.5em 0;
}

.pb-track {
  background: #e5e7eb;
  border-radius: 999px;
  height: 10px;
  overflow: hidden;
}

.pb-fill {
  background: #059669;
  height: 100%;
  transition: width 0.4s ease;
}

.pb-label {
  font-size: 0.85em;
  color: #5a6b7a;
  margin-top: 0.4em;
}
`;export{h as a,d as f,p as m,b as p};
//# sourceMappingURL=progress-03dKlBPE.js.map
