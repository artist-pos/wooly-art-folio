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
            <CardContent className="p-0">
              <div className="w-full flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfaq5gvT6rZ3Ru7hMdr340AI77SL8UvgoWnHBakw7AUSsdVpQ/viewform?embedded=true" 
                  width="640" 
                  height="1170" 
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

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 md:p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Privacy Note:</strong> All submissions are reviewed and moderated for data integrity and relevance to the project's mandate. We respect your privacy: your personal information is treated as strictly confidential and will not be shared without your explicit written consent. You may, and are encouraged to, submit anonymously. All content must focus on factual, verifiable experiences that reveal systemic patterns rather than serving as personal attacks or emotional venting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
