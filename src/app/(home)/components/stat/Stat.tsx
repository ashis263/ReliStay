"use client";

import Container from "@/components/container";
import Counter from "./components/Counter";

const Stat = () => {
  return (
    <div>
      <Container>
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-4 text-center w-full py-5">
          {/* counts will be fetched from database later */}
          <div>
            <Counter targetNumber={3} />
            <p className="font-mono">Homestays</p>
          </div>
          <div>
            <Counter targetNumber={10} />
            <p className="font-mono">Bookings</p>
          </div>
          <div>
            <Counter targetNumber={19} />
            <p className="font-mono">Travellers</p>
          </div>
          <div>
            <Counter targetNumber={2} />
            <p className="font-mono">Owners</p>
          </div>
        </div>
      <hr />
      </Container>
    </div>
  );
};

export default Stat;
