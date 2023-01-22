import React from "react";

type Props = {
  value: string;
  setValue: (value:string) => void;
  handleSubmit: () => void;

};

export const InputField = (props: Props) => {
  const { value, handleSubmit, setValue } = props;
  return (
    <label>
      <input
        type="text"
        value={value}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setValue(ev.target.value)
        }
        placeholder="new todo"
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};
