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
            Woolworst: Artistic Accountability Project
          </h1>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                <strong className="text-foreground">Disclaimer:</strong> This project is an independent artistic 
                expression and community documentation initiative. It is not affiliated with, endorsed by, or 
                representing any corporation or official entity. All content represents individual perspectives 
                and creative interpretations. Submissions are moderated for authenticity and relevance.
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
              Submit Your Story
            </h2>
            <p className="text-muted-foreground text-lg">
              Share your experience and contribute to the archive of corporate accountability
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Google Form Embed Placeholder */}
              <div className="aspect-[4/3] bg-muted/20 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Google Form will be embedded here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Replace with actual Google Form iframe code
                  </p>
                  {/* Example iframe structure - replace src with actual form URL */}
                  {/* <iframe 
                    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    className="min-h-[800px]"
                  >
                    Loading…
                  </iframe> */}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 md:p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Privacy Note:</strong> All submissions are reviewed before 
                publication. We respect your privacy and will not share personal information without explicit 
                consent. You may submit anonymously. All content must adhere to community guidelines and focus 
                on factual experiences rather than personal attacks.
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
