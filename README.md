# Building a website: starter and follow-along steps

A one-page website for the workshop that uses just plain HTML and CSS. There is nothing to install. You need a free GitHub account and a laptop with a web browser. Follow the steps below as the talk goes on, and edit anything you like.

| File | What it does |
|---|---|
| `index.html` | The content and structure of the page |
| `style.css` | Colours, fonts and layout. Colours and fonts are in the block at the top. |
| `script.js` | A few lines that switch between light and dark |
| `README.md` | This page |

## 1. Look at the files, and get your own copy (after "three kinds of file")
- Open any website. Right-click, **View page source**. Find the line that loads the stylesheet (`<link rel="stylesheet" ...>`).
- At the top right of this page, click **Fork**, then **Create fork**. You now have your own copy under your username.

## 2. Change the colours (after "where colours and fonts are set")
Open `style.css` in your copy and click the pencil icon.
- Change `--bg`, `--text` and `--accent` at the top. Try other colours (`#fff4e0`, `#003366`).
- Change `--font-heading` to `Georgia, serif`.
- Click **Commit changes**. You will see the result once Pages is on (step 5).

In `index.html`, replace **Your Name**, the tagline and the About text with your own. Commit again.

## 3. Inspect a page (after "inspecting a live page")
On any page: right-click › **Inspect**. In the Styles panel, change a colour or the font size. This is temporary, so nothing is saved. Refresh to undo.

## 4. Small screens (after "small screens")
Drag the window narrower and watch the text size change at 600 pixels. Optional: delete the `<meta name="viewport" ...>` line in a copy and see what a phone would do.

## 5. Turn on GitHub Pages (after "github pages")
In your copy: **Settings** › **Pages**. Under "Build and deployment", choose **Deploy from a branch**, then branch **main**, folder **/ (root)**, and **Save**.
After a minute or two, refresh. Your address appears at the top: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. Your colour changes from step 2 should be there.

## 6. Optional: see it on your own laptop (after "see it on your own laptop")
In your copy, click **Code** › **Download ZIP** and unzip it. Open a terminal in that folder (it contains `index.html`).
- Mac or Linux: `python3 -m http.server 8000`
- Windows: `py -m http.server 8000`

Open **http://localhost:8000** in your browser. Edit `style.css`, save, and refresh to see the change straight away, with no commit. Stop the server with **Ctrl+C**. This address only works on your own machine, and you can skip this step.

## Extensions
- Add a photo (see the comment in `index.html`).
- Add another paper: copy one `<li>` line.
- Add a new section: copy a whole `<section>` block and rename it.
- Find a template you like at html5up.net.
