import React from "react";
import useStyles from "./style";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Intro from "../Intro/Intro";
const ParticleBackground = () => {
  const classes = useStyles();
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <div className={classes.header} id="header">
      <Particles
        id="tsparticles"
        style={{ position: "absolute" }}
        init={particlesInit}
        loaded={particlesLoaded}
        canvasClassName="canvas-el"
        options={{
          background: {
            color: {
              value: "#252934",
            },
          },
          height: 1000,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
        }}
      />
      <div className={classes.flex}>
        <Intro />
      </div>
    </div>
  );
};

export default ParticleBackground;
