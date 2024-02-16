import styled, { keyframes } from "styled-components";
import Vector from "../../../icons/landing/Vector";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Bounce = keyframes`
from { transform: translateX(-50%) scale(0.5);}
to {transform: translateX(-50%) scale(1);}
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;
`;

function DrawSvg() {
  const ref = useRef(null);
  const ballRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0] as SVGPathElement;
    const length = svg.getTotalLength();

    console.log(length);

    svg.style.strokeDasharray = `${length}`;
    svg.style.strokeDashoffset = `${length}`;

    console.log(length);

    let t1: gsap.core.Timeline;
    t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          console.log(self);
          const draw = length * self.progress;
          svg.style.strokeDashoffset = `${length - draw}`;
        },
        onToggle: (self) => {
          if (self.isActive)
            if (ballRef.current) {
              ballRef.current.style.display = "none";
            } else {
              if (ballRef.current) {
                (ballRef.current as HTMLDivElement).style.display =
                  "inline-block";
              }
            }
        },
      },
    });
    return () => {
      if (t1) t1.kill();
    };
  });

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
}

export default DrawSvg;