"use client";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Container from "./components/Container";
import ImageCard from "./components/cards/ImageCard";
import { Photo, SafeUser } from "./types";
import { useCallback, useEffect, useState } from "react";
import data from "@/data.json";

interface HomeClientProps {
  photos: Photo[];
}

const HomeClient: React.FC<HomeClientProps> = ({ photos }) => {
  const [photosArray, setphotosArray] = useState(
    sessionStorage?.getItem("imageData") || data
  );

  const handleDragEnd = useCallback((result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //TO-DO: Add drag end task
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-full min-h-screen">
        <Container>
          <Droppable droppableId="dndGrid">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="pb-8 grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                row-auto
                min-h-screen
                gap-4"
              >
                {photos.map((photo: any, index: number) => (
                  <ImageCard key={photo.id} index={index} data={photo} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Container>
      </div>
    </DragDropContext>
  );
};

export default HomeClient;
