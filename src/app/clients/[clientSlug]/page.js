import ClientHistoryPage from "./client-history";
import {
  getAppointmentsByClientId,
  getClientBySlug,
  getClientTotalIncome,
} from "@/lib/actions";

export default async function HistoryPage({ params }) {
  const { clientSlug } = await params;
  const client = await getClientBySlug(clientSlug);
  const appointments = client ? await getAppointmentsByClientId(client.id) : [];
  const totalIncome = client ? await getClientTotalIncome(client.id) : 0;

  return (
    <div className="mb-22">
      <ClientHistoryPage
        client={client}
        appointments={appointments}
        totalIncome={totalIncome}
      />
    </div>
  );
}
