"use client";

import { Photo } from "@/app/types";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";

interface ImageCardProps {
  index: number;
  data: Photo;
}

const ImageCard: React.FC<ImageCardProps> = ({ index, data }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="mb-6 col-span-1 break-inside-avoid flex flex-col gap-2 items-start cursor-pointer"
        >
          <div className="relative w-full min-h-[30vh]">
            <Image
              src={data.urls.small}
              alt="photo"
              fill
              className="object-cover w-full h-fit rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-full text-sm font-medium">{data.user.name}</div>
            {data.tags && (
              <div className="flex flex-row gap-1">
                {data.tags.map((tag) => (
                  <div key={tag} className="text-sm font-light">
                    #{tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ImageCard;
