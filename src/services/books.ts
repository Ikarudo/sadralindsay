import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
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