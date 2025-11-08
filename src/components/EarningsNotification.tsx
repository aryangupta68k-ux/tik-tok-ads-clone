import { useEffect, useState } from "react";

const earners = [
  { name: "Alex", amount: "$57.34" },
  { name: "Emma", amount: "$62.18" },
  { name: "Noah", amount: "$45.92" },
  { name: "Mia", amount: "$73.21" },
  { name: "Liam", amount: "$51.88" },
  { name: "Olivia", amount: "$68.45" },
  { name: "Ethan", amount: "$54.67" },
  { name: "Ava", amount: "$79.12" },
  { name: "Mason", amount: "$43.29" },
  { name: "Sophia", amount: "$61.53" },
  { name: "Lucas", amount: "$58.76" },
  { name: "Isabella", amount: "$72.94" },
  { name: "Jacob", amount: "$49.38" },
  { name: "Amelia", amount: "$65.81" },
  { name: "Carter", amount: "$56.42" },
  { name: "Harper", amount: "$71.29" },
  { name: "Logan", amount: "$47.65" },
  { name: "Ella", amount: "$63.97" },
  { name: "Aiden", amount: "$52.14" },
  { name: "Chloe", amount: "$69.83" },
  { name: "Caleb", amount: "$55.71" },
  { name: "Grace", amount: "$74.56" },
  { name: "Daniel", amount: "$48.92" },
  { name: "Lily", amount: "$66.38" },
  { name: "Ryan", amount: "$53.27" },
  { name: "Zoe", amount: "$70.45" },
  { name: "Leo", amount: "$59.84" },
  { name: "Layla", amount: "$67.19" },
  { name: "Samuel", amount: "$46.73" },
  { name: "Nora", amount: "$75.62" },
  { name: "Benjamin", amount: "$54.91" },
  { name: "Scarlett", amount: "$68.27" },
  { name: "Isaac", amount: "$50.36" },
  { name: "Aria", amount: "$72.18" },
  { name: "Dylan", amount: "$57.89" },
  { name: "Riley", amount: "$64.54" },
  { name: "Jayden", amount: "$51.42" },
  { name: "Maya", amount: "$69.76" },
  { name: "Adam", amount: "$48.15" },
  { name: "Hailey", amount: "$73.94" },
  { name: "Nathan", amount: "$56.28" },
  { name: "Victoria", amount: "$71.53" },
  { name: "James", amount: "$49.87" },
  { name: "Luna", amount: "$65.39" },
  { name: "Michael", amount: "$52.64" },
  { name: "Avery", amount: "$70.82" },
  { name: "William", amount: "$58.45" },
  { name: "Mila", amount: "$67.91" },
  { name: "Henry", amount: "$54.23" },
  { name: "Ellie", amount: "$76.18" }
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
          <span className="font-semibold">{earners[currentIndex].name}</span> just earned{" "}
          <span className="font-bold text-primary">{earners[currentIndex].amount}</span>
        </p>
      </div>
    </div>
  );
};

export default EarningsNotification;
