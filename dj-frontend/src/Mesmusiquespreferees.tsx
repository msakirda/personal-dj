import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function Mesmusiquespreferees() {
    
    const [mesmusiquepreferees, setmesmusiquepreferees] = useState([])
    

    useEffect(() => {
        const getFavoriteMusics = async () => {
            const response = await fetch("http://localhost:1337/api/musiques?filters[Favoris]=true&populate=chanteur")
            const data = await response.json()
            console.log("favorite music response", data.data);
            setmesmusiquepreferees(data.data)
        }
        getFavoriteMusics()
    }, []);    

    
    return (
      <>

        <div className='body'>
          
          <div className='Mypersonaldj'>
            <div className='toto'>
            <h1>My personal DJ</h1>
            </div>
            <div className='button'>
            <Link to="/Ajoutmusique">+</Link>
            </div>
          </div>

          <div className='Mesmusiquespreferees'>
          <h2>Mes Musiques Préférées</h2>
          </div>
            <div className='carree'>
                {mesmusiquepreferees.map((m:any,index) => (
                    <div className="music" style={{backgroundColor: m.attributes.Couleur_de_fond}} key={index}>
                        <div className="music-title">
                        <p>{m.attributes.chanteur.data.attributes.Prenom} {m.attributes.chanteur.data.attributes.Nom}</p>
                        <p>{m.attributes.Titre}</p>
                        </div>
                    </div>
                ))}
            </div>
                    
        </div>
      </>
    )
  }
  
  export default Mesmusiquespreferees
