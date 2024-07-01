import React from "react";

const Game = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        src="https://i.simmer.io/@Lumox/lumox-multiplayer"
        style={{ width: "100%", height: "100%" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Game;
