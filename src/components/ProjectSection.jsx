import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Calculatrice",
        description: "Calculatrice en Java avec Swing, permettant de réaliser des opérations arithmétiques de base.",
        image: "/projects/calculatrice.png",
        tags: ["Java", "Swing"],
        githubUrl: "https://github.com/Abdou-Jabar/Calculator_Java_Project"
    },
    {
        id: 2,
        title: "Gestion de pharmacie",
        description: "Logiciel de gestion de pharmacie avec une interface utilisateur simple et intuitive.",
        image: "/projects/pharmacie.png",
        tags: ["Java", "Swing", "MySQL"],
        githubUrl: "https://github.com/Abdou-Jabar/Gestion_Vente_Pharmacie",
    },
    {
        id: 3,
        title: "Jeu de Quizz",
        description: "Jeu de quizz permettant de tester ses connaissances sur divers sujets.",
        image: "/projects/quizz.png",
        tags: ["TailwindCSS", "Javascript"],
        githubUrl: "https://github.com/Abdou-Jabar/Jeu_Quizz",
        demoUrl: "https://jeu-quizz.onrender.com/"
    }
]

const ProjectSection = () => {
    return (
        <section id="projets" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                    {""}
                    Mes<span className="text-primary">Projets</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Voici quelques projets sur lesquels j'ai travaillé récemment. N'hésitez pas à les consulter sur mon GitHub.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) =>(
                                        <span key={key} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="font-semibold mb-1 text-xl">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/Abdou-Jabar" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Voir mon Github <ArrowRight size={16}/> 
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;