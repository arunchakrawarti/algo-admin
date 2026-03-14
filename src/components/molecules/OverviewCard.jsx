// "use client";
// import clsx from "clsx";
// import { CheckCircle2, Zap, Activity } from "lucide-react";

// const OverviewCard = ({ 
//   title, 
//   value, 
//   description, 
//   variant, 
//   icon: Icon, 
//   isActive, 
//   onToggle, 
//   valueColor 
// }) => {

//   if (variant === "system-control") {
//     return (
//       <div className="flex items-center justify-between p-5 mb-4 border border-gray-100 bg-[#F8FAFC]/50 rounded-[1.25rem] transition-all hover:bg-white hover:shadow-sm">
//         <div className="flex flex-col gap-1">
//           <span className="text-[#344054] font-semibold text-lg">{title}</span>
//           <p className="text-[#667085] text-sm">{description}</p>
//         </div>

//         <button
//           onClick={onToggle}
//           className={clsx(
//             "relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none",
//             isActive ? "bg-[#2E60F6]" : "bg-gray-300"
//           )}
//         >
//           <span
//             className={clsx(
//               "inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 shadow-sm",
//               isActive ? "translate-x-6" : "translate-x-1"
//             )}
//           />
//         </button>
//       </div>
//     );
//   }
//   if (variant === "performance") {
//     const getStyles = () => {
//       if (title.includes("Success")) return { 
//         bg: "bg-[#F6FEF9]", border: "border-[#D1FADF]", text: "text-[#12B76A]", icon: CheckCircle2 
//       };
//       if (title.includes("Latency")) return { 
//         bg: "bg-[#F5FAFF]", border: "border-[#D1E9FF]", text: "text-[#2E90FA]", icon: Zap 
//       };
//       return { 
//         bg: "bg-[#F9F5FF]", border: "border-[#E9D7FE]", text: "text-[#7F56D9]", icon: Activity 
//       };
//     };

//     const s = getStyles();
//     const VisualIcon = Icon || s.icon;

//     return (
//       <div className={clsx("p-6 rounded-[1.25rem] border transition-all", s.bg, s.border)}>
//         <div className="flex items-center gap-2 mb-4">
//           <VisualIcon size={20} className={s.text} />
//           <span className={clsx("font-medium text-[1.05rem]", s.text)}>{title}</span>
//         </div>
//         <div className={clsx("text-4xl font-bold tracking-tight", s.text)}>
//           {value}
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
//       <p className="text-sm text-gray-500 font-medium">{title}</p>
//       <h2 className={clsx("text-3xl font-semibold mt-2", valueColor || "text-gray-900")}>
//         {value}
//       </h2>
//     </div>
//   );
// };

// export default OverviewCard;



"use client";
import clsx from "clsx";
import { CheckCircle2, Zap, Activity } from "lucide-react";

const OverviewCard = ({
  title,
  value,
  description,
  variant,
  icon: Icon,
  isActive,
  onToggle,
  valueColor,
}) => {

  if (variant === "system-control") {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5 border border-gray-100 bg-[#F8FAFC]/50 rounded-2xl transition-all hover:bg-white hover:shadow-sm">
        
        <div className="flex flex-col gap-1">
          <span className="text-[#344054] font-semibold text-base sm:text-lg">
            {title}
          </span>

          <p className="text-[#667085] text-xs sm:text-sm max-w-md">
            {description}
          </p>
        </div>

        <button
          onClick={onToggle}
          className={clsx(
            "relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 focus:outline-none",
            isActive ? "bg-[#2E60F6]" : "bg-gray-300"
          )}
        >
          <span
            className={clsx(
              "inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white transition-transform duration-200 shadow-sm",
              isActive ? "translate-x-5 sm:translate-x-6" : "translate-x-1"
            )}
          />
        </button>
      </div>
    );
  }
  if (variant === "performance") {
    const getStyles = () => {
      if (title.includes("Success"))
        return {
          bg: "bg-[#F6FEF9]",
          border: "border-[#D1FADF]",
          text: "text-[#12B76A]",
          icon: CheckCircle2,
        };

      if (title.includes("Latency"))
        return {
          bg: "bg-[#F5FAFF]",
          border: "border-[#D1E9FF]",
          text: "text-[#2E90FA]",
          icon: Zap,
        };

      return {
        bg: "bg-[#F9F5FF]",
        border: "border-[#E9D7FE]",
        text: "text-[#7F56D9]",
        icon: Activity,
      };
    };

    const s = getStyles();
    const VisualIcon = Icon || s.icon;

    return (
      <div
        className={clsx(
          "p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all",
          s.bg,
          s.border
        )}
      >
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <VisualIcon size={18} className={s.text} />
          <span className={clsx("font-medium text-sm sm:text-base", s.text)}>
            {title}
          </span>
        </div>

        <div
          className={clsx(
            "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight",
            s.text
          )}
        >
          {value}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
      <p className="text-xs sm:text-sm text-gray-500 font-medium">{title}</p>

      <h2
        className={clsx(
          "text-xl sm:text-2xl lg:text-3xl font-semibold mt-2",
          valueColor || "text-gray-900"
        )}
      >
        {value}
      </h2>
    </div>
  );
};

export default OverviewCard;