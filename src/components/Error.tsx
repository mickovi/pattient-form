export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-red-500 p-2">
      {children}
    </p>
  );
}
