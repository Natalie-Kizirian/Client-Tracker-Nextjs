export default function VisitCard({ service, date, price, tips, payment }) {
  return (
    <div className="bg-surface border-background flex flex-col gap-1 rounded-xl border p-2 shadow-sm">
      <h1>{service}</h1>

      <div className="border-secondary flex justify-between border-b">
        <p>{date}</p>
        <p>{price}$</p>
        <p>{tips}$ tips</p>
        <p>{payment}</p>
      </div>

      <p>Total Amount: {Number(price) + Number(tips)}$</p>
    </div>
  );
}
