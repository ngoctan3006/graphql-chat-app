import { Flex } from '@mantine/core';
import React from 'react';
import { AuthOverlay, ProfileSetting, ProtectedRoutes, RoomList, Sidebar } from '../components';
import { MainLayout } from '../layouts';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <ProfileSetting />
        <Sidebar />
        <ProtectedRoutes>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <RoomList />
          </Flex>
        </ProtectedRoutes>
      </>
    </MainLayout>
  );
};

export default Home;
