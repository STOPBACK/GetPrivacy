# Setup Windows Privacy Focused 👨‍💻🔐
- A Complete Guide to setup Windows with focus on Privacy and Security.

- Most of the softwares listed here are [FOSS](https://itsfoss.com/what-is-foss/). Also includes the safest Activators link to activate Windows so that people don't need to download them from unknown websites.

- For Windows 11, the guide will be updated after it's stable version release.

(Note: Windows is a [Closed Source](https://www.coredna.com/blogs/comparing-open-closed-source-software) OS. So, this guide gives you a privacy & security focused setup, as much as possible.)

## Contents
<header>
<nav>
- [Download Windows ISO File](#download-windows-iso-file)
- [Removing Unnecessary Things from ISO File](#removing-unnecessary-things-from-iso-file)
- [Burning to USB](#burning-to-usb)
- [Installation Settings](#installation-settings)
- [Post-Installation](#post-installation)
  - [Activation](#activation)
  - [Installing Drivers](#installing-drivers)
  - [Softwares](#softwares)
    - [Office Suite](#office-suite)
      - [PDF](#pdf)
    - [DNS](#dns)
    - [Browser](#browser)
      - [Add-ons](#add-ons)
    - [Antivirus](#antivirus)
    - [Firewall](#firewall)
    - [Graphics](#graphics)
    - [Media Player](#media-player)
    - [Video](#video)
      - [Video Editor](#video-editor)
    - [Audio](#audio)
    - [File Converter](#file-converter)
    - [Drive Tools](#drive-tools)
    - [Uninstaller](#uninstaller)
    - [Torrent Client](#torrent-client)
    - [Sharing](#sharing)
    - [Other Tools](#other-tools)
  - [To Do - AME](#to-do---ame)
  - [For other Softwares](#for-other-softwares)
- [Useful Links](#useful-links)
- [Gaming Tweaks](#-gaming-tweaks)
- [Issues](#issues)
- [Contact](#contact)
</nav>
</header>

## Download Windows ISO File

* Windows 7 (Recommended Edition: Home Premium)
  - [Digital river mirror](https://digitalrivermirror.com/)

* Windows 8
  - [TechBench](https://tb.rg-adguard.net/public.php) 
  - [Heidoc.net](https://heidoc.net/joomla/technology-science/microsoft/67-microsoft-windows-and-office-iso-download-tool)

* Windows 10
  - [TechBench](https://tb.rg-adguard.net/public.php)  
  - [Heidoc.net](https://heidoc.net/joomla/technology-science/microsoft/67-microsoft-windows-and-office-iso-download-tool)  
  - [Tiny Win10](https://dl.malwarewatch.org/windows/mods/Tiny%2010.iso)
  - You can directly go to the [AME website](https://ameliorated.info/) and download the stripped-down Windows 10 ISO file and go to Step 5 or else continue to Step 3.
    - Windows 10 AME aims at delivering a stable, non-intrusive yet fully functional build of Windows 10 to anyone, who requires the Windows operating system natively.

Related:
- [Windows 10 LTSC](https://azimstech.github.io/2018-10-05-windows-10-enterprise-ltsc-2019/) - Debloated from a lot of rubbish. Only receives Security updates, rather than 'feature' updates.

## Removing Unnecessary Things from ISO File
* Windows 7
  * [Integrate7 Script](https://www.wincert.net/forum/topic/14001-integrate7-script-%E2%80%93-automatically-download-and-slipstream-all-updates-up-to-052021/) - It gets Windows 7 ISO image (any language, any architecture), download all post-SP1 updates directly from Microsoft site and create new bootable Windows 7 ISO (with all updates integrated). Removes all bloatware (Telemetry, Diagnostics, Windows Defender).

* Windows 8
  * [W8.1-Tweak-Pack](https://www.ntlite.com/community/index.php?threads/clangers-download-page.1272/post-10855) - They include deleting registry entries and tasks folders, they are not a component removal but you can remove components using NTLite. You can also use [MSMG Toolkit](https://msmgtoolkit.in/) to modify the ISO file as per your needs. But, you can directly use Windows 10 AME instead of getting Windows 8 ISO file and doing this big work.

## Burning to USB
* [Rufus](https://rufus.ie/en/) - Rufus is a utility that helps format and create bootable USB flash drives, such as USB keys/pendrives, memory sticks, etc. Rufus is fast. For instance it's about twice as fast as UNetbootin, Universal USB Installer.
  - [Tutorial](https://softwarekeep.com/help-center/how-to-create-a-bootable-usb-using-rufus)

* [Ventoy](https://www.ventoy.net/en/index.html) - Ventoy is an open source tool to create bootable USB drive for ISO/WIM/IMG/VHD(x)/EFI files. With ventoy, you don't need to format the disk again and again, you just need to copy the iso file to the USB drive and boot it.
  - [Tutorial](https://www.howto-connect.com/ventoy-create-bootable-usb-easily-with-iso-multi-boot-support/)

## Installation Settings
- In Windows 7 & 8, turn off, skip any options that require an Internet Connection or sending data.

- Windows 10
  - **(Ignore this if you have downloaded the ISO file from AME website)**
    - [AME Guide Video](https://ameliorated.info/video/Windows_Initial_Startup.mp4)

  - Support: [AME Telegram Group](https://t.me/joinchat/CR-xFBGQKVt7HPZKgZfbxg)

- Windows 10 LTSC
  - [AME Guide Video](https://ameliorated.info/video/Windows_Initial_Startup.mp4)

## Post-Installation
- Windows 8 **(If you didn't modify the ISO file using the Tweak Pack)**
  - [Windows 8 Setup Script](https://github.com/farag2/Windows-8.1-Setup-Script)  

- Windows 10 
  - [No Internet Access Fix](https://t.me/AMEGuides/41)

  - **(Ignore this if you have downloaded the ISO file from AME website)**
    - [AME Documentation](https://wiki.ameliorated.info/doku.php?id=documentation_20h2) [See [Note](#installing-drivers)]
      - (NEW) [Windows 10 Ameliorator Wizard](https://t.me/amereleases/45)

    - [No Internet Access Fix](https://t.me/AMEGuides/41)
  
  - Support: [AME Telegram Group](https://t.me/joinchat/CR-xFBGQKVt7HPZKgZfbxg)

- Windows 10 LTSC (Tweaking Tools)
    - [Windows 10 Sophia Script](https://github.com/farag2/Windows-10-Sophia-Script) - A powerful PowerShell module for fine-tuning and tweaking Windows 10.

    - [O&O ShutUp10](https://www.oo-software.com/en/shutup10) - O&O ShutUp10 provides users with a simple means of customizing the privacy options in Windows 10 and thus decide which data collection options will stay enabled and which should be blocked.

    - [Privatezilla](https://github.com/builtbybel/privatezilla) - Privatezilla integrates the most critical Windows 10 privacy settings and allows you to quickly perform a privacy check against these settings.

    - [W10Privacy](https://www.w10privacy.de/english-home/) (Only for advanced users) - W10Privacy is a free anti-spy tool for Windows 10, designed by German developer Bernd Schuster.

- Other
  - [How To Install Updates](https://wiki.ameliorated.info/doku.php?id=system_updates)&nbsp;[AME]
  - [AME Guides](https://t.me/AMEGuides)

### Activation
**(Ignore this if you have already activated your Windows Permanently)(If you are switching to another Windows Version/Edition then follow this)**

* Windows 7:
  - [How to Check if a Disk Uses GPT or MBR](https://www.howtogeek.com/245610/how-to-check-if-a-disk-uses-gpt-or-mbr-and-how-to-convert-between-the-two/)
  
  - Activator [Requires Login]
    * [Daz Loader (Original)](https://forums.mydigitallife.net/threads/windows-loader-download.58464/) - Permanent Activation (For MBR disks)

    * [Rearm Wizard](https://forums.mydigitallife.net/threads/rearm-wizard-the-premier-rearm-solution-for-windows-7-and-office-2013.43861/) - Auto Trial Reset Script (For GPT disks)

* Windows 8  
[KMS Script by abbodi1406](https://github.com/abbodi1406/KMS_VL_ALL_AIO) - A batch script(s) to automate the activation of supported Windows and Office products using local KMS server emulator or an external server.

* Windows 10 / LTSC  
[MAS](https://github.com/massgravel/Microsoft-Activation-Scripts) (Microsoft Activation Scripts) - A collection of scripts for activating Microsoft products using HWID / KMS38 / Online KMS activation methods with a focus on open-source code, less antivirus detection and user-friendliness.

### Installing Drivers
> Note: Reports say that [Snappy Driver Installer](https://sdi-tool.org/)(SDI) contains adware. Not sure about this.

* [Snappy Driver Installer Origin](https://www.snappy-driver-installer.org/) - Snappy Driver Installer Origin(SDIO). This method is the easiest method of installing drivers.
**You should search for Touchpad and Graphics Drivers in your manufacturer website to prevent errors.**
  - [Discussion Group](https://t.me/SDI_Origin) - Telegram

* [NVCleanstall](https://www.techpowerup.com/download/techpowerup-nvcleanstall/) - NVCleanstall lets you customize the NVIDIA GeForce Driver package by removing components that you don't need (or want). This not only keeps things tidy, but also lowers disk usage and memory footprint.

* Other:
  * [DirectX 11](https://www.microsoft.com/en-in/download/details.aspx?id=8109) (Not needed for Windows 7, since the Integrate7 Script integrates it into the ISO)

  * [Visual C++ Redistributable Runtimes All-in-One](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)
  
  - [DirectX 12 Support in AME](https://www.youtube.com/watch?v=g9kYWmQrk_U)

Related:  
[AME - Getting Started](https://wiki.ameliorated.info/doku.php?id=getting_started)

## Softwares
### Office Suite
* [OnlyOffice](https://www.onlyoffice.com/) - OnlyOffice, stylized as ONLYOFFICE, is a free software office suite developed by Ascensio System SIA, a company headquartered in Riga, Latvia.

* [Apache OpenOffice](https://www.openoffice.org/) - OpenOffice, sometimes abbreviated as OO, is a free and open-source office productivity software suite offered by The Apache Software Foundation (ASF) for word processing, spreadsheets, presentations, databases, graphics, and more.

* [LibeOffice](https://www.libreoffice.org/) - LibreOffice is a free and open-source office productivity software suite, a project of The Document Foundation. It was forked in 2010 from OpenOffice.org, which was an open-sourced version of the earlier StarOffice.

* [Calligra](https://calligra.org/) - Calligra Suite is an office and graphic art suite by KDE. It is available for desktop PCs, tablet computers, and smartphones. It contains applications for word processing, spreadsheets, presentation, vector graphics, and editing databases.

- [MS Office](https://www.office.com/) **(Closed Source)** - **(If you are forced to use MS Office, follow this(This process will disable telemetry as much as possible))**
  - Download and install MS Office (Account sign-in is not necessary after installation)
    - [Heidoc.net](https://heidoc.net/joomla/technology-science/microsoft/67-microsoft-windows-and-office-iso-download-tool)
    - [Office Tool Plus](https://github.com/YerongAI/Office-Tool)  

  - Activation
    - [KMS Script by abbodi1406](https://github.com/abbodi1406/KMS_VL_ALL_AIO) - A batch script(s) to automate the activation of supported Windows and Office products using local KMS server emulator or an external server.
  
   - Disable Telemetry **(Also apply it on every update)**
     - Office 2016/365/2019
       - [OfficeRTool](https://forums.mydigitallife.net/threads/how-to-support-chat-office-c2r-download-install-activation.62571/page-61) - (Use option 'T' to disable telemetry)

      - Office 2013
        - [Turning off Telemetry reg file](https://web.archive.org/web/20201127230546/https://www.sharepointevolved.com/2015/08/31/turning-off-telemetry-for-office-2013/)

* #### PDF:
  - [SumatraPDF](https://www.sumatrapdfreader.org/free-pdf-reader) - Sumatra PDF is a free PDF, eBook (ePub, Mobi), XPS, DjVu, CHM, Comic Book (CBZ and CBR) reader for Windows.

  - [Okular](https://okular.kde.org/) - Okular can view and annotate documents of various formats, including PDF, Postscript, Comic Book, and various image formats. It supports native PDF annotations.

  - Use any browsers (preferably chromium based) like Ungoogled Chromium, etc. to view PDF(as Firefox is less secure than chromium based browsers).

  - [MuPDF](https://mupdf.com/) - MuPDF is a lightweight PDF, XPS, and E-book viewer. MuPDF consists of a software library, command line tools, and viewers for various platforms.

  - [Xournal++](https://github.com/xournalpp/xournalpp/) - Xournal++ is a handwriting notetaking software with PDF annotation support.

  - [Xpdf](https://www.xpdfreader.com/) - Xpdf is a free PDF viewer and toolkit, including a text extractor, image converter, HTML converter, and more

  - [Lector](https://www.electronjs.org/apps/lector) - A simple PDF Reader built using Electron and PDF.js.

  - [NightPDF](https://github.com/libreloya/NightPDF) - Dark Mode PDF Reader built using Electron and PDF.js.

### DNS
- **[Privacytools.io](https://privacytools.io/providers/dns/)**

### Browser
* [Firefox](https://firefox.com/) - Firefox is fast, reliable, open-source, and respects your privacy. Don't forget to adjust the settings according to our recommendations.
  - [arkenfox user.js (formerly ghacks-user.js)](https://github.com/arkenfox/user.js) - An ongoing comprehensive user.js template for configuring and hardening Firefox privacy, security and anti-fingerprinting.

* [LibreWolf](https://librewolf-community.gitlab.io/) - A fork of Firefox, focused on privacy, security, and freedom.

* [Ungoogled Chomium](https://github.com/Eloston/ungoogled-chromium) - A lightweight approach to removing Google web service dependency.
  * [chromium-web-store](https://github.com/NeverDecaf/chromium-web-store) - Allows adding extensions from chrome web store on ungoogled-chromium. Also adds semi-automatic extension updating.

* [Epic Browser](https://www.epicbrowser.com/) - Epic is a private, secure web browser that blocks ads, trackers, fingerprinting, cryptomining, ultrasound signaling and more.

* [Tor Browser](https://www.torproject.org/) - Tor Browser is your choice if you need an extra layer of anonymity. It's a modified version of Firefox ESR, which comes with pre-installed privacy add-ons, encryption, and an advanced proxy.

* #### Add-ons:

  - [PrivacyTools.io](https://privacytools.io/browsers/#addons)

### Antivirus
Use [Malwarebytes](https://www.malwarebytes.com/). You do not need paid antiviruses, nor is it recommended to pirate any paid antiviruses. Even, you don't need an Anti-Virus if you browse the internet safely. **Common sense is enough**. Install [PrivacyTools.io's Recommended Browser Add-ons](#add-ons) for additional protection while browsing the internet.

* [av-comparatives.org](https://www.av-comparatives.org/) - Antivirus protection tests
* [VirusTotal.com](https://www.virustotal.com/) - Web service that scans files and URLs with various anti-virus engines
* [r/techsupport's guide on malware removal](https://www.reddit.com/r/techsupport/comments/33evdi/suggested_reading_official_malware_removal_guide/) - Reddit thread
* [The Case Against Anti-Virus Software](https://wiki.ameliorated.info/doku.php?id=antivirus) - AME Wiki
 
### Firewall
* [Simplewall](https://www.henrypp.org/product/simplewall)  
Simple tool to configure Windows Filtering Platform (WFP) which can configure network activity on your computer.

* [Portmaster](https://safing.io/)  
Portmaster is a free and open-source application that puts you back in charge over all your computer's network connections.

### Archiver
- [7zip](https://www.7-zip.org/) - 7-Zip is a utility program to help you extract compressed files and create your own compressed files in several different formats.

- [PeaZip](https://peazip.github.io/) - PeaZip is a free Zip / Unzip software and Rar file extractor. Cross-platform file and archive manager.

### Password Manager
- **[PrivacyTools.io](https://privacytools.io/software/passwords/)**

### Graphics
- [ImageGlass](https://imageglass.org/) - ImageGlass is a lightweight software application whose purpose is to help you view images in a clean and intuitive working environment.

- [IrfanView](https://www.irfanview.com/) - IrfanView is an image viewer, editor, organiser and converter program for Microsoft Windows.

- [ImageMagick](https://www.imagemagick.org/) - ImageMagick is a free and open-source cross-platform software suite for displaying, creating, converting, modifying, and editing raster images.
  - [GraphicsMagick](http://www.graphicsmagick.org/) - GraphicsMagick(fork of ImageMagick) is a free open source, modern and powerful software suite for processing images.

- [Darktable](https://www.darktable.org/) - Darktable is a free and open-source photography application software and raw developer.

Related:
- [Awesome Privacy](https://github.com/pluja/awesome-privacy#photo-editing-and-management) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

- [Awesome Windows](https://github.com/Awesome-Windows/Awesome#graphics) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares, as much as possible)

### Media Player
- [VLC](https://www.videolan.org/) - A free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project.

- [MPC-HC](https://github.com/clsid2/mpc-hc/) - Media Player Classic - Home Cinema (MPC-HC) is a free and open-source video and audio player for Windows.

- [Flyleaf](https://github.com/SuRGeoNix/Flyleaf) - Video Player .NET Library for WPF/WinForms (based on FFmpeg/SharpDX).

- [mpv.net](https://github.com/stax76/mpv.net) - mpv.net is a modern media player for Windows that works just like mpv.

- [Audacious](https://audacious-media-player.org/) - Audacious is a free and open-source audio player software with a focus on low resource use, high audio quality, and support for a wide range of audio formats.

### Video
- [MKVToolNix](https://mkvtoolnix.download/) - MKVToolNix is a small collection of tools (mkvmerge, mkvinfo, mkvextract, mkvpropedit and mmg) that allows you to manipulate Matroska (MKV) files in several ways.

- [Subtitle Edit](https://www.nikse.dk/SubtitleEdit) - Subtitle Edit is an open source subtitle editor and converter which supports 200+ formats.

- #### Video Editor:
  - [Olive Video Editor](https://www.olivevideoeditor.org/) - Olive is a free non-linear video editor aiming to provide a fully-featured alternative to high-end professional video editing software.
  
  - [Kdenlive](https://kdenlive.org/) - Kdenlive is an acronym for KDE Non-Linear Video Editor. It's free, and open-source and works on GNU/Linux, Windows and BSD. It's an intuitive and powerful multi-track video editor compatible with latest video technologies.
  
  - [AstroFox](https://astrofox.io/) - Astrofox is a free, open-source motion graphics program that lets you turn your audio into custom, shareable videos.
  
  - [OpenShot](https://www.openshot.org/) - OpenShot Video Editor is a free and open-source video editor for Linux, macOS, and Windows. It is an easy to use, quick to learn, and surprisingly powerful video editor.
  
  - [Shotcut ](https://shotcut.org/) - Shotcut is a free and open-source cross-platform video editing application for FreeBSD, Linux, macOS and Windows.

  - [Expressive Suite](https://github.com/ExpressiveSuite) - A professional graphics software suite made for designers and animators alike.

Related:  
* [Awesome Privacy](https://github.com/pluja/awesome-privacy#video-and-audio) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

* [Awesome Windows](https://github.com/Awesome-Windows/Awesome#video) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares, as much as possible)

- [Awesome Alternatives](https://codeberg.org/LinuxCafeFederation/awesome-alternatives#audio-video-editing-software)

### Audio
* [Audacity](https://www.audacityteam.org/)  - Audacity is a free and open-source digital audio editor and recording application software, available for Windows, macOS, Linux, and other Unix-like operating systems.
  > Audacity has been acquired by Muse Group, which also owns MuseScore and Ultimate Guitar. You can choose any one of the forks below.
  - [Audacity fork by Cookie Engineer](https://github.com/cookiengineer/audacity) - Audacity Fork without any Sentry Telemetry or Crash Reporting.

  - [Tenacity](https://github.com/tenacityteam/tenacity) - FLOSS Audacity Fork - No telemetry, crash reports and other shenanigans like that!

  - [Audacium](https://github.com/SartoxOnlyGNU/audacium) - Audacity fork without Telemetry and with new features.

* [Ardour](https://ardour.org/) - Ardour is a hard disk recorder and digital audio workstation application that runs on Linux, macOS, FreeBSD and Microsoft Windows.

* [Ocenaudio](https://www.ocenaudio.com/) - Ocenaudio is a cross-platform audio editor with an impressive set of features. It is available for Windows, Linux and Mac OS, and free to download and use.

* [Wavosaur](https://www.wavosaur.com/) - Wavosaur is a cool free sound editor, audio editor, wav editor software for editing, processing and recording sounds, wav and mp3 files.

Related:  
* [Awesome Privacy](https://github.com/pluja/awesome-privacy#video-and-audio) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

* [Awesome Windows](https://github.com/Awesome-Windows/Awesome#audio) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares, as much as possible)

### File Converter
- [Handbrake](https://handbrake.fr/) - HandBrake is a tool for converting video from nearly any format to a selection of modern, widely supported codecs. Can also be used for compressing videos.

- [modfy.video](https://github.com/modfy/modfy.video) - A video transcoder and converter built using Web Assembly and FFMPEG to transcode and convert videos right in your browser while protecting your privacy

- [File Converter](https://file-converter.org/) - File Converter is a very simple tool which allows you to convert and compress one or several file(s) using the context menu in windows explorer.

- [Tricycle](https://github.com/kmcclive/tricycle) - Tricycle is an open source, user-friendly video converter.

- [FFmpeg](http://ffmpeg.org/) - FFmpeg is a free and open-source software project consisting of a large suite of libraries and programs for handling video, audio, and other multimedia files and streams. At its core is the FFmpeg program itself, designed for command-line-based processing of video and audio files.

  - [Tutorial](https://amiaopensource.github.io/ffmprovisr/)

- [MystiQ](https://github.com/swl-x/MystiQ) - MystiQ is a GUI for FFmpeg, a powerful media converter.

- [Ciano](https://github.com/robertsanseries/ciano) - A multimedia file converter focused on simplicity. Convert videos, music and pictures with the best possible experience.

### Drive Tools
- [Macrium Reflect Free](https://www.macrium.com/reflectfree) - Macrium Reflect Free allows you to back up your entire computer and schedule backups.

- [Clonezilla](https://clonezilla.org/) - Clonezilla is a free and open-source disk cloning, disk imaging, data recovery, and deployment computer program

- [Windows ImageX tutorial using Windows Installation Media](https://github.com/BiltuDas1/RepackInstalledWindows)

- [How Do You Make A Windows PE](https://www.youtube.com/watch?v=fqHlxfcM8fU)

- [TestDisk](https://www.cgsecurity.org/wiki/TestDisk) - Powerful free data recovery software primarily designed to help recover lost partitions and/or make non-booting disks bootable again.

- [PhotoRec](https://www.cgsecurity.org/wiki/PhotoRec) - PhotoRec is file data recovery software designed to recover lost files including video, documents and archives from hard disks, CD-ROMs, and lost pictures (thus the Photo Recovery name) from digital camera memory.

- [GParted](https://gparted.org/) - GParted is a free partition editor for graphically managing your disk partitions. GParted can be used on x86 and x86-64 based computers running Linux, Windows, or Mac OS X by booting from media containing GParted Live.

### Uninstaller
- [Bulk Crap Uninstaller](https://www.bcuninstaller.com/) - Bulk Crap Uninstaller (BCUninstaller, BCU) is a free, open source program manager. It excels at removing large amounts of applications with minimal user input.

### Torrent Client
- [Piracy Megathread](https://www.reddit.com/r/Piracy/wiki/megathread/tools#wiki_.25BA_torrent_clients)

### Maintenance
- [BleachBit](https://www.bleachbit.org/) - BleachBit is a free and open-source disk space cleaner, privacy manager, and computer system optimizer.

- [Cleanmgr+](https://www.builtbybel.com/cleanmgrplus) - Cleanmgr+ is a modern take of Microsoft Disk Cleanup and comes with all the features that the original Cleanmgr.exe offers plus several extra ones.
  - [Additional Scripts](https://github.com/builtbybel/CleanmgrPlus/blob/master/scripts/scripts.md)

### Sharing
- [KDE Connect](https://kdeconnect.kde.org/) - KDE Connect is a multi platform application developed by KDE, which facilitates communications and data transfer between devices wirelessly over local network.

- [Libreware(Telegram Channel) - Sharing Tool List](https://t.me/Libreware/680)

### Other Tools
- [Winaero Tweaker](https://winaero.com/) - Winaero is a website hosting freeware tweaking tools for Microsoft Windows.

- System Information:
  - [HWiNFO](https://www.hwinfo.com/) - HWiNFO is a free system information tool for Windows that gives a quick overview, as well as a detailed look, at hardware components.

  - [HiBit System Information](http://hibitsoft.ir/SystemInformation.html) - HiBit System Information is a powerful system information utility that gathers important data on the computer's hardware components.

  - [SystemInfo](https://github.com/CherryPill/system_info) - SystemInfo enables you to view information about the hardware components of your computer.

  - [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) - CPU-Z is a freeware that gathers information on some of the main devices of your system.

- [Sandboxie Plus](https://sandboxie-plus.com/) - Sandboxie is a sandbox-based isolation software for 32-bit and 64-bit Windows NT-based operating systems. It creates a sandbox-like isolated operating environment in which applications can be run or installed without permanently modifying local & mapped drives or the windows registry. An isolated virtual environment allows controlled testing of untrusted programs and web surfing.

- [WinCDEmu](https://wincdemu.sysprogs.org/) - WinCDEmu is an open-source CD/DVD/BD emulator - a tool that allows you to mount optical disc images by simply clicking on them in Windows Explorer.

### To Do - AME

- [After AME Windows 10](https://t.me/Windows10AMEPowerUser) - Telegram Channel

### For other Softwares
- [PrivacyTools](https://www.privacytools.io/) - PrivacyTools (also known as privacytools.io) provides knowledge and tools to protect your privacy against global mass surveillance' and is a well-known website in the Education & Reference category.

- [Privacy Tools List](https://privacytoolslist.com/) - Top privacy tools, apps and services.

- [FOSS_Stuff](https://github.com/samedamci/FOSS_Stuff/blob/master/list.md) - FOSS and privacy software.

- [Awesome Privacy](https://github.com/pluja/awesome-privacy) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

- [Awesome Windows](https://github.com/Awesome-Windows/Awesome) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares, as much as possible)

- [FOSS Adobe Alternatives](https://twitter.com/XdanielArt/status/1259859435607994370/photo/1)

- [NirSoft](https://www.nirsoft.net/) - NirSoft web site provides a unique collection of small and useful freeware utilities, all of them developed by Nir Sofer.

- [Sordum](https://www.sordum.org/) - Collection of tools to simplify your Computer usage.

- [Libreware (Telegram Channel)](https://t.me/Libreware) - Libre Software Library
  - [NoGoolag](https://t.me/NoGoolag) (Telegram Channel)
  - [NoGoolag Group](https://t.me/joinchat/nMOOE4YJPDFhZjZk) (Telegram Group)

## Useful Links
- [Reddit /r/privacy/wiki](https://www.reddit.com/r/privacy/wiki/index)

- [The Hitchhiker's Guide to Online Anonymity](https://anonymousplanet.org/)

- [Spyware Watchdog](https://spyware.neocities.org/) - Good collection of articles about what is spyware and what not.

- [DigDeeper](https://digdeeper.neocities.org/) - A website about Software Privacy. Lots of great articles.

- [Snopyta](https://snopyta.org/)

- [Dark Matter 404](https://darkmatter404.neocities.org/ProjectMariana/index.html)

- [Test Your Privacy](https://web.archive.org/web/20210112175807if_/https://www.reddit.com/r/privacytoolsIO/comments/bia6sx/test_your_privacy/)

# 🎮 Gaming Tweaks

- [Game / Performance / Networking tweaks, tips, hacks, apps: REAL PERFORMANCE GUIDE](https://n1kobg.blogspot.com/)

- [Milkbrain's Basic Windows Optimization Guide](https://docs.google.com/document/d/112uc7XnMA4QFTKF6i4iFdXfar6b5YlLwrdF9N-Z5TcI/edit)

- [Milkbrain's Advanced FPS Boost Guide](https://docs.google.com/document/d/1XsGfW1EjjW7rutzZ8tpX7t3FvLc7WF4rjtfC-77Louw/edit)

- [Danske’s Guide](https://docs.google.com/document/d/18uPEXJC5LSto8x9X_GteSI58sfQLCfamDG1HNHJWrQU/edit)

- [Calypto's Latency Guide](https://docs.google.com/document/d/1c2-lUJq74wuYK1WrA_bIvgb89dUN0sj8-hO3vqmrau4/edit)

- [BDO Ultimate Performance Guide](https://docs.google.com/document/d/1cyLaDiPL_B6nOZw_qPE_wOGuoeRT-qddTjevTFoFBkg/edit)

## Issues
Still finding a better & an user-friendly script to strip-down Windows 8 ISO File. But as I said, Windows 10 AME is a better choice than stripping-down(using **any** method) and using Windows 8.

## Contact
- Instagram: [@tom_dko](https://www.instagram.com/tom_dko/)

- YouTube: [Tech Morgan](https://www.youtube.com/channel/UCjcW0X8R1y7BxTFRGfIPztw)

- Telegram: [@deepsmorgan](https://t.me/deepsmorgan)
  - Channel: [@dtkmorgan](https://t.me/dtkmorgan)
  - Discussion Group: [@dtkmorgangrp](https://t.me/dtkmorgangrp)

- Element: @deepsmorgan789:matrix.org
