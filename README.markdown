# Jekyll-Grunt Static Site Authoring

## Requirements

* [Jekyll](http://jekyllrb.com/)
* [NodeJS](https://nodejs.org/) + npm
* HTTP Server of your choice

## Initial Setup
* Run `npm install` in the project directory, and you're ready to go!

## Development Setup

* In the project root, run `python -m SimpleHTTPServer 2345` (or your HTTP server of choice)
* Run `grunt watch:js` and `grunt watch:css` for persistant asset creation
* Run `jekyll build --watch` for persistant site regeneration on save.

## Deploying

1. `$ grunt prepare`
2. `$ jekyll build --config <name_of_your_production_config_file>`
3. You're ready to deploy!

## Author
jekyll-grunt-scaffold is maintained by Jason Gorelick (@jqgorelick)

## License
Copyright (c) 2014-2015 Jason Gorelick. Released under an [MIT License](LICENSE.markdown).
