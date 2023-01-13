import { Avatar, Box, Zoom } from "@mui/material";
import QualogyLogoButton from "../QualogyLogoButton";
import styles from "./QualogyHero.module.css";

const QualogyHero = ({ backgroundImage, avatarImage, aboutPath, children }) => {
  const SVGWidth = 800;
  const SVGHeight = 500;

  return (
    <Box
      sx={{
        width: "100%",
        [`@media (min-width: 920px)`]: {
          backgroundPosition: "center center",
        },
        height: "100vh",
        // backgroundImage: `url('${backgroundImage.src}')`,
        // backgroundColor: "red",
        transition: "2s ease all",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "500px",
            display: " flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            overflow="visible"
            style={{ position: "absolute", top: "40px" }}
            width={SVGWidth}
            height={SVGHeight}
          >
            <circle
              cx={SVGWidth / 2}
              cy={SVGHeight / 2}
              r="0px"
              stroke="white"
              strokeWidth="5"
              opacity="0"
              fillOpacity="0"
            >
              <animateMotion
                begin="0.3s"
                fill="freeze"
                dur="1.0s"
                path={`M0, 0,
                c
                -${SVGWidth / 10},
                ${SVGWidth / 4},
                ${SVGHeight - 150},
                ${SVGWidth / 10}, 0,-75}`}
              />
              <animate
                begin="0.3s"
                fill="freeze"
                attributeType="CSS"
                attributeName="opacity"
                from="0.2"
                to="1"
                dur="1.0s"
              />
              <animate
                begin="0.3s"
                fill="freeze"
                attributeName="r"
                from="8"
                to="150"
                dur="1.0s"
              />
            </circle>
            <circle
              cx={SVGWidth / 2}
              cy={SVGHeight / 2}
              r="150px"
              stroke="white"
              strokeWidth="5"
              opacity="0"
              fillOpacity="0"
            >
              <animateMotion
                begin="0.3s"
                fill="freeze"
                dur="1.0s"
                path={`M0, 0,
                 c -${SVGWidth / 6},
                -${SVGWidth / 10},
                -${SVGHeight / 2.5},
                ${SVGWidth / 2}, 55,25}`}
              />
              <animate
                begin="0.3s"
                fill="freeze"
                attributeType="CSS"
                attributeName="opacity"
                from="0.2"
                to="1"
                dur="1.0s"
              />
              <animate
                begin="0.3s"
                fill="freeze"
                attributeName="r"
                from="8"
                to="150"
                dur="1.0s"
              />
            </circle>
            <circle
              cx={SVGWidth / 2}
              cy={SVGHeight / 2}
              r="150px"
              stroke="white"
              strokeWidth="5"
              opacity="0"
              fillOpacity="0"
            >
              <animateMotion
                begin="0.3s"
                fill="freeze"
                dur="1.0s"
                path={`M0, 0,
                 c ${SVGWidth / 10},
                -${SVGWidth / 6},
                -${SVGHeight / 2},
                -${SVGWidth / 4}, -55,25}`}
              />
              <animate
                begin="0.3s"
                fill="freeze"
                attributeType="CSS"
                attributeName="opacity"
                from="0.2"
                to="1"
                dur="1.0s"
              />
              <animate
                begin="0.3s"
                fill="freeze"
                attributeName="r"
                from="8"
                to="150"
                dur="1.0s"
              />
            </circle>
          </svg>
          <Zoom
            in={true}
            easing={{ enter: "ease-out" }}
            timeout={500}
            style={{ border: "1px solid white" }}
          >
            <Avatar
              sx={{
                width: "300px",
                height: "300px",
              }}
              src={avatarImage.src}
            />
          </Zoom>
        </div>
        {children}
        <QualogyLogoButton targetLink={aboutPath} />
      </div>
    </Box>
  );
};

export default QualogyHero;
