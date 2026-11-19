function d(t){return(t/100).toLocaleString(void 0,{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})}function a(t,e){return`${t} ${e}${t===1?"":"s"}`}function m(t,e=Date.now()){if(!t)return null;const n=new Date(t);if(isNaN(n.getTime()))return null;const i=n.toLocaleString(void 0,{dateStyle:"long",timeStyle:"short"}),l=n.getTime()-e;if(l<=0)return{text:"Completed",tooltip:i};const o=l/6e4,r=o/60,c=r/24;let s;if(c>=1)s=`${a(Math.floor(c),"day")} left`;else if(r>=12)s=`${a(Math.floor(r),"hour")} left`;else if(r>=1){const f=Math.floor(r),u=Math.floor(o-f*60);s=`${a(f,"hour")}${u>0?" "+a(u,"minute"):""} left`}else s=`${a(Math.max(1,Math.round(o)),"minute")} left`;return{text:s,tooltip:i}}function p(t,e,n){if(!t)return()=>{};if(!e)return t.style.display="none",()=>{};const i=()=>{const o=m(e);o&&(t.textContent=o.text,t.title=o.tooltip,t.classList.toggle("sb-countdown--done",o.text==="Completed"))};i();const l=n?setInterval(i,n):void 0;return()=>clearInterval(l)}function h(t,e){return`<div class="pb-wrap"><div class="pb-track"><div class="pb-fill" style="width:${e>0?Math.min(100,Math.round(t/e*100)):0}%"></div></div><div class="pb-label">${d(t)} raised of ${d(e)} goal</div></div>`}const b=`
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
//# sourceMappingURL=progress-vpEOc0y3.js.map
