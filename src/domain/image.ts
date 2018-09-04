type Image = {
  id: string;
  type: string;
  attributes : {
    createTime: number;
    deleted: boolean;
    height: number;
    lastUpdateTime: number;
    svgurl: string;
    url: string;
    width: number;
  }
}

export default Image;