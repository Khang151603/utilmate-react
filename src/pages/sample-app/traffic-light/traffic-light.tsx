import React from "react";

type Light = "red" | "yellow" | "green";

const nextLight: Record<Light, Light> = {
  red: "green",
  green: "yellow",
  yellow: "red",
};

const durationByLight: Record<Light, number> = {
  red: 5000,
  yellow: 3000,
  green: 4000,
};

export default function TrafficLight() {
  const [activeLight, setActiveLight] = React.useState<Light>("red");

  React.useEffect(() => {
    const next = nextLight[activeLight];
    const duration = durationByLight[activeLight];

    setTimeout(() => {
      setActiveLight(next);
    }, duration);


  }, [activeLight]);

  return (
    <div className="flex w-[82px] flex-col gap-[10px] rounded-[10px] bg-black p-[10px]">
      <span
        className={`size-[62px] rounded-full ${activeLight === "red" ? "bg-red-600" : "bg-neutral-600"
          }`}
      />

      <span
        className={`size-[62px] rounded-full ${activeLight === "yellow" ? "bg-yellow-400" : "bg-neutral-600"
          }`}
      />

      <span
        className={`size-[62px] rounded-full ${activeLight === "green" ? "bg-green-600" : "bg-neutral-600"
          }`}
      />
    </div>
  );
}