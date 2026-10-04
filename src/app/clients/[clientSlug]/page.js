import ClientHistoryPage from "./client-history";
import { getAppointmentsByClientId, getClientBySlug } from "@/lib/actions";

export default async function HistoryPage({ params }) {
  const { clientSlug } = await params;
  //console.log("clientSlug:", clientSlug);
  const client = await getClientBySlug(clientSlug);
  //console.log("client:", client);
  const appointments = client ? await getAppointmentsByClientId(client.id) : [];

  return (
    <div className="mb-22">
      <ClientHistoryPage client={client} appointments={appointments} />
    </div>
  );
}
