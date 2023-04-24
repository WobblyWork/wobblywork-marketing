import React from "react";

export default function ContentEmphasis (props: { children: string }) {
  return (
    <>
      <span className="font-bold text-blue-200">
        {props.children}
      </span>
    </>
  );
}
