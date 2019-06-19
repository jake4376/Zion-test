import React from 'react';
import styled from 'styled-components';

import Credits from './Credits';
import SocialIcons from './SocialIcons';

const FooterWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 40px;
    border-top: 1px solid #f3f8ff;
`;


export default class Footer extends React.Component {
    render () {
        return (
            <FooterWrapper>
                <Credits />
                <SocialIcons
                    refferalLink = "http://localhost:3000"
                    sharePlatform={["twitter", "telegram", "email"]}
                />
            </FooterWrapper>
        )
    }
}