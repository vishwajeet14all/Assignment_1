import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomItemContext from './itemContext';



function App() {
  
  return (
    // custom provider
    <CustomItemContext>
      <div className="App">
        <Navbar />
        <Items />
      </div>
    </CustomItemContext>
  );
}
export default App;
