"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          success: "bg-green-700 text-white border-green-700",
          error: "bg-red-600 text-white border-red-700",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
