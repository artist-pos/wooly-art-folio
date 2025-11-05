interface FooterProps {
  setView: (view: string) => void;
}

const Footer = ({ setView }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Three Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setView('home')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('mission')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Our Mission
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('guidelines')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Community Guidelines
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('faq')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setView('privacy')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setView('disclaimer')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Disclaimer
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                Connect
              </h3>
              <p className="text-muted-foreground">
                <a 
                  href="mailto:woolworstt@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>

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
