"use client";

import { Photo } from "@/app/types";
import Image from "next/image";

interface ImageCardProps {
  index: number;
  data: Photo;
}

const ImageCard: React.FC<ImageCardProps> = ({ index, data }) => {
  return (
    <div className="mb-6 col-span-1 break-inside-avoid flex flex-col gap-2 items-start cursor-pointer">
      <div className="relative w-full min-h-[30vh]">
        <Image
          src={data.urls.small}
          alt="photo"
          height={700}
          width={400}
          className="object-cover w-full h-fit rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col items-start">
        <div className="w-full text-sm font-medium">{data.user.name}</div>
        <div className="text-sm font-light">#imagination #design</div>
      </div>
    </div>
  );
};

export default ImageCard;
