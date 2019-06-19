import get from 'lodash.get';

export const getUserSearchKey = state => state.users.keyword;
export const getUserPage = state => state.users.current_page;
export const getSelectedUserName = state => get(state.users, 'selected_user.username', null);

export const getSelectedUserInfo = state => get(state.users, 'selected_user', null);

export const getUserList = state => ({
    results: state.users.results,
    total: state.users.total,
    totalPages: state.users.total_pages,
    currentPage: state.users.current_page,
    currentStatus: state.users.current_status,
    selectedUser: state.users.selected_user
});