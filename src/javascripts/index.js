var LOGLEVEL = {
  ERROR: { value: 0 },
  WARNING: { value: 1 },
  INFO: { value: 2 },
  DEBUG: { value: 3 },
  VERBOSE: { value: 4 }
};

var app = {
  logLevel: LOGLEVEL.WARNING,
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    // navigator.app.overrideButton("backbutton", true);
    // navigator.app.overrideButton("menubutton", true);
    document.addEventListener("backbutton", this.onBackKeyDown.bind(this), false);
    document.addEventListener("pause", this.onPause.bind(this), false);
    document.addEventListener("resume", this.onResume.bind(this), false);
    document.addEventListener("menubutton", this.onMenuKeyDown.bind(this), false);
    $.material.init();
    $(".version-display").html("v 0.1.0");

    if(app.storage.firstStart.get() == null){
      $(".welcome-message").show();
      app.settings.toggleSettings(true);
      app.storage.firstStart.set(true);
    }

    if(app.storage.settings.showNSFW.get() == "true"){
      app.settings.changeNSFW(true);
      $("#checkbox-nsfw").prop("checked", "checked");
    }

    if(app.storage.settings.showNotifications.get() == "true"){
      app.settings.changeNotifications(true);
      $("#checkbox-notifications").prop("checked", "checked");
    }

    if(app.storage.settings.notificationsFrequency.get() != null){
      $("#select-frequency").val(app.storage.settings.notificationsFrequency.get());
    }

    app.api.getJoke(null);
  },
  onBackKeyDown: function(){

  },
  onPause: function(){

  },
  onResume: function(){

  },
  onMenuKeyDown: function(){

  }
};

app.initialize();
