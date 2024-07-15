import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { BearishView, BullishView, RangeboundView, VolatileView } from './views';
import styled from 'styled-components';

function App() {

  const navItems = [
    { to: '/bullish', label: 'Bullish' },
    { to: '/bearish', label: 'Bearish' },
    { to: '/rangebound', label: 'Rangebound' },
    { to: '/volatile', label: 'Volatile' },
  ];

  const { pathname } = useLocation();

  let currentIndex = navItems.findIndex(item => item.to === pathname);
  currentIndex = currentIndex == -1 ? 1 : currentIndex;

  return (
    <PageView>
      <Navigation>
        {navItems.map((item, index) => (
          <NavButton
            key={index}
            to={item.to}
            className={index === currentIndex ? 'active' : ''}
          >
            {item.label}
          </NavButton>
        ))}
      </Navigation>
      <DisplayView>
        <Routes>
          <Route path='/' element={<BearishView id={1} />} />
          <Route path='/bullish' element={<BullishView id={0}/>} />
          <Route path='/bearish' element={<BearishView id={1}/>} />
          <Route path='/rangebound' element={<RangeboundView id={2}/>} />
          <Route path='/volatile' element={<VolatileView id={3}/>} />
        </Routes>
      </DisplayView>
    </PageView>
  );
}

export default App;

const PageView = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  background: whitesmoke;
  padding: 10px 0;
  width: 520px;
  margin-bottom: 25px;
  border-radius: 10px;
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; 
    width: 300px;
  }
`;

const NavButton = styled(Link)`
  text-decoration: none;
  color: gray;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue;
    color: white;
  }

  &.active {
    background-color: blue;
    color: white;
  }

  @media (max-width: 500px) {
    font-size: 15px;
    align-items: center;
  }
`;

const DisplayView = styled.div`
  width: 520px;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 500px) {
    width: 300px;
    font-size: 15px;
  }
`