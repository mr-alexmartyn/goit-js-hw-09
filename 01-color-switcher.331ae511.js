function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),d=document.querySelector("body");o.disabled=!0;let n=null;const l=function(){d.style.backgroundColor=t(),d.style.color=t()};e.addEventListener("click",(()=>{n=setInterval(l,1e3),e.disabled=!0,o.disabled=!1})),o.addEventListener("click",(()=>{clearInterval(n),e.disabled=!1,o.disabled=!0}));
//# sourceMappingURL=01-color-switcher.331ae511.js.map