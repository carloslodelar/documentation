"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[157],{273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(4848),r=t(8453);const i={title:"Tracing system quick start",id:"new-tracing-quick-start",sidebar_position:3,keywords:["Get-started","run the node","installation","tracer","tracing","logging","cardano-node","cardano node"]},s="New Tracing Quickstart",o={id:"cardano-node/new-tracing-system/new-tracing-quick-start",title:"Tracing system quick start",description:"From now on old-tracing (based on iohk-monitoring-framework) exists",source:"@site/docs/cardano-node/new-tracing-system/New Tracing Quickstart.md",sourceDirName:"cardano-node/new-tracing-system",slug:"/cardano-node/new-tracing-system/new-tracing-quick-start",permalink:"/cardano-node/new-tracing-system/new-tracing-quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-node/new-tracing-system/New Tracing Quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tracing system quick start",id:"new-tracing-quick-start",sidebar_position:3,keywords:["Get-started","run the node","installation","tracer","tracing","logging","cardano-node","cardano node"]},sidebar:"tutorialSidebar",previous:{title:"Trace messages",permalink:"/cardano-node/new-tracing-system/trace-messages"},next:{title:"Build cardano-cli from source",permalink:"/cardano-cli/build-cli-from-source"}},c={},d=[{value:"Configuration of new tracing",id:"configuration-of-new-tracing",level:3},{value:"Configuration and use of cardano-tracer",id:"configuration-and-use-of-cardano-tracer",level:3},{value:"Development during transition-time",id:"development-during-transition-time",level:3},{value:"Documentation of trace messages and further documentation",id:"documentation-of-trace-messages-and-further-documentation",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"new-tracing-quickstart",children:"New Tracing Quickstart"}),"\n",(0,a.jsx)(n.p,{children:"From now on old-tracing (based on iohk-monitoring-framework) exists\ntogether with new-tracing (based on trace-dispatcher and cardano-tracer) for a while."}),"\n",(0,a.jsx)(n.p,{children:"In this transition time new-tracing can be tested and improved. Since we have several hundred trace messages\nit is expected that you will find regressions and bugs in the port, please help to find\nand fix them."}),"\n",(0,a.jsx)(n.p,{children:"In this transition time new tracing will for technical reason have a restricted functionality,\nas e.g. the reconfiguration of a running node is not available."}),"\n",(0,a.jsxs)(n.p,{children:["To switch to new tracing set the value ",(0,a.jsx)(n.code,{children:"UseTraceDispatcher"})," to true. If you do this, the\nconfig file needs to contain several values for the configuration of new-tracing, as we\ndescribe next."]}),"\n",(0,a.jsxs)(n.p,{children:["The current tracing system has two ways to identify the message, a hierarchical name we\ncall it's ",(0,a.jsx)(n.code,{children:"Namespace"})," and the ",(0,a.jsx)(n.code,{children:"Kind field"})," in machine representation. We base our implementation\non the namespace, and require a one-to-one correspondence between namespaces and messages (bijective mapping)."]}),"\n",(0,a.jsxs)(n.p,{children:["As we have two mechanisms for the same purpose for historic reasons, we will soon\n",(0,a.jsx)(n.strong,{children:"deprecate the Kind field"}),", and it will disappear in the near future. So we strongly\nadvice to use namespaces for any analysis tools of traces!"]}),"\n",(0,a.jsx)(n.h3,{id:"configuration-of-new-tracing",children:"Configuration of new tracing"}),"\n",(0,a.jsxs)(n.p,{children:["In Cardano a default configuration is given in the module ",(0,a.jsx)(n.a,{href:"https://github.com/intersectmbo/cardano-node/blob/master/cardano-node/src/Cardano/Node/Tracing/DefaultTraceConfig.hs",children:"Cardano.Node.Tracing.DefaultTraceConfig"}),". In the config file all entries of the default configuration can be overridden. To remove a frequency limiter, define a limiter with maxFrequency 0.0."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Specify a filter for the severity of the messages you want to see, e.g.:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# Show messages of Severity Notice or higher as default\n"":\n    severity: Notice\n\n  # But show ChainDB messages starting from Info\nChainDB:\n    severity: Info\n'})}),"\n",(0,a.jsx)(n.p,{children:"So the namespaces are used for configuration values, which works\ndown to individual messages, and the more specialized value overwrites the more general."}),"\n",(0,a.jsxs)(n.p,{children:["If you don't want to see any messages from tracers the new severity ",(0,a.jsx)(n.code,{children:"Silence"}),"\nexists, which suppresses all messages."]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Specify in which detail level, the messages get shown."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'"":\n    # Keep this\n    severity: Notice\n    # All messages are shown with normal detail level\n    detail: DNormal\n'})}),"\n",(0,a.jsx)(n.p,{children:"Other options would be DMinimal, DDetailed and DMaximum. This has only an effect on messages which support the representation in different ways."}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Specify limiters for the frequency of messages"}),"\n",(0,a.jsx)(n.p,{children:"Eliding tracers are not supported in new-tracing, instead you can limit the\nfrequency in which messages get shown."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"ChainDB.AddBlockEvent.AddedBlockToQueue:\n    # Only show a maximum of 2 of these messages per second\n    maxFrequency: 2.0\n"})}),"\n",(0,a.jsx)(n.p,{children:"The activity of limiters will be written in the traces as well."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Specify the backends the messages are routed to."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'"":\n    # Keep this\n    severity: Notice\n    # And this\n    detail: DNormal\n    # And specify a list of backends to use\n    backends:\n      - Stdout MachineFormat\n      - EKGBackend\n      - Forwarder\n'})}),"\n",(0,a.jsx)(n.p,{children:"These are all the backends currently supported. With Stdout you have the\noptions MachineFormat or HumanFormatColoured/HumanFormatUncoloured.\nIf messages don't support representation in HumanFormat* they are shown in MachineFormat anyway."}),"\n",(0,a.jsx)(n.p,{children:"Forwarder means that messages are send to cardano-tracer"}),"\n",(0,a.jsx)(n.p,{children:"Configuration can be written in JSON and YAML, we have shown the examples in YAML."}),"\n",(0,a.jsx)(n.h3,{id:"configuration-and-use-of-cardano-tracer",children:"Configuration and use of cardano-tracer"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"cardano-tracer"})," is a part of the new tracing infrastructure. It is a separate service that accepts different messages from the node and handles them.\nSo it is assumed that if you want to use the new tracing infrastructure - you will use ",(0,a.jsx)(n.code,{children:"cardano-tracer"}),". Please read its ",(0,a.jsx)(n.a,{href:"https://github.com/intersectmbo/cardano-node/blob/master/cardano-tracer/docs/cardano-tracer.md",children:"documentation"})," for more details."]}),"\n",(0,a.jsxs)(n.p,{children:["This example describes the simplest case, when the node and ",(0,a.jsx)(n.code,{children:"cardano-tracer"})," on the same machine."]}),"\n",(0,a.jsxs)(n.p,{children:["First of all, add ",(0,a.jsx)(n.code,{children:"--tracer-socket-path-connect /tmp/forwarder.sock"})," option to the node's CLI options, asking it to connect to ",(0,a.jsx)(n.code,{children:"cardano-tracer"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Then build and run ",(0,a.jsx)(n.code,{children:"cardano-tracer"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cabal build cardano-tracer && cabal install cardano-tracer --installdir=PATH_TO_DIR --overwrite-policy=always\n$ cd PATH_TO_DIR\n$ ./cardano-tracer --config PATH_TO_CONFIG\n"})}),"\n",(0,a.jsxs)(n.p,{children:["where ",(0,a.jsx)(n.code,{children:"PATH_TO_CONFIG"})," is a path to tracer's configuration file. This is an example of such a configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'---\nnetwork:\n  tag: AcceptAt\n  contents: "/tmp/forwarder.sock"\nlogging:\n- logRoot: "/tmp/cardano-tracer-logs"\n  logMode: FileMode\n  logFormat: ForMachine\n'})}),"\n",(0,a.jsxs)(n.p,{children:["That's it. After you run the node, it will establish the connection with ",(0,a.jsx)(n.code,{children:"cardano-tracer"})," and will start to forward messages to it.\nAs a result, you will find log files, in JSON format, in ",(0,a.jsx)(n.code,{children:"/tmp/cardano-tracer-logs"})," directory."]}),"\n",(0,a.jsx)(n.h3,{id:"development-during-transition-time",children:"Development during transition-time"}),"\n",(0,a.jsx)(n.p,{children:"For developing tracers in the transition time we suggest:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Don't use strictness annotations for trace types. Trace messages are either\ndiscarded immediately (which happens frequently) or instantly converted to another format\nbut never stored. So strictness annotations make the code less efficient without any benefit.\nAs well it doesn't play well together with the required prototypes of messages in the\nnew framework."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If you develop new tracers we suggest that you develop the new tracers first,\nand then map to old tracers, as the new tracers will survive. You will find plenty of\nexamples in cardano-node under Cardano.Node.Tracing.Tracers."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Contact the benchmarking team or node-logging channel for any questions and reviews."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"documentation-of-trace-messages-and-further-documentation",children:"Documentation of trace messages and further documentation"}),"\n",(0,a.jsx)(n.p,{children:"This is a document which is regenerated periodically and documents all trace-messages,  metrics and data-points in cardano-node. It as well displays the handling of these\nmessages with the current default configuration:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/blob/main/docs/new-tracing/tracers_doc_generated.md",children:"Cardano Trace Documentation"})}),"\n",(0,a.jsx)(n.p,{children:"This document describes the underlying library trace-dispatcher:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/intersectmbo/cardano-node/blob/master/trace-dispatcher/doc/trace-dispatcher.md",children:"trace-dispatcher: efficient, simple and flexible program tracing"})}),"\n",(0,a.jsx)(n.p,{children:"This document describes a seperate service for logging and monitoring Cardano nodes:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/intersectmbo/cardano-node/blob/master/cardano-tracer/docs/cardano-tracer.md",children:"Cardano Tracer"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);