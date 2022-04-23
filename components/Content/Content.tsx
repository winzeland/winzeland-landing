import classNames from 'classnames';
import React, { PropsWithChildren, useMemo } from 'react';
import { hasClassPrefix } from 'utils/helpers';

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
        <header
          className={classNames(
            'z-30',
            !hasClassPrefix('pt-', headerClassName) && 'pt-32',
            headerClassName,
          )}
        >
          {header}
        </header>
      );
    }
    return null;
  }, [header, headerClassName]);

  return (
    <main
      className={classNames(
        !maybeRenderHeader && !hasClassPrefix('pt-', className) && 'pt-32',
        className,
      )}
    >
      {maybeRenderHeader}
      <div
        className={classNames(
          !!maybeRenderHeader &&
            !hasClassPrefix('pt-', contentClassName) &&
            'pt-8',
          contentClassName,
        )}
      >
        {children}
      </div>
    </main>
  );
};
