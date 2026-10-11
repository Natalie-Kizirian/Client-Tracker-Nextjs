import Link from "next/link";

export default function NotFound() {
  return (
    <div className="itmes-center flex flex-col gap-3">
      <h2 className="text-center">Client not found</h2>
      <Link className="secondary-button-md" href="/clients">
        Back to clients
      </Link>
    </div>
  );
}
