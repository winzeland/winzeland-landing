import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 mb-3">
      <div className="container flex flex-row justify-between items-center text-xs font-300">
        <div>&copy; yonder.network</div>
        <div>
          <a href="mailto:rytis@yonder.network">rytis@yonder.network</a>
        </div>
      </div>
    </footer>
  );
};
