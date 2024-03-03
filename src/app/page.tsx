"use client";
import Intro from "@/components/Intro";
import Middle from "@/components/Middle";
import { ThreeDCardDemo } from "@/components/ThreeD";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
import Gradient from "@/components/Gradient";
export default function Example() {
  return (
    <>
      <Intro />
      <ThreeDCardDemo/>
      <Middle />
      <Gradient />
    </>
  );
}
