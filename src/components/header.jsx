import React from 'react';
import i18n from 'i18next';
import styled from 'styled-components';

const Link = styled.span`
  margin-right: 10px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Header = ()=> {
  return <header>
    <Link onClick={()=> i18n.changeLanguage('en')}>English</Link>
    <Link onClick={()=> i18n.changeLanguage('pl')}>Polish</Link>
  </header>;
}

export default Header;
