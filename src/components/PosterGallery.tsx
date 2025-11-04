import { Card, CardContent } from "@/components/ui/card";

const posters = [
  {
    id: 1,
    title: "The Wool Incident",
    caption: "When quality promises met reality - A documentation of product standards over time",
    imageAlt: "Artistic poster depicting wool quality comparison"
  },
  {
    id: 2,
    title: "Customer Service Chronicles",
    caption: "Mapping the journey from complaint to resolution - or lack thereof",
    imageAlt: "Infographic poster showing customer service response patterns"
  },
  {
    id: 3,
    title: "The Price Evolution",
    caption: "Tracking value propositions across seasons and market conditions",
    imageAlt: "Data visualization poster of pricing trends"
  },
  {
    id: 4,
    title: "Sustainability Claims",
    caption: "Examining environmental promises through the lens of actual practices",
    imageAlt: "Environmental impact comparison poster"
  },
  {
    id: 5,
    title: "The Community Speaks",
    caption: "Aggregated experiences from shoppers across the nation",
    imageAlt: "Collage poster featuring community testimonials"
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
                {/* Poster Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center space-y-2">
                      <div className="text-6xl opacity-20">📋</div>
                      <p className="text-xs text-muted-foreground">
                        Poster {poster.id}
                      </p>
                    </div>
                  </div>
                  {/* Image will go here - using placeholder for now */}
                  {/* <img 
                    src={poster.image} 
                    alt={poster.imageAlt}
                    className="w-full h-full object-cover"
                  /> */}
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
