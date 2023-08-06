import React, { useState, useEffect } from "react";
import { Bar, Container, Dots, LoadingBar, Message } from "./Loading";
const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 50);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Esconda a animação quando o progresso atingir 100%
      setHideAnimation(true);
    }
  }, [progress]);

  return (
    <Container>
      <LoadingBar hide={hideAnimation}>
        <Bar style={{ width: `${progress}%` }} />
      </LoadingBar>
      <Message hide={hideAnimation}>
        Loading<Dots>...</Dots>
      </Message>
    </Container>
  );
};

export default LoadingAnimation;
