'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image"
import { Download } from "lucide-react";
export function About() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        gsap.from(".about-title", {
            scrollTrigger: {
                trigger: ".about-title",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.2,
        });
    }, { scope: container });

    return (
        <section ref={container} id="about" className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="order-2 md:order-1">
                <h2 className="about-title text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    About Me
                </h2>
                <p ref={textRef} className="text-xl md:text-2xl opacity-80 leading-relaxed font-light">
                    I&apos;m a Software Developer at <span className="text-blue-500 font-medium">Bridgeon Skillveristy</span> with a strong focus on the MERN stack.
                    Based in India, I specialize in building robust applications using JavaScript and TypeScript.
                    I love turning complex requirements into smooth, performant digital products that provide
                    real value to users.
                </p>
                <div className="mt-10 about-title">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
                    >
                        <Download size={20} />
                        Download CV
                    </a>
                </div>
            </div>

            <div className="order-1 md:order-2 relative group aspect-square max-w-[500px] mx-auto w-full">
                {/* Image Container with animated border/glow */}
                <div className="absolute inset-0 rounded-full border border-foreground/5 group-hover:border-blue-500/30 transition-colors duration-500" />

                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-background shadow-2xl">
                    <Image
                        src="/images/profile/hero.jpeg"
                        alt="Muhammed Arshaq TK"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority
                    />
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/50 to-transparent flex justify-center items-end rounded-b-2xl">
                    <p className="text-white font-medium text-center">Curiosity Driven Developer</p>
                </div>
            </div>
        </section>
    );
}
