import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [circleCenterSize, setCircleCenterSize] = useState(0); // Tamaño inicial del radio para circle1
  const [circleTopSize, setCircleTopSize] = useState(0);
  const [circleBottomSize, setCircleBottomSize] = useState(0);
  const [circleRightSize, setCircleRightSize] = useState(0);
  const [circleLeftSize, setCircleLeftSize] = useState(0);
  const [circleTopY, setCircleTopY] = useState(0);
  const [circleBottomY, setCircleBottomY] = useState(0);
  const [circleRightX, setCircleRightX] = useState(0);
  const [circleLeftX, setCircleLeftX] = useState(0);

  useEffect(() => {
    const animateCircles = () => {
      const reset = () => {
        return new Promise((resolve) => {
          setCircleCenterSize(20);
          setCircleTopY(0);
          setCircleBottomY(0);
          setCircleTopSize(0);
          setCircleBottomSize(0);
          setCircleRightX(0);
          setCircleLeftX(0);
          setCircleRightSize(0);
          setCircleLeftSize(0);
          resolve();
        });
      };
      const toSides = () => {
        return new Promise((resolve) => {
          setCircleCenterSize(20);
          setCircleRightSize(35);
          setCircleLeftSize(35);
          setCircleRightX(30);
          setCircleLeftX(-30);
          resolve();
        });
      };
      const toTopBottom = () => {
        return new Promise((resolve) => {
          setCircleCenterSize(20);
          setCircleTopSize(35);
          setCircleBottomSize(35);
          setCircleTopY(-30);
          setCircleBottomY(30);
          resolve();
        });
      };
      const animations = [
        // First frame
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              setCircleCenterSize(35);
              setCircleTopSize(35);
              setCircleBottomSize(35);
              setCircleRightSize(35);
              setCircleLeftSize(35);
              resolve();
            }, 700)
          ),
        // + Animation
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              setCircleCenterSize(52.5); // Agrandar un 50%
              setCircleTopY(-30); // Mover hacia arriba 30px
              setCircleBottomY(30); // Mover hacia abajo 30px
              setCircleRightX(30); // Mover hacia la derecha 30px
              setCircleLeftX(-30); // Mover hacia la izquierda 30px
              resolve();
            }, 700)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 700)
          ),
        // To sides
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toSides();
              resolve();
            }, 700)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 700)
          ),
        // To top bottom
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toTopBottom();
              resolve();
            }, 700)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 700)
          ),
        // To sides
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toSides();
              resolve();
            }, 700)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 700)
          ),
        // To top bottom
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toTopBottom();
              resolve();
            }, 700)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              setCircleCenterSize(0);
              setCircleTopY(0);
              setCircleBottomY(0);
              setCircleTopSize(0);
              setCircleBottomSize(0);
              setCircleRightX(0);
              setCircleLeftX(0);
              setCircleRightSize(0);
              setCircleLeftSize(0);
              resolve();
            }, 700)
          ),
        // Hide all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              setCircleCenterSize(0);
              setCircleTopSize(0);
              setCircleBottomSize(0);
              setCircleRightSize(0);
              setCircleLeftSize(0);
              resolve();
            }, 700)
          ),
      ];
      const runAnimations = async () => {
        for (let animation of animations) {
          await animation();
        }
        runAnimations();
      };
      runAnimations();
    };
    animateCircles();
  }, []);

  return (
    <>
      <div className="App">
        <div className="circle-mask">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="deformFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.02"
                  numOctaves="0.1"
                  result="turbulence"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="10s"
                    values="0.02;0.09;0.02"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turbulence"
                  scale="25"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>

              <mask id="circleMask">
                <rect width="100%" height="100%" fill="black" />
                <circle
                  className="circle circleCenter"
                  cx="100"
                  cy="100"
                  r={circleCenterSize}
                  filter="url(#glow)"
                  fill="white"
                />
                <circle
                  className="circle circleTop"
                  cx="100"
                  cy={100 + circleTopY}
                  r={circleTopSize}
                  filter="url(#glow)"
                  fill="white"
                />
                <circle
                  className="circle circle3"
                  cx="100"
                  cy={100 + circleBottomY}
                  r={circleBottomSize}
                  filter="url(#glow)"
                  fill="white"
                />
                <circle
                  className="circle circle4"
                  cx={100 + circleRightX}
                  cy="100"
                  r={circleRightSize}
                  filter="url(#glow)"
                  fill="white"
                />
                <circle
                  className="circle circle5"
                  cx={100 + circleLeftX}
                  cy="100"
                  r={circleLeftSize}
                  filter="url(#glow)"
                  fill="white"
                />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              mask="url(#circleMask)"
              fill="url(#imagePattern)"
            />
            <defs>
              <pattern
                id="imagePattern"
                patternUnits="userSpaceOnUse"
                width="200"
                height="200"
                filter="url(#deformFilter)"
              >
                <image href="/kal.jpeg" x="0" y="0" width="200" height="200" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              mask="url(#circleMask)"
              fill="url(#imagePattern)"
              filter="url(#deformFilter)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
