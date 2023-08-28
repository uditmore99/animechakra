"use client";
import { useEffect, useState } from "react";

const episode = ({ params }) => {
  return (
    <>
      <h1 className="sm:mt-24 text-5xl">{params.episode}</h1>
    </>
  );
};

export default episode;
