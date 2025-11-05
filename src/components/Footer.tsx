import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Mission Section */}
          <section id="mission" className="space-y-4">
            <h3 className="font-handwritten text-3xl font-bold text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This project began as a critical observation: corporations hold immense power over our daily lives, yet meaningful accountability mechanisms for workers remain elusive. Traditional channels for raising workplace issues—HR, internal systems, and union routes—often feel like shouting into the void. Woolworst is an independent artistic initiative dedicated to closing this accountability gap. Our process involves collecting and consolidating verified experiences of systemic corporate misconduct into a data archive. We use this unique, anonymised data set as the material for public-facing art and research designed to expose patterns of harm. Our mandate is not to pursue individual legal claims, but to generate incontrovertible, systemic documentation that compels greater public disclosure and regulatory scrutiny of corporate behaviour.
            </p>
          </section>

          <Separator className="bg-border" />

          {/* Community Guidelines Section */}
          <section id="guidelines" className="space-y-4">
            <h3 className="font-handwritten text-3xl font-bold text-foreground">
              Community Guidelines
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These guidelines are essential for maintaining the integrity and legal defensibility of our archive. We are collecting factual, verifiable data to inform an artistic and research project. We require that all submissions focus on systemic patterns of misconduct within the workplace (e.g., wage theft, health and safety failures, policy abuse). Do not submit personal opinions, emotionally charged language, or speculative claims; we only require factual testimony, dates, and locations. Anonymity is your firewall, but data integrity is ours. We reserve the right to moderate, edit, or reject any submission that contains hate speech, defamation, or unsubstantiated claims that would compromise the integrity of our artistic and research mandate. By submitting, you grant this independent artistic initiative a perpetual, non-exclusive right to use your anonymised, non-personal data for public display, artistic production, and systemic analysis.
            </p>
          </section>

          <Separator className="bg-border" />

          {/* FAQ Section */}
          <section id="faq" className="space-y-4">
            <h3 className="font-handwritten text-3xl font-bold text-foreground">
              FAQ
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">
                  Is Woolworst a law firm or offering legal advice?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  No. We are an independent artistic accountability project. We do not provide legal counsel, representation, or assistance with individual claims. Submitting data to this project does not create an attorney-client relationship.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">
                  Will I receive compensation or be involved in a class action lawsuit?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  No. This project is not affiliated with any legal action, class action, or compensation scheme. The data you provide is used solely for the non-commercial purpose of artistic documentation and systemic research.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">
                  What is done with the data?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your anonymised testimony is cross-referenced with other data points to identify systemic patterns. These patterns are then used as the basis for public art installations, data visualisation, and research reports intended to increase public awareness and regulatory pressure.
                </p>
              </div>
            </div>
          </section>

          <Separator className="bg-border" />

          {/* Privacy Policy Section */}
          <section id="privacy" className="space-y-4">
            <h3 className="font-handwritten text-3xl font-bold text-foreground">
              Privacy Policy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We prioritise your anonymity. This project is focussed on collecting systemic patterns, not identifying individuals. We do not require, and strongly discourage you from submitting, any personally identifiable information (PII) such as full names, contact details, employee IDs, or specific addresses unless absolutely essential to verifying systemic patterns. All submitted data is immediately stripped of any identifying markers and stored securely as an anonymised research asset. We do not sell, rent, or distribute your raw data to any third parties. We only share aggregate, anonymised findings in public forums, artistic displays, and research publications.
            </p>
          </section>

          <Separator className="bg-border" />

          {/* Disclaimer Section */}
          <section id="disclaimer" className="space-y-4">
            <h3 className="font-handwritten text-3xl font-bold text-foreground">
              Disclaimer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Important Legal Disclaimer:</strong> Woolworst is a non-commercial, independent artistic and documentation project. It does not constitute legal advice, nor does submitting content create any form of attorney-client, contractual, or employment relationship between you and the project. All information provided is for the sole purpose of identifying, illustrating, and archiving systemic corporate patterns in the form of artistic research. We are not affiliated with, endorsed by, or sponsored by the corporation being documented or any of its subsidiaries. Your use of this site and your submission of data is strictly at your own risk and does not guarantee any outcome, legal or otherwise.
            </p>
          </section>

          <Separator className="bg-border" />

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-handwritten text-2xl font-bold text-foreground">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
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
                  <a href="#disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="font-handwritten text-2xl font-bold text-foreground">
              Contact Us
            </h3>
            <p className="text-muted-foreground">
              <a 
                href="mailto:woolworstt@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                woolworstt@gmail.com
              </a>
            </p>
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
