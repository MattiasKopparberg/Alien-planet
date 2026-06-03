import styles from "./LoadingSpinner.module.css";

type SpinnerSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

type Props = {
  size: SpinnerSize;
};

const spinnerSizes = {
  xs: "w-[50px] h-[50px] m-[10px] border-4",
  s: "w-[75px] h-[75px] m-[15px] border-4",
  m: "w-[100px] h-[100px] m-[20px] border-4",
  l: "w-[150px] h-[150px] m-[30px] border-[6px]",
  xl: "w-[250px] h-[250px] m-[50px] border-8",
  xxl: "w-[400px] h-[400px] m-[80px] border-[10px]",
};

const containerSizes = {
  xs: "w-[60px] h-[60px]",
  s: "w-[90px] h-[90px]",
  m: "w-[120px] h-[120px]",
  l: "w-[180px] h-[180px]",
  xl: "w-[300px] h-[300px]",
  xxl: "w-[480px] h-[480px]",
};

export default function LoadingSpinner({ size = "m" }: Props) {
  const containerDimensions = containerSizes[size];
  const dimensions = spinnerSizes[size];

  return (
    <div className={containerDimensions + " h-full w-full flex justify-center"}>
      <span
        className={
          `${dimensions} shadow-[-20px_30px_35px_-20px_rgba(187,255,249,0.2)] border-double rounded-full border-light-blue border-t-0 border-r-0 border-l-0 inline-block  ` +
          styles.loader
        }>
        <span
          className={
            "absolute top-[10%] left-[0%] w-[20%] h-[20%] border-magenta border-2 rounded-full " +
            styles.planet
          }></span>
      </span>
    </div>
  );
}
