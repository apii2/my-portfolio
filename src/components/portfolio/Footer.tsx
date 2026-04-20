import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  { href: "https://github.com/apii2", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/apeksha-shrestha/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:apekshrestha22@gmail.com", label: "Email", icon: Mail },
  { href: "tel:+9779849451044", label: "Phone", icon: Phone },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <p className="font-mono text-sm">
            <span className="text-primary">{"<"}</span>
            apeksha.shrestha
            <span className="text-primary">{" />"}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Apeksha Shrestha — Built with React & Tailwind.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Gopikrishna Nagar, Chabahil, Kathmandu
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
