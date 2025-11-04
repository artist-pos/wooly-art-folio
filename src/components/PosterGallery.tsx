import { Card, CardContent } from "@/components/ui/card";
import poster1 from "@/assets/poster-1.png";

const posters = [
  {
    id: 1,
    title: "The Truth Behind Woolworst",
    caption: "Documenting the alleged systemic failure across employee safety, contract integrity, racial equity, and the protection of misconduct.",
    imageAlt: "Poster documenting systemic failures at Woolworst",
    image: poster1
  },
  {
    id: 2,
    title: "The Fresh Food People... break their bodies",
    caption: "Tracking the human cost of understaffing; examining claims of buried injury reports and long-term physical compromise.",
    imageAlt: "Poster showing the human cost of understaffing"
  },
  {
    id: 3,
    title: "A Fresh Way to Save... violating contracts",
    caption: "Exposing the alleged corporate strategy of using low-hour contracts (e.g., 15.5 hours) to systematically deny full-time status and security.",
    imageAlt: "Poster exposing contract violations"
  },
  {
    id: 4,
    title: "That's Today's Fresh Food People... shielding abusers",
    caption: "Investigating the alleged culture of protected misconduct, nepotism, and the failure of HR to address internal harassment claims.",
    imageAlt: "Poster investigating protected misconduct"
  },
  {
    id: 5,
    title: "We Can Help With That... forging your documents",
    caption: "Detailing the most serious claims of alleged document fraud, including pre-filled health and safety forms designed to shield the company from liability.",
    imageAlt: "Poster detailing alleged document fraud"
  }
];

const PosterGallery = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-foreground">
            The Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual archive of corporate accountability through artistic expression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posters.map((poster) => (
            <Card 
              key={poster.id} 
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardContent className="p-0">
                {/* Poster Image */}
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  {poster.image ? (
                    <img 
                      src={poster.image} 
                      alt={poster.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center space-y-2">
                        <div className="text-6xl opacity-20">📋</div>
                        <p className="text-xs text-muted-foreground">
                          Poster {poster.id}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Caption */}
                <div className="p-4 md:p-6 space-y-2">
                  <h3 className="font-handwritten text-xl md:text-2xl font-bold text-foreground">
                    {poster.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {poster.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterGallery;
