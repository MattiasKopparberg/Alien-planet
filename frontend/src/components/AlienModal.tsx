// import type { Alien } from "../types/types";

export default function AlienModal() {
  return (
    <div className="relative text-light-blue w-160 rounded-xl p-8 backdrop-blur-xs bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
      <span
        // onClick={onClose}
        className="absolute top-3 right-5 text-xl cursor-pointer hover:text-magenta select-none">
        ✕
      </span>
      <div className="flex items-center gap-5">
        <img
          className="h-60 w-60 object-cover"
          src="../../Alien-fallback.jpg"
        />
        <div className="flex-col">
          <h2 className="font-subheading mb-3 text-xl">Alien Species</h2>
          <p className="font-paragraph">
            <span className="font-bold">Aggression: </span>Aggression Type
          </p>
          <p className="font-paragraph">
            <span className="font-bold">Habitat: </span>Habitat Type
          </p>
        </div>
      </div>
      <p className="font-paragraph mt-3">
        Alien Description. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Suspendisse molestie ligula eu felis mattis ultrices. Nullam vel
        scelerisque lectus, at gravida nisi. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.{" "}
      </p>
      <div className="mt-5">
        <h2 className="font-subheading mb-3">Home Planet</h2>
        <img
          className="h-40 w-40 object-cover"
          src="../../Planet-fallback.jpg"
        />
      </div>
    </div>
  );
}
