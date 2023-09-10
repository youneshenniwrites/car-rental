import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  containerStyles?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
