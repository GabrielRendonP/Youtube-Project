const mockedUser = {
  id: '_fakeId123',
  name: 'Gabriel',
  avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'gabriel' && password === '12345') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}

export async function signOutApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({message: 'Bye, bye!', status: 200});
    }, 100);
  });
}