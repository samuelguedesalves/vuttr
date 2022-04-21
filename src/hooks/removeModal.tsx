import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import { Tool } from '../types/Tool';

type CallbackFunction = () => void;

type RemoveModalContextProps = {
  tool: Tool | null;
  modalStatus: boolean;
  openModal: (toolToSet: Tool) => void;
  closeModal: (callback?: CallbackFunction) => void;
};

const RemoveModalContext = createContext({} as RemoveModalContextProps);

export const RemoveModalProvider: React.FC = ({ children }) => {
  const [tool, setTool] = useState<Tool | null>(null);
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  function closeModal(callback?: CallbackFunction) {
    if (callback) callback();

    setModalStatus(false);
    setTool(null);
  }

  function openModal(toolToSet: Tool) {
    setTool(toolToSet);

    setModalStatus(true);
  }

  return (
    <RemoveModalContext.Provider
      value={useMemo(() => ({
        tool,
        modalStatus,
        openModal,
        closeModal,
      }), [modalStatus, tool])}
    >
      {children}
    </RemoveModalContext.Provider>
  );
};

export const useRemoveModal = () => useContext(RemoveModalContext);
