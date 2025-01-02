import React, { useEffect, useState } from "react";

const Banner = () => {
  // Initialize the timer values
  const initialTime = {
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  };

  // State for countdown timer
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // Start the timer with an interval
    const interval = setInterval(() => {
      setTime((prevTime) => calculateTime(prevTime));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to calculate the updated time
  const calculateTime = (prevTime) => {
    const { days, hours, minutes, seconds } = prevTime;

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      // Restart the timer when it completes
      return initialTime;
    }

    // Update the time logic
    let newSeconds = seconds - 1;
    let newMinutes = minutes;
    let newHours = hours;
    let newDays = days;

    if (newSeconds < 0) {
      newSeconds = 59;
      newMinutes--;
    }

    if (newMinutes < 0) {
      newMinutes = 59;
      newHours--;
    }

    if (newHours < 0) {
      newHours = 23;
      newDays--;
    }

    return {
      days: newDays,
      hours: newHours,
      minutes: newMinutes,
      seconds: newSeconds,
    };
  };
  return (
    <>
      <div className="flex items-center justify-center my-8">
        <div className="bg-black text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* <!-- Left Section: Text and Countdown --> */}
            <div className="space-y-5 space-x-5">
              {/* <!-- Category --> */}
              <p className="text-green-500 text-sm font-medium ml-6">
                Categories
              </p>
              {/* <!-- Title --> */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Enhance Your Music Experience
              </h1>
              {/* <!-- Countdown --> */}
              <div className="flex items-center gap-4">
                {/* Days */}
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
                  <p className="text-2xl font-bold">
                    {String(time.days).padStart(2, "0")}
                  </p>
                  <p className="text-xs">Days</p>
                </div>
                {/* Hours */}
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
                  <p className="text-2xl font-bold">
                    {String(time.hours).padStart(2, "0")}
                  </p>
                  <p className="text-xs">Hours</p>
                </div>
                {/* Minutes */}
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
                  <p className="text-2xl font-bold">
                    {String(time.minutes).padStart(2, "0")}
                  </p>
                  <p className="text-xs">Minutes</p>
                </div>
                {/* Seconds */}
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
                  <p className="text-2xl font-bold">
                    {String(time.seconds).padStart(2, "0")}
                  </p>
                  <p className="text-xs">Seconds</p>
                </div>
              </div>
              {/* <!-- Button --> */}
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md">
                Buy Now!
              </button>
            </div>

            {/* <!-- Right Section: Image --> */}
            <div className="relative flex justify-center items-center md:justify-center md:mr-5">
              {/* <!-- Blurred Background --> */}
              <div className="absolute inset-0 bg-[#a7a5a54b] blur-3xl rounded-full"></div>
              {/* <!-- Image Container --> */}
              <div className="relative rounded-full">
                <img
                  src="/src/assets/jbl.png"
                  alt="Speaker"
                  className="w-full max-w-sm md:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
