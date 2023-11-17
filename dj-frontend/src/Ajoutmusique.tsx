import { useCallback, useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Ajoutmusique() {
  const navigate = useNavigate();

  const [titre, setTitre] = useState('');
  const [lien, setLien] = useState('');
  const [chanteur, setChanteur] = useState('');
  const [favoris, setFavoris] = useState(false);
  const [annee, setannee] = useState('');
  const [couleur, setCouleur] = useState('');

  const [listeChanteurs, setListeChanteurs] = useState([]);

  useEffect(() => {
    const fetchChanteurs = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/chanteurs');
        const data = await response.json();
        console.log(data)
          setListeChanteurs(data.data);
        
      } catch (error) {
        console.error('Erreur lors de la récupération des chanteurs', error);
      }
    };
  
    fetchChanteurs();
  }, []);
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const response = await fetch('http://localhost:1337/api/musiques', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Titre: titre,
          Lien_youtube: lien,
          Chanteur: chanteur,
          Favoris: favoris,
          Date_de_sortie: annee,
          Couleur_de_fond: couleur,
        },
      }),
    });

    if (response.ok) {
      navigate('/');
    } else {
      console.error("Erreur lors de l'ajout de la musique");
    }
  };

  return (
    <div className='body'>
      <div className='ajouterunemusique'>
        <h1>Ajouter une musique</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input type='text' value={titre} onChange={(e) => setTitre(e.target.value)} />
        </label>
        <label>
          Lien:
          <input type='text' value={lien} onChange={(e) => setLien(e.target.value)} />
        </label>
        <label>
          Chanteur:
          <select
            value={chanteur}
            onChange={(e) => setChanteur(e.target.value)}
          >
            <option key='' value=''>-- Sélectionnez un chanteur --</option>
            {Array.isArray(listeChanteurs) && listeChanteurs.map((chanteur: any) => (
          <option key={chanteur.attributes.id}>
            {chanteur.attributes.Nom} {chanteur.attributes.Prenom}
          </option>
        ))}
          </select>
        </label>
        <label>
          Favoris:
          <input type='checkbox' checked={favoris} onChange={(e) => setFavoris(e.target.checked)} />
        </label>
        <label>
          Date de sortie:
          <input type='text' value={annee} onChange={(e) => setannee(e.target.value)} />
        </label>
        <label>
          Couleur:
          <input type='color' value={couleur} onChange={(e) => setCouleur(e.target.value)} />
        </label>
        <button type='submit'>Ajouter</button>
      </form>
    </div>
  );
}

export default Ajoutmusique;
