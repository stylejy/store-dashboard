import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import aws_exports from './aws-exports'
import Root from './components/Root.vue'
import StoreDetails from './components/StoreDetails.vue'

Amplify.configure(aws_exports)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
	{
		path: '/',
		component: Root,
		props: {
			title: 'Core Store Dashboard',
			maintainer: 'AC 2-3팀 이주영',
			description:
				'Core Store 중 User, Room, Auth Store에 대한 정보 및 개발 사항 공유입니다. 추후 전 스토어 사용 샘플도 업데이트 예정입니다. 각 서비스별 오류 및 문의 사항이 있으실 경우 아래 카드 안에 있는 코멘트 버튼을 통해서 글 남겨 주시면 감사드리겠습니다.',
		},
	},
	{
		path: '/store-details',
		name: 'store-details',
		component: StoreDetails,
		props: true,
	},
]

const router = new VueRouter({
	routes,
})

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
