import 'regenerator-runtime/runtime';

const getUsers = url => fetch(url);

async function foo(url) {
  try {
    const fetchResult = await getUsers(url);
    const [user] = await fetchResult.json();
    console.log(user);
  } catch (error) {
    console.log('Error!', error);
  }
}

foo('https://jsonplaceholder.typicode.com/users');
