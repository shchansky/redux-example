import React from "react";

type Props = {
  text: string;
  handleSubmit: () => void;
  handleInput: (ev: React.ChangeEvent<HTMLInputElement>) => void
};

export const InputField = (props: Props) => {
  const { text, handleSubmit, handleInput } = props;
  return (
    <label>
      <input type="text" value={text} onChange={handleInput} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};
