import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150`}
    >
      Get Started
    </button>
  );
};

export default Button;
