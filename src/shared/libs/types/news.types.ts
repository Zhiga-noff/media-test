export interface Posts {
  id: number;
  title: string;
  body: string;
  tags: string[] | string;
  reactions: Reactions;
  views: number;
  userId: number | string;
}

export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface DataNews {
  posts: Posts[];
  total: number;
  skip: number;
  limit: number;
}
