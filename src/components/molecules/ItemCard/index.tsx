import React from 'react';
import { useTools } from '../../../hooks/tools';
import { Tool } from '../../../types/Tool';
import { Container } from './styles';

type ItemCardProps = {
  tool: Tool;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  tool,
}) => {
  const { removeTool } = useTools();

  return (
    <Container>
      <header>
        <a href={tool.link} target="_blank" rel="noreferrer">{tool.name}</a>
        <p>{tool.description}</p>
      </header>

      <div className="hashtags">
        {tool.tags.map((tag, index) => (
          <span
            key={Math.floor(Math.random() * 100 + index)}
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        className="button-remove-item"
        type="button"
        onClick={() => removeTool(tool.id)}
      >
        Remover
      </button>
    </Container>
  );
};
