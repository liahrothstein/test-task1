import { useLocation } from 'react-router-dom';

import { Header } from './components/header';
import { RoutesContent } from './components/routes-content';
import { RoutesContentMenu } from './components/routes-content-menu';
import { Footer } from './components/footer';

import './App.scss';

export const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {(pathname === '/home' || pathname === '/terms' || pathname === '/offer') ?
        <>
          <Header />
          <RoutesContentMenu />
          <Footer />
        </> :
        <RoutesContent />}
    </div>
  );
}
