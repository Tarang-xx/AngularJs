﻿const Base64 = {

    keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

    encode: function (input: any) {
        let output: any = '';
        let chr1: any, chr2: any, chr3: any = '';
        let enc1: any, enc2: any, enc3: any, enc4: any = '';
        let i = 0;

        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this.keyStr.charAt(enc1) +
                this.keyStr.charAt(enc2) +
                this.keyStr.charAt(enc3) +
                this.keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = '';
            enc1 = enc2 = enc3 = enc4 = '';
        } while (i < input.length);

        return output;
    },

    decode: function (input: any) {
        var output: any = '';
        var chr1: any, chr2: any, chr3: any = '';
        var enc1: any, enc2: any, enc3: any, enc4: any = '';
        var i = 0;

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            // window.alert('There were invalid base64 characters in the input text.\n' +
            //     'Valid base64 characters are A-Z, a-z, 0-9, ' + ', ' / ',and '='\n' +
            //     'Expect errors in decoding.');
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

        do {
            enc1 = this.keyStr.indexOf(input.charAt(i++));
            enc2 = this.keyStr.indexOf(input.charAt(i++));
            enc3 = this.keyStr.indexOf(input.charAt(i++));
            enc4 = this.keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }

            chr1 = chr2 = chr3 = '';
            enc1 = enc2 = enc3 = enc4 = '';

        } while (i < input.length);

        return output;
    }
};


export class AuthenticationService {
    static selector = 'authenticationService';
    $rootScope: any;
    $http: any;
    constructor($http: any, $rootScope: any) {

        'ngInject';
       
        this.$rootScope = $rootScope;
        this.$http = $http;
    }


    Login(username: any, password: any) {

      return new Promise(function (resolve: any, reject: any) {
            let response: any;
            if (username !== null && password !== null) {
                response = { success: true };
            }
            setTimeout(function () {
                resolve(response);
            }, 1000);
        });


    }
    SetCredentials(username: any, password: any) {
        var authdata = Base64.encode(username + ':' + password);

        this.$rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        // set default auth header for http requests
        // this.$http.defaults.headers.common.Authorization = 'Basic ' + authdata;

        // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
        var cookieExp = new Date();
        cookieExp.setDate(cookieExp.getDate() + 7);
        
    }

    ClearCredentials() {
        this.$rootScope.globals = {};
        // this.$http.defaults.headers.common.Authorization = 'Basic';
    }
}


