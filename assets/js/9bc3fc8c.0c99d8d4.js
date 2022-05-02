"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[473],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(r),u=n,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4657:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"glossary",title:"Glossary"},p=void 0,s={unversionedId:"understanding-radicle/glossary",id:"understanding-radicle/glossary",title:"Glossary",description:"clone",source:"@site/docs/understanding-radicle/glossary.md",sourceDirName:"understanding-radicle",slug:"/understanding-radicle/glossary",permalink:"/understanding-radicle/glossary",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/understanding-radicle/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/understanding-radicle/troubleshooting"},next:{title:"FAQ",permalink:"/understanding-radicle/faq"}},c={},d=[{value:"clone",id:"clone",level:2},{value:"connect",id:"connect",level:2},{value:"contributor",id:"contributor",level:2},{value:"delegate",id:"delegate",level:2},{value:"display name",id:"display-name",level:2},{value:"follow",id:"follow",level:2},{value:"fork",id:"fork",level:2},{value:"git",id:"git",level:2},{value:"gossip",id:"gossip",level:2},{value:"maintainer",id:"maintainer",level:2},{value:"main",id:"main",level:2},{value:"monorepo",id:"monorepo",level:2},{value:"node",id:"node",level:2},{value:"passphrase",id:"passphrase",level:2},{value:"peer",id:"peer",level:2},{value:"peer ID",id:"peer-id",level:2},{value:"personal URN",id:"personal-urn",level:2},{value:"project",id:"project",level:2},{value:"project name",id:"project-name",level:2},{value:"project URN",id:"project-urn",level:2},{value:"publish",id:"publish",level:2},{value:"Radicle Link",id:"radicle-link",level:2},{value:"Radicle network",id:"radicle-network",level:2},{value:"Radicle Upstream",id:"radicle-upstream",level:2},{value:"remote",id:"remote",level:2},{value:"seed",id:"seed",level:2},{value:"upstream",id:"upstream",level:2},{value:"user",id:"user",level:2}],h={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"clone"},"clone"),(0,o.kt)("p",null,"To create a working copy of a ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," on a user's machine. This working\ncopy is where a person can make and publish changes to a project locally."),(0,o.kt)("h2",{id:"connect"},"connect"),(0,o.kt)("p",null,"To create a network connection to another Radicle ",(0,o.kt)("a",{parentName:"p",href:"#peer"},"peer"),". Connected peers\nspread information between each other via ",(0,o.kt)("a",{parentName:"p",href:"#gossip"},"gossip"),"."),(0,o.kt)("h2",{id:"contributor"},"contributor"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#peer"},"peer")," who has pushed code to a ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project"),"."),(0,o.kt)("h2",{id:"delegate"},"delegate"),(0,o.kt)("p",null,"Any ",(0,o.kt)("a",{parentName:"p",href:"#peer"},"peer")," who can sign on behalf of the project, which means their state is trusted within the context of the\nproject. There can be one or more delegates of a given project. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudhead")," (with a Peer ID of\n",(0,o.kt)("inlineCode",{parentName:"p"},"hyn9diwfnytahjq8u3iw63h9jte1ydcatxax3saymwdxqu1zo645pe"),") is the delegate of the\n",(0,o.kt)("a",{parentName:"p",href:"https://app.radicle.network/alt-clients.radicle.eth/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/tree/f7a9314b5ff176a6836923c0424157070f995533"},"radicle-cli"),"\nproject, which means their ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch is the de facto standard. There can be multiple delegates for a given project"),(0,o.kt)("h2",{id:"display-name"},"display name"),(0,o.kt)("p",null,"A non-unique human-readable name chosen by a Radicle ",(0,o.kt)("a",{parentName:"p",href:"#user"},"user"),'. Like a\n"nickname" for someone\'s ',(0,o.kt)("a",{parentName:"p",href:"#peer-id"},"Peer ID"),". This will be possible to change in\nthe future."),(0,o.kt)("h2",{id:"follow"},"follow"),(0,o.kt)("p",null,"Following a ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," replicates it to your machine. This allows the\nfollower to subscribe to updates from the project's ",(0,o.kt)("a",{parentName:"p",href:"#maintainer"},"maintainer(s)")," or other\nremotes. It is also a way to signal interest in the project or peer by further\nreplicating the data across their network, making it available to other people\non the network. See ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/how-it-works/#tracking"},"Tracking"),"."),(0,o.kt)("h2",{id:"fork"},"fork"),(0,o.kt)("p",null,"Forking a project in Radicle clones a working copy to your machine and publishes\nit as a project to the network."),(0,o.kt)("h2",{id:"git"},"git"),(0,o.kt)("p",null,"A free and open source distributed version control system."),(0,o.kt)("h2",{id:"gossip"},"gossip"),(0,o.kt)("p",null,"A means of peer-to-peer communication that relies on the interactions of peers\nto disseminate information. Participants in the Radicle network share and spread\ndata by keeping redundant copies of projects locally and sharing updates with\npeers. This allows data to be disseminated according to use and value: the more\npeers who are interested in certain data the more available it is made to the\nnetwork. See ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/how-it-works/#replication-model"},"Gossip"),"."),(0,o.kt)("h2",{id:"maintainer"},"maintainer"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#user"},"user")," who manages and pushes updates to the canonical view of a project.\nA maintainer is explicitly associated with the ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," at the time of\ncreation or later, via the ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," metadata (see ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/how-it-works/#data-model"},"Data Model"),"),\nbut there may be multiple maintainers of a project, all maintaining their own\ntrees. At creation, the creator of the ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," is the sole maintainer."),(0,o.kt)("h2",{id:"main"},"main"),(0,o.kt)("p",null,"How Radicle Upstream refers to the default development branch of a project."),(0,o.kt)("h2",{id:"monorepo"},"monorepo"),(0,o.kt)("p",null,"Radicle uses Git as a database. This means everything is stored in a single Git monorepo. Please see ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/how-it-works/#overview-2"},"here")," for more details. "),(0,o.kt)("h2",{id:"node"},"node"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#project"},"peer")," running an instance of the Radicle Link protocol. There can only be\none node running per device."),(0,o.kt)("h2",{id:"passphrase"},"passphrase"),(0,o.kt)("p",null,"A sequence of characters used to encrypt a peer's private key (See\n",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/how-it-works/#identities"},"Identities"),") to enable access to the Radicle network. It's also needed\nto fetch and push changesets to the Radicle network."),(0,o.kt)("h2",{id:"peer"},"peer"),(0,o.kt)("p",null,"A device running the Radicle Link protocol."),(0,o.kt)("h2",{id:"peer-id"},"peer ID"),(0,o.kt)("p",null,"Part of your identity on the Radicle network. It identifies your device, a non-unique ",(0,o.kt)("a",{parentName:"p",href:"#display-name"},"display\nname")," and the code you publish on the Radicle network, and is secured with an\nEd25519 keypair."),(0,o.kt)("h2",{id:"personal-urn"},"personal URN"),(0,o.kt)("p",null,"A unique identifier that allows you to register a permanent name with our opt-in integration with the Ethereum network."),(0,o.kt)("h2",{id:"project"},"project"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," consists of source code, issues, and proposed changesets. It\ncarries a unique, shareable ",(0,o.kt)("a",{parentName:"p",href:"#project-urn"},"project URN"),". A ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," also includes the\nidentities of all its ",(0,o.kt)("a",{parentName:"p",href:"#maintainer"},"maintainers"),". The entirety of the ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," data\nand metadata, including social artifacts such as comments, are stored within the\n",(0,o.kt)("a",{parentName:"p",href:"#project"},"project"),"'s repository on the user's machine. ",(0,o.kt)("a",{parentName:"p",href:"#project"},"Project"),"s are the\nprinciple unit of replication."),(0,o.kt)("h2",{id:"project-name"},"project name"),(0,o.kt)("p",null,"A human-readable name that is chosen for a ",(0,o.kt)("a",{parentName:"p",href:"#peer"},"project"),". It is not guaranteed\nto be unique."),(0,o.kt)("h2",{id:"project-urn"},"project URN"),(0,o.kt)("p",null,"A unique identifier for a specific project on the Radicle network, roughly akin to the way GitHub identifies projects\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"user-name/project-name"),". Required for sharing a project with collaborators and cloning."),(0,o.kt)("h2",{id:"publish"},"publish"),(0,o.kt)("p",null,"To make data public to the network. Once something is published, it may be\nfetched and replicated by connected peers."),(0,o.kt)("h2",{id:"radicle-link"},"Radicle Link"),(0,o.kt)("p",null,"A peer-to-peer replication protocol built on Git. See ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/how-it-works"},"How it Works"),"."),(0,o.kt)("h2",{id:"radicle-network"},"Radicle network"),(0,o.kt)("p",null,"The network of peers that replicate and gossip data with Radicle Link."),(0,o.kt)("h2",{id:"radicle-upstream"},"Radicle Upstream"),(0,o.kt)("p",null,"An open-source desktop application (graphic ",(0,o.kt)("a",{parentName:"p",href:"#user"},"user")," interface, GUI) built to\ninteract with and enable access to the Radicle network. However, in the future, it will be one of\nmany potential clients that ",(0,o.kt)("a",{parentName:"p",href:"#user"},"user"),"s can use to access the Radicle network."),(0,o.kt)("h2",{id:"remote"},"remote"),(0,o.kt)("p",null,"Another peer's view of a project. Remotes can be pulled/fetched from.\nMaintainers of a project may choose to track other peer's views of their project\nby adding them as a remote. In the context of a project, maintainers of a\nrepository may choose to track the views of other owners by adding them as a\nremote to the project. If the remote repository is found to track other remotes,\nthe tracking repository shall also transitively track those, up to a\nconfigurable N degrees out."),(0,o.kt)("h2",{id:"seed"},"seed"),(0,o.kt)("p",null,"An always-on node that automatically tracks discovered projects and serves data\nto their connected peers, thereby increasing the availability of these projects\non the network. More on the ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/how-it-works/#seeding"},"role and impacts of seeds"),"."),(0,o.kt)("h2",{id:"upstream"},"upstream"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#repository"},"repository")," in which code contributions for a ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project")," are\nintended to be merged once they pass the review process (i.e. canonical upstream\nor mainline). The upstream is often the ",(0,o.kt)("a",{parentName:"p",href:"#repository"},"repository")," of the ",(0,o.kt)("a",{parentName:"p",href:"#project"},"project"),"'s\noriginal maintainer or creator. For everyone but the creator of this\n",(0,o.kt)("a",{parentName:"p",href:"#repository"},"repository"),", upstream will be a remote ",(0,o.kt)("a",{parentName:"p",href:"#repository"},"repository"),"."),(0,o.kt)("h2",{id:"user"},"user"),(0,o.kt)("p",null,"Any individual who has created a Radicle ID on the Radicle network via the\nUpstream client."))}u.isMDXComponent=!0}}]);