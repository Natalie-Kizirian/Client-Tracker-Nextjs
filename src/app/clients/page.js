"use client";
import { useState } from "react";

import classes from "./page.module.css";

import ContainerBackground from "@/components/cards-container/container-bg";
import ClientCard from "@/components/cards-container/client-card";
import ClientForm from "@/components/forms/client-form";

export default function ClientPage() {
  const statuses = ["all", "new", "active", "inactive", "one-time"];
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col gap-2">
        <button
          onClick={() => setShowForm(true)}
          className="secondary-button-md"
        >
          + Add new Client
        </button>
        <input
          type="text"
          placeholder="Search a client..."
          className={classes.search}
        />
        <div className="flex gap-2">
          {statuses.map((status) => (
            <button key={status} className={classes.status}>
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className={classes.total}>Total Income: </p>
      </div>
      {showForm && <ClientForm onClose={() => setShowForm(false)} />}
      <ContainerBackground>
        <ClientCard />

        <ClientCard />
        <ClientCard />
        <ClientCard />
      </ContainerBackground>
    </div>
  );
}
