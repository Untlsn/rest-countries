import React from 'react';

interface InformationPointProps {
  name: string,
  data: string
}

const InformationPoint = ({ name, data }: InformationPointProps) => {
  return (
    <p><b>{name}:</b> {data}</p>
  );
};

export default InformationPoint;