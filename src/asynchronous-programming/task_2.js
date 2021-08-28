function parseJSON(jsonStr, mySuccessCb, myFailureCb) {
  try {
    const result = JSON.parse(jsonStr);
    mySuccessCb(result);
  } catch (error) {
    myFailureCb(error);
  }
}

function successCb(result) {
  console.log('Success parse!');
  console.log(result);
}

function failureCb(error) {
  console.log('Failure parse!');
  console.log(error);
}

parseJSON('{"x": 10}', successCb, failureCb);

parseJSON('{x}', successCb, failureCb);
