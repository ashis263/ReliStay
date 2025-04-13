import Container from "@/components/container";
import { Button } from "@/components/ui/button";
// import { DatePickerDemo } from "./DayPicker";
import { SelectDemo } from "./SelectGuest";

const BottomBar: React.FC<{ pricePerNight: number, maxGuests: number }> = ({ pricePerNight, maxGuests }) => {
  return (
    <div className="bg-white w-full h-16 sm:h-auto sm:rounded-md sm:py-4 lg:py-10 sm:shadow">
      <Container>
        <div className="flex justify-between items-center sm:items-end h-16 sm:h-auto sm:flex-col">
          <div className="flex items-center">
            <h3 className="text-3xl lg:text-4xl font-bold my-2">
              <span className=" text-primary">৳</span>
              {pricePerNight}
              <span className="text-[10px] lg:text-xs font-normal">
                /Per Night
              </span>
            </h3>
          </div>
          <form className="hidden sm:block">
            <div className="space-y-2 lg:space-y-4">
              {/* <DatePickerDemo placeholder="Check-in" />
              <DatePickerDemo placeholder="Checkout" /> */}
              <SelectDemo maxGuests={maxGuests}  />
            </div>
          </form>
          <div className="flex justify-center items-center sm:w-full">
            <Button className="sm:w-full">Book Now</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
