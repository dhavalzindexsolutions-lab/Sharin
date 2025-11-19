const SocialButton = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full h-12 p-2
        flex items-center justify-center gap-3
        bg-neutral-100
        rounded-xl
        text-black text-lg font-interblack
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default SocialButton;
