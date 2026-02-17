'use client';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-foreground/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xl font-bold tracking-tighter">
                    ARSHAQ<span className="text-blue-500">.</span>
                </div>

                <p className="text-sm opacity-50 font-medium">
                    © {currentYear} Muhammed Arshaq TK • Made with Next.js + GSAP
                </p>

                <div className="flex gap-8">
                    <a href="#" className="text-xs font-semibold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Privacy</a>
                    <a href="#" className="text-xs font-semibold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Terms</a>
                </div>
            </div>
        </footer>
    );
}
