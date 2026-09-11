"use client";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import ContainerBackground from "@/components/cards-container/container-bg";
import VisitCard from "@/components/cards-container/visit-card";
import Link from "next/link";
import AppointmentForm from "@/components/forms/appointment-form";

export default function ClientDetailsPage({ params }) {
  //const { clientSlug } = params;
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 ">
      <div className="flex w-full items-center justify-between text-black">
        <Link href="/clients">
          <IoChevronBackOutline className="cursor-pointer text-xl" />
        </Link>
        <button
          onClick={() => setShowForm(true)}
          className="secondary-button-md"
        >
          + Add Appointment
        </button>
      </div>
      <div className="flex w-full items-center justify-between">
        <h2>Client Name </h2>
        <button className="stroke-button-sm bg-surface">Edit client</button>
      </div>
      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}

      <ContainerBackground>
        <VisitCard />
        <VisitCard />
        <VisitCard />
        <VisitCard />
      </ContainerBackground>
    </div>
  );
}
