function getResolvedPromise(value) {
  return Promise.resolve(value);
}

getResolvedPromise(500)
  .then(res => {
    if (res > 300) {
      throw new Error('Error TEXT');
    }
  })
  .catch(e => console.log(e))
  .finally(() => console.log('This is finally!'));
