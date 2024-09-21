import React from "react";

const AuthButton = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="bg-custom-blue text-white py-3 px-4 rounded-full w-96 mt-6"
    >
      {text}
    </button>
  );
};

export default AuthButton;
