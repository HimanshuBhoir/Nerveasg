import React from 'react'
import styled from 'styled-components';
import { ViewData } from '../../components'; 

function RangeboundView({id}) {
  return (
    <MainView>
        <ViewData index={id} />
    </MainView>
  )
}

export default RangeboundView;


const MainView = styled.main`

`;