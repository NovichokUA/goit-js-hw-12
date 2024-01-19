import{a as b,S as w,i as f}from"./assets/vendor-40038228.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(o){return o.reduce((r,{webformatURL:s,largeImageURL:a,tags:e,likes:t,views:c,comments:F,downloads:S})=>r+` <li class="gallery-item">
              
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
              <p class="amount">${c}</p>
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
       </li>`,"")}async function v(o,r,s,a){const e=new URLSearchParams({key:r,per_page:a,page:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return await b.get(`/api/?${e}`).then(t=>t.data).then(t=>t)}const y=new w(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});y.refresh();const P=document.querySelector(".submitForm"),d=document.querySelector(".submitInput"),h=document.querySelector(".gallery"),L=document.querySelector(".loader"),i=document.querySelector(".loadMore"),k="41590527-3cc425bd48b0e10304cc9b3d1";b.defaults.baseURL="https://pixabay.com";P.addEventListener("submit",q);l();i.classList.add("is-hidden");let n=1;const m=40;let u="";async function q(o){o.preventDefault(),n=1,i.classList.add("is-hidden"),h.innerHTML="",u=d.value.trim(),A(),M(u);try{const r=await v(u,k,n,m);if(r.hits.length===0){l(),d.value="",f.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}h.insertAdjacentHTML("beforeend",g(r.hits)),l(),y.refresh(),r.totalHits>m&&i.classList.remove("is-hidden")}catch(r){console.log(r)}}i.addEventListener("click",C);async function C(){event.preventDefault(),n++,u=d.value.trim();try{const o=await v(u,k,n,m),r=o.totalHits;let s=Math.ceil(r/m);if(n===s){i.classList.add("is-hidden"),l(),h.innerHTML+=g(o.hits),p(),d.value="",f.info({title:"Info",timeout:"5000",message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#00FF00",position:"topRight"});return}n<s&&(i.classList.remove("is-hidden"),h.innerHTML+=g(o.hits),y.refresh(),p(),l())}catch(o){console.log(o)}}function M(o){if(o==="")throw l(),i.classList.add("is-hidden"),f.error({title:"Error",timeout:"1000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}function A(){L.style.display="block"}function l(){L.style.display="none"}function p(){const o=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
