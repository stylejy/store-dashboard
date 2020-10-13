<template>
	<div class="root">
		<h1>{{ title }}</h1>
		<h4>Maintainer: {{ maintainer }}</h4>
		<p id="description">{{ description }}</p>
		<div class="filter">
			<span>Filter: </span>
			<button v-on:click="filter = 'all'">All</button>
			<button v-on:click="filter = 'auth'">Auth Store</button>
			<button v-on:click="filter = 'room'">Room Store</button>
			<button v-on:click="filter = 'user'">User Store</button>
		</div>
		<span v-if="filter === 'all'">
			<li v-for="(item, index) in storeInfoList" v-bind:key="index">
				<StoreCard v-bind:storeInfo="item" />
			</li>
		</span>
		<span v-if="filter === 'auth'">
			<li v-for="(item, index) in getAuthCards" v-bind:key="index">
				<StoreCard v-bind:storeInfo="item" />
			</li>
		</span>
		<span v-if="filter === 'room'">
			<li v-for="(item, index) in getRoomCards" v-bind:key="index">
				<StoreCard v-bind:storeInfo="item" />
			</li>
		</span>
		<span v-if="filter === 'user'">
			<li v-for="(item, index) in getUserCards" v-bind:key="index">
				<StoreCard v-bind:storeInfo="item" />
			</li>
		</span>
	</div>
</template>

<script>
import StoreCard from './StoreCard.vue'
import { API } from 'aws-amplify'
import { listStores } from '../graphql/queries'

export default {
	name: 'Root',
	props: {
		title: String,
		maintainer: String,
		description: String,
	},
	async created() {
		this.listStoreInfos()
	},
	data: () => ({
		filter: 'all',
		storeInfoList: [],
	}),
	components: {
		StoreCard,
	},
	computed: {
		getAuthCards: function() {
			return this.storeInfoList.filter((item) => item.type === 'Auth')
		},
		getRoomCards: function() {
			return this.storeInfoList.filter((item) => item.type === 'Room')
		},
		getUserCards: function() {
			return this.storeInfoList.filter((item) => item.type === 'User')
		},
	},
	methods: {
		async listStoreInfos() {
			const storeInfos = await API.graphql({
				query: listStores,
			})
			this.storeInfoList = storeInfos.data.listStores.items
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.root .filter {
	width: 100%;
	padding: 10px 0;
	border-bottom: 1px solid gainsboro;
	border-top: 1px solid gainsboro;
}
#description {
	max-width: 700px;
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
button {
	margin: 0 10px;
	color: #2c3e50;
	cursor: pointer;
}
</style>
