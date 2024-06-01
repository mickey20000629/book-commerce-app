type BookType = {
  id: string;
  title: string;
  content: string;
  price: string;
  thumbnail: { url: string };
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

export type Purchase = {
  id: string;
  userId: string;
  bookId: string;
  createdAt: string;
  user: User;
};

export type { BookType };
