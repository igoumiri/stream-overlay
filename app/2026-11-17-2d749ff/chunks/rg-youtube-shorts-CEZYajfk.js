var f=Object.defineProperty;var u=(t,e,s)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var y=(t,e,s)=>u(t,typeof e!="symbol"?e+"":e,s);import{B as m}from"./base-element-M0S_n-xP.js";import{a as b,b as x}from"./runtime-config-mAo62F1c.js";import{c as w}from"./safe-DKiyyRQy.js";const g="https://www.googleapis.com/youtube/v3",v=185,k=5,S=3;function I(t){const e=t.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);if(!e)return 0;const s=parseInt(e[1])||0,o=parseInt(e[2])||0,a=parseInt(e[3])||0;return s*3600+o*60+a}function C(t){return t>0&&t<=v}function E(t){if(!t)return"No views";const e=parseInt(String(t),10);return e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M views":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K views":e+" views"}function T(t){return t.replace(/#shorts/gi,"").trim()}function P(t){return(t.maxres||t.high||t.standard||t.medium||t.default).url}function $(t){return t.startsWith("@")?t:"@"+t}class p extends Error{}class F{constructor(e,s,o){y(this,"uploadsPlaylistId",null);y(this,"nextPageToken",null);y(this,"hasMore",!0);this.fetchFn=e,this.apiKey=s,this.identifier=o}get done(){return!this.hasMore}async init(){if(!this.apiKey)throw new p("Please configure your YouTube API Key in the widget code.");if(!this.identifier)throw new p("No YouTube channel is configured for this widget.");const e=$(this.identifier),s=await(await this.fetchFn(`${g}/channels?part=contentDetails&forHandle=${encodeURIComponent(e)}&key=${this.apiKey}`)).json();if(s.error)throw new p("Initialization Error: "+s.error.message);if(!s.items||s.items.length===0)throw new p("Channel not found. Please verify the handle.");this.uploadsPlaylistId=s.items[0].contentDetails.relatedPlaylists.uploads}async nextBatch(){if(!this.hasMore||!this.uploadsPlaylistId)return[];const e=[];let s=0;try{for(;e.length<k&&this.hasMore&&s<S;){s++;let o=`${g}/playlistItems?part=contentDetails&playlistId=${this.uploadsPlaylistId}&maxResults=50&key=${this.apiKey}`;this.nextPageToken&&(o+=`&pageToken=${this.nextPageToken}`);const a=await(await this.fetchFn(o)).json();if(a.error)throw new Error(a.error.message);this.nextPageToken=a.nextPageToken||null,this.nextPageToken||(this.hasMore=!1);const l=a.items.map(i=>i.contentDetails.videoId);if(l.length===0)continue;const n=await(await this.fetchFn(`${g}/videos?part=snippet,contentDetails,statistics&id=${l.join(",")}&key=${this.apiKey}`)).json();n.items&&e.push(...n.items.filter(i=>C(I(i.contentDetails.duration))))}}catch(o){throw new p("Error loading shorts: "+(o instanceof Error?o.message:String(o)))}return e}}const M=`
:host { display: block; }
    /* Widget Scoped CSS */
    .yt-shorts-widget-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        max-width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .yt-shorts-widget-wrapper * {
        box-sizing: border-box;
    }

    .yt-shorts-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 16px;
        padding: 0 4px;
    }

    .yt-shorts-header svg {
        width: 26px;
        height: 26px;
    }

    .yt-shorts-widget-title {
        font-size: 20px;
        font-weight: 700;
        color: inherit; /* Inherits from your Squarespace theme */
    }

    .yt-shorts-error {
        color: #d93025;
        background: #fce8e6;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
    }

    /* Scroll Container */
    .yt-shorts-scroll-container {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 16px;
        padding-bottom: 16px;
        /* Smooth scrolling for touch */
        -webkit-overflow-scrolling: touch;
        /* Custom scrollbar styling */
        scrollbar-width: thin;
        scrollbar-color: #a0a0a0 transparent;
    }

    .yt-shorts-scroll-container::-webkit-scrollbar {
        height: 8px;
    }
    .yt-shorts-scroll-container::-webkit-scrollbar-track {
        background: transparent;
    }
    .yt-shorts-scroll-container::-webkit-scrollbar-thumb {
        background-color: #a0a0a0;
        border-radius: 10px;
    }

    /* Short Card */
    .yt-short-card {
        display: flex !important;
        flex-direction: column;
        justify-content: flex-end;
        flex: 0 0 auto !important;
        width: 200px;
        height: 355px; /* ~9:16 aspect ratio */
        background-color: #222;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 12px;
        scroll-snap-align: start;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        text-decoration: none !important;
        border: none !important;
    }

    .yt-short-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    }

    /* Dark gradient overlay for text readability */
    .yt-short-card::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 60%;
        background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
        pointer-events: none;
        z-index: 1;
    }

    .yt-play-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0;
        transition: all 0.2s ease;
        width: 48px;
        height: 48px;
        background: rgba(0,0,0,0.7);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }

    .yt-short-card:hover .yt-play-overlay {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    .yt-play-overlay svg {
        width: 24px;
        height: 24px;
        fill: white;
        margin-left: 4px; /* Visually center the play triangle */
    }

    .yt-short-content {
        position: relative;
        z-index: 2;
        padding: 12px;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .yt-short-title {
        font-size: 15px;
        font-weight: 500;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        color: #fff !important;
    }

    .yt-short-views {
        font-size: 13px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8) !important;
        margin: 0;
    }

    /* Sentinel & Loading Spinner */
    .yt-scroll-sentinel {
        flex: 0 0 auto;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .yt-spinner {
        width: 28px;
        height: 28px;
        border: 3px solid rgba(150,150,150,0.3);
        border-top-color: #ff0000;
        border-radius: 50%;
        animation: yt-spin 1s linear infinite;
        display: none;
    }

    .yt-spinner.visible {
        display: block;
    }

    @keyframes yt-spin {
        to { transform: rotate(360deg); }
    }

    /* Mobile Responsive Adjustments */
    @media (max-width: 600px) {
        .yt-shorts-scroll-container {
            scrollbar-width: none; /* Hide scrollbar on small screens */
            gap: 12px;
        }
        .yt-shorts-scroll-container::-webkit-scrollbar {
            display: none;
        }
        .yt-short-card {
            width: 140px;
            height: 248px;
        }
        .yt-short-title {
            font-size: 13px;
        }
        .yt-short-views {
            font-size: 11px;
        }
    }
`;class z extends m{constructor(){super(M);y(this,"observer")}static get observedAttributes(){return["channel"]}connectedCallback(){this.start()}attributeChangedCallback(){this.isConnected&&this.observer&&this.start()}disconnectedCallback(){var s;(s=this.observer)==null||s.disconnect(),this.observer=void 0}async start(){var h;(h=this.observer)==null||h.disconnect(),this.setHtml(`
<div id="yt-shorts-widget-container" class="yt-shorts-widget-wrapper">
    <div class="yt-shorts-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000">
            <path d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"/>
            <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#FFFFFF"/>
        </svg>
        <span class="yt-shorts-widget-title">Shorts</span>
    </div>

    <div class="yt-shorts-error" id="yt-shorts-error" style="display:none;"></div>

    <div class="yt-shorts-scroll-container" id="yt-shorts-container">
        <!-- Short Cards will be injected here -->
        <div class="yt-scroll-sentinel" id="yt-scroll-sentinel">
            <div class="yt-spinner" id="yt-spinner"></div>
        </div>
    </div>
</div>`);const s=this.$("#yt-shorts-container"),o=this.$("#yt-scroll-sentinel"),a=this.$("#yt-spinner"),l=this.$("#yt-shorts-error"),n=r=>{l.textContent=r,l.style.display="block",a.classList.remove("visible")},i=new F(r=>fetch(r),b(),this.getAttribute("channel")||x());let c=!1;const d=async()=>{if(!(c||i.done)){c=!0,a.classList.add("visible");try{const r=await i.nextBatch();r.length>0?this.renderCards(s,o,r):i.done&&s.children.length<=1&&n("No Shorts found on this channel.")}catch(r){n(r instanceof Error?r.message:String(r))}finally{c=!1,a.classList.remove("visible"),i.done&&(o.style.display="none")}}};try{await i.init()}catch(r){n(r instanceof p?r.message:"Initialization Error: "+(r instanceof Error?r.message:String(r)));return}await d(),this.observer=new IntersectionObserver(r=>{r[0].isIntersecting&&!i.done&&!c&&d()},{root:s,rootMargin:"0px 300px 0px 0px",threshold:0}),this.observer.observe(o)}renderCards(s,o,a){for(const l of a){const n=document.createElement("a");n.href=`https://www.youtube.com/shorts/${encodeURIComponent(l.id)}`,n.target="_blank",n.className="yt-short-card";const i=w(P(l.snippet.thumbnails));i&&(n.style.backgroundImage=i);const c=document.createElement("div");c.className="yt-play-overlay",c.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';const d=document.createElement("div");d.className="yt-short-content";const h=document.createElement("h3");h.className="yt-short-title",h.textContent=T(l.snippet.title);const r=document.createElement("p");r.className="yt-short-views",r.textContent=E(l.statistics.viewCount),d.append(h,r),n.append(c,d),s.insertBefore(n,o)}}}customElements.get("rg-youtube-shorts")||customElements.define("rg-youtube-shorts",z);export{z as RgYoutubeShorts};
//# sourceMappingURL=rg-youtube-shorts-CEZYajfk.js.map
