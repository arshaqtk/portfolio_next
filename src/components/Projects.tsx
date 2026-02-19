'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
        links: { live: "https://career-sync-ten.vercel.app", github: "https://github.com/arshaqtk/Career-sync-backend" },
        gradient: "from-blue-600 to-cyan-500",
        image: "/images/project/careerSync.png"
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
        links: { live: "https://bitezzo-three.vercel.app", github: "https://github.com/arshaqtk/Bitezzo_Backend" },
        gradient: "from-orange-600 to-red-500",
        image: "/images/project/bitezzo.png"
    }
];

export function Projects() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".project-card-inner", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
        });
    }, { scope: container });

    return (
        <section ref={container} id="projects" className="py-20 md:py-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                        SELECTED <br /><span className="text-blue-500">PROJECTS</span>
                    </h2>
                    <p className="text-xl opacity-60 max-w-md font-light">
                        A collection of digital experiences that combine innovative design with robust technology.
                    </p>
                </div>
                <div className="hidden md:block pb-2">
                    <div className="w-24 h-[1px] bg-foreground/20 mb-4" />
                    <span className="text-sm font-bold tracking-widest uppercase opacity-40">Scroll to explore</span>
                </div>
            </div>

            <div className="flex flex-col gap-10 md:gap-16">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className="project-card sticky group"
                        style={{
                            top: `${80 + index * 32}px`,
                            zIndex: index + 1
                        }}
                    >
                        <div className="project-card-inner bg-zinc-900 border border-white/10 p-6 md:p-12 xl:p-16 rounded-[40px] md:rounded-[60px] grid lg:grid-cols-12 gap-8 lg:gap-16 items-center shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative group-hover:border-blue-500/20 transition-colors duration-500">
                            {/* Gradient Background Decoration */}
                            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-700`} />

                            <div className={`lg:col-span-7 aspect-[16/10] md:aspect-video rounded-3xl md:rounded-[40px] bg-zinc-800 overflow-hidden relative shadow-2xl group-hover:scale-[1.01] transition-transform duration-700 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex gap-4 scale-90 group-hover:scale-100 transition-transform duration-500">
                                        <a href={project.links.live} className="p-5 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-colors border border-white/20 shadow-xl">
                                            <ExternalLink size={28} className="text-white" />
                                        </a>
                                        <a href={project.links.github} className="p-5 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/30 transition-colors border border-white/20 shadow-xl">
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
                                            className="px-4 py-1.5 rounded-full bg-white/5 text-white/80 text-xs font-bold uppercase tracking-wider border border-white/10"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight flex items-center gap-3">
                                    {project.title}
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 text-blue-500" size={32} />
                                </h3>
                                <p className="text-lg md:text-xl opacity-60 mb-8 leading-relaxed font-light">
                                    {project.description}
                                </p>

                                <ul className="grid grid-cols-1 gap-4 mb-10">
                                    {project.highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-start gap-4 text-sm md:text-base opacity-50">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-8 border-t border-white/5 pt-8">
                                    <a
                                        href={project.links.live}
                                        className="flex items-center gap-2 font-bold text-lg hover:text-blue-500 transition-all group/link"
                                    >
                                        Live App
                                        <ExternalLink size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>
                                    <a
                                        href={project.links.github}
                                        className="flex items-center gap-2 font-bold text-lg hover:text-blue-500 transition-all group/link"
                                    >
                                        Repo
                                        <Github size={20} className="group-hover/link:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Spacing to ensure the last card can be scrolled past */}
            <div className="h-[20vh]" />
        </section>
    );
}
