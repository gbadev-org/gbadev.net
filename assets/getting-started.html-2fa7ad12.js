import{_ as s,r as n,o as i,c as l,e,f as t,g as o,w as h}from"./app-b9af46a5.js";const d={},u=e("h1",{id:"getting-started-in-gbadev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-in-gbadev","aria-hidden":"true"},"#"),t(" Getting started in GBAdev")],-1),c=e("h2",{id:"developing-your-game",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#developing-your-game","aria-hidden":"true"},"#"),t(" Developing your game")],-1),p=e("p",null,"Broadly speaking there are 3 paths you can take to get started. Which one you choose depends on your previous knowledge about programming, and how much of your game you want to create yourself.",-1),g=e("h3",{id:"high-level-development",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#high-level-development","aria-hidden":"true"},"#"),t(" High level development")],-1),m=e("p",null,"This is ideal if you just want to get a game done, without worrying too much about how the hardware works. Unfortunately, there is nothing similar to PC engines like Unity, Godot, and the GBA doesn't support languages like C#, Python or Java.",-1),b={href:"https://github.com/GValiente/butano",target:"_blank",rel:"noopener noreferrer"},f={href:"https://gvaliente.github.io/butano/getting_started.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/evanbowman/BPCore-Engine",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"low-level-development",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#low-level-development","aria-hidden":"true"},"#"),t(" Low level development")],-1),y={href:"https://www.problemkaputt.de/gbatek.htm",target:"_blank",rel:"noopener noreferrer"},k=e("h4",{id:"c-and-c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c-and-c","aria-hidden":"true"},"#"),t(" C and C++")],-1),w={href:"https://github.com/gbadev-org/libtonc",target:"_blank",rel:"noopener noreferrer"},x={href:"https://devkitpro.org/wiki/Getting_Started",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/gbadev-org/libtonc-examples",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/gbadev-org/libtonc-template",target:"_blank",rel:"noopener noreferrer"},G={href:"https://gbadev.net/tonc",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"libgba is another library provided by devkitPro, but it isn't as recommended as using libtonc. Both of them fulfill the same role, the main difference of the codebase is that libtonc has a text engine with lots of features. However, libtonc has way better documentation (libgba doesn't have almost any example or documentation).",-1),I={href:"https://github.com/LunarLambda/sdk-seven",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/felixjones/gba-toolchain",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/LunarLambda/meson-gba",target:"_blank",rel:"noopener noreferrer"},L={href:"https://devkitadv.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"},M=e("h4",{id:"assembly",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#assembly","aria-hidden":"true"},"#"),t(" Assembly")],-1),R=e("p",null,"Even though you don't need to use assembly to develop for GBA, it is still an option, and you will need it if you're creating things like a 3D game, or an audio mixer.",-1),E=e("p",null,"All of the C and C++ options also support assembly, so you can use them without any issues.",-1),P={href:"https://github.com/velipso/gvasm",target:"_blank",rel:"noopener noreferrer"},V=e("h4",{id:"nim",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nim","aria-hidden":"true"},"#"),t(" Nim")],-1),D={href:"https://natu.exelo.tl",target:"_blank",rel:"noopener noreferrer"},O=e("h4",{id:"rust",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rust","aria-hidden":"true"},"#"),t(" Rust")],-1),U={href:"https://github.com/agbrs/agb",target:"_blank",rel:"noopener noreferrer"},H=e("h3",{id:"development-from-scratch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#development-from-scratch","aria-hidden":"true"},"#"),t(" Development from scratch")],-1),S=e("p",null,"If you don't want to use any libraries to create your game, it's possible to ignore all of them and create everything yourself. This is only recommended if you're very comfortable with low level development. It will be hard to get other people to help you if you're not using any of the popular libraries that other people use.",-1),j={href:"https://github.com/AntonioND/gba-bootstrap",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"tutorials",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tutorials","aria-hidden":"true"},"#"),t(" Tutorials")],-1),J={href:"https://gbadev.net/tonc",target:"_blank",rel:"noopener noreferrer"},K=e("h2",{id:"emulation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#emulation","aria-hidden":"true"},"#"),t(" Emulation")],-1),W=e("p",null,"The recommended emulators are:",-1),q={href:"https://github.com/nba-emu/NanoBoyAdvance",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://mgba.io/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},z={href:"https://problemkaputt.de/gbapics.htm",target:"_blank",rel:"noopener noreferrer"},Q=e("p",null,"Note: VisualBoyAdvance is a very outdated emulator, and not very accurate. Prefer mGBA over VBA.",-1),X=e("h2",{id:"community",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community","aria-hidden":"true"},"#"),t(" Community")],-1),Z={href:"https://gbadev.net/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://forum.gbadev.net/",target:"_blank",rel:"noopener noreferrer"};function te(oe,re){const a=n("RouterLink"),r=n("ExternalLinkIcon");return i(),l("div",null,[u,e("p",null,[t("Welcome to GBAdev! If you have decided to try to develop something for the GBA and you're completely lost, this guide is for you. Note that this will only mention the most popular and recommended options. Check "),o(a,{to:"/resources.html"},{default:h(()=>[t("gbadev resources")]),_:1}),t(" for a long list about many relevant toolkits and libraries you can use!")]),c,p,g,m,e("p",null,[t("Our recommendation is to use "),e("a",b,[t("butano"),o(r)]),t(", a C++ library that simplifies GBA development a lot. It has become quite popular, so you will easily get support for it. You should follow the "),e("a",f,[t("getting started"),o(r)]),t(" instructions. It comes with a lot of examples of how to use all its features, check them out!")]),e("p",null,[t("If you prefer something higher level, "),e("a",_,[t("BPCore-Engine"),o(r)]),t(" is an engine that allows you to develop games using Lua as a language.")]),v,e("p",null,[t("If you're comfortable writing to I/O registers and reading low level documentation like "),e("a",y,[t("GBATEK"),o(r)]),t(" there are a few options:")]),k,e("p",null,[t("The most popular option is to use devkitARM and "),e("a",w,[t("libtonc"),o(r)]),t(". Follow the instructions in the "),e("a",x,[t("getting started guide"),o(r)]),t(" to install devkitARM and check the "),e("a",A,[t("examples"),o(r)]),t(" and the "),e("a",B,[t("template"),o(r)]),t(". Once you have verified that you can compile the examples read the tutorial "),e("a",G,[t("Tonc"),o(r)]),t(" (by the author of libtonc) to understand how GBA development goes.")]),C,e("p",null,[t("If you want to use a completely different library than libtonc or libgba, you can try "),e("a",I,[t("sdk-seven"),o(r)]),t(".")]),e("p",null,[t("If you don't want to use devkitARM, there are some alternatives. For example, check "),e("a",T,[t("gba-toolchain"),o(r)]),t(", which also supports libtonc and libgba, and it uses CMake instead of Makefiles.")]),e("p",null,[e("a",N,[t("meson-gba"),o(r)]),t(" is another option. It uses the Meson build system, it integrates many of the libraries mentioned before (with bugfixes that devkitPro doesn't have), and it supports different compilers and runtime libraries. If you're using sdk-seven, you should really consider using this.")]),e("p",null,[t("Some tutorials out there mention "),e("a",L,[t("DevKit Advance"),o(r)]),t(". This is a very outdated toolchain (the last release was in 2003!), don't use it! Use devkitARM instead, which is updated regularly.")]),M,R,E,e("p",null,[t("There is also "),e("a",P,[t("gvasm"),o(r)]),t(" if you want an option that only focuses on assembly.")]),V,e("p",null,[t("Check "),e("a",D,[t("Natu"),o(r)]),t(". It provides a library to write games and tooling to convert assets.")]),O,e("p",null,[t("Check the "),e("a",U,[t("agb library"),o(r)]),t(".")]),H,S,e("p",null,[t("One example of how to build a GBA ROM from scratch with a regular ARM GCC toolchain can be found in "),e("a",j,[t("GBA bootstrap"),o(r)]),t(".")]),F,e("p",null,[e("a",J,[t("Tonc"),o(r)]),t(" is currently the best tutorial for GBA development.")]),K,W,e("ul",null,[e("li",null,[e("p",null,[e("a",q,[t("NanoBoyAdvance"),o(r)]),t(": The most accurate emulator at the moment. However, it doesn't have debugging options.")])]),e("li",null,[e("p",null,[e("a",Y,[t("mGBA"),o(r)]),t(": Very accurate, and it is possible to connect the GNU debugger (GDB) to it and debug your games as if they were regular PC programs!")])]),e("li",null,[e("p",null,[e("a",$,[t("no$gba"),o(r)]),t(": Not as accurate as the other two, but it has an "),e("a",z,[t("incredible debugger"),o(r)]),t(".")])])]),Q,X,e("p",null,[t("Join us in discord! This "),e("a",Z,[t("link"),o(r)]),t(" has an up-to-date invitation to the gbadev discord server were most of the GBA devs hang out nowadays. There is also a "),e("a",ee,[t("forum"),o(r)]),t(", if you prefer that.")])])}const ae=s(d,[["render",te],["__file","getting-started.html.vue"]]);export{ae as default};
