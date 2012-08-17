(function() {
  var TranslateJS;

  TranslateJS = (function() {

    function TranslateJS(translations, lang) {
      this.translations = translations;
      this.lang = lang != null ? lang : 'en_us';
      _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
      };
    }

    TranslateJS.prototype.get_trans = function(str) {
      var translated;
      translated = this.translations[this.lang][str];
      if (!translated) translated = str;
      return translated;
    };

    TranslateJS.prototype.trans = function(str, obj) {
      if (obj == null) obj = {};
      return (_.template(this.get_trans(str)))(obj);
    };

    TranslateJS.prototype.trans_p = function(str, str_p, num, obj) {
      var st;
      st = num > 1 ? str_p : str;
      return (_.template(this.get_trans(st)))(obj);
    };

    return TranslateJS;

  })();

  window.TranslateJS = TranslateJS;

}).call(this);
