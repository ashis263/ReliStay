import clsx from "clsx";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx(className, `max-w-screen-xl w-11/12 lg:w-4/5 mx-auto`)}
    >
      {children}
    </section>
  );
};

export default Container;
