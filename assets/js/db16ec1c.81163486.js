"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[3660],{9204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const a={},o="Independent Node Cluster Capabilities \ud83d\udce6",r={id:"cardano-devs/archive/Cardano-Haskell-Node-Capabilities",title:"Cardano-Haskell-Node-Capabilities",description:"\u2757\ufe0f The node is made available for early integration, QA & DevOps activities. Further security, performance and general testing is required across all components ahead of a test and mainet launch \u2757\ufe0f",source:"@site/docs/cardano-devs/archive/Cardano-Haskell-Node-Capabilities.md",sourceDirName:"cardano-devs/archive",slug:"/cardano-devs/archive/Cardano-Haskell-Node-Capabilities",permalink:"/documentation/cardano-devs/archive/Cardano-Haskell-Node-Capabilities",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/archive/Cardano-Haskell-Node-Capabilities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cardano-Haskell-Node-(Byron-Re-Write)-Status",permalink:"/documentation/cardano-devs/archive/Cardano-Haskell-Node-(Byron-Re-Write)-Status"},next:{title:"Debugging cardano-cli errors on testnet",permalink:"/documentation/cardano-devs/archive/Debugging-cardano-cli-errors-on-a-testnet"}},l={},c=[{value:"Iteration #2 Capabilities (Current) - Made available mid July 2019 \u2714\ufe0f",id:"iteration-2-capabilities-current---made-available-mid-july-2019-\ufe0f",level:2},{value:"Iteration #3 Capabilities - Due mid-late July 2019 \ud83d\udd28",id:"iteration-3-capabilities---due-mid-late-july-2019-",level:2},{value:"Iteration #1 Capabilities - Made available mid June 2019 \u2714\ufe0f",id:"iteration-1-capabilities---made-available-mid-june-2019-\ufe0f",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u2757\ufe0f The node is made available for early integration, QA & DevOps activities. Further security, performance and general testing is required across all components ahead of a test and mainet launch \u2757\ufe0f"}),"\n",(0,i.jsx)(n.h1,{id:"independent-node-cluster-capabilities-",children:"Independent Node Cluster Capabilities \ud83d\udce6"}),"\n",(0,i.jsx)(n.h2,{id:"iteration-2-capabilities-current---made-available-mid-july-2019-\ufe0f",children:"Iteration #2 Capabilities (Current) - Made available mid July 2019 \u2714\ufe0f"}),"\n",(0,i.jsx)(n.p,{children:"In addition to iteration #1:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Consensus"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Chain state storage implementation & integration","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The implementation of Ouroboros chain validation and chain selection"}),"\n",(0,i.jsx)(n.li,{children:"All storage components integrated: immutable, volatile, ledger state"}),"\n",(0,i.jsx)(n.li,{children:"Chain state implemented on top of the storage components"}),"\n",(0,i.jsx)(n.li,{children:"Effecient APIs for use by the network protocol handlers (iterators for block fetch, readers for chain sync)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Improved mempool implementation","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"API that matches what the tx submission protocol handler needs"}),"\n",(0,i.jsx)(n.li,{children:"Structure that enables trace points for tracking mempool size and TPS throughput"}),"\n",(0,i.jsx)(n.li,{children:"But not final integration of the node-to-node tx submission protocol"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Network"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integration of DNS based peer discovery & connection management"}),"\n",(0,i.jsx)(n.li,{children:"Local client template, to use as a basis for writing node clients"}),"\n",(0,i.jsx)(n.li,{children:"Node to client protocol complete"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Logging"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tracepoint updates (ongoing activity during QA & DevOps testing)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Iteration #2 Limitations"})," \u26a0\ufe0f"]}),"\n",(0,i.jsx)(n.p,{children:"There are a few limitations to keep in mind due to the fact that certain things have not yet been integrated."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mainnet validation"})," We have previously demonstrated mainnet validation for the ledger rules, but have not yet demonstrated that for the PBFT consensus rules. While the PBFT rules are integrated, there are some remaining parts to complete to be able to validate mainnet. In particular while the support for EBBs (epoch boundary blocks) is nearly complete, it has not yet been tested against mainnet. Therefore it is not currently possible with the node at this stage to sync with mainnet. We anticipate that this will be completed in time for the next demo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Byron (Old -> New) Proxy protocols"}),"\nThe existing Byron proxy does not yet use exactly the same network protocol as the node itself. It uses chain syncing with whole blocks, whereas the node uses chain syncing with headers and spearate block fetch. The proxy is being updated to use the final chain DB that has recently been completed in the consensus layer (previously it used the immutable storage component directly). Once it uses the full chain DB then it will be straightforward for it to implement the same chain sync and block fetch protocols. This will enable a node to connect to a proxy transparently, as if it were any other node. We expect this will take another week or two to complete. This will then enable us to demonstrate live syncing with mainnet."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transaction relay"})," The node to node transaction submission protocol has not yet been integrated. This means that while it is possible to submit transactions locally to a block producing node, it is not yet possible to submit them to one node and have them forwarded to other nodes. The code here has seen substantial improvements\nand we now anticipate that this will be integrated in time for the next demo."]}),"\n",(0,i.jsx)(n.h2,{id:"iteration-3-capabilities---due-mid-late-july-2019-",children:"Iteration #3 Capabilities - Due mid-late July 2019 \ud83d\udd28"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Consensus & Network"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Old -> New Proxy updated to use the ChainDB and final node-to-node protocols"}),"\n",(0,i.jsx)(n.li,{children:"Full mainnet syncing and validation"}),"\n",(0,i.jsx)(n.li,{children:"Node to node transaction relaying"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Previous iteration content for completeness"})}),"\n",(0,i.jsx)(n.h2,{id:"iteration-1-capabilities---made-available-mid-june-2019-\ufe0f",children:"Iteration #1 Capabilities - Made available mid June 2019 \u2714\ufe0f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Node that communicate using TCP across different machines"}),"\n",(0,i.jsx)(n.li,{children:"In memory storage for chain"}),"\n",(0,i.jsxs)(n.li,{children:["Establish independent cluster using PBFT","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Some limitations due to lack of connection management integration"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Full network stack (exclusions listed further down)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Node to node:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Chain sync"}),"\n",(0,i.jsx)(n.li,{children:"Block fetch"}),"\n",(0,i.jsx)(n.li,{children:"Block fetch logic"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Node to client:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Chain sync"}),"\n",(0,i.jsx)(n.li,{children:"Transaction submission to mempool"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Create blocks and distribute using PBFT Consensus algorithm"}),"\n",(0,i.jsx)(n.li,{children:"Validate blocks and transactions with blocks using final Byron compatible Ledger rules"}),"\n",(0,i.jsx)(n.li,{children:"Submit transactions local to block producing nodes"}),"\n",(0,i.jsx)(n.li,{children:"Mock transactions that are elaborated into real transactions"}),"\n",(0,i.jsx)(n.li,{children:"Initial node shell integration"}),"\n",(0,i.jsx)(n.li,{children:"Consensus as a feature"}),"\n",(0,i.jsx)(n.li,{children:"Configuration"}),"\n",(0,i.jsxs)(n.li,{children:["Logging and Monitoring","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Command line arguments parser"}),"\n",(0,i.jsx)(n.li,{children:"Prometheus interface (EKG / monitoring metrics )"}),"\n",(0,i.jsx)(n.li,{children:"Mempool Tx level logging (transactions in Mempool)"}),"\n",(0,i.jsx)(n.li,{children:"Tx submission logging"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(n.strong,{children:"Iteration #1 Limitations"})," \u26a0\ufe0f"]}),"\n",(0,i.jsx)(n.p,{children:"There are a few limitations to keep in mind due to the fact that certain things have not yet been integrated."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Storage"})," The real storage system has not yet been integrated. The node now is using the mock storage implementation. The consequence of this is that the chain storage is in-memory and not on disk. So this limits the size of the chain that can be tested, and the chain is not persistent on restart. So this precludes syncing with mainnet. The full storage subsystem uses the same API as the mock one so the integration is expected to be straightforward, and it is expected to be integrated for the next demo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Connection management"})," The network connection management subsystem has not yet been integrated. The node is currently using very simplistic static connection logic: it will establish the requested connections on startup but not re-establish connections on failure. The consequence is that any peer disconnecting causes an exception that will shut down the node. The full connection management subsystem is currently in testing and it is expected to be integrated for the next demo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mainnet validation"})," We have previously demonstrated mainnet validation for the ledger rules, but have not yet demonstrated that for the PBFT consensus rules. While the PBFT rules are integrated, there are some remaining parts to complete to be able to validate mainnet. In particular the support for EBBs (epoch boundary blocks). Therefore it is not currently possible with the node at this stage to sync with mainnet. We anticipate that this will be completed in time for the next demo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Local clients"})," The node to client protocol has been integrated but the chain sync part does not yet have a example client. This will be needed for wallet integration. This is a relatively small addition and so we expect to have a chain sync client template available for the next demo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transaction relay"})," The node to node transaction submission protocol has not yet been integrated. This means that while it is possible to submit transactions locally to a block producing node, it is not yet possible to submit them to one node and have them forwarded to other nodes. The code for this component is mostly complete, including tests, so we anticipate that this will be integrated in time for the next demo."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);