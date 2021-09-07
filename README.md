# Setup Windows Privacy Focused 👨‍💻🔐
- A Complete Guide to setup Windows with focus on Privacy and Security.

- Most of the softwares listed here are [FOSS](https://itsfoss.com/what-is-foss/).

- For Windows 11, the guide will be updated after it's stable version release.

(Note: Windows is a [Closed Source](https://www.coredna.com/blogs/comparing-open-closed-source-software) OS. So, this guide gives you a privacy & security focused setup as much as possible.)

## Contents
- [Download Windows ISO File](#download-windows-iso-file)
- [Removing Unnecessary Things from ISO File](#removing-unnecessary-things-from-iso-file)
- [Burning to USB](#burning-to-usb)
- [Installation Settings](#installation-settings)
- [Post-Installation](#post-installation)
  - [Activation](#activation)
  - [Drivers](#drivers)
  - [Disk Encryption](#disk-encryption)
  - [Softwares](#softwares)
    - [DNS](#dns)
    - [Browser](#browser)
      - [Add-ons](#add-ons)
    - [Firewall](#firewall)
    - [VPN](#vpn)
    - [Antivirus](#antivirus)
    - [File Encryption](#file-encryption)
    - [Office Suite](#office-suite)
      - [PDF](#pdf)
    - [Email](#email)
    - [Archiver](#archiver)
    - [Password Manager](#password-manager)
    - [Graphics](#graphics)
    - [Media Player](#media-player)
    - [Video](#video)
      - [Video Editor](#video-editor)
      - [Subtitle](#subtitle)
    - [Audio](#audio)
    - [File Converter](#file-converter)
    - [Drive Tools](#drive-tools)
    - [Uninstaller](#uninstaller)
    - [Torrent Client](#torrent-client)
    - [Maintenance](#maintenance)
    - [Sharing](#sharing)
    - [Other Tools](#other-tools)
  - [To Do - AME](#to-do---ame)
  - [For other Softwares](#for-other-softwares)
- [Useful Links](#useful-links)
- [Gaming Tweaks](#-gaming-tweaks)
- [Issues](#issues)
- [Contact](#contact)

## Download Windows ISO File

(After downloading the ISO File, compare it's hash value with the value listed on the respective website using certutil command or [OpenHashTab](https://github.com/namazso/OpenHashTab))

* Windows 7 (Use Home Premium because it is lightweight & faster than other Windows 7 editions)
  - [Digital river mirror](https://digitalrivermirror.com/)

* Windows 8
  - [TechBench](https://tb.rg-adguard.net/public.php)

* Windows 10
  - [TechBench](https://tb.rg-adguard.net/public.php)

  - **Windows 10 Ameliorated** - You can directly go to the [AME website](https://ameliorated.info/) and download the stripped-down Windows 10 ISO file(Only available for 64-bit) and follow this guide, or else strip down Windows 10 yourself by following this guide.
    - AME Limitations:
      - You cannot install any APPX packages in AME, because all Windows Store dependencies have been completely ripped out.
      - You cannot create a new user, because of the OS’s inability to re-deploy APPX applications when logging in to a new user for the first time.
      - You cannot automatically install and update drivers via Windows Update, because Windows update doesn’t exist in AME anymore.

- **SEE [Issues](#issues)**

Related:
- [Windows 10 LTSC](https://www.reddit.com/r/Piracy/comments/8pfnun/how_to_download_and_install_windows_10_ltsb/) - Debloated from a lot of rubbish. Only receives Security updates, rather than 'feature' updates.

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

  - **(Ignore this if you have installed Windows 10 using AME ISO File)**
    - [AME Documentation](https://wiki.ameliorated.info/doku.php?id=documentation_20h2) [See [Note](#installing-drivers)]
      - (NEW) [Windows 10 Ameliorator Wizard](https://t.me/amereleases/45)

    - [No Internet Access Fix](https://t.me/AMEGuides/41)
  
  - Support: [AME Telegram Group](https://t.me/joinchat/CR-xFBGQKVt7HPZKgZfbxg)

- Windows 10 LTSC (Tweaking Tools)
    - [Windows 10 Sophia Script](https://github.com/farag2/Windows-10-Sophia-Script) - A powerful PowerShell module for fine-tuning and tweaking Windows 10.

    - [O&O ShutUp10](https://www.oo-software.com/en/shutup10) (Powerful but Closed source) - O&O ShutUp10 provides users with a simple means of customizing the privacy options in Windows 10 and thus decide which data collection options will stay enabled and which should be blocked.

    - [Privatezilla](https://github.com/builtbybel/privatezilla) - Privatezilla integrates the most critical Windows 10 privacy settings and allows you to quickly perform a privacy check against these settings.

    - [W10Privacy](https://www.w10privacy.de/english-home/) (Only for advanced users) (Closed Source) - W10Privacy is a free anti-spy tool for Windows 10, designed by German developer Bernd Schuster.

- **Common**
  - [Hardentools](https://github.com/securitywithoutborders/hardentools) - Hardentools simply reduces the attack surface on Microsoft Windows computers by disabling low-hanging fruit risky features. (Not needed for Windows 10 (If Installed using AME ISO File))

- Other
  - [How To Install Updates](https://wiki.ameliorated.info/doku.php?id=system_updates)&nbsp;[AME]
  - [AME Guides](https://t.me/AMEGuides) (Telegram Channel)
  - [wolfgang's blog](https://notthebe.ee/Windows10.html)

### Activation
**(Ignore this if you have already activated your Windows Permanently)(If you are switching to another Windows Version/Edition then follow this)**

* Windows 7
  - [How to Check if a Disk Uses GPT or MBR](https://www.howtogeek.com/245610/how-to-check-if-a-disk-uses-gpt-or-mbr-and-how-to-convert-between-the-two/)
  
  - Activator [Requires Login]
    - Permanent Activation:
      - [Daz Loader (Original)](https://forums.mydigitallife.net/threads/windows-loader-download.58464/) (For MBR disks)

      - [EzWindSLIC](https://github.com/ExeCsrss/EzWindSLIC) - An activator for Windows 7 for UEFI-GPT systems, based on WindSLIC but this one is more user friendly. (For GPT disks)
        - [Support Thread](https://forums.mydigitallife.net/threads/tool-ezwindslic-easily-activate-windows-7-vista-sp1-server-2008-2019-on-uefi-gpt.83357/)

    - [Rearm Wizard](https://forums.mydigitallife.net/threads/rearm-wizard-the-premier-rearm-solution-for-windows-7-and-office-2013.43861/) - Auto Trial Reset Script (For all disks)

* Windows 8  
[KMS Script by abbodi1406](https://github.com/abbodi1406/KMS_VL_ALL_AIO) - A batch script(s) to automate the activation of supported Windows and Office products using local KMS server emulator or an external server.

* Windows 10 / Windows 10 LTSC  
[MAS](https://github.com/massgravel/Microsoft-Activation-Scripts) (Microsoft Activation Scripts) - A collection of scripts for activating Microsoft products using HWID / KMS38 / Online KMS activation methods with a focus on open-source code, less antivirus detection and user-friendliness.

### Drivers
> Note: Reports say that [Snappy Driver Installer](https://sdi-tool.org/)(SDI) contains adware. Not sure about this.

* [Snappy Driver Installer Origin](https://www.snappy-driver-installer.org/) - Snappy Driver Installer Origin(SDIO). This method is the easiest method of installing drivers.
**You should search for Touchpad and Graphics Drivers in your manufacturer website to prevent any error.**
  - [Discussion Group](https://t.me/SDI_Origin) - Telegram

  - Nvidia Graphics Driver strip-down Guide:
    - [How to Download, Extract and Install drivers without telemetry with a batch file](https://www.reddit.com/r/nvidia/comments/5jj6re/how_to_download_extract_and_install_drivers/)

    - [[GUIDE] How to decrapify latest NVidia drivers](https://www.reddit.com/r/pcmasterrace/comments/8p095x/guide_how_to_decrapify_latest_nvidia_drivers/)

* Other:
  - [DirectX 11](https://www.microsoft.com/en-in/download/details.aspx?id=8109) (Not needed for Windows 7 & 10 since the respective script installs it)

  - [DirectX 12 Support in AME](https://www.youtube.com/watch?v=g9kYWmQrk_U)

  - [Visual C++ Redistributable Runtimes All-in-One](https://github.com/abbodi1406/vcredist) (Not needed for Windows 10 since the respective script installs it)
  
  - [.NET Framework Latest Version](https://dotnet.microsoft.com/download)

Related:  
[AME - Getting Started](https://wiki.ameliorated.info/doku.php?id=getting_started)

### Disk Encryption

- [The Hitchhiker's Guide to Online Anonymity](https://anonymousplanet.org/guide.html#windows-host-os-encryption)

## Softwares
### DNS
- [Privacytools.io](https://privacytools.io/providers/dns/)
- [Darkmatter404](https://darkmatter404.neocities.org/ProjectMariana/Configuration/dnscrypt-proxy.html)

### Browser
* [Firefox](https://firefox.com/) - Firefox is fast, reliable, open-source, and respects your privacy. Don't forget to adjust the settings according to our recommendations.
  - [arkenfox user.js (formerly ghacks-user.js)](https://github.com/arkenfox/user.js) - An ongoing comprehensive user.js template for configuring and hardening Firefox privacy, security and anti-fingerprinting.
  - [Hardening Guide](https://ebin.city/~werwolf/posts/firefox-hardening-guide/)

* [Ungoogled Chomium](https://github.com/Eloston/ungoogled-chromium) - A lightweight approach to removing Google web service dependency.
  - [Hardening Guide](https://anonymousplanet.org/guide.html#ungoogled-chromium-1)

  - Installing Extensions  
    Download the extension file manually, open chrome://extensions and drag to it. Or, extract the extension to a folder and switch on Developer mode in opera://extensions and use "Load unpacked extension".

    - If you want to automate this process, you will need to “re-google” some of the Browser by allowing access to Chrome Extension Store. This can be done using this extension: https://github.com/NeverDecaf/chromium-web-store

* [Tor Browser](https://www.torproject.org/) - Tor Browser is your choice if you need an extra layer of anonymity. It's a modified version of Firefox ESR, which comes with pre-installed privacy add-ons, encryption, and an advanced proxy.

* #### Add-ons:

  - [PrivacyTools.io](https://privacytools.io/browsers/#addons)

Related:  
https://unixsheikh.com/articles/choose-your-browser-carefully.html

### Firewall
* [Simplewall](https://www.henrypp.org/product/simplewall)  
Simple tool to configure Windows Filtering Platform (WFP) which can configure network activity on your computer.

* [Portmaster](https://safing.io/)  
Portmaster is a free and open-source application that puts you back in charge over all your computer's network connections.

### VPN
Free VPNs collect a lot of data and sell it to third party companies for their profit. Paid VPNs are better than Free VPNs in connection speed and security, but we can't guarantee that whether they log data or not. VPNs cannot encrypt data outside of the connection between your device and the VPN server. VPN providers can see and modify your traffic the same way your ISP could. And there is no way to verify a VPN provider's "no logging" policies in any way.

A VPN may still be useful to you in a variety of scenarios, such as:
- Hiding your traffic from only your Internet Service Provider.
- Hiding your downloads (such as torrents) from your ISP and anti-piracy organizations.
- Bypassing Geo-Blocked content.

Reference:  
- https://gist.github.com/joepie91/5a9909939e6ce7d09e29
- https://overengineer.dev/blog/2019/04/08/very-precarious-narrative.html
- https://privacytools.io/providers/vpn/

### Antivirus
You do not need paid anti-viruses, nor is it recommended to pirate any paid anti-viruses. **Common sense is better than using an AV**. Use [ClamAV](https://www.clamav.net/) as an extra precaution. Install [PrivacyTools.io's Recommended Browser Add-ons](#add-ons) for additional protection while browsing on the internet.

- [The Hitchhiker's Guide to Online Anonymity](https://anonymousplanet.org/guide.html#anti-virus-software)
- [The Case Against Anti-Virus Software](https://wiki.ameliorated.info/doku.php?id=antivirus) - AME Wiki
- [r/techsupport's guide on malware removal](https://www.reddit.com/r/techsupport/comments/33evdi/suggested_reading_official_malware_removal_guide/) - Reddit thread

### File Encryption

- [PrivacyTools.io](https://privacytools.io/software/encryption-tools/)

### Office Suite
* [OnlyOffice](https://www.onlyoffice.com/) - OnlyOffice, stylized as ONLYOFFICE, is a free software office suite developed by Ascensio System SIA, a company headquartered in Riga, Latvia.

* [Apache OpenOffice](https://www.openoffice.org/) - OpenOffice, sometimes abbreviated as OO, is a free and open-source office productivity software suite offered by The Apache Software Foundation (ASF) for word processing, spreadsheets, presentations, databases, graphics, and more.

* [LibeOffice](https://www.libreoffice.org/) - LibreOffice is a free and open-source office productivity software suite, a project of The Document Foundation. It was forked in 2010 from OpenOffice.org, which was an open-sourced version of the earlier StarOffice.

* [Calligra](https://calligra.org/) - Calligra Suite is an office and graphic art suite by KDE. It is available for desktop PCs, tablet computers, and smartphones. It contains applications for word processing, spreadsheets, presentation, vector graphics, and editing databases.

- [MS Office](https://www.office.com/) **(Closed Source)** - **(If you are forced to use MS Office, follow this(This process will disable telemetry as much as possible))**
  - Download and install MS Office (Account sign-in is not necessary after installation)
    - [TechBench](https://tb.rg-adguard.net/public.php)
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

### Email
- Email Providers - [PrivacyTools.io](https://privacytools.io/providers/email/)
  - [NOTE](https://github.com/STOPBACK/Setup-Windows-Privacy-Focused/blob/main/pages/src/Truth.png)
  - [Cybertoolbank](https://cybertoolbank.cc/emails.html)
  - [OTHER MESSAGING SYSTEMS](https://www.reddit.com/r/emailprivacy/wiki/index#wiki_other_messaging_systems) 
  - [Encrypted Instant Messengers](https://privacytools.io/software/real-time-communication/)

- Email Clients - [PrivacyTools.io](https://privacytools.io/software/email/)

### Archiver
- [7zip](https://www.7-zip.org/) - 7-Zip is a utility program to help you extract compressed files and create your own compressed files in several different formats.

- [PeaZip](https://peazip.github.io/) - PeaZip is a free Zip / Unzip software and Rar file extractor. Cross-platform file and archive manager.

### Password Manager
- **[PrivacyTools.io](https://privacytools.io/software/passwords/)**

### Graphics
- [ImageGlass](https://imageglass.org/) - ImageGlass is a lightweight software application whose purpose is to help you view images in a clean and intuitive working environment.

- [IrfanView](https://www.irfanview.com/) (Closed Source) - IrfanView is an image viewer, editor, organiser and converter program for Microsoft Windows.

- [NeeView](https://bitbucket.org/neelabo/neeview/wiki/Home) - NeeView is an open source image viewer and editor that displays two images simultaneously like pages from a book.

- [ImageMagick](https://www.imagemagick.org/) - ImageMagick is a free and open-source cross-platform software suite for displaying, creating, converting, modifying, and editing raster images.
  - [GraphicsMagick](http://www.graphicsmagick.org/) - GraphicsMagick(fork of ImageMagick) is a free open source, modern and powerful software suite for processing images.

- [Darktable](https://www.darktable.org/) - Darktable is a free and open-source photography application software and raw developer.

Related:
- [Awesome Privacy](https://github.com/pluja/awesome-privacy#photo-editing-and-management) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

- [Awesome Windows](https://github.com/Awesome-Windows/Awesome#graphics) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares as much as possible)

### Media Player
- [VLC](https://www.videolan.org/) - A free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project.

- [MPC-HC](https://github.com/clsid2/mpc-hc/) - Media Player Classic - Home Cinema (MPC-HC) is a free and open-source video and audio player for Windows.

- [Flyleaf](https://github.com/SuRGeoNix/Flyleaf) - Video Player .NET Library for WPF/WinForms (based on FFmpeg/SharpDX).

- [mpv.net](https://github.com/stax76/mpv.net) - mpv.net is a modern media player for Windows that works just like mpv.

- [Audacious](https://audacious-media-player.org/) - Audacious is a free and open-source audio player software with a focus on low resource use, high audio quality, and support for a wide range of audio formats.

### Video
- #### Video Editor:
  - [Olive Video Editor](https://www.olivevideoeditor.org/) - Olive is a free non-linear video editor aiming to provide a fully-featured alternative to high-end professional video editing software.
  
  - [Kdenlive](https://kdenlive.org/) - Kdenlive is an acronym for KDE Non-Linear Video Editor. It's free, and open-source and works on GNU/Linux, Windows and BSD. It's an intuitive and powerful multi-track video editor compatible with latest video technologies.
  
  - [AstroFox](https://astrofox.io/) - Astrofox is a free, open-source motion graphics program that lets you turn your audio into custom, shareable videos.
  
  - [OpenShot](https://www.openshot.org/) - OpenShot Video Editor is a free and open-source video editor for Linux, macOS, and Windows. It is an easy to use, quick to learn, and surprisingly powerful video editor.
  
  - [Shotcut ](https://shotcut.org/) - Shotcut is a free and open-source cross-platform video editing application for FreeBSD, Linux, macOS and Windows.

  - [Expressive Suite](https://github.com/ExpressiveSuite) - A professional graphics software suite made for designers and animators alike.

- #### Subtitle:
  - [SubSync - Subtitle Speech Synchronizer](https://subsync.online/) - Automatic movie subtitle synchronization tool.

  - [Subtitld](https://subtitld.jonata.org/) - Subtitld is a software to create, transcribe and edit subtitles, in SRT, SSA, TTML, SBV, DFXP, VTT, XML, SCC and SAMI. Add, remove, slice subtitles easily. Generate videos with the subtitle burned in.

  - [Penguin Subtitle Player](https://github.com/carsonip/Penguin-Subtitle-Player/) - Subtitle Player for Adding Subtitles to Online Videos.

  - [MKVToolNix](https://mkvtoolnix.download/) - MKVToolNix is a small collection of tools (mkvmerge, mkvinfo, mkvextract, mkvpropedit and mmg) that allows you to manipulate Matroska (MKV) files in several ways.

  - [Subtitle Edit](https://www.nikse.dk/SubtitleEdit) - Subtitle Edit is an open source subtitle editor and converter which supports 200+ formats.

Related:  
* [Awesome Privacy](https://github.com/pluja/awesome-privacy#video-and-audio) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

* [Awesome Windows](https://github.com/Awesome-Windows/Awesome#video) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares as much as possible)

- [Awesome Alternatives](https://codeberg.org/LinuxCafeFederation/awesome-alternatives#audio-video-editing-software)

### Audio
* [Audacity](https://www.audacityteam.org/)  - Audacity is a free and open-source digital audio editor and recording application software, available for Windows, macOS, Linux, and other Unix-like operating systems.
  > Audacity has been acquired by Muse Group, which also owns MuseScore and Ultimate Guitar. You can choose any one of the forks below.
  - [Audacity fork by Cookie Engineer](https://github.com/cookiengineer/audacity) - Audacity Fork without any Sentry Telemetry or Crash Reporting.

  - [Tenacity](https://github.com/tenacityteam/tenacity) - FLOSS Audacity Fork - No telemetry, crash reports and other shenanigans like that!

  - [Audacium](https://github.com/SartoxOnlyGNU/audacium) - Audacity fork without Telemetry and with new features.

* [Ardour](https://ardour.org/) - Ardour is a hard disk recorder and digital audio workstation application that runs on Linux, macOS, FreeBSD and Microsoft Windows.

Related:  
* [Awesome Privacy](https://github.com/pluja/awesome-privacy#video-and-audio) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

* [Awesome Windows](https://github.com/Awesome-Windows/Awesome#audio) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares as much as possible)

### File Converter
- [Handbrake](https://handbrake.fr/) - HandBrake is a tool for converting video from nearly any format to a selection of modern, widely supported codecs. Can also be used for compressing videos.

- [modfy.video](https://github.com/modfy/modfy.video) - A video transcoder and converter built using Web Assembly and FFMPEG to transcode and convert videos right in your browser while protecting your privacy

- [File Converter](https://file-converter.org/) - File Converter is a very simple tool which allows you to convert and compress one or several file(s) using the context menu in windows explorer.

- [Tricycle](https://github.com/kmcclive/tricycle) - Tricycle is an open source, user-friendly video converter.

- [FFmpeg](http://ffmpeg.org/) - FFmpeg is a free and open-source software project consisting of a large suite of libraries and programs for handling video, audio, and other multimedia files and streams. At its core is the FFmpeg program itself, designed for command-line-based processing of video and audio files.

  - [Tutorial](https://amiaopensource.github.io/ffmprovisr/)

- [StaxRip](https://github.com/staxrip/staxrip) - StaxRip is a multiformat video encoding application. With StaxRip you can easily convert your DVD's and many more formats into MPEG-4 like XviD, x264/H264/AVC, x265/H265/HEVC, VP9.

- [VidCoder](https://vidcoder.net/) - VidCoder is an open-source DVD/Blu-ray ripping and video transcoding application for Windows. It uses HandBrake as its encoding engine.

- [MystiQ](https://github.com/swl-x/MystiQ) - MystiQ is a GUI for FFmpeg, a powerful media converter.

- [Ciano](https://github.com/robertsanseries/ciano) - A multimedia file converter focused on simplicity. Convert videos, music and pictures with the best possible experience.

### Drive Tools
- [Macrium Reflect Free](https://www.macrium.com/reflectfree) (Closed Source) - Macrium Reflect Free allows you to back up your entire computer and schedule backups.

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

- [NETworkManager](https://github.com/BornToBeRoot/NETworkManager) - A powerful tool for managing networks and troubleshoot network problems.

### Sharing
- [KDE Connect](https://kdeconnect.kde.org/) - KDE Connect is a multi platform application developed by KDE, which facilitates communications and data transfer between devices wirelessly over local network.

- [Libreware(Telegram Channel) - Sharing Tools List](https://t.me/Libreware/680)

### Other Tools
- [OpenHashTab](https://github.com/namazso/OpenHashTab) - OpenHashTab is a shell extension for conveniently calculating and checking file hashes from file properties.

- [Flameshot](https://flameshot.org/) - Flameshot is a lightweight, open-source utility that provides an easy way to take screenshots of your desktop and highlight important aspects, add text, arrows and upload them for a quick share.

- [Winaero Tweaker](https://winaero.com/) (Closed Source) - Winaero is a website hosting freeware tweaking tools for Microsoft Windows.

- System Information:

  - [SystemInfo](https://github.com/CherryPill/system_info) - SystemInfo enables you to view information about the hardware components of your computer.

  - [Libre Hardware Monitor](https://github.com/LibreHardwareMonitor/LibreHardwareMonitor/) - Libre Hardware Monitor, a fork of Open Hardware Monitor, is free software that can monitor the temperature sensors, fan speeds, voltages, load and clock speeds of your computer.

  - [SidebarDiagnostics](https://github.com/ArcadeRenegade/SidebarDiagnostics) - A simple sidebar for Windows desktop that displays hardware diagnostic information.

- [Sandboxie Plus](https://sandboxie-plus.com/) - Sandboxie is a sandbox-based isolation software for 32-bit and 64-bit Windows NT-based operating systems. It creates a sandbox-like isolated operating environment in which applications can be run or installed without permanently modifying local & mapped drives or the windows registry. An isolated virtual environment allows controlled testing of untrusted programs and web surfing.

- [WinCDEmu](https://wincdemu.sysprogs.org/) - WinCDEmu is an open-source CD/DVD/BD emulator - a tool that allows you to mount optical disc images by simply clicking on them in Windows Explorer.

- [EasyOCR](https://github.com/JaidedAI/EasyOCR) - Ready-to-use OCR with 80+ supported languages and all popular writing scripts including Latin, Chinese, Arabic, Devanagari, Cyrillic and etc.

- [AutoHotkey](https://www.autohotkey.com/) - AutoHotkey is an open-source utility and can automate almost anything by sending keystrokes and mouse clicks.

- [Android Tool](https://github.com/fast-geek/Android-Tool) - Android Tool is a powerful and beautiful program, created to make popular adb and fastboot commands easier to use. A dark theme, intuitive interface and other features.

### To Do - AME

- [After AME Windows 10](https://t.me/Windows10AMEPowerUser) - Telegram Channel

### For other Softwares
- [PrivacyTools](https://www.privacytools.io/) - PrivacyTools (also known as privacytools.io) provides knowledge and tools to protect your privacy against global mass surveillance' and is a well-known website in the Education & Reference category.

- [Privacy Tools List](https://privacytoolslist.com/) - Top privacy tools, apps and services.

- [FOSS_Stuff](https://github.com/samedamci/FOSS_Stuff/blob/master/list.md) - FOSS and privacy software.

- [Awesome Privacy](https://github.com/pluja/awesome-privacy) - A curated list of services and alternatives that respect your privacy because PRIVACY MATTERS.

- [Awesome Windows](https://github.com/Awesome-Windows/Awesome) - An awesome & curated list of best applications and tools for Windows. (Choose FOSS softwares as much as possible)

- [FOSS Adobe Alternatives](https://twitter.com/XdanielArt/status/1259859435607994370/photo/1)

- [NirSoft](https://www.nirsoft.net/) - NirSoft web site provides a unique collection of small and useful freeware utilities, all of them developed by Nir Sofer.

- [Sordum](https://www.sordum.org/) - Collection of tools to simplify your Computer usage.

- [Libreware (Telegram Channel)](https://t.me/Libreware) - Libre Software Library
  - [NoGoolag](https://t.me/NoGoolag) (Telegram Channel)
  - [NoGoolag Group](https://t.me/joinchat/nMOOE4YJPDFhZjZk) (Telegram Group)

- [CoolGithubProjects](https://t.me/r_CoolGithubProjects)

## Useful Links
- [Reddit /r/privacy/wiki](https://www.reddit.com/r/privacy/wiki/index)

- [The Hitchhiker's Guide to Online Anonymity](https://anonymousplanet.org/)

- [DigDeeper](https://digdeeper.neocities.org/) - A website about Software Privacy. Lots of great articles.

- [Computer Security and Privacy](https://www.billdietrich.me/ComputerSecurityPrivacy.html)

- [Fake "privacy" tools not worth using](https://www.reddit.com/r/privacytoolsIO/comments/cx8d8v/fake_privacy_tools_not_worth_using/)

- [Dark Matter 404](https://darkmatter404.neocities.org/ProjectMariana/index.html)

- [Leak Test Tools List](https://privacytoolslist.com/#leak-test-tools)

# 🎮 Gaming Tweaks

- [Game / Performance / Networking tweaks, tips, hacks, apps: REAL PERFORMANCE GUIDE](https://n1kobg.blogspot.com/)

- [Milkbrain's Basic Windows Optimization Guide](https://docs.google.com/document/d/112uc7XnMA4QFTKF6i4iFdXfar6b5YlLwrdF9N-Z5TcI/edit)

  - [Milkbrain's Advanced FPS Boost Guide](https://docs.google.com/document/d/1XsGfW1EjjW7rutzZ8tpX7t3FvLc7WF4rjtfC-77Louw/edit)

- [Calypto's Latency Guide](https://docs.google.com/document/d/1c2-lUJq74wuYK1WrA_bIvgb89dUN0sj8-hO3vqmrau4/edit)

- [BDO Ultimate Performance Guide](https://docs.google.com/document/d/1cyLaDiPL_B6nOZw_qPE_wOGuoeRT-qddTjevTFoFBkg/edit)

## Issues
Still finding a better & an user-friendly script to strip-down Windows 8 ISO File. But as I said, Windows 10 AME is a better choice than stripping-down(using **any** method) and using Windows 8. (Note: Windows 7 & 8 is not safe to use anymore. But they can be used if you do things in it safely. Please be careful. Mainly Avoid **using cracked programs, unsafe mails**, unsafe websites(use these [add-ons](#add-ons) that secure you from many nasty things)), and using Internet Explorer. But in future, many programs will stop supporting Win 7 & 8.)

## Contact
- Instagram: [@tom_dko](https://www.instagram.com/tom_dko/)

- YouTube: [Tech Morgan](https://www.youtube.com/channel/UCjcW0X8R1y7BxTFRGfIPztw)

- Telegram: [@deepsmorgan](https://t.me/deepsmorgan)
  - Channel: [@dtkmorgan](https://t.me/dtkmorgan)
  - Discussion Group: [@dtkmorgangrp](https://t.me/dtkmorgangrp)

- Element: @deepsmorgan789:matrix.org
