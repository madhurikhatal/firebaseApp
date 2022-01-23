import React from 'react';
import './default.scss';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import Footer from './components/Footer';
// import Header from './components/Header';

//layouts
import MainLayout from './layouts/MainLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';


function App() {
  return (
    <div className='App'>
      {/* <Header />   */}
      {/* // <div className='main'> */}
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/home"  render={ (props: any)     =>(
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
         <Route path ="/registration" element={<Registration/>} /> 
      </Routes>
      {/* <Homepage />
        <Registration />   */}
      
      {/* //  </div> */}
    </div>

  );
};

export default App;
