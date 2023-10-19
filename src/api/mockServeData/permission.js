import Mock from "mockjs";
export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body);
    //アカウント名とパスワードが合っているどうかを確認します
    if (username === "admin" && password === "admin") {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: "/home",
              name: "home",
              label: "ホームページ",
              icon: "s-home",
              url: "Home.vue",
            },
            {
              path: "/mall",
              name: "mall",
              label: "商品管理",
              icon: "video-play",
              url: "Mall.vue",
            },
            {
              path: "/user",
              name: "user",
              label: "ユーザー管理",
              icon: "user",
              url: "User.vue",
            },
            {
              label: "ほか",
              icon: "location",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "ページ１",
                  icon: "setting",
                  url: "PageOne.vue",
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "ページ２",
                  icon: "setting",
                  url: "PageTwo.vue",
                },
              ],
            },
          ],
          token: Mock.Random.guid(),
          message: "成功しました",
        },
      };
    } else if (username === "xiaoxiao" && password === "xiaoxiao") {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: "/home",
              name: "home",
              label: "ホームページ",
              icon: "s-home",
              url: "Home.vue",
            },
            {
              path: "/video",
              name: "video",
              label: "商品管理",
              icon: "video-play",
              url: "Mall.vue",
            },
          ],
          token: Mock.Random.guid(),
          message: "成功しました",
        },
      };
    } else {
      return {
        code: -999,
        data: {
          message: "パスワードが違います",
        },
      };
    }
  },
};
