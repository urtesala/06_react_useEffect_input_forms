import './App.css';
import './reset.css';
import Search from './components/Search';
import Login from './components/Login';

function App() {
  return (
    <div className='App container'>
      <h1>React</h1>
      <Search />
      <Login />
    </div>
  );
}

export default App;
