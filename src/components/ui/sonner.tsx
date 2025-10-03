"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      toastOptions={{
        classNames: {
          // Ensure text is white regardless of Sonner's internal variant styles
          toast: "text-white",
          title: "text-white",
          description: "text-white",
          closeButton: "text-white",
          success: "bg-green-700 text-white border-green-700",
          error: "bg-red-600 text-white border-red-700",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
