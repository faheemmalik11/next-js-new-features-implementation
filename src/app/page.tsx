import dynamic from "next/dynamic";

// import HydrationTest from "@/components/hydration"
const HydrationTestNoSSR = dynamic(() => import("../components/hydration"), {
  ssr: false,
});

export default function Home() {
  const a = Math.random();
  console.log(a);
  return (
    <div>
      Home Page <HydrationTestNoSSR />
      <div suppressHydrationWarning>{a}</div>
    </div>
  );
}
