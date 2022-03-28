import "./Forest.css";

export const Forest = () => {
  return (
    <header>
      <div className="forest_img" />
      <svg className="forest_svg">
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect id="forest_alpha" x="0" y="0" width="100%" height="100%" />
            <text x="50%" y="50%" className="forest_text">
              Forest
            </text>
          </mask>
        </defs>
        <rect id="forest_base" x="0" y="0" width="100%" height="100%" />
      </svg>
    </header>
  );
};
