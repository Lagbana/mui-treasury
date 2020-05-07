import React from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import { Theme, useTheme } from '@material-ui/core/styles';
import { useLayoutCtx } from '../../core';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import HeaderCompiler from '../../compilers/HeaderCompiler';
import { createBreakpointStyles } from '../../utils';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledAppBar = styledProxy<AppBarProps>(AppBar);

  const Header: React.FC<AppBarProps> = props => {
    const { data, state } = useLayoutCtx();
    const { breakpoints } = useTheme<Theme>();
    const styles = createBreakpointStyles(
      HeaderCompiler(state, data.header, data.edgeSidebar).getResultStyle(),
      breakpoints
    );
    return (
      <StyledAppBar
        color={'default'}
        elevation={0}
        mui-layout={data.headerId}
        {...props}
        styles={{
          transition: 'all 300ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
          ...styles,
        }}
      />
    );
  };

  return Header;
};