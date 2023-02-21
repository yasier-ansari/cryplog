import logo from './logo.svg';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-600">
      <header className="App-header flex items-center flex-col">
        <img src={logo} className=" h-80 w-80" alt="logo" />
        <p className="text-red-500 text-code bg-slate-100 px-3 py-1 rounded-lg font-medium" >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-center"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
