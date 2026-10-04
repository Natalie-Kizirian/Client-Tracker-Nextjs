"use client";
import FormShell from "./form-shell";
import { addAppointments } from "@/lib/actions";

export default function AppointmentForm({ onClose, clientId }) {
  const today = new Date().toISOString().split("T")[0];
  const handleSubmit = async (formData) => {
    await addAppointments(clientId, formData);
    onClose();
  };
  return (
    <FormShell onClose={onClose} action={handleSubmit}>
      <h2>Appointment Details</h2>
      <div className="flex flex-col gap-2">
        <div>
          <label>Date</label>
          <input type="date" name="date" defaultValue={today} required />
          {/* defaultValue={selectedDate || today} */}
        </div>
        <div>
          <label>Service</label>
          <input name="service" required />
        </div>
        <div>
          <label>Price</label>
          <input name="price" />
        </div>
        <div>
          <label>Tips</label>
          <input name="tips" />
        </div>
        <div>
          <select name="payment">
            Card/Cash
            <option>Cash</option>
            <option>Card</option>
          </select>
          {/*  <input name="tips" /> */}
        </div>
      </div>
    </FormShell>
  );
}
