import { IoChevronBackOutline } from "react-icons/io5";
import ContainerBackground from "@/components/cards-container/container-bg";
import VisitCard from "@/components/cards-container/visit-card";
import Link from "next/link";

export default function ClientDetailsPage({ params }) {
  const { clientSlug } = params;
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-4">
      <div className="flex w-full items-center justify-between text-black">
        <Link href="/clients">
          <IoChevronBackOutline className="cursor-pointer text-xl" />
        </Link>
        <Link href="/" className="secondary-button-md">
          + Add Appointment
        </Link>
      </div>
      <ContainerBackground>
        <VisitCard />
        <VisitCard />
        <VisitCard />
        <VisitCard />
      </ContainerBackground>
    </div>
  );
}
