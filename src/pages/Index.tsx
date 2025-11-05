import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import PosterGallery from "@/components/PosterGallery";
import Footer from "@/components/Footer";

const Index = () => {
    const [isStoryOpen, setIsStoryOpen] = useState(false);
    const [currentView, setView] = useState('home');

    // Home content (your original layout)
    const HomeContent = () => (
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
                                            This project began as a critical observation: corporations hold immense power over our daily lives, yet meaningful accountability mechanisms for workers remain elusive. Traditional channels for raising workplace issues—HR, internal systems, and union routes—often feel like shouting into the void.
                                        </p>

                                        <p>
                                            The Woolworst initiative transforms the challenge of corporate opacity into creative documentation. This platform provides a non-legal archive for experiences, patterns, and collective testimony, ensuring that accounts of alleged contract fraud, health and safety failures, and cultural misconduct do not simply vanish.
                                        </p>

                                        <p>
                                            Each submission is a factual data point utilised as raw material for visual arts and public analysis. Together, these accounts chart the systemic patterns that transcend any single individual complaint.
                                        </p>

                                        <p>
                                            This is not a tool for litigation or attack. It operates solely in the protected public interest of visibility, memory, and artistic disclosure. When companies recognise that their operational failures are contributing to a permanent, public record, their behaviour is compelled to change.
                                        </p>

                                        <p>
                                            We believe in the transformative power of independent documentation to foster a more transparent relationship between large entities and the workforce that sustains them.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </section>
            {/* Submission Form Section */}
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
                    <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4 md:p-6">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Privacy Note:</strong> All submissions are reviewed and moderated for data integrity and relevance to the project's mandate. We respect your privacy: your personal information is treated as strictly confidential and will not be shared without your explicit written consent. You may, and are encouraged to, submit anonymously. All content must focus on factual, verifiable experiences that reveal systemic patterns rather than serving as personal attacks or emotional venting.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer setView={setView} />
        </div>
    );

    // Our Mission content (NZ spelling)
    const MissionContent = () => (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground">Our Mission</h1>
                    <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <div className="prose prose-invert prose-lg max-w-none space-y-4">
                                <p>
                                    This project began as a critical observation: corporations hold immense power over our daily lives, yet meaningful accountability mechanisms for workers remain elusive. Traditional channels for raising workplace issues—HR, internal systems, and union routes—often feel like shouting into the void. Woolworst is an independent artistic initiative dedicated to closing this accountability gap. Our process involves collecting and consolidating verified experiences of systemic corporate misconduct into a data archive. We use this unique, anonymised data set as the material for public-facing art and research designed to expose patterns of harm. Our mandate is not to pursue individual legal claims, but to generate incontrovertible, systemic documentation that compels greater public disclosure and regulatory scrutiny of corporate behaviour.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer setView={setView} />
        </div>
    );

    // Community Guidelines content (NZ spelling)
    const GuidelinesContent = () => (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground">Community Guidelines</h1>
                    <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <div className="prose prose-invert prose-lg max-w-none space-y-4">
                                <p>
                                    These guidelines are essential for maintaining the integrity and legal defensibility of our archive. We are collecting factual, verifiable data to inform an artistic and research project. We require that all submissions focus on systemic patterns of misconduct within the workplace (e.g., wage theft, health and safety failures, policy abuse). Do not submit personal opinions, emotionally charged language, or speculative claims; we only require factual testimony, dates, and locations. Anonymity is your firewall, but data integrity is ours. We reserve the right to moderate, edit, or reject any submission that contains hate speech, defamation, or unsubstantiated claims that would compromise the integrity of our artistic and research mandate. By submitting, you grant this independent artistic initiative a perpetual, non-exclusive right to use your anonymised, non-personal data for public display, artistic production, and systemic analysis.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer setView={setView} />
        </div>
    );

    // FAQ content (NZ spelling)
    const FAQContent = () => (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground">FAQ</h1>
                    <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-foreground text-lg mb-2">Is Woolworst a law firm or offering legal advice?</h3>
                                    <p className="text-muted-foreground">No. We are an independent artistic accountability project. We do not provide legal counsel, representation, or assistance with individual claims. Submitting data to this project does not create an attorney-client relationship.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground text-lg mb-2">Will I receive compensation or be involved in a class action lawsuit?</h3>
                                    <p className="text-muted-foreground">No. This project is not affiliated with any legal action, class action, or compensation scheme. The data you provide is used solely for the non-commercial purpose of artistic documentation and systemic research.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground text-lg mb-2">What is done with the data?</h3>
                                    <p className="text-muted-foreground">Your anonymised testimony is cross-referenced with other data points to identify systemic patterns. These patterns are then used as the basis for public art installations, data visualisation, and research reports intended to increase public awareness and regulatory pressure.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer setView={setView} />
        </div>
    );

    // Privacy Policy content (NZ spelling)
    const PrivacyContent = () => (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground">Privacy Policy</h1>
                    <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <div className="prose prose-invert prose-lg max-w-none space-y-4">
                                <p>
                                    We prioritise your anonymity. This project is focussed on collecting systemic patterns, not identifying individuals. We do not require, and strongly discourage you from submitting, any personally identifiable information (PII) such as full names, contact details, employee IDs, or specific addresses unless absolutely essential to verifying systemic patterns. All submitted data is immediately stripped of any identifying markers and stored securely as an anonymised research asset. We do not sell, rent, or distribute your raw data to any third parties. We only share aggregate, anonymised findings in public forums, artistic displays, and research publications.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer setView={setView} />
        </div>
    );

    // Disclaimer content (NZ spelling)
    const DisclaimerContent = () => (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-foreground">Disclaimer</h1>
                    <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <div className="prose prose-invert prose-lg max-w-none space-y-4">
                                <p>
                                    Important Legal Disclaimer: Woolworst is a non-commercial, independent artistic and documentation project. It does not constitute legal advice, nor does submitting content create any form of attorney-client, contractual, or employment relationship between you and the project. All information provided is for the sole purpose of identifying, illustrating, and archiving systemic corporate patterns in the form of artistic research. We are not affiliated with, endorsed by, or sponsored by the corporation being documented or any of its subsidiaries. Your use of this site and your submission of data is strictly at your own risk and does not guarantee any outcome, legal or otherwise.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer setView={setView} />
        </div>
    );

    const renderContent = () => {
        switch (currentView) {
            case 'mission':
                return <MissionContent />;
            case 'guidelines':
                return <GuidelinesContent />;
            case 'faq':
                return <FAQContent />;
            case 'privacy':
                return <PrivacyContent />;
            case 'disclaimer':
                return <DisclaimerContent />;
            default:
                return <HomeContent />;
        }
    };

    return renderContent();
};

export default Index;