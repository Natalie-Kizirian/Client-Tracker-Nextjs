import FormShell from "./form-shell";

export default function ClientForm({ onClose }) {
  return (
    <FormShell onClose={onClose}>
      <h2>Client Information</h2>
      <div className="flex flex-col gap-2">
        <div>
          <label>Name</label>
          <input type="text" required />
        </div>

        <textarea maxLength={75} placeholder="Add a note" />
        <select
          className="bg-background w-full rounded-lg border border-white p-2 text-sm shadow-sm focus:outline-none"
          name="status"
        >
          <option value="new">New Client</option>
          <option value="active">Active Client</option>
          <option value="one-time">One-time Client</option>
          <option value="inactive">Inactive Client</option>
        </select>
        {/* <button className="text-primary text-right">Delete client</button> */}
      </div>
    </FormShell>
  );
}
