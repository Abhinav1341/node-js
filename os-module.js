const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//System Uptime in Seconds
console.log(`System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  rel: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);