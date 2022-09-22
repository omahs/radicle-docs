"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[706],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={id:"why-radicle",title:"Why Radicle?"},l=void 0,c={unversionedId:"understanding-radicle/why-radicle",id:"understanding-radicle/why-radicle",title:"Why Radicle?",description:"An overview of Radicle, what we're building and why.",source:"@site/docs/understanding-radicle/why-radicle.md",sourceDirName:"understanding-radicle",slug:"/understanding-radicle/why-radicle",permalink:"/understanding-radicle/why-radicle",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/understanding-radicle/why-radicle.md",tags:[],version:"current",frontMatter:{id:"why-radicle",title:"Why Radicle?"},sidebar:"docsSidebar",previous:{title:"Manage your Radicle identity",permalink:"/using-radicle/identity"},next:{title:"How it Works",permalink:"/understanding-radicle/how-it-works"}},d={},p=[{value:"An overview of Radicle, what we&#39;re building and why.",id:"an-overview-of-radicle-what-were-building-and-why",level:2},{value:"Exploring alternatives",id:"exploring-alternatives",level:3},{value:"Designing by principles",id:"designing-by-principles",level:3},{value:"Radicle: A peer-to-peer stack for code collaboration \ud83c\udf31",id:"radicle-a-peer-to-peer-stack-for-code-collaboration-",level:3},{value:"Revisiting the Bazaar",id:"revisiting-the-bazaar",level:3},{value:"Git gossips well",id:"git-gossips-well",level:3},{value:"Protocols, not platforms",id:"protocols-not-platforms",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"an-overview-of-radicle-what-were-building-and-why"},"An overview of Radicle, what we're building and why."),(0,r.kt)("p",null,"Throughout the last decade, open source has become a standard for software\ndevelopment. Sharing code freely and publicly has made it drastically cheaper\nand easier to build software\u2014and tech innovation is surging as a result."),(0,r.kt)("p",null,"Code hosting and collaboration platforms like GitHub and GitLab have contributed\nheavily to the growth of open source by bringing it to a mainstream audience.\nThey defined standard vocabulary and behaviors, made git accessible to a greater\naudience, empowered social coding, and created global communities of developers.\nIt is an undeniable fact that they have completely changed the way people write\ncode."),(0,r.kt)("p",null,"As the status quo for code collaboration, these platforms also host the largest\nrepositories of open source development made up of not just code, but issues,\npull requests, reviews, and comments. Even the social relationships\u2014stars,\nlikes, follows\u2014exist solely within these platforms."),(0,r.kt)("p",null,"These platforms, however, are owned by corporations. They are subject to\ncorporate law and have the right to define their terms of services. They can\nimplement user bans\u2014like those currently in place against Iranian, Syrian, and\nCrimean GitHub accounts in response to pressure from the U.S. government. They\nare vulnerable to censorship as well as corporate and state ends, which are often\nmisaligned with the goals of free and open source communities."),(0,r.kt)("p",null,"In a world where nearly all software relies on open source code, maintaining the\nresilience and health of the free and open source ecosystem is more important\nthan ever. That's why we believe that dependence on centrally hosted platforms\nand corporations for the distribution of critical open source infrastructure is\nunsustainable. Reliance on such centralized services contradicts the values of\nthe free and open source ecosystem and threatens its well-being."),(0,r.kt)("p",null,"Radicle was conceived as an alternative. Its goal is to eliminate intermediaries\nand create a peer-to-peer ecosystem that is robust, functional, and secure.\nThere must be an intentional shift in narrative to prioritize the adoption of\ndecentralized alternatives for code collaboration that abide by the principles\nof free and open source software."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"At the core of the open source ethos is the idea of liberty. Open source\nis about inverting power structures and creating access and opportunities\nfor everyone." \u2014 GitHub employees\' letter to GitHub\n')),(0,r.kt)("h3",{id:"exploring-alternatives"},"Exploring alternatives"),(0,r.kt)("p",null,"Alternatives to GitHub exist ranging from platforms like SourceForge and GitLab,\nto more established methods of collaboration such as mailing lists. Platforms\nlike Gitea or Gogs offer self-hosted and open source solutions for code\ncollaboration that have low platform risk but leave developers in isolated\nenvironments with no access to the global network of developers. One proposed\nalternative is federation. Proposals such as ForgeFed and federated GitLab are a\nstep in the right direction, but implementations are underdeveloped or lacking.\nIn addition, federation is dependent on domain names which can and are regularly\nseized by governments."),(0,r.kt)("p",null,"Other well-established open-source projects such as the Linux kernel adopt more\nbazaar and accessible development environments that aren't confined to single\nplatforms, such as mailing lists. These work, but they falter when held to the\nusability standard that platforms like GitHub have established."),(0,r.kt)("p",null,"Peer-to-peer protocols like Scuttlebutt have provided us with alternative\nsolutions to share and host information. These protocols are able to work\noffline without reliance on servers, but applications built on them lack the\nability for users to easily coordinate on a global scale. This isn't too much of\nan issue for a blogging or social networking use case, but when it comes to\nsoftware collaboration, a canonical global registry is necessary to meet the\nusability and discoverability standards of centralized platforms today. The\nability for anybody to contribute to any open source project no matter where\nthey are is necessary to cultivate a truly free and open network."),(0,r.kt)("h3",{id:"designing-by-principles"},"Designing by principles"),(0,r.kt)("p",null,"As we set out to build an alternative, we started by thinking about the values\nthat we recognize as integral to free and open source code collaboration. With\nthat said, we developed the following list of guiding principles:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It must prioritize user freedom In the words of the free software movement:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[\u2026] users have the freedom to run, copy, distribute, study, change and\nimprove the software. Thus, "free software" is a matter of liberty, not\nprice.\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It must be accessible and uncensorable"),(0,r.kt)("p",{parentName:"li"},"Anyone should have the freedom to use the software to collaborate with\nothers. No single party should be able to ban users from accessing the\nsystem, or content from being shared. It must be auditable and transparent.\nIn addition, users should have the freedom to control their interactions and\nthe content they see on an individual basis.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It must be user-friendly"),(0,r.kt)("p",{parentName:"li"},"The software must be easy to use and not expect tremendous change in\nbehavior from the user. Responsiveness and functionality must meet the\nstandards established by current platforms.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It must be offline-first"),(0,r.kt)("p",{parentName:"li"},"It must not require internet connectivity, DNS or online portals to\nfunction. There must be no single point of failure and it must be always\navailable.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It must not compromise on security"),(0,r.kt)("p",{parentName:"li"},"Trust in a third party or intermediary must not be required for use. Every\nartefact of the system must be attested with cryptographic signatures, and\nverified."))),(0,r.kt)("p",null,"Let\u2019s look at hosting platforms like GitHub or GitLab in the context of this\nframework: they succeed by being user-friendly and accessible, but since they\nare centrally controlled, they are censorable, and do not prioritize user\nfreedoms. If we look at self-hosted solutions like Gitea, Phabricator or Gogs,\nthey are free, uncensorable, and user-friendly, however, they are not easily\naccessible due to gate-keeping and isolated environments: users across\nPhabricator deployments cannot interact with each other. This is the case for\nall currently available self-hosted solutions we've looked at. They also present\nsingle points of failure and require internet connectivity for most interactions\nwith the system."),(0,r.kt)("p",null,"Hypothetically, a federated GitLab could fill all the requirements, however,\nfederated services cannot be offline-first and don\u2019t offer sovereignty over\nuser's identity. Users are tied to specific instances and thus subject to some\nof the same drawbacks as centralized services."),(0,r.kt)("p",null,"Bazaar-style solutions like the Linux Kernel mailing list succeed at almost all\noutlined principles, but are limited in terms of user friendliness. It's hard to\ncompare the usability of email threads to the sophisticated workflows possible\non platforms like GitHub and GitLab."),(0,r.kt)("h3",{id:"radicle-a-peer-to-peer-stack-for-code-collaboration-"},"Radicle: A peer-to-peer stack for code collaboration \ud83c\udf31"),(0,r.kt)("p",null,'Radicle adopts the Scuttlebutt social overlay paradigm by establishing a\npeer-to-peer replication layer on top of distributed version control systems,\nstarting with git. User accounts and login is replaced by public key\ncryptography, hosted issue trackers are replaced by local peer replication, and\nthe idea of a single canonical upstream is replaced by a patch-based\npeer-to-peer or "bazaar" model.'),(0,r.kt)("p",null,"To complement the replication layer we introduce an opt-in registry built on Ethereum\nwhich holds canonical project metadata. This allows projects to anchor important\ninformation \u2014 such as project state and repository heads \u2014 with the guarantee of\nglobal availability and immutability."),(0,r.kt)("p",null,"The three major themes to highlight are the decisions to focus on a peer-to-peer\ncode collaboration model, to build on the underlying distributed version control\nsystem for replication, and to adopt a protocol-first approach."),(0,r.kt)("h3",{id:"revisiting-the-bazaar"},"Revisiting the Bazaar"),(0,r.kt)("p",null,'The Cathedral and the Bazaar describes two approaches to free software\ndevelopment. The cathedral model, exemplified by projects like Emacs, makes\nreleases open and available but keeps development exclusive to so called\n"individual wizards". On the other hand, the bazaar model\u2014popularized by Linus\nTorvalds and validated by the massive success of Linux, calls for completely\nopen development with frequent and early releases, delegation throughout\ncommunities, and as many "eyeballs" on the code as possible. The conclusion of\nthe essay speaks to the success of bazaar development practices in open source\nprojects. In other words, given enough eyeballs, all bugs are shallow.'),(0,r.kt)("p",null,"Peer-to-peer networking makes it far easier for developers and maintainers to\ndevelop not just a shared, but a trusted representation of project state\ngrounded in actual source code and secure peer identities. With peer\nreplication, patches become more comprehensive because they are tied to local\nissues, comments, and reviews connected to the development process. With more\ncomprehensive patches, bazaar-style development can retain its flexibility while\nsupporting more sophisticated workflows. This is why Radicle replaces the idea\nof a single canonical upstream with a peer-to-peer model familiar to the open\nsource hackers of the 90s and early 2000s. It makes bazaar-style development\neasier and better."),(0,r.kt)("p",null,'This potential is what caused Radicle to settle on a gossip-based "social\noverlay" built on distributed version control systems that is free and always\navailable without the hassle of self-hosting or trusting companies with user\ndata.'),(0,r.kt)("h3",{id:"git-gossips-well"},"Git gossips well"),(0,r.kt)("p",null,"The next design decision came as a result of our experimentation with\ndecentralized storage. After building the first version of Radicle on IPFS, we\nran into performance and functionality issues. A more detailed analysis can be\nfound ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-alpha/issues/689"},"here"),", but the\nmajor realization was that replicating git repos peer-to-peer on the storage\nlayer left us no choice but losing the packfile protocol, one of the things that\nmakes git fast. This approach would make source code a second-class\ncitizen\u2014making it impractical to store repositories with\nlarge histories."),(0,r.kt)("p",null,"When reflecting on the above, the almost obvious thought returned: why not use\ngit itself to distribute data? Storing collaboration artifacts (issues, pull\nrequests, comments, ...) in git has been done before and the data structures\navailable in git satisfy all our needs. Paired with a gossip layer, git becomes\nexactly what's necessary to store, replicate and distribute code and\ncollaboration artifacts."),(0,r.kt)("p",null,"By building a peer-to-peer overlay on top of git, we find not only a performant\nsolution, but one that is better adapted for code collaboration. Issues,\ncomments and reviews become local artifacts that are cryptographically signed\nand interacted with offline."),(0,r.kt)("h3",{id:"protocols-not-platforms"},"Protocols, not platforms"),(0,r.kt)("p",null,"The story of the big code hosting platforms coincides with the general shift of\nthe internet from open protocols to privately-owned platforms. Most social\ncoding platforms today actually leverage open protocols (git, mercurial, ssh)\nbut have built up closed gardens."),(0,r.kt)("p",null,'Radicle\'s approach is meant to return to the protocol-first philosophy by\nfocusing on building code collaboration primitives instead of user experiences,\nand to reject data collection and siloing by intermediaries. This is reflected\nin the decision to build on and extend git. Having it as the nexus of\nreplication builds on its strengths and decentralized nature. Having issues,\npull requests, comments, and reviews locally gives developers the tools to\nmanage and design their workflows without locking them into a new "experience".\nDespite any front-end interface that will be built (\ud83d\ude09), Radicle exists foremost\nas an open protocol \u2014 not a platform.'))}h.isMDXComponent=!0}}]);