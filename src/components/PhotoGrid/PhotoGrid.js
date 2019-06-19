import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';

import { PhotoResult } from 'redux/selectors';
import { actionTypes, FetchPhotos } from 'redux/actions/photos';

import Photo from './Photo';
import PhotoEmptyState from './PhotoEmptyState';

const PhotoGridWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
  align-items: center;
  justify-content: space-around;
`;

class PhotoGrid extends React.Component {
  onScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const { status, FetchPhotos } = this.props;
    if (bottom && status !== actionTypes.FETCH_PHOTOS) {
      FetchPhotos();
    }
  }
  renderPhoto = (photo) => {
    return ( <Photo photo={photo} key={`photo_${photo.id}`} /> );
  }
  render() {
    const { photos, status, selectedUser } = this.props;
    if (photos.length === 0) {
      return <PhotoEmptyState selectedUser={selectedUser} />
    }
    return (
      <React.Fragment>
        <PhotoGridWrapper onScroll={this.onScroll}>
          {photos.map(this.renderPhoto)}
        </PhotoGridWrapper>
        { photos.length > 0 && status === actionTypes.FETCH_PHOTOS && (
          <InfiniteLoader visitStyle={{ height: '40px', width: '100%' }} loaderStyle={{ height: '40px', width: '40px', border: '2px solid #c6cfff', borderRight: 'none' }} />
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({ ...PhotoResult(state), status: state.photos.current_status, selectedUser: state.users.selected_user });
const mapDispatchToProps = { FetchPhotos };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
