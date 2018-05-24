export type actionType = {
  type: string;
  status?: string;
  payload?: any;
  meta?: object;
}

export type article = {
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