# The ReFresh theme for Hugo

**ReFresh** is a theme for the [Hugo](https://gohugo.io) static site generator highly modified from the awesome [Fresh](https://github.com/StefMa/hugo-fresh) theme. It is an adaptation from single-page to a multi-page type of site (see more in the ).

 [Bulma](https://bulma.io)-based theme of the same name from [CSS Ninja](https://cssninja.io/themes/fresh). You can find a live demo of the original Ninja theme [here](https://cssninjastudio.github.io) or a demo of the Hugo Fresh theme [here](https://hugo-fresh.now.sh/).

![ReFresh theme logo](images/screenshot.png)

> This theme is intended for personal website and blog. If you'd like to extend the theme to include other functionalities submit a pull request.

## Getting started

To create a new site using this theme:

```bash
# Create site and cd into it
hugo new site my-site && cd my-site

# Clone the Fresh theme
git clone https://github.com/

# Remove the default config
rm config.toml

# Fetch the example config
curl -O https://raw.githubusercontent.com/StefMa/hugo-fresh/master/exampleSite/config.yaml

# Run the site locally
hugo server

# Open the site in your browser
open http://localhost:1313
```

## Customizing your page

There's a wide variety of customizations that you can make to your Hugo Fresh landing page by modifying the `config.yaml` file that you downloaded. That file provides documentation for what the various config values represent.


## Troubleshooting

If you see `error: failed to transform resource: TOCSS: failed to transform "style.sass"` when attempting to run your `hugo server`, make sure you have the extended version of Hugo installed:

```bash
# On Ubuntu:
snap refresh hugo --channel=extended
```

# List of modifications from the original Fresh theme

* The theme was transformed from single page template to multipage. 

* The left side menu now contains page tags along with theirs counter.

* The _list_ and _terms_ types of pages contain a list of the post summaries.

* The image used to build the summary is resized to allow better usage of the bandwith.

* The js and css files are minified (with a configurael option on the `config.yaml`.

* The menu is built following the structure of the "content" folder. Two levels are allowed at the moment.

* The ugly `navbar-burger` used in the theme's menu is removed (it was displayed when the page was resized).

* The `.sass` files are now processed with `resources.ExecuteAsTemplate` so that it is possible to use variables from the `config.yaml`.

* I added in the config.yaml the possibility to set the font-family for the navbar, sidebar and content of the page.

* I upgraded [Bulma](https://bulma.io/) (that the theme is based on) to version 0.7.5 because in the new version the class _content_ has a separate style so that it can be modified without impacting the rest of the page.

* I added [highlight.js](https://highlightjs.org/) to better highlight the code sections of the posts. I chose the style **monokai-sublime**.

* I added [highlightjs-line-number.js](https://github.com/wcoder/highlightjs-line-numbers.js/) to add the line number to each line in the code sections of a post.

* I added an option to show the date of the last modification in a post.

* I added an image shortcode to resize the images and save bandwidth in a post.
