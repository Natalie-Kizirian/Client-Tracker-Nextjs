import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
  return (
    <div className="flex flex-1 flex-col items-center justify-center"></div>
  );
}
