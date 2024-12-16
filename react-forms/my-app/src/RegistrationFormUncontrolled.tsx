import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" type="username" placeholder="username" />
      </label>
      <label>
        Password:
        <input name="password" type="password" placeholder="password" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
