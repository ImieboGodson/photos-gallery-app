"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  center?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Photos",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-start 
      "
    >
      <div className="w-fit flex flex-col items-start">
        <Heading title={title} subtitle={subtitle} />
        <div className="w-48 mt-4">
          {showReset && (
            <Button
              outline
              title="Remove all filters"
              onClick={() => router.push("/")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
