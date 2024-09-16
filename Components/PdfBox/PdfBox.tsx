import React from "react";
type props = {
  title: string;
  subTitle: string;
  height?: string;
  border?: boolean;
};
function PdfBox({ title, subTitle, height, border }: props) {
  return (
    <div
      className={` ${border && "border-b"} px-4 pb-2 border-black ${
        height ? height : ""
      }`}
    >
      <div className="blSectionTitle mt-2 mb-5">{title}</div>
      <div className="pdf-md-title">{subTitle}</div>
    </div>
  );
}

export default PdfBox;
