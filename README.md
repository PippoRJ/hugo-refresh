# The ReFresh theme for Hugo

**ReFresh** is a theme for the [Hugo](https://gohugo.io) static site generator _highly_ modified from the awesome [Fresh](https://github.com/StefMa/hugo-fresh) theme (below you can find the list of changes to the original theme). 

You can find a live demo of the original Fresh theme [here](https://themes.gohugo.io/theme/hugo-fresh/) or a demo of the Hugo ReFresh theme [coming soon](#).

![ReFresh theme logo](images/screenshot.png)

> This theme is intended for personal website and blog. If you'd like to extend the theme to include other functionalities submit a pull request.

## Getting started

To create a new site using Hugo ReFresh:

```bash
# Create site and cd into it
hugo new site my-site && cd my-site

# Clone the ReFresh theme into the themes folder
git init
git submodule add https://github.com/PippoRJ/hugo-refresh.git themes/hugo-refresh

# Remove the default config
rm config.toml

# Fetch the example config
curl -O https://raw.githubusercontent.com/PippoRJ/hugo-refresh/master/exampleSite/config.yaml

# Run the site locally
hugo server -D

# Open the site in your browser
open http://localhost:1313
```

## Customizing your page

There are different configuration options for Hugo ReFresh including options for: the navbar, the sidebar, the homepage, fonts, colours landing and images. 
Read the comments in the `config.yaml` file to know more.

## Troubleshooting

If you see `error: failed to transform resource: TOCSS: failed to transform "style.sass"` when attempting to run your `hugo server`, make sure you have the extended version of Hugo installed:

```bash
# On Ubuntu:
snap refresh hugo --channel=extended
```

## List of modifications from the original theme

* The ReFresh theme was transformed from single page template to multipage. 

* The left side menu now contains page tags along with theirs post counter.

* The _list_ and _terms_ types of pages contain a list of the post summaries.

* The images used to build the summares are resized to allow better usage of the bandwith.

* The js and css files are minified (with a configurable option on the `config.yaml`).

* The menu is built following the structure of the `content` folder. Two levels are allowed at the moment.

* The `navbar-burger` used in the theme's menu is removed (it was displayed when the page was resized).

* The `.sass` files are now processed with `resources.ExecuteAsTemplate` so that it is possible to use variables from the `config.yaml`.

* An option in the config.yaml was added to confifure the font-family for the navbar, sidebar and content of the page.

* [Bulma](https://bulma.io/) (the css framework the theme is based on) is now updated to version 0.7.5 because in the new version the class _content_ has a separate style to allow modification that will impact only the contents of the posts.

* [highlight.js](https://highlightjs.org/) was added to better highlight the code sections of the posts. I chose the style **monokai-sublime**.

* [highlightjs-line-number.js](https://github.com/wcoder/highlightjs-line-numbers.js/) was added to have the line number at the beginning of each line of code in a code sections of a post.

* An option was added to show the date of the last modification in a post.

* A shortcode was added to resize the images and save bandwidth in a post content.
