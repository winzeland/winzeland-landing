import classNames from 'classnames';
import React, { PropsWithChildren, useMemo } from 'react';

type ContentProps = {
  header?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
};

export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  children,
  header,
  className,
  headerClassName,
  contentClassName,
}) => {
  const maybeRenderHeader = useMemo(() => {
    if (header) {
      return (
        <header className={classNames('pt-32 z-30', headerClassName)}>
          {header}
        </header>
      );
    }
    return null;
  }, [header, headerClassName]);

  return (
    <main className={classNames(className, !maybeRenderHeader && 'pt-32')}>
      {maybeRenderHeader}
      <div
        className={classNames(contentClassName, !!maybeRenderHeader && 'pt-8')}
      >
        {children}
      </div>
    </main>
  );
};
