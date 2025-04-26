
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactInput from './ContactInput';
import ContactMessage from './ContactMessage';
import { validateEmail, validatePhone } from '@/utils/formValidation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form data:', formData);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <ContactInput
        label="Name"
        type="text"
        value={formData.name}
        onChange={(value) => updateField('name', value)}
        error={errors.name}
        placeholder="Your name"
        required
      />
      
      <ContactInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => updateField('email', value)}
        error={errors.email}
        placeholder="your.email@example.com"
        required
      />
      
      <ContactInput
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(value) => updateField('phone', value)}
        error={errors.phone}
        placeholder="+1234567890"
      />
      
      <ContactMessage
        value={formData.message}
        onChange={(value) => updateField('message', value)}
        error={errors.message}
        required
      />
      
      <Button type="submit" className="w-full">
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
