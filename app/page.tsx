export const dynamic = "force-dynamic";

import getPhotos from "./actions/getPhotos";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import HomeClient from "./HomeClient";
import getPhotosByTag, { IImagesParams } from "./actions/getPhotosByTag";
import { Suspense } from "react";
import Loading from "./loading";

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
      <Suspense fallback={<Loading />}>
        <HomeClient photos={photos} />
      </Suspense>
    </ClientOnly>
  );
}
