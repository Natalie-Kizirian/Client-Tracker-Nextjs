import FormShell from "./form-shell";

export default function AppointmentForm({ onClose }) {
  return (
    <FormShell onClose={onClose}>
      <h2>Appointment Details</h2>
      <div className="flex flex-col gap-2">
        <div>
          <label>Date</label>
          <input type="date" required />
        </div>
        <div>
          <label>Service</label>
          <input required />
        </div>
        <div>
          <label>Price</label>
          <input required />
        </div>
        <div>
          <label>Tips</label>
          <input required />
        </div>
      </div>
    </FormShell>
  );
}
