import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [circleCenterSize, setCircleCenterSize] = useState(0); 
  const [circleTopSize, setCircleTopSize] = useState(0);
  const [circleBottomSize, setCircleBottomSize] = useState(0);
  const [circleRightSize, setCircleRightSize] = useState(0);
  const [circleLeftSize, setCircleLeftSize] = useState(0);
  const [circleTopY, setCircleTopY] = useState(0);
  const [circleBottomY, setCircleBottomY] = useState(0);
  const [circleRightX, setCircleRightX] = useState(0);
  const [circleLeftX, setCircleLeftX] = useState(0);
  const [polygonScale, setPolygonScale] = useState(1);
  const [polygonRotation, setPolygonRotation] = useState(0);
  const [isShrinking, setIsShrinking] = useState(false);
  useEffect(() => {
    const scaleAndRotatePolygons = () => {
      return new Promise((resolve) => {
        setPolygonScale(2400);
        setPolygonRotation(-20);
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    };
    const resetPolygons = () => {
      return new Promise((resolve) => {
        setIsShrinking(true);
        setPolygonScale(1);
        setPolygonRotation(0);
        setTimeout(() => {
          setIsShrinking(false); 
          resolve();
        }, 600); 
      });
    };
    const animateCircles = () => {
      const reset = () => {
        return new Promise((resolve) => {
          setCircleCenterSize(35);
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
          setCircleCenterSize(35);
          setCircleRightSize(50);
          setCircleLeftSize(50);
          setCircleRightX(35);
          setCircleLeftX(-35);
          resolve();
        });
      };
      const toTopBottom = () => {
        return new Promise((resolve) => {
          setCircleCenterSize(35);
          setCircleTopSize(50);
          setCircleBottomSize(50);
          setCircleTopY(-35);
          setCircleBottomY(35);
          resolve();
        });
      };
      const animations = [
        // First frame
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              setCircleCenterSize(45);
              setCircleTopSize(45);
              setCircleBottomSize(45);
              setCircleRightSize(45);
              setCircleLeftSize(45);
              resolve();
            }, 700)
          ),
        // + Animation
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              setCircleCenterSize(45); 
              setCircleTopY(-35); 
              setCircleBottomY(35); 
              setCircleRightX(35);
              setCircleLeftX(-35); 
              resolve();
            }, 400)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 500)
          ),
        // To sides
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toSides();
              resolve();
            }, 500)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 500)
          ),
        // To top bottom
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toTopBottom();
              resolve();
            }, 500)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 500)
          ),
        // To sides
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toSides();
              resolve();
            }, 500)
          ),
        // Center all circles
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              reset();
              resolve();
            }, 500)
          ),
        // To top bottom
        () =>
          new Promise((resolve) =>
            setTimeout(() => {
              toTopBottom();
              resolve();
            }, 500)
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
            }, 500)
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
            }, 500)
          ),
        // Scale and rotate polygons
        () => scaleAndRotatePolygons(),
        () => resetPolygons(),
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
        <div
          className={`triangle-mask ${isShrinking ? "no-transition" : ""}`}
          style={{
            transform: `scale(${polygonScale}) rotate(${polygonRotation}deg)`,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="softGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="1.5"
                  result="blur"
                />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <mask id="triangleMask">
                <rect width="100%" height="100%" fill="black" />
                <path
                  d="M 0 10 Q 20 -60 100 100"
                  fill="white"
                  filter="url(#softGlow)"
                />
                <path
                  d="M 100 20 Q 40 -60 100 100"
                  fill="white"
                  filter="url(#softGlow)"
                />
                <path
                  d="M 0 50 Q 30 50 100 100"
                  fill="white"
                  filter="url(#softGlow)"
                />
                <path
                  d="M 100 100 Q 150 150 200 180"
                  fill="white"
                  filter="url(#softGlow)"
                />
                <polygon
                  className="polygon-1"
                  points="100, 100 180, 120 220,180"
                  fill="white"
                  filter="url(#softGlow)"
                />
                <polygon
                  className="polygon-1"
                  points="100, 100 180, 220 140,180"
                  fill="white"
                  filter="url(#softGlow)"
                />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              mask="url(#triangleMask)"
              fill="url(#triangleImagePattern)"
            />
            <defs>
              <pattern
                id="triangleImagePattern"
                patternUnits="userSpaceOnUse"
                width="200"
                height="200"
                filter="url(#deformFilter)"
              >
                <image href="/fondo.jpg" x="0" y="0" width="500" height="300" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              mask="url(#triangleMask)"
              fill="url(#triangleImagePattern)"
              filter="url(#deformFilter)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
