import './App.css';
import Intro from './components/Intro';
import Hobbies from './components/Hobbies';
import Pet from './components/Pet';
import Random from './components/Random';

function App() {
  return (
    <div>
        <Intro/>
        <Pet/>
        <Hobbies/>
        <Random/>
    </div>
  );
}

export default App;
