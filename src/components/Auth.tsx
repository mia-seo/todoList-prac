import useInput from "../hooks/useInput";

export type Form = {
  email: string;
  password: string;
};

type Props = {
  page: string;
  onSubmit: (data: Form) => void;
};

export default function Auth({ page, onSubmit }: Props) {
  const { form, isValidate, handleChangeInput, handleSubmitForm } =
    useInput(onSubmit);

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        placeholder="email"
        value={form.email}
        onChange={handleChangeInput}
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={handleChangeInput}
      />
      <button data-testid={`${page}-button`} disabled={!isValidate}>
        {page}
      </button>
    </form>
  );
}
