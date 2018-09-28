!function(e){function t(t){for(var o,s,l=t[0],r=t[1],u=t[2],c=0,p=[];c<l.length;c++)s=l[c],i[s]&&p.push(i[s][0]),i[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var r=n[l];0!==i[r]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={0:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=r;a.push([467,1]),n()}({1150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Title=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(139),a=function(e){return e&&e.__esModule?e:{default:e}}(n(466));var s=t.Title=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:a.default.title}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Scene),o(t,[{key:"create",value:function(){var e=this;this.input.keyboard.once("keydown",function(t){e.scene.start(a.default.pong)});var t=this.cameras.main.width,n=this.cameras.main.height;this.make.text({x:t/2,y:n/2-50,text:"Four Player Super Awesome Pong",style:{font:"20px monospace",fill:"#ffffff"}}).setOrigin(.5,.5),this.make.text({x:t/2,y:n/2,text:"Press any key to play",style:{font:"20px monospace",fill:"#ffffff"}}).setOrigin(.5,.5)}}]),t}();t.default=s},1151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=r(n(139)),a=r(n(1152)),s=r(n(1153)),l=r(n(466));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:l.default.pong}));return e.getRandomArbitrary=function(e,t){var n=Math.random()*(t-e)+e;return n>-.75&&n<0?-.75:n<.75&&n>0?.75:n},e.paddle,e.ball,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Scene),o(t,[{key:"preload",value:function(){this.load.atlas(s.default.assets,"assets/breakout.png","assets/breakout.json")}},{key:"create",value:function(){this.setUpObjects(),this.physics.add.collider(this.ball,this.paddle,this.hitPaddle,null,this),this.physics.add.collider(this.ball,this.paddle2,this.hitPaddle,null,this),this.physics.add.collider(this.ball,this.paddle3,this.hitPaddle,null,this),this.physics.add.collider(this.ball,this.paddle4,this.hitPaddle,null,this),this.scores=[0,0],this.redTeamScore=this.make.text({x:0,y:0,text:"Red Team: 0",style:{font:"20px monospace",fill:"#ff0044"}}),this.blueTeamScore=this.make.text({x:this.cameras.main.width-150,y:0,text:"Blue Team: 0",style:{font:"20px monospace",fill:"#0000ff"}})}},{key:"update",value:function(){var e=this.ball.y>this.cameras.main.height,t=this.ball.y<0,n=this.ball.x<0,o=this.ball.x>this.cameras.main.width;(e||t)&&(this.scores[0]+=1,this.resetBall()),(n||o)&&(this.scores[1]+=1,this.resetBall())}},{key:"hitPaddle",value:function(e,t){e.x<t.x?e.setVelocityX(-10*(t.x-e.x)):e.x>t.x?e.setVelocityX(10*(e.x-t.x)):e.setVelocityX(2+10*Math.random()),e.y<t.y?e.setVelocityY(-10*(t.y-e.y)):e.y>t.y?e.setVelocityY(10*(e.y-t.y)):e.setVelocityY(2+10*Math.random())}},{key:"resetBall",value:function(){this.ball.setVelocity(0),this.ball.setPosition(400,300),this.ball.setData("onPaddle",!0),this.redTeamScore.setText("Red Team: "+this.scores[0]),this.blueTeamScore.setText("Blue Team: "+this.scores[1])}},{key:"setUpObjects",value:function(){this.ball=this.physics.add.image(400,300,s.default.assets,a.default.ball).setBounce(1),this.ball.setData("onPaddle",!0),this.paddle=this.physics.add.image(400,550,s.default.assets,a.default.paddle).setImmovable().setCollideWorldBounds(!0),this.paddle2=this.physics.add.image(400,50,s.default.assets,a.default.paddle).setImmovable().setCollideWorldBounds(!0),this.paddle3=this.physics.add.image(50,300,s.default.assets,a.default.otherPaddle).setImmovable().setCollideWorldBounds(!0),this.paddle3.setRotation(1.5708),this.paddle3.body.setSize(24,104,50,50),this.paddle4=this.physics.add.image(750,300,s.default.assets,a.default.otherPaddle).setImmovable().setCollideWorldBounds(!0),this.paddle4.setRotation(1.5708),this.paddle4.body.setSize(24,104,50,50),this.setUpInputEvents()}},{key:"setUpInputEvents",value:function(){var e=this;this.input.keyboard.on("keyup_SPACE",function(t){e.ball.getData("onPaddle")&&(e.ball.setVelocity(300*e.getRandomArbitrary(-1,1),300*e.getRandomArbitrary(-1,1)),e.ball.setData("onPaddle",!1))},this);this.setUpInputForPaddle1(500),this.setUpInputForPaddle2(500),this.setUpInputForPaddle3(500),this.setUpInputForPaddle4(500),this.input.keyboard.on("keydown_ESC",function(t){e.scene.start(l.default.title)})}},{key:"setUpInputForPaddle1",value:function(e){var t=this;this.input.keyboard.on("keydown_LEFT",function(n){t.paddle.setVelocityX(-e)}),this.input.keyboard.on("keydown_RIGHT",function(n){t.paddle.setVelocityX(e)}),this.input.keyboard.on("keyup_LEFT",function(e){t.paddle.setVelocityX(0)}),this.input.keyboard.on("keyup_RIGHT",function(e){t.paddle.setVelocityX(0)})}},{key:"setUpInputForPaddle2",value:function(e){var t=this;this.input.keyboard.on("keydown_A",function(n){t.paddle2.setVelocityX(-e)}),this.input.keyboard.on("keydown_D",function(n){t.paddle2.setVelocityX(e)}),this.input.keyboard.on("keyup_A",function(e){t.paddle2.setVelocityX(0)}),this.input.keyboard.on("keyup_D",function(e){t.paddle2.setVelocityX(0)})}},{key:"setUpInputForPaddle3",value:function(e){var t=this;this.input.keyboard.on("keydown_W",function(n){t.paddle3.setVelocityY(-e)}),this.input.keyboard.on("keydown_S",function(n){t.paddle3.setVelocityY(e)}),this.input.keyboard.on("keyup_W",function(e){t.paddle3.setVelocityY(0)}),this.input.keyboard.on("keyup_S",function(e){t.paddle3.setVelocityY(0)})}},{key:"setUpInputForPaddle4",value:function(e){var t=this;this.input.keyboard.on("keydown_UP",function(n){t.paddle4.setVelocityY(-e)}),this.input.keyboard.on("keydown_DOWN",function(n){t.paddle4.setVelocityY(e)}),this.input.keyboard.on("keyup_UP",function(e){t.paddle4.setVelocityY(0)}),this.input.keyboard.on("keyup_DOWN",function(e){t.paddle4.setVelocityY(0)})}}]),t}();t.default=u},1152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={bricks:["blue1","red1","green1","yellow1","silver1","purple1"],ball:"ball1",paddle:"paddle1",otherPaddle:"paddle2"}},1153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={assets:"assets"}},466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={title:"title",pong:"pong"}},467:function(e,t,n){e.exports=n(468)},468:function(e,t,n){"use strict";var o=s(n(139)),i=s(n(1150)),a=s(n(1151));function s(e){return e&&e.__esModule?e:{default:e}}var l={type:o.default.AUTO,width:800,height:600,parent:"content",physics:{default:"arcade"},scene:[i.default,a.default]};new o.default.Game(l)}});
//# sourceMappingURL=main.js.map