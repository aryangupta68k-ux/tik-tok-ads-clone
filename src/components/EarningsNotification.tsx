import { useEffect, useState } from "react";

const earners = [
  "Alex", "Emma", "Noah", "Mia", "Liam", "Olivia", "Ethan", "Ava", "Mason", "Sophia",
  "Lucas", "Isabella", "Jacob", "Amelia", "Carter", "Harper", "Logan", "Ella", "Aiden", "Chloe",
  "Caleb", "Grace", "Daniel", "Lily", "Ryan", "Zoe", "Leo", "Layla", "Samuel", "Nora",
  "Benjamin", "Scarlett", "Isaac", "Aria", "Dylan", "Riley", "Jayden", "Maya", "Adam", "Hailey",
  "Nathan", "Victoria", "James", "Luna", "Michael", "Avery", "William", "Mila", "Henry", "Ellie"
];

const EarningsNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % earners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex justify-center">
      <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse"></div>
        <p className="text-xs sm:text-sm font-medium text-foreground">
          <span className="font-semibold">{earners[currentIndex]}</span> just earned{" "}
          <span className="font-bold text-primary">$57.34</span>
        </p>
      </div>
    </div>
  );
};

export default EarningsNotification;
