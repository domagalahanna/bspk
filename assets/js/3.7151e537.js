(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{306:function(t,e,a){var r=a(0),s=a(3),i=a(61),n=[].slice,o=function(t){return function(e,a){var r=arguments.length>2,s=r?n.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,s)}:e,a)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:o(s.setTimeout),setInterval:o(s.setInterval)})},318:function(t,e,a){},358:function(t,e,a){"use strict";a(318)},398:function(t,e,a){"use strict";a.r(e);a(306);var r={data:function(){return{errors:[],isFormDisabled:!1,firstName:null,lastName:null,email:null,company:null,job:null,country:null,numberSales:null,numberStores:null}},mounted:function(){var t=this;this.initReCaptcha(),this.$root.$emit("update-locoscroll"),setTimeout((function(){t.$root.$emit("update-locoscroll")}),500)},methods:{validate:function(t){t.preventDefault(),this.checkForm()&&!1===t.target.disabled&&grecaptcha.execute()},initReCaptcha:function(){var t=this;setTimeout((function(){"undefined"==typeof grecaptcha?t.initReCaptcha():grecaptcha.ready((function(){grecaptcha.render("contactformcaptcha",{sitekey:"6LeTXT0aAAAAAK-QGc21nbrcIRo0v73TsF_CA55Y",size:"invisible",callback:t.submit})}))}),100)},getRequiredFilled:function(){return this.firstName&&this.lastName&&this.email&&this.company&&this.job&&this.country&&this.numberSales&&this.numberStores},checkForm:function(){return!!this.getRequiredFilled()||(this.errors=[],this.firstName||this.errors.push("First name"),this.lastName||this.errors.push("Last name"),this.email||this.errors.push("Email"),this.company||this.errors.push("Company"),this.job||this.errors.push("Job"),this.country||this.errors.push("Country"),this.numberSales||this.errors.push("Number of sales advisors"),this.numberStores||this.errors.push("Number of stores"),this.$root.$emit("locoscroll-scroll-to-errors"),!1)},submit:function(t){this.$refs.contactForm.submit()},toggleButton:function(t){this.isFormDisabled=!t.target.checked}}},s=(a(358),a(23)),i=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-wrapper"},[a("p",{directives:[{name:"show",rawName:"v-show",value:t.errors.length,expression:"errors.length"}],staticClass:"error-message",attrs:{id:"errors"}},[t._v("\n    Please fill in required fields:\n    "),a("ul",t._l(t.errors,(function(e){return a("li",[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),a("form",{ref:"contactForm",staticClass:"form",attrs:{action:"https://formspree.io/f/xwkwyalg",method:"POST"}},[a("div",{staticClass:"input-wrapper input-wrapper--required"},[a("label",{attrs:{for:"first-name"}},[t._v("First name *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{name:"First-name",id:"first-name",type:"text",maxlength:"100"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrapper input-wrapper--required"},[a("label",{attrs:{for:"last-name"}},[t._v("Last name *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{name:"Last-name",id:"last-name",type:"text",maxlength:"100"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrapper input-wrapper--required"},[a("label",{attrs:{for:"email"}},[t._v("Email *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{name:"Email",id:"email",type:"email",maxlength:"100"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("label",{attrs:{for:"company-name"}},[t._v("Company name *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],attrs:{name:"Company-name",id:"company-name",type:"text",maxlength:"100"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("label",{attrs:{for:"job-title"}},[t._v("Job title *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.job,expression:"job"}],attrs:{name:"Job-title",id:"job-title",type:"text",maxlength:"100"},domProps:{value:t.job},on:{input:function(e){e.target.composing||(t.job=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("label",{attrs:{for:"country"}},[t._v("Country *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{name:"Country",id:"country",type:"text",maxlength:"100"},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("label",{attrs:{for:"sales-advisor"}},[t._v("Number of sales advisors *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.numberSales,expression:"numberSales"}],attrs:{name:"Sales-advisor",id:"sales-advisor",type:"number",maxlength:"6"},domProps:{value:t.numberSales},on:{input:function(e){e.target.composing||(t.numberSales=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrapper"},[a("label",{attrs:{for:"stores"}},[t._v("Number of stores *")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.numberStores,expression:"numberStores"}],attrs:{name:"Stores",id:"stores",type:"number"},domProps:{value:t.numberStores},on:{input:function(e){e.target.composing||(t.numberStores=e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"description"},[t._v("\n        * indicates required fields\n      ")]),t._v(" "),a("div",{staticClass:"input-wrapper input-wrapper--full input-wrapper--checkbox"},[a("input",{attrs:{type:"checkbox",id:"consent",name:"consent",checked:""},on:{change:t.toggleButton}}),t._v(" "),a("label",{attrs:{for:"consent"}},[t._v("\n          I accept the "),a("router-link",{attrs:{to:"/privacy-policy/"}},[t._v("Privacy & Cookies Policy")])],1)]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"input-wrapper input-wrapper--full"},[a("button",{staticClass:"button button--large",attrs:{disabled:t.isFormDisabled},on:{click:t.validate}},[t._v("\n          Submit\n        ")])]),t._v(" "),a("div",{staticClass:"g-recaptcha",attrs:{id:"contactformcaptcha"}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-wrapper input-wrapper--full"},[e("label",{attrs:{for:"user-comments"}},[this._v("Comments")]),this._v(" "),e("textarea",{attrs:{placeholder:"Add your message...",name:"Comments",id:"user-comments",maxlength:"1000"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"recaptcha-message"},[this._v("\n        This site is protected by reCAPTCHA and the Google \n        "),e("a",{attrs:{target:"_blank",href:"https://policies.google.com/privacy"}},[this._v("Privacy Policy")]),this._v("\n          and \n        "),e("a",{attrs:{target:"_blank",href:"https://policies.google.com/terms"}},[this._v("Terms of Service")]),this._v(" apply.\n      ")])}],!1,null,"06305a8a",null);e.default=i.exports}}]);