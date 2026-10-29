import { getAllAppointments, getClients } from "@/lib/actions";
import MonthView from "./month-view";

export default async function CalendarPage() {
  const appointments = await getAllAppointments();
  const clients = await getClients();

  return (
    <div>
      <MonthView appointments={appointments} clients={clients} />
    </div>
  );
}
