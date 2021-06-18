import React from 'react';
import PropTypes from 'prop-types';
import { blueGrey } from '@material-ui/core/colors';
import makeStyles from '@material-ui/styles/makeStyles';
import { TreeProvider } from './TreeContext';
import styles from './treeChart.styles';

const useDefaultStyles = makeStyles(styles, { name: 'TreeChart' });

const TreeChart = ({ children, ...props }) => {
  return <TreeProvider {...props}>{children}</TreeProvider>;
};

TreeChart.propTypes = {
  children: PropTypes.node,
  length: PropTypes.number,
  gap: PropTypes.number,
  outline: PropTypes.string,
  useStyles: PropTypes.func,
};
TreeChart.defaultProps = {
  children: null,
  length: 16,
  gap: 12,
  outline: `1px solid ${blueGrey[100]}`,
  useStyles: useDefaultStyles,
};

export default TreeChart;
