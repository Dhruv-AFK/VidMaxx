import {
    Calendar,
    Wand2,
    Share2,
    Layers,
    Zap,
    BarChart3
} from "lucide-react";

const features = [
    {
        icon: Wand2,
        title: "AI Video Generation",
        description: "Turn text prompts into engaging short-form videos with AI-generated visuals, voiceovers, and subtitles."
    },
    {
        icon: Calendar,
        title: "Smart Auto-Scheduler",
        description: "Schedule your content months in advance. Our AI determines the best posting times for maximum engagement."
    },
    {
        icon: Share2,
        title: "Multi-Platform Publish",
        description: "Post to YouTube Shorts, Instagram Reels, and TikTok simultaneously with a single click."
    },
    {
        icon: Layers,
        title: "Brand Templates",
        description: "Maintain consistency with custom templates for fonts, colors, and styles that match your brand identity."
    },
    {
        icon: Zap,
        title: "Instant Captions",
        description: "Burn-in highly engaging, dynamic captions automatically. No manual transcribing needed."
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track performance across all platforms in one place to understand what's working and what's not."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-zinc-950">
            <div className="container px-4 mx-auto">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Everything you need to go viral
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Stop spending hours editing. Let VidMaxx handle the heavy lifting so you can focus on creativity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
