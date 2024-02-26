"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[5178],{1842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),i=n(8453);const o={},r="Status",a={id:"cardano-devs/ADR/ADR-0-Documenting-Architecture-Decisions",title:"Status",description:"\u2705 Adopted 2022-12-17",source:"@site/docs/cardano-devs/ADR/ADR-0-Documenting-Architecture-Decisions.md",sourceDirName:"cardano-devs/ADR",slug:"/cardano-devs/ADR/ADR-0-Documenting-Architecture-Decisions",permalink:"/cardano-devs/ADR/ADR-0-Documenting-Architecture-Decisions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-devs/ADR/ADR-0-Documenting-Architecture-Decisions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plutus Core and Plutus Tx user guide",permalink:"/plutus/welcomePlutus"},next:{title:"Status",permalink:"/cardano-devs/ADR/ADR-1-Default-eras-for-CLI-commands"}},c={},l=[];function d(e){const t={a:"a",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:"\u2705 Adopted 2022-12-17"}),"\n",(0,s.jsx)(t.h1,{id:"context",children:"Context"}),"\n",(0,s.jsx)(t.p,{children:"Architecture for agile projects has to be described and defined differently. Not all decisions will be made at once, nor will all of them be done when the project begins."}),"\n",(0,s.jsx)(t.p,{children:"Agile methods are not opposed to documentation, only to valueless documentation. Documents that assist the team itself can have value, but only if they are kept up to date. Large documents are never kept up to date. Small, modular documents have at least a chance at being updated."}),"\n",(0,s.jsx)(t.p,{children:"Nobody ever reads large documents, either. Most developers have been on at least one project where the specification document was larger (in bytes) than the total source code size. Those documents are too large to open, read, or update. Bite sized pieces are easier for for all stakeholders to consume."}),"\n",(0,s.jsx)(t.p,{children:"One of the hardest things to track during the life of a project is the motivation behind certain decisions. A new person coming on to a project may be perplexed, baffled, delighted, or infuriated by some past decision. Without understanding the rationale or consequences, this person has only two choices:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Blindly accept the decision."})}),"\n",(0,s.jsx)(t.p,{children:"This response may be OK, if the decision is still valid. It may not be good, however, if the context has changed and the decision should\nreally be revisited. If the project accumulates too many decisions accepted without understanding, then the development team becomes\nafraid to change anything and the project collapses under its own weight."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Blindly change it."})}),"\n",(0,s.jsx)(t.p,{children:"Again, this may be OK if the decision needs to be reversed. On the other hand, changing the decision without understanding its motivation\nor consequences could mean damaging the project's overall value without realizing it. (E.g., the decision supported a non-functional\nrequirement that hasn't been tested yet.)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"It's better to avoid either blind acceptance or blind reversal."}),"\n",(0,s.jsx)(t.h1,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(t.p,{children:'We will keep a collection of records for "architecturally significant" decisions: those that affect the structure, non-functional characteristics, dependencies, interfaces, or construction techniques.'}),"\n",(0,s.jsx)(t.p,{children:"An architecture decision record is a short text file in a format similar to an Alexandrian pattern. (Though the decisions themselves are not necessarily patterns, they share the characteristic balancing of forces.) Each record describes a set of forces and a single decision in response to those forces. Note that the decision is the central piece here, so specific forces may appear in multiple ADRs."}),"\n",(0,s.jsxs)(t.p,{children:["We will keep ADRs in the project wiki under ",(0,s.jsx)(t.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/wiki/Architecture-Decision-Records",children:"https://github.com/input-output-hk/cardano-node-wiki/wiki/Architecture-Decision-Records"})]}),"\n",(0,s.jsx)(t.p,{children:"We should use a lightweight text formatting language like Markdown."}),"\n",(0,s.jsx)(t.p,{children:"ADRs will be numbered sequentially and monotonically. Numbers will not be reused."}),"\n",(0,s.jsx)(t.p,{children:"If a decision is reversed, we will keep the old one around, but mark it as superseded. (It's still relevant to know that it was the decision, but is no longer the decision.)"}),"\n",(0,s.jsx)(t.p,{children:"We will use a format with just a few parts, so each document is easy to digest:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Title"}),' These documents have names that are short noun phrases. For example, "ADR-1 Deployment on Ruby on Rails 3.0.10" or "ADR-9 LDAP for Multitenant Integration"']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Status"}),' A decision may be "proposed" \ud83d\udcdc if the project stakeholders haven\'t agreed with it yet, "accepted" \u2705 once it is agreed or "rejected" \u274c if not. If a later ADR changes or reverses a decision, it may be marked as "deprecated" \ud83d\uddd1\ufe0f or "superseded" \u2b06\ufe0f with a reference to its replacement.']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Context"})," This section describes the forces at play, including technological, political, social, and project local. These forces are probably in tension, and should be called out as such. The language in this section is value-neutral. It is simply describing facts."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Decision"}),' This section describes our response to these forces. It is stated in full sentences, with active voice. "We will \u2026"']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Consequences"}),' This section describes the resulting context, after applying the decision. All consequences should be listed here, not just the "positive" ones. A particular decision may have positive, negative, and neutral consequences, but all of them affect the team and project in the future.']}),"\n",(0,s.jsx)(t.p,{children:"The whole document should be one or two pages long. We will write each ADR as if it is a conversation with a future developer. This requires good writing style, with full sentences organized into paragraphs. Bullets are acceptable only for visual style, not as an excuse for writing sentence fragments. (Bullets kill people, even PowerPoint bullets.)"}),"\n",(0,s.jsx)(t.h1,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsx)(t.p,{children:"One ADR describes one significant decision for a specific project. It should be something that has an effect on how the rest of the project will run."}),"\n",(0,s.jsx)(t.p,{children:"The consequences of one ADR are very likely to become the context for subsequent ADRs. This is also similar to Alexander's idea of a pattern language: the large-scale responses create spaces for the smaller scale to fit into."}),"\n",(0,s.jsx)(t.p,{children:"Developers and project stakeholders can see the ADRs, even as the team composition changes over time."}),"\n",(0,s.jsx)(t.p,{children:'The motivation behind previous decisions is visible for everyone, present and future. Nobody is left scratching their heads to understand, "What were they thinking?" and the time to change old decisions will be clear from changes in the project\'s context.'})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);