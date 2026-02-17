'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import {
    Layout,
    Terminal,
    Server,
    ChevronRight,
    Database,
    Cloud,
    Globe,
    Cpu,
    GitBranch,
    Zap
} from "lucide-react";

const skillGroups = [
    {
        category: "Languages",
        icon: Terminal,
        skills: ["JavaScript", "TypeScript"]
    },
    {
        category: "Frontend",
        icon: Layout,
        skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST API Architecture", "Authentication & Authorization", "MVC & MMVC Architecture"]
    },
    {
        category: "Database",
        icon: Database,
        skills: ["MongoDB", "Mongoose"]
    },
    {
        category: "Tools & Extras",
        icon: Cloud,
        skills: ["Git & GitHub", "Postman", "Docker (Basics)", "AWS EC2 & S3 (Basics)", "Socket.io", "Linux / Ubuntu"]
    }
];

export function Skills() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        gsap.from(".skill-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all"
        });
    }, { scope: container });

    return (
        <section ref={container} id="skills">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-center">
                    Technical Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skillGroups.map((group) => (
                        <div
                            key={group.category}
                            className="skill-card group p-8 rounded-[2rem] bg-foreground/[0.03] border border-foreground/5 relative overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:bg-foreground/[0.05]"
                        >
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                    <group.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight">{group.category}</h3>
                            </div>

                            <ul className="space-y-3 relative z-10">
                                {group.skills.map((skill) => (
                                    <li key={skill} className="flex items-start gap-2 text-base opacity-80 group-hover:opacity-100 transition-opacity">
                                        <ChevronRight size={18} className="text-blue-500 mt-0.5 shrink-0" />
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* subtle decorative gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
