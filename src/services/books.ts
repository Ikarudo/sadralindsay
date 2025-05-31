import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  description: string;
  isbn?: string;
  publishedDate?: string;
  pageCount?: number;
  categories?: string[];
}

const booksCollection = collection(db, 'books');

export async function getAllBooks(): Promise<Book[]> {
  const snapshot = await getDocs(booksCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as object),
  })) as Book[];
}

export async function getBookById(id: string): Promise<Book | null> {
  const docRef = doc(db, 'books', id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    } as Book;
  }
  
  return null;
}

export async function addBook(book: Omit<Book, 'id'>): Promise<string> {
  const docRef = await addDoc(booksCollection, book);
  return docRef.id;
}

export async function updateBook(id: string, book: Partial<Book>): Promise<void> {
  const docRef = doc(db, 'books', id);
  await updateDoc(docRef, book);
}

export async function deleteBook(id: string): Promise<void> {
  const docRef = doc(db, 'books', id);
  await deleteDoc(docRef);
}

export async function searchBooks(searchTerm: string): Promise<Book[]> {
  const q = query(
    booksCollection,
    where('title', '>=', searchTerm),
    where('title', '<=', searchTerm + '\uf8ff')
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as object),
  })) as Book[];
} 