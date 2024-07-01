"use client";
import Image from "next/image";
import React from "react";
import { Cards } from "./Cards";

export function Description() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl pb-[3rem] mx-auto w-full">
      <Cards
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-[30rem]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Introducing Lumox&apos;s innovative staking system:
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Welcome to Lumox&apos;s staking system, where you can participate
            and earn rewards simply by keeping $LUMOX tokens in staking. Our
            staking program offers lucrative returns for your contribution, you
            earn rewards at an impressive rate of 0.16% per day. That&apos;s
            right - you can watch your rewards grow steadily, hour by hour.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">24-Hour Lock: </span> Tokens are
            locked for just 24 hours. After this period, you can claim your
            tokens anytime.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">Hourly Rewards: </span> Rewards are
            calculated hourly. The longer you stake, the more you earn—up to 60%
            APY.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">Flexible Control: </span> After the
            initial 24-hour lock, your tokens remain under your control.
            Withdraw anytime with no obligations.
          </p>
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </Cards>
      <Cards containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          How It Works:
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          When you stake your Lumox tokens, they are locked for the first 24
          hours.
        </p>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          After this lock period, your tokens are free to withdraw whenever you
          choose.
        </p>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          If you leave your tokens staked, you earn hourly rewards, similar to
          earning interest in a bank.
        </p>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
          The longer your tokens remain staked, the higher your rewards. For
          instance, leaving your tokens in staking for a month can earn you up
          to 60% more tokens.
        </p>
      </Cards>
      <Cards containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-[35rem]">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Key Benefits:
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">High Flexibility: </span> Tokens are
            locked for only 24 hours, providing unmatched flexibility.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">Maximize Earnings: </span>
            Earn rewards for each hour your tokens are staked. The potential
            rewards are substantial.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">Maximize Earnings: </span>
            Earn rewards for each hour your tokens are staked. The potential
            rewards are substantial.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">Flexible Reward Period: </span> Your
            rewards accrue continuously, but we understand that flexibility is
            key. That&apos;s why we cap the maximum reward hourly, ensuring you
            receive your rewards promptly and allowing you to decide when to
            stake again.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            <span className="font-semibold">Full Control: </span> In lumox
            staking your tokens are always under your control. You can withdraw
            them from staking at any time, no strings attached. It&apos;s
            entirely up to you - stay staked to keep earning rewards, or
            withdraw to your wallet whenever you wish.
          </p>
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        /> */}
      </Cards>
    </div>
  );
}
