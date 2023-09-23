export async function searchBooks(searchTerm: string): Promise<Book[]> {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)

     if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    return data.items
  } catch (error) {
    console.error(`Error searching books: ${error}`)
    return []
  }
}

export async function searchBookById(id: string): Promise<Book | null> {
    try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error searching books: ${error}`)
    return null
  }
}