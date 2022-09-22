"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[716],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,c(c({ref:t},d),{},{components:r})):n.createElement(h,c({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5583:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),c=["components"],i={id:"track-review-merge",title:"Track, review, and merge patches"},l=void 0,s={unversionedId:"using-radicle/track-review-merge",id:"using-radicle/track-review-merge",title:"Track, review, and merge patches",description:"As a project's delegate, you can review and merge patches from any",source:"@site/docs/using-radicle/track-review-merge.md",sourceDirName:"using-radicle",slug:"/using-radicle/track-review-merge",permalink:"/using-radicle/track-review-merge",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/track-review-merge.md",tags:[],version:"current",frontMatter:{id:"track-review-merge",title:"Track, review, and merge patches"},sidebar:"docsSidebar",previous:{title:"Clone a project",permalink:"/using-radicle/clone"},next:{title:"Manage your Radicle identity",permalink:"/using-radicle/identity"}},d={},u=[{value:"Track a remote user",id:"track-a-remote-user",level:2},{value:"Review on your local system with <code>git</code>",id:"review-on-your-local-system-with-git",level:2},{value:"Collaborate on changes",id:"collaborate-on-changes",level:2},{value:"Merge the patch",id:"merge-the-patch",level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a project's ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/glossary#delegate"},"delegate"),", you can review and merge patches from any\ncollaborator back into the canonical branch (typically ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),") of the project."),(0,o.kt)("h2",{id:"track-a-remote-user"},"Track a remote user"),(0,o.kt)("p",null,"To review and merge any code, you first need to find any patches to your project that have been published to a Radicle\nseed node. ",(0,o.kt)("inlineCode",{parentName:"p"},"rad track --remote")," queries the project's default seed node and returns a list of collaborators' Peer IDs\nand their branches."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"rad track --seed <seed-url>")," to query other seed nodes for possible patches from other\nRadicle users.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rad track --remote\nradicle-example rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy (willow.radicle.garden)\n\u251c\u2500\u2500 hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy docs-tester\n\u2502   \u2514\u2500\u2500 main 5198e4c43412ecf34ecef812dcffec4efb6eb62c Change to gitignore\n\u2502\n\u251c\u2500\u2500 hynz3cahu1pnmah6a1m59en8c6bujbc5go5inst8chmcr8ahn6byw4 joelhans\n\u2502   \u2514\u2500\u2500 main 9733b3735dd4424666a384e6a397a11c69bac818 Add context to README\n\u2502\n\u2514\u2500\u2500 hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk joelhans delegate you\n    \u2514\u2500\u2500 main e2cc2f98df61de3503edfcf6904993add918cda6 Add example folder and files\n")),(0,o.kt)("p",null,"In the example above, you can see the canonical ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch, managed by the project's single delegate, in addition to\ntwo additional source trees from collaborators."),(0,o.kt)("p",null,"Let's say you want to track the patch from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs-tester")," user. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"rad track <peer-id>")," to track the remote peer\nfrom your working copy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rad track hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy\n\ud83c\udf31 Establishing tracking relationship for rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy...\nok Tracking relationship hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy established\nok Syncing peer refs from willow.radicle.garden...\nok Remote-tracking branch peer/docs-tester/main created for hynh7gx\u20266zucqfy\n")),(0,o.kt)("p",null,"This sets up a remote in your working copy and a tracking branch named after the peer and project's default branch \u2014 for\nexample, ",(0,o.kt)("inlineCode",{parentName:"p"},"peer/docs-tester/main"),", which you can see in the last line of the above output."),(0,o.kt)("h2",{id:"review-on-your-local-system-with-git"},"Review on your local system with ",(0,o.kt)("inlineCode",{parentName:"h2"},"git")),(0,o.kt)("p",null,"Compare the tracking branch against the local state of your canonical branch with ",(0,o.kt)("inlineCode",{parentName:"p"},"git diff"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git diff main..peer/docs-tester/main\n")),(0,o.kt)("h2",{id:"collaborate-on-changes"},"Collaborate on changes"),(0,o.kt)("p",null,"There currently is no code review or commenting features built into Radicle. All this communication happens outside of\nRadicle tooling, and the processes are entirely up to your discretion. "),(0,o.kt)("p",null,"As you work through the review process with your collaborator, they will need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad push")," on occasion to make sure\nyou're looking at the same state of the code."),(0,o.kt)("h2",{id:"merge-the-patch"},"Merge the patch"),(0,o.kt)("p",null,"Once you're happy with the changes, merge them into your local copy and push everything to your project, updating the\nprimary branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git merge peer/docs-tester/main\nrad push\n")))}m.isMDXComponent=!0}}]);