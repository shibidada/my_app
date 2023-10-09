import Mock from "mockjs";
import homeApi from "./mockServeData/home";

//mockのリクエストインターセプターを定義
Mock.mock("/api/home/getData", homeApi.getStatisticalData);
