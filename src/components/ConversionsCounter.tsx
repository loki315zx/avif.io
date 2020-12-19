import React from "react";

const days = Math.round(Date.now() / 8640000 - 185860);

let count = 5000;
let b = 50;
let c = 2;
let d = 0.1;
let e = 1.1;

let day;
for (day = 0; day < days; day++) {
  if (b % 62 == 0) {
    b = 50;
  } else {
    b += 2;
  }
  if (c % 4 == 0) {
    c = 2;
  } else {
    c += 1;
  }
  if (e % 1.5 == 0) {
    e = 1.1;
  } else {
    e += 0.1;
  }
  d += 0.1;
  d = Math.round(d * 10) / 10;
  e = Math.round(e * 10) / 10;
  count += Math.pow(b + c + d, e) / 10;
  count = Math.round(count / 40) * 40;
}

export default function ConversionsCounter() {
  return <>{count} </>;
}
