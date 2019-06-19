import React from 'react';

const wrapperStyle = {
  display: 'inline-block',
  width: '300px',
  height: '300px',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  border: '1px solid black',
  margin: '8px',
};

export default ({ photo }) => {
  const imgUrl = `url(${photo.urls.regular})`;
  const backgroundColor = photo.color;
  const style = {
    ...wrapperStyle,
    backgroundColor,
    backgroundImage: imgUrl,
  };
  return (
    <div style={style} />
  );
};
