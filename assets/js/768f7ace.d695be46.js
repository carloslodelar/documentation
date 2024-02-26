"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[3526],{8227:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var s=o(4848),r=o(8453);const t={},c="Debugging cardano-cli errors on testnet",a={id:"cardano-devs/archive/Debugging-cardano-cli-errors-on-a-testnet",title:"Debugging cardano-cli errors on testnet",description:"This document is intended for Cardano node and cardano-cli (CLI) users, as well as Cardano developers that wish to investigate CLI problems.",source:"@site/docs/cardano-devs/archive/Debugging-cardano-cli-errors-on-a-testnet.md",sourceDirName:"cardano-devs/archive",slug:"/cardano-devs/archive/Debugging-cardano-cli-errors-on-a-testnet",permalink:"/cardano-devs/archive/Debugging-cardano-cli-errors-on-a-testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/archive/Debugging-cardano-cli-errors-on-a-testnet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cardano-Haskell-Node-Capabilities",permalink:"/cardano-devs/archive/Cardano-Haskell-Node-Capabilities"},next:{title:"Docker",permalink:"/cardano-devs/archive/Docker"}},d={},i=[{value:"Debugging options",id:"debugging-options",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"debugging-cardano-cli-errors-on-testnet",children:"Debugging cardano-cli errors on testnet"}),"\n",(0,s.jsxs)(n.p,{children:["This document is intended for Cardano node and ",(0,s.jsx)(n.code,{children:"cardano-cli"})," (CLI) users, as well as Cardano developers that wish to investigate CLI problems."]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend making sure the ",(0,s.jsx)(n.code,{children:"cardano-node"})," tests pass before starting to debug a problem. Additionally, take a look at the ",(0,s.jsx)(n.a,{href:"https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/SanityChecks",children:"Consensus sanity checklist"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Once the node tests successfully pass, and you've read through the Consensus checklist, collect node logs to speed up the process of finding the cause of a problem. Below, we describe the steps to run a node that connects to a given testnet and get access to a ",(0,s.jsx)(n.code,{children:"cardano-cli"})," that can be used to communicate with the node. These instructions work on a Unix environment with ",(0,s.jsx)(n.code,{children:"nix"})," installed."]}),"\n",(0,s.jsxs)(n.p,{children:["Clone ",(0,s.jsx)(n.a,{href:"https://github.com/intersectmbo/cardano-world",children:"cardano-world"})," and check out the testnet branch (eg ",(0,s.jsx)(n.code,{children:"sanchonet"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Once inside the ",(0,s.jsx)(n.code,{children:"cardano-world"})," directory, enter a ",(0,s.jsx)(n.code,{children:"nix"})," shell which has ",(0,s.jsx)(n.code,{children:"cardano-node"})," in its path:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nix shell github:intersectmbo/cardano-node\\?ref=8.1.1\\#cardano-node\n"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"8.1.1"})," should be replaced with the version intended to be tested. Once inside the ",(0,s.jsx)(n.code,{children:"nix"})," shell, we can check whether the ",(0,s.jsx)(n.code,{children:"cardano-node"})," executable is in our ",(0,s.jsx)(n.code,{children:"PATH"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"which cardano-node\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"/nix/store/scmkvbvx1355nwmclmrfd2snwvsgsn30-cardano-node-exe-cardano-node-8.1.1/bin/cardano-node\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The configuration files for the node can be found inside the ",(0,s.jsx)(n.code,{children:"docs/environment/testnet_name"}),". You can copy these files to a new directory to edit them and have the node use the configuration inside said directory. For instance, after we copy the configuration files to a director named ",(0,s.jsx)(n.code,{children:"node-custom-config"}),", the node can be readily run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:" cardano-node run \\\r\n  --config node-custom-config/config.json \\\r\n  --database-path my-node-db \\\r\n  --socket-path node.socket \\\r\n  --topology custom-node-config/topology.json | tee -a node.log\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In particular, make sure to enable the relevant tracers in the node configuration file. In the example above this file is ",(0,s.jsx)(n.code,{children:"node-custom-config/config.json"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Once the node is running, we need a CLI to communicate with it. To enter a shell that has ",(0,s.jsx)(n.code,{children:"cardano-cli"})," in its ",(0,s.jsx)(n.code,{children:"PATH"})," you can run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nix develop .#x86_64-linux.automation.devshells.dev\r\nwhich cardano-cli\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"/nix/store/cbr6kgfsq7pqjwdirvm75lwzaibxvyfm-devshell-dir/bin/cardano-cli\n"})}),"\n",(0,s.jsx)(n.h2,{id:"debugging-options",children:"Debugging options"}),"\n",(0,s.jsxs)(n.p,{children:["It might be a good idea to adjust the ",(0,s.jsx)(n.code,{children:"mapSeverity"})," attribute for the ",(0,s.jsx)(n.code,{children:"LocalTxSubmissionProtocol"})," to ",(0,s.jsx)(n.code,{children:"Debug"})," in the node configuration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'...\r\n    "mapSeverity": {\r\n      "cardano.node.LocalTxSubmissionProtocol": "Debug"\r\n    }\r\n...\r\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var s=o(6540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);