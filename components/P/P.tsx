import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

export const P: React.FC<
  React.DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({ children, className, ...props }) => {
  return (
    <p className={classNames('mt-4 font-light', className)} {...props}>
      {children}
    </p>
  );
};
