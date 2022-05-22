import React from 'react';
const Spanner = ({ children, color }: any) => {
  return <span className={`text-${color}-400`}>{children}</span>;
};

const Container = ({ space, color, children }: any) => {
  if (space === 'l') {
    return (
      <Spanner color={color}>
        <p>&nbsp;{children}</p>
      </Spanner>
    );
  }
  if (space === 'r') {
    return (
      <Spanner color={color}>
        <p>{children}&nbsp;</p>
      </Spanner>
    );
  }
  if (space === false) {
    return <Spanner color={color}>{children}</Spanner>;
  }
  return (
    <>
      <Spanner color={color}>
        <p>&nbsp;{children}&nbsp;</p>
      </Spanner>
    </>
  );
};
export default Container;
