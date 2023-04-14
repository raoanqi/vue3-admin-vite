/*
* login页面中的接口
* ts中接口可以用来描述对象的组成
*
* */

// 登录表单约束接口
interface ILoginForm {
    username: string
    password: string
}

// 登录表单的类，这个类收到ILoginForm接口的约束
class LoginForm {
    loginForm: ILoginForm = {
        username: '',
        password: ''
    }
}

export default {
    ILoginForm,
    LoginForm
}