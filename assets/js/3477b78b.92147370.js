"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[6323],{4312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=t(4848),i=t(8453);const s={},r="Background",a={id:"cardano-devs/archive/Byron-Rewrite-Node-Demo-2",title:"Byron-Rewrite-Node-Demo-2",description:"[Demo run internally 12th July 2019]",source:"@site/docs/cardano-devs/archive/Byron-Rewrite-Node-Demo-2.md",sourceDirName:"cardano-devs/archive",slug:"/cardano-devs/archive/Byron-Rewrite-Node-Demo-2",permalink:"/documentation/cardano-devs/archive/Byron-Rewrite-Node-Demo-2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/archive/Byron-Rewrite-Node-Demo-2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Byron-Rewrite-Node-Demo-1",permalink:"/documentation/cardano-devs/archive/Byron-Rewrite-Node-Demo-1"},next:{title:"Byron-Rewrite-Node-Demo-3",permalink:"/documentation/cardano-devs/archive/Byron-Rewrite-Node-Demo-3"}},d={},h=[];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["[",(0,o.jsx)(n.em,{children:"Demo run internally 12th July 2019"}),"]"]}),"\n",(0,o.jsx)(n.h1,{id:"background",children:"Background"}),"\n",(0,o.jsx)(n.p,{children:"This demo is the second demo of a cluster of independent Cardano nodes in the Shelley era, first release - Byron Re-write."}),"\n",(0,o.jsx)(n.p,{children:"The previous demo showed the full integration of all the major components. This demo focuses on the consensus chain state functionality. Whereas the previous demo used the mock implementation of this functionality, this time we are using the full implementation. The full implementation uses the on-disk storage components (immutable, volatile and ledger), and provides efficient, concurrent, implementations of the chain state API."}),"\n",(0,o.jsxs)(n.p,{children:["There are still some features of the node missing that will be included over the coming weeks. For a comprehensive overview of the current capabilities and limitations, see the ",(0,o.jsx)(n.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/wiki/Cardano-Haskell-Node-Capabilities",children:"this page"}),"."]}),"\n",(0,o.jsx)(n.h1,{id:"what-are-we-looking-at",children:"What are we looking at?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"We will set up three core nodes, which will run the PBFT consensus algorithm and communicate with each other using the full network stack."}),"\n",(0,o.jsx)(n.li,{children:"These nodes will then start producing blocks when they are elected leader (which is round-robin in PBFT)."}),"\n",(0,o.jsx)(n.li,{children:"We will see from the log output that the nodes agree on their latest chain tip hash (with short delays)."}),"\n",(0,o.jsx)(n.li,{children:"We will shut down and restart a node and see that it resumes from the point where it was shut down, and synchronises with the other nodes."}),"\n",(0,o.jsx)(n.li,{children:'We will corrupt part of the storage of one node by deleting its "volatile chain storage". We will see that the node terminates. When it is restarted we see that it recovers from an earlier point (the tip of the "immutable chain storage") and then see that it synchronises with the other nodes.'}),"\n",(0,o.jsx)(n.li,{children:"We will then submit some transactions to these nodes to be included in the blockchain, and see that they get included into blocks and all nodes continue to agree on the latest chain tip."}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"what-does-this-show",children:"What does this show?"}),"\n",(0,o.jsx)(n.p,{children:"This shows that we are able to use the proper implementation of the Ouroboros chain validation and chain selection, with on-disk block storage. This is designed to be efficient and resistant to asymmetric resource consumption and other denial of service attacks. It also demonstrates the integration of all the on-disk storage components, which are designed to be robust to hard shutdowns and filesystem corruption (silent or otherwise)."}),"\n",(0,o.jsx)(n.p,{children:"This builds on the previous demo so it also shows that multiple nodes can run independently and communicate with each other using the full network stack. It shows transaction submission with a real mempool implementation, using the real PBFT ledger."}),"\n",(0,o.jsx)(n.p,{children:"The addition of the on-disk storage means we can now set up a long-running staging cluster, since we are no longer using the mock in-memory storage (which was not intended to scale)."}),"\n",(0,o.jsx)(n.h1,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(n.p,{children:"The next steps across the various parts of the node include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Completing EBB support in the ledger/consensus integration, and testing validating against mainnet epochs"}),"\n",(0,o.jsx)(n.li,{children:"Updating the Byron proxy to use the full node's chain storage subsystem, and to work transparently with nodes by using exactly the same protocol bundle."}),"\n",(0,o.jsx)(n.li,{children:"Completing integration and testing of node-to-node transaction relay in the consensus layer"}),"\n",(0,o.jsx)(n.li,{children:"Starting integration with the Wallet Backend"}),"\n",(0,o.jsx)(n.li,{children:"Improving test coverage and infrastructure across the whole system"}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"running-the-demo-yourself",children:"Running the demo yourself"}),"\n",(0,o.jsxs)(n.p,{children:["Check out the ",(0,o.jsx)(n.code,{children:"demo"})," branch in this repository:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"git checkout demo"})}),"\n",(0,o.jsx)(n.p,{children:"Build it using stack, cabal new-build, or nix (see the the README for specific instructions):"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"stack build"})}),"\n",(0,o.jsx)(n.p,{children:"Open a terminal, navigate to the root of this repository, and start the demo script like so:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"tmux new-session -s Demo"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"./scripts/demo.sh"})}),"\n",(0,o.jsxs)(n.p,{children:["This will leave you with four ",(0,o.jsx)(n.code,{children:"tmux"})," panes, three for the nodes and one to submit transactions."]}),"\n",(0,o.jsx)(n.p,{children:"To submit a transaction, navigate to the fourth pane and press enter."}),"\n",(0,o.jsxs)(n.p,{children:["To kill a node, navigate to the node's respective pane, and press ",(0,o.jsx)("kbd",{children:"CTRL-C"}),". Restart it by using ",(0,o.jsx)("kbd",{children:"Up"})," to navigate to the command that started the node."]}),"\n",(0,o.jsx)(n.p,{children:"To remove the volatile storage of a node, e.g., node 0, execute:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"rm -rf db-0"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);