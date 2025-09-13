import React from "react";

export default function Playlist({ currentSong }) {
  return (
    <div
      className="player-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#1c1c1c",
        borderTop: "1px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        color: "white",
      }}
    >
      {currentSong ? (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={currentSong.img}
              alt={currentSong.title}
              style={{ width: "50px", height: "50px", borderRadius: "8px" }}
            />
            <div>
              <p>{currentSong.title}</p>
              <p style={{ fontSize: "0.8rem", color: "#aaa" }}>
                {currentSong.category}
              </p>
            </div>
          </div>
          <audio src={currentSong.music.replace('.', '')} autoPlay controls />
        </>
      ) : (
        <p>No song playing</p>
      )}
    </div>
  );
}
