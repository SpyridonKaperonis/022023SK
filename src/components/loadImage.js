import React from 'react'

export const LoadProfileImage = (props) => {
    const alt_ = props.alt_;
    const img_style = props.style;

  return (
    <nav>
    <div>
      <img src={require('../images/skimage.jpg')} style={img_style} alt={alt_} />
    </div>
    </nav>
  );
};
