
import Navbar from './components/Navbar/Navbar';
import MainDropdown from './components/Dropdown/MainDropdown';
import SearchSection from './components/Search/SearchSection';
import Properties from './components/Properties/DisplayProperty'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <SearchSection></SearchSection>
      <MainDropdown></MainDropdown>
      <Properties></Properties>
      <Footer></Footer>
      
    </div>
  );
 }

export default App;
