<template>
	<div class="login-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-label">用户名:</span>
				<div class="g-form-input">
					<input type="text" v-model="usernameModel" placeholder="请输入用户名" />
				</div>
				<span class="g-form-error">{{ userErrors.errorText }}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码:</span>
				<div class="g-form-input">
					<input type="password" v-model="passwordModel" placeholder="请输入密码" />
				</div>
				<span class="g-form-error">{{ passwordErrors.errorText }}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">重复密码:</span>
				<div class="g-form-input">
					<input type="password" v-model="confirmPasswordModel" placeholder="请再次输入密码" />
				</div>
				<span class="g-form-error">{{ passwordErrors.errorText }}</span>
			</div>
			<div class="g-form-line">
				<div class="g-form-btn">
		        	<a class="button" @click="onReg">注册</a>
		        </div>
			</div>
			<p>{{ errorText }}</p>
		</div>
	</div>
</template>

<script>
	data () {
		return {
			usernameModel: '',
		    passwordModel: '',
		    errorText: ''	
		}
	},
	computed : {
		userErrors () {
			let errorText, status;
			if (!/@/g.test(this.usernameModel)) {
		        status = false
		        errorText = '不包含@'
			}else {
		        status = true
		        errorText = ''
		    }
		    if (!this.userFlag) {
		        errorText = ''
		        this.userFlag = true
		    }
		    return {
		        status,
		        errorText
		    }
		},
		passwordErrors () {
			let errorText, status;
			console.log(/^\w{1,6}$/g.test(this.passwordModel))
			if (!/^\w{6,18}$/g.test(this.passwordModel)) {
		        status = false
		        errorText = '密码不是6-18位'
		    }else {
		        status = true
		        errorText = ''
		    }
		    if (!this.passwordFlag) {
		        errorText = ''
		        this.passwordFlag = true
		    }
		    return {
		        status,
		        errorText
		    }
		},
		confirmPasswordModel () {
			let errorText, status;
			
			if (this.confirmPasswordModel != this.passwordModel) {
		        status = false
		        errorText = '两次输入的密码不一致'
		    }else {
		        status = true
		        errorText = ''
		    }
		    if (!this.confirmPasswordFlag) {
		        errorText = ''
		        this.confirmPasswordFlag = true
		    }
		    return {
		        status,
		        errorText
		    }
		}
	},
	methods : {
		onReg () {
			console.log(this.passwordErrors)
			if (!this.userErrors.status || !this.passwordErrors.status || this.confirmPasswordModel.status) {
				this.errorText = '部分选项不通过'
			}else{
				this.errorText = ''
		        this.$http.get('api/login',{params:{
		        	username : this.usernameModel,
		        	password : this.passwordModel
		        }})
		        .then((res) => {
		        	/*if (res.data.length == 0) {
		        	}else{
		        		
		        	}*/
		          	this.$emit('has-reg', res.data)
		        }, (error) => {
		          	console.log(error)
		        })
			}
		},
		regUser () {
			
		}
	}
</script>

<style>
</style>