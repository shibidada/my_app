import Mock from "mockjs";
import homeApi from "./mockServeData/home";
import user from "./mockServeData/user";

//mockのリクエストインターセプターを定義
Mock.mock("/api/home/getData", homeApi.getStatisticalData);

//ユーザーリストのデータ
Mock.mock("/api/user/add", "post", user.createUser);
Mock.mock("/api/user/edit", "post", user.updateUser);
Mock.mock("/api/user/del", "post", user.deleteUser);
Mock.mock(/api\/user\/getUser/, user.getUserList);
