"use client";

import { CustomButtonProps } from "@/types";

const Button = ({
  containerStyles,
  title,
  handleClick,
  btnType,
}: CustomButtonProps) => (
  <button
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

export default Button;
