import ClientPage from "./client-page";
import { getClients } from "@/lib/actions";

export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <div>
      <ClientPage clients={clients} />
    </div>
  );
}
