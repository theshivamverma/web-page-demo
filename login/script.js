// fake API call to understand promises
const fakeAPICall = function (username, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (username === "test123" && password === "12345") {
        resolve({
          status: 200,
          success: true,
          message: 'Login sucessful'
        });
      } else {
        reject({
          status: 401,
          success: false,
          message: 'Login failed'
        });
      }
    }, 2000);
  });
};

const username = document.querySelector('#username');
const password = document.querySelector("#password");
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', async () => {
  let usernameString = username.value;
  let passwordString = password.value;

  try {
    const result = await fakeAPICall(usernameString, passwordString);
    const { status, success, message } = result;

    if(status === 200 && success === true){
      alert(message)
    }
  } catch (error) {
    alert(error.message)
  }
})