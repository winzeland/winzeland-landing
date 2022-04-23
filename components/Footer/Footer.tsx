import { Subscribe } from 'components/Subscribe/Subscribe';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="bg-green-900 pt-12">
      <Subscribe />
      <footer className="mt-12 pb-3 text-white">
        <div className="container flex flex-row justify-between items-center text-xs font-300">
          <div>&copy; winzeland.com</div>
          <div>
            <a href="mailto:rytis@winzeland.com">rytis@winzeland.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
