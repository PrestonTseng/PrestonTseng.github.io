export default function () {
  const defaultImage = (seed: string, width: number = 1920, height: number = 1080): string => `https://picsum.photos/seed/${new Date(seed).toString()}/${width}/${height}`

  return {
    defaultImage
  }
}
