const SmallButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-5 py-2
        bg-neutral-800 text-white
        text-sm
        rounded-xl
        font-intersemibold
      "
    >
      {text}
    </button>
  );
};

export default SmallButton;