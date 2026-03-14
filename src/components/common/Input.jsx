"use client"
import clsx from "clsx";
const Input = ({
  label,
  className = "",
  iconClass,
  iconEye,
  error,
  options = [],
  valueKey,
  labelKey,
  labelRender,
  icon = "ri-hashtag",
  ...rest
}) => {
  return (
    <div className="text-text-primary flex w-full flex-col gap-1">
      {label && (
        <label
          className={clsx(
            "font-inter font-normal mb-1 text-[1rem]  tracking-[-0.019rem]"
          )}
        >
          {label}
        </label>
      )}


      {rest?.type === "textarea" ? (
        <div
          className={`bg-light flex w-full gap-3 rounded-lg p-3 transition-all duration-300 ease-in-out outline-none ${error
            ? "border border-red-400 ring-2 ring-red-300 focus:ring-red-500"
            : ""
            } ${className}`}
        >
          <span>
            <i className={`${icon} ri-lg text-dark font-light`} />{" "}
          </span>


          <textarea className="w-full outline-0" {...rest} />
        </div>
      ) : rest?.type === "select" ? (
        <div
          className={`bg-light flex w-full items-center gap-3 rounded-lg px-3 py-1 transition-all duration-300 ease-in-out outline-none ${error
            ? "border border-red-400 ring-2 ring-red-300 focus:ring-red-500"
            : ""
            } ${className}`}
        >
          {icon && (
            <span>
              <i className={`${icon} ri-xl text-dark`}></i>
            </span>
          )}
          <select
            {...rest}
            className={`text-dark h-[45px] w-full rounded-sm text-sm outline-0 disabled:cursor-not-allowed disabled:opacity-50`}
          >
            {rest?.placeholder && (
              <option value="" disabled>
                {rest?.placeholder}
              </option>
            )}
            {options.map((opt, idx) => (
              <option key={idx} value={opt[valueKey] || opt.value || opt}>
                {labelRender
                  ? labelRender(opt)
                  : opt[labelKey] || opt.label || opt}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div
          className={`bg-light flex w-full items-center gap-3 rounded-lg px-3 py-1 transition-all duration-300 ease-in-out outline-none ${error
            ? "border border-red-400 ring-2 ring-red-300 focus:ring-red-500"
            : ""
            } ${className}`}
        >
          <span>
            <i className={`${icon} ri-lg text-dark font-light`} />{" "}
          </span>
          <input
            {...rest}
            className={`text-dark h-[45px] w-full rounded-sm text-lg outline-0 disabled:cursor-not-allowed disabled:opacity-50`}
          />
        </div>
      )}


      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};


export default Input;


