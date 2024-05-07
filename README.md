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
REACT_APP_ is a naming convention recommended by Create React App (CRA) for defining custom environment variables that will be accessible in your React components.

REACT_APP_API_KEY="3DsF26NuShVBNrt";
REACT_APP_EMOJI_API_KEY=your_emoji_api_key;

Access using :
const keyvar = process.env.REACT_APP_API_KEY


