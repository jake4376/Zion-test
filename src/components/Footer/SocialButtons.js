import React from 'react';
import styled from 'styled-components';

import get from 'lodash.get';

import EmailIcon from "resources/icon-social-email.svg";
import TelegramIcon from "resources/icon-social-telegram.svg";
import TwitterIcon from "resources/icon-social-twitter.svg";

const Icons = {
    email: EmailIcon,
    telegram: TelegramIcon,
    twitter: TwitterIcon,
}

const Wrapper = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90px;
    text-decoration: none;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

export default (props) => {
    return (
        <Wrapper href={props.buildLink(props.referralLink)} target="_blank">
            <Icon src={get(Icons, props.icon)} />
        </Wrapper>
    )
}