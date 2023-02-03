import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import About from './component/About';
import Rod from './component/Rod';
import Bluehan from './component/Bluehan';
import Cont from './component/Cont';
import './App.css';

function App() {
  return (
    <div>
      <Navi></Navi>
      <About></About>
      <Bluehan></Bluehan>
      <Rod></Rod>
      <Cont></Cont>
    </div>
  );
}

export default App;
