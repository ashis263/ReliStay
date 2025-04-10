'use client';

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <div className="border-t py-2">
      <Button onClick={() => router.back()} variant="ghost">
        <ChevronLeft /> Go Back
      </Button>
    </div>
  );
};

export default GoBack;
