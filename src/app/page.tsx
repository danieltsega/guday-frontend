import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";
//import { Button } from "@/components/ui/button";
//import Image from "next/image";
//import { tasks } from "../lib/data";
//import Link from "next/link";
//import TaskCard from "@/components/TaskCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="md:max-w-xl mx-auto relative pt-24">
        <div className="">
          <div className="">
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
}
