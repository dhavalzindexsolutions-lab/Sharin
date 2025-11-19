const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full h-12
        bg-neutral-800 text-white
        rounded-xl
        font-intersemibold
      "
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
