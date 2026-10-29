"use client";
import { useState } from "react";
import { getCalendarDays, getDateKey, groupAppointmentsByDate } from "@/lib/calendar";
import Link from "next/link";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthView({ appointments, clients }) {
  const [currentDate, setCurrentDate] = useState(new Date());
console.log("appointments:", appointments, "clients:", clients);
  const days = getCalendarDays(currentDate); // οι μέρες του grid για τον τρέχοντα μήνα
  const today = new Date().toDateString();

  const prev = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1,
  );
  const next = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1,
  );
  /* Appointments */
  const appointmentsByDate = groupAppointmentsByDate(appointments);
  // for (const appointment of appointments) {
  //   if (!appointmentsByDate[appointment.date]) {
  //     appointmentsByDate[appointment.date] = [];
  //   }
  //   appointmentsByDate[appointment.date].push(appointment);
  // }
  //console.log(appointmentsByDate);
  //console.log("appointments:", appointments);

  return (
    <div className="flex w-full flex-col gap-2 pb-25">
      <div className="flex justify-between text-sm">
        {/* Prev Month */}
        <button
          className="w-full cursor-pointer text-center"
          onClick={() => setCurrentDate(prev)}
        >
          <p>{prev.getFullYear()}</p>
          <p>{MONTHS[prev.getMonth()]}</p>
        </button>
        {/* Current Month */}
        <div className="w-full text-center text-lg font-semibold">
          <p>{currentDate.getFullYear()}</p>
          <p>{MONTHS[currentDate.getMonth()]}</p>
        </div>
        {/* Next Month */}
        <button
          className="w-full cursor-pointer text-center"
          onClick={() => setCurrentDate(next)}
        >
          <p>{next.getFullYear()}</p>
          <p>{MONTHS[next.getMonth()]}</p>
        </button>
      </div>
      {/* Weekdays */}
      <div className="grid w-full grid-cols-7 gap-1 rounded-sm">
        {WEEKDAYS.map((day) => (
          <p key={day} className="text-center text-xs">
            {day}
          </p>
        ))}

        {/* Days */}
        {days.map((date) => {
          const dateKey = getDateKey(date);

          // let dayAppointments;
          // if (appointmentsByDate[dateKey]) {
          //   dayAppointments = appointmentsByDate[dateKey];
          // } else {
          //   dayAppointments = [];
          // }
           const dayAppointments = appointmentsByDate[dateKey] ?? [];

          return (
            <Link
              href={`/calendar/${dateKey}`}
              key={date.toDateString()}
              className={`border-primary-active h-21 max-h-21 truncate rounded-md border px-0.5 py-1 text-center text-xs shadow-sm ${
                date.toDateString() === today ? "bg-surface" : "bg-white"
              }`}
            >
              <span className="text-xs">{date.getDate()}</span>
              {dayAppointments.map((appointment) => {
                const client = clients.find(
                  (c) => c.id === appointment.clientId,
                );
                return (
                  <p
                    key={appointment.id}
                    className="bg-secondary m-0.5 rounded-sm p-0.5"
                  >
                    {client?.name}
                  </p>
                );
              })}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
