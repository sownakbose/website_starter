# Building a website: follow-along sheet

You need a free GitHub account and a laptop with a web browser. Nothing to install.

Starter repository: **[add the address here]**

## 1. Look at the files (during "what a website is")
Open any website. Right-click, **View page source**. Find the line that loads the stylesheet (`<link rel="stylesheet" ...>`).

## 2. Get your own copy (during "git")
On the starter repository, click **Fork**, then **Create fork**. You now have your own copy under your username.

## 3. Turn on GitHub Pages (during "GitHub Pages")
In your copy: **Settings** › **Pages**. Under "Build and deployment", choose **Deploy from a branch**, then branch **main**, folder **/ (root)**, and **Save**.
After a minute or two, refresh. Your address appears at the top: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

## 4. Change the page (during "CSS" and "inspecting")
Open `style.css` in your copy and click the pencil icon.
- Change `--bg`, `--text` and `--accent` at the top. Try other colours (`#fff4e0`, `#003366`).
- Change `--font-heading` to `Georgia, serif`.
- Click **Commit changes**, wait a minute, and refresh your live address.

In `index.html`, replace **Your Name**, the tagline and the About text with your own. Commit again.

## 5. Try the browser tools
On your live page: right-click › **Inspect**. In the Styles panel, change a colour or the font size. This is temporary, so nothing is saved. Refresh to undo.

## 6. Small screens
Drag the window narrower and watch the text size change at 600 pixels. Then delete the `<meta name="viewport" ...>` line on a copy and see what a phone does.

## Ideas
- Add a photo (see the comment in `index.html`).
- Add another paper: copy one `<li>` line.
- Add a new section: copy a whole `<section>` block and rename it.
- Find a template you like at html5up.net.
