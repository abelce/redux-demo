export type actionType = {
  type: string;
  status?: string;
  payload?: any;
  meta?: object;
  data?: any;
  article?: any;
};

export type Article = {
  id: string;
  attributes: {
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
  };
};

export type Image = {
  id: string;
  attribues: {
    url: string;
    createTime: string;
    lastUpdateTime: string;
  };
};

export type User = {
  id: string;
  email: string;
  createTime: string;
  updateTime: string;
  token: string;
};
