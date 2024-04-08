let counter = 0;
const interval = () => {
  counter++;
  console.log(`${counter}seconds passed`);
  let id = setTimeout(interval, 1000);
  if (counter >= 10) {
    clearTimeout(id);
    console.log("clock has stopped");
  }
};
setTimeout(interval, 1000);
