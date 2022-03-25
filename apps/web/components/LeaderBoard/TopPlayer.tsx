import React, { FC } from "react";
import { Curio } from "shared/icons";
import HeidgeImg from "../HeidgeImg";

type Props = {
  rank: number;
  name: string;
  total: string;
  color?: string;
};

const TopPlayer: FC<Props> = ({ rank, name, total, color }) => {
  let tcolor = "";
  let bgcolor = "";
  let rankName = "";
  let hoverBgColor = "";
  switch (rank) {
    case 1:
      rankName = `${rank}st`;
      tcolor = `!text-rank-1`;
      bgcolor = `!border-l-rank-1`;
      hoverBgColor = `hover:before:bg-rank-1`;
      break;
    case 2:
      rankName = `${rank}nd`;
      tcolor = `!text-rank-2`;
      bgcolor = `!border-l-rank-2`;
      hoverBgColor = `hover:before:bg-rank-2`;
      break;
    case 3:
      rankName = `${rank}rd`;
      tcolor = `!text-rank-3`;
      bgcolor = `!border-l-rank-3`;
      hoverBgColor = `hover:before:bg-rank-3`;
      break;
    default:
      rankName = `${rank}th`;
      break;
  }

  const formatTotalCoin = (coin: string) => {
    return Math.round(parseInt(coin.slice(0, -15)) / 10) / 100;
  };

  return (
    <div
      className={`w-full relative before:absolute before:pointer-events-none before:top-0 before:left-0 before:h-full before:w-0 before:transition-all before:opacity-5 ${hoverBgColor} hover:before:w-full flex justify-between text-lg px-3 py-4 mb-2 md:px-24 border-t border-l-8 border-l-white ${bgcolor}`}
    >
      <div className="flex items-center w-1/2">
        <div className={`${tcolor}`}>{rankName}</div>
        <div className="mx-5 md:mx-14">
          <div className="w-10 h-10 md:w-20 md:h-20 overflow-hidden shadow-100 rounded-full relative bg-white">
            <div className="absolute md:top-3 md:left-2">
              <HeidgeImg
                color={color}
                width={70}
                className="!w-4 !h-4 max-h-4 max-w-4"
              />
            </div>
          </div>

          <div className="text-xs md:text-sm text-gray-400 text-center mt-1">
            {color}
          </div>
        </div>
        <div>{name}</div>
      </div>
      <div className="flex items-center w-1/2 justify-end">
        <Curio className="text-h_yellow-coin w-6 h-6 mr-2" />
        <div>{formatTotalCoin(total)}</div>
      </div>
    </div>
  );
};

export default TopPlayer;
