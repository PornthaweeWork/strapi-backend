'use strict';

/**
 * fullname router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fullname.fullname');
