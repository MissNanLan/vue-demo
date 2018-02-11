!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.__vee_validate_locale__fr=e.__vee_validate_locale__fr||{},e.__vee_validate_locale__fr.js=t())}(this,function(){"use strict";var e={name:"fr",messages:{_default:function(e){return e+" n'est pas valide."},after:function(e,t){return e+" doit être postérieur à "+t[0]+"."},alpha_dash:function(e){return e+" ne peut contenir que des caractères alpha-numériques, tirets ou soulignés."},alpha_num:function(e){return e+" ne peut contenir que des caractères alpha-numériques."},alpha_spaces:function(e){return e+" ne peut contenir que des lettres ou des espaces."},alpha:function(e){return e+" ne peut contenir que des lettres."},before:function(e,t){return e+" doit être antérieur à "+t[0]+"."},between:function(e,t){return e+" doit être compris entre "+t[0]+" et "+t[1]+"."},confirmed:function(e,t){return e+" ne correspond pas à "+t[0]+"."},credit_card:function(e){return e+" est invalide."},date_between:function(e,t){return e+" doit être situé entre "+t[0]+" et "+t[1]+"."},date_format:function(e,t){return e+" doit être au format "+t[0]+"."},decimal:function(e,t){void 0===t&&(t=[]);var n=t[0];return void 0===n&&(n="*"),e+" doit être un nombre et peut contenir "+("*"===n?"":n)+" décimales."},digits:function(e,t){return e+" doit être un nombre entier de "+t[0]+" chiffres."},dimensions:function(e,t){return e+" doit avoir une taille de "+t[0]+" pixels par "+t[1]+" pixels."},email:function(e){return e+" doit être une adresse e-mail valide."},ext:function(e){return e+" doit être un fichier valide."},image:function(e){return e+" doit être une image."},in:function(e){return e+" doit être une valeur valide."},ip:function(e){return e+" doit être une adresse IP."},max:function(e,t){return e+" ne peut pas contenir plus de "+t[0]+" caractères."},max_value:function(e,t){return e+" doit avoir une valeur de "+t[0]+" ou moins."},mimes:function(e){return e+" doit avoir un type MIME valide."},min:function(e,t){return e+" doit contenir au minimum "+t[0]+" caractères."},min_value:function(e,t){return e+" doit avoir une valeur de "+t[0]+" ou plus."},not_in:function(e){return e+" doit être une valeur valide."},numeric:function(e){return e+" ne peut contenir que des chiffres."},regex:function(e){return e+" est invalide."},required:function(e){return e+" est obligatoire."},size:function(e,t){return e+" doit avoir un poids inférieur "+function(e){var t=0==(e=1024*Number(e))?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}(t[0])+"."},url:function(e){return e+" n'est pas une URL valide."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.addLocale(e),e});