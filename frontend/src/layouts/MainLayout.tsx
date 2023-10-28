import { Flex } from '@mantine/core';
import React from 'react';

interface Props {
  children: React.ReactElement;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default MainLayout;
