import { ReactNode } from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  highlighted?: boolean;
}

const StepCard = ({ number, title, description, highlighted = false }: StepCardProps) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg">
        {number}
      </div>
      <div className="flex-1 pt-1 sm:pt-2">
        <h3 className="text-lg sm:text-xl font-bold mb-1">{title}</h3>
        <p className={`text-sm sm:text-base ${highlighted ? 'text-green-600 font-semibold' : 'text-muted-foreground'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
