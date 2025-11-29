export default function PreviewModal({ children, onClose }) {
  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={closeHandler}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 transition-all duration-300 ease-in-out"
    >
      <div className="max-h-fit max-w-fit overflow-auto rounded-md bg-white p-4">
        <div
          className="origin-top-left h-120
          scale-[0.55] sm:scale-[0.7] md:scale-90 lg:scale-100
          transition-transform duration-300 ease-in-out"
        >
          {children}
        </div>
        <button
          className="w-full py-2 bg-blue-400 text-white text-2xl rounded active:scale-95 active:bg-blue-600 transition-all duration-200 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
