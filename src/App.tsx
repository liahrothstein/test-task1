import { useParams } from 'react-router-dom';

import { Header } from './components/header';
import { Menu } from './components/menu';
import { RoutesContent } from './components/routes-content';
import { RoutesContentMenu } from './components/routes-content-menu';
import { Footer } from './components/footer';

import './App.scss';

export const App = () => {
  const { route } = useParams();

  return (
    <div className="App">
      <Header />
      {(route !== undefined) ?
        <>
          <Menu />
          <RoutesContent />
        </> :
        <RoutesContentMenu />}
      <Footer />
    </div>
  );
}
