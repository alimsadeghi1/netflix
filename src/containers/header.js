import React from 'react';
import { Header } from '../components';
import { ROUTES } from '../constans/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.signIn}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
