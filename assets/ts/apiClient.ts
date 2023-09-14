export async function searchBooks(searchTerm: string): Promise<Book[]> {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
  const data = await response.json() 
  return data.items
}