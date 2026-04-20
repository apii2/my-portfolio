import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "LinkedIn", icon: Linkedin },
  { href: "#", label: "X / Twitter", icon: Twitter },
  { href: "mailto:hello@alexcarter.dev", label: "Email", icon: Mail },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <p className="font-mono text-sm">
            <span className="text-primary">{"<"}</span>
            alex.carter
            <span className="text-primary">{" />"}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} — Built with React & Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
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
