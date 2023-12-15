"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const Meals = () => {
  const param = useSearchParams().get("category");
  return <div>{param}</div>;
};

export default Meals;
