import Link from "next/link";
export default function ClientCard({ id,slug,name, income, appointments }) {
  return (
    <Link href={`/clients/${slug}`}>
      <ul className="bg-surface border-background flex flex-col gap-1 rounded-xl border p-2 shadow-sm">
        <h1> {name}</h1>
        <p>Total Income : {income}$ </p>
        <p>Appointments : {appointments}</p>
      </ul>
    </Link>
  );
}
