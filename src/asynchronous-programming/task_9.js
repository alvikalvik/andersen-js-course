import 'regenerator-runtime/runtime';

const asyncBar = async () => 'Some string!';

const foo = async () => {
  const text = await asyncBar();
  console.log(text);
};

foo();
