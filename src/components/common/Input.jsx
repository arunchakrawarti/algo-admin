"use client";
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
  icon = "",
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      
      {label && (
        <label
          className="font-inter font-semibold mb-1 text-[12px] text-[var(--color-gray-500)] uppercase tracking-wider"
        >
          {label}
        </label>
      )}

      {rest?.type === "textarea" ? (
        <div
          className={clsx(
            "flex w-full gap-3 rounded-lg px-3 py-2 border border-gray-300 bg-[var(--color-white)]",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          {icon && (
            <span>
              <i className={`${icon} ri-lg text-[var(--color-gray-400)]`} />
            </span>
          )}

          <textarea
            className="w-full outline-none text-sm"
            {...rest}
          />
        </div>

      ) : rest?.type === "select" ? (
        <div
          className={clsx(
            "flex w-full items-center gap-3 rounded-lg px-3 py-1 border border-gray-300 bg-[var(--color-white)]",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          {icon && (
            <span>
              <i className={`${icon} ri-lg text-[var(--color-gray-400)]`} />
            </span>
          )}

          <select
            defaultValue=""
            {...rest}
            className="h-[45px] w-full text-sm outline-none bg-transparent"
          >
            {rest?.placeholder && (
              <option value="" disabled>
                {rest.placeholder}
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
          className={clsx(
            "flex w-full items-center gap-3 rounded-lg px-3 py-1 border border-gray-300 bg-[var(--color-white)]",
            error && "border-red-400 ring-2 ring-red-300",
            className
          )}
        >
          {icon && (
            <span>
              <i className={`${icon} ri-lg text-[var(--color-gray-400)]`} />
            </span>
          )}

          <input
            {...rest}
            className="h-[45px] w-full text-sm outline-none bg-transparent"
          />
        </div>
      )}

      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Input;