/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  config.env = config.env || {}
  config.env.PHPTRAVEL_URL = process.env.PHPTRAVEL_URL
  config.env.EMAIL_PHPTRAVEL = process.env.EMAIL_PHPTRAVEL
  config.env.PASSWORD_PHPTRAVEL = process.env.AGENT_ADMIN_PASSWORD

  return config

}