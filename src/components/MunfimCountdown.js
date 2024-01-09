// import { useCountdown } from "../useCountdown";

// const MunfimCountdown = () => {
//   const [days, hours, minutes, seconds] = useCountdown(
//     `${new Date().getMonth() + 1} ${
//       new Date().getDate() + 20
//     } , ${new Date().getFullYear()} 00:00:00`
//   );

//   return (
//     <ul className="count-down mt-35">
//       <li>
//         <span id="days">{days > 9 ? days : `0${days}`}</span>days
//       </li>
//       <li>
//         <span id="hours">{hours > 9 ? hours : `0${hours}`}</span>Hours
//       </li>
//       <li>
//         <span id="minutes">{minutes > 9 ? minutes : `0${minutes}`}</span>Minutes
//       </li>
//       <li>
//         <span id="seconds">{seconds > 9 ? seconds : `0${seconds}`}</span>Seconds
//       </li>
//     </ul>
//   );
// };
// export default MunfimCountdown;







import { useState } from "react";

import ScrollTrigger from "react-scroll-trigger";
import CountUp from 'react-countup';

const MunfimCountdown = () => {

  const [counterStart, setCounterStart] = useState(false);

  return (

    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="position-relative" style={{ zIndex: '1', height: 'auto' }}>
            <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-2 px-md-15 count-down">
                <div className="col">
                  <div className="counters-box bg-white p-10 br-10 mb-10" style={{ height: '140px', }}>
                    <h5 className="pb-2">AWARDS WON</h5>
                    <h4 className="counter color-secondary">
                      {counterStart && <CountUp start={0} end={19} duration={2} delay={0} />}
                    </h4>
                  </div>
                </div>
                <div className="col">
                  <div className="counters-box bg-white p-10 br-10 mb-10" style={{ height: '140px', }}>
                    <h5 className="pb-2">CLIENTS</h5>
                    <h4 className="counter color-secondary" >
                      {counterStart && <CountUp start={0} end={108} duration={2} delay={0} />}
                    </h4>
                  </div>
                </div>
                <div className="col">
                  <div className="counters-box bg-white p-10 br-10 mb-10" style={{ height: '140px', }}>
                    <h5 className="pb-2">XP YEAR</h5>
                    <h4 className="counter color-secondary">
                      {counterStart && <CountUp start={0} end={12} duration={2} delay={0} />}+
                    </h4>
                  </div>
                </div>
                <div className="col">
                  <div className="counters-box bg-white p-10 br-10 h-300 w-250 mb-10" style={{ height: '140px', }}>
                    <h5 className="pb-2">Products</h5>
                    <h4 className="counter color-secondary">
                      {counterStart && <CountUp start={0} end={150} duration={2} delay={0} />}
                    </h4>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
            <div
              className="position-absolute"
              style={{
                height: '200px',
                width: '100%',
                marginTop: '-5px',
                backgroundImage: 'url(/slides/slide1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
    </div>

  );
};
export default MunfimCountdown;
