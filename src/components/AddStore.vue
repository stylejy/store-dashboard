<template>
	<div class="addStore">
		<h1>{{ title }}</h1>
		<h4>Maintainer: {{ maintainer }}</h4>
		<p id="description">{{ description }}</p>
		<ul>
			<li>all</li>
		</ul>
		<li v-for="(item, index) in storeInfoList" v-bind:key="index">
			<StoreCard v-bind:storeInfo="item" />
		</li>
	</div>
</template>

<script>
import StoreCard from './StoreCard.vue'
import { API } from 'aws-amplify'
import { listStores } from '../graphql/queries'

export default {
	name: 'AddStore',
	props: {
		title: String,
		maintainer: String,
		description: String,
	},
	async created() {
		this.listStoreInfos()
	},
	data: () => ({
		storeInfoList: [
			{
				name: 'searchPtaskUserByEmail',
				type: 'User',
				repo: 'getEmailSearchedPtaskUser',
				returnType: 'User Model',
				author: '이주영',
				maintainer: '이주영',
				description: '(Ptask 전용) 조직도에서 이메일로 유저 검색하는데 사용',
				params: ['userId: string', 'email: string'],
			},
			{
				name: 'searchPtaskUserByName',
				type: 'User',
				repo: 'getNameSearchedPtaskUser',
				returnType: 'User Model',
				author: '이주영',
				maintainer: '이주영',
				description: '(Ptask 전용) 조직도에서 이름으로 유저 검색하는데 사용',
				params: ['userId: string', 'name: string'],
			},
		],
	}),
	components: {
		StoreCard,
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
#description {
	max-width: 650px;
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
</style>
