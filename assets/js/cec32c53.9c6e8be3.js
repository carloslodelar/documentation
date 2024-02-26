"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[2492],{1264:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(4848),r=s(8453);const t={},o=void 0,l={id:"cardano-devs/archive/Cardano-Haskell-Node-(Byron-Re-Write)-Status",title:"Cardano-Haskell-Node-(Byron-Re-Write)-Status",description:"Hello all, this page will be used to keep a static status of the Byron Re-Write node.",source:"@site/docs/cardano-devs/archive/Cardano-Haskell-Node-(Byron-Re-Write)-Status.md",sourceDirName:"cardano-devs/archive",slug:"/cardano-devs/archive/Cardano-Haskell-Node-(Byron-Re-Write)-Status",permalink:"/cardano-devs/archive/Cardano-Haskell-Node-(Byron-Re-Write)-Status",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/archive/Cardano-Haskell-Node-(Byron-Re-Write)-Status.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cardano-Haskell-(Byron-Re-write)--Front-End-Int-Status",permalink:"/cardano-devs/archive/Cardano-Haskell-(Byron-Re-write)--Front-End-Int-Status"},next:{title:"Cardano-Haskell-Node-Capabilities",permalink:"/cardano-devs/archive/Cardano-Haskell-Node-Capabilities"}},a={},d=[];function c(n){const e={a:"a",code:"code",em:"em",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Hello all, this page will be used to keep a static status of the Byron Re-Write node."}),"\n",(0,i.jsxs)(e.p,{children:["This supports the ",(0,i.jsx)(e.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/wiki/Cardano-Haskell-Node-Capabilities",title:"Byron Haskell Node Capabilities",children:"Haskell Node Capabilities"})," page."]}),"\n",(0,i.jsxs)(e.p,{children:["The work below is that specifically required to make the node ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"public test and main net ready"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["\ud83d\udcc5 ",(0,i.jsx)(e.em,{children:"As of 12/07/2019"})]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.strong,{children:"Node Implementation"})})," \ud83d\udee0 Tasks - remaining development team effort"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Consensus"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Extend the mempool:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Track transaction sizes"}),"\n",(0,i.jsx)(e.li,{children:"Expire older transactions"}),"\n",(0,i.jsx)(e.li,{children:"In addition to transactions, support delegation and update payloads"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Chain Sync Client optimisations:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Track block sizes"}),"\n",(0,i.jsx)(e.li,{children:"Pipelining"}),"\n",(0,i.jsx)(e.li,{children:"Disconnect from nodes with invalid blocks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Networking"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Old -> New Proxy updated to use the ChainDB and final node-to-node protocols"}),"\n",(0,i.jsx)(e.li,{children:"Node to node transaction relaying"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.strong,{children:"OS Platform Config"})})," \ud83c\udf33  Tasks - remaining development team effort"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Windows"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'Cannot interrupt blocking network I/O ops on Windows in the standard network package. We will likely need to bind the few socket operations we need directly, with "interruptable" FFI calls, and use them in our MuxBearer abstraction.'}),"\n",(0,i.jsx)(e.li,{children:"Need to complete Windows named pipe library and use it for local connections (API similar to Unix domain sockets)"}),"\n",(0,i.jsx)(e.li,{children:"Windows bugs \ud83d\udc1e"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.strong,{children:"Monitoring & Benchmarking"})})," \ud83d\udd0e\ud83d\udcdd  Tasks remaining"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Transaction generator to run system benchmarks"}),"\n",(0,i.jsx)(e.li,{children:"Benchmarking and monitoring of cardano-node ;\u201dlive-view\u201d"}),"\n",(0,i.jsx)(e.li,{children:"Capture mempool metrics and chain metrics"}),"\n",(0,i.jsx)(e.li,{children:"Support teams for implementing logging, benchmarking, monitoring - wallet BE, consensus, networking, ledger, devops"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.strong,{children:"Test Infrastructure"})})," \ud83c\udfd7  Tasks remaining"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Valid Chain Generators"}),"\n",(0,i.jsx)(e.li,{children:"Invalid Chain Generators"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Testing"})," \u26a1\ufe0f \ud83d\udc1b   Major test coverage remaining"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Consensus"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Protocol testing: do we reach consensus in the following cases (some are overlapping)","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"A node joins the network at a later point in time"}),"\n",(0,i.jsx)(e.li,{children:"A node disconnects and rejoins the network"}),"\n",(0,i.jsx)(e.li,{children:"There is a (temporary) network partition"}),"\n",(0,i.jsx)(e.li,{children:"There are delays in the network"}),"\n",(0,i.jsx)(e.li,{children:"Different network topologies"}),"\n",(0,i.jsx)(e.li,{children:"A node encounters corruption and restarts with a truncated chain"}),"\n",(0,i.jsx)(e.li,{children:"There is an explicit adversary"}),"\n",(0,i.jsx)(e.li,{children:"A node produces a few (or many) invalid blocks"}),"\n",(0,i.jsx)(e.li,{children:"A block doesn't match its header"}),"\n",(0,i.jsx)(e.li,{children:"There are multiple slot leaders or none at all"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Test what happens when there is a shortage of file handles. Additionally, we should make sure we don't leak file handles and what happens when a handle fails to close."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Networking"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Timeouts for mini-protocols"}),"\n",(0,i.jsx)(e.li,{children:"Managing full duplex connections, termination / suspension of one side of the connection"}),"\n",(0,i.jsx)(e.li,{children:"Assign sensible byte limits for each of the mini-protocols"}),"\n",(0,i.jsx)(e.li,{children:"Fix issues in subscription management"}),"\n",(0,i.jsx)(e.li,{children:"Extend subscription management to be able to track positive and negative reputation information (Delta-Q,detect mini-protocol failures and misbehaviours)."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"System level testing"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"A small network of Shelley nodes"}),"\n",(0,i.jsx)(e.li,{children:"A small network of Shelley nodes on mixed architectures (RasberyPi, GNU/Linux, Windows, MacOs)"}),"\n",(0,i.jsx)(e.li,{children:"A small network of Shelley and Byron nodes deployed with a Byron-Proxy"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.strong,{children:"DevOps"})})," \ud83d\udd27  Tasks - tooling activity"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["CLI Tools","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"genesis-tool"})," (a slight misnomer) -- generates genesis, migrates and pretty-prints secrets"]}),"\n",(0,i.jsx)(e.li,{children:"Update proposal and vote submission"}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);