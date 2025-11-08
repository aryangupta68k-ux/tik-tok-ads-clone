import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import StepCard from "@/components/StepCard";
import EarningsNotification from "@/components/EarningsNotification";
import tiktokLogo from "@/assets/tiktok-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-3 sm:p-4 md:p-8">
      {/* Verification Badge */}
      <div className="fixed top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-10">
        <div className="bg-primary/10 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">Verified by TikTok Inc.</span>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        {/* TikTok Logo */}
        <div className="flex justify-center mb-4 md:mb-6">
          <img 
            src={tiktokLogo} 
            alt="TikTok" 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 leading-tight px-2 sm:px-4">
          Complete The Steps to Start Reviewing for TikTok
        </h1>

        {/* CTA Button */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-12 px-2">
          <Button 
            size="lg" 
            className="w-full max-w-md h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-semibold rounded-2xl hover:scale-105 transition-transform touch-manipulation"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        {/* Quick Start Guide Card */}
        <Card className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
          <div className="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Quick Start Guide</h2>
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground flex-shrink-0" />
          </div>

          <div className="space-y-5 sm:space-y-6 md:space-y-8">
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

        {/* Earnings Notification */}
        <EarningsNotification />
      </div>
    </div>
  );
};

export default Index;
