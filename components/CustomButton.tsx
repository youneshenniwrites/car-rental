"use client";

import { CustomButtonProps } from "@/types";

const Button = ({ containerStyles, title, handleClick }: CustomButtonProps) => (
  <button className={`custom-btn ${containerStyles}`} onClick={handleClick}>
    {title}
  </button>
);

export default Button;
