"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
};

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let particles: Particle[] = [];
    let lastFrame = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const isMobile = () => window.innerWidth < 768;

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: 0.5 + Math.random() * 1.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.018,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        isMobile() ? 65 : 145,
        Math.floor((width * height) / (isMobile() ? 11000 : 8500)),
      );

      particles = Array.from({ length: count }, createParticle);
    };

    const drawBackgroundGlow = () => {
      const glow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.75,
      );

      glow.addColorStop(0, "rgba(12, 35, 75, 0.12)");
      glow.addColorStop(0.5, "rgba(8, 18, 42, 0.06)");
      glow.addColorStop(1, "rgba(4, 7, 18, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawParticles = (time: number) => {
      const connectionDistance = isMobile() ? 105 : 145;

      particles.forEach((p, index) => {
        p.x += p.vx * (0.7 + p.z);
        p.y += p.vy * (0.7 + p.z);
        p.pulse += p.pulseSpeed;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const pulse = 0.65 + Math.sin(p.pulse) * 0.35;
        const radius = p.radius * (0.8 + p.z * 0.6);

        // Mouse interaction
        if (mouse.active && !isMobile()) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && distance > 0) {
            const force = (1 - distance / 150) * 0.012;
            p.vx -= (dx / distance) * force;
            p.vy -= (dy / distance) * force;
          }
        }

        // Keep movement controlled
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 130, 255, ${0.025 * pulse})`;
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);

        const color =
          p.z > 0.7
            ? `rgba(103, 232, 249, ${0.55 * pulse})`
            : `rgba(96, 165, 250, ${0.4 * pulse})`;

        ctx.fillStyle = color;
        ctx.fill();

        // Connections
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.16 * (0.5 + p.z * 0.5);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(65, 145, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Cursor connection field
        if (mouse.active && !isMobile()) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(103, 232, 249, ${
              (1 - distance / 180) * 0.2
            })`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      // Soft moving signal points
      if (!reducedMotion) {
        const signal = particles[Math.floor((time / 1800) % particles.length)];

        if (signal) {
          ctx.beginPath();
          ctx.arc(signal.x, signal.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(103, 232, 249, 0.8)";
          ctx.shadowBlur = 16;
          ctx.shadowColor = "#38bdf8";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    };

    const draw = (time: number) => {
      if (time - lastFrame < 30) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      lastFrame = time;

      ctx.clearRect(0, 0, width, height);
      drawBackgroundGlow();
      drawParticles(time);

      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();

    if (reducedMotion) {
      draw(0);
    } else {
      animationId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="neural-background" />
  );
}
