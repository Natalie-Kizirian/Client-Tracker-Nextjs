"use client";
import { useState } from "react";
import { getCalendarDays } from "@/lib/calendar";

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

export default function MonthView() {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  return (
    <div className="flex w-full flex-col gap-2 pb-25">
      <div className="flex justify-between text-sm">
        <button
          className="w-full cursor-pointer text-center"
          onClick={() => setCurrentDate(prev)}
        >
          <p>{prev.getFullYear()}</p>
          <p>{MONTHS[prev.getMonth()]}</p>
        </button>

        <div className="w-full text-center text-lg font-semibold">
          <p>{currentDate.getFullYear()}</p>
          <p>{MONTHS[currentDate.getMonth()]}</p>
        </div>

        <button
          className="w-full cursor-pointer text-center"
          onClick={() => setCurrentDate(next)}
        >
          <p>{next.getFullYear()}</p>
          <p>{MONTHS[next.getMonth()]}</p>
        </button>
      </div>

      <div className="grid w-full grid-cols-7 gap-1 rounded-sm ">
        {WEEKDAYS.map((day) => (
          <p key={day} className="text-center text-xs">
            {day}
          </p>
        ))}

        {days.map((date) => (
          <div
            key={date.toDateString()}
            className={`min-h-16 rounded-md p-1 text-center text-xs ${
              date.toDateString() === today
                ? "bg-primary-active/60"
                : "bg-surface"
            }`}
          >
            <span className="text-xs">{date.getDate()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
