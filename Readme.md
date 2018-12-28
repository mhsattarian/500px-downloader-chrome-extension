# 500px Downloader Chrome Extension

[![Logo](assets/icon.png)]('/')

Simple Extensions to **Download 500px Images**. you can find two versions of the extensions in this repository:

### Simple `content script` version

![Download button added to toolbar below image](assets/download&#32;button.png)

Just injects a `js` on each image page on 500px and adds a download button on the toolbar below image. 
there is a small problem on slow networks, cause sometimes it gets the thumbnail instead of the actual image.

### `page action` version

![Page action added to chrome toolbar](assets/page&#32;action.png)

Adds a page action to chrome toolbar which only activates on 500px site on image pages. Capture current image by clicking on the extension icon to open in newtab.

## How to install

Clone this repository, open chrome and activate the developer mode:

![How to turn developer mode on](assets/chrome&#32;developer&#32;mode.png)

then, click on `Pack extension` button and choose the address of extension root directory.
> the `private key file` section is not required in the first time.

## Chrome extension?

Go checkout my presentation on **Developing Chrome Extensions**,
[here on ludus](https://app.ludus.one/c8b8a6b8-5807-4282-bfaa-ae044205aace).