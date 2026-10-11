"use client";
import { useState } from "react";
import FormShell from "./form-shell";
import { addClient, updateClient, deleteClient } from "@/lib/actions";
import ConfirmModal from "./confirm-modal";

export default function ClientForm({ onClose, client }) {
  const handleSubmit = async (formData) => {
    if (client) {
      await updateClient(client.id, formData);
    } else {
      await addClient(formData);
    }

    onClose();
  };
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    await deleteClient(client.id);
    onClose();
  };
  return (
    <FormShell
      onClose={onClose}
      action={handleSubmit}
      submitLabel={client ? "Save" : "Add"}
      onDelete={client ? () => setShowConfirm(true) : undefined}
    >
      <div className="flex w-full flex-col gap-2">
        <h2>Client Information</h2>
        <div>
          <label>Name</label>
          <input name="name" type="text" required defaultValue={client?.name} />
        </div>
        <textarea
          name="note"
          maxLength={75}
          placeholder="Add a note"
          defaultValue={client?.note}
        />
        <select
          className="bg-background w-full rounded-lg border border-white p-2 text-sm shadow-sm focus:outline-none"
          name="status"
          defaultValue={client?.status}
        >
          <option value="new">New Client</option>
          <option value="active">Active Client</option>
          <option value="one-time">One-time Client</option>
          <option value="inactive">Inactive Client</option>
        </select>
      </div>
      {showConfirm && (
        <ConfirmModal
          message="Delete this client and all their appointments?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </FormShell>
  );
}
