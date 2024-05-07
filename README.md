# GIF-generator
random gif generator and search gif by tag 

## Axios
Axios is a promise-based HTTP Client for node.js and the browser.
(can run on both browser & nodejs with same codebase)
server-side ----> uses native node.js
client side ----> XMLHttpRequests

 It provides an easy-to-use API for making asynchronous HTTP requests such as GET, POST, PUT, DELETE, etc.

https://axios-http.com/docs/intro


## Axios vs fetch
An alternative to Axios is the built-in fetch API

Difference:
1. Axios more expressive and user-friendly API 
2. Fetch supported modern browsers but axios -better cross-browser compatibility and additional features ""(request cancellation and interceptors.)""
3. Interceptors : axios additional features : Request cancellation and interceptors.
4. Response handling : Axios automatically parses JSON responses , fetch- you need to manually call .json()


## Fetch api using Axios : Get
  const fetchInfo = async ()=>{
    const datas = await axios.get(url);
    setRandom(datas.data.data.images.original);
  }

## .env  : write environment var
Api_key="3DsF26NuShVBNrt";

Access using :
const keyvar = process.env.api_key


