import React from 'react'
import styled from 'styled-components';
import { ViewData } from '../../components';

function VolatileView() {
  return (
    <MainView>
        <ViewData index={3} />
    </MainView>
  )
}

export default VolatileView;


const MainView = styled.main`

`;