'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

export function GithubGraph() {
    return (
        <section id="github" className="py-20 md:py-32">
            <div className="flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                        GITHUB <span className="text-blue-500">CONTRIBUTIONS</span>
                    </h2>
                    <p className="text-xl opacity-60 max-w-2xl mx-auto font-light leading-relaxed">
                        An overview of my open-source activity and coding consistency throughout the year.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl bg-zinc-900/50 border border-white/10 p-6 md:p-12 rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden relative group"
                >
                    {/* Decorative Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[80px] -z-10 group-hover:bg-blue-500/10 transition-colors duration-700" />

                    <div className="flex justify-center items-center overflow-x-auto custom-scrollbar">
                        <GitHubCalendar
                            username="arshaqtk"
                            blockSize={12}
                            blockMargin={4}
                            fontSize={14}
                            theme={{
                                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                            style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                            }}
                        />
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-white/5 pt-10">
                        <div className="text-center">
                            <p className="text-sm uppercase tracking-widest opacity-40 font-bold mb-1">Status</p>
                            <div className="flex items-center gap-2 justify-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-lg font-medium">Actively Coding</span>
                            </div>
                        </div>
                        {/* <div className="text-center">
                            <p className="text-sm uppercase tracking-widest opacity-40 font-bold mb-1">Best Streak</p>
                            <span className="text-lg font-medium">30+ Days</span>
                        </div> */}
                        <div className="text-center">
                            <p className="text-sm uppercase tracking-widest opacity-40 font-bold mb-1">Focus</p>
                            <span className="text-lg font-medium">Full-stack Dev</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </section>
    );
}
