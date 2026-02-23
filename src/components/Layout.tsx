type layoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  return <main className="flex items-center flex-col">{children}</main>;
};
