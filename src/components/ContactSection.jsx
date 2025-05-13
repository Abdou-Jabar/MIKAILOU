import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import cn from "../lib/utils";

const ContactSection = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                Entrer en <span className="text-primary">Contact</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Mes coordonnées</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary "/>
                            </div>
                            <div className="">
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:mikailou00@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    mikailou00@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="w-6 h-6 text-primary "/>
                            </div>
                            <div>
                                <h4 className="font-medium ">Phone</h4>
                                <a href="tel:+22897242015" className="text-muted-foreground hover:text-primary transition-colors">
                                    +228 97 24 20 15
                                </a>
                            </div>
                        </div>                        
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary "/>
                            </div>
                            <div>
                                <h4 className="font-medium ">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Lomé, Togo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Me contacter</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/abdou-jabar-mikailou/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="hover:scale-110 transition hover:text-primary duration-300" size={25}/>
                            </a>
                            <a href="https://github.com/Abdou-Jabar" target="_blank" rel="noopener noreferrer">
                                <Github className="hover:scale-110 transition hover:text-primary duration-300" size={25}/>
                            </a>
                            <a href="https://wa.me/+22897242015" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="hover:scale-110 hover:text-primary transition duration-300" size={25}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2x font-semibold mb-6">M'envoyer un message</h3>
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                        <div>
                            <input type="hidden" name="access_key" value="9e7fa19b-238d-4996-845a-dbab309afb68"/>
                            <label htmlFor="name">Votre nom</label>
                            <input type="text" name="nom" id="nom" required placeholder="John Doe..." className="w-full px-4 py-3  rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                        </div>
                        <div>
                            <label htmlFor="email">Votre email</label>
                            <input type="email" name="email" id="email" required placeholder="johndoe@gmail.com" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                        </div>
                        <div>
                            <label htmlFor="name">Votre message</label>
                            <textarea name="message" id="message" required placeholder="Bonjour, j'aimerais m'entretenir avec vous..." className="w-full px-4 py-3 mt-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"/>
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Envoyer le message
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default ContactSection;