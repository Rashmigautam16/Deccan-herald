
import './App.css';
import Navbar from './Header/Navbar';
import Allrouters from './Pages/Allrouters';
import FooterPart from './Footer/Footer';
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Allrouters/>
      <FooterPart/>
    </div>
  );
}

export default App;
