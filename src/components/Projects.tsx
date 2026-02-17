'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Career Sync",
        description: "A service-based career platform that helps users navigate structured career growth through technology.",
        tech: ["MERN Stack", "TypeScript"],
        highlights: [
            "Authentication & role-based access",
            "Secure backend architecture",
            "REST API driven system",
            "MongoDB data modeling",
            "Scalable design"
        ],
        links: { live: "#", github: "#" },
        gradient: "from-blue-600 to-cyan-500",
    },
    {
        title: "Bitezzo",
        description: "A full-stack e-commerce platform built with clean architecture and scalable backend logic.",
        tech: ["MERN Stack", "JavaScript"],
        highlights: [
            "Product & cart management",
            "Authentication system",
            "API-driven backend",
            "Database integration",
            "MVC architecture"
        ],
        links: { live: "#", github: "#" },
        gradient: "from-orange-600 to-red-500",
    },
];

export function Projects() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
        });
    }, { scope: container });

    return (
        <section ref={container} id="projects">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Featured Projects
            </h2>
            <div className="grid gap-20 md:gap-32">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className={`project-card group grid lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
                    >
                        <div className={`lg:col-span-7 aspect-video rounded-[40px] bg-gradient-to-br ${project.gradient} overflow-hidden relative shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex gap-4 scale-90 group-hover:scale-100 transition-transform duration-500">
                                    <a href={project.links.live} className="p-5 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-colors">
                                        <ExternalLink size={28} className="text-white" />
                                    </a>
                                    <a href={project.links.github} className="p-5 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-colors">
                                        <Github size={28} className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="flex flex-wrap gap-3 mb-6">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider border border-blue-500/20"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-4xl font-bold mb-6 tracking-tight">{project.title}</h3>
                            <p className="text-lg opacity-70 mb-8 leading-relaxed font-light">
                                {project.description}
                            </p>

                            <ul className="grid grid-cols-1 gap-3 mb-10">
                                {project.highlights.map((highlight) => (
                                    <li key={highlight} className="flex items-center gap-3 text-sm opacity-60">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-8">
                                <a
                                    href={project.links.live}
                                    className="flex items-center gap-2 font-bold text-lg hover:text-blue-500 transition-all group/link"
                                >
                                    Live Preview
                                    <ExternalLink size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </a>
                                <a
                                    href={project.links.github}
                                    className="flex items-center gap-2 font-bold text-lg hover:text-blue-500 transition-all group/link"
                                >
                                    Source Code
                                    <Github size={20} className="group-hover/link:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
