import SidebarWrapper from '@/components/ui/shared/sidebar/SidebarWrapper';
import React from 'react';

type Props = React.PropsWithChildren<{}>; // eslint-disable-next-line no-use-before-define

const Layout = ({ children }: Props) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Layout;
