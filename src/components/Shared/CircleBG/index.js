import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const breakpoints = {
  sm: "640px",
};

const Circle = styled("span")(
  (props) => `
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${props.color};    

    @media (min-width: ${breakpoints.sm}) {
      width: ${props.width};
      height: ${props.height};
      top: ${props.top};
      left: ${props.left};
    }

    @media (max-width: ${breakpoints.sm}) {
      width: ${props.smwidth};
      height: ${props.smheight};
      bottom: ${props.smbottom};
      left: ${props.smleft};
    }
  `
);

export default function CircleBG() {
  const theme = useTheme();
  return (
    <>
      <Circle
        width="100vw"
        height="97vw"
        smwidth="100vw"
        smheight="100vw"
        top="5vh"
        smbottom="-10vh"
        left="-50vw"
        smleft="-50vw"
        color={theme.palette.circlebg.line1}
        id="intro-circle-1"
      />
      <Circle
        width="100vw"
        height="97vw"
        smwidth="110vw"
        smheight="110vw"
        top="2vh"
        smbottom="0vh"
        left="-60vw"
        smleft="-50vw"
        color={theme.palette.circlebg.line2}
        id="intro-circle-2"
      />
      <Circle
        width="100vw"
        height="97vw"
        smwidth="100vw"
        smheight="100vw"
        top="-25vh"
        smbottom="-10vh"
        left="-75vw"
        smleft="-30vw"
        color={theme.palette.circlebg.line3}
        id="intro-circle-3"
      />
    </>
  );
}
