(function() {
  var $, no_trans, num, str1, str2, str3_plural, str3_singular, t;

  $ = jQuery;

  t = new window.TranslateJS(window.translations, 'pt_br');

  str1 = t.trans('I like lasagna');

  str2 = t.trans('The number is {{ num }} !', {
    num: 4
  });

  num = 1;

  str3_singular = t.trans_p('I am one programmer', 'We are {{ num }} programmers', num, {
    num: num
  });

  num = 3;

  str3_plural = t.trans_p('I am one programmer', 'We are {{ num }} programmers', num, {
    num: num
  });

  no_trans = t.trans('This string has no translation');

  ($('#translations')).html("<div>" + str1 + "</div>\n<div>" + str2 + "</div>\n<div>" + str3_singular + "</div>\n<div>" + str3_plural + "</div>\n<div>" + no_trans + "</div>");

}).call(this);
