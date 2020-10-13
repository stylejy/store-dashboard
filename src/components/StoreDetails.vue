<template>
  <div class="storeDetails">
    <router-link to="/">리스트로 돌아가기</router-link>
    <div class="card">
      <div class="body">
        <div class="top">
          <h2 class="name">{{ storeInfo.name }}</h2>
          <div
            class="status"
            v-bind:style="{
              backgroundColor: storeInfo.status === 'RUNNING' ? 'green' : 'red',
            }"
          >
            {{ storeInfo.status }} on
            <div
              class="list"
              v-for="(item, index) in storeInfo.deployedServer"
              v-bind:key="index"
            >
              {{ item }} server(s)
            </div>
          </div>
        </div>

        <p class="description" v-html="storeInfo.description"></p>
        <div class="params">
          <p>Parameters:</p>
          <div class="paramItems">
            <li v-for="(item, index) in storeInfo.params" v-bind:key="index">
              <b>{{ item }}</b>
            </li>
          </div>
        </div>
        <p>
          Return Type: <b>{{ storeInfo.returnType }}</b>
        </p>
        <p>
          Store Type: <b>{{ storeInfo.type }} Store</b>
        </p>
        <p>
          Repository Function: <b>{{ storeInfo.repo }}</b>
        </p>
      </div>
      <div class="footer">
        <p>
          Author: <b>{{ storeInfo.author }}</b
          >, Maintainer: <b>{{ storeInfo.maintainer }}</b>
        </p>
      </div>
    </div>
    <div class="comment-insert">
      <div class="name">
        <span>이름: </span>
        <input v-model="name" size="10" placeholder="이름 입력" />
      </div>
      <div class="comment">
        <span>코멘트: </span>
        <textarea
          v-model="content"
          cols="35"
          placeholder="코멘트 입력"
        ></textarea>
      </div>
      <button v-on:click="createComment">입력</button>
    </div>
    <div class="comment-list">
      <div class="list" v-for="(item, index) in comments" v-bind:key="index">
        <div class="name">{{ item.name }}:</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStoreComment } from "../graphql/queries";
import { createComment } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

export default {
  name: "StoreDetails",
  props: {
    storeInfo: {},
  },
  async created() {
    this.listComments();
  },
  data: () => ({
    comments: [],
    name: null,
    content: null,
  }),
  methods: {
    async listComments() {
      const comments = await API.graphql(
        graphqlOperation(getStoreComment, { id: this.storeInfo.id })
      );
      this.comments = comments.data.getStore.comments.items;
    },
    async createComment() {
      console.log("test");
      const result = await API.graphql(
        graphqlOperation(createComment, {
          input: {
            name: this.name,
            content: this.content,
            commentPostId: this.storeInfo.id,
          },
        })
      );
      if (result.data.createComment.id) {
        this.comments.push(result.data.createComment);
        this.content = null;
      } else {
        alert("에러발생: 다시 시도해 주세요...");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment-list .list {
  width: 650px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 1px solid gainsboro;
  padding: 5px 0;
}
.list .name {
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 10px;
}
.list .content {
  width: 90%;
  max-width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.comment-insert button {
  width: 60px;
  height: 35px;
  margin: 5px 0;
}
.comment-insert .name {
  box-sizing: border-box;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
}
.comment-insert .comment {
  box-sizing: border-box;
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
}
.comment-insert {
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.status .list {
  margin-left: 5px;
}
.body .top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.status {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20px;
  margin: 0 20px;
  color: white;
  padding: 0 5px;
  font-weight: 600;
}
.description {
  margin: 0 0 10px;
}
.paramItems {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0;
}
.params {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 20px;
}
.body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.storeDetails {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
}
.card {
  width: 650px;
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  border-radius: 15px;
  border: 2px solid #2c3e50;
  margin: 10px 0 10px 0;
}
h2 {
  margin: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  margin: 5px 0;
}
</style>
