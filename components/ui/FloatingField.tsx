"use client";

import { useId, useState } from "react";

interface FloatingFieldProps {
  id?: string;
  name: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  required?: boolean;
  autoComplete?: string;
  options?: string[];
  rows?: number;
  variant?: "light" | "dark";
}

export function FloatingField({
  id: propId,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  options,
  rows = 5,
  variant = "dark",
}: FloatingFieldProps) {
  const generatedId = useId();
  const id = propId ?? generatedId;
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const isDark = variant === "dark";

  const isActive = focused || hasValue;

  const baseInputClass = isDark
    ? "peer w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 text-[15px] text-white outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-transparent focus:border-purple/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.15),0_0_32px_rgba(139,92,246,0.12),inset_0_0_20px_rgba(0,191,255,0.04)]"
    : "peer w-full rounded-2xl border border-black/[0.08] bg-white px-4 text-sm text-black outline-none transition-all duration-300 focus:border-purple/40 focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12),0_0_24px_rgba(139,92,246,0.08)]";

  const labelActive = isDark
    ? "-top-2.5 bg-[#0f0f0f] px-2 text-[11px] font-medium text-purple"
    : "-top-2.5 bg-white px-1.5 text-[11px] font-medium text-purple";

  const labelInactive = isDark
    ? "top-1/2 -translate-y-1/2 text-[15px] text-white/35"
    : "top-1/2 -translate-y-1/2 text-sm text-gray";

  const labelClass = `pointer-events-none absolute left-5 transition-all duration-300 ${
    isActive ? labelActive : labelInactive
  }`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setHasValue(e.target.value.length > 0);
  };

  if (type === "textarea") {
    return (
      <div className="relative pt-3">
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          className={`${baseInputClass} resize-none py-6`}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-5 transition-all duration-300 ${
            isActive ? labelActive : "top-6 text-[15px] text-white/35"
          }`}
        >
          {label}
        </label>
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="relative pt-3">
        <select
          id={id}
          name={name}
          required={required}
          defaultValue=""
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          className={`${baseInputClass} h-[60px] appearance-none`}
        >
          <option value="" disabled hidden />
          {options?.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0a0a0a] text-white">
              {opt}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={`${labelClass} ${!hasValue && !focused ? "top-1/2" : "-top-2.5 translate-y-0"}`}
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative pt-3">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
        className={`${baseInputClass} h-[60px]`}
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}
