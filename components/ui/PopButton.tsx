import React from 'react';

interface PopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  label: string;
}

const PopButton: React.FC<PopButtonProps> = ({ variant = 'primary', label, className = '', ...props }) => {
  const baseStyle = "px-6 py-3 font-bold text-xl uppercase border-4 border-black box-shadow-hard transition-all active:translate-x-1 active:translate-y-1 active:shadow-none hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]";
  
  let colorStyle = "";
  switch (variant) {
    case 'secondary':
      colorStyle = "bg-white text-black hover:bg-gray-100";
      break;
    case 'danger':
      colorStyle = "bg-red-500 text-white hover:bg-red-400";
      break;
    case 'primary':
    default:
      colorStyle = "bg-cyan-400 text-black hover:bg-cyan-300";
      break;
  }

  return (
    <button className={`${baseStyle} ${colorStyle} ${className}`} {...props}>
      {label}
    </button>
  );
};

export default PopButton;