import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 80vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    height: 90vh;
  }
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  color: var(--light-green);
  /* background-color: rgba(0, 128, 0, 0.1); */
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const IconesContato = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: rgba(0, 128, 0, 0.1); */
`;

export const ItemContato = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 10rem;
  transition: transform 0.2s;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--light-green);
    font-size: 1.1rem;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  span {
    margin-top: 0.5rem;
  }
`;
