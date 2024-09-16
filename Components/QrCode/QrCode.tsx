import React from 'react';
import QRCode from 'react-qr-code';

interface MyComponentProps {
  value: string | undefined; // Allow value to be undefined
}

const QRCodee: React.FC<MyComponentProps> = ({ value }) => {
  if (value === undefined) {
    return null; // or any other handling for undefined value
  }

  return (
    <div>
      
      <QRCode value={value} size={150} />
    </div>
  );
};

export default QRCodee;