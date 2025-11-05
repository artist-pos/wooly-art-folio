import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import PosterGallery from "@/components/PosterGallery";
import Footer from "@/components/Footer";

const Index = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground leading-tight">
            The Woolworst Artistic Accountability Project
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
          <Collapsible open={isStoryOpen} onOpenChange={setIsStoryOpen}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between text-lg font-handwritten py-6 border-2 hover:bg-primary/10"
              >
                <span>The Original LinkedIn Post</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isStoryOpen ? 'rotate-180' : ''}`} />
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
                      This project began as a simple observation: corporations hold immense power over our 
                      daily lives, yet meaningful accountability mechanisms remain elusive. Traditional channels 
                      for consumer feedback often feel like shouting into the void.  
                    </p>
                    
                    <p>
                      The Woolworst initiative transforms frustration into creative documentation. Rather than 
                      silent acceptance or angry tweets that disappear into the digital ether, this platform 
                      provides a lasting archive of experiences, patterns, and collective observations.
                    </p>
                    
                    <p>
                      Each poster, each submission, represents a moment where someone decided their experience 
                      mattered enough to document. Together, these individual moments create a mosaic of 
                      corporate behavior that transcends any single complaint.
                    </p>
                    
                    <p>
                      This is not about cancel culture or vindictive attacks. It's about visibility, memory, 
                      and the power of artistic expression to hold a mirror to corporate practices. When 
                      companies know their actions become part of a permanent, public record—not buried in 
                      customer service logs—behavior changes.
                    </p>
                    
                    <p>
                      We believe in the transformative power of creative accountability. Every submission helps 
                      build a more transparent relationship between corporations and the communities they serve.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

          <section className="container mx-auto px-4 py-12 md:py-16 bg-background/50"> {/* Added light bg for contrast */}
              <div className="max-w-3xl mx-auto space-y-6">
                  <div className="text-center space-y-4">
                      <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-foreground">
                          Contribute Your Factual Testimony
                      </h2>
                      <p className="text-muted-foreground text-lg">
                          Your experience is the essential raw material for the next phase of visual documentation and public disclosure. Help us expand the archive of systemic patterns.
                      </p>
                  </div>
                  <Card className="bg-white shadow-xl border-0 overflow-hidden rounded-lg"> {/* Solid white bg, stronger shadow, no border for cleaner look */}
                      <CardContent className="p-0">
                          <div className="w-full flex justify-center p-4 md:p-6"> {/* Added padding around iframe */}
                              <iframe
                                  src="https://docs.google.com/forms/d/e/1FAIpQLSfaq5gvT6rZ3Ru7hMdr340AI77SL8UvgoWnHBakw7AUSsdVpQ/viewform?embedded=true"
                                  width="100%" // Responsive width
                                  height="600" // Slightly taller for better fit
                                  frameBorder="0"
                                  marginHeight={0}
                                  marginWidth={0}
                                  className="border-0 rounded" // Subtle rounding
                                  style={{ minWidth: '320px', maxWidth: '640px' }} // Ensures mobile-friendly sizing
                              >
                  Loading…
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
