export default function VisitCard() {
  return (
    <div className="bg-surface border-background flex flex-col rounded-xl border p-2 gap-1 shadow-sm">
      <h1>Service Title</h1>

      <div className="border-secondary flex justify-between border-b">
        <p>Date</p>
        <p>Price</p>
        <p>Tips</p>
        <p>Card/Cash</p>
      </div>

      <p>Total Amount: 20$</p>
    </div>
  );
}
