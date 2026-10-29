import CalendarDay from "./calendar-day";
import { getAllAppointments, getClients } from "@/lib/actions";

export default async function CalendaDates({ params }) {
  const { date } = await params;
  const appointments = await getAllAppointments();
  const clients = await getClients();
  console.log(date);
  return (
    <div>
      <CalendarDay date={date} appointments={appointments} clients={clients} />
    </div>
  );
}
