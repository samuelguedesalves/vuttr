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
  const [tools, setTools] = useState<Tool[]>([]);

  function removeTool(toolId: string) {
    setTools(() => tools.filter(({ id }) => id !== toolId));
  }

  function addTool(tool: Omit<Tool, 'id'>) {
    const newTool: Tool = {
      id: uuidV4(),
      ...tool,
    };

    setTools([
      newTool,
      ...tools,
    ]);
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
