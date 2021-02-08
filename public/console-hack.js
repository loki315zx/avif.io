const log = console.log.bind(console);
const warn = console.warn.bind(console);
const error = console.error.bind(console);
const db = firebase.database();

console.log = (...args) => {
  log(...args);
  const data = db.ref("/").push();
  data.set({
    log: args
  });
}

console.warn = (...args) => {
  warn(...args);
  const data = db.ref("/").push();
  data.set({
    warn: args
  });
}

console.error = (...args) => {
  error(...args);
  const data = db.ref("/").push();
  data.set({
    error: args
  });
}
