"use client";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
import ContainerBackground from "@/components/cards-container/container-bg";
import VisitCard from "@/components/cards-container/visit-card";
import AppointmentForm from "@/components/forms/appointment-form";
import classes from "../page.module.css";

export default function ClientHistoryPage({
  client,
  appointments,
  totalIncome,
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
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
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <h2 className="capitalize"> {client.name} </h2>
          <button className="bg-surface rounded-md px-3 py-2 shadow-sm">
            Edit client
          </button>
        </div>
        <p className={classes.total}>Total Income: {totalIncome} $</p>
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
