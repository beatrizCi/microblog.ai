import { useState, useCallback } from 'react';
import { FormState, ToneOfVoice } from '@/types';
import { ValidationResult, validateFormData } from '@/shared/services/langchain/utils/retry/validation';

interface UseFormValidationReturn {
  formData: FormState;
  errors: Partial<FormState>;
  isValid: boolean;
  updateField: (field: keyof FormState, value: string | ToneOfVoice) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  clearErrors: () => void;
}

const initialFormState: FormState = {
  topic: '',
  toneOfVoice: 'casual',
  keywords: '',
};

export const useFormValidation = (): UseFormValidationReturn => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const updateField = useCallback((field: keyof FormState, value: string | ToneOfVoice) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const validateForm = useCallback((): boolean => {
    const result: ValidationResult = validateFormData(formData);
    setErrors(result.errors);
    return result.isValid;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setErrors({});
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    formData,
    errors,
    isValid: Object.keys(errors).length === 0,
    updateField,
    validateForm,
    resetForm,
    clearErrors
  };
};