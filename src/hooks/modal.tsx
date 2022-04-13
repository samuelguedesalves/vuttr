import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

type ModalContextProps = {
  modalStatus: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps,
);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  function openModal() {
    setModalStatus(true);
  }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <ModalContext.Provider
      value={useMemo(() => ({
        modalStatus,
        openModal,
        closeModal,
      }), [modalStatus])}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
