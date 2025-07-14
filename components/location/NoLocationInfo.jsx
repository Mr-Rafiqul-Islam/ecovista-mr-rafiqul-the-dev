import Link from "next/link";
import Card from "../Card";


const NoLocationInfo = () => {
    return <Card>
        <h2 className="text-center my-4">No Location Info found</h2>
        <Link
        href={'/'}
        className=" flex justify-center text-center text-sm mx-auto hover:invert transition-all duration-500 my-1 p-4 bg-white text-black border rounded-lg"
        >
        👉Back to Current location or Home ➡️
        </Link>
    </Card>;
};

export default NoLocationInfo;
