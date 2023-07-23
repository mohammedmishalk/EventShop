import { BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import CheckoutPage from './Pages/CheckoutPage';
import CheckoutPageSecond from './Pages/CheckoutPageSecond';



function App() {

  return (   
    <div className="App">
      <Router>
     
     <Routes>
     <Route path='/' exact  element={<CheckoutPage /> } ></Route>
     <Route path='/checkout' element={<CheckoutPageSecond/>} ></Route>
   
      </Routes>

     </Router>
    </div>
  );
}

export default App;