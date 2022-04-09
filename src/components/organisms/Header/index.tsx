import { PrimitiveAtom } from 'jotai';
import React from 'react';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import { ActionBar } from '../../molecules/ActionBar';
import { Container, Content } from './styles';

type HeaderProps = {
  isOpenAddNewToolModalAtom: PrimitiveAtom<boolean>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchInTagsOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  isOpenAddNewToolModalAtom,
  setSearchQuery,
  setSearchInTagsOnly,
}) => (
  <Container>
    <Content>
      <Heading style={{ marginBottom: 14 }}>VUTTR</Heading>
      <Text className="subtitle">Very Useful Tolls to Remember</Text>

      <ActionBar
        setSearchQuery={setSearchQuery}
        isOpenAddNewToolModalAtom={isOpenAddNewToolModalAtom}
        setSearchInTagsOnly={setSearchInTagsOnly}
      />
    </Content>
  </Container>
);
