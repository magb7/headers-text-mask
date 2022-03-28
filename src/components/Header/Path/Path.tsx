import "./Path.css";

export const Path = () => {
  return (
    <header className="path_img">
      <p className="path_text">
        <svg className="path_svg">
          <clipPath id="text-mask-path">
            <text
              className="text"
              x="50%"
              y="50%"
              dominant-baseline="hanging"
              text-anchor="middle"
            >
              Path
            </text>
          </clipPath>
        </svg>
      </p>
    </header>
  );
};
