import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary rounded-lg">
                        <Video className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        VidMaxx
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="#features" className="hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link href="#about" className="hover:text-white transition-colors">
                        About
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">
                        Log in
                    </Link>
                    <Button size="sm" className="rounded-full px-6">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
