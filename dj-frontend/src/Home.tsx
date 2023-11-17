import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';
import Mesmusiquespreferees from './Mesmusiquespreferees';
import Derniersajouts from './Derniersajouts';

function Home() {
    const navigate = useNavigate();

    

    return (
      <>
        <div className='body'>
        <Mesmusiquespreferees/>
        <Derniersajouts/>
        
        </div>
      </>
    )
  }
  
  export default Home


