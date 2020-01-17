# The ReFresh theme for Hugo

**ReFresh** is a theme for the [Hugo](https://gohugo.io) static site generator _highly_ modified from the awesome [Fresh](https://github.com/StefMa/hugo-fresh) theme (below you can find the list of changes to the original theme). 

You can find a live demo of the original Fresh theme [here](https://themes.gohugo.io/theme/hugo-fresh/) or a demo of the Hugo ReFresh theme [here](https://themes.gohugo.io/theme/hugo-refresh/).

You can find another example of ReFresh theme in [my personal website](https://rjordaney.is/). 

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

To run the Example Site using Hugo ReFresh:

```bash
# Create site and cd into it
hugo new site my-site && cd my-site

# Clone the ReFresh theme into the themes folder
git init
git submodule add https://github.com/PippoRJ/hugo-refresh themes/hugo-refresh

# Remove the default config
rm config.toml

# Remove the static folder
rm -r static/

# Copy the Example site content and configuration in my-site
cp -R themes/hugo-refresh/exampleSite/* ./

# Open the site in your browser
hugo server -D
```

## Troubleshooting

If you see `error: failed to transform resource: TOCSS: failed to transform "style.sass"` when attempting to run your `hugo server`, make sure you have the extended version of Hugo installed:

```bash
# On Ubuntu:
snap refresh hugo --channel=extended
```

## Statistics counter

You can enter your Google / Yandex / etc statistic counter code into the `layouts/partials/counter.html`. Code will be generated right after open `<body>` tag.

## Customizing your page

There are different configuration options for Hugo ReFresh including options for: the navbar, the sidebar, the homepage, fonts, colours landing, stats counters and images. 
Read the comments in the `config.yaml` file to know more.

The images specified in the `config.yaml` file need to be placed in the directory specified by the `assetDir` option in the config file itself, the default folder for the images is the `static` folder. 

## List of shortcodes you can use in your articles with description:

<details>
<summary> title1.html, title2.html, title3.html, title4.html, title5.html, title6.html </summary>

Usage example:

```
{{< title1 "My awesome title" "my-title-id">}}
```

The **first parameter** is the title of the shortcode (in this example is "My awesome title").<br>
The **second paramter** is the ID of the shortcode (in this example is "my-title-id").<br>
It can be used in links to the same page as:

```
[link to the title](#my-title-id)
```

</details>

<details>
<summary> code.html </summary>

This shortcode builds a centred page that is two-third of the full size of the page.

Usage example:

```
{{% code %}}
` ` `
    $ sudo bash -c 'echo 0 > /proc/sys/kernel/randomize_va_space'
` ` `
{{% /code %}}
```

</details>

<details>
<summary> codeAll.html </summary>

This shortcode builds a centred page that is as wide as the full size of the page.

Usage example:

```
{{% codeAll %}}
` ` `
    $ dmesg | tail
    ......
    [13401.299114] overflow64[16566]: segfault at 616161616161 ip 0000616161616161 sp 00007fffffffddb0 error 14 in libc-2.27.so[7ffff79e4000+1e7000]
` ` `
{{% /codeAll %}}
```


</details>

<details>
<summary> figure.html </summary>

This shortcode resize an image that with the width and/or height that you specify

Usage example:

```
{{% figure src="images/the_stack.png" width="700" %}}
{{% figure src="images/the_stack.png" height="700" %}}
```

The parameter **src** is the location of the image relative to the location of the file where the shortcode has been used.<br>
The parameter **width** is the width of the image.<br>
The parameter **height** is the height of the image.<br>

</details>

<details>
<summary> twoFigure.html </summary>

This shortcode shows 2 images one next to the other with the possibility to resize them.

Usage example:

```
{{% twoFigure src1="images/overflow_1.png" width1="700" src2="images/overflow_2.png" width2="700" %}}
```

The parameter **src1** is the location of the right image relative to the location of the file where the shortcode has been used.<br>
The parameter **width1** is the width of the right image.<br>
The parameter **height1** is the height of the right image.<br>
The parameter **src2** is the location of the left image relative to the location of the file where the shortcode has been used.<br>
The parameter **width2** is the width of the left image.<br>
The parameter **height2** is the height of the left image.<br>

With a small screen these images will be shown one on top of the other.

See example of use [here](https://rjordaney.is/lectures/basic_buffer_overflow/)

</details>

<details>
<summary> book.html </summary>

Usage example:

```
{{< book title="Title Awesome" authors="Awesome author" image="images/cover.jpg" size="300x">}}
```

The parameter **title** is the title of the book.<br>
The parameter **authors** contains the authors of the book.<br>
The parameter **image** is the cover of the book.<br>

The parameter **size** is used to specify the size of the book in pixel "width" x "height".<br>
E.g.: "300x" means 300px of width.<br> 
E.g.: "x300" means 300px of height. <br>

See example of use [here](https://rjordaney.is/miscellaneous/ml_books/)

</details>

<details>
<summary> exercise.html </summary>

Usage example:

```
{{< exercise >}}
Text of the exercise.
{{< /exercise >}}
```

This shortcode has no parameters.

See example of use [here](https://rjordaney.is/code_exercises/staircase_n_steps/)

</details>


<details>
<summary> code_tabs.html </summary>

Usage example:

```
{{< code_tabs 
    file1="/content/code_exercises/staircase_n_steps/code/solution_python.md" title1="Python" icon1="python"
    file2="/content/code_exercises/staircase_n_steps/code/solution_c.md" title2="C" icon2="c"
    file3="/content/code_exercises/staircase_n_steps/code/solution_java.md" title3="Java" icon3="java" 
>}}
```

The parameter **file1** is the name of the markdown file to be displayed in the first tab.
The path needs to start from the `content` folder.<br>
The **title1** is the title of the first tab.<br>
The **icon1** is the icon to be shown at the right of the title, it is an optional parameter. See the partial code `icon.html` for the available icons.

There are 6 tabs supported at this moment

* the files parameters are **file1**, **file2**, **file3**, **file4**, **file5**, **file6** 

* the titles parameters are **title1**, **title2**, **title3**, **title4**, **title5**, **title6** 

* the icons parameters are **icon1**, **icon2**, **icon3**, **icon4**, **icon5**, **icon6** 


See example of use [here](https://rjordaney.is/code_exercises/staircase_n_steps/)

</details>


<details>
<summary> codeInLine.html </summary>

Usage example:

```
{{% codeInline %}}sudo echo 0 > /proc/sys/kernel/randomize_va_space{{% /codeInline %}}
```

This shortcode has no parameters.

See an example of usage [here](https://rjordaney.is/lectures/basic_buffer_overflow/)

</details>

<details>
<summary> message_blue.html, message_dark.html, message_green.html, message_red.html, message_yellow.html </summary>



</details>

<details>
<summary> notificationBlue.html, notificationGreen.html, notificationRed.html, notificationYellow.html </summary>



</details>

<details>
<summary> site_blue.html, site_green.html, site_lightgreen.html, site_red.html, site_yellow.html </summary>

Usage example:

```
{{< site_lightgreen "Web" "https://www.example.com" >}}
<p>Description of the website.</p>
{{< /site_lightgreen >}}
```

The **first parameter** will appear in the right coloured part of the shortcode.<br>
The **second parameter** will appear in the middle part of the shortcode.<br>

See example of usage [here](https://rjordaney.is/miscellaneous/ctf_resources/)

</details>



## Customization options for a regular page

These are the options that you can define is the front matter of a regular page:

```
---
title: "My Awesome Title"
date: 2019-06-03T21:51:13+01:00
draft: false
hideLastModified: true
summaryImage: "images/system.jpg" 
keepImageRatio: true
tags: ["Tag1", "tag2", "tag 3"]
summary: "This is a custom summary for my article"
showInMenu: true
---
```

* `summaryImage`: it is used to specify the image to be used in the summary 

* `keepImageRatio`: it is used to force the aspect ratio of the image to be kept. The default value is **false**.

* `summary`: it is used to specify the summary of an article instead of taking it from the article itself.

* `hideLastModified`: it is used to hide the the timestamp added at the end of the article.

* `showInMenu`: it is used to show the article in the top right menu. 

* `tags`: it is the list of tags for the article; they will be used to build the left sidebar.


To avoid path problems when specifying the `summaryImage`, it is recommended to define a regular page as a leaf bundle. The example above will result in:

```
* my_awesome_title (folder)
   * index.md (file)
   * images (folder)
      * system.jpg (file)
```


## List of modifications from the original theme

* The ReFresh theme was transformed from single page template to multipage.

* Added multilanguage support.

* The left side menu now contains page tags along with theirs post counter.

* The _list_ and _terms_ types of pages contain a list of the post summaries.

* The images used to build the summaries are resized to allow better usage of the bandwidth.

* The js and css files are minified (with a configurable option on the `config.yaml`).

* The menu is built following the structure of the `content` folder. Two levels are allowed at the moment.

* The `navbar-burger` used in the theme's menu is removed (it was displayed when the page was resized).

* The `.sass` files are now processed with `resources.ExecuteAsTemplate` so that it is possible to use variables from the `config.yaml`.

* An option in the config.yaml was added to configure the font-family for the navbar, sidebar and content of the page.

* [Bulma](https://bulma.io/) (the css framework the theme is based on) is now updated to version 0.7.5 because in the new version the class _content_ has a separate style to allow modification that will impact only the contents of the posts.

* [highlight.js](https://highlightjs.org/) was added to better highlight the code sections of the posts. I chose the style **monokai-sublime**.

* [highlightjs-line-number.js](https://github.com/wcoder/highlightjs-line-numbers.js/) was added to have the line number at the beginning of each line of code in a code sections of a post.

* An option was added to show the date of the last modification in a post.

* A shortcode was added to resize the images and save bandwidth in a post content.
