import getPhotos from "./actions/getPhotos";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import HomeClient from "./HomeClient";
import getCurrentUser from "./actions/getCurrentUser";
import ImageCard from "./components/cards/ImageCard";
import getPhotosByTag, { IImagesParams } from "./actions/getPhotosByTag";

interface HomeProps {
  searchParams: IImagesParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const photos = await getPhotosByTag(searchParams);

  if (photos.length === 0) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState title="No photos found." showReset />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <HomeClient photos={photos} />
    </ClientOnly>
  );
}
