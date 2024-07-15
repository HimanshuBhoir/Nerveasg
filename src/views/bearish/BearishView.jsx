import React from 'react'
import styled from 'styled-components';
import { ViewData } from '../../components';

function BearishView({id}) {
  return (
    <MainView>
        <ViewData index={id} />
    </MainView>
  )
}

export default BearishView;


const MainView = styled.main``;