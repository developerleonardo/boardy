type layoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  return (
    <div className="w-full h-full min-h-dvh flex items-center flex-col">
      {children}
    </div>
  );
};
