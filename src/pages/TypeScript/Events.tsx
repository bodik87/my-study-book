import React, { useRef, useState } from "react";

type Props = {
  title: string;
  myFunc: (id: number) => void;
};

export default function Events({ title = "Events" }: Props) {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    console.log("onInput", e);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onInput: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    console.log("onInput", e);
  };

  const onClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("onClick", e);
  };
  const onClick_v2: React.MouseEventHandler = (e) => {
    console.log("onClick", e);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) =>
    console.log("DRAG");

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") console.log("Enter pressed");
  };

  interface ModalProps {
    children: React.ReactNode;
    title: string;
  }
  const Modal = ({ children, title }: ModalProps) => {};

  return (
    <div className="p-4">
      <h1>{title}</h1>

      <form onSubmit={onSubmit}>
        <input
          className="border border-slate-400 my-2 px-4 py-2 rounded-md"
          onInput={onInput}
        />

        <button
          className="bg-slate-400 rounded-md w-20 h-8 flex justify-center items-center hover:brightness-110 transition-all"
          onClick={onClick}
          type="submit"
        >
          Ok
        </button>
      </form>
    </div>
  );
}
