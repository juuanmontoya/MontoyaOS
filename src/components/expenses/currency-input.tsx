"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { formatColombianPesos, parseCurrencyInput } from "@/lib/currency";

type CurrencyInputProps = Omit<
  React.ComponentProps<typeof Input>,
  "value" | "onChange" | "type"
> & {
  value: number;
  onValueChange: (value: number) => void;
};

export function CurrencyInput({
  value,
  onValueChange,
  className,
  onBlur,
  onFocus,
  ...props
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = React.useState(() =>
    formatColombianPesos(value),
  );
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if (!isFocused) {
      setDisplayValue(formatColombianPesos(value));
    }
  }, [value, isFocused]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const parsed = parseCurrencyInput(event.target.value);
    onValueChange(parsed);
    setDisplayValue(formatColombianPesos(parsed));
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    setDisplayValue(formatColombianPesos(value));
    onBlur?.(event);
  }

  return (
    <Input
      {...props}
      type="text"
      inputMode="numeric"
      autoComplete="off"
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="$0"
      className={cn("text-lg font-medium tabular-nums tracking-tight", className)}
    />
  );
}
