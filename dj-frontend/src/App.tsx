import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connexion from './Connexion';
import { useNavigate } from 'react-router-dom';
import Musiquepref from './Home';
import Home from './Home';
import Mesmusiquespreferees from './Mesmusiquespreferees';
import Ajoutmusique from './Ajoutmusique';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Connexion />,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Ajoutmusique",
    element: <Ajoutmusique/>,
  },
  


]);
function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;