import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
                <div className="absolute top-40 right-[20%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-medium text-zinc-300">
                        AI Video Generation 2.0 is here
                    </span>
                </div>

                {/* Headline */}
                <h1 className="max-w-4xl mx-auto mb-6 text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                    Generate & Schedule Viral Shorts in{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                        Seconds
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-zinc-400 leading-relaxed">
                    The all-in-one AI platform to create, edit, and auto-schedule content for YouTube Shorts, Instagram Reels, and TikTok. No video editing skills required.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-12 px-8 rounded-full text-base gap-2 shadow-lg shadow-primary/25">
                        <Sparkles className="w-4 h-4" />
                        Start Creating for Free
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base gap-2 border-white/10 hover:bg-white/5 hover:text-white">
                        <Play className="w-4 h-4" />
                        Watch Demo
                    </Button>
                </div>

                {/* Social Proof / Stats */}
                <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">1M+</div>
                        <div className="text-sm text-zinc-500">Videos Generated</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">10x</div>
                        <div className="text-sm text-zinc-500">Faster Production</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">50k+</div>
                        <div className="text-sm text-zinc-500">Creators</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                        <div className="text-sm text-zinc-500">User Rating</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
