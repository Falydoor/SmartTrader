var url = 'http://192.168.1.2\\:8080/SmartTraderREST/';

angular.module('smartTraderServices', ['ngResource']).
factory('HubTrades', function($resource) {
    return $resource(url + 'hubtrades/:station', {
        station: '@station'
    });
}).factory('PenuryTrades', function($resource) {
    return $resource(url + 'penurytrades/:station', {
        station: '@station'
    });
}).factory('StationTrades', function($resource) {
    return $resource(url + 'stationtrades/:station', {
        station: '@station'
    });
}).factory('Hub', function() {
    return [{
        'id': 60008494,
        'name': 'AmarrHUB',
        station: {
            'id': 30002187,
            name: 'Amarr',
            region: {
                'id': 10000043,
                'name': 'DOMAIN'
            }
        }
    }, {
        'id': 60004588,
        'name': 'RensHUB',
        station: {
            'id': 30002510,
            name: 'Rens',
            region: {
                'id': 10000030,
                'name': 'HEIMATAR'
            }
        }
    }, {
        'id': 60003916,
        'name': 'SobasekiHUB',
        station: {
            'id': 30001363,
            name: 'Sobaseki',
            region: {
                'id': 10000016,
                'name': 'LONETREK'
            }
        }
    }, {
        'id': 60005686,
        'name': 'HekHUB',
        station: {
            'id': 30002053,
            name: 'Hek',
            region: {
                'id': 10000042,
                'name': 'METROPOLIS'
            }
        }
    }, {
        'id': 60011866,
        'name': 'DodixieHUB',
        station: {
            'id': 30002659,
            name: 'Dodixie',
            region: {
                'id': 10000032,
                'name': 'SINQ_LAISON'
            }
        }
    }, {
        'id': 60003760,
        'name': 'JitaHUB',
        station: {
            'id': 30000142,
            name: 'Jita',
            region: {
                'id': 10000002,
                'name': 'THE_FORGE'
            }
        }
    }];
});