function e(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}({startBtn:document.querySelector(".js-btn"),form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();const o=t.target.elements.amount.value,n=Number(t.target.elements.step.value);let l=Number(t.target.elements.delay.value);for(let t=0;t<o;t++)e(t,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e+1} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e+1} in ${t}ms`)})),l+=n}));
//# sourceMappingURL=03-promises.bc164cf6.js.map