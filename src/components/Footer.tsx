import { Separator } from "@/components/ui/separator";

const Footer = () => {
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
                  <a href="#mission" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#guidelines" className="text-muted-foreground hover:text-primary transition-colors">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#submit" className="text-muted-foreground hover:text-primary transition-colors">
                    Submit a Story
                  </a>
                </li>
                <li>
                  <a href="#archive" className="text-muted-foreground hover:text-primary transition-colors">
                    Browse Archive
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
