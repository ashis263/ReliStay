"use client";

import useSearch from "../hooks/use-search";
import HomestayCard from "./HomestayCard";

const HomestayContainer = () => {
  const { homestays } = useSearch();

  return (
    <div className="space-y-3">
      <div>
        <p className="text-lg font-medium ml-2">{homestays.length < 10 ? `0${homestays.length}` : homestays.length } Homestays found</p>
      </div>
      {homestays.length ? (
        homestays.map((item) => <HomestayCard key={item._id} homestay={item} />)
      ) : (
        <h5>Loading</h5>
      )}
    </div>
  );
};

export default HomestayContainer;
