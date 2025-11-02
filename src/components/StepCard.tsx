import { ReactNode } from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  highlighted?: boolean;
}

const StepCard = ({ number, title, description, highlighted = false }: StepCardProps) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className={`${highlighted ? 'text-green-600 font-semibold' : 'text-muted-foreground'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
