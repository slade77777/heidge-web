import React, { useState } from 'react';
import Layout from '../components/Layout';
import CheckingResult from '../components/CheckingResult';
import useCheckingResult from '../hooks/useCheckingResult';

const CheckPage = () => {
  const [color, setColor] = useState('');

  const { fetchData, isLoading, error, data } = useCheckingResult();

  function handleSubmit(e: any) {
    e.preventDefault();
    fetchData(color);
  }
  return (
    <Layout>
      <div className="mx-auto max-w-5xl py-4 lg:py-10 px-4 lg:px-0">
        <h3 className="font-bold pb-3 text-gray-600">Check Hedgie color</h3>
        <form onSubmit={handleSubmit} className="space-x-3">
          <input
            className="py-2 px-3 border border-teal-400 rounded-md font-bold placeholder:text-gray-400"
            name="color"
            value={color}
            disabled={isLoading === 'loading'}
            onChange={(e: any) => setColor(e.target.value)}
            placeholder="e.g. 090909"
          />
          <button
            type="submit"
            className="btn btn-cyan py-2 w-28 disabled:bg-teal-200"
            disabled={isLoading === 'loading'}
          >
            Check
          </button>
          <CheckingResult
            canTakeGen3={data?.canTakeGen3}
            errorMsg={error?.message}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Layout>
  );
};

export default CheckPage;
