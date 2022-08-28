import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AuthAtom } from "../../state";
import { Bar, CardPlacer, CardWrapper, DateWrap, GoToCards, ProfilePageWrapper, ProgressWrap, StandardWrap, SubscribeWrap } from "./style";

function ProgressBar({ percentage }) {
  return (
    <ProgressWrap>
      <div className="barWrap">
        <Bar>
          <div className="length" style={{ width: `${percentage}%` }} />
        </Bar>
      </div>
      <div className="date">
        <div sty>Start date</div>
        <div style={{ textAlign: "right" }}>Expiry Date</div>
      </div>
    </ProgressWrap>
  );
}
function Card({ startDate = "", endDate = "" }) {
  const [completion, setCompletion] = useState(0);
  const [year, setYear] = useState("");

  useEffect(() => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    const diffTime = end - start;
    const progress = now - start;

    const expire = (progress / diffTime) * 100;

    setCompletion(expire > 100 ? 100 : expire);
    const y = diffTime / (1000 * 60 * 60 * 24 * 365);

    setYear(y.toFixed(2));
  }, []);

  return (
    <CardPlacer>
      <CardWrapper>
        <StandardWrap>
          <div className="name">
            <h4>CLASS VI</h4>
          </div>
          <div className="buttonWrap">
            <div className="button">G O L D</div>
          </div>
        </StandardWrap>
        <SubscribeWrap>
          <div>
            <h1>Chemistry</h1>
          </div>
          <div className="sub">
            <span>
              Subscription:<b>{year} YEAR</b>
            </span>
          </div>
        </SubscribeWrap>
        <ProgressBar percentage={completion} />
        <DateWrap>
          <div>
            <h3 style={{ color: " #a3aee5" }}>
              {new Date(endDate).toLocaleString("en-us", { year: "numeric", month: "short", day: "numeric", formatMatcher: "basic" })}
            </h3>
          </div>
          <div style={{ textAlign: "right", color: "#fd94a7" }}>
            <h3>{new Date(endDate).toLocaleString("en-us", { year: "numeric", month: "short", day: "numeric", formatMatcher: "basic" })}</h3>
          </div>
        </DateWrap>
      </CardWrapper>
    </CardPlacer>
  );
}

export default function Index() {
  const auth = useRecoilValue(AuthAtom);
  return (
    <ProfilePageWrapper>
      {!!auth.licenseStartDate === true && (
        <>
          <Card startDate={auth.licenseStartDate} endDate={auth.licenseEndDate} />
          <Card startDate={new Date("06-12-2022").toString()} endDate={new Date("06-12-2023").toString()} />
        </>
      )}

      <GoToCards style={{ marginLeft: "0px" }}>
        <Link to="/cards">Go to Cards</Link>
      </GoToCards>
    </ProfilePageWrapper>
  );
}
