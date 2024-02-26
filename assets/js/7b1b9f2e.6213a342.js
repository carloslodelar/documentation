"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[8359],{8990:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(4848),c=i(8453);const r={},d=void 0,l={id:"cardano-devs/contributing/Cardano-node-required-checks",title:"Cardano-node-required-checks",description:"Checks for the master branch",source:"@site/docs/cardano-devs/contributing/Cardano-node-required-checks.md",sourceDirName:"cardano-devs/contributing",slug:"/cardano-devs/contributing/Cardano-node-required-checks",permalink:"/cardano-devs/contributing/Cardano-node-required-checks",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/contributing/Cardano-node-required-checks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI-era-command-groups",permalink:"/cardano-devs/contributing/CLI-era-command-groups"},next:{title:"Concurrency-groups-in-Github-Actions-workflows",permalink:"/cardano-devs/contributing/Concurrency-groups-in-Github-Actions-workflows"}},t={},o=[{value:"Checks for the <code>master</code> branch",id:"checks-for-the-master-branch",level:2},{value:"Legend",id:"legend",level:3},{value:"Required Checks",id:"required-checks",level:3},{value:"Incidents",id:"incidents",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"checks-for-the-master-branch",children:["Checks for the ",(0,s.jsx)(n.code,{children:"master"})," branch"]}),"\n",(0,s.jsxs)(n.p,{children:["These are the agreed-upon required checks for the ",(0,s.jsxs)(n.a,{href:"https://github.com/intersectmbo/cardano-node",children:[(0,s.jsx)(n.code,{children:"cardano-node"})," repository"]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Whenever there is a variation to this document, the required checks for the ",(0,s.jsx)(n.code,{children:"cardano-node"}),"\nrepository should be updated accordingly."]}),"\n",(0,s.jsxs)(n.p,{children:["If the required checks for the ",(0,s.jsx)(n.code,{children:"cardano-node"})," repository differ from those\ndescribed here, then those should be updated to match this page."]}),"\n",(0,s.jsx)(n.p,{children:"Sometimes, due to an urgent situation, a required check may need to be disabled\nto merge an important PR. Those incidents should be documented in the incidents\nsection of the page. Keeping a list of such incidents will help us understand\nwhich required checks are problematic."}),"\n",(0,s.jsx)(n.h3,{id:"legend",children:"Legend"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u2705 Required check.\nMerges disallowed unless this job is successful."}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udc49 Pre-requisite required check.\nA required check depends on this job.  A job with a required check could not pass without this passing."}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 No required check and not a pre-requisite."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"required-checks",children:"Required Checks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u26d4 Check Markdown links / markdown-link-check (push)"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 Check HLint / build (push)"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 Check Stylish Haskell / build (push)"}),"\n",(0,s.jsx)(n.li,{children:"\u2705 Check cabal files / check-cabal-files (push)\nEnsures cabal files are well-formed"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 Check git dependencies / build (push)"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 Check mainnet configuration / build (push)"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 Check nix configuration / build (push)"}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 Haskell Linux CI / linux_ci (8.10.7, 3.10.1.0, ubuntu-latest)\nCI build and test with ",(0,s.jsx)(n.code,{children:"cabal"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 Haskell Windows & Mac CI / build (9.2.7, 3.10.1.0, macos-latest)\nCI build and test with ",(0,s.jsx)(n.code,{children:"cabal"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 Haskell Linux CI / linux_ci (9.2.7, 3.10.1.0, ubuntu-latest)\nCI build and test with ",(0,s.jsx)(n.code,{children:"cabal"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc49 Haskell Windows & Mac CI / build (9.2.7, 3.10.1.0, windows-latest)\nCI build and test with ",(0,s.jsx)(n.code,{children:"cabal"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u2705 Haskell Linux CI / build-complete (push)\nDepends on:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Haskell Linux CI / linux_ci (8.10.7, 3.10.1.0, ubuntu-latest)"}),"\n",(0,s.jsx)(n.li,{children:"Haskell Linux CI / linux_ci (9.2.7, 3.10.1.0, ubuntu-latest)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u2705 Haskell Windows & Mac CI / build-complete (push)\nDepends on:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Haskell Windows & Mac CI / build (9.2.7, 3.10.1.0, macos-latest)"}),"\n",(0,s.jsx)(n.li,{children:"Haskell Windows & Mac CI / build (9.2.7, 3.10.1.0, windows-latest)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 Haskell Linux CI / release (push)"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 Haskell Windows & Mac CI / release (push)"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 ci/pr/nonrequired"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 ci/pr/system-tests"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 buildkite/cardano-node"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 buildkite/cardano-node/check-cabal-project"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 buildkite/cardano-node/docker-image"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 buildkite/cardano-node/pipeline"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 ci/cardano-deployment"}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 ci/eval"}),"\n",(0,s.jsxs)(n.li,{children:["\u2705 ci/hydra-build",":required"]}),"\n",(0,s.jsx)(n.li,{children:"\u26d4 ci/pr/required"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"incidents",children:"Incidents"}),"\n",(0,s.jsx)(n.p,{children:"List emergency incidents here."})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(6540);const c={},r=s.createContext(c);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);