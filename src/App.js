import logo from './logo.svg';
import './App.css';
import Search from './pages/search/search';
import { useRoutes } from 'react-router';
import { routes } from './routes';
import NavBar from './containers/nav-bar/nav-bar';

function App() {

  const element = useRoutes(routes)

  return (
    <div className="App">
      <NavBar></NavBar>
      {element}
    </div>
  );
}

export default App;
