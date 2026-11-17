function n(r){if(typeof r!="string")return null;try{const t=new URL(r);return t.protocol==="https:"||t.protocol==="http:"?t.href:null}catch{return null}}function o(r){const t=n(r);return t?`url(${JSON.stringify(t)})`:""}export{o as c,n as s};
//# sourceMappingURL=safe-DKiyyRQy.js.map
