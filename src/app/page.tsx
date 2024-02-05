import Image from "next/image";
import { Navigation } from "./navigation/navigation";
import { HomePage } from "./home/pages";
export default function Home() {
  return (
    <div className="container mx-auto mt-[40px]">
      <HomePage />
    </div>
  );
}
