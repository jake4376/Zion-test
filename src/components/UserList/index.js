import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { UserResult } from 'redux/selectors';
import { UpdateSearchFilter, UserSelected, FetchUsers } from 'redux/actions/users';

import Users from './Users';

const UserListWrapper = styled.div`
    display: flex;
    flex: 1.3;
    height: 100%;
    flex-direction: column;
    border-right: 1px solid #c2c590;
`;

const Input = styled.input`
  margin: 20px;
  padding: 6px;
  border-radius: 3px;
  border: 1px solid #59031a;
`;

class UserList extends React.Component {
    onChangeKeyword = (event) => {
        const keyword = event.target.value;
        this.props.UpdateSearchFilter(keyword);
    }

    onSelect = (user) => {
        this.props.UserSelected(user);
    }

    loadMore = () => {
        this.props.FetchUsers();
    }

    render () {
        const { results, status, selected } = this.props;
        return (
            <UserListWrapper>
                <Input type="text" onChange={this.onChangeKeyword} placeholder="Search user..." />
                <Users
                    users={results}
                    status={status}
                    selectedId={get(selected, 'id')}
                    onSelect={this.onSelect}
                    loadMore={this.loadMore}
                />
            </UserListWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    ...UserResult(state),
    selected: state.users.selected_user,
    status: state.users.current_status,
});
  
const mapDispatchToProps = { UpdateSearchFilter, UserSelected, FetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);