import get from 'lodash.get';

export const UserSearchKey = state => state.users.keyword;
export const UserPage = state => state.users.current_page;
export const SelectedUserName = state => get(state.users, 'selected_user.username', null);

export const SelectedUserInfo = state => get(state.users, 'selected_user', null);

export const PhotoOrder = state => state.photos.orderBy;
export const PhotoPage = state => state.photos.current_page;
export const TotalPhoto = state => state.photos.total;

export const UserResult = state => ({
    results: state.users.results,
    total: state.users.total,
    totalPages: state.users.total_pages,
    currentPage: state.users.current_page,
    currentStatus: state.users.current_status,
    selectedUser: state.users.selected_user
});

export const PhotoResult = state => ({
    photos: state.photos.photos,
})