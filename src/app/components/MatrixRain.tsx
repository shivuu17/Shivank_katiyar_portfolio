import { useEffect, useRef } from 'react';

type ThemeMode = 'dark' | 'light';

type MatrixRainProps = {
  theme: ThemeMode;
};

export function MatrixRain({ theme }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pixelRatio = isSmallScreen ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

    const resizeCanvas = () => {
      canvas.width = Math.floor(window.innerWidth * pixelRatio);
      canvas.height = Math.floor(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resizeCanvas();

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme === 'dark' ? '#0F0' : '#0f766e';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = theme === 'dark'
          ? i % 3 === 0
            ? '#0F0'
            : i % 3 === 1
              ? '#0CF'
              : '#F0F'
          : i % 3 === 0
            ? '#0f766e'
            : i % 3 === 1
              ? '#2563eb'
              : '#7c3aed';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    if (isReducedMotion) return;

    const interval = window.setInterval(draw, isSmallScreen ? 80 : 50);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={theme === 'dark' ? 'fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0' : 'fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0'}
    />
  );
}
