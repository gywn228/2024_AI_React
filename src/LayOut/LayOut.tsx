import { championRankingList } from "../Data/Data";
import Main from "../Main/Main";

const LayOut = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        {championRankingList.map((v, i) => (
          <Main
            lank={v.positionTierData.rank}
            elevator={v.positionTierData.rank_prev}
            championBox={v.image_url}
            championName={v.name}
            tier={v.positionTier}
            position={v.positionName}
            winning={v.positionWinRate}
            pick={v.positionPickRate}
            Ban={v.positionBanRate}
            championCircle={v.champion.image_url}
          />
        ))}
      </section>
    </main>
  );
};

export default LayOut;
