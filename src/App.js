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
      const animations = [
        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(35);
          setCircleTopSize(35);
          setCircleBottomSize(35);
          setCircleRightSize(35);
          setCircleLeftSize(35);
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(52.5); // Agrandar un 50%
          setCircleTopY(-30); // Mover hacia arriba 30px
          setCircleBottomY(30); // Mover hacia abajo 30px
          setCircleRightX(30); // Mover hacia la derecha 30px
          setCircleLeftX(-30); // Mover hacia la izquierda 30px
          resolve();
        }, 1000)),


        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(35); // Volver al tamaño original
          setCircleTopY(0); // Volver a la posición original
          setCircleBottomY(0); // Volver a la posición original
          setCircleRightX(0); // Volver a la posición original
          setCircleLeftX(0); // Volver a la posición original
          resolve();
        }, 1000)),


        () => new Promise(resolve => setTimeout(() => {
          setCircleRightX(30); // Mover hacia la derecha 30px
          setCircleLeftX(-30); // Mover hacia la izquierda 30px
          resolve();
        }, 1000)),


        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(35); // Volver al tamaño original
          setCircleTopY(0); // Volver a la posición original
          setCircleBottomY(0); // Volver a la posición original
          setCircleRightX(0); // Volver a la posición original
          setCircleLeftX(0); // Volver a la posición original
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleTopY(30); // Mover hacia la top 30px
          setCircleBottomY(-30); // Mover hacia la bot 30px
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(35); // Volver al tamaño original
          setCircleTopY(0); // Volver a la posición original
          setCircleBottomY(0); // Volver a la posición original
          setCircleRightX(0); // Volver a la posición original
          setCircleLeftX(0); // Volver a la posición original
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleRightX(30); // Mover hacia la derecha 30px
          setCircleLeftX(-30); // Mover hacia la izquierda 30px
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(35); // Volver al tamaño original
          setCircleTopY(0); // Volver a la posición original
          setCircleBottomY(0); // Volver a la posición original
          setCircleRightX(0); // Volver a la posición original
          setCircleLeftX(0); // Volver a la posición original
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleTopY(30); // Mover hacia la top 30px
          setCircleBottomY(-30); // Mover hacia la bot 30px
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(35); // Volver al tamaño original
          setCircleTopY(0); // Volver a la posición original
          setCircleBottomY(0); // Volver a la posición original
          setCircleRightX(0); // Volver a la posición original
          setCircleLeftX(0); // Volver a la posición original
          resolve();
        }, 1000)),

        () => new Promise(resolve => setTimeout(() => {
          setCircleCenterSize(0);
          setCircleTopSize(0);
          setCircleBottomSize(0);
          setCircleRightSize(0);
          setCircleLeftSize(0);
          resolve();
        }, 1000)),
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
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
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
              >
                <image href="/kal.jpeg" x="0" y="0" width="200" height="200" />
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
