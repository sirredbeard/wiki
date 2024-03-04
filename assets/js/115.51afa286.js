(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{395:function(e,t,r){"use strict";r.r(t);var s=r(14),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"a03-❯-nvidia-driver-installation-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a03-❯-nvidia-driver-installation-guide"}},[e._v("#")]),e._v(" A03 ❯ NVIDIA Driver Installation Guide")]),e._v(" "),t("p",[t("small",[e._v("ℹ️ This article is part of AlmaLinux "),t("RouterLink",{attrs:{to:"/series/"}},[e._v("System Series")]),e._v(".")],1)]),t("hr"),t("p"),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("💡")]),e._v(" "),t("th",[e._v("Experience Level")]),e._v(" "),t("th",[e._v("⭐☆☆☆☆")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("📆")]),e._v(" "),t("td",[t("small",[e._v("Last modified ")])]),e._v(" "),t("td",[e._v("2023-05-22")])]),e._v(" "),t("tr",[t("td",[e._v("🔧")]),e._v(" "),t("td",[t("small",[e._v("Tested by "),t("br"),e._v(" ↳ version | platform | date ")])]),e._v(" "),t("td",[t("small",[t("a",{attrs:{href:"mailto:none@almalinux.org"}},[e._v("none")]),e._v(" "),t("br"),e._v("  ↳ 9.x | x86_64 | 2023-05-xx ")])])])])]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"🌟-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌟-introduction"}},[e._v("#")]),e._v(" 🌟 Introduction")]),e._v(" "),t("p",[e._v("This guide provides instructions how to install NVIDIA's graphics driver for AlmaLinux in to variants:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Binary Driver")]),e._v(" "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03R8.html"}},[t("strong",[e._v("8.x")])]),e._v(" | "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03R9.html"}},[t("strong",[e._v("9.x")])]),e._v(" 👈 "),t("small",[e._v("USING PRECOMPILED DRIVERS IS RECOMMENDED")])],1),e._v(" "),t("li",[t("strong",[e._v("Compiling From Source")]),e._v(" "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03R8.html"}},[t("strong",[e._v("8.x")])]),e._v(" | "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03R9.html"}},[t("strong",[e._v("9.x")])]),e._v(" ⚠️  "),t("small",[e._v("REQURIES SWITCHING TO ELRepo KERNEL")])],1)]),e._v(" "),t("h2",{attrs:{id:"🧠-fundamental-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🧠-fundamental-concepts"}},[e._v("#")]),e._v(" 🧠 Fundamental Concepts")]),e._v(" "),t("h3",{attrs:{id:"dynamic-kernel-module-support-dkms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-kernel-module-support-dkms"}},[e._v("#")]),e._v(" Dynamic Kernel Module Support (DKMS)")]),e._v(" "),t("p",[e._v("DKMS is a system utility that allows you to automatically build kernel modules.")]),e._v(" "),t("h3",{attrs:{id:"elrepo-kernel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elrepo-kernel"}},[e._v("#")]),e._v(" ELRepo Kernel")]),e._v(" "),t("p",[e._v("ELRepo is a community repository for Enterprise Linux distributions (e.g., RHEL, CentOS, AlmaLinux). It focuses on hardware-related packages to enhance your Linux experience. This repo provides a kernel (packages) which tracks mainline kernel very closely. In result, this kernel is updated frequently and sometimes it leads to temporary incompatiblity with NVIDIA driver sources.")]),e._v(" "),t("h3",{attrs:{id:"nvidia-drivers-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-drivers-source"}},[e._v("#")]),e._v(" NVIDIA Drivers Source")]),e._v(" "),t("p",[e._v("Install the NVIDIA graphics driver using the DKMS (Dynamic Kernel Module Support). Needs switching the kernel to ELRepo kernel version.")]),e._v(" "),t("h3",{attrs:{id:"nvidia-precompiled-binary-drivers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-precompiled-binary-drivers"}},[e._v("#")]),e._v(" NVIDIA Precompiled/Binary Drivers")]),e._v(" "),t("p",[e._v("NVIDIA compiles and tests this driver for each precise kernel version. Installing it locks your kernel upgrade (with driver). It is the recommended way according to NVIDIA.")]),e._v(" "),t("h2",{attrs:{id:"📖-release-specific-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-release-specific-installation"}},[e._v("#")]),e._v(" 📖 Release-Specific Installation")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("NVIDIA Driver Installation Guide ❯ "),t("a",{attrs:{href:"SystemSeriesA03R8"}},[e._v("Installation on 8.x")])])]),e._v(" "),t("li",[t("strong",[e._v("NVIDIA Driver Installation Guide ❯ "),t("a",{attrs:{href:"SystemSeriesA03R9"}},[e._v("Installation on 9.x")])])])]),e._v(" "),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h3",{attrs:{id:"q-installed-the-module-but-getting-black-screen-after-reboot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-installed-the-module-but-getting-black-screen-after-reboot"}},[e._v("#")]),e._v(" Q: Installed the module but getting Black Screen after reboot?")]),e._v(" "),t("p",[e._v("WIP")]),e._v(" "),t("h4",{attrs:{id:"if-you-are-able-to-change-grub-kernel-boot-parameters-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-you-are-able-to-change-grub-kernel-boot-parameters-do"}},[e._v("#")]),e._v(" If you are able to change "),t("code",[e._v("GRUB")]),e._v(" kernel boot parameters, do:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module_blacklist=nvidia,nvidia_drm,nvida_modeset\n")])])]),t("h4",{attrs:{id:"if-you-are-getting-black-screen-right-after-boot-no-grub-visible-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-you-are-getting-black-screen-right-after-boot-no-grub-visible-do"}},[e._v("#")]),e._v(" If you are getting Black Screen right after boot (no GRUB visible), do:")]),e._v(" "),t("p",[e._v("WIP")]),e._v(" "),t("h3",{attrs:{id:"q-prime-select"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-prime-select"}},[e._v("#")]),e._v(" Q: "),t("code",[e._v("prime-select")])]),e._v(" "),t("p",[e._v("WIP")]),e._v(" "),t("h2",{attrs:{id:"📚-further-reading-and-next-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📚-further-reading-and-next-steps"}},[e._v("#")]),e._v(" 📚 Further Reading and Next Steps")]),e._v(" "),t("p",[t("u",[e._v("In-depth Resources:")])]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux System Series ❯  "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03R8.html"}},[e._v("NVIDIA: Installation on 8.x")])],1),e._v(" "),t("li",[e._v("AlmaLinux System Series ❯  "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA03R9.html"}},[e._v("NVIDIA: Installation on 9.x")])],1)]),e._v(" "),t("p",[t("u",[e._v("Related Resources:")])]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA01.html"}},[e._v("A Beginner's Guide")])],1),e._v(" "),t("li",[e._v("AlmaLinux Firewalld Series ❯ "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA02.html"}},[e._v("A Beginner's Guide")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);