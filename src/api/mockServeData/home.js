//mockでデータを生成
import Mock from "mockjs";

//グラフのデータ
let List = [];
export default {
  getStatisticalData: () => {
    //Mock.Random.float 100から8000までの数をランダムで生成
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          Apple: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          Huawei: Mock.Random.float(100, 8000, 0, 0),
          Galaxy: Mock.Random.float(100, 8000, 0, 0),
          xiaomi: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 20000,
      data: {
        //円グラフ
        videoData: [
          {
            name: "xiaomi",
            value: 2999,
          },
          {
            name: "Apple",
            value: 5999,
          },
          {
            name: "vivo",
            value: 1500,
          },
          {
            name: "oppo",
            value: 1999,
          },
          {
            name: "Huawei",
            value: 2200,
          },
          {
            name: "Galaxy",
            value: 4500,
          },
        ],
        //棒グラフ
        userData: [
          {
            date: "月曜日",
            new: 5,
            active: 200,
          },
          {
            date: "火曜日",
            new: 10,
            active: 500,
          },
          {
            date: "水曜日",
            new: 12,
            active: 550,
          },
          {
            date: "木曜日",
            new: 60,
            active: 800,
          },
          {
            date: "金曜日",
            new: 65,
            active: 550,
          },
          {
            date: "土曜日",
            new: 53,
            active: 770,
          },
          {
            date: "日曜日",
            new: 33,
            active: 170,
          },
        ],
        //折れ線グラフ
        orderData: {
          date: [
            "20191001",
            "20191002",
            "20191003",
            "20191004",
            "20191005",
            "20191006",
            "20191007",
          ],
          data: List,
        },
        tableData: [
          {
            name: "oppo",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "vivo",
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000,
          },
          {
            name: "Apple",
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000,
          },
          {
            name: "xiaomi",
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000,
          },
          {
            name: "Galaxy",
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000,
          },
          {
            name: "Huawei",
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000,
          },
        ],
      },
    };
  },
};
