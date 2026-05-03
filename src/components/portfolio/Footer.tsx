import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/apii2", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/apeksha-shrestha/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:apekshrestha22@gmail.com", label: "Email", icon: Mail },
  { href: "https://www.frontendmentor.io/profile/apii2", label: "Frontend Mentor", icon: () => <span className="text-sm font-mono">FM</span> },
];

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-20">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase mb-3">
          Contact
        </h2>
        <div className="mx-auto w-16 h-px bg-primary mb-10" />

        <p className="text-muted-foreground leading-relaxed mb-10">
          Have a question or want to work together? Reach out via email
          or any of the links below — I'll get back to you as soon as possible.
        </p>

        <a
          href="mailto:apekshrestha22@gmail.com"
          className="inline-block text-lg md:text-xl font-light tracking-wide text-primary hover:text-primary-glow transition-smooth mb-12"
        >
          apekshrestha22@gmail.com
        </a>

        <div className="flex items-center justify-center gap-3 mb-12">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
          © {new Date().getFullYear()} Apeksha Shrestha · Kathmandu
        </p>
      </div>
    </footer>
  );
};
