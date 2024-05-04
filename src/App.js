import './App.css';
import Home from './Components/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Aboutus from './Components/Aboutus';
import RootLayout from './Layout/RootLayout';
import Salad from './Components/Salad';
import Menulayout from './Layout/Menulayout';
import Burgers from './Components/Burgers';
import Deserts from './Components/Deserts';



function App() {

  const navigation = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route  index element={<Home/>} />
        <Route path='aboutus' element={<Aboutus/>} />
        <Route path='services' element={<Menulayout/>}>
          <Route path='/services' element={<Burgers />} />
          <Route path='salads' element={<Salad/>} />
          <Route path='deserts' element={<Deserts/>} />
        </Route>
        <Route path='contact' element={<Contact/>} />
        <Route path='salad' element={<Salad/>} />
      </Route>
    )
  )



  return (
    <div className="App">
      <RouterProvider router={navigation}/>
    </div>
  );
}

export default App;



