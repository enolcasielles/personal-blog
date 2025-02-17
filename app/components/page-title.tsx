interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <>
      <h1 className="font-bold text-5xl mb-6 tracking-tighter bg-[linear-gradient(45deg,#000,#4444)] dark:bg-[linear-gradient(45deg,#fff,#4444)] bg-clip-text text-transparent">
        {title}
      </h1>
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-6"></div>
      {description && (
        <p className='mb-12 text-lg prose prose-neutral dark:prose-invert'>
          {description}
        </p>
      )}
    </>
  );
}