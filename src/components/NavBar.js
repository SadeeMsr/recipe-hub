import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <div className="flex justify-start items-center gap-2 font-semibold text-xl w-52">
          <Image
            src={`/assets/chef.png`}
            width={0}
            height={0}
            sizes="100vw"
            className="border p-2 shadow-md"
            style={{ width: "28%", height: "auto", borderRadius: "50%" }}
            alt="Random image"
          />
          <p>Recipe Hub</p>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <Link href="/" className="font-semibold hover:underline">
          Home
        </Link>
        <Link href="/create-recipe">
          <button className="p-2 bg-black rounded-md text-white shadow-md hover:bg-slate-800">
            Create Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}
