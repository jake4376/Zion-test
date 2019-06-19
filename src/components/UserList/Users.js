import React from 'react';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';

import { actionTypes } from 'redux/actions/users';

import User from './User';
import EmptyUser from './EmptyUser';

const UserWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

export default class Users extends React.Component {
  onSelect = (user) => () => {
    this.props.onSelect(user);
  }

  onScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const { status, loadMore } = this.props;
    if (bottom && status !== actionTypes.FETCH_USERS) {
      loadMore();
    }
  }

  renderUser = (user) => (
    <User
      selected={user.id === this.props.selectedId}
      user={user}
      onClick={this.onSelect(user)}
      key={`user_${user.id}`}
    />
  )

  render() {
    const { users, status } = this.props;
    if (users.length === 0) {
      return <EmptyUser />
    }
    return (
      <UserWrapper onScroll={this.onScroll}>
        {users.map(this.renderUser)}
        { users.length > 0 && status === actionTypes.FETCH_USERS && (
          <InfiniteLoader loaderStyle={{ height: '40px', width: '40px', border: '2px solid #c6cfff', borderRight: 'none' }} />
        )}
      </UserWrapper>
    )
  }
}