import { SvgIcon } from "@mui/material";
import React, { useEffect, useRef } from "react";

export const Logo = () => {
  useEffect(() => {
    function setTextAnimation(
      delay: any,
      duration: any,
      strokeWidth: any,
      timingFunction: any,
      strokeColor: any,
      repeat: any
    ) {
      let paths: any = document.querySelectorAll("path");
      let mode = repeat && "forwards";
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style[
          "animation"
        ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
      }
    }
    setTextAnimation(0.1, 3.3, 2, "linear", "#4db5ff", true);
  }, []);

  return (
    <SvgIcon
      width="60"
      height="69"
      viewBox="0 0 60 69"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ height: "unset", width: "unset" }}
    >
      <g
        id="svgGroup"
        stroke-linecap="round"
        fill-rule="evenodd"
        font-size="9pt"
        stroke="#000"
        stroke-width="0.25mm"
        fill="none"
        style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "none" }}
      >
        <path
          d="M1.5 20.8028L29.9896 1.80968L58.5 21.2918V49.1745L30 67.2245L1.5 49.1745V20.8028Z"
          stroke="#4DB5FF"
          stroke-width="3"
        />
        <path
          d="M36.0909 22.7273H38.9091V38.1364C38.9091 39.7273 38.5341 41.1477 37.7841 42.3977C37.0417 43.6402 35.9924 44.6212 34.6364 45.3409C33.2803 46.053 31.6894 46.4091 29.8636 46.4091C28.0379 46.4091 26.447 46.053 25.0909 45.3409C23.7348 44.6212 22.6818 43.6402 21.9318 42.3977C21.1894 41.1477 20.8182 39.7273 20.8182 38.1364V22.7273H23.6364V37.9091C23.6364 39.0455 23.8864 40.0568 24.3864 40.9432C24.8864 41.822 25.5985 42.5152 26.5227 43.0227C27.4545 43.5227 28.5682 43.7727 29.8636 43.7727C31.1591 43.7727 32.2727 43.5227 33.2045 43.0227C34.1364 42.5152 34.8485 41.822 35.3409 40.9432C35.8409 40.0568 36.0909 39.0455 36.0909 37.9091V22.7273Z"
          fill="#4DB5FF"
        />
      </g>
    </SvgIcon>
  );
};
