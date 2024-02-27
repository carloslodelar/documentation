"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[9828],{9899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=t(4848),r=t(8453);const a={},d=void 0,c={id:"cardano-devs/archive/Mixed-Cluster-Integration-test-of-legacy-Cardano-SL-and-Byron-rewrite-node",title:"Mixed-Cluster-Integration-test-of-legacy-Cardano-SL-and-Byron-rewrite-node",description:"CI shall be running for every commit a test on a mixed cluster of legacy Cardano SL nodes (https https://github.com/intersectmbo/cardano-node/).",source:"@site/docs/cardano-devs/archive/Mixed-Cluster-Integration-test-of-legacy-Cardano-SL-and-Byron-rewrite-node.md",sourceDirName:"cardano-devs/archive",slug:"/cardano-devs/archive/Mixed-Cluster-Integration-test-of-legacy-Cardano-SL-and-Byron-rewrite-node",permalink:"/documentation/cardano-devs/archive/Mixed-Cluster-Integration-test-of-legacy-Cardano-SL-and-Byron-rewrite-node",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/archive/Mixed-Cluster-Integration-test-of-legacy-Cardano-SL-and-Byron-rewrite-node.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/documentation/cardano-devs/archive/Docker"},next:{title:"cardano-node-and-DataPoints:-demo",permalink:"/documentation/cardano-devs/archive/cardano-node-and-DataPoints:-demo"}},i={},s=[{value:"Topology",id:"topology",level:2},{value:"Running the test",id:"running-the-test",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"CI"})," shall be running for every commit a test on a mixed cluster of legacy Cardano SL nodes (",(0,o.jsx)(n.a,{href:"https://github.com/input-output-hk/cardano-sl/",children:"https://github.com/input-output-hk/cardano-sl/"}),") and new nodes from Byron-rewrite (this repo: ",(0,o.jsx)(n.a,{href:"https://github.com/intersectmbo/cardano-node/",children:"https://github.com/intersectmbo/cardano-node/"}),").\nThe two worlds are interconnected using the Byron proxy (",(0,o.jsx)(n.a,{href:"https://github.com/input-output-hk/cardano-byron-proxy/",children:"https://github.com/input-output-hk/cardano-byron-proxy/"}),").\nEither side can initiate transactions and mint blocks."]}),"\n",(0,o.jsx)(n.h2,{id:"topology",children:"Topology"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"     +---------------+---------------+\n     |               |               |\n+----v----+     +----v----+     +----v----+\n|         |     |         |     |         |\n| legacy  |     | legacy  |     | legacy  |\n| CSL     |     | CSL     |     | CSL     |\n|         |     |         |     |         |\n+---------+     +----+----+     +---------+\n                     ^\n                     |\n                     v\n                +----+----+\n                |         |\n                |  Byron  |\n                |  proxy  |\n                |         |\n                +----+----+\n                     ^\n                     |\n                     v\n +---------+    +----+----+    +---------+\n |         |    |         |    |         |\n |  new    |    |  new    |    |  new    |\n |  node   |    |  node   |    |  node   |\n |         |    |         |    |         |\n +----+----+    +----+----+    +----+----+\n      ^              ^              ^\n      |              |              |\n      +--------------+---------------\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"running-the-test",children:"Running the test"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".. tbd ..\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var o=t(6540);const r={},a=o.createContext(r);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);