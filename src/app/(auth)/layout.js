export default function Layout({ children }) {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="w-[240px]">{children}</div>
    </main>
  );
}
