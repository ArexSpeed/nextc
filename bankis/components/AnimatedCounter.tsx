"use client";

import CountUp from "react-countup";

export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp decimal="," prefix="$" duration={2.75} decimals={2} end={amount} />
  );
};
