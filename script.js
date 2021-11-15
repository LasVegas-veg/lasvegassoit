setTimeout(function() {
    var adsParams = {"ad_unit_id":135394,"ad_unit_hash":"6a506fd52322cd9f98b98f3c85169bfe"};
    function vkAdsInit() {
      VK.Widgets.Ads('vk_ads_135394', {}, adsParams);
    }
    if (window.VK && VK.Widgets) {
      vkAdsInit();
    } else {
      if (!window.vkAsyncInitCallbacks) window.vkAsyncInitCallbacks = [];
      vkAsyncInitCallbacks.push(vkAdsInit);
      var protocol = ((location.protocol === 'https:') ? 'https:' : 'http:');
      var adsElem = document.getElementById('vk_ads_135394');
      var scriptElem = document.createElement('script');
      scriptElem.type = 'text/javascript';
      scriptElem.async = true;
      scriptElem.src = protocol + '//vk.com/js/api/openapi.js?169';
      adsElem.parentNode.insertBefore(scriptElem, adsElem.nextSibling);
    }
  }, 0);
