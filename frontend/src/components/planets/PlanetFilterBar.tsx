import "../../App.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
  surfaceArea: number[];
  onSurfaceAreaChange: (val: number[]) => void;
  temp: number[];
  onTempChange: (val: number[]) => void;
};

export default function PlanetFilterBar({
  surfaceArea,
  onSurfaceAreaChange,
  temp,
  onTempChange,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-8 py-6">
      <div className="flex flex-col items-center gap-4 w-80">
        <span className="font-subheading text-xs text-cyan/50 tracking-widest">
          filter by surface area
        </span>

        <Slider
          range
          min={74}
          max={61420}
          value={surfaceArea}
          onChange={(val) => onSurfaceAreaChange(val as number[])}
        />
        <div className="flex justify-between w-full">
          <span className="font-subheading text-xs text-cyan">
            {surfaceArea[0]}
          </span>
          <span className="font-subheading text-xs text-cyan">
            {surfaceArea[1]}
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 w-80">
          <span className="font-subheading text-xs text-cyan/50 tracking-widest">
            filter by temperature
          </span>
          <Slider
            range
            min={-200}
            max={464}
            value={temp}
            onChange={(val) => onTempChange(val as number[])}
          />
          <div className="flex justify-between w-full">
            <span className="font-subheading text-xs text-cyan">
              {temp[0]}°
            </span>
            <span className="font-subheading text-xs text-cyan">
              {temp[1]}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
