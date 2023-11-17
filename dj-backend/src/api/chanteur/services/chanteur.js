'use strict';

/**
 * chanteur service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chanteur.chanteur');
