import Image from 'next/image';

export default function EUFundsBanner() {
  return (
    <div className=" text-white p-6 rounded-lg mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 w-full">
          <div className="flex gap-4 items-center w-full">
            <img
              src="/kit_digital.png"
              alt="Next Generation EU"
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 