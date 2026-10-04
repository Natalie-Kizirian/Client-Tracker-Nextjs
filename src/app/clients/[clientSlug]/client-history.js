"use client";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import ContainerBackground from "@/components/cards-container/container-bg";
import VisitCard from "@/components/cards-container/visit-card";
import Link from "next/link";
import AppointmentForm from "@/components/forms/appointment-form";

export default function ClientHistoryPage({ client, appointments }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
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
        <h2> {client.name} </h2>
        <button className="bg-surface rounded-md px-3 py-2 shadow-sm">
          Edit client
        </button>
      </div>
      {showForm && (
        <AppointmentForm
          onClose={() => setShowForm(false)}
          clientId={client.id}
        />
      )}

      <ContainerBackground>
        {appointments.map((visit) => (
          <VisitCard key={visit.id} {...visit} />
        ))}
        {appointments.length === 0 && (
          <p className="text-center">No appointments yet.</p>
        )}
      </ContainerBackground>
    </div>
  );
}

{
  /* {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          appointments.map((visit) => <VisitCard key={visit.id} {...visit} />)
        )} */
}
