function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in l)return l[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return l[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var s=n("kEUo3");const o=document.querySelector(".feedback-form"),r=localStorage.getItem('"feedback-form-state"');if(r){const e=JSON.parse(r);var i,u;o.elements.email.value=null!==(i=e.Email)&&void 0!==i?i:"",o.elements.message.value=null!==(u=e.Message)&&void 0!==u?u:""}else o.elements.email.value="",o.elements.message.value="";o.addEventListener("input",e(s).throttle((()=>{const e={Email:o.elements.email.value,Message:o.elements.message.value};localStorage.setItem('"feedback-form-state"',JSON.stringify(e))}),500)),o.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem('"feedback-form-state"'),console.log({Email:o.elements.email.value,Message:o.elements.message.value}),o.reset()}));
//# sourceMappingURL=03-feedback.eba098a6.js.map
