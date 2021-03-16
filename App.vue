<script>
	import store from './store/index.js'
	import { authLogin } from '@/api/base.js'
	import { mapState, mapMutations } from 'vuex';
	export default {
		onLaunch(option) {
			console.log('option', option);
			if(option.query.t){
				this.authLogin(option.query.t, option.path, option.query);
			}
			this.getWxAppName();
		},
		computed: {
			...mapState(['appTitle', 'api', 'otherOpenid', 'openid', 'token', 'userInfo', 'phone', 'key', 'unionid', 'nickName',
				'avatar'
			]),
		},
		methods: {
			...mapMutations([
				'changeOpenid',
				'changeOtherOpenid',
				'changeLogin',
				'changeToken',
				'changePhone',
				'changeKey',
				'changeUnionid',
				'changeUserInfo',
				'changeAvatar',
				'changeNickName'
			]),
			// 权限登陆
			authLogin(t, path, query){
				authLogin({
					method: 'post',
					data: {
						taskid: t
					}
				}).then(res=>{
					if(res.code == 1){
						this.changeToken(res.data.token);
						this.changeOpenid(res.data.openid);
						this.changePhone(res.data.mobile);
						this.changeAvatar(res.data.avatar);
						this.changeNickName(res.data.nickname);
						// 页面跳转处理
						if(
							path != 'pages/tabbar/index/index' ||
							path != 'pages/tabbar/message/message' ||
							path != 'pages/tabbar/find/find' ||
							path != 'pages/tabbar/lawyer/lawyer' ||
							path != 'pages/tabbar/user/user'
						){
							let url = ''
							for(let key in query){
								if(key != 't'){
									if(url){
										url += '&' + key + '=' +  query[key];
									}else{
										url = '?' + url + key + '=' +  query[key];
									}
								}
							}
							console.log(path + url);
							uni.redirectTo({
							    url: '/' + path + url
							});
						}
					}
					console.log(res);
				})
			},
			// 获取微信小程序名称
			getWxAppName(){
				// #ifdef MP-WEIXIN || MP-BAIDU
				let appid = uni.getAccountInfoSync().miniProgram.appId;
				uni.request({
					url: 'https://news.64645.cn/mini/Index/programTitle',
					method: 'POST',
					data: {
						appid
					},
					success: res => {
						console.log(res);
						res = res.data;
						let title = res.data.title;
						store.commit('changeAppTitle', title);
					}
				});
				// #endif
			}
		},
		onShow() {

		},
		onHide() {
			console.log('App Hide')
		}
	}
</script>

<style>
	
	/*每个页面公共css */
	view,
	div,
	input,
	button,
	text,
	i,
	span,
	li,
	p,
	textarea,
	navigator {
		box-sizing: border-box;
	}
	.font-icon {
		fill: currentColor;
		overflow: hidden;
	}
	button:after {
		border: 0!important;
	}
</style>
