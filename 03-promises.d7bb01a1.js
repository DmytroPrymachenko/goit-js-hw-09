!function(){function e(e,t){var n=Math.random()>.3;return new Promise((function(o,a){setTimeout((function(){n?o({position:e,delay:t}):a({position:e,delay:t})}),t)}))}({startBtn:document.querySelector(".js-btn"),form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.target.elements.amount.value,o=Number(t.target.elements.step.value),a=Number(t.target.elements.delay.value),r=0;r<n;r++)e(r,a).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t+1," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t+1," in ").concat(n,"ms"))})),a+=o}))}();
//# sourceMappingURL=03-promises.d7bb01a1.js.map
