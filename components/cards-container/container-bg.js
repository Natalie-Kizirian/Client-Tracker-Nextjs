export default function ContainerBackground({ children }) {
  return (
    <div className="bg-secondary w-full rounded-xl px-3 py-6 text-black flex flex-col gap-3 shadow-md">
      {children}
    </div>
  );
}
