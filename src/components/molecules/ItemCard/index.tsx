import React from 'react';
import { useRemoveModal } from '../../../hooks/removeModal';
import { useTools } from '../../../hooks/tools';
import { Tool } from '../../../types/Tool';
import { Container } from './styles';

type ItemCardProps = {
  tool: Tool;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  tool,
}) => {
  const { openModal } = useRemoveModal();

  function handleRemoveTool() {
    openModal(tool);
  }

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
        onClick={() => handleRemoveTool()}
      >
        Remover
      </button>
    </Container>
  );
};
