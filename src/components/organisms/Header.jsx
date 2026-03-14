"use client";
import Button from "../common/Button";
import Input from "../common/Input";

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--color-white)] shadow">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 w-full max-w-md">

          <Button
            onClick={onMenuClick}
            className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-gray-600)] lg:hidden hover:bg-gray-100"
          >
            <i className="ri-menu-2-line text-xl" />
          </Button>

          <div className="relative w-full">
            <Input
              placeholder="Search strategies, users, trades..."
              icon="ri-search-line text-gray-400"
              className="bg-[var(--color-gray-100)] border-none h-10 rounded-full pl-10 text-sm"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* monitor icon */}
          <button className="text-gray-500 text-lg hover:text-gray-700">
            <i className="ri-computer-line"></i>
          </button>

          {/* theme icon */}
          <button className="text-[var(--color-gray-500)] text-lg hover:text-gray-700">
            <i className="ri-sun-line"></i>
          </button>

          {/* notification */}
          <div className="relative">
            <button className="text-[var(--color-gray-500)] text-lg hover:text-gray-700">
              <i className="ri-notification-3-line"></i>
            </button>

            {/* red dot */}
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </div>

          {/* divider */}
          <div className="h-6 w-px bg-[var(--color-gray-200)]"></div>

          {/* user info */}
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--color-white)] font-semibold">
              A
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-medium text-[var(--color-gray-800)]">
                Admin User
              </p>
              <p className="text-xs text-[var(--color-gray-800)]">
                Super Admin
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}