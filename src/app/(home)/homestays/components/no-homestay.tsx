import Image from "next/image";

const NoHomestay: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-[50vh] flex-col">
            <Image src={"/assets/no-entries-found.jpg"} width={100} height={100} alt="no entries found" />
            <h2 className="text-3xl lg:text-5xl font-bold text-red-300">No Homestays Found</h2>
        </div>
    );
}

export default NoHomestay;
