<template>
  <div>
    <div class="login-form">
      <div class="g-form">
        <!-- <div class="g-form-line">
          <span class="g-form-label">用户名：</span>
          <div class="g-form-input">
            <input type="text" placeholder="请输入用户名" v-model="usernameModel">
          </div>
          <span class="g-form-error">{{userErrors.errorText}}</span>
        </div> -->
      
         <div class="g-form-line">
             <span class="g-form-label">邮箱</span>
             <div class="g-form-input">
                 <input v-validate ="'required|email'" type="text" id="email" name="myEmail">
             </div>
              <span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span>
        </div>
           
        <!--密码
        <div class="g-form-line">
          <span class="g-form-label">密码：</span>
          <div class="g-form-input" >
            <input type="password"  placeholder="请输入密码" v-model="passwordModel">
          </div>
          <span class="g-form-error">{{ passwordErrors.errorText}}</span>
        </div>-->
        <!--确认密码
        <div class="g-form-line">
          <span class="g-form-label">确认密码：</span>
          <div class="g-form-input" >
            <input type="password"  placeholder="请输入确认密码" v-model="repasswordModel">
          </div>
          <span class="g-form-error">{{ repasswordErrors.errText }}</span>
        </div>
        按钮-->
        <!-- <div class="g-form-inline">
          <div class="g-form-btn">
            <a class="button" @click="onLogin">注册</a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
</style>
