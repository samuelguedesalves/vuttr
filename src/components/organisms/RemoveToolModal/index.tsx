import React, { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../../assets/close-icon.svg';
import { useRemoveModal } from '../../../hooks/removeModal';
import { useTools } from '../../../hooks/tools';
import { Container } from './styles';

export const RemoveToolModal = () => {
  const { removeTool } = useTools();
  const { tool, modalStatus, closeModal } = useRemoveModal();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    closeModal(() => {
      if (tool) removeTool(tool.id);
    });
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={modalStatus}
      onRequestClose={() => closeModal()}
    >
      <button
        type="button"
        onClick={() => closeModal()}
        className="close-modal-button"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container>
        <form onSubmit={handleSubmit}>
          <header>
            <strong>Remove tool</strong>
          </header>
          <main>
            <p className="description">
              Are you sure you want to remove
              <strong>
                {' '}
                {tool?.name}
              </strong>
              ?
            </p>
          </main>

          <footer>
            <button
              type="button"
              className="cancel"
              onClick={() => closeModal()}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="remove"
            >
              Yes, remove
            </button>
          </footer>
        </form>
      </Container>
    </Modal>
  );
};
