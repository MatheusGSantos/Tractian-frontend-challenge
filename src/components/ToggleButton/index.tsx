import { ComponentProps, memo } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "py-1 px-2 text-white rounded-sm flex items-center justify-center gap-2 font-inter font-semibold",
  ],

  variants: {
    color: {
      primary: "bg-blue-secondary",
      ghost: "bg-transparent text-gray-darker border border-gray-light",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
    toggled: {
      false: "",
    },
  },

  compoundVariants: [
    {
      color: "primary",
      toggled: true,
      class: "bg-blue-primary",
    },
    {
      color: "ghost",
      toggled: true,
      class: "bg-blue-primary border-blue-primary text-white",
    },
  ],
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export const ToggleButton = memo(
  ({
    color = "primary",
    disabled = false,
    toggled = false,
    className,
    ...props
  }: ButtonProps) => {
    return (
      <button
        {...props}
        className={button({
          color,
          disabled,
          toggled,
          className,
        })}
      />
    );
  }
);
