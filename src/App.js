import logo from './logo.svg';
import './App.css';

function App() {

  const cb = () => {
    console.log(name)
  }

  // const callback = (cb) => {
  //   return Promise.resolve()
  // }

  // console.log(callback(cb).then)
  const name = "hello"

  const callBack = new Promise((resolve, reject) => {
    // resolve("data")
    // reject("error")
  })
  callBack.then((value) => {
    console.log(value)
    return "allgood"
  }).then((value) => {
    console.log(value)
  }).catch(() => {
    console.log("error")
  })

  const adapter = () => {
    const url = "http://localhost:3000"
    const response = apiCall(url)
    response.then((res) => {
      console.log(res)
    })
  }

  const apiCall = (url) => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve("data")
      } else {
        reject("error")
      }
    })
  }

  adapter()

  apiCall().then((val) => console.log(val))

  const apiList = [apiCall(), apiCall(), apiCall(), apiCall()]

  Promise.all(apiList).then((val) => console.log(val))

  console.log("hello")
  console.log("hello")
  console.log("hello")
  console.log("hello")
  console.log("hello")
  console.log("hello")
  console.log("hello")

  // const makeApicall = ()=>{
  //   return Promise(())
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
