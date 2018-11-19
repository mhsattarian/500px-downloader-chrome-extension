# 500px Downloader Chrome Extension

![](assets/icon.png)

Simple Extensions to **Download 500px Images**. you can find two versions of the extensions in this repository:

### Simple `content script` version

![Download button added to toolbar below image](assets/download&#32;button.png)

Just inject a `js` on each image page on 500px and adds a download button on the toolbar below image. there is a small problem on slow networks, cause sometimes it gets the thumbnail instead of the actual image.

### `page action` version

![](assets/page&#32;action.png)

Adds a page action to chrome toolbar which only activates on 500px site on image pages. Capture current image by clicking on the extension icon to open in newtab.