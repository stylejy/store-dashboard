<template>
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
        <router-link :to="{ name: 'store-details', params: { storeInfo } }">
          코멘트 - 질문, 이슈 등록 및 확인
        </router-link>
      </p>
      <p>
        Author: <b>{{ storeInfo.author }}</b
        >, Maintainer: <b>{{ storeInfo.maintainer }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreCard",
  props: {
    storeInfo: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status .list {
  margin-left: 5px;
}
.body .top {
  display: flex;
  flex-direction: row;
  align-items: center;
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
  text-align: start;
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
