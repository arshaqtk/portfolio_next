'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Download } from "lucide-react";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Split name into letters for staggered animation
        const letters = nameRef.current?.innerText.split("") || [];
        if (nameRef.current) {
            nameRef.current.innerHTML = letters
                .map((l) => `<span class="inline-block">${l === " " ? "&nbsp;" : l}</span>`)
                .join("");
        }

        tl.from(".hero-reveal", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
        })
            .from(
                "h1 span",
                {
                    y: 50,
                    opacity: 0,
                    rotateX: -90,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                },
                "-=0.5"
            )
            .from(
                ".hero-image",
                {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1.2,
                    ease: "expo.out",
                },
                "-=1"
            );
    }, { scope: container });

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={container}
            id="top"
            className="min-h-screen flex flex-col justify-center items-center text-center relative pt-20"
        >
            <div className="z-10 max-w-4xl mx-auto">
                <h2 className="hero-reveal text-blue-500 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
                    Full-stack Developer
                </h2>
                <h1
                    ref={nameRef}
                    className="text-7xl md:text-9xl font-black tracking-tighter mb-6 uppercase leading-[0.8]"
                >
                    Arshaq
                </h1>
                <p className="hero-reveal text-xl md:text-2xl opacity-70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Software Developer at <span className="text-blue-500 font-medium">Bridgeon Skillveristy</span> specializing in MERN Stack.
                    <span className="block mt-2 text-lg md:text-xl italic">
                        Creating modern, scalable web applications with JavaScript & TypeScript.
                    </span>
                </p>

                <div className="hero-reveal flex flex-wrap justify-center gap-6">
                    <button
                        onClick={scrollToProjects}
                        className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                    >
                        View Projects
                    </button>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-4 border border-foreground/20 rounded-full font-semibold hover:bg-foreground/5 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Decorative blurred shape for premium feel */}
            <div className="hero-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
