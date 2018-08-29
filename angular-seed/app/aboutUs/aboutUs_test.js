'use strict';

describe('myApp.aboutUs module', function() {

  beforeEach(module('myApp.aboutUs'));

  describe('aboutUs controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var aboutUsCtrl = $controller('AboutUsCtrl');
      expect(aboutUsCtrl).toBeDefined();
    }));

  });
});