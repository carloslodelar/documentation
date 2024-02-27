"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[2655],{4368:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=a(4848),t=a(8453);const i={title:"Basic operations",id:"cli-basic-operations",sidebar_position:3,keywords:["cardano-cli","cli","keys","addresses","cardano-node"]},r=void 0,d={id:"cardano-cli/cli-basic-operations",title:"Basic operations",description:"Setting up environment variables",source:"@site/docs/cardano-cli/basicOperations.md",sourceDirName:"cardano-cli",slug:"/cardano-cli/cli-basic-operations",permalink:"/documentation/cardano-cli/cli-basic-operations",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-cli/basicOperations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Basic operations",id:"cli-basic-operations",sidebar_position:3,keywords:["cardano-cli","cli","keys","addresses","cardano-node"]},sidebar:"tutorialSidebar",previous:{title:"Build cardano-cli from source",permalink:"/documentation/cardano-cli/build-cli-from-source"},next:{title:"cliOverview",permalink:"/documentation/cardano-cli/cliOverview"}},c={},o=[{value:"Setting up environment variables",id:"setting-up-environment-variables",level:2},{value:"CARDANO_NODE_SOCKET_PATH",id:"cardano_node_socket_path",level:3},{value:"CARDANO_NODE_NETWORK_ID",id:"cardano_node_network_id",level:3},{value:"Generating a payment key pair and an address",id:"generating-a-payment-key-pair-and-an-address",level:2},{value:"Building an address",id:"building-an-address",level:2},{value:"Generating a stake key pair and an address with stake part",id:"generating-a-stake-key-pair-and-an-address-with-stake-part",level:2},{value:"Query the balance of an address",id:"query-the-balance-of-an-address",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"setting-up-environment-variables",children:"Setting up environment variables"}),"\n",(0,s.jsx)(n.h3,{id:"cardano_node_socket_path",children:"CARDANO_NODE_SOCKET_PATH"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cardano-cli"})," uses the node-to-client protocol to communicate with the node, this requires setting up an environment variable for the node socket path. Make sure to use the path use declared when starting the node."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export CARDANO_NODE_SOCKET_PATH=~/node.socket\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cardano_node_network_id",children:"CARDANO_NODE_NETWORK_ID"}),"\n",(0,s.jsxs)(n.p,{children:["Each network has a unique identifier (--mainnet or --testnet-magic NATURAL), this is used by the node-to-client protocol to make sure we are talking to a node on the desired network. It is very useful to\nsetup an environment variable for the network id, the alternative is to provide the flag ",(0,s.jsx)(n.code,{children:"--testnet-magic <network-id>"})," on each command that interact with the node."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Mainnet"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export CARDANO_NODE_NETWORK_ID=mainnet \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Pre-production"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export CARDANO_NODE_NETWORK_ID=1\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Preview"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export CARDANO_NODE_NETWORK_ID=2\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Sanchonet"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export CARDANO_NODE_NETWORK_ID=4\n"})}),"\n",(0,s.jsx)(n.h1,{id:"generate-keys-and-addresses",children:"Generate keys and addresses"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For a complete view about types of addresses in Cardano, please read ",(0,s.jsx)(n.a,{href:"https://cips.cardano.org/cips/cip19/",children:"https://cips.cardano.org/cips/cip19/"})]})}),"\n",(0,s.jsx)(n.h2,{id:"generating-a-payment-key-pair-and-an-address",children:"Generating a payment key pair and an address"}),"\n",(0,s.jsx)(n.p,{children:"To generate a key pair, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cardano-cli address key-gen \\\n--verification-key-file payment.vkey \\\n--signing-key-file payment.skey\n"})}),"\n",(0,s.jsx)(n.h2,{id:"building-an-address",children:"Building an address"}),"\n",(0,s.jsxs)(n.p,{children:["This address will not have staking rights. It cannot delegate or receive rewards because it does not have a\nstake part associated to it. Only has a payment part (see ",(0,s.jsx)(n.a,{href:"https://cips.cardano.org/cips/cip19/",children:"https://cips.cardano.org/cips/cip19/"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cardano-cli address build \\\n--payment-verification-key-file payment.vkey \\\n--out-file paymentNoStake.addr\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat paymentNoStake.addr\naddr_test1vzdtyyt48yrn2fa3wvh939rat0gyv6ly0ljt449sw8tppzq84xstz\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:'Testnet addresses start with "addr_test" and mainnet addresses with "addr"'})}),"\n",(0,s.jsx)(n.h2,{id:"generating-a-stake-key-pair-and-an-address-with-stake-part",children:"Generating a stake key pair and an address with stake part"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cardano-cli stake-address key-gen \\\n--verification-key-file stake.vkey \\\n--signing-key-file stake.skey\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that now we use both the payment verification key and the stake verification key to build an address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cardano-cli address build \\\n--payment-verification-key-file payment.vkey \\\n--stake-verification-key-file stake.vkey \\\n--out-file payment.addr\n"})}),"\n",(0,s.jsx)(n.p,{children:"This address is longer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat payment.addr\naddr_test1qzdtyyt48yrn2fa3wvh939rat0gyv6ly0ljt449sw8tppzrcc3g0zu63cp6rnjumfcadft63x3w8ds4u28z6zlvra4fqy2sm8n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"query-the-balance-of-an-address",children:"Query the balance of an address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cardano-cli query utxo --address $(cat paymentNoStake.addr)\n                           TxHash                                 TxIx        Amount\n--------------------------------------------------------------------------------------\n262c7891f932cde390bcc04c25805f3f422c1a5687d5d47f6681e68bb384fe6d     0        10000000000 lovelace + TxOutDatumNone\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can get test tokens for ",(0,s.jsx)(n.strong,{children:"pre-production"})," and ",(0,s.jsx)(n.strong,{children:"preview"})," testnets via ",(0,s.jsx)(n.a,{href:"https://docs.cardano.org/cardano-testnet/tools/faucet/",children:"https://docs.cardano.org/cardano-testnet/tools/faucet/"})]}),"\n",(0,s.jsxs)(n.li,{children:["For Sanchonet tokens, go to ",(0,s.jsx)(n.a,{href:"https://sancho.network/faucet",children:"https://sancho.network/faucet"})]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>d});var s=a(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);