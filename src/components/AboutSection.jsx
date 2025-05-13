import { Briefcase, Code, User, User2 } from "lucide-react";
import React from "react";

const AboutSection = () => {
    return (
        <section id="apropos" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold">
                    A propos de <span className="text-primary"> MOI</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Développeur web et mobile passioné</h3>
                        <p className="text-muted-foreground">
                            Actuellement etudiant en Génie Logiciel, je me spécialise dans la création d'applications Web réactives, accessibles et performantes utilisant des technologies modernes.
                        </p>
                        <p className="text-muted-foreground">
                            Je suis passionné par la création de solutions élégantes à des problèmes complexes et j'apprends constamment de nouvelles technologies et techniques pour rester à la pointe du paysage Web en constante évolution.                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {""}
                                Me contacter
                            </a>
                            <a target="_blank" href="/src/files/CV.pdf" className="px-6 py-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300 border border-primary">
                                {" "}
                                Voir mon CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Developpement web et mobile</h4>
                                    <p className="text-muted-foreground">Création d'applications mobile de sites Web responsives avec des frameworks modernes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Designer</h4>
                                    <p className="text-muted-foreground">Concevoir des interfaces utilisateur intuitives et des expériences utilisateur fluides.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">  
                                    <h4 className="font-semibold text-lg">Gestion</h4>
                                    <p className="text-muted-foreground">Diriger des projets de la conception à la réalisation avec des méthodologies agiles.n</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default AboutSection