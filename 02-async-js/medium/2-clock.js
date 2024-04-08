let second = 0;
let currentTime = () => {
  let now = new Date().getTime();
  console.log();
};

const interval = () => {
  second++;
};

let intervalId = setInterval(interval, 1000);
