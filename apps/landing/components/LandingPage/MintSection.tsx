import Button from '../../common/Button';
import { useState } from 'react';
import MintCalculator from './MintCalculator';
import { classNames } from '../../utils';

const FIXED_NUMBER = new Array(20).fill(0).map((_, index) => index + 1);

const defaultWrapperClass =
  'space-y-5 max-w-xl mx-auto text-center bg-slate-100 shadow-gray-300/50 p-6 rounded-lg shadow-lg';

const MintSection = ({ className }: { className?: string }) => {
  const [selectedVl, setSelectedVl] = useState(1);
  return (
    <div className={classNames(defaultWrapperClass, className)} id="mint-box">
      <h4 className="font-bold text-teal-400 text-2xl">Get your Hedgie</h4>
      <div className="space-x-3">
        <select
          onChange={(e: any) => setSelectedVl(e.target.value)}
          className="border-none w-20 text-xl py-2 px-3 ring-1 ring-teal-400 shadow-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400 caret-teal-400"
          placeholder="Number of Hedgie"
        >
          {FIXED_NUMBER.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <span>x</span>
        <MintCalculator quantity={selectedVl} />
      </div>
      <Button className="w-64 btn btn-cyan">MINT</Button>
    </div>
  );
};

export default MintSection;
