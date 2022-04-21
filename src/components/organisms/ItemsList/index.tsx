import { useEffect, useState } from 'react';
import { useSearch } from '../../../hooks/search';
import { useTools } from '../../../hooks/tools';
import { Tool } from '../../../types/Tool';
import { ItemCard } from '../../molecules/ItemCard';
import { Container, Content } from './styles';

export const ItemsList = () => {
  const { tools } = useTools();
  const { searchQuery, searchOnlyInTags } = useSearch();

  const [queryTools, setQueryTools] = useState<Tool[]>([]);

  useEffect(() => {
    function existInTags(toolTagsArray: string[], toSearch: string): boolean {
      const hasMatch = toolTagsArray.reduce((acc, tag) => {
        if (!acc && tag.includes(toSearch)) {
          return true;
        }

        return acc;
      }, false);

      return hasMatch;
    }

    function searchTools() {
      const findTools = tools.filter((tool) => {
        if (searchOnlyInTags) {
          return existInTags(tool.tags, searchQuery);
        }

        if (tool.name.includes(searchQuery)) {
          return true;
        }

        if (tool.description.includes(searchQuery)) {
          return true;
        }

        if (tool.description.includes(searchQuery)) {
          return true;
        }

        if (existInTags(tool.tags, searchQuery)) {
          return true;
        }

        return false;
      });

      setQueryTools(findTools);
    }

    searchTools();
  }, [searchQuery]);

  return (
    <Container>
      <Content>
        {
          searchQuery.length > 0
            ? queryTools.map((tool) => {
              console.log(tool);
              return (
                <ItemCard
                  key={tool.id}
                  tool={tool}
                />
              );
            })
            : tools.map((tool) => (
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
