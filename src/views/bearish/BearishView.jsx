import React from 'react'
import styled from 'styled-components';
import { ViewData } from '../../components';

function BearishView() {
  return (
    <MainView>
        <ViewData index={1} />
    </MainView>
  )
}

export default BearishView;


const MainView = styled.main``;