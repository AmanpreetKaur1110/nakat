import {Routes,Route,} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';


const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
        <Route path='about' element={<About />}/> 
        <Route path="contact" element={<Contact />} />
        <Route path="/auth" element={<Authentication />} />
     
        </Route>
    </Routes>
  );
};
  

export default App;
