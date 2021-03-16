import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defaultOpenid,
	defaultOtherOpenid,
	defaultToken,
	defaultKey,
	defaultUnionid,
	defaultUserInfo,
	defaultPhone,
	defaultUserInfoNew,
	defaultAvatar,
	defaultNickName,
	defaultAppTitle;

try {
	defaultOpenid = uni.getStorageSync('openid');
	defaultOtherOpenid = uni.getStorageSync('otherOpenid');
	defaultToken = uni.getStorageSync('token');
	defaultKey = uni.getStorageSync('key');
	defaultUnionid = uni.getStorageSync('unionid');
	defaultUserInfo = uni.getStorageSync('userInfo');
	defaultAvatar = uni.getStorageSync('avatar');
	defaultNickName = uni.getStorageSync('nickName');
	defaultPhone = uni.getStorageSync('phone');
	defaultAppTitle = uni.getStorageSync('appTitle');
} catch (e) {
	// error
}

const store = new Vuex.Store({
	state: {
		api: 'https://news.64645.cn',
		baseurl: 'https://news.64645.cn',
		openid: defaultOpenid ? defaultOpenid : '',
		otherOpenid: defaultOtherOpenid ? defaultOtherOpenid : '',
		token: defaultToken ? defaultToken : '',
		key: defaultKey?defaultKey:'',
		unionid: defaultUnionid?defaultUnionid:'',
		userInfo: defaultUserInfo?defaultUserInfo:'',
		avatar: defaultAvatar?defaultAvatar:'',
		nickName: defaultNickName?defaultNickName:'',
		phone: defaultPhone?defaultPhone:'',
		appTitle: defaultAppTitle?defaultAppTitle:'听律',
		isShowOrderWin: false,
	},
	mutations: {
		changeOpenid(state, openid) {
			state.openid = openid
			try {
				uni.setStorageSync('openid', openid);
			} catch (e) {}
		},
		changeOtherOpenid(state, otherOpenid) {
			state.otherOpenid = otherOpenid
			try {
				uni.setStorageSync('otherOpenid', otherOpenid);
			} catch (e) {}
		},
		changeToken(state, token) {
			state.token = token
			try {
				uni.setStorageSync('token', token);
			} catch (e) {}
		},
		changeKey(state, key) {
			state.key = key
			try {
				uni.setStorageSync('key', key);
			} catch (e) {}
		},
		changeUnionid(state, unionid) {
			state.unionid = unionid
			try {
				uni.setStorageSync('unionid', unionid);
			} catch (e) {}
		},
		changeUserInfo(state, userInfo) {
			state.userInfo = userInfo
			try {
				uni.setStorageSync('userInfo', userInfo);
			} catch (e) {}
		},
		changeAvatar(state, avatar) {
			state.avatar = avatar
			try {
				uni.setStorageSync('avatar', avatar);
			} catch (e) {}
		},
		changeNickName(state, nickName) {
			state.nickName = nickName
			try {
				uni.setStorageSync('nickName', nickName);
			} catch (e) {}
		},
		changePhone(state, phone) {
			state.phone = phone
			try {
				uni.setStorageSync('phone', phone);
			} catch (e) {}
		},
		changeAppTitle(state, appTitle) {
			state.appTitle = appTitle
			try {
				uni.setStorageSync('appTitle', appTitle);
			} catch (e) {}
		},
		changeIsShowOrderWin(state, isShowOrderWin){
			state.isShowOrderWin = isShowOrderWin
		},
		changeLogin(state) {
			try {
				state.openid = '';
				state.token = '';
				state.otherOpenid = '';
				state.key = '';
				state.unionid = '';
				state.userInfo = '';
				state.avatar = '';
				state.nickname = '';
				state.phone = '';
				try {
					uni.clearStorageSync();
				} catch (e) {
					// error
				}
			} catch (e) {}
		}
	}
})

export default store
