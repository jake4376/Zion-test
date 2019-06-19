import React from 'react';
import styled from 'styled-components';

import get from 'lodash.get';

import SocialButtons from './SocialButtons';

const platformInfo = {
    messenger: {
      icon: 'messenger',
      title: 'Messenger',
      buildLink: (link) => `fb-messenger://share/?link=${encodeURI(link)}`,
    },
    email: {
      icon: 'email',
      title: 'Email',
      buildLink: (link) =>
        `mailto:email@address.com?subject=Great+Demo&body=Try it out! ${link}`,
    },
    twitter: {
      icon: 'twitter',
      title: 'Twitter',
      buildLink: (link) => `http://twitter.com/share?text=Great+Demo&url=${link}`,
    },
    whatsapp: {
      icon: 'whatsapp',
      title: 'Whatsapp',
      buildLink: (link) => `whatsapp://send?text=${link}`,
    },
    telegram: {
      icon: 'telegram',
      title: 'Telegram',
      buildLink: (link) => `https://telegram.me/share/url?url=${link}&text=Great+Demo`,
    },
  };

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;


export default ( props ) => {
    const { refferalLink, sharePlatform } = props;
    return (
        <Wrapper>
            {sharePlatform.map((val, index) => {
                const info = get(platformInfo, val, platformInfo.messenger);
                return <SocialButtons refferalLink={refferalLink} {...info} key={`shareItem_${index}`} />;
            })}
        </Wrapper>
    )
}