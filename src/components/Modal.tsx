import styled from "styled-components";

const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(56, 74, 100, 0.6);

  z-index: 1000;
`;

const ModalBody = styled.div`
  max-height: 80vh;
  background-color: #fff;
  border-radius: 20px;
  padding: 35px 60px 35px 40px;

  position: relative;
`;

const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 5px;
  width: 40px;
  height: 40px;
  border: none;
  font-size: 30px;
  padding: 10px;
`;

const Modal = ({ setIsModalShown }: any) => {
  return (
    <ModalWrap onClick={() => setIsModalShown(false)}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <div>Заказ успешно отправлен!</div>

        <StyledButton onClick={() => setIsModalShown(false)}>
          &times;
        </StyledButton>
      </ModalBody>
    </ModalWrap>
  );
};

export default Modal;
