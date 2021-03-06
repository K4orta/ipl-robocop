exports.config =
  # See http://brunch.readthedocs.org/en/latest/config.html for documentation.
  server:
    port: 7777
    base: '/brackets/v6/admin'
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/bracket-view.js': /^app(?=.*[\\/]bracket)/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test[\\/](?!vendor)/
        'test/javascripts/test-vendor.js': /^test[\\/](?=vendor)/
      order:
        # Files in `vendor` directories are compiled before other files
        # even if they aren't specified in order.before.
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.8.3.js',
          'vendor/scripts/underscore-1.4.4.js',
          'vendor/scripts/backbone-0.9.9.js'
        ]
        after: [
          'test/vendor/scripts/test-helper.js'
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/
        'test/stylesheets/test.css': /^test/
      order:
        before: ['vendor/styles/normalize-2.0.1.css']
        after: [
          'vendor/styles/helpers.css',
          'vendor/styles/bootstrap-responsive.min.css'
        ]
    templates:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/view-templates.js': /^app/