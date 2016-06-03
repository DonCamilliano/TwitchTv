'use strict';
angular.module('TwitchtvApp', [])


.controller('TwitchtvCtrl', function($scope, $http) {
    var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[0])
        .then(function(data) {
            $scope.name0 = arr[0];
            if (data.stream == null) {
                $scope.status0 = 'Offline';
                $scope.pclass0 = 'info';
            } else if (data.stream !== null) {
                $scope.status0 = 'Online'; 
                $scope.game0 = data.stream.game;
                $scope.pclass0 = 'success';
            }
        }, function(response) {
            $scope.name0 = arr[0];
            $scope.status0 = 'Account closed';
            $scope.pclass0 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[1])
        .then(function(data) {
            $scope.name1 = arr[1];
            if (data.stream == null) {
                $scope.status1 = 'Offline';
                $scope.pclass1 = 'info';
            } else if (data.stream !== null) {
                $scope.status1 = 'Online';
                $scope.game1 = data.stream.game;
                $scope.pclass1 = 'success';
            }
        }, function(response) {
            $scope.name1 = arr[1];
            $scope.status1 = 'Account closed';
            $scope.pclass1 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[2])
        .then(function(data) {
            $scope.name2 = arr[2];
            if (data.stream == null) {
                $scope.status2 = 'Offline';
                $scope.pclass2 = 'info';
            } else if (data.stream !== null) {
                $scope.status2 = 'Online';
                $scope.game2 = data.stream.game;
                $scope.pclass2 = 'success';
            }
        }, function(response) {
            $scope.name2 = arr[2];
            $scope.status2 = 'Account closed';
            $scope.pclass2 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[3])
        .then(function(data) {
            $scope.name3 = arr[3];
            if (data.stream == null) {
                $scope.status3 = 'Offline';
                $scope.pclass3 = 'info';
            } else if (data.stream !== null) {
                $scope.status3 = 'Online';
                $scope.game3 = data.stream.game;
                $scope.pclass3 = 'success';
            }
        }, function(response) {
            $scope.name3 = arr[3];
            $scope.status3 = 'Account closed';
            $scope.pclass3 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[4])
        .then(function(data) {
            $scope.name4 = arr[4];
            if (data.stream == null) {
                $scope.status4 = 'Offline';
                $scope.pclass4 = 'info';
            } else if (data.stream !== null) {
                $scope.status4 = 'Online';
                $scope.game4 = data.stream.game;
                $scope.pclass4 = 'success';
            }
        }, function(response) {
            $scope.name4 = arr[4];
            $scope.status4 = 'Account closed';
            $scope.pclass4 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[5])
        .then(function(data) {
            $scope.name5 = arr[5];
            if (data.stream == null) {
                $scope.status5 = 'Offline';
                $scope.pclass5 = 'info';
            } else if (data.stream !== null) {
                $scope.status5 = 'Online';
                $scope.game5 = data.stream.game;
                $scope.pclass5 = 'success';
            }
        }, function(response) {
            $scope.name5 = arr[5];
            $scope.status5 = 'Account closed';
            $scope.pclass5 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[6])
        .then(function(data) {
            $scope.name6 = arr[6];
            if (data.stream == null) {
                $scope.status6 = 'Offline';
                $scope.pclass6 = 'info';
            } else if (data.stream !== null) {
                $scope.status6 = 'Online';
                $scope.game6 = data.stream.game;
                $scope.pclass6 = 'success';
            }
        }, function(response) {
            $scope.name6 = arr[6];
            $scope.status6 = 'Account closed';
            $scope.pclass6 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[7])
        .then(function(data) {
            $scope.name7 = arr[7];
            if (data.stream == null) {
                $scope.status7 = 'Offline';
                $scope.pclass7 = 'info';
            } else if (data.stream !== null) {
                $scope.status7 = 'Online';
                $scope.game7 = data.stream.game;
                $scope.pclass7 = 'success';
            }
        }, function(response) {
            $scope.name7 = arr[7];
            $scope.status7 = 'Account closed';
            $scope.pclass7 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[8])
        .then(function(data) {
            $scope.name8 = arr[8];
            if (data.stream == null) {
                $scope.status8 = 'Offline';
                $scope.pclass8 = 'info';
            } else if (data.stream !== null) {
                $scope.status8 = 'Online';
                $scope.game8 = data.stream.game;
                $scope.pclass8 = 'success';
            }
        }, function(response) {
            $scope.name8 = arr[8];
            $scope.status8 = 'Account closed';
            $scope.pclass8 = 'danger';
        });
        $http.get('https://api.twitch.tv/kraken/streams/' + arr[9])
        .then(function(data) {
            $scope.name9 = arr[9];
            if (data.stream == null) {
                $scope.status9 = 'Offline';
                $scope.pclass9 = 'info';
            } else if (data.stream !== null) {
                $scope.status9 = 'Online';
                $scope.game9 = data.stream.game;
                $scope.pclass9 = 'success';
            }
        }, function(response) {
            $scope.name9 = arr[9];
            $scope.status9 = 'Account closed';
            $scope.pclass9 = 'danger';
        });
});