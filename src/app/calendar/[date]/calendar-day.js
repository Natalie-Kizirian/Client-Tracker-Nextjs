"use client";
import { useState } from "react";
import Link from "next/link";
import {
  getCalendarDays,
  groupAppointmentsByDate,
  getDateKey,
} from "@/lib/calendar";
import { IoChevronBackOutline } from "react-icons/io5";

import AppointmentForm from "@/components/forms/appointment-form";
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarDay({ date, appointments, clients }) {
  const [showForm, setShowForm] = useState(false);
  const [year, month, dayOfMonth] = date.split("-");
  const selectedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(dayOfMonth),
  );
  const appointmentsByDate = groupAppointmentsByDate(appointments);

  const days = getCalendarDays(selectedDate);

  return (
    <div className="mb-21 flex w-full flex-col items-center gap-5">
      <div className="flex w-1/2 justify-between">
        <Link href="/calendar">
          <IoChevronBackOutline className="cursor-pointer text-xl" />
        </Link>
        <p>October</p>
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="secondary-button-md w-full"
      >
        + Add appointment
      </button>
      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
      <div className="flex w-full flex-col gap-5">
        {days.map((day) => {
          const dateKey = getDateKey(day);
          const dayAppointments = appointmentsByDate[dateKey] ?? [];

          return (
            <div
              className="flex w-full items-center justify-evenly"
              key={day.toDateString()}
            >
              {/* Date */}
              <div className="flex flex-col items-center">
                <p>{weekday[day.getDay()]}</p>
                <p>{day.getDate()}</p>
              </div>
              {/* Appointment Info */}
              <div className="bg-surface flex min-h-20 max-w-70 flex-1 flex-col justify-center shadow-md">
                {dayAppointments.map((appointment) => {
                  const client = clients.find(
                    (c) => c.id === appointment.clientId,
                  );
                  return (
                    <div
                      key={appointment.id}
                      className="m-0.5 rounded-sm p-0.5"
                    >
                      <p>{appointment.service}</p>
                      <div className="text-primary flex justify-between text-sm capitalize">
                        <p>{client?.name}</p>
                        <p>{client?.status} Client</p>
                      </div>
                    </div>
                  );
                })}
                {dayAppointments.length === 0 && (
                  <p className="text-center">Nothing here yet</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
