# BLumbye's userscripts
## [Overleaf - Paste Images from Clipboard](https://github.com/BLumbye/overleaf-userscripts/raw/master/Overleaf-PasteImagesFromClipboard.user.js)
This is based on the [original version by Sebastian Haas](https://github.com/cmprmsd/Overleaf-Image-Helper). This version has been tweaked to work in Overleaf's new editor, has slightly modernised code and other minor improvements.

This script will automatically upload images to your project and add a snippet including the image in the document when pasting it in using <kbd>Ctrl</kbd> + <kbd>v</kbd>. By default, the image will be uploaded to the `assets` folder which will be created if it does not already exist. The folder can be changed by tweaking the `assetsFolder` constant in the beginning of the file.

## [Overleaf - Additional Keymaps](https://github.com/BLumbye/overleaf-userscripts/raw/master/Overleaf-AdditionalKeymaps.user.js)
This extension adds keymaps to both the editor itself, but also other areas of Overleaf. Right now the amount of keymaps is quite sparse, though the plan is to add more as the need arises.

Editor keymaps:
- <kbd>Ctrl</kbd> + <kbd>m</kbd>: Adds `\texttt{}` around all selections, just like the built-in commands for bold and italics.
- <kbd>Alt</kbd> + <kbd>e</kbd>: Escapes all reserved characters (`# $ % & { } _ ~ ^ \`) in all selections, e.g. replacing `#` with `\#`.

Other keymaps:
- <kbd>F2</kbd> when file is in focus: Rename the file. Functionally the exact same as pressing the pencil button in the toolbar. This does not interfere with the default binding to toggle fold.
<<<<<<< HEAD

## [Overleaf - Compile Time](https://github.com/BLumbye/overleaf-userscripts/raw/master/Overleaf-CompileTime.user.js)
Displays the time it is taking to compile the document in the bottom left corner of the PDF. It currently does not measure the initial compile, and it will break when changing between different layouts.
=======
>>>>>>> 0ed8e4b20e16a6485252d756673318281fcf6b2f
