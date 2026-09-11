import classes from "./page.module.css";
import ContainerBackground from "@/components/cards-container/container-bg";
import ClientCard from "@/components/cards-container/client-card";
import Link from "next/link";

export default function ClientPage() {
  const statuses = ["all", "new", "active", "inactive", "one-time"];

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-4">
      <div className="flex w-full flex-col gap-2">
        <Link href="/"className="secondary-button-md">+ Add new Client</Link>
        <input
          type="text"
          placeholder="Search a client..."
          className={classes.search}
        />
        <div className="flex gap-2">
          {statuses.map((status) => (
            <p key={status} className={classes.status}>
              {status}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className={classes.total}>Total Income: </p>
      </div>
      <ContainerBackground>
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </ContainerBackground>
    </div>
  );
}
