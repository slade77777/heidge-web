import React from "react";
import { useState } from "react";
import TopPlayer from "./TopPlayer";

const filterBy = ["Last 7 days", "Last 30 days", "All Time"];
const tabClass =
  "relative flex justify-center mx-6 text-base md:text-xl font-medium cursor-pointer before:transition-all before:absolute before:-bottom-2 before:h-1 hover:before:w-full before:bg-h_cyan-100";

const LeaderBoard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container max-w-5xl mx-auto">
      <h1 className="text-h_cyan-100 py-9 text-center text-3xl font-bold">
        Leaderboard
      </h1>

      <div className="flex justify-center py-3">
        {filterBy.map((type, idx) => (
          <div
            key={idx}
            className={`${tabClass} ${
              activeTab === idx ? "before:w-full" : "before:w-0"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {type}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col">
        {Array(10)
          .fill(null)
          .map((item, key) => (
            <TopPlayer
              key={key}
              rank={key + 1}
              name="james"
              total={208.87}
              color="#146c9f"
            />
          ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
