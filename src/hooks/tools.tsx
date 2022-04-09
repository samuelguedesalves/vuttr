import React, {
  createContext, useContext, useState, useMemo,
} from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Tool } from '../types/Tool';

type ToolsContextProps = {
  tools: Tool[];
  removeTool: (toolId: string) => void;
  addTool: (tool: Omit<Tool, 'id'>) => void;
}

const ToolsContext = createContext<ToolsContextProps>({} as ToolsContextProps);

export const ToolsContextProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>(() => {
    const storage = localStorage.getItem('@VUTTR:tools');

    if (storage) {
      const storagedTools = JSON.parse(storage);
      return storagedTools;
    }

    return [];
  });

  function removeTool(toolId: string) {
    const newToolsList = [...tools.filter(({ id }) => id !== toolId)];

    setTools(newToolsList);

    localStorage.setItem('@VUTTR:tools', JSON.stringify(newToolsList));
  }

  function addTool(tool: Omit<Tool, 'id'>) {
    const newTool: Tool = {
      id: uuidV4(),
      ...tool,
    };

    const newToolsList = [
      newTool,
      ...tools,
    ];

    setTools(newToolsList);

    localStorage.setItem('@VUTTR:tools', JSON.stringify(newToolsList));
  }

  return (
    <ToolsContext.Provider
      value={useMemo(() => ({
        tools,
        removeTool,
        addTool,
      }), [tools])}
    >
      {children}
    </ToolsContext.Provider>
  );
};

export function useTools() {
  return useContext(ToolsContext);
}
