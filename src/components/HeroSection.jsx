import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
    return  <section id="home" className="relative z-0œ min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-5xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Salut, Je suis</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "} Mikailou</span>
                    <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2"> Abdou-Jabar</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui et eius, asperiores culpa vero labore accusantium. 
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projets" className="cosmic-button">
                        Voir mon travail
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroller</span>
            <ArrowDown className="w-5 h-5 text-primary" />
        </div>
    </section>
}

export default HeroSection