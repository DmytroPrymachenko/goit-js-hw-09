// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
const refs = {
  // inputDelay: document.querySelector('.js-delay'),
  // inputStep: document.querySelector('.js-step'),
  // inputAmount: document.querySelector('.js-amount'),
  startBtn: document.querySelector('.js-btn'),
  form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const inputAmount = event.target.elements.amount.value;
  const inputStep = Number(event.target.elements.step.value);
  let inputDelay = Number(event.target.elements.delay.value);

  for (let i = 0; i < inputAmount; i++) {
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      });
    inputDelay += inputStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position,
          delay,
        });
      } else {
        reject({
          position,
          delay,
        });
      }
    }, delay);
  });
}
