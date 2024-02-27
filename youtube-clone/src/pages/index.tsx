import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import Appbar from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="p-2"> <Appbar/></div>
     
      <div className="flex p-2">
        <LeftBar/>
        <VideoGrid />
      </div>
    </main>
  );
}
