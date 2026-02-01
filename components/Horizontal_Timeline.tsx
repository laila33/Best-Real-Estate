import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
const timelineData = [
  { percentage: "3%", amount: "Above $50K" },
  { percentage: "5%", amount: "Above $75K" },
  { percentage: "8%", amount: "Above $90K" },
];

export function CustomHorizontalTimeline() {
  return (
    <div className="w-70  lg:w-110  md:w-130 ">
      <div className="relative flex justify-between items-start max-w-4xl mx-auto">
        <div className="absolute top-2.75 left-0 right-0 h-[2px] bg-blue-300 -z-10" />

        {timelineData.map((item: { percentage: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; amount: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            </div>

            <div className="mt-4 text-center">
              <h3 className=" text-sm md:text-2xl font-bold dark:text-white text-slate-800">{item.percentage} Save</h3>
              <p className="text-slate-500 text-sm">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}