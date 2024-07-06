import React from 'react'
import styled from 'styled-components';
import { ViewData } from '../../components'; 

function RangeboundView() {
  return (
    <MainView>
        <ViewData index={2} />
    </MainView>
  )
}

export default RangeboundView;


const MainView = styled.main`

`;