'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Software Developer",
        company: "Bridgeon Skillveristy",
        duration: "Present",
        location: "India",
        description: [
            "Building and maintaining full-stack web applications.",
            "Designing RESTful APIs with Node.js and Express.",
            "Implementing secure authentication systems.",
            "Structuring MongoDB schemas for scalability.",
            "Optimizing backend performance.",
            "Collaborating in professional development environments."
        ]
    }
];

export function Experience() {
    const container = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate the vertical line
        gsap.from(timelineRef.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
            },
            scaleY: 0,
            transformOrigin: "top",
            ease: "none",
        });

        // Animate cards
        gsap.from(".exp-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            x: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
        });

        // Animate glow effect
        gsap.to(".exp-glow", {
            opacity: 0.5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: container });

    return (
        <section ref={container} id="experience" className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight text-center">
                Professional Journey
            </h2>

            <div className="max-w-4xl mx-auto relative px-4">
                {/* Vertical Timeline Line */}
                <div
                    ref={timelineRef}
                    className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent md:-translate-x-1/2"
                />

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div
                            key={`${exp.company}-${index}`}
                            className="relative flex flex-col md:flex-row items-start md:items-center"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-blue-500 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />

                            <div className={`exp-card w-full md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                                <div className="group relative p-8 rounded-[32px] bg-foreground/[0.03] border border-foreground/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-blue-500/5">
                                    {/* Glow Accent */}
                                    <div className="exp-glow absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="flex items-center gap-3 text-blue-500 mb-4">
                                        <Briefcase size={20} />
                                        <span className="text-sm font-bold uppercase tracking-widest">{exp.company}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{exp.role}</h3>

                                    <div className="flex flex-wrap gap-4 mb-6 text-sm opacity-50 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {exp.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            {exp.location}
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
