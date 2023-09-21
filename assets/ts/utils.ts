export const debounce = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  timeout: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, timeout)
  }
}

export const truncateString = (string: string, length: number): string => {
  if (!string) return "";

  return string.length > length
    ? `${string.slice(0, length)}...`
    : string;
}

export const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}