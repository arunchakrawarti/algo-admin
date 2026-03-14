const IconBadge = ({ icon, bg }) => {
  return (
    <div
      className={`w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-[1.15rem] flex items-center justify-center ${bg} iconShadow`}
    >
      <i className={`${icon} text-white text-xl`} />
    </div>
  );
};

export default IconBadge;
