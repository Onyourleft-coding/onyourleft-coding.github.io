var e=(e,s,t)=>new Promise(((o,r)=>{var l=e=>{try{i(t.next(e))}catch(s){r(s)}},a=e=>{try{i(t.throw(e))}catch(s){r(s)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(l,a);i((t=t.apply(e,s)).next())}));import{u as s}from"./index-c94c6c02.js";import{s as t}from"./pinia-80098649.js";import{u as o}from"./vue-router-c40bccc1.js";import{E as r}from"./element-plus-37eb5280.js";import{o as l,c as a,a as i,X as m,R as u,u as p,ag as n,V as d}from"./@vue-cf17e384.js";import"./pinia-plugin-persist-70d140bd.js";import"./@element-plus-1ad8e14d.js";import"./vue-demi-71ba0ef2.js";import"./lodash-es-9f1a9679.js";import"./@vueuse-08f70020.js";import"./@popperjs-0e77d79c.js";import"./@ctrl-91de2ec7.js";import"./dayjs-61c2d724.js";import"./ali-oss-78f4d6fe.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-500438c6.js";import"./@floating-ui-c5dc13b6.js";const c={class:"h-screen flex items-center justify-center flex-col"},f=i("div",{class:"mb-8 text-3xl font-semibold"},"截图生成模板",-1),j={class:"w-1/5"},v={class:"flex justify-center"},h={__name:"index",setup(h){const y=o(),{useUserStore:x}=s(),{form:w}=t(x);function V(s){return e(this,null,(function*(){yield x.sumbit(),r.success("登录成功"),y.push("/home")}))}return(e,s)=>{const t=n("el-input"),o=n("el-form-item"),r=n("el-button"),h=n("el-form");return l(),a("div",c,[f,i("div",j,[m(h,{model:p(w)},{default:u((()=>[m(o,{label:"账号",required:""},{default:u((()=>[m(t,{modelValue:p(w).name,"onUpdate:modelValue":s[0]||(s[0]=e=>p(w).name=e)},null,8,["modelValue"])])),_:1}),m(o,{label:"密码",required:""},{default:u((()=>[m(t,{modelValue:p(w).password,"onUpdate:modelValue":s[1]||(s[1]=e=>p(w).password=e),type:"password"},null,8,["modelValue"])])),_:1}),i("div",v,[m(r,{type:"primary",onClick:V},{default:u((()=>[d("登录")])),_:1})])])),_:1},8,["model"])])])}}};export{h as default};
