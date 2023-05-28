// fake API call to understand promises
const fakeAPICall = function (username, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (username === "test123" && password === "12345") {
        resolve("Login successful");
      } else {
        reject("Wrong user");
      }
    }, 2000)
  });
}

// const apiResult = fakeAPICall('test123', '12345')

// .then and .catch version of promises
// apiResult
// .then(function(res){
//   return res
// })
// .catch(function(err) {
//   console.log(err)
// })

// async...await version of promises
async function login(username, password) {
  try {
    const result = await fakeAPICall(username, password);
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// fecth with .then and .catch
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => {
  // object destructuring
  const {ok, status} = res;
  if(status === 200){
    return res.json();
  }
  throw new Error('API failed')
})
.then(data => console.log(data))
.catch(err => console.log(err.message))


// function declaration with async
// async function apiCall() {

// }

// arrow function with async
const apiCall = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data;
    if (result.status === 200) {
      data = await result.json();
      console.log(data);
    }else {
      throw new Error('API failed')
    }
  } catch (error) {
    console.log(error.message)
  }
}

apiCall()

// login('test12', '12345')



// Asynchronous programming

// webAPIs => async prgoramming possible
// task queue
// event loop
// callback hell
// Promise
// async...await
//  object destructuring

// fetch, axios => API call

// documentation
// Promise
// async...await
// Error constructor
// try...catch...finally
// throw keyword