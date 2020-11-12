import logo from './logo.svg';
import './App.css';
import Processor from './processor';
import Instruction from './Instructions';
import Footer from './footer';

const headerText = "Powerful URL Encoder and Decoder"
function App() {
  return (
    <div className='container'>
      <div className="headerText" aria-label={headerText}>
        {headerText}
      </div>
      <Processor></Processor>
      <Instruction/>
      <Footer/>
    </div>
  );
}

export default App;
