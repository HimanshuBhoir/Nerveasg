import React from 'react'
import styled from 'styled-components';
import { ViewData } from '../../components';

function BullishView({ id }) {
  return (
    <MainView>
        <ViewData index={id} />
    </MainView>
  )
}

export default BullishView;


const MainView = styled.main`

`;