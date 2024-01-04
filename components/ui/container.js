export default function Container({ children }) {
  return (
    <div className="2xl:container mx-auto px-4 xl:px-8 py-20   w-full space-y-8">
      {children}
    </div>
  );
}
