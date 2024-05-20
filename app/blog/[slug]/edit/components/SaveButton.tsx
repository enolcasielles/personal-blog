"use client";

import { PropsWithChildren } from "react"

interface Props {}

const SaveButton = ({}: PropsWithChildren<Props>) => {
  return (
    <button onClick={() => {}} className='bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full font-bold'>Guardar</button>
  );
};

export default SaveButton;