import SidebarWrapper from '@/components/ui/shared/sidebar/SidebarWrapper';
import React from 'react';

type Props = React.PropsWithChildren<{}>; // eslint-disable-line

const Layout = ({ children }: Props) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Layout;
