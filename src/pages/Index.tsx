import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import StepCard from "@/components/StepCard";
import tiktokLogo from "@/assets/tiktok-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl mx-auto">
        {/* TikTok Logo */}
        <div className="flex justify-center mb-8 md:mb-12">
          <img 
            src={tiktokLogo} 
            alt="TikTok" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight px-4">
          Complete The Steps to Start Reviewing for TikTok
        </h1>

        {/* CTA Button */}
        <div className="flex justify-center mb-8 md:mb-12">
          <Button 
            size="lg" 
            className="w-full max-w-md h-14 md:h-16 text-base md:text-lg font-semibold rounded-2xl hover:scale-105 transition-transform"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Quick Start Guide Card */}
        <Card className="p-6 md:p-8 rounded-3xl shadow-lg">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Quick Start Guide</h2>
            <ArrowRight className="h-6 w-6 text-muted-foreground" />
          </div>

          <div className="space-y-6 md:space-y-8">
            <StepCard
              number={1}
              title="Provide Basic Info"
              description="Enter your email & basic Info"
            />
            
            <StepCard
              number={2}
              title="Complete Deals"
              description="Complete recommended 2-3 deals"
            />
            
            <StepCard
              number={3}
              title="Start Reviewing"
              description="Start your journey as a TikTok reviewer"
              highlighted={true}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
