export default function OpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Auth guard middleware handles protection */}
      {/* OPS sidebar/nav goes here */}
      {children}
    </div>
  );
}