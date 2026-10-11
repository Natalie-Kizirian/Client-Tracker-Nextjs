export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div>
      <div
        className="fixed inset-0 z-30 bg-black opacity-45"
        onClick={onCancel}
      />
      <div className="bg-surface fixed top-1/3 left-1/2 z-40 flex -translate-x-1/2 flex-col gap-4 rounded-md p-4 drop-shadow-lg min-[320px]:w-[80vw] lg:w-1/3">
        <p>{message}</p>
        <div className="flex gap-5">
          <button
            type="button"
            onClick={onCancel}
            className="stroke-button-md w-full"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="secondary-button-md w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
