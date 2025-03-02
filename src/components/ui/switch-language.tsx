"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const SwitchLanguage = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-[50px] w-[98px] px-1.5 py-2 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#231F2021] data-[state=unchecked]:bg-[#231F2021] text-sm",
        className
      )}
      checked={isChecked}
      onCheckedChange={setIsChecked}
      {...props}
      ref={ref}
    >
      {isChecked && <span className="text-white font-bold ml-2">VIE</span>}
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none h-10 w-10 rounded-full bg-[#2F2E79] font-bold leading-10 text-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 flex items-center justify-center"
        )}
      >
        {isChecked ? "ENG" : "VIE"}
      </SwitchPrimitives.Thumb>
      {!isChecked && <span className="text-white font-bold ml-2">ENG</span>}
    </SwitchPrimitives.Root>
  );
});
SwitchLanguage.displayName = SwitchPrimitives.Root.displayName;

export { SwitchLanguage };
