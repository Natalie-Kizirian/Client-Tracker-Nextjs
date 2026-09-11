export default function FormShell({ children, onClose }) {
  return (
    <div>
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-45"onClick={onClose} />

      <dialog
        open
        className="bg-surface fixed top-20 left-1/2 z-20 flex -translate-x-1/2 flex-col gap-4 rounded-md p-3 drop-shadow-lg min-[320px]:w-[85vw] lg:w-1/2"
      >
        {children}
        <div className="flex justify-between gap-5">
          <button
            type="button"
            onClick={onClose}
            className="stroke-button-md w-full"
          >
            Cancel
          </button>
          <button type="submit" className="primary-button-md w-full">
            Add
          </button>
        </div>
      </dialog>
    </div>
  );
}
