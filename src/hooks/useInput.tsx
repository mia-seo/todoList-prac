import React, { useState } from "react";
import { Form } from "../components/Auth";

type OnSubmit = (data: Form) => void;

export default function useInput(onSubmit: OnSubmit) {
  const [form, setForm] = useState(initialForm);
  const isValidate = form.email.includes("@") && form.password.length >= 8;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialForm);
  };

  return { form, isValidate, handleChangeInput, handleSubmitForm };
}

const initialForm = {
  email: "",
  password: "",
};
