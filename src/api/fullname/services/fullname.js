'use strict';

/**
 * fullname service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fullname.fullname');
