let counter = 0;
const interval = () => {
  counter++;
  console.log(`${counter}seconds passed`);
};
let intervalId = setInterval(interval, 1000);
setTimeout(() => {
  clearInterval(intervalId);
  console.log("clock has stopped");
}, 10000);
