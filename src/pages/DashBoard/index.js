import React, { Component } from 'react';
import styled from 'styled-components';

import { UserList, PhotoGrid, Footer } from 'components';


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    alin-items: flex-start;
    justify-content: stretch;
`;

export default class DashBoard extends Component {
    render () {
        return (
            <MainWrapper>
                <ContentWrapper>
                    <UserList />
                    <PhotoGrid />
                </ContentWrapper>
                <Footer />
            </MainWrapper>
        );
    }
}

