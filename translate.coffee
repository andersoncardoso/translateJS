class TranslateJS
    constructor: (@translations, @lang='en_us') ->
       _.templateSettings =
          interpolate : /\{\{(.+?)\}\}/g

    get_trans: (str) ->
        translated = @translations[@lang][str]
        if not translated
            translated = str
        translated

    trans: (str, obj={}) ->
        (_.template @get_trans(str)) obj

    trans_p: (str, str_p, num, obj) ->
        st = if num > 1 then str_p else str
        (_.template @get_trans(st)) obj

window.TranslateJS = TranslateJS
