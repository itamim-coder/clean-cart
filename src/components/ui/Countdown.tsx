"use client";

import { useCallback, useEffect, useState } from "react";

const Countdown = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 sm:gap-8">
        <div className="flex justify-center gap-3 sm:gap-8">
          {/* Days */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-16 w-16 sm:w-24 sm:h-24 lg:w-16 lg:h-16 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 !-left-[4px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-lg sm:text-2xl text-xl font-semibold text-[#a5b4fc]">
                <span className="text-[#8486A9] text-xs sm:text-sm text-center capitalize">
                  {countDownTime?.days == 1 ? "Day" : "Days"}
                </span>
                <br />
                {countDownTime?.days}
              </span>
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 -right-[4px] rounded-full bg-[#191A24]"></div>
            </div>
          </div>
          {/* Hours */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-16 w-16 sm:w-24 sm:h-24 lg:w-16 lg:h-16 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 !-left-[4px] rounded-full bg-[#191A24]"></div>

              <span className="lg:text-lg sm:text-2xl text-xl font-semibold text-[#a5b4fc]">
                <span className="text-[#8486A9] text-xs sm:text-sm text-center font-medium">
                  {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                </span>
                <br />
                {countDownTime?.hours}
              </span>
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 -right-[4px] rounded-full bg-[#191A24]"></div>
            </div>
          </div>
          {/* Minutes */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-16 w-16 sm:w-24 sm:h-24 lg:w-16 lg:h-16 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 !-left-[4px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-lg sm:text-2xl text-xl font-semibold text-[#a5b4fc]">
                <span className="text-[#8486A9] text-xs sm:text-sm text-center capitalize">
                  {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                </span>
                <br />
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 -right-[4px] rounded-full bg-[#191A24]"></div>
            </div>
          </div>
          {/* Seconds */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-16 w-16 sm:w-24 sm:h-24 lg:w-16 lg:h-16 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 !-left-[4px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-lg sm:text-2xl text-xl font-semibold text-[#a5b4fc]">
                <span className="text-[#8486A9] text-xs sm:text-sm text-center capitalize">
                  {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                </span>
                <br />
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-2.5 lg:w-2.5 -right-[4px] rounded-full bg-[#191A24]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
