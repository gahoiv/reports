/**
 * @author vgahoi
 */
(function () {
  'use strict';

  angular.module('Reports.pages.reports', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('reports', {
          url: '/reports',
          templateUrl: 'app/pages/reports/reports.html',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
