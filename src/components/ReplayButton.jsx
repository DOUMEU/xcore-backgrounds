import "./ReplayButton.css";

function ReplayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12a9 9 0 1 1 2.64 6.36M3 12V6m0 6h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReplayButton({ onClick }) {
  return (
    <button
      type="button"
      className="replay-button"
      onClick={onClick}
      aria-label="애니메이션 다시 재생"
      title="Replay"
    >
      <ReplayIcon />
    </button>
  );
}

export default ReplayButton;
