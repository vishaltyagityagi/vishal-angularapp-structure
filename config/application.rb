require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module VishalAng
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true
    config.angular_templates.module_name    = 'templates'
    config.angular_templates.inside_paths   = ['app/assets/javascripts/angular']
  end
end