import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, theme } from 'antd';
import SideMenu from '../../components/dashboard/SideMenu';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import { Outlet } from 'react-router-dom';

const { Content  } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}



const DashboardWrapper: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu/>
      <Layout>
        <DashboardHeader/>
        <Content  className='p-4 py-8 bg-[#EFF1FD]'>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardWrapper;