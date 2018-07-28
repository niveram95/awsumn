angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("item.html","");
$templateCache.put("home/home.html","HOME");
$templateCache.put("layout/app-view.html","<app-header></app-header>\r\n\r\n<div ui-view></div>");
$templateCache.put("layout/header.html","<!-- TOP BAR -->\r\nXD");}]);