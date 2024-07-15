import React from 'react'
import styled from 'styled-components';
import { ViewData } from '../../components';

function VolatileView({id}) {
  return (
    <MainView>
        <ViewData index={id} />
    </MainView>
  )
}

export default VolatileView;


const MainView = styled.main`

`;