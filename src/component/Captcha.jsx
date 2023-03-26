import React, { useRef, useEffect } from 'react';
// import { generate } from '../utils/generateCaptcha';
import { randomHexColor } from '../utils/commonFunctions';
function TextToImage({ captcha, fontSize=18, fontColor="#000" }) {
    

    const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
const backgroundColor = randomHexColor();
    // Draw the background color
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);

    // Draw the text
    context.fillStyle = fontColor;
    context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    // const text = generate();
    const letterSpacing = width / (captcha.length + 1);
    for (let i = 0; i < captcha.length; i++) {
      const x = letterSpacing * (i + 1) + Math.random() * letterSpacing - letterSpacing / 2;
      const y = height / 2 + Math.random() * fontSize - fontSize / 2;
      context.fillStyle = fontColor;
      context.font = `${fontSize}px Arial`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(captcha[i], x, y);
    }

    // Add strikethroughs 
    for (let i = 0; i < captcha.length; i++) {
      if (Math.random() < 0.5) {
        const x1 = letterSpacing * (i + 1) - fontSize / 2;
        const x2 = letterSpacing * (i + 1) + fontSize / 2;
        const y = height / 2 + Math.random() * fontSize - fontSize / 2;
        context.beginPath();
        context.moveTo(x1, y);
        context.lineTo(x2, y);
        context.strokeStyle = fontColor;
        context.stroke();
      }
    }
  }, [captcha, fontColor, fontSize]);

  return <canvas ref={canvasRef} width={200} height={50} />;
}

export default TextToImage;