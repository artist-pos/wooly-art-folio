import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import PosterGallery from "@/components/PosterGallery";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLinkedInPostOpen, setIsLinkedInPostOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [currentView, setCurrentView] = useState<string>("home");

  // Content for different views
  const renderContent = () => {
    switch (currentView) {
      case 'mission':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-4xl mx-auto space-y-8">
                <Button onClick={() => setCurrentView('home')} variant="outline" className="mb-4">
                  ← Back to Home
                </Button>
                <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Our Mission
                </h1>
                <Card className="bg-card/80 backdrop-blur-sm border-border">
                  <CardContent className="p-6 md:p-8 space-y-4 text-foreground">
                    <p className="text-base md:text-lg leading-relaxed">
                      This project began as a critical observation: corporations hold immense power over our daily lives, yet meaningful accountability mechanisms for workers remain elusive. Traditional channels for raising workplace issues—HR, internal systems, and union routes—often feel like shouting into the void. Woolworst is an independent artistic initiative dedicated to closing this accountability gap. Our process involves collecting and consolidating verified experiences of systemic corporate misconduct into a data archive. We use this unique, anonymised data set as the material for public-facing art and research designed to expose patterns of harm. Our mandate is not to pursue individual legal claims, but to generate incontrovertible, systemic documentation that compels greater public disclosure and regulatory scrutiny of corporate behaviour.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            <Footer setView={setCurrentView} />
          </div>
        );
      
      case 'guidelines':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-4xl mx-auto space-y-8">
                <Button onClick={() => setCurrentView('home')} variant="outline" className="mb-4">
                  ← Back to Home
                </Button>
                <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Community Guidelines
                </h1>
                <Card className="bg-card/80 backdrop-blur-sm border-border">
                  <CardContent className="p-6 md:p-8 space-y-4 text-foreground">
                    <p className="text-base md:text-lg leading-relaxed">
                      These guidelines are essential for maintaining the integrity and legal defensibility of our archive. We are collecting factual, verifiable data to inform an artistic and research project. We require that all submissions focus on systemic patterns of misconduct within the workplace (e.g., wage theft, health and safety failures, policy abuse). Do not submit personal opinions, emotionally charged language, or speculative claims; we only require factual testimony, dates, and locations. Anonymity is your firewall, but data integrity is ours. We reserve the right to moderate, edit, or reject any submission that contains hate speech, defamation, or unsubstantiated claims that would compromise the integrity of our artistic and research mandate. By submitting, you grant this independent artistic initiative a perpetual, non-exclusive right to use your anonymised, non-personal data for public display, artistic production, and systemic analysis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            <Footer setView={setCurrentView} />
          </div>
        );
      
      case 'faq':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-4xl mx-auto space-y-8">
                <Button onClick={() => setCurrentView('home')} variant="outline" className="mb-4">
                  ← Back to Home
                </Button>
                <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  FAQ
                </h1>
                <Card className="bg-card/80 backdrop-blur-sm border-border">
                  <CardContent className="p-6 md:p-8 space-y-6 text-foreground">
                    <div>
                      <h3 className="font-handwritten text-2xl font-bold text-primary mb-2">
                        Is Woolworst a law firm or offering legal advice?
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        No. We are an independent artistic accountability project. We do not provide legal counsel, representation, or assistance with individual claims. Submitting data to this project does not create an attorney-client relationship.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-handwritten text-2xl font-bold text-primary mb-2">
                        Will I receive compensation or be involved in a class action lawsuit?
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        No. This project is not affiliated with any legal action, class action, or compensation scheme. The data you provide is used solely for the non-commercial purpose of artistic documentation and systemic research.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-handwritten text-2xl font-bold text-primary mb-2">
                        What is done with the data?
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        Your anonymised testimony is cross-referenced with other data points to identify systemic patterns. These patterns are then used as the basis for public art installations, data visualisation, and research reports intended to increase public awareness and regulatory pressure.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            <Footer setView={setCurrentView} />
          </div>
        );
      
      case 'privacy':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-4xl mx-auto space-y-8">
                <Button onClick={() => setCurrentView('home')} variant="outline" className="mb-4">
                  ← Back to Home
                </Button>
                <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Privacy Policy
                </h1>
                <Card className="bg-card/80 backdrop-blur-sm border-border">
                  <CardContent className="p-6 md:p-8 space-y-4 text-foreground">
                    <p className="text-base md:text-lg leading-relaxed">
                      We prioritise your anonymity. This project is focussed on collecting systemic patterns, not identifying individuals. We do not require, and strongly discourage you from submitting, any personally identifiable information (PII) such as full names, contact details, employee IDs, or specific addresses unless absolutely essential to verifying systemic patterns. All submitted data is immediately stripped of any identifying markers and stored securely as an anonymised research asset. We do not sell, rent, or distribute your raw data to any third parties. We only share aggregate, anonymised findings in public forums, artistic displays, and research publications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            <Footer setView={setCurrentView} />
          </div>
        );
      
      case 'disclaimer':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-4xl mx-auto space-y-8">
                <Button onClick={() => setCurrentView('home')} variant="outline" className="mb-4">
                  ← Back to Home
                </Button>
                <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Disclaimer
                </h1>
                <Card className="bg-card/80 backdrop-blur-sm border-border">
                  <CardContent className="p-6 md:p-8 space-y-4 text-foreground">
                    <p className="text-base md:text-lg leading-relaxed">
                      <strong>Important Legal Disclaimer:</strong> Woolworst is a non-commercial, independent artistic and documentation project. It does not constitute legal advice, nor does submitting content create any form of attorney-client, contractual, or employment relationship between you and the project. All information provided is for the sole purpose of identifying, illustrating, and archiving systemic corporate patterns in the form of artistic research. We are not affiliated with, endorsed by, or sponsored by the corporation being documented or any of its subsidiaries. Your use of this site and your submission of data is strictly at your own risk and does not guarantee any outcome, legal or otherwise.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            <Footer setView={setCurrentView} />
          </div>
        );
      
      default:
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Woolworst: The Artistic Accountability Project
          </h1>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                <strong className="text-foreground">Disclaimer:</strong> This is an independent, non-commercial documentation initiative utilising artistic expression. The Woolworst Accountability Project is not affiliated with, endorsed by, or representing any current or former corporate or official legal entity. All content and visual assets represent individual perspectives and creative interpretations of alleged systemic issues. Submissions are moderated solely to verify relevance to the project's mandate.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Poster Gallery */}
      <PosterGallery />

      {/* LinkedIn Post Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Collapsible open={isLinkedInPostOpen} onOpenChange={setIsLinkedInPostOpen}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between text-lg font-handwritten py-6 border-2 hover:bg-primary/10"
              >
                <span>The Original LinkedIn Post</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isLinkedInPostOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-6 md:p-8 space-y-4 text-foreground">
                  <h2 className="font-handwritten text-3xl md:text-4xl font-bold text-primary">
                    The Truth Behind Woolworst
                  </h2>
                  
                  <div className="prose prose-invert prose-lg max-w-none space-y-4">
                    <p className="whitespace-pre-line">
                      {`"Taste the racism."

After nearly four years inside @Woolworths, yesterday was my final day. This is not a metaphor. It is a testament to the systematic rot within the stores.

It begins with the calculated breaking of bodies.

A colleague was threatened with firing for a back injury. Months later, I wrecked my own back moving tonnes of produce. The manager buried the report.

For years, I was the engine of a liquor department, building the best in Auckland. But I was locked into a 15-hour contract, consistently working 60-hour weeks.

This was not dedication; it was exploitation.

This is the system: the moment my hours approached the material threshold that would necessitate a full-time contract, they were systematically slashed. Mine, and others'. This is a deliberate, widespread strategy to deny workers permanent status and the security that comes with it.

The reward for my loyalty? This January, a slipped disc left me bedridden, unable to carry my child.

When I returned, I was branded "unreliable."

The culture is poisoned by protected misconduct and nepotism.

A senior Union Rep—a man who used racial slurs, bullied and harassed numerous staff (including teenage after-school workers), and engaged in recurring theft for over three years—was not fired. He was protected. The investigations were buried.

This is the standard: cruelty and corruption are tolerated if you're in the right circle.

Meanwhile, a system of cultural nepotism dictates everything.

Jobs are never publicly listed. When hours are freed up, they are reserved for the next family or clique hire. Promotions are whispered, not earned.

I was systematically sidelined from professional development: forbidden from corresponding with merchandisers, blocked from phone calls that were routine for others. This is a deliberate strategy to limit our growth and maintain a controllable in-group.

The gaslighting is the glue.

Health and Safety is a sick joke. Our safety documents were not just ignored—they were pre-forged. We were given the forms with the answers already filled in, a fraudulent checkbox exercise designed to protect the company, not the workers.

A manager would come to work drunk, disappear for Uber Eats runs, then scream at us to work faster.

After a "restructure," I was demoted and ordered to train the very people who replaced me. When I refused, I was screamed at in front of customers and suppliers: "You never taught anyone anyway."

They break you, then blame you for the pieces.

This is the Woolworths way.

Exploit. Injure. Gaslight. Discard.

My 'Woolworst' poster is my testimony—the visual proof of their poison. I have a platform. This is for the hundreds who don't. For everyone who has been told their pain isn't real and their voice doesn't count.`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Collapsible open={isStoryOpen} onOpenChange={setIsStoryOpen}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between text-lg font-handwritten py-6 border-2 hover:bg-primary/10"
              >
                <span>Read the Full Story</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isStoryOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-6 md:p-8 space-y-4 text-foreground">
                  <h2 className="font-handwritten text-3xl md:text-4xl font-bold text-primary">
                    The Beginning
                  </h2>
                  
                  <div className="prose prose-invert prose-lg max-w-none space-y-4">
                    <p>
                      This project began as a critical observation: corporations hold immense power over our daily lives, yet meaningful accountability mechanisms for workers remain elusive. Traditional channels for raising workplace issues—HR, internal systems, and union routes—often feel like shouting into the void. Woolworst is an independent artistic initiative dedicated to closing this accountability gap. Our process involves collecting and consolidating verified experiences of systemic corporate misconduct into a data archive. We use this unique, anonymised data set as the material for public-facing art and research designed to expose patterns of harm. Our mandate is not to pursue individual legal claims, but to generate incontrovertible, systemic documentation that compels greater public disclosure and regulatory scrutiny of corporate behaviour.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Submission Form Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-foreground">
              Contribute Your Factual Testimony
            </h2>
            <p className="text-muted-foreground text-lg">
              Your experience is the essential raw material for the next phase of visual documentation and public disclosure. Help us expand the archive of systemic patterns.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border overflow-hidden">
            <CardContent className="p-0 bg-white">
              <div className="w-full flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfaq5gvT6rZ3Ru7hMdr340AI77SL8UvgoWnHBakw7AUSsdVpQ/viewform?embedded=true" 
                  width="640" 
                  height="500" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="border-0"
                >
                  Loading…
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer setView={setCurrentView} />
    </div>
        );
    }
  };

  return renderContent();
};

export default Index;
