!function(){var t={bodyRef:document.querySelector("body"),btnStartRef:document.querySelector("[data-start]"),btnStopRef:document.querySelector("[data-stop]")};t.btnStartRef.addEventListener("click",(function(){e=setInterval(n,1e3),t.btnStartRef.disabled=!0})),t.btnStopRef.addEventListener("click",(function(){t.btnStartRef.disabled=!1,clearInterval(e)}));var e=null;function n(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));return t.bodyRef.style.backgroundColor="".concat(e)}}();
//# sourceMappingURL=01-color-switcher.00181024.js.map
