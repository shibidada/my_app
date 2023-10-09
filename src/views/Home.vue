<template>
  <el-row>
    <el-col :span="7">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/images/usericon.jpeg" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">スーパーユーザー</p>
          </div>
        </div>
        <div class="login-info">
          <p>ラストログイン時点：<span>2021-7-19</span></p>
          <p>ラストログイン場所：<span>東京</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" style="width: 100%">
          <!-- <el-table-column prop="name" label="ブランド"> </el-table-column>
          <el-table-column prop="todayBuy" label="本日売上"> </el-table-column>
          <el-table-column prop="monthBuy" label="当月売上"> </el-table-column>
          <el-table-column prop="totalBuy" label="総売上"> </el-table-column> -->
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="17">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">¥ {{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getData } from "../api";
export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "ブランド",
        todayBuy: "本日売上",
        monthBuy: "当月売上",
        totalBuy: "総売上",
      },
      countData: [
        {
          name: "本日入金済注文",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本日いいね数",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本日未入金注文",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "今月入金済注文",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今月いいね数",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今月未入金注文",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data;
      this.tableData = tableData;
    });
  },
};
</script>
<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
</style>
