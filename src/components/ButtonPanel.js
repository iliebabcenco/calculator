import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="button-panel">
      <>
        <Button content={1} />
        <Button content={2} />
        <Button content={3} />
        <Button content="<-" />
        <Button content={4} />
        <Button content={5} />
        <Button content={6} />
        <Button content="C" />
        <Button content={7} />
        <Button content={8} />
        <Button content={9} />
        <Button content={0} />
        <Button content="+" />
        <Button content="-" />
        <Button content="*" />
        <Button content="/" />
        <Button content="(" />
        <Button content=")" />
      </>
    </div>
  );
}

export default ButtonPanel;
