
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ContactInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

const ContactInput = ({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  required = false
}: ContactInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={label.toLowerCase()}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={error ? "border-red-500" : ""}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ContactInput;
