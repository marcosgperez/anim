import "./App.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function App() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const triangles = useAnimation();
  useEffect(() => {
    const sequence1 = () => {
      controls1.start({
        scale: [
          0, 200, 200, 200, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
          50, 0, 0, 0,
        ],
      });
      controls2.start({
        scaleX: [
          0, 0, 0, 0, 0, 120, 120, 0, 0, 0, 0, 160, 160, 0, 0, 0, 0, 160, 160,
          0, 0, 0,
        ],
        scaleY: [
          0, 0, 0, 0, 0, 140, 140, 0, 0, 0, 0, 160, 160, 0, 0, 0, 0, 160, 160,
          0, 0, 0,
        ],
        y: [
          0, 0, 0, 0, 0, -40, -40, 0, 0, 0, 0, -60, -60, 0, 0, 0, 0, -60, -60,
          0, 0, 0,
        ],
      });
      controls3.start({
        scaleX: [
          0, 0, 0, 0, 0, 120, 120, 0, 0, 0, 0, 160, 160, 0, 0, 0, 0, 160, 160,
          0, 0, 0,
        ],
        scaleY: [
          0, 0, 0, 0, 0, 140, 140, 0, 0, 0, 0, 160, 160, 0, 0, 0, 0, 160, 160,
          0, 0, 0,
        ],
        y: [
          0, 0, 0, 0, 0, 40, 40, 0, 0, 0, 0, 60, 60, 0, 0, 0, 0, 60, 60, 0, 0,
          0,
        ],
      });
      controls4.start({
        scaleY: [
          0, 0, 0, 0, 0, 120, 120, 0, 160, 160, 0, 0, 0, 0, 160, 160, 0, 0, 0,
          0, 0, 0,
        ],
        scaleX: [
          0, 0, 0, 0, 0, 140, 140, 0, 160, 160, 0, 0, 0, 0, 160, 160, 0, 0, 0,
          0, 0, 0,
        ],
        x: [
          0, 0, 0, 0, 0, 40, 40, 0, 60, 60, 0, 0, 0, 0, 60, 60, 0, 0, 0, 0, 0,
          0,
        ],
      });
      controls5.start({
        scaleY: [
          0, 0, 0, 0, 0, 120, 120, 0, 160, 160, 0, 0, 0, 0, 160, 160, 0, 0, 0,
          0, 0, 0,
        ],
        scaleX: [
          0, 0, 0, 0, 0, 140, 140, 0, 160, 160, 0, 0, 0, 0, 160, 160, 0, 0, 0,
          0, 0, 0,
        ],
        x: [
          0, 0, 0, 0, 0, -40, -40, 0, -60, -60, 0, 0, 0, 0, -60, -60, 0, 0, 0,
          0, 0, 0,
        ],
      });
    };
    sequence1();
    triangles.start({
      scaleX: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
      ],
      scaleY: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
      ],
    });
    // triangles.start({
    //   scaleX: [
    //      0, 2, 2,
    //   ],
    //   scaleY: [
    //     0, 2, 2,
    //   ],
    // });
  }, [controls1]);

  return (
    <>
      <motion.ul className="App">
        <motion.li
          className="circle first"
          animate={controls1}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <svg
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" />
          </svg>
        </motion.li>
        <motion.li
          className="circle circle-top"
          animate={controls2}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <svg
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" />
          </svg>
        </motion.li>
        <motion.li
          className="circle circle-bottom"
          animate={controls3}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <svg
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" />
          </svg>
        </motion.li>
        <motion.li
          className="circle circle-right"
          animate={controls4}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <svg
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" />
          </svg>
        </motion.li>
        <motion.li
          className="circle circle-left"
          animate={controls5}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <svg
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" />
          </svg>
        </motion.li>
        <motion.div
          className="triangle-dad"
          animate={triangles}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <motion.div className="triangle-wraper">
            <motion.div
              className="triangle triangle-left"
              animate={triangles}
              transition={{
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            <motion.div
              className="triangle triangle-right"
              animate={triangles}
              transition={{
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.ul>
    </>
  );
}

export default App;
