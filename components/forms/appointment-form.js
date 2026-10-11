"use client";
import FormShell from "./form-shell";
import { addAppointments, updateVisit } from "@/lib/actions";

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
  return (
    <FormShell
      onClose={onClose}
      action={handleSubmit}
      submitLabel={appointment ? "Save" : "Add"}
    >
      <h2>Appointment Details</h2>
      <div className="flex flex-col gap-2">
        <div>
          <label>Date</label>
          <input type="date" name="date" defaultValue={today} required />
          {/* defaultValue={selectedDate || today} */}
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
    </FormShell>
  );
}
