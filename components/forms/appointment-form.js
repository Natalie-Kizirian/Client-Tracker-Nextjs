"use client";
import FormShell from "./form-shell";
import { addAppointments, updateVisit, deleteVisit } from "@/lib/actions";
import { useState } from "react";
import ConfirmModal from "./confirm-modal";

export default function AppointmentForm({ onClose, clientId, appointment }) {
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (formData) => {
    if (appointment) {
      await updateVisit(appointment.id, formData);
    } else {
      await addAppointments(clientId, formData);
    }
    onClose();
  };
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    await deleteVisit(appointment.id);
    onClose();
  };
  return (
    <FormShell
      onClose={onClose}
      action={handleSubmit}
      submitLabel={appointment ? "Save" : "Add"}
      onDelete={appointment ? () => setShowConfirm(true) : undefined}
    >
      <div className="flex w-full flex-col gap-2">
        <h2>Appointment Details</h2>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            defaultValue={appointment?.date || today}
            required
          />
        </div>
        <div>
          <label>Service</label>
          <input name="service" required defaultValue={appointment?.service} />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type="number" defaultValue={appointment?.price} />
        </div>
        <div>
          <label>Tips</label>
          <input name="tips" type="number" defaultValue={appointment?.tips} />
        </div>
        <div>
          <select name="payment" defaultValue={appointment?.payment}>
            Card/Cash
            <option>Cash</option>
            <option>Card</option>
          </select>
        </div>
      </div>
      {showConfirm && (
        <ConfirmModal
          message="Delete thsi appointment?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </FormShell>
  );
}
