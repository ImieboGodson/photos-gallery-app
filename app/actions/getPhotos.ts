import { createApi } from "unsplash-js";

export default async function getPhotos() {
    const unsplashApi = createApi({
        accessKey: process.env.UNSPLASH_KEY as string
    })

    try {

        const result = await unsplashApi.photos.list({page: 1, perPage: 20})

        const photos = result.response

        return photos?.results;

    } catch(error: any) {
        throw new Error(error);
    }
}