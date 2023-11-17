import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';


function Connexion() {
    const navigate = useNavigate();
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = useCallback(
        async()=>{
            const response = await fetch("http://localhost:1337/api/auth/local", {
                method: "POST", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    identifier: pseudo,
                    password: password,
                }) 
            });
            const data = await response.json()
            console.log("reponse authentication", data);
            if(data.user){
                navigate("/Home")
            }
            else {
                setPassword("")
                setPseudo("")
            }

        }, [pseudo,password, navigate]
    )


    return (
      <>
        <div className='body'>
          <div className='connexion'>
            <h1>CONNEXION</h1>
          </div>
        <div className='bloc'>
            <div className='saisie1'>
            <label>
              Pseudo:
            </label>
              <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
            </div>
            <div className='saisie2'>
            <label>
              Mot de passe:
            </label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Connexion</button>
            </div>
        </div>
        </div>
      </>
    )
  }
  
  export default Connexion