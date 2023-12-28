import React from 'react';
import {ActivityIndicator} from 'react-native';
import Constants from '../Constant';

const Loader = () => {
  return <ActivityIndicator size="large" color={Constants.textColor} />;
};

export default Loader;