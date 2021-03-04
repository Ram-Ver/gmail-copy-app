import React from "react";
import Loader from "react-loader-spinner";

function AppLoader({ type, color, height, width, timeout }) {
  return (
    <div className={"loader"}>
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={timeout}
      />
    </div>
  );
}

export default AppLoader;
