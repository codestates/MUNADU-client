import { memo, useEffect, useRef } from "react";
import styled from "styled-components";

interface Idots {
  x: number;
  y: number;
  h: number;
  w: number;
  c: number;
  m: number;
}

function Canvas(props: any) {
  const canvasRef = useRef(null);
  const dots: Idots[] = [];
  let hue: number = 250;
  let w: number = 1000,
    h: number = 800;
  let maxHeight: number = h * 0.9,
    minHeight: number = h * 0.5;
  let maxWidth: number = 15,
    minWidth: number = 2;
  let hueDif: number = 50;
  let maxSpeed: number = 35,
    minSpeed: number = 6;

  const draw = (ctx: any): void => {
    //
    ctx.clearRect(0, 0, w, h);
    for (let i = 1; i < dots.length; i++) {
      const grd: any = ctx.createLinearGradient(
        dots[i].x,
        dots[i].y,
        dots[i].x + dots[i].w,
        dots[i].y + dots[i].h
      );
      grd.addColorStop(0.0, "hsla(" + dots[i].c + ",50%,50%,.0)");
      grd.addColorStop(0.2, "hsla(" + dots[i].c + 20 + ",50%,50%,.5)");
      grd.addColorStop(0.5, "hsla(" + dots[i].c + 50 + ",70%,60%,.8)");
      grd.addColorStop(0.8, "hsla(" + dots[i].c + 80 + ",50%,50%,.5)");
      grd.addColorStop(1, "hsla(" + (dots[i].c + 100) + ",50%,50%,.0)");
      ctx.shadowBlur = 10;
      ctx.shadowColor = "hsla(" + dots[i].c + ",50%,50%,1)";
      ctx.fillStyle = grd;
      ctx.fillRect(dots[i].x, dots[i].y, dots[i].w, dots[i].h);
      ctx.closePath();
      dots[i].x += dots[i].m / 100;
      if (dots[i].x > w + maxWidth) {
        dots.splice(i, 1);
        dots.push({
          x: 0,
          y: Math.random() * h,
          h: Math.random() * (maxHeight - minHeight) + minHeight,
          w: Math.random() * (maxWidth - minWidth) + minWidth,
          c: Math.random() * (hue + hueDif - (hue - hueDif)) + (hue - hueDif),
          m: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        });
      }
    }
    window.requestAnimationFrame(() => draw(ctx));
  };

  const pushDots = (): void => {
    for (let i = 0; i < 100; i++) {
      dots.push({
        x: Math.random() * w,
        y: (Math.random() * h) / 2,
        h: Math.random() * (maxHeight - minHeight) + minHeight,
        w: Math.random() * (maxWidth - minWidth) + minWidth,
        c: Math.random() * (hue + hueDif - (hue - hueDif)) + (hue - hueDif),
        m: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      });
    }
  };

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");
    context.globalCompositeOperation = "lighter";

    w = context.canvas.width = window.innerWidth;
    h = context.canvas.height = window.innerHeight;
    pushDots();
    if (context) {
      draw(context);
    }
  }, [draw]);

  const Background = styled.div`
    background: radial-gradient(
      ellipse at center,
      hsla(${hue}, 50%, 50%, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  `;

  const Overlay = styled.div`
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 1) 100%
    );

    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  `;

  const Can = styled.canvas`
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
  `;

  const Back = styled.div`
    background: radial-gradient(white 5%, rgb(0, 0, 0) 15%);
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
  `;
  return (
    <Back>
      <Background></Background>
      <Overlay></Overlay>
      <Can ref={canvasRef} {...props}></Can>
    </Back>
  );
}

export default memo(Canvas);
