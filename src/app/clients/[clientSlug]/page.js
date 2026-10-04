import { getClientBySlug } from "@/lib/actions";
import ClientHistoryPage from "./client-history";

export default async function HistoryPage({ params }) {
  const { clientSlug } = await params;
  console.log("clientSlug:", clientSlug);
  const client = await getClientBySlug(clientSlug);
  console.log("client:", client);

  return (
    <div>
      <ClientHistoryPage client={client} />
    </div>
  );
}
