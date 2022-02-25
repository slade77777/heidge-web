import React, { useState } from 'react';
import CheckingResult from './CheckingResult';
import useCheckingResult from '../hooks/useCheckingResult';

const CheckForm = () => {
  const [color, setColor] = useState('');

  const { fetchData, isLoading, error, data } = useCheckingResult();

  function handleSubmit(e: any) {
    e.preventDefault();
    if (color.length) {
      fetchData(color);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="lg:inline-block rounded-md">
      <input
        className="py-2 px-3 border border-gray-400 rounded-md font-bold placeholder:text-gray-400 focus:outline-teal-400"
        name="color"
        value={color}
        disabled={isLoading === 'loading'}
        onChange={(e: any) => setColor(e.target.value)}
        placeholder="Hex code"
      />
      <button
        type="submit"
        className="ml-3 btn btn-cyan py-2 w-28 disabled:bg-teal-200 shadow-none"
        disabled={isLoading === 'loading' || !color.length}
      >
        Check
      </button>
      <div />
      <CheckingResult
        canTakeGen3={data?.canTakeGen3}
        errorMsg={error?.message}
        isLoading={isLoading}
      />
    </form>
  );
};

export default CheckForm;
