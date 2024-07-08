export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
