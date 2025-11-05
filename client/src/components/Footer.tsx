import { Separator } from "@/components/ui/separator";
import React from 'react';

interface FooterProps {
  setView: (view: string) => void;
}

const Footer = ({ setView }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setView('home')}
                    className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                    aria-label="Go to Home"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('mission')}
                    className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                    aria-label="Go to Our Mission"
                  >
                    Our Mission
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('guidelines')}
                    className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                    aria-label="Go to Community Guidelines"
                  >
                    Community Guidelines
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('faq')}
                    className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                    aria-label="Go to FAQ"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setView('privacy')}
                    className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                    aria-label="Go to Privacy Policy"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('disclaimer')}
                    className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                    aria-label="Go to Disclaimer"
                  >
                    Disclaimer
                  </button>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:woolworstt@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email us at woolworstt@gmail.com"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-border" />
          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Woolworst. An independent artistic accountability initiative.
            </p>
            <p className="text-xs text-muted-foreground">
              Not affiliated with any corporation. All content represents individual perspectives.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
