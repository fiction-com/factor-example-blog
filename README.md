<h1 align="center">Factor - Custom Blog Example</h1>

<p align="center">
Build a custom blog using Factor, learn about common customization techniques.
</p>

<p align="center">
  <a href="https://factor-example-blog.herokuapp.com/" target="_blank">
    <img src="./screenshot-wide.jpg" width="500px">
  </a>
</p>

<p align="center">
<a href="https://factor-example-blog.herokuapp.com/" target="_blank"><strong>Live Demo &rarr;</strong></a>
</p>

## Goal

This example is here to show you the techniques involved to easily customize Factor plugins and create unique results.

## Features

- A fully functional, dynamic blog that can be managed on the dashboard
- Custom layout and design
- Basic lint/typescript setup
- Bonus: Dutch translation added of English text in plugin ([localization](https://factor.dev/docs/localization))

## Techniques Used

- Setting custom CSS variables. Learn about [styles](https://factor.dev/docs/styles) and [standard CSS variables](https://factor.dev/docs/css-variables).
- Adding custom routes via the index.ts [main file](https://factor.dev/docs/main-files)
- Importing the blog components directly into the route components for easy customization (single, index)
- Overriding components from the [blog plugin](https://factor.dev/plugin/standard-blog) (advanced customization)

## Running This Example

First thing you should do is clone the repo:

```bash
git clone https://github.com/fiction-com/factor-example-blog.git
```

Then go to the folder:

```bash
cd ./factor-example-blog
```

Now install dependencies, including Factor:

```bash
npm install # or yarn install
```

Once you've installed dependencies, just run Factor development server:

```bash
npx factor dev # or yarn factor dev
```

## Services

Factor uses backing services to handle things like DB, image hosting and email. If you'd like to turn this example into a production app, you'll need to [set those up as well](https://factor.dev/docs/services-setup).

## What's Included

This example adds `@factor/plugin-blog` [Overview](https://factor.dev/plugin/standard-blog), includes it on some [custom routes](https://factor.dev/docs/routes) and customizes it with [settings](https://factor.dev/docs/settings).

Using the settings we override a component from the plugin; which is the recommended way of doing advanced customization.
