import data from '@/data.json'

export interface IImagesParams {
    tag?: string;
}

export default async function getPhotosByTag(params: IImagesParams) {
    try {
        const { tag } = params;

        if(tag) {
            const images = data.filter((img) => img.tags?.includes(tag));

            return images;
        }
        
        return data;

      } catch (error: any) {
        throw new Error(error);
      }
}