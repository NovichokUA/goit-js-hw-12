import{a as y,S as w,i as g}from"./assets/vendor-40038228.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){return o.reduce((r,{webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:F,downloads:S})=>r+` <li class="gallery-item">
              
              <a class="gallery-link" href="${a}">
                  <img
                  src="${s}"
                  alt="${e}"
                  width="360"
                  />
              </a>    
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${n}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${F}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${S}</p>
            </div>
          </div>              
       </li>`,"")}async function b(o,r,s,a){const e=new URLSearchParams({key:r,per_page:a,page:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return await y.get(`/api/?${e}`).then(t=>t.data).then(t=>t)}const f=new w(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});f.refresh();const P=document.querySelector(".submitForm"),d=document.querySelector(".submitInput"),m=document.querySelector(".gallery"),v=document.querySelector(".loader"),c=document.querySelector(".loadMore"),L="41590527-3cc425bd48b0e10304cc9b3d1";y.defaults.baseURL="https://pixabay.com";P.addEventListener("submit",q);u();c.classList.add("is-hidden");let i=1;const h=40;let l="";async function q(o){o.preventDefault(),m.innerHTML="",l=d.value.trim(),k(),A(l);try{const r=await b(l,L,i,h);if(r.hits.length===0){u(),d.value="",g.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}m.insertAdjacentHTML("beforeend",p(r.hits)),f.refresh()}catch(r){console.log(r)}c.classList.remove("is-hidden")}c.addEventListener("click",C);async function C(){event.preventDefault(),i++,l=d.value.trim();try{const o=await b(l,L,i,h);let s=o.totalHits/h;if(i>=s){c.classList.add("is-hidden"),u(),i=1,d.value="",g.info({title:"Info",timeout:"5000",message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#00FF00",position:"topRight"});return}i<s&&(c.classList.remove("is-hidden"),k(),m.innerHTML+=p(o.hits),f.refresh(),E(),u())}catch(o){console.log(o)}}function A(o){if(o==="")throw u(),g.error({title:"Error",timeout:"1000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}function k(){v.style.display="block"}function u(){v.style.display="none"}function E(){const o=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
