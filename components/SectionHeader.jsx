const SectionHeader = ({ span, h2, p }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-[6px]">
      <span className="uppercase text-teal-400 font-bold tracking-wider text-sm">
        {span}
      </span>
      <h2 className="text-rose-400">{h2}</h2>
      <p className="w-2/5 text-gray-600/75">{p}</p>
    </div>
  );
};

export default SectionHeader;
