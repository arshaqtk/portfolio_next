'use client';

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const container = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    useGSAP(() => {
        gsap.from(".contact-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: container });

    return (
        <section ref={container} id="contact" className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="contact-item text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    Let&apos;s Build Something
                </h2>
                <p className="contact-item text-xl opacity-60">
                    Have an idea or a project? I&apos;m currently available for freelance work and new opportunities.
                </p>
            </div>

            <div className="contact-item bg-foreground/[0.03] border border-foreground/5 p-8 md:p-12 rounded-[40px] shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium opacity-60 ml-2">Full Name</label>
                            <input
                                required
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                                disabled={status === 'success'}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium opacity-60 ml-2">Email Address</label>
                            <input
                                required
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                                disabled={status === 'success'}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium opacity-60 ml-2">Message</label>
                        <textarea
                            required
                            id="message"
                            rows={5}
                            placeholder="Tell me about your project..."
                            className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors resize-none"
                            disabled={status === 'success'}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status !== 'idle'}
                        className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                            ? 'bg-green-500 text-white'
                            : 'bg-foreground text-background hover:scale-[1.02] active:scale-[0.98]'
                            }`}
                    >
                        {status === 'idle' && (
                            <>
                                Send Message
                                <Send size={20} />
                            </>
                        )}
                        {status === 'sending' && (
                            <div className="w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        )}
                        {status === 'success' && (
                            <>
                                Message Sent!
                                <CheckCircle2 size={24} />
                            </>
                        )}
                    </button>
                </form>
            </div>

            <div className="mt-16 flex flex-wrap justify-between items-center gap-8 px-4">
                <div className="contact-item">
                    <p className="text-sm font-medium opacity-50 uppercase tracking-widest mb-2">Email Me</p>
                    <a href="mailto:hello@arshaq.dev" className="text-xl font-bold hover:text-blue-500 transition-colors">
                        arshaqtk4@gmail.com
                    </a>
                </div>
                <div className="contact-item flex gap-12">
                    <div>
                        <p className="text-sm font-medium opacity-50 uppercase tracking-widest mb-2">Socials</p>
                        <div className="flex gap-6">
                            <a href="https://github.com/arshaqtk" className="font-bold hover:text-blue-500 transition-colors">GitHub</a>
                            <a href="muhammed-arshaq-tk-b96911269" className="font-bold hover:text-blue-500 transition-colors">LinkedIn</a>
                            <a href="#" className="font-bold hover:text-blue-500 transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
