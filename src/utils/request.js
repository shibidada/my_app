import axios from "axios";

const http = axios.create({
  //通用のリクエストアドレスの頭
  baseURL: "/api",
  timeout: 10000, //タイムアウトの時間
});

//リクエストインターセプター
http.interceptors.request.use(
  function (config) {
    //リクエスト前の動作
    return config;
  },
  function (error) {
    //エラーの処理
    return Promise.reject(error);
  }
);

//レスポンスインターセプター
http.interceptors.response.use(
  function (response) {
    //レスポンスデータの処理
    return response;
  },
  function (error) {
    //レスポンスエラーの処理
    return Promise.reject(error);
  }
);

export default http;
