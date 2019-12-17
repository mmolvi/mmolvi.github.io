(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(s,t,n){s.exports=n.p+"assets/img/send-transaction.29cfb8fc.png"},224:function(s,t,n){"use strict";n.r(t);var e=n(0),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"send-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-transaction"}},[s._v("#")]),s._v(" Send Transaction")]),s._v(" "),e("p",[s._v("This example show how to send fund from one account to another account with the help of injected enzyme wallet.")]),s._v(" "),e("h2",{attrs:{id:"javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[s._v("#")]),s._v(" Javascript")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import { web3FromAddress } from '@polkadot/extension-dapp';\n\n// finds an injector for an address\nconst injector = await web3FromAddress('5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE');\n\n// sets the signer for the address on the @polkadot/api\napi.setSigner(injector.signer);\n\n// sign and send out transaction - notice here that the address of the account (as retrieved injected)\n// is passed through as the param to the `signAndSend`, the API then calls the extension to present\n// to the user and get it signed. Once completex, the api sends the tx + signature via the normal process\napi.tx.balances\n  .transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 123456)\n  .signAndSend('5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE', (status) => { ... });\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("img",{attrs:{src:n(204),width:"300"}})])}),[],!1,null,null,null);t.default=a.exports}}]);