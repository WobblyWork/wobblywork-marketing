import React from "react";

export default function ContentEmphasis (props: { children: string }) {
  return (
    <>
      <span className="font-semibold text-blue-200">
        {props.children}
      </span>
    </>
  );
}
