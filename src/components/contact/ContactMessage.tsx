
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactMessageProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

const ContactMessage = ({
  value,
  onChange,
  error,
  required = false
}: ContactMessageProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">
        Message {required && <span className="text-red-500">*</span>}
      </Label>
      <Textarea
        id="message"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Your message..."
        className={`min-h-[120px] ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ContactMessage;
