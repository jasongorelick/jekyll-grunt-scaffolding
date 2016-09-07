## This repository is not actively maintained.

--------

# Jekyll-Grunt Static Site Authoring

## Prerequisites

- This project requires [node.js](https://nodejs.org/en/) and [ruby](https://www.ruby-lang.org/en/). Versions are specified in the package.json and Gemfile respectively.
- The site that is generated can be deployed to any host that supports static asset serving.

## Setup
 
1. Run `bundle install`
2. Run `npm install`

**Config options:**

By default, package.json contains a config var for the jekyll config file (defaults to _config.yml). See [npm docs](https://docs.npmjs.com/misc/config#per-package-config-settings) for more details on updating package.json configs.

## Development

Run `npm run dev` to run jekyll server and watch CSS and JS asset changes and building.

## Deploying

1. Run `npm run build`
2. Deploy `_site` or your custom dist folder!

## Author

jekyll-grunt-scaffold was assembled by Jason Gorelick (@jqgorelick).

## License
Copyright (c) 2014-2016 Jason Gorelick. Released under an [MIT License](LICENSE.markdown).
