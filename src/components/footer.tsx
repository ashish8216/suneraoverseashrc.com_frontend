export const H2 = ({ title }: { title: string }) => (
  <h2 className="font-semibold mb-4 text-white">
    <span>{title}</span>
  </h2>
);
export const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
    <div className="py-[10px]">{children}</div>
  </div>
);
