for (let i = 0; i < sources.length; i++) {
  if (sources[i].length >= 60) {
    let a = sources[i].split(/[/]/)[0];
    let b = sources[i].slice(-20);
    sources[i] = a + " (..) " + b;
  }
}
