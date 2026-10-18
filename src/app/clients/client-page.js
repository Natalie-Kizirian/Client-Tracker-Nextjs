"use client";
import { useState } from "react";

import classes from "./page.module.css";
import ContainerBackground from "@/components/cards-container/container-bg";
import ClientCard from "@/components/cards-container/client-card";
import ClientForm from "@/components/forms/client-form";

export default function ClientPage({ clients }) {
  const statuses = ["all", "new", "active", "inactive", "one-time"];
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const filteredClients =
  //   selectedStatus === "all"
  //     ? clients
  //     : clients.filter((s) => s.status === selectedStatus);

  // const searchedClients = searchQuery
  //   ? filteredClients.filter((c) =>
  //       c.name.toLowerCase().startsWith(searchQuery.toLowerCase()),
  //     )
  //   : filteredClients;
  const visibleClients = clients.filter((c) => {
    const matchesStatus =
      selectedStatus === "all" || c.status === selectedStatus;

    const matchesSearch = c.name
      .toLowerCase()
      .startsWith(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 pb-25">
      <div className="flex w-full flex-col gap-2">
        <button
          onClick={() => setShowForm(true)}
          className="secondary-button-md"
        >
          + Add new Client
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search a client..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />

        {/* Status */}
        <div className="flex gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`${classes.status} ${selectedStatus === status ? "bg-secondary shadow-sm " : "bg-surface"}`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {showForm && <ClientForm onClose={() => setShowForm(false)} />}

      <ContainerBackground>
        {visibleClients.map((client) => (
          <ClientCard key={client.id} {...client} />
        ))}
        {clients.length === 0 ? (
          <p className="text-center">No clients yet.</p>
        ) : visibleClients.length === 0 ? (
          <p className="text-center">No clients match your filters.</p>
        ) : null}
      </ContainerBackground>
    </div>
  );
}
