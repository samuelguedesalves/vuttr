import { useTools } from '../../../hooks/tools';
import { ItemCard } from '../../molecules/ItemCard';
import { Container, Content } from './styles';

export const ItemsList = () => {
  const { tools } = useTools();

  return (
    <Container>
      <Content>
        {
          tools.map((tool) => (
            <ItemCard
              key={tool.id}
              tool={tool}
            />
          ))
        }
      </Content>
    </Container>
  );
};
