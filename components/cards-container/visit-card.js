export default function VisitCard({ service, date, price, tips, payment }) {
  const formattedDate = new Date(date).toLocaleDateString("el-GR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const infoStyle = "bg-background rounded-md px-1.5 py-1 w-full text-center";
  return (
    <div className="bg-surface border-background flex flex-col gap-1 rounded-xl border p-2 shadow-sm">
      <h1 className="font-semibold">{service}</h1>

      <div className="border-secondary flex gap-2 justify-between border-b pb-2">
        <p className={infoStyle}>{formattedDate}</p>
        <p className={infoStyle}>{price}$</p>
        <p className={infoStyle}>Τips:{tips}$ </p>
        <p className={infoStyle}>{payment}</p>
      </div>

      <p className="text-sm font-semibold">Total Amount: {Number(price) + Number(tips)}$</p>
    </div>
  );
}
