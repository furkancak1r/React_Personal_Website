import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

const PreloadMedia = ({ data, children }) => {
  return data.length > 1 ? children : <Loader />;
};

PreloadMedia.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default PreloadMedia;