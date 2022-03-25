import React from "react";
import { useState } from "react";
import { useQuery } from "shared";
import { getRanking } from "../../api/rank";
import { rankType, rankTypeName } from "../../constants/enum";
import TopPlayer from "./TopPlayer";

const tabClass =
  "relative flex justify-center mx-6 text-base md:text-xl font-medium cursor-pointer before:transition-all before:absolute before:-bottom-2 before:h-1 hover:before:w-full before:bg-h_cyan-100";

const LeaderBoard = () => {
  const [activeTab, setActiveTab] = useState(rankType.w);
  const { data } = useQuery(
    ["/leader-board/ranking", activeTab],
    () => getRanking(activeTab),
    {
      enabled: !!activeTab,
    }
  );

  return (
    <div className="container max-w-5xl mx-auto">
      <h1 className="text-h_cyan-100 py-9 text-center text-3xl font-bold">
        Leaderboard
      </h1>

      <div className="flex justify-center py-3">
        {Object.keys(rankType).map((type) => (
          <div
            key={type}
            className={`${tabClass} ${
              activeTab === type ? "before:w-full" : "before:w-0"
            }`}
            onClick={() => setActiveTab(type as rankType)}
          >
            {rankTypeName[type]}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col">
        {data?.data?.map((item, key) => (
          <TopPlayer
            key={key}
            rank={item.rank}
            name={item.ownerName}
            total={item.curioFound}
            color={`#${item.color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
