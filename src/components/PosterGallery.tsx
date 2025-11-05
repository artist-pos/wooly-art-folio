import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import poster1 from "@/assets/poster-1.png";
import poster2 from "@/assets/poster-2.png";
import poster3 from "@/assets/poster-3.png";
import poster4 from "@/assets/poster-4.png";
import poster5 from "@/assets/poster-5.png";

const posters = [
    {
        id: 1,
        title: "The Truth Behind Woolworst",
        caption: "Documenting the alleged systemic failure across employee safety, contract integrity, racial equity, and the protection of misconduct. <strong>3.1k+ LinkedIn impressions in 3 weeks</strong>.",
        imageAlt: "Poster documenting systemic failures at Woolworst",
        image: poster1
    },
    {
        id: 2,
        title: "The Fresh Food People... break their bodies",
        caption: "Tracking the human cost of understaffing; examining claims of buried injury reports and long-term physical compromise.",
        imageAlt: "Poster showing the human cost of understaffing",
        image: poster2
    },
    {
        id: 3,
        title: "A Fresh Way to Save... violating contracts",
        caption: "Exposing the alleged corporate strategy of using low-hour contracts to systematically deny full-time status and security.",
        imageAlt: "Poster exposing contract violations",
        image: poster3
    },
    {
        id: 4,
        title: "That's Today's Fresh Food People... shielding abusers",
        caption: "Investigating the alleged culture of protected misconduct, nepotism, and the failure of HR to address internal harassment claims.",
        imageAlt: "Poster investigating protected misconduct",
        image: poster4
    },
    {
        id: 5,
        title: "We Can Help With That... forging your documents",
        caption: "Detailing the most serious claims of alleged document fraud, including pre-filled health and safety forms designed to shield the company from liability.",
        imageAlt: "Poster detailing alleged document fraud",
        image: poster5
    }
];

export const linkedInStory = {
    title: "The Truth Behind Woolworst",
    content: `"Taste the racism."
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
My 'Woolworst' poster is my testimony—the visual proof of their poison. I have a platform. This is for the hundreds who don't. For everyone who has been told their pain isn't real and their voice doesn't count.`
};

const PosterGallery = () => {
    const [isLinkedInOpen, setIsLinkedInOpen] = useState(false);

    return (
        <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-foreground">
                        The Artistic Disclosure
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A series of visual documents charting systemic patterns of alleged corporate abuse and contract violations
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:[&>*:nth-last-child(-n+2)]:mx-auto">
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
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                            decoding="async"
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
                                    <p
                                        className="text-sm text-muted-foreground leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: poster.caption }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* LinkedIn Post Dropdown */}
                <div className="max-w-3xl mx-auto">
                    <Collapsible open={isLinkedInOpen} onOpenChange={setIsLinkedInOpen}>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full justify-between text-lg font-handwritten py-6 border-2 hover:bg-primary/10"
                            >
                                <span>Original LinkedIn Post (6 October 2025)</span>
                                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isLinkedInOpen ? 'rotate-180' : ''}`} />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-6">
                            <Card className="bg-card/80 backdrop-blur-sm border-border">
                                <CardContent className="p-6 md:p-8 space-y-4 text-foreground">
                                    <h2 className="font-handwritten text-3xl md:text-4xl font-bold text-primary">
                                        {linkedInStory.title}
                                    </h2>
                                    <div className="prose prose-invert prose-lg max-w-none space-y-4">
                                        <p dangerouslySetInnerHTML={{ __html: linkedInStory.content }} />
                                    </div>
                                </CardContent>
                            </Card>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </section>
    );
};

export default PosterGallery;