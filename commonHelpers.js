import{a as f,S as w,i as g}from"./assets/vendor-40038228.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function y(o){return o.reduce((r,{webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:F,downloads:S})=>r+` <li class="gallery-item">
              
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
              <p class="amount">${i}</p>
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
       </li>`,"")}async function p(o,r,s,a){const e=new URLSearchParams({key:r,per_page:a,page:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return await f.get(`/api/?${e}`).then(t=>t.data).then(t=>t)}const b=new w(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});b.refresh();const P=document.querySelector(".submitForm"),u=document.querySelector(".submitInput"),m=document.querySelector(".gallery"),v=document.querySelector(".loader"),d=document.querySelector(".loadMore"),L="41590527-3cc425bd48b0e10304cc9b3d1";f.defaults.baseURL="https://pixabay.com";P.addEventListener("submit",q);c();let n=1;const h=40;let l="";async function q(o){o.preventDefault(),m.innerHTML="",l=u.value.trim(),k(),A(l);try{const r=await p(l,L,n,h);if(r.hits.length===0){c(),u.value="",g.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}m.insertAdjacentHTML("beforeend",y(r.hits)),b.refresh()}catch(r){console.log(r)}d.classList.remove("is-hidden")}d.addEventListener("click",C);async function C(){event.preventDefault(),n++,l=u.value.trim();try{const o=await p(l,L,n,h);let s=o.totalHits/h;if(n>=s){d.classList.add("is-hidden"),c(),n=1,u.value="",g.info({title:"Info",timeout:"5000",message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#00FF00",position:"topRight"});return}n<s&&(d.classList.remove("is-hidden"),k(),m.innerHTML+=y(o.hits),E(),c())}catch(o){console.log(o)}}function A(o){if(o==="")throw c(),g.error({title:"Error",timeout:"1000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}function k(){v.style.display="block"}function c(){v.style.display="none"}function E(){const o=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
