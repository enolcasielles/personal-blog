export default function PageTitle({ title }: { title: string }) {
  return (
    <>
      <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-[linear-gradient(45deg,#000,#4444)] dark:bg-[linear-gradient(45deg,#fff,#4444)] bg-clip-text text-transparent">
        {title}
      </h1>
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-12"></div>
    </>
  );
}