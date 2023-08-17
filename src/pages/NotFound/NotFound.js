import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark);
`;

export const BackDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1.5rem;
`;

export const BackButton = styled.button`
  background: linear-gradient(45deg, #02c4ff 0%, #8ee67b 100%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem;
  margin: 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  width: 15rem;
  align-content: center;
  align-items: center;

  &:hover {
    background: var(--default-blue);
    transition: 1s ease-in-out;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: contain;
`;
