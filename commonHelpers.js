import{S as u,i as g}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function m(n){return n.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:s,downloads:a})=>`<li class="gallery-item">
        
        <a class="gallery-link" href="${o}" >
          <img class="gallery-image" 
            src="${r}"
            alt="${i}"
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
              <li>${s}</li>
              </label>
            <label>
              Downloads
              <li>${a}</li>
            </label>
          </ul>
         </a>       
      </li>`).join("")}function p(n){const r="https://pixabay.com/api/",o="36683727-e929c153efd1b0d2cc7c4f38c",i=`${n}`,a=`${r}?key=${o}&q=${i}&image_type=photo&orientastion=horizontal&seferearch=true`,c="Sorry, there are no images matching your search query. Please try again!";return fetch(a).then(l=>{if(!l.ok)throw new Error(c);return l.json()}).then(l=>{if(l.hits.length===0)throw new Error(c);return l.hits.slice(0,9)})}const A=document.querySelector(".gallery"),y=document.querySelector(".input-search"),d=document.querySelector("button");d.addEventListener("click",h);function h(n){n.preventDefault();const r=y.value;p(r).then(o=>{const i=m(o);A.innerHTML="",A.insertAdjacentHTML("beforeend",i),new u(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(o=>{g.error({titleColor:"#FFFFFF",titleSize:"16px",messageSize:"16px",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",message:`${o}`,position:"topRight",timeout:3e3,iconUrl:f})})}
//# sourceMappingURL=commonHelpers.js.map
