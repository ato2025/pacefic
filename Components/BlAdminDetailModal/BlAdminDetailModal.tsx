import React from "react";

type Props = { title: string; subTitle: string };

function BlAdminDetailModal({ title, subTitle }: Props) {
  return (
    <div className="px-4 my-5">
      <div className="text-gray-800 ">{title}</div>
      <div className="text-white">{subTitle}</div>
    </div>
  );
}

export default BlAdminDetailModal;
