import React from 'react';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import { ActionBar } from '../../molecules/ActionBar';
import { Container, Content } from './styles';

export const Header: React.FC = () => (
  <Container>
    <Content>
      <Heading style={{ marginBottom: 14 }}>VUTTR</Heading>
      <Text className="subtitle">Very Useful Tolls to Remember</Text>

      <ActionBar />
    </Content>
  </Container>
);
