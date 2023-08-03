import React from "react";
import Lottie from "lottie-react";
import animationData from "./animation_world.json"; // Substitua pelo caminho correto do arquivo JSON da animação

export const AnimatedLottie = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "10rem", height: "10rem" }}
      />
    </div>
  );
};
