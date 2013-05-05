// Create a new module
var smartTrader = angular.module('smartTrader', ['smartTraderServices'], function() {});

// Hubs controller

function hubsCtr($scope, Hub) {
    $scope.hubs = Hub;
    $scope.hub = Hub[5];
    $scope.refresh = function() {
        $scope.$emit('hubChanged', $scope.hub);
    };
}

// Trades controller

function tradesCtr($scope, $rootScope, StationTrades, PenuryTrades, HubTrades, Hub) {
    $scope.hub = Hub[5];
    refreshTrades($scope, HubTrades, StationTrades, PenuryTrades);
    $scope.getClass = function(trade) {
        return trade.user !== undefined ? 'error' : '';
    }
    $rootScope.$on('hubChanged', function(event, hub) {
        $scope.hub = hub;
        refreshTrades($scope, HubTrades, StationTrades, PenuryTrades);
    });
}

// Refresh trades

function refreshTrades(scope, HubTrades, StationTrades, PenuryTrades) {
    scope.hubTrades = angular.fromJson(HubTrades.get({
        station: scope.hub.id
    }));
    scope.stationTrades = angular.fromJson(StationTrades.get({
        station: scope.hub.id
    }));
    scope.penuryTrades = angular.fromJson(PenuryTrades.get({
        station: scope.hub.id
    }));
}