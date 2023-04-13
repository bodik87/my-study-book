import React from "react";

// Варіант 1
type ComponentProps = {
  text: string;
  age: number;
};

export const Component: React.FC<ComponentProps> = ({
  text,
  age,
}: ComponentProps): JSX.Element => {
  return <div>{text}</div>;
};

// Варіант 2
type Component_2_Props = {};

export const Component_2: React.FC<{}> =
  ({}: Component_2_Props): JSX.Element => {
    return (
      <div className="">
        <h1>Component_2</h1>
      </div>
    );
  };

// Варіант 3
type Component_3_Props = {};

export default function Component_3({}: Component_3_Props) {
  return <div>Component</div>;
}

const Layout: React.FC = (): any => {};
