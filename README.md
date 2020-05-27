# Factor Blog Example

This is an example Factor application that creates a simple blog. In addition, it customizes a few things so you can get the hang of how customization works. 

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

Factor uses backing services to handle things like DB, image hosting and email. If you'd like to turn this example into a production app, you'll need to [set those up as well](https://factor-dev/docs/services-setup).

## What's Included

This example adds `@factor/plugin-blog`, includes it on some custom routes and customizes it with [settings](https://factor.dev/docs/settings). 

Using the settings we override a component from the plugin; which is the recommended way of doing advanced customization. 