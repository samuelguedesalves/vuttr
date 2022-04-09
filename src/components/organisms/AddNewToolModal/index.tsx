import React, { useState } from 'react';
import Modal from 'react-modal';
import { PrimitiveAtom, useAtom } from 'jotai';
import { Container } from './styles';
import closeImg from '../../../assets/close-icon.svg';
import { useTools } from '../../../hooks/tools';

Modal.setAppElement('#root');

type AddNewToolModalProps = {
  isOpenAddNewToolModalAtom: PrimitiveAtom<boolean>;
}

export const AddNewToolModal: React.FC<AddNewToolModalProps> = ({
  isOpenAddNewToolModalAtom,
}) => {
  const [
    isOpenAddNewToolModal,
    setIsOpenAddNewToolModal,
  ] = useAtom(isOpenAddNewToolModalAtom);

  const { addTool } = useTools();

  const [toolName, setToolName] = useState<string>('');
  const [toolLink, setToolLink] = useState<string>('');
  const [toolDescription, setToolDescription] = useState<string>('');
  const [toolTags, setToolTags] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addTool({
      name: toolName,
      description: toolDescription,
      link: toolLink,
      tags: toolTags,
    });

    setIsOpenAddNewToolModal(() => false);
  }

  function handleToolTags(event: React.ChangeEvent<HTMLInputElement>) {
    const unsplitedTags = event.target.value;

    const splitedTags = unsplitedTags.split(' ');

    setToolTags(splitedTags);
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpenAddNewToolModal}
      onRequestClose={() => setIsOpenAddNewToolModal(() => false)}
    >
      <button
        type="button"
        onClick={() => setIsOpenAddNewToolModal(() => false)}
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container>
        <form onSubmit={handleSubmit}>
          <header>
            <strong>Add new tool</strong>
          </header>

          <label>
            Tool name
            <input
              type="text"
              name="tool-name"
              placeholder="Write here..."
              onChange={(event) => setToolName(event.target.value)}
            />
          </label>

          <label>
            Tool link
            <input
              type="text"
              name="tool-link"
              placeholder="Write here..."
              onChange={(event) => setToolLink(event.target.value)}
            />
          </label>

          <label>
            Tool description
            <textarea
              cols={10}
              rows={10}
              placeholder="Write here..."
              onChange={(event) => setToolDescription(event.target.value)}
            />
          </label>

          <label>
            Tags
            <input
              type="text"
              name="tool-link"
              placeholder="Write here..."
              onChange={handleToolTags}
            />
          </label>

          <footer>
            <button type="submit">Add tool</button>
          </footer>
        </form>
      </Container>
    </Modal>
  );
};
