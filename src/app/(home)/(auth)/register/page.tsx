"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignupForm } from "./components/signup-form";
import Logo from "@/components/Logo";

const Page = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [isRoleSubmitted, setIsRoleSubmitted] = useState<boolean>(false);

  const handleRole = (role: string) => {
    setSelectedRole(role);
  };

  const handleRoleSubmit = () => {
    setIsRoleSubmitted(!isRoleSubmitted);
  };

  return (
    <>
      {isRoleSubmitted && selectedRole.length ? (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 w-full">
          <Logo variant="black" className="w-full text-center" />
          <SignupForm role={selectedRole} />
        </div>
      ) : (
        <div className="w-4/5 sm:w-2/3 lg:w-1/4 mx-auto flex flex-col justify-center items-center min-h-svh text-black">
          <Logo variant="black" className="w-full text-center" />
          <div className="my-5 bg-foreground rounded-lg p-6 space-y-10 flex flex-col justify-between">
            <h2 className="text-2xl text-center">
              Register as a Traveller or a Home Owner
            </h2>
            <div className="my-5 flex justify-between">
              <button
                onClick={() => handleRole("traveller")}
                className={`w-2/5 aspect-square border flex justify-center items-center rounded-lg bg-foreground ${
                  selectedRole === "traveller"
                    ? "border-primary"
                    : "border-gray-300"
                }`}
              >
                <span className="">
                  I am a<br />{" "}
                  <span className="text-primary font-bold text-xl">
                    Traveller
                  </span>
                </span>
              </button>
              <button
                onClick={() => handleRole("homeowner")}
                className={`w-2/5 aspect-square border flex justify-center items-center rounded-lg bg-foreground ${
                  selectedRole === "homeowner"
                    ? "border-primary"
                    : "border-gray-300"
                }`}
              >
                <span className="">
                  I am a<br />{" "}
                  <span className="text-primary font-bold text-xl">
                    Home Owner
                  </span>
                </span>
              </button>
            </div>
            <Button onClick={handleRoleSubmit} className="w-full">
              Register
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
