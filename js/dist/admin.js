(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const a=flarum.core.compat["admin/app"];var r=e.n(a);r().initializers.add("katosdev-signature",(function(){r().extensionData.for("katosdev-signature").registerSetting({setting:"signature.maximum_image_count",type:"number",label:r().translator.trans("signature.admin.settings.maximum_image_count.description"),help:r().translator.trans("signature.admin.settings.maximum_image_count.help")}).registerSetting({setting:"signature.maximum_char_limit",type:"number",label:r().translator.trans("signature.admin.settings.maximum_char_limit.description"),help:r().translator.trans("signature.admin.settings.maximum_char_limit.help")}).registerPermission({permission:"moderateSignature",icon:"fas fa-signature",label:r().translator.trans("signature.admin.permissions.edit_signature_others")},"moderate").registerPermission({permission:"haveSignature",icon:"fas fa-signature",label:r().translator.trans("signature.admin.permissions.allow_signature")},"start")}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map