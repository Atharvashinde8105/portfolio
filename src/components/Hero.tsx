import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || "0.1");
        const yPos = -scrollY * speed;
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Matrix-style background animation
  useEffect(() => {
    if (isMobile) return;
    const canvas = document.getElementById(
      "matrix-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "hsl(var(--primary))";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, [isMobile]);
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10"
      id="home"
    >
      {/* Matrix background */}
      <canvas
        id="matrix-canvas"
        className="absolute inset-0 opacity-20"
        style={{
          pointerEvents: "none",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>

      <div
        className="container px-4 sm:px-6 lg:px-8 relative z-10"
        ref={containerRef}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.1s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-sm text-primary font-medium">
                Available for opportunities
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight opacity-0 animate-fade-in mb-4"
              style={{
                animationDelay: "0.3s",
              }}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Atharva Shinde
              </span>
              <br />
              <span className="text-foreground"></span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4 opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.5s",
              }}
            >
              Cybersecurity Enthusiast & Graduate Student
            </p>

            <p
              style={{
                animationDelay: "0.7s",
              }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in max-w-2xl"
            >
              Bridging theory and practice to build a safer digital world.
              Passionate about threat detection, security analysis, and
              innovative cybersecurity solutions.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.9s",
              }}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 group"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start gap-4 mt-8 opacity-0 animate-fade-in"
              style={{
                animationDelay: "1.1s",
              }}
            >
              <a
                href="https://linkedin.com/in/atharva-shinde-6765a5350"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Atharvashinde8105"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ashinde12@stevens.edu"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/3 relative">
            <div
              className="relative z-10 opacity-0 animate-fade-in"
              style={{
                animationDelay: "1.3s",
              }}
            >
              {/* Profile picture placeholder with cybersecurity-themed design */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden">
                {/* Blurred Zoomed Background Photo */}
                <div className="absolute inset-0 z-10 scale-125 blur-md brightness-90">
                  <img
                    src="/profile.jpg"
                    alt="Blurred background"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Foreground Clear Photo */}
                <div className="absolute inset-4 z-20 rounded-full overflow-hidden border-2 border-background shadow-lg">
                  <img
                    src="/profile.jpg"
                    alt="Atharva Shinde"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Optional: Outer Gradient Ring (if you want to keep it) */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-pulse-slow z-0"
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
