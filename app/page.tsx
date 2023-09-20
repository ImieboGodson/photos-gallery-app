import Image from "next/image";
import getPhotos from "./actions/getPhotos";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ImageCard from "./components/cards/ImageCard";

export default async function Home() {
  const photos = await getPhotos();

  if (!photos) {
    return (
      <ClientOnly>
        <EmptyState title="No photos found." />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pb-8 columns-1 sm:columns-1 md:columns-3 lg:columns-4 xl:columns-4 gap-4">
          {photos.map((photo: any, index: number) => (
            <ImageCard key={photo.id} index={index} data={photo} />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
}
