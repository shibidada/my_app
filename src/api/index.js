import http from "@/utils/request";

//ホームページのデータをリクエスト
export const getData = () => {
  //promiseインスタンスを返却
  return http.get("/home/getData");
};
