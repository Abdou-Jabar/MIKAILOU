import {useState} from "react";
import cn from "../lib/utils";
const skills = [
    //Frontend
    {name: "HTML/CSS", level: 80, category: "Frontend"},
    {name: "Javascript", level: 60, category: "Frontend"},
    {name: "React", level: 60, category: "Frontend"},
    {name: "TailwindCSS", level: 70, category: "Frontend"},
    

    //Backend
    {name: "PHP", level: 50, category: "Backend"},
    {name: "Laravel", level: 30, category: "Backend"},
    {name: "MySQL", level: 80, category: "Backend"},
    {name: "SQL Server", level: 60, category: "Backend"},

    //Outils
    {name: "Git/GitHub", level: 80, category: "Outils"},
    {name: "Docker", level: 50, category: "Outils"},
    {name: "VS Code", level: 90, category: "Outils"},
    {name: "Linux", level: 70, category: "Outils"},
]

const categories = ["Tout", "Frontend", "Backend", "Outils"]

const SkillsSection = () => {

    const[activeCategory, setActiveCategory] = useState("Tout")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "Tout" || skill.category === activeCategory
    ) 

    return <section id="competences" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Mes <span className="text-primary">Compétences</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground": "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>
                            {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card rounded-lg shadow-xs p-6 card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 origin-left rounded-full animate-[grow_1.5s_ease-out"
                                style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level} %
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default SkillsSection