import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  containerStyles?: string;
  title: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
