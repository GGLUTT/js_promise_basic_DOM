document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".logo"),t=new Promise(function(t){e.addEventListener("click",function(){t("Promise was resolved!")})}),n=new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected!"))},3e3)}),o=function(e){var t=document.createElement("div");t.className="message",t.textContent=e,document.body.appendChild(t)},c=function(e){var t=document.createElement("div");t.className="message error-message",t.textContent=e,document.body.appendChild(t)};t.then(o).catch(c),n.then(o).catch(c)});
//# sourceMappingURL=index.4b6cc1af.js.map
