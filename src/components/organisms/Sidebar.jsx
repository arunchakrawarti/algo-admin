"use client";
import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";

const SideBar = ({ isMobile = false, isOpen = true, onClose }) => {
  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-[270px]
          bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
          text-[var(--color-white)]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0
        `}
      >
        <nav className="h-full flex flex-col">

        
          <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <i className="ri-flashlight-line text-xl"></i>
            </div>

            <div>
              <h1 className="text-lg font-semibold">AlgoAdmin</h1>
              <p className="text-sm text-[var(--color-gray-300)]">Trading Platform</p>
            </div>

          </div>

          <ul className="flex-1 overflow-y-auto px-4 py-2 space-y-4 no-scrollbar">

  {SideBarData.map((section, index) => (
    <div key={index}>

      <p className="px-4 text-xs font-semibold tracking-widest text-white/40 uppercase">
        {section.section}
      </p>

      <div className="mt-2 space-y-2">
        {section.items.map((item, i) => (
          <NavigationLink key={i} {...item} />
        ))}
      </div>

    </div>
  ))}

</ul>

        </nav>
      </aside>
    </>
  );
};

export default SideBar;