export type actionType = {
  type: string;
  status?: string;
  payload?: any;
  meta?: object;
  data?: any;
  article?: any;
}

export type Article = {
  id: string;
  title: string;
  markdowncontent: string;
  private: string;
  tags: string;
  categories: string;
  type: string;
  description: string;
  status: string;
  createTime: string;
  lastUpdateTime: string;
}

export type Image = {
  id: string;
  url: string;
  createTime: string;
  lastUpdateTime: string;
}