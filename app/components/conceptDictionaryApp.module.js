/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import angular from 'angular';
import ngRoute from 'angular-route';
import openmrsContribUiCommons from 'openmrs-contrib-uicommons';

import messagesEn from '../translation/messages_en.json';
import messagesEs from '../translation/messages_es.json';

import ConceptMappingsService from './conceptMappingsService/conceptMappings.service.js';
import ConceptsService from './conceptsService/concepts.service.js';

import IndexController from './index/index.controller.js';
import IndexMenuController from './indexMenu/indexMenu.controller.js';
import DrugsListController from './drugList/drugList.controller.js';
import DrugEditController from './drugEdit/drugEdit.controller.js';
import DatatypeListController from './datatypeList/datatypeList.controller.js';
import DatatypeDetailsController from './datatypeDetails/datatypeDetails.controller.js';
import ConceptViewController from './conceptView/conceptView.controller.js';
import ConceptStopWordListController from './conceptStopWordList/conceptStopWordList.controller.js';
import ConceptStopWordAddController from './conceptStopWordAdd/conceptStopWordAdd.controller.js';
import ConceptSearchController from './conceptSearch/conceptSearch.controller.js';
import ConceptAddController from './conceptAdd/conceptAdd.controller.js';
import ClassListController from './classList/classList.controller.js';
import ClassEditController from './classEdit/classEdit.controller.js';
import ReferenceEditController from './referenceEdit/referenceEdit.controller.js';
import ReferenceSearchController from './referenceSearch/referenceSearch.controller.js';
import SourceEditController from './sourceEdit/sourceEdit.controller.js';
import SourcesListController from './sourceList/sourceList.controller.js';

import conceptTableComponent from './conceptTable/conceptTable.component.js';
import conceptUniqueNameComponent from './conceptUniqueName/conceptUniqueName.component.js';
import mappingsTableComponent from './mappingsTable/mappingsTable.component.js';

import conceptDictionaryAppConfig from './conceptDictionaryApp.config.js';

export default angular
    .module('conceptDictionaryApp',
		['ngRoute',
		 'openmrs-contrib-uicommons'])
		 
	.factory('conceptsService', ConceptsService)
	.factory('conceptMappingsService', ConceptMappingsService)
		 
	.controller('ClassEditController', ClassEditController)
	.controller('ClassListController', ClassListController)
	.controller('ConceptAddController', ConceptAddController)
	.controller('ConceptSearchController', ConceptSearchController)
	.controller('ConceptStopWordAddController', ConceptStopWordAddController)
	.controller('ConceptStopWordListController', ConceptStopWordListController)
	.controller('ConceptViewController', ConceptViewController)
	.controller('DatatypeDetailsController', DatatypeDetailsController)
	.controller('DatatypeListController', DatatypeListController)
	.controller('DrugEditController', DrugEditController)
	.controller('DrugsListController', DrugsListController)
	.controller('IndexController', IndexController)
	.controller('IndexMenuController', IndexMenuController)
	.controller('ReferenceEditController', ReferenceEditController)
	.controller('ReferenceSearchController', ReferenceSearchController)
	.controller('SourceEditController', SourceEditController)
	.controller('SourcesListController', SourcesListController)
	
	.component('conceptTable', {
			  template: require('./conceptTable/conceptTable.html'),
			  controller: conceptTableComponent,
			  controllerAs : 'vm',
			  bindings: {
			    onUpdate: '&',
			    members: '<'
			  }})
	.component('conceptUniqueName', {
		  template: require('./conceptUniqueName/conceptUniqueName.html'),
		  controller: conceptUniqueNameComponent,
		  controllerAs : 'vm',
		  bindings: {
		    conceptUuid: '<',
		    name: '<',
		    onUpdate: '&' 
		  }})
    .component('mappingsTable', {
          template: require('./mappingsTable/mappingsTable.html'),
          controller: mappingsTableComponent,
          controllerAs : 'vm',
          bindings: {
            conceptUuid: '<',
            onUpdate: '&',
            editCountUpdate: '&'
          }})
	.config(['$routeProvider', conceptDictionaryAppConfig])
	.config(['openmrsTranslateProvider', translateConfig]);

function translateConfig(openmrsTranslateProvider) {
	openmrsTranslateProvider.addTranslations('en', messagesEn);
	openmrsTranslateProvider.addTranslations('es', messagesEs);
}