'use client';
import { BtnList } from '@/app/data';
import React from 'react';

const Navigation = () => {
  return (
    <div className="flex items-center justify-between relative">
      {BtnList.map((btn: any, index: number) => {
        return <button key={index}>{btn.label}</button>;
      })}
    </div>
  );
};

export default Navigation;