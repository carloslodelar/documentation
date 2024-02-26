"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[3520],{3032:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var i=s(4848),o=s(8453);const d={},l="Status",r={id:"cardano-devs/ADR/ADR-3-Dependencies-version-constraints-in-cabal-file",title:"Status",description:"\ud83d\udcdc Proposed 2023-05-15",source:"@site/docs/cardano-devs/ADR/ADR-3-Dependencies-version-constraints-in-cabal-file.md",sourceDirName:"cardano-devs/ADR",slug:"/cardano-devs/ADR/ADR-3-Dependencies-version-constraints-in-cabal-file",permalink:"/cardano-devs/ADR/ADR-3-Dependencies-version-constraints-in-cabal-file",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/ADR/ADR-3-Dependencies-version-constraints-in-cabal-file.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/cardano-devs/ADR/ADR-2-Module-structure-for-generators"},next:{title:"Architecture-Decision-Records",permalink:"/cardano-devs/ADR/Architecture-Decision-Records"}},t={},c=[{value:"Considered options",id:"considered-options",level:2},{value:"Status quo",id:"status-quo",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.p,{children:"\ud83d\udcdc Proposed 2023-05-15"}),"\n",(0,i.jsx)(n.h1,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(n.p,{children:["In a project with multiple packages, there is a need to control version bounds of the dependencies used to provide stable and reproducible builds. This is achieved by entering version bounds into the ",(0,i.jsx)(n.code,{children:".cabal"})," file, as described in ",(0,i.jsx)(n.a,{href:"https://cabal.readthedocs.io/en/latest/cabal-package-description-file.html#pkg-field-build-depends",children:"Cabal documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Let's consider an example where multiple package ",(0,i.jsx)(n.em,{children:"components"})," (eg, libraries, internal libraries, test-suites,\nexecutables) form a more complex dependency graph like the following one:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mermaid",children:"graph LR\n B --\x3e A\n C --\x3e A\n D --\x3e B\n D --\x3e C\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Considering an example case, where ",(0,i.jsx)(n.code,{children:"B"})," and ",(0,i.jsx)(n.code,{children:"C"})," but not ",(0,i.jsx)(n.code,{children:"A"}),", have the same dependencies, we need to encode version ranges twice.\nThis results in duplicated entries in the ",(0,i.jsx)(n.code,{children:".cabal"})," file, with duplicated version bounds."]}),"\n",(0,i.jsx)(n.h2,{id:"considered-options",children:"Considered options"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Using explicit common stanzas, one per dependency."})," See ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hedgehog-extras/blob/e7f3c9ff967ed6f3b4c8c17013a4e0c2f541e053/hedgehog-extras.cabal#L19",children:"the example"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fine-grained control over what dependency is included where is achieved with a single place defining version bounds"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Disadvantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A lot of boilerplate when defining new dependencies"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Moving common dependencies to ",(0,i.jsx)(n.code,{children:"common"})," stanzas, multiple dependencies in one stanza"]}),".\nThis allows for the grouping of dependencies between components in order to specify version bound only once.\nFor example, the same ",(0,i.jsx)(n.code,{children:"common"})," stanza could be reused in ",(0,i.jsx)(n.code,{children:"B"})," and ",(0,i.jsx)(n.code,{children:"C"})," to define version bounds in a\nsingle place."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Grouping multiple dependencies together introduces less boilerplate in comparison to the\n",(0,i.jsx)(n.em,{children:"one-stanza-per-one-dependency"})," option"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Disadvantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It may be hard to define logical grouping for a few unrelated dependencies"}),"\n",(0,i.jsxs)(n.li,{children:["In the worst-case scenario we'll end up with ",(0,i.jsx)(n.em,{children:"one-stanza-per-one-dependency"})," definition of\ndependencies, when those will be used in different components"]}),"\n",(0,i.jsx)(n.li,{children:"Each common stanza will need to be named.\nThere is a risk the naming will be inconsistent between projects and confusion could occur around that inconsistency and bike-shedding may result from having to deal with those inconsistencies."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Declaring dependencies' bounds everywhere"}),".\nIn the provided example, the version bounds of common dependencies of ",(0,i.jsx)(n.code,{children:"A"})," and ",(0,i.jsx)(n.code,{children:"B"})," should be both defined in\n",(0,i.jsx)(n.code,{children:"A"})," and ",(0,i.jsx)(n.code,{children:"B"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Makes it easy to remember how to update dependency versions everywhere"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Disadvantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It's not hard to overlook a spot when a person updating the dependency version is unfamiliar with the\nrule"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Declaring dependencies' bounds once, as close as possible to the dependency tree root."}),"\nIn the provided example, the version bounds of common dependencies of ",(0,i.jsx)(n.code,{children:"A"})," and ",(0,i.jsx)(n.code,{children:"B"})," should be only defined in\n",(0,i.jsx)(n.code,{children:"A"}),".\nIf dependencies are both present in ",(0,i.jsx)(n.code,{children:"B"})," and ",(0,i.jsx)(n.code,{children:"C"}),", the version bounds should be duplicated in both components."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Slight de-duplication of version bounds definitions in comparison to duplicated version bounds"}),"\n",(0,i.jsxs)(n.li,{children:["Does not require introducing ",(0,i.jsx)(n.code,{children:"common"})," stanzas"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Disadvantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"B"})," & ",(0,i.jsx)(n.code,{children:"C"})," cases, there will be a duplication of version bounds"]}),"\n",(0,i.jsxs)(n.li,{children:["Inconsistency in version bounds declaration because of ",(0,i.jsx)(n.code,{children:"B"})," & ",(0,i.jsx)(n.code,{children:"C"})," cases"]}),"\n",(0,i.jsx)(n.li,{children:"If there are multiple roots, then all those roots would have to have bounds. If one is accidentally missed, it is possible for those bounds to be ignored if only roots without bounds are in the Cabal plan, which could lead to the wrong version of the package being built."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Using a configuration language allowing to generate Cabal files"})," like ",(0,i.jsx)(n.a,{href:"https://github.com/dhall-lang/dhall-to-cabal",children:"https://github.com/dhall-lang/dhall-to-cabal"})," .\nThis way, instead of modifying Cabal files, one would have to modify the configuration file and then regenerate ",(0,i.jsx)(n.code,{children:".cabal"})," files from it."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A flexible way of configuration, which allows for deduplication of Cabal files' contents"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Disadvantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"New development tool with non-zero learning effort required for team members"}),"\n",(0,i.jsx)(n.li,{children:"Additional piece requiring integration in CI"}),"\n",(0,i.jsxs)(n.li,{children:["Syntax usually is more verbose than just ",(0,i.jsx)(n.code,{children:".cabal"})," files itself"]}),"\n",(0,i.jsx)(n.li,{children:"If the Cabal file is checked into git, PRs are larger because there will be changes in both the alternate file and the Cabal file itself.\nIf the Cabal file is not checked into git, the tools we rely on may not work in the repository. (For example, see cardano-haskell-packages and source-repository-package stanzas)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"status-quo",children:"Status quo"}),"\n",(0,i.jsx)(n.p,{children:"Currently, a mixture of options 2, 3, and 4 is used. Most frequently, option 3 is used for libraries maintained by IOG, but it is not used everywhere."}),"\n",(0,i.jsx)(n.h1,{id:"decision",children:"Decision"}),"\n",(0,i.jsx)(n.p,{children:"TBD"}),"\n",(0,i.jsx)(n.h1,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsxs)(n.p,{children:["The adopted version constraints setting policy should be used in ",(0,i.jsx)(n.code,{children:"cardano-node"}),", ",(0,i.jsx)(n.code,{children:"cardano-api"}),", and ",(0,i.jsx)(n.code,{children:"cardano-cli"})," projects.\nThis will allow for less error-prone dependency management."]}),"\n",(0,i.jsx)(n.h1,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cabal.readthedocs.io/en/latest/cabal-package-description-file.html#pkg-field-build-depends",children:"https://cabal.readthedocs.io/en/latest/cabal-package-description-file.html#pkg-field-build-depends"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://github.com/haskell/cabal/issues/8912",children:["Per-cabal-file ",(0,i.jsx)(n.code,{children:"constraints"})," - Issue in haskell/cabal"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://input-output-hk.github.io/cardano-engineering-handbook/policy/haskell/packaging/versioning.html",children:"https://input-output-hk.github.io/cardano-engineering-handbook/policy/haskell/packaging/versioning.html"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(6540);const o={},d=i.createContext(o);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);