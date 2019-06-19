import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  &.selected {
    background-color: #c2c467;
  }
  &:hover {
    background-color: #c3c578;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Img = styled.img`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 20px;
  -webkit-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.40);
  -moz-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.40);
  box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.40);
`;

const InfoContainer = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.a`
  color: #f490c3;
`;

const Stats = styled.div`
  font-size: 0.8rem;
  color: #a409c5;
  margin-right: 20px;
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export default class User extends React.Component {
  render() {
    const { user, selected } = this.props;
    return (
      <ItemWrapper className={selected && 'selected'} onClick={this.props.onClick}>
        <Img src={user.profile_image.medium} />
        <InfoContainer>
          <Name href={user.portfolio_url} target="_blank">{user.first_name} {user.last_name}</Name>
          <StatsWrapper>
            <Stats>Likes: {user.total_likes}</Stats>
            <Stats>Photos: {user.total_photos}</Stats>
          </StatsWrapper>
        </InfoContainer>
      </ItemWrapper>
    )
  }
}