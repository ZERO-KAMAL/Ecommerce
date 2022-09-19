import React from "react";

const Breadcumbs = (props) => {
  function isLast(index) {
    return index === props.crumbs.length - 1;
  }
  return (
    <>
      <nav aria-label="breadcrumb " className="pt-3">
        <ol className="breadcrumb">
          {props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? "disabled" : "";

            return (
              <li className="breadcrumb-item align-items-center" key={ci}>
                <button
                  className={`btn btn-link text-start ${disabled}`}
                  onClick={() => props.selected(crumb)}
                >
                  {crumb}
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcumbs;
