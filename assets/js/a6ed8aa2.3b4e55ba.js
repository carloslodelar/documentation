"use strict";(self.webpackChunknode_cli_docs=self.webpackChunknode_cli_docs||[]).push([[2717],{8005:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=l(4848),i=l(8453);const o={title:"Build from source",id:"build-from-source",sidebar_position:1,keywords:["Get-started","build from source","installation","cardano-node"]},t="Installing the node from source",r={id:"cardano-node/build-from-source",title:"Build from source",description:"The latest version of the node may be downloaded from the cardano-node GitHub Releases page.",source:"@site/docs/cardano-node/installing.md",sourceDirName:"cardano-node",slug:"/cardano-node/build-from-source",permalink:"/documentation/cardano-node/build-from-source",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cardano-node/installing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Build from source",id:"build-from-source",sidebar_position:1,keywords:["Get-started","build from source","installation","cardano-node"]},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/documentation/"},next:{title:"Build with nix",permalink:"/documentation/cardano-node/build-with-nix"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Installation dependencies",id:"installation-dependencies",level:4},{value:"You will need to install llvm in case you are using M1",id:"you-will-need-to-install-llvm-in-case-you-are-using-m1",level:4},{value:"Installing the Haskell environment",id:"installing-the-haskell-environment",level:4},{value:"Installing Libsodium",id:"installing-libsodium",level:4},{value:"Using the ported <code>c</code> code for development",id:"using-the-ported-c-code-for-development",level:5},{value:"Installing Secp256k1",id:"installing-secp256k1",level:4},{value:"Installing BLST",id:"installing-blst",level:4},{value:"Downloading the source code for cardano-node",id:"downloading-the-source-code-for-cardano-node",level:4},{value:"Configuring the build options",id:"configuring-the-build-options",level:4},{value:"Building and installing the node",id:"building-and-installing-the-node",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installing-the-node-from-source",children:"Installing the node from source"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"latest"})," version of the node may be downloaded from the ",(0,s.jsx)(n.a,{href:"https://github.com/intersectmbo/cardano-node/releases",children:"cardano-node GitHub Releases"})," page."]}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"To set up your platform, you will need:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Network"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"CPU Cores"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Free RAM"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Free storage"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"OS for Pasive Node"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"OS for Stake pool"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Mainnet"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"24GB"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"150GB of free storage (250GB recommended for future growth)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Linux / Windows** / MacOS"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Linux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Testnet"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4GB"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"20GB"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Linux / Windows** / MacOS"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Linux"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["**",(0,s.jsx)(n.strong,{children:"Note"})," If you are building on Windows, we recommend using WSL2 under Windows 10 as this provides a development and execution environment that is very similar to Ubuntu."]}),"\n",(0,s.jsx)(n.h4,{id:"installation-dependencies",children:"Installation dependencies"}),"\n",(0,s.jsx)(n.p,{children:"To download the source code and build it, you need the following packages and tools on your Linux system:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the version control system ",(0,s.jsx)(n.code,{children:"git"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"gcc"})," C-compiler,"]}),"\n",(0,s.jsxs)(n.li,{children:["C++ support for ",(0,s.jsx)(n.code,{children:"gcc"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["developer libraries for the arbitrary precision library ",(0,s.jsx)(n.code,{children:"gmp"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["developer libraries for the compression library ",(0,s.jsx)(n.code,{children:"zlib"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["developer libraries for ",(0,s.jsx)(n.code,{children:"systemd"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["developer libraries for ",(0,s.jsx)(n.code,{children:"ncurses"}),","]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ncurses"})," compatibility libraries,"]}),"\n",(0,s.jsxs)(n.li,{children:["the Haskell build tool ",(0,s.jsx)(n.code,{children:"cabal"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["the GHC Haskell compiler (version ",(0,s.jsx)(n.code,{children:"8.10.7"})," or above)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In Redhat, Fedora, and Centos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo yum update -y\nsudo yum install git gcc gcc-c++ tmux gmp-devel make tar xz wget zlib-devel libtool autoconf -y\nsudo yum install systemd-devel ncurses-devel ncurses-compat-libs which jq openssl-devel lmdb-devel -y\n"})}),"\n",(0,s.jsx)(n.p,{children:"For Debian/Ubuntu:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update -y\nsudo apt-get install automake build-essential pkg-config libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev zlib1g-dev make g++ tmux git jq wget libncursesw5 libtool autoconf liblmdb-dev -y\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Possible issue with ",(0,s.jsx)(n.code,{children:"pkg-config"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pkgconf"})," 1.9.5 (which is default in ",(0,s.jsx)(n.code,{children:"Fedora 39"})," and ",(0,s.jsx)(n.code,{children:"Rawhide"}),") produces output unreadable by ",(0,s.jsx)(n.code,{children:"cabal"}),", which results in an errors like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"conflict: pkg-config package libsodium-any, not found in the pkg-config database \n"})}),"\n",(0,s.jsxs)(n.p,{children:["despite having ",(0,s.jsx)(n.code,{children:"libsodium"})," installed in the system."]}),"\n",(0,s.jsx)(n.p,{children:"The possible solutions to this problem are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["to upgrade ",(0,s.jsx)(n.code,{children:"pkgconf"})," to version 2 by building it from source:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum update -y && \\\nyum install git diffutils gcc gcc-c++ tmux gmp-devel make tar xz wget zlib-devel libtool autoconf -y && \\\nmkdir -p /root/src/ && cd /root/src && \\\ncurl -O https://distfiles.ariadne.space/pkgconf/pkgconf-2.0.3.tar.xz && \\\ntar -xvf pkgconf-2.0.3.tar.xz && \\\ncd pkgconf-2.0.3 && \\\n./configure && make && make install && \\\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["to use ",(0,s.jsx)(n.code,{children:"cabal"})," version (higher than ",(0,s.jsx)(n.code,{children:"3.10.2.0"}),") that have these changes already integrated:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/haskell/cabal/pull/9134",children:"Try each pkg-config query separatedly"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/haskell/cabal/pull/9391",children:"fix pkgconf 1.9 --modversion regression"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Optional dependencies that may be required: llvm libnuma-dev"}),"\n",(0,s.jsxs)(n.p,{children:["If you are using a different flavor of Linux, you will need to use the correct package manager for your platform instead of ",(0,s.jsx)(n.code,{children:"yum"})," or ",(0,s.jsx)(n.code,{children:"apt-get"}),", and the names of the packages you need to install might differ."]}),"\n",(0,s.jsx)(n.p,{children:"For MacOS:"}),"\n",(0,s.jsx)(n.p,{children:"You'll need the following packages and tools on your MacOS system:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developer.apple.com/xcode",children:"Xcode"})," - The Apple Development IDE and SDK/Tools"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developer.apple.com/xcode/features/",children:"Xcode Command Line Tools"}),", you can install it by typing ",(0,s.jsx)(n.code,{children:"xcode-select --install"})," in the terminal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})," - The Missing Package Manager for MacOS (or Linux)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Then using homebrew install the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install jq libtool autoconf automake pkg-config openssl\n"})}),"\n",(0,s.jsx)(n.h4,{id:"you-will-need-to-install-llvm-in-case-you-are-using-m1",children:"You will need to install llvm in case you are using M1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install llvm@13\n"})}),"\n",(0,s.jsx)(n.h4,{id:"installing-the-haskell-environment",children:"Installing the Haskell environment"}),"\n",(0,s.jsxs)(n.p,{children:["The recommended way to install the Haskell tools is via ",(0,s.jsx)(n.a,{href:"https://www.haskell.org/ghcup/",children:"GHCup"}),". Its installation script will guide you through the installation, and warn you about packages that you have to make sure are installed in the system (the ones described on the step above). Check ",(0,s.jsx)(n.a,{href:"https://www.haskell.org/ghcup/install/",children:"this page"})," for further explanation on the installation process."]}),"\n",(0,s.jsx)(n.p,{children:"Once GHCup is installed, open a new terminal (to get an updated environment) and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ghcup install ghc 8.10.7\nghcup install cabal 3.8.1.0\nghcup set ghc 8.10.7\nghcup set cabal 3.8.1.0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, with ",(0,s.jsx)(n.code,{children:"ghcup tui"})," you can pick the specific versions of the tools that you want to install, in particular you should have installed and set:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cabal >= 3.8.1.0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"GHC >= 8.10.7"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To check that you will use the GHCup tools (and not any other installation on the system), you can execute"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"which cabal\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and it should return a path of this shape: ",(0,s.jsx)(n.code,{children:"/home/<user>/.ghcup/bin/cabal"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"installing-libsodium",children:"Installing Libsodium"}),"\n",(0,s.jsxs)(n.p,{children:["Cardano uses a custom fork of ",(0,s.jsx)(n.code,{children:"libsodium"})," which exposes some internal functions\nand adds some other new functions. This fork lives in\n",(0,s.jsx)(n.a,{href:"https://github.com/intersectmbo/libsodium",children:"https://github.com/intersectmbo/libsodium"}),".\nUsers need to install that custom version of ",(0,s.jsx)(n.code,{children:"libsodium"})," with the following steps."]}),"\n",(0,s.jsx)(n.p,{children:"Create a working directory for your builds:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/src\ncd ~/src\n"})}),"\n",(0,s.jsx)(n.p,{children:"Download and install libsodium:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/intersectmbo/libsodium\ncd libsodium\ngit checkout dbb48cc\n./autogen.sh\n./configure\nmake\nmake check\nsudo make install\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add the following to your ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," file and source it (or re-open the terminal):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH"\nexport PKG_CONFIG_PATH="/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For some distributions you will also need to configure the dynamic linker.  If\nthe executable is linked with the right ",(0,s.jsx)(n.code,{children:"libsodium.so"})," file (which you can\ncheck by running ",(0,s.jsx)(n.code,{children:"ldd"}),"), the running binary might still use the wrong library.\nYou can check this by running ",(0,s.jsx)(n.code,{children:"pldd"}),". If the ",(0,s.jsx)(n.code,{children:"pldd"})," shows that the running executable\nis using the wrong library, run ",(0,s.jsx)(n.code,{children:"ldconfig"}),"."]}),"\n",(0,s.jsxs)(n.h5,{id:"using-the-ported-c-code-for-development",children:["Using the ported ",(0,s.jsx)(n.code,{children:"c"})," code for development"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," the ported ",(0,s.jsx)(n.code,{children:"c"})," code should not be used to run the node, and should only be\nused for development purposes."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to avoid having to install the custom version of libsodium for development\npurposes, ",(0,s.jsx)(n.code,{children:"cardano-crypto-praos"})," defines a ",(0,s.jsx)(n.code,{children:"cabal"})," flag that makes use of C code located\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/cardano-base/tree/master/cardano-crypto-praos/cbits",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The C code is merely a port of the bits missing in a normal ",(0,s.jsx)(n.code,{children:"libsodium"}),"\ninstallation. To enable this code, one has to add the following code in the\n",(0,s.jsx)(n.code,{children:"cabal.project.local"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"package cardano-crypto-praos\n  flags: -external-libsodium-vrf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For this to work, ",(0,s.jsx)(n.code,{children:"libsodium"})," has to be in the system. For Ubuntu, this is achieved by:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install libsodium-dev\n"})}),"\n",(0,s.jsx)(n.h4,{id:"installing-secp256k1",children:"Installing Secp256k1"}),"\n",(0,s.jsx)(n.p,{children:"Create a working directory for your builds:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/src\ncd ~/src\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Download and install ",(0,s.jsx)(n.code,{children:"libsecp256k1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/bitcoin-core/secp256k1\ncd secp256k1\ngit checkout ac83be33\n./autogen.sh\n./configure --enable-module-schnorrsig --enable-experimental\nmake\nmake check\nsudo make install\n"})}),"\n",(0,s.jsx)(n.h4,{id:"installing-blst",children:"Installing BLST"}),"\n",(0,s.jsx)(n.p,{children:"Download and install BLST so that cardano-base can pick it up (assuming that pkg-config is installed):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/supranational/blst\ncd blst\ngit checkout v0.3.10\n./build.sh\ncat > libblst.pc << EOF\nprefix=/usr/local\nexec_prefix=\\${prefix}\nlibdir=\\${exec_prefix}/lib\nincludedir=\\${prefix}/include\n\nName: libblst\nDescription: Multilingual BLS12-381 signature library\nURL: https://github.com/supranational/blst\nVersion: 0.3.10\nCflags: -I\\${includedir}\nLibs: -L\\${libdir} -lblst\nEOF\nsudo cp libblst.pc /usr/local/lib/pkgconfig/\nsudo cp bindings/blst_aux.h bindings/blst.h bindings/blst.hpp  /usr/local/include/\nsudo cp libblst.a /usr/local/lib\nsudo chmod u=rw,go=r /usr/local/{lib/{libblst.a,pkgconfig/libblst.pc},include/{blst.{h,hpp},blst_aux.h}}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"downloading-the-source-code-for-cardano-node",children:"Downloading the source code for cardano-node"}),"\n",(0,s.jsx)(n.p,{children:"Create a working directory for your builds:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/src\ncd ~/src\n"})}),"\n",(0,s.jsx)(n.p,{children:"Download the Cardano node sources:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/intersectmbo/cardano-node.git\n"})}),"\n",(0,s.jsx)(n.p,{children:"Change the working directory to the downloaded source code folder:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd cardano-node\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Check out the latest version of cardano-node (choose the tag with the highest version number: ",(0,s.jsx)(n.code,{children:"TAGGED-VERSION"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git fetch --all --recurse-submodules --tags\ngit tag | sort -V\ngit checkout tags/<TAGGED VERSION>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"configuring-the-build-options",children:"Configuring the build options"}),"\n",(0,s.jsx)(n.p,{children:"We explicitly use the GHC version that we installed earlier.  This avoids defaulting to a system version of GHC that might be different than the one you have installed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "with-compiler: ghc-8.10.7" >> cabal.project.local\n'})}),"\n",(0,s.jsx)(n.p,{children:"You will need to run following commands on M1, those commands will set some cabal related options before building"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "package trace-dispatcher" >> cabal.project.local\necho "  ghc-options: -Wwarn" >> cabal.project.local\necho "" >> cabal.project.local\n\necho "package HsOpenSSL" >> cabal.project.local\necho "  flags: -homebrew-openssl" >> cabal.project.local\necho "" >> cabal.project.local\n'})}),"\n",(0,s.jsx)(n.p,{children:"More recent versions of MacOS seems to install openssl in a different location than expected by default. If you have installed openssl via homebrew and encounter the following build error:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Failed to build HsOpenSSL-0.11.7.2. The failure occurred during the configure\nstep.\n[1 of 1] Compiling Main (...)\nLinking .../dist-newstyle/tmp/src-75805/HsOpenSSL-0.11.7.2/dist/setup/setup ...\nConfiguring HsOpenSSL-0.11.7.2...\nsetup: Can\u2019t find OpenSSL library\n"})}),"\n",(0,s.jsx)(n.p,{children:"You'll most likely need to add relevant symlinks as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /usr/local/opt/openssl\nsudo ln -s /opt/homebrew/opt/openssl@3/lib /usr/local/opt/openssl/lib\nsudo ln -s /opt/homebrew/opt/openssl@3/include /usr/local/opt/openssl/include\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is a wart of the ",(0,s.jsx)(n.code,{children:"HsOpenSSL"})," library wrapper, and using classic methods such as setting ",(0,s.jsx)(n.code,{children:"LDFLAGS"})," & ",(0,s.jsx)(n.code,{children:"CPPFLAGS"}),", or using ",(0,s.jsx)(n.code,{children:"--extra-include-dirs"})," and ",(0,s.jsx)(n.code,{children:"--extra-lib-dirs"})," won't work properly."]}),"\n",(0,s.jsx)(n.h4,{id:"building-and-installing-the-node",children:"Building and installing the node"}),"\n",(0,s.jsxs)(n.p,{children:["Build the node and CLI with ",(0,s.jsx)(n.code,{children:"cabal"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cabal update\ncabal build all\ncabal build cardano-cli\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Install the newly built node and CLI commands to the ",(0,s.jsx)(n.code,{children:"~/.local/bin"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'mkdir -p ~/.local/bin\ncp -p "$(./scripts/bin-path.sh cardano-node)" ~/.local/bin/\ncp -p "$(./scripts/bin-path.sh cardano-cli)" ~/.local/bin/\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," ",(0,s.jsx)(n.code,{children:"~/.local/bin"})," should be in the ",(0,s.jsx)(n.code,{children:"$PATH"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note, we avoid using ",(0,s.jsx)(n.code,{children:"cabal install"})," because that method prevents the installed binaries from reporting\nthe git revision with the ",(0,s.jsx)(n.code,{children:"--version"})," switch."]}),"\n",(0,s.jsx)(n.p,{children:"Check the version that has been installed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cardano-cli --version\n"})}),"\n",(0,s.jsx)(n.p,{children:"Repeat the above process when you need to update to a new version."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," It might be necessary to delete the ",(0,s.jsx)(n.code,{children:"db"}),"-folder (the database-folder) before running an updated version of the node."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>r});var s=l(6540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);