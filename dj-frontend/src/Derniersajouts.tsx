import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Derniersajouts() {
    
    const [decroissantfavoris, setdecroissantfavoris] = useState([])
       
    useEffect(() => {
        const getdecroissantfavoris = async () => {
            const response = await fetch("http://localhost:1337/api/musiques?sort=createdAt:desc&populate=chanteur")
            const data = await response.json()
            console.log("decroissantfavoris  response", data.data);
            setdecroissantfavoris(data.data)
        }
        getdecroissantfavoris()
    }, []);


    return (
      <>
      <div className='body'>
        <div className='Derniersajouts'>
                <h2>Derniers Ajout</h2>
            </div>
            <div className='carree'>
                {decroissantfavoris.map((m: any) => (
                    <div className="music" style={{backgroundColor: m.attributes.Couleur_de_fond}}>
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
  
  export default Derniersajouts


