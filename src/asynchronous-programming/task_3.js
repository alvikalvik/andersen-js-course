function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, ms);
  });
}

delay(1000).then(v => console.log(`Done with ${v}`));
