<template>
  <div>
    <div class="login-form">
      <div class="g-form">
       <div class="g-form-line">
             <span class="g-form-label">用户名</span>
             <div class="g-form-input">
                 <input v-validate ="'required|username'" type="text" id="email" name="myUsername">
             </div>
             <span v-show="errors.has('myUsername')" class="help is-danger">{{ errors.first('myUsername')}}</span>
        </div>
           <div class="g-form-line">
             <span class="g-form-label">手机号码</span>
             <div class="g-form-input">
                 <input v-validate ="'required|phonenumber'" type="text" id="phonenumber" name="myPnumber">
             </div>
             <span v-show="errors.has('myPnumber')" class="help is-danger">{{ errors.first('myPnumber')}}</span>
          </div>
      
         <div class="g-form-line">
             <span class="g-form-label">邮箱</span>
             <div class="g-form-input">
                 <input v-validate ="'required|email'" type="text" id="email" name="myEmail" :class="{'input': true, 'is-danger': errors.has('email') }">
             </div>
             <span v-show="errors.has('myEmail')" class="help is-danger">{{ errors.first('myEmail')}}</span>
          </div>
           
        <div class="g-form-line">
          <span class="g-form-label">密码：</span>
          <div class="g-form-input" >
            <input type="password"  v-validate="'required|password'" id="password" name="myPassWord"  placeholder="请输入密码" >
          </div>
          <span v-show="errors.has('myPassWord')" class="help is-danger">{{ errors.first('myPassWord')}}</span>
        </div>
     
        <div class="g-form-line">
          <span class="g-form-label">确认密码：</span>
          <div class="g-form-input" >
            <input type="password"  placeholder="请输入确认密码" >
          </div>
         
        </div>
    
        <div class="g-form-inline">
          <div class="g-form-btn">
            <a class="button" >注册</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
input.is-danger{
  border-color: red;
}
.help.is-danger{
    color:red;
  }
</style>
