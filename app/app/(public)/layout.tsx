export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* Navbar goes here */}
      {children}
      {/* Footer goes here */}
    </main>
  );
}