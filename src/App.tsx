import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from './components/header';
import { RoutesContent } from './components/routes-content';
import { RoutesContentMenu } from './components/routes-content-menu';
import { Footer } from './components/footer';

import { User } from './types/user';

import './App.scss';

export const App = () => {
  const { pathname } = useLocation();
  const admin: User = {
    userId: 1,
    login: 'admin',
    password: '1234',
    name: 'Дмитрий'
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(admin))
  })

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
