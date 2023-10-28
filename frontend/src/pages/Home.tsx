import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <>
        <Sidebar />
        HOME PAGE
      </>
    </MainLayout>
  );
};

export default Home;
