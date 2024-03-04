import{S as f,i as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(n){return n.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,comments:i,downloads:s})=>`<li class="gallery-item">
        
        <a class="gallery-link" href="${o}" >
          <img class="gallery-image" 
            src="${r}"
            alt="${l}"
            width="360px"
            height="200px"
          />

          <ul class="gallery-item js-gallery">
            <label>
              Likes
              <li>${e}</li>
            </label>
            <label>
                Views
                <li>${t}</li>
             </label>
            <label>
              Comments
              <li>${i}</li>
              </label>
            <label>
              Downloads
              <li>${s}</li>
            </label>
          </ul>
         </a>       
      </li>`).join("")}function p(n){const r="https://pixabay.com/api/",o="36683727-e929c153efd1b0d2cc7c4f38c",l=`${n}`,s=`${r}?key=${o}&q=${l}&image_type=photo&orientastion=horizontal&seferearch=true`;return fetch(s).then(c=>{const u="Sorry, there are no images matching your search query. Please try again!";if(!c.ok)throw new Error(u);return c.json()})}const a=document.querySelector(".gallery"),y=document.querySelector(".input-search"),h=document.querySelector("button");h.addEventListener("click",g);function g(n){n.preventDefault();const r=y.value;p(r).then(o=>{const l=o.hits.slice(0,9),e=m(l);a.innerHTML="",a.insertAdjacentHTML("beforeend",e),new f(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(o=>{d.error()})}
//# sourceMappingURL=commonHelpers.js.map
