import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface AppButtonProps {
  title: string;
  nav?: string;
  icon?: boolean;
  size?: ButtonSize | string;
  handleClick?: () => void;
}

enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  nav,
  icon,
  size,
  handleClick,
}: AppButtonProps) => {
  let buttonClass = "";

  return (
    <div>
      <Link href="">
        <button onClick={handleClick} className={"bg-blue-500 p-2 rounded-lg"}>
          {title}
        </button>
      </Link>
    </div>
  );
};
