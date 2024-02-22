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
    const timer0 = setTimeout(() => {
      setCircleCenterSize(35); // Volver al tamaño original
      setCircleTopSize(35); // Ocultar el círculo superior
      setCircleBottomSize(35); // Ocultar el círculo inferior
      setCircleRightSize(35); // Ocultar el círculo derecho
      setCircleLeftSize(35);
    }, 1000);

    const timer1 = setTimeout(() => {
      setCircleCenterSize(52.5); // Agrandar un 50%
      setCircleTopY(-30); // Mover hacia arriba 30px
      setCircleBottomY(30); // Mover hacia abajo 30px
      setCircleRightX(30); // Mover hacia la derecha 30px
      setCircleLeftX(-30); // Mover hacia la izquierda 30px
    }, 2000);

    const timer2 = setTimeout(() => {
      setCircleCenterSize(35); // Volver al tamaño original
      setCircleTopY(0); // Volver a la posición original
      setCircleBottomY(0); // Volver a la posición original
      setCircleRightX(0); // Volver a la posición original
      setCircleLeftX(0); // Volver a la posición original
    }, 3000);

    const timer3 = setTimeout(() => {
      setCircleRightX(30); // Mover hacia la derecha 30px
      setCircleLeftX(-30); // Mover hacia la izquierda 30px
    }, 4000);

    const timer4 = setTimeout(() => {
      setCircleCenterSize(35); // Volver al tamaño original
      setCircleTopY(0); // Volver a la posición original
      setCircleBottomY(0); // Volver a la posición original
      setCircleRightX(0); // Volver a la posición original
      setCircleLeftX(0); // Volver a la posición original
    }, 5000);

    const timer5 = setTimeout(() => {
      setCircleTopY(30); // Mover hacia la top 30px
      setCircleBottomY(-30); // Mover hacia la bot 30px
    }, 6000);

    const timer6 = setTimeout(() => {
      setCircleCenterSize(35); // Volver al tamaño original
      setCircleTopY(0); // Volver a la posición original
      setCircleBottomY(0); // Volver a la posición original
      setCircleRightX(0); // Volver a la posición original
      setCircleLeftX(0); // Volver a la posición original
    }, 7000);

    const timer7 = setTimeout(() => {
      setCircleRightX(30); // Mover hacia la derecha 30px
      setCircleLeftX(-30); // Mover hacia la izquierda 30px
    }, 8000);

    const timer8 = setTimeout(() => {
      setCircleCenterSize(35); // Volver al tamaño original
      setCircleTopY(0); // Volver a la posición original
      setCircleBottomY(0); // Volver a la posición original
      setCircleRightX(0); // Volver a la posición original
      setCircleLeftX(0); // Volver a la posición original
    }, 9000);

    const timer9 = setTimeout(() => {
      setCircleTopY(30); // Mover hacia la top 30px
      setCircleBottomY(-30); // Mover hacia la bot 30px
    }, 10000);

    const timer10 = setTimeout(() => {
      setCircleCenterSize(35); // Volver al tamaño original
      setCircleTopY(0); // Volver a la posición original
      setCircleBottomY(0); // Volver a la posición original
      setCircleRightX(0); // Volver a la posición original
      setCircleLeftX(0); // Volver a la posición original
    }, 11000);

    const timer11 = setTimeout(() => {
      setCircleCenterSize(0); // Volver al tamaño original
      setCircleTopSize(0); // Ocultar el círculo superior
      setCircleBottomSize(0); // Ocultar el círculo inferior
      setCircleRightSize(0); // Ocultar el círculo derecho
      setCircleLeftSize(0);
    }, 12000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
      clearTimeout(timer10);
      clearTimeout(timer11);
    };
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
              <mask id="circleMask">
                <rect width="100%" height="100%" fill="black" />
                <circle
                  className="circle circleCenter"
                  cx="100"
                  cy="100"
                  r={circleCenterSize}
                  fill="white"
                />
                <circle
                  className="circle circleTop"
                  cx="100"
                  cy={100 + circleTopY}
                  r={circleTopSize}
                  fill="white"
                />
                <circle
                  className="circle circle3"
                  cx="100"
                  cy={100 + circleBottomY}
                  r={circleBottomSize}
                  fill="white"
                />
                <circle
                  className="circle circle4"
                  cx={100 + circleRightX}
                  cy="100"
                  r={circleRightSize}
                  fill="white"
                />
                <circle
                  className="circle circle5"
                  cx={100 + circleLeftX}
                  cy="100"
                  r={circleLeftSize}
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
