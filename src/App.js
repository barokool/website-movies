import './App.css';
import Banner from './components/banner/Banner';
import Movies from './components/movies/Movies';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <Movies />
    </div>
  );
}

export default App;
