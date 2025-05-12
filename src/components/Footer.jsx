import { ArrowUp } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const Footer = () => {
    return <footer className="flex justify-between items-center py-4 px-6 bg-background/80 backdrop-blur-md text-muted-foreground">
        <p>
            &copy; {new Date().getFullYear()} MIKAILOU. Tous droits réservés.
        </p>
        <a href="#home" className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
            <ArrowUp />
        </a>
    </footer>
}
export default Footer