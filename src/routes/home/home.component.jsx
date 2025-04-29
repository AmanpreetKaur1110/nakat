import {Outlet} from 'react-router-dom';
import Header from '../../components/header/header.component'; 
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return(
    <div className='home-layout' >
      <Header />

      <main className='home-content'>
       <Outlet/>
       <Directory />
       </main>

    
    </div>
    
  );  
};

export default Home;