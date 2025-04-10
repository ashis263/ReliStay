import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[500px] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-red-500">Not Found!</h2>
      <p className="mt-2 mb-3">Could not find requested resource</p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
};
export default NotFound;
