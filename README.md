# BLumbye's userscripts
## [Overleaf - Paste Images from Clipboard](https://github.com/BLumbye/overleaf-userscripts/raw/master/Overleaf-PasteImagesFromClipboard.user.js)
This is based on the [original version by Sebastian Haas](https://github.com/cmprmsd/Overleaf-Image-Helper). This version has been tweaked to work in Overleaf's new editor, has slightly modernised code and other smaller improvements.

This script will automatically upload images to your project and add a snippet including the image in the document when pasting it in using <kbd>Ctrl</kbd> + <kbd>v</kbd>. By default, the image will be uploaded to the `assets` folder which will be created if it does not already exist. The folder can be changed by tweaking the `assetsFolder` constant in the beginning of the file.

## [Overleaf - Additional Keymaps](https://github.com/BLumbye/overleaf-userscripts/raw/master/Overleaf-AdditionalKeymaps.user.js)
The plan for this extension is to add more keyboard shortcuts to the overleaf editor. Right now it only contains the following keymap:

- <kbd>Ctrl</kbd> + <kbd>m</kbd>: Adds `\texttt{}` around all selections, just like the built-in commands for bold and italics.