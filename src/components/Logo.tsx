import clsx from "clsx";
import { Home } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

const Logo: React.FC<{ className?: string; variant: "white" | "black" }> = ({
  className,
  // variant,
}) => {
  return (
    <Link href="/" className={clsx(className, " flex items-center")}>
      <h1 className="text-3xl font-extrabold font-mono text-black flex items-center gap-2"><Home className="text-primary" /> ReliStay</h1>
      {/* <Image
        src={variant === "white" ? "/assets/brand2.png" : "/assets/brand1.png"}
        alt="brand logo"
        width={120}
        height={100}
      /> */}
    </Link>
  );
};

export default Logo;
