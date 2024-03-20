if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  var _e, _f;
  "use strict";
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$h = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return unescape(`%u${code2.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$7], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/khons-charge/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$g = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$6], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/khons-charge/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$f = {
    __name: "menu-card",
    props: {
      menu: {
        type: Array,
        default: () => []
      }
    },
    emits: ["menuItemClick"],
    setup(__props, { emit: emits }) {
      function menuItemClick(index2) {
        emits("menuItemClick", index2);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "menu-card" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.menu, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: item,
                class: "menu-item",
                onClick: ($event) => menuItemClick(index2)
              }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: item.img,
                  mode: "widthFix"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  { class: "title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-0fc97039"], ["__file", "D:/khons-charge/components/menu-card/menu-card.vue"]]);
  const _sfc_main$e = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            vue.toDisplayString($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            vue.toDisplayString($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "uni-section-content",
          style: vue.normalizeStyle({ padding: $options._padding })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$5], ["__scopeId", "data-v-637fd36b"], ["__file", "D:/khons-charge/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount,
    array,
    carNo,
    chinese,
    code,
    contains,
    date,
    dateISO,
    digits,
    email,
    empty,
    enOrNum,
    func,
    idCard,
    image,
    jsonString,
    landline,
    letter,
    mobile,
    number,
    object,
    promise,
    range: range$1,
    rangeLength,
    regExp,
    string,
    url,
    video
  }, Symbol.toStringTag, { value: "Module" }));
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uv-ui-tools/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uv-ui-tools/libs/function/index.js:250", `uvui提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "uv-form-item");
    const form = $parent.call(instance, "uv-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a;
    const pages2 = getCurrentPages();
    const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props2 = {},
    config = {},
    color = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$uv;
    uni.$uv.config = deepMerge2(uni.$uv.config, config);
    uni.$uv.props = deepMerge2(uni.$uv.props, props2);
    uni.$uv.color = deepMerge2(uni.$uv.color, color);
    uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex);
  }
  const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid,
    os,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams,
    random,
    randomArray,
    range,
    setConfig,
    setProperty,
    sleep,
    sys,
    timeFormat,
    timeFrom,
    toast,
    trim,
    type2icon
  }, Symbol.toStringTag, { value: "Module" }));
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false,
        // 是否需要拦截
        events: {}
        // 页面间通信接口，用于监听被打开页面发送到当前页面的数据。hbuilderx 2.8.9+ 开始支持。
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = deepMerge(this.config, options);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig.url === page())
        return;
      if (params.intercept) {
        mergeConfig.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = deepMerge(this.config, mergeConfig);
      if (typeof mergeConfig.intercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          mergeConfig.intercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    // 执行路由跳转
    openPage(config) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
        events
      } = config;
      if (config.type == "navigateTo" || config.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration,
          events
        });
      }
      if (config.type == "redirectTo" || config.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config.type == "switchTab" || config.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config.type == "reLaunch" || config.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config.type == "navigateBack" || config.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$uv.getRect = this.$uvGetRect;
    },
    created() {
      this.$uv.getRect = this.$uvGetRect;
    },
    computed: {
      $uv() {
        var _a, _b;
        return {
          ...index,
          test,
          route,
          debounce,
          throttle,
          unit: (_b = (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
        };
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `uv-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uvGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$uv.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uvOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    },
    // 兼容vue3
    unmounted() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const props = {
    props: {
      // 激活部分的颜色
      activeColor: {
        type: String,
        default: "#19be6b"
      },
      inactiveColor: {
        type: String,
        default: "#ececec"
      },
      // 进度百分比，数值
      percentage: {
        type: [String, Number],
        default: 0
      },
      // 是否在进度条内部显示百分比的值
      showText: {
        type: Boolean,
        default: true
      },
      // 进度条的高度，单位px
      height: {
        type: [String, Number],
        default: 12
      },
      ...(_f = (_e = uni.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.lineProgress
    }
  };
  const _sfc_main$d = {
    name: "uv-line-progress",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        lineWidth: 0
      };
    },
    watch: {
      percentage(n) {
        this.resizeProgressWidth();
      }
    },
    computed: {
      progressStyle() {
        let style = {};
        style.width = this.lineWidth;
        style.backgroundColor = this.activeColor;
        style.height = this.$uv.addUnit(this.$uv.getPx(this.height));
        return style;
      },
      innserPercentage() {
        return this.$uv.range(0, 100, this.percentage);
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.$uv.sleep(20).then(() => {
          this.resizeProgressWidth();
        });
      },
      getProgressWidth() {
        return this.$uvGetRect(".uv-line-progress__background");
      },
      resizeProgressWidth() {
        this.getProgressWidth().then((size) => {
          const {
            width
          } = size;
          this.lineWidth = width * this.innserPercentage / 100 + "px";
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uv-line-progress",
        style: vue.normalizeStyle([_ctx.$uv.addStyle(_ctx.customStyle)])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "uv-line-progress__background",
            ref: "uv-line-progress__background",
            style: vue.normalizeStyle([{
              backgroundColor: _ctx.inactiveColor,
              height: _ctx.$uv.addUnit(_ctx.$uv.getPx(_ctx.height))
            }])
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode(
          "view",
          {
            class: "uv-line-progress__line",
            style: vue.normalizeStyle([$options.progressStyle])
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              _ctx.showText && _ctx.percentage >= 10 ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "uv-line-progress__text"
                },
                vue.toDisplayString($options.innserPercentage + "%"),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ], true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$4], ["__scopeId", "data-v-435a5d4d"], ["__file", "D:/khons-charge/uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.vue"]]);
  const _sfc_main$c = {
    __name: "charge-list",
    props: {
      stationInfo: {
        type: Object,
        default: () => {
        }
      }
    },
    setup(__props) {
      const props2 = __props;
      const percentage = vue.computed(() => props2.stationInfo.free / props2.stationInfo.total * 100);
      return (_ctx, _cache) => {
        const _component_uv_line_progress = resolveEasycom(vue.resolveDynamicComponent("uv-line-progress"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "station_list" }, [
          vue.createElementVNode("view", { class: "img" }, [
            vue.createElementVNode("image", {
              src: __props.stationInfo.img,
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode(
              "view",
              { class: "name" },
              vue.toDisplayString(__props.stationInfo.name),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "address" },
              vue.toDisplayString(__props.stationInfo.address),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "price" }, [
              vue.createElementVNode("view", { class: "elec_charge" }, [
                vue.createTextVNode(" 电费： "),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(__props.stationInfo.elec_charge),
                  1
                  /* TEXT */
                ),
                vue.createTextVNode(" 元/度 ")
              ]),
              vue.createElementVNode("view", { class: "serv_charge" }, [
                vue.createTextVNode(" 服务费： "),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(__props.stationInfo.serv_charge),
                  1
                  /* TEXT */
                ),
                vue.createTextVNode(" 元 ")
              ])
            ]),
            vue.createElementVNode("view", { class: "status" }, [
              vue.createElementVNode("view", { class: "station_info" }, [
                vue.createElementVNode(
                  "text",
                  { style: { "margin-right": "20rpx" } },
                  "空闲" + vue.toDisplayString(__props.stationInfo.free) + "/" + vue.toDisplayString(__props.stationInfo.total),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(__props.stationInfo.type),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_uv_line_progress, {
                  class: "progress",
                  height: "8",
                  showText: false,
                  percentage: vue.unref(percentage),
                  activeColor: "#3c9cff",
                  inactiveColor: "#E0E0E0"
                }, null, 8, ["percentage"])
              ]),
              vue.createElementVNode("view", { class: "distance" }, [
                vue.createElementVNode("i", { class: "iconfont icon-navigation" }),
                vue.createElementVNode("text", null, "3km")
              ])
            ])
          ])
        ]);
      };
    }
  };
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-c11a1603"], ["__file", "D:/khons-charge/components/charge-list/charge-list.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        TabBarList: [
          {
            index: 0,
            name: "首页",
            img: "/static/images/tabbar/home.png",
            acImg: "/static/images/tabbar/home_select.png"
          },
          {
            index: 1,
            name: "扫码充电",
            img: "/static/images/tabbar/scaner.png",
            acImg: "/static/images/tabbar/scaner.png"
          },
          {
            index: 2,
            name: "我的",
            img: "/static/images/tabbar/mine.png",
            acImg: "/static/images/tabbar/mine_act.png"
          }
        ],
        codeheight: 0,
        isOverall: 0,
        phoneModel: ""
      };
    },
    props: {
      tabBarShow: {
        type: Number,
        default: 0
      }
    },
    // mounted() {
    // 	try {
    // 	    const res = uni.getSystemInfoSync();
    // 			let that = this;
    // 	    // 获取系统信息
    // 	    uni.getSystemInfo({
    // 	    	success(res) {
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:59',res.brand) //手机牌子
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:60',res.model) //手机型号
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:61',res.screenWidth) //屏幕宽度
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:62',res.screenHeight) //屏幕高度
    // 					that.codeheight = Math.round(res.screenHeight);
    // 					that.phoneModel =res.model
    // 					if(res.model.search('iPhone')){
    // 						that.isOverall = 0;
    // 					}else if(Math.round(res.screenHeight)>740){
    // 					 that.isOverall = 1;
    // 					}
    // 					__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:70',that.isOverall);
    // 	    	}
    // 	    });
    // 	} catch (e) {
    // 	    // error
    // 	}
    // },
    methods: {
      /**
       * @param {Object} item
       * @param {Number} index
       */
      onTabBar(item, index2) {
        switch (index2) {
          case 0:
            uni.switchTab({
              url: "/pages/home/home"
            });
            break;
          case 1:
            uni.switchTab({
              url: "/pages/scan/scan"
            });
            break;
          case 2:
            uni.switchTab({
              url: "/pages/user/user"
            });
            break;
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page-total" }, [
      vue.createElementVNode("view", { class: "tab-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.TabBarList, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "list",
              onClick: ($event) => $options.onTabBar(item, index2),
              style: vue.normalizeStyle({ marginTop: index2 == 1 ? "-18px" : "0px" }),
              key: index2
            }, [
              vue.withDirectives(vue.createElementVNode("image", {
                class: "img",
                src: item.acImg,
                mode: "widthFix",
                style: vue.normalizeStyle({ width: index2 == 1 ? "60px" : "24px", borderRadius: index2 == 1 ? "50%" : "0px", boxShadow: index2 == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none" })
              }, null, 12, ["src"]), [
                [vue.vShow, $props.tabBarShow === index2]
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                class: "img",
                src: item.img,
                mode: "widthFix",
                style: vue.normalizeStyle({ width: index2 == 1 ? "60px" : "24px", borderRadius: index2 == 1 ? "50%" : "0px", boxShadow: index2 == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none" })
              }, null, 12, ["src"]), [
                [vue.vShow, $props.tabBarShow != index2]
              ]),
              vue.createCommentVNode(" background: (index == 1) ?  'red' : '' "),
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass({ "action": $props.tabBarShow === index2 }),
                  style: vue.normalizeStyle({ marginTop: index2 == 1 ? "4px" : "0px" })
                },
                vue.toDisplayString(item.name),
                7
                /* TEXT, CLASS, STYLE */
              )
            ], 12, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$3], ["__scopeId", "data-v-61f40987"], ["__file", "D:/khons-charge/uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue"]]);
  const _sfc_main$a = {
    __name: "HomeBanner",
    props: {
      banners: {
        type: Array,
        default: () => []
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "banner" }, [
          vue.createElementVNode("swiper", {
            class: "swiper",
            circular: "",
            "indicator-dots": true,
            autoplay: true
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.banners, (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  key: item,
                  onClick: ($event) => _ctx.handleItemClick(item)
                }, [
                  vue.createElementVNode("image", {
                    class: "swiper-item",
                    src: item.url,
                    mode: "aspectFill"
                  }, null, 8, ["src"])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const HomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-df9ec71b"], ["__file", "D:/khons-charge/pages/home/cpns/HomeBanner.vue"]]);
  var isVue2 = false;
  function set$1(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.getCurrentInstance() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url2, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url2) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url2, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url2 = reader.result;
        if (typeof url2 !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url2;
        } else {
          location.assign(url2);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url2 = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url2);
      else
        location.href = url2;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url2);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error2) {
                    getters[key] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
          // devtools custom properties
        },
        partialStore
        // must be added later
        // setupStore
      )
    );
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set$1(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set$1(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set$1(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set$1(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || currentInstance && vue.inject(piniaSymbol, null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const useMainStore = defineStore(
    "main",
    () => {
      const currentCity = vue.ref("成都");
      function setCity(newCity) {
        currentCity.value = newCity;
      }
      return {
        currentCity,
        setCity
      };
    },
    {
      unistorage: true
      // 开启后对 state 的数据读写都将持久化
    }
  );
  const __default__$1 = {
    onReady() {
      uni.hideTabBar();
    }
  };
  const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$1, {
    __name: "home",
    setup(__props) {
      const mainStore = useMainStore();
      vue.onMounted(() => {
        uni.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: "#e0ecfc"
        });
      });
      function chooseCity() {
        uni.navigateTo({
          url: "/pages/city/city"
        });
      }
      function searchBarClick() {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      }
      const banners = [
        {
          url: "/static/images/banner/banner1.jpg"
        },
        {
          url: "/static/images/banner/banner2.jpg"
        },
        {
          url: "/static/images/banner/banner3.jpg"
        }
      ];
      const menu = [
        {
          img: "/static/images/menu/scan.png",
          title: "我要充电"
        },
        {
          img: "/static/images/menu/wallet.png",
          title: "我要充值"
        }
      ];
      const stationList = [
        {
          img: "/static/images/station_1.jpg",
          name: "东方丽景充电站",
          address: "四川省成都市锦江区海桐街354号",
          elec_charge: "0.6",
          serv_charge: "0.1",
          free: "8",
          total: "20",
          type: "慢充"
        },
        {
          img: "/static/images/station_2.jpg",
          name: "环球中心充电站",
          address: "四川省成都市武侯区环球东路",
          elec_charge: "0.65",
          serv_charge: "0.2",
          free: "18",
          total: "20",
          type: "快充"
        },
        {
          img: "/static/images/station_3.jpg",
          name: "成都中国核动力润诚达快充站",
          address: "四川省成都市武侯区白云街55号",
          elec_charge: "0.8",
          serv_charge: "0.1",
          free: "2",
          total: "15",
          type: "快充"
        },
        {
          img: "/static/images/station_4.jpg",
          name: "润诚达武侯万达充电站",
          address: "四川省成都市武侯区聚龙路372号",
          elec_charge: "0.6",
          serv_charge: "0.1",
          free: "4",
          total: "12",
          type: "慢充"
        }
      ];
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
        const _component_menu_card = resolveEasycom(vue.resolveDynamicComponent("menu-card"), __easycom_0$2);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_2);
        const _component_charge_list = resolveEasycom(vue.resolveDynamicComponent("charge-list"), __easycom_3);
        const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createCommentVNode(" 搜索栏 "),
            vue.createElementVNode("view", { class: "search" }, [
              vue.createElementVNode("view", {
                class: "city",
                onClick: chooseCity
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "current_city" },
                  vue.toDisplayString(vue.unref(mainStore).currentCity),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("i", { class: "iconfont icon-triangle" })
              ]),
              vue.createVNode(_component_uni_search_bar, {
                class: "search_bar",
                placeholder: "输入目的地/电站名称",
                radius: "20",
                bgColor: "#ffffff",
                readonly: "",
                onClick: searchBarClick
              })
            ]),
            vue.createCommentVNode(" 轮播图 "),
            vue.createVNode(HomeBanner, { banners })
          ]),
          vue.createVNode(_component_menu_card, { menu }),
          vue.createCommentVNode(" 列表区域 "),
          vue.createElementVNode("view", { class: "charge_station" }, [
            vue.createElementVNode("view", { class: "top_area" }, [
              vue.createVNode(_component_uni_section, {
                title: "附近充电站",
                type: "line"
              }),
              vue.createElementVNode("view", { class: "mode" }, [
                vue.createElementVNode("i", { class: "iconfont icon-map" }),
                vue.createElementVNode("text", { class: "mode" }, "地图模式")
              ])
            ]),
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(stationList, (itemInfo) => {
                return vue.createVNode(_component_charge_list, {
                  key: itemInfo.name,
                  stationInfo: itemInfo
                }, null, 8, ["stationInfo"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 自定义tabar "),
          vue.createVNode(_component_cc_myTabbar, { tabBarShow: 0 })
        ]);
      };
    }
  });
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "D:/khons-charge/pages/home/home.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    onReady() {
      uni.hideTabBar();
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
      vue.createElementVNode("view", null, "scan"),
      vue.createVNode(_component_cc_myTabbar, { tabBarShow: 1 })
    ]);
  }
  const PagesScanScan = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__file", "D:/khons-charge/pages/scan/scan.vue"]]);
  const _imports_0$1 = "/static/images/avatar.png";
  const _sfc_main$7 = {
    __name: "UserInfo",
    emits: ["setClick", "walletItemClick"],
    setup(__props, { emit: emits }) {
      const wallet = [
        {
          itemName: "余额(元)",
          num: 525.36
        },
        {
          itemName: "等级",
          num: 1
        },
        {
          itemName: "我的积分",
          num: 0
        }
      ];
      function setClick() {
        emits("setClick");
      }
      function walletItemClick(index2) {
        emits("walletItemClick", index2);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "userinfo" }, [
          vue.createElementVNode("view", { class: "info-top" }, [
            vue.createElementVNode("view", { class: "info" }, [
              vue.createElementVNode("image", {
                class: "avatar",
                src: _imports_0$1,
                mode: ""
              }),
              vue.createElementVNode("view", { class: "userdetail" }, [
                vue.createElementVNode("text", { class: "username" }, "用户名"),
                vue.createElementVNode("text", null, "155****1558")
              ])
            ]),
            vue.createElementVNode("view", { class: "set" }, [
              vue.createElementVNode("i", {
                class: "iconfont icon-set",
                style: { "font-size": "48rpx" },
                onClick: setClick
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "info-bottom" }, [
            vue.createElementVNode("view", { class: "wallet" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(wallet, (item, index2) => {
                  return vue.createElementVNode("view", {
                    key: item,
                    class: "wallet-item",
                    onClick: ($event) => walletItemClick(index2)
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "item-num" },
                      vue.toDisplayString(item.num),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "item-name" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "item-name" },
                        vue.toDisplayString(item.itemName),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("i", { class: "iconfont icon-right-arrow" })
                    ])
                  ], 8, ["onClick"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const UserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-23f92721"], ["__file", "D:/khons-charge/pages/user/cpns/UserInfo.vue"]]);
  const _sfc_main$6 = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.renderSlot(_ctx.$slots, "extra", {}, () => [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-extra-text" },
                  vue.toDisplayString($props.extra),
                  1
                  /* TEXT */
                )
              ], true)
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1], ["__scopeId", "data-v-ae4bee67"], ["__file", "D:/khons-charge/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _imports_0 = "/static/images/add.png";
  const _sfc_main$5 = {
    __name: "MyCar",
    emits: ["addCarClick"],
    setup(__props, { emit: emits }) {
      function addCarClick() {
        emits("addCarClick");
      }
      return (_ctx, _cache) => {
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "mycar" }, [
          vue.createVNode(_component_uni_card, {
            class: "card",
            title: "我的爱车"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "card-info" }, [
                vue.createElementVNode("view", {
                  class: "add-image",
                  onClick: addCarClick
                }, [
                  vue.createElementVNode("image", {
                    src: _imports_0,
                    mode: "widthFix"
                  })
                ]),
                vue.createElementVNode("view", { class: "text" }, [
                  vue.createElementVNode("view", { class: "title" }, "认证爱车"),
                  vue.createElementVNode("text", null, "添加车牌后，驶出停车场将自动为您减免停车费")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const MyCar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-01e53afa"], ["__file", "D:/khons-charge/pages/user/cpns/MyCar.vue"]]);
  const _sfc_main$4 = {
    __name: "MoreService",
    emits: ["moreServItemClick"],
    setup(__props, { emit: emits }) {
      function moreServItemClick(index2) {
        emits("moreServItemClick", index2);
      }
      const menu = [
        {
          img: "/static/images/menu/message.png",
          title: "消息中心"
        },
        {
          img: "/static/images/menu/mycar.png",
          title: "我的车辆"
        },
        {
          img: "/static/images/menu/contactus.png",
          title: "联系我们"
        },
        {
          img: "/static/images/menu/feedback.png",
          title: "我的反馈"
        }
      ];
      return (_ctx, _cache) => {
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "more-service" }, [
          vue.createVNode(_component_uni_card, {
            class: "card",
            title: "更多服务"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "card-info" }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(menu, (item, index2) => {
                    return vue.createElementVNode("view", {
                      class: "menu-item",
                      onClick: ($event) => moreServItemClick(index2)
                    }, [
                      vue.createElementVNode("image", {
                        class: "image",
                        src: item.img,
                        mode: "widthFix"
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { class: "title" },
                        vue.toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const MoreService = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5fce1903"], ["__file", "D:/khons-charge/pages/user/cpns/MoreService.vue"]]);
  const __default__ = {
    onReady() {
      uni.hideTabBar();
    }
  };
  const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__, {
    __name: "user",
    setup(__props) {
      vue.onMounted(() => {
        uni.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: "#e0ecfc"
        });
      });
      function handleSetClick() {
        formatAppLog("log", "at pages/user/user.vue:34", "设置按钮被点击了");
      }
      function handleWalletItemClick(index2) {
        formatAppLog("log", "at pages/user/user.vue:39", "walletItem被点击了：", index2);
      }
      function handleMenuItemClick(index2) {
        formatAppLog("log", "at pages/user/user.vue:44", "menuItem被点击了：", index2);
      }
      function handleAddCarClick() {
        formatAppLog("log", "at pages/user/user.vue:49", "点击了添加爱车");
      }
      function handleServiceClick(index2) {
        formatAppLog("log", "at pages/user/user.vue:54", "更多服务被点击了：", index2);
      }
      const menu = [
        {
          img: "/static/images/menu/order.png",
          title: "我的订单"
        },
        {
          img: "/static/images/menu/statistics.png",
          title: "充电数据"
        },
        {
          img: "/static/images/menu/charging.png",
          title: "即插即充"
        },
        {
          img: "/static/images/menu/favor.png",
          title: "站点收藏"
        }
      ];
      return (_ctx, _cache) => {
        const _component_menu_card = resolveEasycom(vue.resolveDynamicComponent("menu-card"), __easycom_0$2);
        const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "user" }, [
          vue.createVNode(UserInfo, {
            onSetClick: handleSetClick,
            onWalletItemClick: handleWalletItemClick
          }),
          vue.createVNode(_component_menu_card, {
            menu,
            onMenuItemClick: handleMenuItemClick
          }),
          vue.createVNode(MyCar, { onAddCarClick: handleAddCarClick }),
          vue.createVNode(MoreService, { onMoreServItemClick: handleServiceClick }),
          vue.createVNode(_component_cc_myTabbar, { tabBarShow: 2 })
        ]);
      };
    }
  });
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/khons-charge/pages/user/user.vue"]]);
  const city = [
    {
      initial: "A",
      list: [
        {
          code: "0997",
          name: "阿克苏",
          pinyin: "Akesu",
          label: "Akesu0997"
        },
        {
          code: "0837",
          name: "阿坝",
          pinyin: "Aba",
          label: "Aba0837"
        },
        {
          code: "0483",
          name: "阿拉善盟",
          pinyin: "Alashanmeng",
          label: "Alashanmeng0483"
        },
        {
          code: "0906",
          name: "阿勒泰",
          pinyin: "Aletai",
          label: "Aletai0906"
        },
        {
          code: "0897",
          name: "阿里",
          pinyin: "Ali",
          label: "Ali0897"
        },
        {
          code: "0915",
          name: "安康",
          pinyin: "Ankang",
          label: "Ankang0915"
        },
        {
          code: "0556",
          name: "安庆",
          pinyin: "Anqing",
          label: "Anqing0556"
        },
        {
          code: "0412",
          name: "鞍山",
          pinyin: "Anshan",
          label: "Anshan0412"
        },
        {
          code: "0853",
          name: "安顺",
          pinyin: "Anshun",
          label: "Anshun0853"
        },
        {
          code: "0372",
          name: "安阳",
          pinyin: "Anyang",
          label: "Anyang0372"
        },
        {
          code: "0451",
          name: "阿城",
          pinyin: "Acheng",
          label: "Acheng0451"
        },
        {
          code: "0796",
          name: "安福",
          pinyin: "Anfu",
          label: "Anfu0796"
        },
        {
          code: "0572",
          name: "安吉",
          pinyin: "Anji",
          label: "Anji0572"
        },
        {
          code: "0871",
          name: "安宁",
          pinyin: "Anning",
          label: "Anning0871"
        },
        {
          code: "0536",
          name: "安丘",
          pinyin: "Anqiu",
          label: "Anqiu0536"
        },
        {
          code: "0595",
          name: "安溪",
          pinyin: "Anxi",
          label: "Anxi0595"
        },
        {
          code: "0791",
          name: "安义",
          pinyin: "Anyi",
          label: "Anyi0791"
        },
        {
          code: "0797",
          name: "安远",
          pinyin: "Anyuan",
          label: "Anyuan0797"
        }
      ]
    },
    {
      initial: "B",
      list: [
        {
          code: "010",
          name: "北京",
          pinyin: "Beijing",
          label: "Beijing010"
        },
        {
          code: "0436",
          name: "白城",
          pinyin: "Baicheng",
          label: "Baicheng0436"
        },
        {
          code: "0776",
          name: "百色",
          pinyin: "Baise",
          label: "Baise0776"
        },
        {
          code: "0439",
          name: "白山",
          pinyin: "Baishan",
          label: "Baishan0439"
        },
        {
          code: "0943",
          name: "白银",
          pinyin: "Baiyin",
          label: "Baiyin0943"
        },
        {
          code: "0552",
          name: "蚌埠",
          pinyin: "Bangbu",
          label: "Bangbu0552"
        },
        {
          code: "0312",
          name: "保定",
          pinyin: "Baoding",
          label: "Baoding0312"
        },
        {
          code: "0917",
          name: "宝鸡",
          pinyin: "Baoji",
          label: "Baoji0917"
        },
        {
          code: "0875",
          name: "保山",
          pinyin: "Baoshan",
          label: "Baoshan0875"
        },
        {
          code: "0472",
          name: "包头",
          pinyin: "Baotou",
          label: "Baotou0472"
        },
        {
          code: "0478",
          name: "巴彦淖尔",
          pinyin: "Bayannaoer",
          label: "Bayannaoer0478"
        },
        {
          code: "0996",
          name: "巴音郭楞",
          pinyin: "Bayinguoleng",
          label: "Bayinguoleng0996"
        },
        {
          code: "0827",
          name: "巴中",
          pinyin: "Bazhong",
          label: "Bazhong0827"
        },
        {
          code: "0779",
          name: "北海",
          pinyin: "Beihai",
          label: "Beihai0779"
        },
        {
          code: "0414",
          name: "本溪",
          pinyin: "Benxi",
          label: "Benxi0414"
        },
        {
          code: "0857",
          name: "毕节",
          pinyin: "Bijie",
          label: "Bijie0857"
        },
        {
          code: "0543",
          name: "滨州",
          pinyin: "Binzhou",
          label: "Binzhou0543"
        },
        {
          code: "0909",
          name: "博尔塔拉",
          pinyin: "Boertala",
          label: "Boertala0909"
        },
        {
          code: "0558",
          name: "亳州",
          pinyin: "Bozhou",
          label: "Bozhou0558"
        },
        {
          code: "0514",
          name: "宝应",
          pinyin: "Baoying",
          label: "Baoying0514"
        },
        {
          code: "0451",
          name: "巴彦",
          pinyin: "Bayan",
          label: "Bayan0451"
        },
        {
          code: "0515",
          name: "滨海",
          pinyin: "Binhai",
          label: "Binhai0515"
        },
        {
          code: "0451",
          name: "宾县",
          pinyin: "Binxian",
          label: "Binxian0451"
        },
        {
          code: "0771",
          name: "宾阳",
          pinyin: "Binyang",
          label: "Binyang0771"
        },
        {
          code: "023",
          name: "璧山",
          pinyin: "Bishan",
          label: "Bishan023"
        },
        {
          code: "0391",
          name: "博爱",
          pinyin: "Boai",
          label: "Boai0391"
        },
        {
          code: "0752",
          name: "博罗",
          pinyin: "Boluo",
          label: "Boluo0752"
        },
        {
          code: "0543",
          name: "博兴",
          pinyin: "Boxing",
          label: "Boxing0543"
        }
      ]
    },
    {
      initial: "C",
      list: [
        {
          code: "023",
          name: "重庆",
          pinyin: "Chongqing",
          label: "Chongqing023"
        },
        {
          code: "0431",
          name: "长春",
          pinyin: "Changchun",
          label: "Changchun0431"
        },
        {
          code: "0731",
          name: "长沙",
          pinyin: "Changsha",
          label: "Changsha0731"
        },
        {
          code: "0519",
          name: "常州",
          pinyin: "Changzhou",
          label: "Changzhou0519"
        },
        {
          code: "028",
          name: "成都",
          pinyin: "Chengdu",
          label: "Chengdu028"
        },
        {
          code: "0317",
          name: "沧州",
          pinyin: "Cangzhou",
          label: "Cangzhou0317"
        },
        {
          code: "0736",
          name: "常德",
          pinyin: "Changde",
          label: "Changde0736"
        },
        {
          code: "0895",
          name: "昌都",
          pinyin: "Changdu",
          label: "Changdu0895"
        },
        {
          code: "0997",
          name: "昌吉",
          pinyin: "Changji",
          label: "Changji0997"
        },
        {
          code: "0355",
          name: "长治",
          pinyin: "Changzhi",
          label: "Changzhi0355"
        },
        {
          code: "0565",
          name: "巢湖",
          pinyin: "Chaohu",
          label: "Chaohu0565"
        },
        {
          code: "0421",
          name: "朝阳",
          pinyin: "Chaoyang",
          label: "Chaoyang0421"
        },
        {
          code: "0768",
          name: "潮州",
          pinyin: "Chaozhou",
          label: "Chaozhou0768"
        },
        {
          code: "0314",
          name: "承德",
          pinyin: "Chengde",
          label: "Chengde0314"
        },
        {
          code: "0735",
          name: "郴州",
          pinyin: "Chenzhou",
          label: "Chenzhou0735"
        },
        {
          code: "0476",
          name: "赤峰",
          pinyin: "Chifeng",
          label: "Chifeng0476"
        },
        {
          code: "0566",
          name: "池州",
          pinyin: "Chizhou",
          label: "Chizhou0566"
        },
        {
          code: "0771",
          name: "崇左",
          pinyin: "Chongzuo",
          label: "Chongzuo0771"
        },
        {
          code: "0875",
          name: "楚雄",
          pinyin: "Chuxiong",
          label: "Chuxiong0875"
        },
        {
          code: "0550",
          name: "滁州",
          pinyin: "Chuzhou",
          label: "Chuzhou0550"
        },
        {
          code: "0577",
          name: "苍南",
          pinyin: "Cangnan",
          label: "Cangnan0577"
        },
        {
          code: "0539",
          name: "苍山",
          pinyin: "Cangshan",
          label: "Cangshan0539"
        },
        {
          code: "0530",
          name: "曹县",
          pinyin: "Caoxian",
          label: "Caoxian0530"
        },
        {
          code: "0535",
          name: "长岛",
          pinyin: "Changdao",
          label: "Changdao0535"
        },
        {
          code: "0551",
          name: "长丰",
          pinyin: "Changfeng",
          label: "Changfeng0551"
        },
        {
          code: "0411",
          name: "长海",
          pinyin: "Changhai",
          label: "Changhai0411"
        },
        {
          code: "0591",
          name: "长乐",
          pinyin: "Changle",
          label: "Changle0591"
        },
        {
          code: "0536",
          name: "昌乐",
          pinyin: "Changle",
          label: "Changle0536"
        },
        {
          code: "0570",
          name: "常山",
          pinyin: "Changshan",
          label: "Changshan0570"
        },
        {
          code: "0512",
          name: "常熟",
          pinyin: "Changshu",
          label: "Changshu0512"
        },
        {
          code: "0596",
          name: "长泰",
          pinyin: "Changtai",
          label: "Changtai0596"
        },
        {
          code: "0597",
          name: "长汀",
          pinyin: "Changting",
          label: "Changting0597"
        },
        {
          code: "0572",
          name: "长兴",
          pinyin: "Changxing",
          label: "Changxing0572"
        },
        {
          code: "0536",
          name: "昌邑",
          pinyin: "Changyi",
          label: "Changyi0536"
        },
        {
          code: "0768",
          name: "潮安",
          pinyin: "Chaoan",
          label: "Chaoan0768"
        },
        {
          code: "0871",
          name: "呈贡",
          pinyin: "Chenggong",
          label: "Chenggong0871"
        },
        {
          code: "023",
          name: "城口",
          pinyin: "Chengkou",
          label: "Chengkou023"
        },
        {
          code: "0530",
          name: "成武",
          pinyin: "Chengwu",
          label: "Chengwu0530"
        },
        {
          code: "0635",
          name: "茌平",
          pinyin: "Chiping",
          label: "Chiping0635"
        },
        {
          code: "0794",
          name: "崇仁",
          pinyin: "Chongren",
          label: "Chongren0794"
        },
        {
          code: "0797",
          name: "崇义",
          pinyin: "Chongyi",
          label: "Chongyi0797"
        },
        {
          code: "028",
          name: "崇州",
          pinyin: "Chongzhou",
          label: "Chongzhou028"
        },
        {
          code: "0571",
          name: "淳安",
          pinyin: "Chunan",
          label: "Chunan0571"
        },
        {
          code: "0574",
          name: "慈溪",
          pinyin: "Cixi",
          label: "Cixi0574"
        },
        {
          code: "020",
          name: "从化",
          pinyin: "Conghua",
          label: "Conghua020"
        },
        {
          code: "0556",
          name: "枞阳",
          pinyin: "Congyang",
          label: "Congyang0556"
        }
      ]
    },
    {
      initial: "D",
      list: [
        {
          code: "0411",
          name: "大连",
          pinyin: "Dalian",
          label: "Dalian0411"
        },
        {
          code: "0769",
          name: "东莞",
          pinyin: "Dongguan",
          label: "Dongguan0769"
        },
        {
          code: "0872",
          name: "大理",
          pinyin: "Dali",
          label: "Dali0872"
        },
        {
          code: "0415",
          name: "丹东",
          pinyin: "Dandong",
          label: "Dandong0415"
        },
        {
          code: "0459",
          name: "大庆",
          pinyin: "Daqing",
          label: "Daqing0459"
        },
        {
          code: "0352",
          name: "大同",
          pinyin: "Datong",
          label: "Datong0352"
        },
        {
          code: "0457",
          name: "大兴安岭",
          pinyin: "Daxinganling",
          label: "Daxinganling0457"
        },
        {
          code: "0818",
          name: "达州",
          pinyin: "Dazhou",
          label: "Dazhou0818"
        },
        {
          code: "0692",
          name: "德宏",
          pinyin: "Dehong",
          label: "Dehong0692"
        },
        {
          code: "0838",
          name: "德阳",
          pinyin: "Deyang",
          label: "Deyang0838"
        },
        {
          code: "0534",
          name: "德州",
          pinyin: "Dezhou",
          label: "Dezhou0534"
        },
        {
          code: "0932",
          name: "定西",
          pinyin: "Dingxi",
          label: "Dingxi0932"
        },
        {
          code: "0887",
          name: "迪庆",
          pinyin: "Diqing",
          label: "Diqing0887"
        },
        {
          code: "0546",
          name: "东营",
          pinyin: "Dongying",
          label: "Dongying0546"
        },
        {
          code: "0515",
          name: "大丰",
          pinyin: "Dafeng",
          label: "Dafeng0515"
        },
        {
          code: "0580",
          name: "岱山",
          pinyin: "Daishan",
          label: "Daishan0580"
        },
        {
          code: "0557",
          name: "砀山",
          pinyin: "Dangshan",
          label: "Dangshan0557"
        },
        {
          code: "0555",
          name: "当涂",
          pinyin: "Dangtu",
          label: "Dangtu0555"
        },
        {
          code: "0530",
          name: "单县",
          pinyin: "Danxian",
          label: "Danxian0530"
        },
        {
          code: "0511",
          name: "丹阳",
          pinyin: "Danyang",
          label: "Danyang0511"
        },
        {
          code: "0753",
          name: "大埔",
          pinyin: "Dapu",
          label: "Dapu0753"
        },
        {
          code: "0598",
          name: "大田",
          pinyin: "Datian",
          label: "Datian0598"
        },
        {
          code: "028",
          name: "大邑",
          pinyin: "Dayi",
          label: "Dayi028"
        },
        {
          code: "0797",
          name: "大余",
          pinyin: "Dayu",
          label: "Dayu0797"
        },
        {
          code: "023",
          name: "大足",
          pinyin: "Dazu",
          label: "Dazu023"
        },
        {
          code: "0792",
          name: "德安",
          pinyin: "Dean",
          label: "Dean0792"
        },
        {
          code: "0595",
          name: "德化",
          pinyin: "Dehua",
          label: "Dehua0595"
        },
        {
          code: "0431",
          name: "德惠",
          pinyin: "Dehui",
          label: "Dehui0431"
        },
        {
          code: "0371",
          name: "登封",
          pinyin: "Dengfeng",
          label: "Dengfeng0371"
        },
        {
          code: "0572",
          name: "德清",
          pinyin: "Deqing",
          label: "Deqing0572"
        },
        {
          code: "0758",
          name: "德庆",
          pinyin: "Deqing",
          label: "Deqing0758"
        },
        {
          code: "0793",
          name: "德兴",
          pinyin: "Dexing",
          label: "Dexing0793"
        },
        {
          code: "0668",
          name: "电白",
          pinyin: "Dianbai",
          label: "Dianbai0668"
        },
        {
          code: "023",
          name: "垫江",
          pinyin: "Dianjiang",
          label: "Dianjiang023"
        },
        {
          code: "0797",
          name: "定南",
          pinyin: "Dingnan",
          label: "Dingnan0797"
        },
        {
          code: "0530",
          name: "定陶",
          pinyin: "Dingtao",
          label: "Dingtao0530"
        },
        {
          code: "0550",
          name: "定远",
          pinyin: "Dingyuan",
          label: "Dingyuan0550"
        },
        {
          code: "0635",
          name: "东阿",
          pinyin: "Donga",
          label: "Donga0635"
        },
        {
          code: "0518",
          name: "东海",
          pinyin: "Donghai",
          label: "Donghai0518"
        },
        {
          code: "0530",
          name: "东明",
          pinyin: "Dongming",
          label: "Dongming0530"
        },
        {
          code: "0538",
          name: "东平",
          pinyin: "Dongping",
          label: "Dongping0538"
        },
        {
          code: "0596",
          name: "东山",
          pinyin: "Dongshan",
          label: "Dongshan0596"
        },
        {
          code: "0515",
          name: "东台",
          pinyin: "Dongtai",
          label: "Dongtai0515"
        },
        {
          code: "0577",
          name: "洞头",
          pinyin: "Dongtou",
          label: "Dongtou0577"
        },
        {
          code: "0794",
          name: "东乡",
          pinyin: "Dongxiang",
          label: "Dongxiang0794"
        },
        {
          code: "0579",
          name: "东阳",
          pinyin: "Dongyang",
          label: "Dongyang0579"
        },
        {
          code: "0762",
          name: "东源",
          pinyin: "Dongyuan",
          label: "Dongyuan0762"
        },
        {
          code: "0566",
          name: "东至",
          pinyin: "Dongzhi",
          label: "Dongzhi0566"
        },
        {
          code: "0792",
          name: "都昌",
          pinyin: "Duchang",
          label: "Duchang0792"
        },
        {
          code: "028",
          name: "都江堰",
          pinyin: "Dujiangyan",
          label: "Dujiangyan028"
        }
      ]
    },
    {
      initial: "E",
      list: [
        {
          code: "0718",
          name: "恩施",
          pinyin: "Enshi",
          label: "Enshi0718"
        },
        {
          code: "0477",
          name: "鄂尔多斯",
          pinyin: "Eerduosi",
          label: "Eerduosi0477"
        },
        {
          code: "0711",
          name: "鄂州",
          pinyin: "Ezhou",
          label: "Ezhou0711"
        },
        {
          code: "0750",
          name: "恩平",
          pinyin: "Enping",
          label: "Enping0750"
        }
      ]
    },
    {
      initial: "F",
      list: [
        {
          code: "0413",
          name: "抚顺",
          pinyin: "Fushun",
          label: "Fushun0413"
        },
        {
          code: "0757",
          name: "佛山",
          pinyin: "Foshan",
          label: "Foshan0757"
        },
        {
          code: "0591",
          name: "福州",
          pinyin: "Fuzhou",
          label: "Fuzhou0591"
        },
        {
          code: "0770",
          name: "防城港",
          pinyin: "Fangchenggang",
          label: "Fangchenggang0770"
        },
        {
          code: "0418",
          name: "阜新",
          pinyin: "Fuxin",
          label: "Fuxin0418"
        },
        {
          code: "0558",
          name: "阜阳",
          pinyin: "Fuyang",
          label: "Fuyang0558"
        },
        {
          code: "0794",
          name: "抚州",
          pinyin: "Fuzhou",
          label: "Fuzhou0794"
        },
        {
          code: "024",
          name: "法库",
          pinyin: "Faku",
          label: "Faku024"
        },
        {
          code: "0553",
          name: "繁昌",
          pinyin: "Fanchang",
          label: "Fanchang0553"
        },
        {
          code: "0451",
          name: "方正",
          pinyin: "Fangzheng",
          label: "Fangzheng0451"
        },
        {
          code: "0538",
          name: "肥城",
          pinyin: "Feicheng",
          label: "Feicheng0538"
        },
        {
          code: "0551",
          name: "肥东",
          pinyin: "Feidong",
          label: "Feidong0551"
        },
        {
          code: "0551",
          name: "肥西",
          pinyin: "Feixi",
          label: "Feixi0551"
        },
        {
          code: "0539",
          name: "费县",
          pinyin: "Feixian",
          label: "Feixian0539"
        },
        {
          code: "0795",
          name: "丰城",
          pinyin: "Fengcheng",
          label: "Fengcheng0795"
        },
        {
          code: "023",
          name: "丰都",
          pinyin: "Fengdu",
          label: "Fengdu023"
        },
        {
          code: "0574",
          name: "奉化",
          pinyin: "Fenghua",
          label: "Fenghua0574"
        },
        {
          code: "023",
          name: "奉节",
          pinyin: "Fengjie",
          label: "Fengjie023"
        },
        {
          code: "0758",
          name: "封开",
          pinyin: "Fengkai",
          label: "Fengkai0758"
        },
        {
          code: "0753",
          name: "丰顺",
          pinyin: "Fengshun",
          label: "Fengshun0753"
        },
        {
          code: "0554",
          name: "凤台",
          pinyin: "Fengtai",
          label: "Fengtai0554"
        },
        {
          code: "0516",
          name: "丰县",
          pinyin: "Fengxian",
          label: "Fengxian0516"
        },
        {
          code: "0795",
          name: "奉新",
          pinyin: "Fengxin",
          label: "Fengxin0795"
        },
        {
          code: "0550",
          name: "凤阳",
          pinyin: "Fengyang",
          label: "Fengyang0550"
        },
        {
          code: "0790",
          name: "分宜",
          pinyin: "Fenyi",
          label: "Fenyi0790"
        },
        {
          code: "0763",
          name: "佛冈",
          pinyin: "Fogang",
          label: "Fogang0763"
        },
        {
          code: "0593",
          name: "福安",
          pinyin: "Fuan",
          label: "Fuan0593"
        },
        {
          code: "0593",
          name: "福鼎",
          pinyin: "Fuding",
          label: "Fuding0593"
        },
        {
          code: "0798",
          name: "浮梁",
          pinyin: "Fuliang",
          label: "Fuliang0798"
        },
        {
          code: "0871",
          name: "富民",
          pinyin: "Fumin",
          label: "Fumin0871"
        },
        {
          code: "0558",
          name: "阜南",
          pinyin: "Funan",
          label: "Funan0558"
        },
        {
          code: "0515",
          name: "阜宁",
          pinyin: "Funing",
          label: "Funing0515"
        },
        {
          code: "0591",
          name: "福清",
          pinyin: "Fuqing",
          label: "Fuqing0591"
        },
        {
          code: "0571",
          name: "富阳",
          pinyin: "Fuyang",
          label: "Fuyang0571"
        }
      ]
    },
    {
      initial: "G",
      list: [
        {
          code: "0941",
          name: "甘南",
          pinyin: "Gannan",
          label: "Gannan0941"
        },
        {
          code: "020",
          name: "广州",
          pinyin: "Guangzhou",
          label: "Guangzhou020"
        },
        {
          code: "0851",
          name: "贵阳",
          pinyin: "Guiyang",
          label: "Guiyang0851"
        },
        {
          code: "0797",
          name: "赣州",
          pinyin: "Ganzhou",
          label: "Ganzhou0797"
        },
        {
          code: "0836",
          name: "甘孜",
          pinyin: "Ganzi",
          label: "Ganzi0836"
        },
        {
          code: "0826",
          name: "广安",
          pinyin: "Guangan",
          label: "Guangan0826"
        },
        {
          code: "0839",
          name: "广元",
          pinyin: "Guangyuan",
          label: "Guangyuan0839"
        },
        {
          code: "0775",
          name: "贵港",
          pinyin: "Guigang",
          label: "Guigang0775"
        },
        {
          code: "0773",
          name: "桂林",
          pinyin: "Guilin",
          label: "Guilin0773"
        },
        {
          code: "0975",
          name: "果洛",
          pinyin: "Guoluo",
          label: "Guoluo0975"
        },
        {
          code: "0954",
          name: "固原",
          pinyin: "Guyuan",
          label: "Guyuan0954"
        },
        {
          code: "0797",
          name: "赣县",
          pinyin: "Ganxian",
          label: "Ganxian0797"
        },
        {
          code: "0518",
          name: "赣榆",
          pinyin: "Ganyu",
          label: "Ganyu0518"
        },
        {
          code: "0795",
          name: "高安",
          pinyin: "Gaoan",
          label: "Gaoan0795"
        },
        {
          code: "0311",
          name: "藁城",
          pinyin: "Gaocheng",
          label: "Gaocheng0311"
        },
        {
          code: "025",
          name: "高淳",
          pinyin: "Gaochun",
          label: "Gaochun025"
        },
        {
          code: "0931",
          name: "皋兰",
          pinyin: "Gaolan",
          label: "Gaolan0931"
        },
        {
          code: "029",
          name: "高陵",
          pinyin: "Gaoling",
          label: "Gaoling029"
        },
        {
          code: "0536",
          name: "高密",
          pinyin: "Gaomi",
          label: "Gaomi0536"
        },
        {
          code: "0533",
          name: "高青",
          pinyin: "Gaoqing",
          label: "Gaoqing0533"
        },
        {
          code: "0635",
          name: "高唐",
          pinyin: "Gaotang",
          label: "Gaotang0635"
        },
        {
          code: "0758",
          name: "高要",
          pinyin: "Gaoyao",
          label: "Gaoyao0758"
        },
        {
          code: "0311",
          name: "高邑",
          pinyin: "Gaoyi",
          label: "Gaoyi0311"
        },
        {
          code: "0514",
          name: "高邮",
          pinyin: "Gaoyou",
          label: "Gaoyou0514"
        },
        {
          code: "0668",
          name: "高州",
          pinyin: "Gaozhou",
          label: "Gaozhou0668"
        },
        {
          code: "0371",
          name: "巩义",
          pinyin: "Gongyi",
          label: "Gongyi0371"
        },
        {
          code: "0794",
          name: "广昌",
          pinyin: "Guangchang",
          label: "Guangchang0794"
        },
        {
          code: "0563",
          name: "广德",
          pinyin: "Guangde",
          label: "Guangde0563"
        },
        {
          code: "0793",
          name: "广丰",
          pinyin: "Guangfeng",
          label: "Guangfeng0793"
        },
        {
          code: "0758",
          name: "广宁",
          pinyin: "Guangning",
          label: "Guangning0758"
        },
        {
          code: "0546",
          name: "广饶",
          pinyin: "Guangrao",
          label: "Guangrao0546"
        },
        {
          code: "0599",
          name: "光泽",
          pinyin: "Guangze",
          label: "Guangze0599"
        },
        {
          code: "0518",
          name: "灌南",
          pinyin: "Guannan",
          label: "Guannan0518"
        },
        {
          code: "0635",
          name: "冠县",
          pinyin: "Guanxian",
          label: "Guanxian0635"
        },
        {
          code: "0518",
          name: "灌云",
          pinyin: "Guanyun",
          label: "Guanyun0518"
        },
        {
          code: "0701",
          name: "贵溪",
          pinyin: "Guixi",
          label: "Guixi0701"
        },
        {
          code: "0593",
          name: "古田",
          pinyin: "Gutian",
          label: "Gutian0593"
        },
        {
          code: "0552",
          name: "固镇",
          pinyin: "Guzhen",
          label: "Guzhen0552"
        }
      ]
    },
    {
      initial: "H",
      list: [
        {
          code: "0970",
          name: "海北",
          pinyin: "Haibei",
          label: "Haibei0970"
        },
        {
          code: "0451",
          name: "哈尔滨",
          pinyin: "Haerbin",
          label: "Haerbin0451"
        },
        {
          code: "0898",
          name: "海口",
          pinyin: "Haikou",
          label: "Haikou0898"
        },
        {
          code: "0310",
          name: "邯郸",
          pinyin: "Handan",
          label: "Handan0310"
        },
        {
          code: "0571",
          name: "杭州",
          pinyin: "Hangzhou",
          label: "Hangzhou0571"
        },
        {
          code: "0551",
          name: "合肥",
          pinyin: "Hefei",
          label: "Hefei0551"
        },
        {
          code: "0752",
          name: "惠州",
          pinyin: "Huizhou",
          label: "Huizhou0752"
        },
        {
          code: "0972",
          name: "海东",
          pinyin: "Haidong",
          label: "Haidong0972"
        },
        {
          code: "0974",
          name: "海南",
          pinyin: "Hainan",
          label: "Hainan0974"
        },
        {
          code: "0977",
          name: "海西",
          pinyin: "Haixi",
          label: "Haixi0977"
        },
        {
          code: "0902",
          name: "哈密",
          pinyin: "Hami",
          label: "Hami0902"
        },
        {
          code: "0916",
          name: "汉中",
          pinyin: "Hanzhong",
          label: "Hanzhong0916"
        },
        {
          code: "0392",
          name: "鹤壁",
          pinyin: "Hebi",
          label: "Hebi0392"
        },
        {
          code: "0778",
          name: "河池",
          pinyin: "Hechi",
          label: "Hechi0778"
        },
        {
          code: "0468",
          name: "鹤岗",
          pinyin: "Hegang",
          label: "Hegang0468"
        },
        {
          code: "0456",
          name: "黑河",
          pinyin: "Heihe",
          label: "Heihe0456"
        },
        {
          code: "0318",
          name: "衡水",
          pinyin: "Hengshui",
          label: "Hengshui0318"
        },
        {
          code: "0734",
          name: "衡阳",
          pinyin: "Hengyang",
          label: "Hengyang0734"
        },
        {
          code: "0903",
          name: "和田地",
          pinyin: "Hetiandi",
          label: "Hetiandi0903"
        },
        {
          code: "0762",
          name: "河源",
          pinyin: "Heyuan",
          label: "Heyuan0762"
        },
        {
          code: "0530",
          name: "菏泽",
          pinyin: "Heze",
          label: "Heze0530"
        },
        {
          code: "0774",
          name: "贺州",
          pinyin: "Hezhou",
          label: "Hezhou0774"
        },
        {
          code: "0873",
          name: "红河",
          pinyin: "Honghe",
          label: "Honghe0873"
        },
        {
          code: "0517",
          name: "淮安",
          pinyin: "Huaian",
          label: "Huaian0517"
        },
        {
          code: "0561",
          name: "淮北",
          pinyin: "Huaibei",
          label: "Huaibei0561"
        },
        {
          code: "0745",
          name: "怀化",
          pinyin: "Huaihua",
          label: "Huaihua0745"
        },
        {
          code: "0554",
          name: "淮南",
          pinyin: "Huainan",
          label: "Huainan0554"
        },
        {
          code: "0713",
          name: "黄冈",
          pinyin: "Huanggang",
          label: "Huanggang0713"
        },
        {
          code: "0973",
          name: "黄南",
          pinyin: "Huangnan",
          label: "Huangnan0973"
        },
        {
          code: "0559",
          name: "黄山",
          pinyin: "Huangshan",
          label: "Huangshan0559"
        },
        {
          code: "0714",
          name: "黄石",
          pinyin: "Huangshi",
          label: "Huangshi0714"
        },
        {
          code: "0471",
          name: "呼和浩特",
          pinyin: "Huhehaote",
          label: "Huhehaote0471"
        },
        {
          code: "0429",
          name: "葫芦岛",
          pinyin: "Huludao",
          label: "Huludao0429"
        },
        {
          code: "0470",
          name: "呼伦贝尔",
          pinyin: "Hulunbeier",
          label: "Hulunbeier0470"
        },
        {
          code: "0572",
          name: "湖州",
          pinyin: "Huzhou",
          label: "Huzhou0572"
        },
        {
          code: "0513",
          name: "海安",
          pinyin: "Haian",
          label: "Haian0513"
        },
        {
          code: "0660",
          name: "海丰",
          pinyin: "Haifeng",
          label: "Haifeng0660"
        },
        {
          code: "0513",
          name: "海门",
          pinyin: "Haimen",
          label: "Haimen0513"
        },
        {
          code: "0573",
          name: "海宁",
          pinyin: "Haining",
          label: "Haining0573"
        },
        {
          code: "0573",
          name: "海盐",
          pinyin: "Haiyan",
          label: "Haiyan0573"
        },
        {
          code: "0535",
          name: "海阳",
          pinyin: "Haiyang",
          label: "Haiyang0535"
        },
        {
          code: "0565",
          name: "含山",
          pinyin: "Hanshan",
          label: "Hanshan0565"
        },
        {
          code: "023",
          name: "合川",
          pinyin: "Hechuan",
          label: "Hechuan023"
        },
        {
          code: "0793",
          name: "横峰",
          pinyin: "Hengfeng",
          label: "Hengfeng0793"
        },
        {
          code: "0771",
          name: "横县",
          pinyin: "Hengxian",
          label: "Hengxian0771"
        },
        {
          code: "0762",
          name: "和平",
          pinyin: "Heping",
          label: "Heping0762"
        },
        {
          code: "0750",
          name: "鹤山",
          pinyin: "Heshan",
          label: "Heshan0750"
        },
        {
          code: "0565",
          name: "和县",
          pinyin: "Hexian",
          label: "Hexian0565"
        },
        {
          code: "0517",
          name: "洪泽",
          pinyin: "Hongze",
          label: "Hongze0517"
        },
        {
          code: "0596",
          name: "华安",
          pinyin: "Huaan",
          label: "Huaan0596"
        },
        {
          code: "0423",
          name: "桦甸",
          pinyin: "Huadian",
          label: "Huadian0423"
        },
        {
          code: "0758",
          name: "怀集",
          pinyin: "Huaiji",
          label: "Huaiji0758"
        },
        {
          code: "0556",
          name: "怀宁",
          pinyin: "Huaining",
          label: "Huaining0556"
        },
        {
          code: "0552",
          name: "怀远",
          pinyin: "Huaiyuan",
          label: "Huaiyuan0552"
        },
        {
          code: "0533",
          name: "桓台",
          pinyin: "Huantai",
          label: "Huantai0533"
        },
        {
          code: "0668",
          name: "化州",
          pinyin: "Huazhou",
          label: "Huazhou0668"
        },
        {
          code: "0595",
          name: "惠安",
          pinyin: "Huian",
          label: "Huian0595"
        },
        {
          code: "0797",
          name: "会昌",
          pinyin: "Huichang",
          label: "Huichang0797"
        },
        {
          code: "0752",
          name: "惠东",
          pinyin: "Huidong",
          label: "Huidong0752"
        },
        {
          code: "0663",
          name: "惠来",
          pinyin: "Huilai",
          label: "Huilai0663"
        },
        {
          code: "0543",
          name: "惠民",
          pinyin: "Huimin",
          label: "Huimin0543"
        },
        {
          code: "0792",
          name: "湖口",
          pinyin: "Hukou",
          label: "Hukou0792"
        },
        {
          code: "0451",
          name: "呼兰",
          pinyin: "Hulan",
          label: "Hulan0451"
        },
        {
          code: "0564",
          name: "霍邱",
          pinyin: "Huoqiu",
          label: "Huoqiu0564"
        },
        {
          code: "0564",
          name: "霍山",
          pinyin: "Huoshan",
          label: "Huoshan0564"
        },
        {
          code: "029",
          name: "户县",
          pinyin: "Huxian",
          label: "Huxian029"
        }
      ]
    },
    {
      initial: "J",
      list: [
        {
          code: "0454",
          name: "佳木斯",
          pinyin: "Jiamusi",
          label: "Jiamusi0454"
        },
        {
          code: "0391",
          name: "焦作",
          pinyin: "Jiaozuo",
          label: "Jiaozuo0391"
        },
        {
          code: "0573",
          name: "嘉兴",
          pinyin: "Jiaxing",
          label: "Jiaxing0573"
        },
        {
          code: "0423",
          name: "吉林",
          pinyin: "Jilin",
          label: "Jilin0423"
        },
        {
          code: "0531",
          name: "济南",
          pinyin: "Jinan",
          label: "Jinan0531"
        },
        {
          code: "0750",
          name: "江门",
          pinyin: "Jiangmen",
          label: "Jiangmen0750"
        },
        {
          code: "0796",
          name: "吉安",
          pinyin: "Jian",
          label: "Jian0796"
        },
        {
          code: "0937",
          name: "嘉峪关",
          pinyin: "Jiayuguan",
          label: "Jiayuguan0937"
        },
        {
          code: "0663",
          name: "揭阳",
          pinyin: "Jieyang",
          label: "Jieyang0663"
        },
        {
          code: "0935",
          name: "金昌",
          pinyin: "Jinchang",
          label: "Jinchang0935"
        },
        {
          code: "0356",
          name: "晋城",
          pinyin: "Jincheng",
          label: "Jincheng0356"
        },
        {
          code: "0798",
          name: "景德镇",
          pinyin: "Jingdezhen",
          label: "Jingdezhen0798"
        },
        {
          code: "0724",
          name: "荆门",
          pinyin: "Jingmen",
          label: "Jingmen0724"
        },
        {
          code: "0716",
          name: "荆州",
          pinyin: "Jingzhou",
          label: "Jingzhou0716"
        },
        {
          code: "0579",
          name: "金华",
          pinyin: "Jinhua",
          label: "Jinhua0579"
        },
        {
          code: "0537",
          name: "济宁",
          pinyin: "Jining",
          label: "Jining0537"
        },
        {
          code: "0354",
          name: "晋中",
          pinyin: "Jinzhong",
          label: "Jinzhong0354"
        },
        {
          code: "0416",
          name: "锦州",
          pinyin: "Jinzhou",
          label: "Jinzhou0416"
        },
        {
          code: "0792",
          name: "九江",
          pinyin: "Jiujiang",
          label: "Jiujiang0792"
        },
        {
          code: "0937",
          name: "酒泉",
          pinyin: "Jiuquan",
          label: "Jiuquan0937"
        },
        {
          code: "0467",
          name: "鸡西",
          pinyin: "Jixi",
          label: "Jixi0467"
        },
        {
          code: "0571",
          name: "建德",
          pinyin: "Jiande",
          label: "Jiande0571"
        },
        {
          code: "0514",
          name: "江都",
          pinyin: "Jiangdu",
          label: "Jiangdu0514"
        },
        {
          code: "023",
          name: "江津",
          pinyin: "Jiangjin",
          label: "Jiangjin023"
        },
        {
          code: "0598",
          name: "将乐",
          pinyin: "Jiangle",
          label: "Jiangle0598"
        },
        {
          code: "0570",
          name: "江山",
          pinyin: "Jiangshan",
          label: "Jiangshan0570"
        },
        {
          code: "0523",
          name: "姜堰",
          pinyin: "Jiangyan",
          label: "Jiangyan0523"
        },
        {
          code: "0510",
          name: "江阴",
          pinyin: "Jiangyin",
          label: "Jiangyin0510"
        },
        {
          code: "0515",
          name: "建湖",
          pinyin: "Jianhu",
          label: "Jianhu0515"
        },
        {
          code: "0598",
          name: "建宁",
          pinyin: "Jianning",
          label: "Jianning0598"
        },
        {
          code: "0599",
          name: "建瓯",
          pinyin: "Jianou",
          label: "Jianou0599"
        },
        {
          code: "0599",
          name: "建阳",
          pinyin: "Jianyang",
          label: "Jianyang0599"
        },
        {
          code: "0796",
          name: "吉安",
          pinyin: "Jian",
          label: "Jian0796"
        },
        {
          code: "0423",
          name: "蛟河",
          pinyin: "Jiaohe",
          label: "Jiaohe0423"
        },
        {
          code: "0753",
          name: "蕉岭",
          pinyin: "Jiaoling",
          label: "Jiaoling0753"
        },
        {
          code: "0532",
          name: "胶南",
          pinyin: "Jiaonan",
          label: "Jiaonan0532"
        },
        {
          code: "0532",
          name: "胶州",
          pinyin: "Jiaozhou",
          label: "Jiaozhou0532"
        },
        {
          code: "0573",
          name: "嘉善",
          pinyin: "Jiashan",
          label: "Jiashan0573"
        },
        {
          code: "0537",
          name: "嘉祥",
          pinyin: "Jiaxiang",
          label: "Jiaxiang0537"
        },
        {
          code: "0663",
          name: "揭东",
          pinyin: "Jiedong",
          label: "Jiedong0663"
        },
        {
          code: "0558",
          name: "界首",
          pinyin: "Jieshou",
          label: "Jieshou0558"
        },
        {
          code: "0663",
          name: "揭西",
          pinyin: "Jiexi",
          label: "Jiexi0663"
        },
        {
          code: "0532",
          name: "即墨",
          pinyin: "Jimo",
          label: "Jimo0532"
        },
        {
          code: "0795",
          name: "靖安",
          pinyin: "Jingan",
          label: "Jingan0795"
        },
        {
          code: "0563",
          name: "旌德",
          pinyin: "Jingde",
          label: "Jingde0563"
        },
        {
          code: "0796",
          name: "井冈山",
          pinyin: "Jinggangshan",
          label: "Jinggangshan0796"
        },
        {
          code: "0523",
          name: "靖江",
          pinyin: "Jingjiang",
          label: "Jingjiang0523"
        },
        {
          code: "0578",
          name: "景宁",
          pinyin: "Jingning",
          label: "Jingning0578"
        },
        {
          code: "0563",
          name: "泾县",
          pinyin: "Jingxian",
          label: "Jingxian0563"
        },
        {
          code: "0311",
          name: "井陉",
          pinyin: "Jingxing",
          label: "Jingxing0311"
        },
        {
          code: "0517",
          name: "金湖",
          pinyin: "Jinhu",
          label: "Jinhu0517"
        },
        {
          code: "0595",
          name: "晋江",
          pinyin: "Jinjiang",
          label: "Jinjiang0595"
        },
        {
          code: "0595",
          name: "金门",
          pinyin: "Jinmen",
          label: "Jinmen0595"
        },
        {
          code: "0871",
          name: "晋宁",
          pinyin: "Jinning",
          label: "Jinning0871"
        },
        {
          code: "0519",
          name: "金坛",
          pinyin: "Jintan",
          label: "Jintan0519"
        },
        {
          code: "028",
          name: "金堂",
          pinyin: "Jintang",
          label: "Jintang028"
        },
        {
          code: "0791",
          name: "进贤",
          pinyin: "Jinxian",
          label: "Jinxian0791"
        },
        {
          code: "0794",
          name: "金溪",
          pinyin: "Jinxi",
          label: "Jinxi0794"
        },
        {
          code: "0537",
          name: "金乡",
          pinyin: "Jinxiang",
          label: "Jinxiang0537"
        },
        {
          code: "0578",
          name: "缙云",
          pinyin: "Jinyun",
          label: "Jinyun0578"
        },
        {
          code: "0564",
          name: "金寨",
          pinyin: "Jinzhai",
          label: "Jinzhai0564"
        },
        {
          code: "0311",
          name: "晋州",
          pinyin: "Jinzhou",
          label: "Jinzhou0311"
        },
        {
          code: "0796",
          name: "吉水",
          pinyin: "Jishui",
          label: "Jishui0796"
        },
        {
          code: "0792",
          name: "九江",
          pinyin: "Jiujiang",
          label: "Jiujiang0792"
        },
        {
          code: "0431",
          name: "九台",
          pinyin: "Jiutai",
          label: "Jiutai0431"
        },
        {
          code: "0563",
          name: "绩溪",
          pinyin: "Jixi",
          label: "Jixi0563"
        },
        {
          code: "0531",
          name: "济阳",
          pinyin: "Jiyang",
          label: "Jiyang0531"
        },
        {
          code: "0391",
          name: "济源",
          pinyin: "Jiyuan",
          label: "Jiyuan0391"
        },
        {
          code: "0530",
          name: "鄄城",
          pinyin: "Juancheng",
          label: "Juancheng0530"
        },
        {
          code: "0539",
          name: "莒南",
          pinyin: "Junan",
          label: "Junan0539"
        },
        {
          code: "0511",
          name: "句容",
          pinyin: "Jurong",
          label: "Jurong0511"
        },
        {
          code: "0633",
          name: "莒县",
          pinyin: "Juxian",
          label: "Juxian0633"
        },
        {
          code: "0530",
          name: "巨野",
          pinyin: "Juye",
          label: "Juye0530"
        }
      ]
    },
    {
      initial: "K",
      list: [
        {
          code: "0378",
          name: "开封",
          pinyin: "Kaifeng",
          label: "Kaifeng0378"
        },
        {
          code: "0871",
          name: "昆明",
          pinyin: "Kunming",
          label: "Kunming0871"
        },
        {
          code: "0998",
          name: "喀什地",
          pinyin: "Kashidi",
          label: "Kashidi0998"
        },
        {
          code: "0990",
          name: "克拉玛依",
          pinyin: "Kelamayi",
          label: "Kelamayi0990"
        },
        {
          code: "0908",
          name: "克孜勒",
          pinyin: "Kezile",
          label: "Kezile0908"
        },
        {
          code: "0570",
          name: "开化",
          pinyin: "Kaihua",
          label: "Kaihua0570"
        },
        {
          code: "0750",
          name: "开平",
          pinyin: "Kaiping",
          label: "Kaiping0750"
        },
        {
          code: "023",
          name: "开县",
          pinyin: "Kaixian",
          label: "Kaixian023"
        },
        {
          code: "0851",
          name: "开阳",
          pinyin: "Kaiyang",
          label: "Kaiyang0851"
        },
        {
          code: "024",
          name: "康平",
          pinyin: "Kangping",
          label: "Kangping024"
        },
        {
          code: "0546",
          name: "垦利",
          pinyin: "Kenli",
          label: "Kenli0546"
        },
        {
          code: "0512",
          name: "昆山",
          pinyin: "Kunshan",
          label: "Kunshan0512"
        }
      ]
    },
    {
      initial: "L",
      list: [
        {
          code: "0772",
          name: "来宾",
          pinyin: "Laibin",
          label: "Laibin0772"
        },
        {
          code: "0931",
          name: "兰州",
          pinyin: "Lanzhou",
          label: "Lanzhou0931"
        },
        {
          code: "0772",
          name: "柳州",
          pinyin: "Liuzhou",
          label: "Liuzhou0772"
        },
        {
          code: "0379",
          name: "洛阳",
          pinyin: "Luoyang",
          label: "Luoyang0379"
        },
        {
          code: "0634",
          name: "莱芜",
          pinyin: "Laiwu",
          label: "Laiwu0634"
        },
        {
          code: "0316",
          name: "廊坊",
          pinyin: "Langfang",
          label: "Langfang0316"
        },
        {
          code: "0891",
          name: "拉萨",
          pinyin: "Lasa",
          label: "Lasa0891"
        },
        {
          code: "0833",
          name: "乐山",
          pinyin: "Leshan",
          label: "Leshan0833"
        },
        {
          code: "0834",
          name: "凉山",
          pinyin: "Liangshan",
          label: "Liangshan0834"
        },
        {
          code: "0518",
          name: "连云港",
          pinyin: "Lianyungang",
          label: "Lianyungang0518"
        },
        {
          code: "0635",
          name: "聊城",
          pinyin: "Liaocheng",
          label: "Liaocheng0635"
        },
        {
          code: "0419",
          name: "辽阳",
          pinyin: "Liaoyang",
          label: "Liaoyang0419"
        },
        {
          code: "0437",
          name: "辽源",
          pinyin: "Liaoyuan",
          label: "Liaoyuan0437"
        },
        {
          code: "0888",
          name: "丽江",
          pinyin: "Lijiang",
          label: "Lijiang0888"
        },
        {
          code: "0883",
          name: "临沧",
          pinyin: "Lincang",
          label: "Lincang0883"
        },
        {
          code: "0357",
          name: "临汾",
          pinyin: "Linfen",
          label: "Linfen0357"
        },
        {
          code: "0930",
          name: "临夏",
          pinyin: "Linxia",
          label: "Linxia0930"
        },
        {
          code: "0539",
          name: "临沂",
          pinyin: "Linyi",
          label: "Linyi0539"
        },
        {
          code: "0894",
          name: "林芝",
          pinyin: "Linzhi",
          label: "Linzhi0894"
        },
        {
          code: "0578",
          name: "丽水",
          pinyin: "Lishui",
          label: "Lishui0578"
        },
        {
          code: "0564",
          name: "六安",
          pinyin: "Liuan",
          label: "Liuan0564"
        },
        {
          code: "0858",
          name: "六盘水",
          pinyin: "Liupanshui",
          label: "Liupanshui0858"
        },
        {
          code: "0939",
          name: "陇南",
          pinyin: "Longnan",
          label: "Longnan0939"
        },
        {
          code: "0597",
          name: "龙岩",
          pinyin: "Longyan",
          label: "Longyan0597"
        },
        {
          code: "0738",
          name: "娄底",
          pinyin: "Loudi",
          label: "Loudi0738"
        },
        {
          code: "0395",
          name: "漯河",
          pinyin: "Luohe",
          label: "Luohe0395"
        },
        {
          code: "0830",
          name: "泸州",
          pinyin: "Luzhou",
          label: "Luzhou0830"
        },
        {
          code: "0358",
          name: "吕梁",
          pinyin: "Lvliang",
          label: "Lvliang0358"
        },
        {
          code: "0550",
          name: "来安",
          pinyin: "Laian",
          label: "Laian0550"
        },
        {
          code: "0532",
          name: "莱西",
          pinyin: "Laixi",
          label: "Laixi0532"
        },
        {
          code: "0535",
          name: "莱阳",
          pinyin: "Laiyang",
          label: "Laiyang0535"
        },
        {
          code: "0535",
          name: "莱州",
          pinyin: "Laizhou",
          label: "Laizhou0535"
        },
        {
          code: "0563",
          name: "郎溪",
          pinyin: "Langxi",
          label: "Langxi0563"
        },
        {
          code: "029",
          name: "蓝田",
          pinyin: "Lantian",
          label: "Lantian029"
        },
        {
          code: "0579",
          name: "兰溪",
          pinyin: "Lanxi",
          label: "Lanxi0579"
        },
        {
          code: "0794",
          name: "乐安",
          pinyin: "Lean",
          label: "Lean0794"
        },
        {
          code: "0751",
          name: "乐昌",
          pinyin: "Lechang",
          label: "Lechang0751"
        },
        {
          code: "0759",
          name: "雷州",
          pinyin: "Leizhou",
          label: "Leizhou0759"
        },
        {
          code: "0534",
          name: "乐陵",
          pinyin: "Leling",
          label: "Leling0534"
        },
        {
          code: "0798",
          name: "乐平",
          pinyin: "Leping",
          label: "Leping0798"
        },
        {
          code: "0577",
          name: "乐清",
          pinyin: "Leqing",
          label: "Leqing0577"
        },
        {
          code: "0315",
          name: "乐亭",
          pinyin: "Leting",
          label: "Leting0315"
        },
        {
          code: "0597",
          name: "连城",
          pinyin: "Liancheng",
          label: "Liancheng0597"
        },
        {
          code: "023",
          name: "梁平",
          pinyin: "Liangping",
          label: "Liangping023"
        },
        {
          code: "0537",
          name: "梁山",
          pinyin: "Liangshan",
          label: "Liangshan0537"
        },
        {
          code: "0799",
          name: "莲花",
          pinyin: "Lianhua",
          label: "Lianhua0799"
        },
        {
          code: "0591",
          name: "连江",
          pinyin: "Lianjiang",
          label: "Lianjiang0591"
        },
        {
          code: "0759",
          name: "廉江",
          pinyin: "Lianjiang",
          label: "Lianjiang0759"
        },
        {
          code: "0763",
          name: "连南",
          pinyin: "Liannan",
          label: "Liannan0763"
        },
        {
          code: "0762",
          name: "连平",
          pinyin: "Lianping",
          label: "Lianping0762"
        },
        {
          code: "0763",
          name: "连山",
          pinyin: "Lianshan",
          label: "Lianshan0763"
        },
        {
          code: "0517",
          name: "涟水",
          pinyin: "Lianshui",
          label: "Lianshui0517"
        },
        {
          code: "0763",
          name: "连州",
          pinyin: "Lianzhou",
          label: "Lianzhou0763"
        },
        {
          code: "024",
          name: "辽中",
          pinyin: "Liaozhong",
          label: "Liaozhong024"
        },
        {
          code: "0794",
          name: "黎川",
          pinyin: "Lichuan",
          label: "Lichuan0794"
        },
        {
          code: "0546",
          name: "利津",
          pinyin: "Lijin",
          label: "Lijin0546"
        },
        {
          code: "0571",
          name: "临安",
          pinyin: "Linan",
          label: "Linan0571"
        },
        {
          code: "0557",
          name: "灵璧",
          pinyin: "Lingbi",
          label: "Lingbi0557"
        },
        {
          code: "0311",
          name: "灵寿",
          pinyin: "Lingshou",
          label: "Lingshou0311"
        },
        {
          code: "0534",
          name: "陵县",
          pinyin: "Lingxian",
          label: "Lingxian0534"
        },
        {
          code: "0576",
          name: "临海",
          pinyin: "Linhai",
          label: "Linhai0576"
        },
        {
          code: "0635",
          name: "临清",
          pinyin: "Linqing",
          label: "Linqing0635"
        },
        {
          code: "0558",
          name: "临泉",
          pinyin: "Linquan",
          label: "Linquan0558"
        },
        {
          code: "0536",
          name: "临朐",
          pinyin: "Linqu",
          label: "Linqu0536"
        },
        {
          code: "0539",
          name: "临沭",
          pinyin: "Linshu",
          label: "Linshu0539"
        },
        {
          code: "0534",
          name: "临邑",
          pinyin: "Linyi",
          label: "Linyi0534"
        },
        {
          code: "025",
          name: "溧水",
          pinyin: "Lishui",
          label: "Lishui025"
        },
        {
          code: "0772",
          name: "柳城",
          pinyin: "Liucheng",
          label: "Liucheng0772"
        },
        {
          code: "0772",
          name: "柳江",
          pinyin: "Liujiang",
          label: "Liujiang0772"
        },
        {
          code: "0731",
          name: "浏阳",
          pinyin: "Liuyang",
          label: "Liuyang0731"
        },
        {
          code: "0558",
          name: "利辛",
          pinyin: "Lixin",
          label: "Lixin0558"
        },
        {
          code: "0519",
          name: "溧阳",
          pinyin: "Liyang",
          label: "Liyang0519"
        },
        {
          code: "0771",
          name: "隆安",
          pinyin: "Longan",
          label: "Longan0771"
        },
        {
          code: "0762",
          name: "龙川",
          pinyin: "Longchuan",
          label: "Longchuan0762"
        },
        {
          code: "0596",
          name: "龙海",
          pinyin: "Longhai",
          label: "Longhai0596"
        },
        {
          code: "0535",
          name: "龙口",
          pinyin: "Longkou",
          label: "Longkou0535"
        },
        {
          code: "0752",
          name: "龙门",
          pinyin: "Longmen",
          label: "Longmen0752"
        },
        {
          code: "0797",
          name: "龙南",
          pinyin: "Longnan",
          label: "Longnan0797"
        },
        {
          code: "0578",
          name: "龙泉",
          pinyin: "Longquan",
          label: "Longquan0578"
        },
        {
          code: "0570",
          name: "龙游",
          pinyin: "Longyou",
          label: "Longyou0570"
        },
        {
          code: "0311",
          name: "栾城",
          pinyin: "Luancheng",
          label: "Luancheng0311"
        },
        {
          code: "0379",
          name: "栾川",
          pinyin: "Luanchuan",
          label: "Luanchuan0379"
        },
        {
          code: "0315",
          name: "滦南",
          pinyin: "Luannan",
          label: "Luannan0315"
        },
        {
          code: "0315",
          name: "滦县",
          pinyin: "Luanxian",
          label: "Luanxian0315"
        },
        {
          code: "0660",
          name: "陆丰",
          pinyin: "Lufeng",
          label: "Lufeng0660"
        },
        {
          code: "0660",
          name: "陆河",
          pinyin: "Luhe",
          label: "Luhe0660"
        },
        {
          code: "0565",
          name: "庐江",
          pinyin: "Lujiang",
          label: "Lujiang0565"
        },
        {
          code: "0766",
          name: "罗定",
          pinyin: "Luoding",
          label: "Luoding0766"
        },
        {
          code: "0379",
          name: "洛宁",
          pinyin: "Luoning",
          label: "Luoning0379"
        },
        {
          code: "0591",
          name: "罗源",
          pinyin: "Luoyuan",
          label: "Luoyuan0591"
        },
        {
          code: "0311",
          name: "鹿泉",
          pinyin: "Luquan",
          label: "Luquan0311"
        },
        {
          code: "0871",
          name: "禄劝",
          pinyin: "Luquan",
          label: "Luquan0871"
        },
        {
          code: "0799",
          name: "芦溪",
          pinyin: "Luxi",
          label: "Luxi0799"
        },
        {
          code: "0772",
          name: "鹿寨",
          pinyin: "Luzhai",
          label: "Luzhai0772"
        }
      ]
    },
    {
      initial: "M",
      list: [
        {
          code: "0555",
          name: "马鞍山",
          pinyin: "Maanshan",
          label: "Maanshan0555"
        },
        {
          code: "0668",
          name: "茂名",
          pinyin: "Maoming",
          label: "Maoming0668"
        },
        {
          code: "028",
          name: "眉山",
          pinyin: "Meishan",
          label: "Meishan028"
        },
        {
          code: "0753",
          name: "梅州",
          pinyin: "Meizhou",
          label: "Meizhou0753"
        },
        {
          code: "0816",
          name: "绵阳",
          pinyin: "Mianyang",
          label: "Mianyang0816"
        },
        {
          code: "0453",
          name: "牡丹江",
          pinyin: "Mudanjiang",
          label: "Mudanjiang0453"
        },
        {
          code: "0771",
          name: "马山",
          pinyin: "Mashan",
          label: "Mashan0771"
        },
        {
          code: "0753",
          name: "梅县",
          pinyin: "Meixian",
          label: "Meixian0753"
        },
        {
          code: "0558",
          name: "蒙城",
          pinyin: "Mengcheng",
          label: "Mengcheng0558"
        },
        {
          code: "0379",
          name: "孟津",
          pinyin: "Mengjin",
          label: "Mengjin0379"
        },
        {
          code: "0539",
          name: "蒙阴",
          pinyin: "Mengyin",
          label: "Mengyin0539"
        },
        {
          code: "0391",
          name: "孟州",
          pinyin: "Mengzhou",
          label: "Mengzhou0391"
        },
        {
          code: "0550",
          name: "明光",
          pinyin: "Mingguang",
          label: "Mingguang0550"
        },
        {
          code: "0598",
          name: "明溪",
          pinyin: "Mingxi",
          label: "Mingxi0598"
        },
        {
          code: "0591",
          name: "闽侯",
          pinyin: "Minhou",
          label: "Minhou0591"
        },
        {
          code: "0591",
          name: "闽清",
          pinyin: "Minqing",
          label: "Minqing0591"
        },
        {
          code: "0451",
          name: "木兰",
          pinyin: "Mulan",
          label: "Mulan0451"
        }
      ]
    },
    {
      initial: "N",
      list: [
        {
          code: "0817",
          name: "南充",
          pinyin: "Nanchong",
          label: "Nanchong0817"
        },
        {
          code: "0791",
          name: "南昌",
          pinyin: "Nanchang",
          label: "Nanchang0791"
        },
        {
          code: "025",
          name: "南京",
          pinyin: "Nanjing",
          label: "Nanjing025"
        },
        {
          code: "0771",
          name: "南宁",
          pinyin: "Nanning",
          label: "Nanning0771"
        },
        {
          code: "0513",
          name: "南通",
          pinyin: "Nantong",
          label: "Nantong0513"
        },
        {
          code: "0574",
          name: "宁波",
          pinyin: "Ningbo",
          label: "Ningbo0574"
        },
        {
          code: "0599",
          name: "南平",
          pinyin: "Nanping",
          label: "Nanping0599"
        },
        {
          code: "0377",
          name: "南阳",
          pinyin: "Nanyang",
          label: "Nanyang0377"
        },
        {
          code: "0896",
          name: "那曲",
          pinyin: "Naqu",
          label: "Naqu0896"
        },
        {
          code: "0832",
          name: "内江",
          pinyin: "Neijiang",
          label: "Neijiang0832"
        },
        {
          code: "0593",
          name: "宁德",
          pinyin: "Ningde",
          label: "Ningde0593"
        },
        {
          code: "0886",
          name: "怒江",
          pinyin: "Nujiang",
          label: "Nujiang0886"
        },
        {
          code: "0595",
          name: "南安",
          pinyin: "Nanan",
          label: "Nanan0595"
        },
        {
          code: "0754",
          name: "南澳",
          pinyin: "Nanao",
          label: "Nanao0754"
        },
        {
          code: "0794",
          name: "南城",
          pinyin: "Nancheng",
          label: "Nancheng0794"
        },
        {
          code: "023",
          name: "南川",
          pinyin: "Nanchuan",
          label: "Nanchuan023"
        },
        {
          code: "0794",
          name: "南丰",
          pinyin: "Nanfeng",
          label: "Nanfeng0794"
        },
        {
          code: "0596",
          name: "南靖",
          pinyin: "Nanjing",
          label: "Nanjing0596"
        },
        {
          code: "0797",
          name: "南康",
          pinyin: "Nankang",
          label: "Nankang0797"
        },
        {
          code: "0553",
          name: "南陵",
          pinyin: "Nanling",
          label: "Nanling0553"
        },
        {
          code: "0751",
          name: "南雄",
          pinyin: "Nanxiong",
          label: "Nanxiong0751"
        },
        {
          code: "0797",
          name: "宁都",
          pinyin: "Ningdu",
          label: "Ningdu0797"
        },
        {
          code: "0563",
          name: "宁国",
          pinyin: "Ningguo",
          label: "Ningguo0563"
        },
        {
          code: "0574",
          name: "宁海",
          pinyin: "Ninghai",
          label: "Ninghai0574"
        },
        {
          code: "0598",
          name: "宁化",
          pinyin: "Ninghua",
          label: "Ninghua0598"
        },
        {
          code: "0534",
          name: "宁津",
          pinyin: "Ningjin",
          label: "Ningjin0534"
        },
        {
          code: "0731",
          name: "宁乡",
          pinyin: "Ningxiang",
          label: "Ningxiang0731"
        },
        {
          code: "0538",
          name: "宁阳",
          pinyin: "Ningyang",
          label: "Ningyang0538"
        },
        {
          code: "0431",
          name: "农安",
          pinyin: "Nongan",
          label: "Nongan0431"
        }
      ]
    },
    {
      initial: "P",
      list: [
        {
          code: "0427",
          name: "盘锦",
          pinyin: "Panjin",
          label: "Panjin0427"
        },
        {
          code: "0812",
          name: "攀枝花",
          pinyin: "Panzhihua",
          label: "Panzhihua0812"
        },
        {
          code: "0375",
          name: "平顶山",
          pinyin: "Pingdingshan",
          label: "Pingdingshan0375"
        },
        {
          code: "0933",
          name: "平凉",
          pinyin: "Pingliang",
          label: "Pingliang0933"
        },
        {
          code: "0799",
          name: "萍乡",
          pinyin: "Pingxiang",
          label: "Pingxiang0799"
        },
        {
          code: "0879",
          name: "普洱",
          pinyin: "Puer",
          label: "Puer0879"
        },
        {
          code: "0594",
          name: "莆田",
          pinyin: "Putian",
          label: "Putian0594"
        },
        {
          code: "0393",
          name: "濮阳",
          pinyin: "Puyang",
          label: "Puyang0393"
        },
        {
          code: "0579",
          name: "磐安",
          pinyin: "Panan",
          label: "Panan0579"
        },
        {
          code: "0423",
          name: "磐石",
          pinyin: "Panshi",
          label: "Panshi0423"
        },
        {
          code: "0516",
          name: "沛县",
          pinyin: "Peixian",
          label: "Peixian0516"
        },
        {
          code: "0535",
          name: "蓬莱",
          pinyin: "Penglai",
          label: "Penglai0535"
        },
        {
          code: "023",
          name: "彭水",
          pinyin: "Pengshui",
          label: "Pengshui023"
        },
        {
          code: "0792",
          name: "彭泽",
          pinyin: "Pengze",
          label: "Pengze0792"
        },
        {
          code: "028",
          name: "彭州",
          pinyin: "Pengzhou",
          label: "Pengzhou028"
        },
        {
          code: "0532",
          name: "平度",
          pinyin: "Pingdu",
          label: "Pingdu0532"
        },
        {
          code: "0596",
          name: "平和",
          pinyin: "Pinghe",
          label: "Pinghe0596"
        },
        {
          code: "0573",
          name: "平湖",
          pinyin: "Pinghu",
          label: "Pinghu0573"
        },
        {
          code: "0593",
          name: "屏南",
          pinyin: "Pingnan",
          label: "Pingnan0593"
        },
        {
          code: "0311",
          name: "平山",
          pinyin: "Pingshan",
          label: "Pingshan0311"
        },
        {
          code: "0591",
          name: "平潭",
          pinyin: "Pingtan",
          label: "Pingtan0591"
        },
        {
          code: "0577",
          name: "平阳",
          pinyin: "Pingyang",
          label: "Pingyang0577"
        },
        {
          code: "0531",
          name: "平阴",
          pinyin: "Pingyin",
          label: "Pingyin0531"
        },
        {
          code: "0539",
          name: "平邑",
          pinyin: "Pingyi",
          label: "Pingyi0539"
        },
        {
          code: "0534",
          name: "平原",
          pinyin: "Pingyuan",
          label: "Pingyuan0534"
        },
        {
          code: "0753",
          name: "平远",
          pinyin: "Pingyuan",
          label: "Pingyuan0753"
        },
        {
          code: "028",
          name: "郫县",
          pinyin: "Pixian",
          label: "Pixian028"
        },
        {
          code: "0516",
          name: "邳州",
          pinyin: "Pizhou",
          label: "Pizhou0516"
        },
        {
          code: "0793",
          name: "鄱阳",
          pinyin: "Poyang",
          label: "Poyang0793"
        },
        {
          code: "0599",
          name: "浦城",
          pinyin: "Pucheng",
          label: "Pucheng0599"
        },
        {
          code: "0579",
          name: "浦江",
          pinyin: "Pujiang",
          label: "Pujiang0579"
        },
        {
          code: "028",
          name: "蒲江",
          pinyin: "Pujiang",
          label: "Pujiang028"
        },
        {
          code: "0411",
          name: "普兰店",
          pinyin: "Pulandian",
          label: "Pulandian0411"
        },
        {
          code: "0663",
          name: "普宁",
          pinyin: "Puning",
          label: "Puning0663"
        }
      ]
    },
    {
      initial: "Q",
      list: [
        {
          code: "0855",
          name: "黔东",
          pinyin: "Qiandong",
          label: "Qiandong0855"
        },
        {
          code: "0532",
          name: "青岛",
          pinyin: "Qingdao",
          label: "Qingdao0532"
        },
        {
          code: "0595",
          name: "泉州",
          pinyin: "Quanzhou",
          label: "Quanzhou0595"
        },
        {
          code: "0854",
          name: "黔南",
          pinyin: "Qiannan",
          label: "Qiannan0854"
        },
        {
          code: "0859",
          name: "黔西南",
          pinyin: "Qianxinan",
          label: "Qianxinan0859"
        },
        {
          code: "0934",
          name: "庆阳",
          pinyin: "Qingyang",
          label: "Qingyang0934"
        },
        {
          code: "0763",
          name: "清远",
          pinyin: "Qingyuan",
          label: "Qingyuan0763"
        },
        {
          code: "0335",
          name: "秦皇岛",
          pinyin: "Qinhuangdao",
          label: "Qinhuangdao0335"
        },
        {
          code: "0777",
          name: "钦州",
          pinyin: "Qinzhou",
          label: "Qinzhou0777"
        },
        {
          code: "0452",
          name: "齐齐哈尔",
          pinyin: "Qiqihaer",
          label: "Qiqihaer0452"
        },
        {
          code: "0464",
          name: "七台河",
          pinyin: "Qitaihe",
          label: "Qitaihe0464"
        },
        {
          code: "0874",
          name: "曲靖",
          pinyin: "Qujing",
          label: "Qujing0874"
        },
        {
          code: "0570",
          name: "衢州",
          pinyin: "Quzhou",
          label: "Quzhou0570"
        },
        {
          code: "0315",
          name: "迁安",
          pinyin: "Qianan",
          label: "Qianan0315"
        },
        {
          code: "0556",
          name: "潜山",
          pinyin: "Qianshan",
          label: "Qianshan0556"
        },
        {
          code: "0793",
          name: "铅山",
          pinyin: "Qianshan",
          label: "Qianshan0793"
        },
        {
          code: "0315",
          name: "迁西",
          pinyin: "Qianxi",
          label: "Qianxi0315"
        },
        {
          code: "0513",
          name: "启东",
          pinyin: "Qidong",
          label: "Qidong0513"
        },
        {
          code: "0534",
          name: "齐河",
          pinyin: "Qihe",
          label: "Qihe0534"
        },
        {
          code: "023",
          name: "綦江",
          pinyin: "Qijiang",
          label: "Qijiang023"
        },
        {
          code: "0559",
          name: "祁门",
          pinyin: "Qimen",
          label: "Qimen0559"
        },
        {
          code: "0598",
          name: "清流",
          pinyin: "Qingliu",
          label: "Qingliu0598"
        },
        {
          code: "0578",
          name: "青田",
          pinyin: "Qingtian",
          label: "Qingtian0578"
        },
        {
          code: "0763",
          name: "清新",
          pinyin: "Qingxin",
          label: "Qingxin0763"
        },
        {
          code: "0566",
          name: "青阳",
          pinyin: "Qingyang",
          label: "Qingyang0566"
        },
        {
          code: "0578",
          name: "庆元",
          pinyin: "Qingyuan",
          label: "Qingyuan0578"
        },
        {
          code: "0534",
          name: "庆云",
          pinyin: "Qingyun",
          label: "Qingyun0534"
        },
        {
          code: "0851",
          name: "清镇",
          pinyin: "Qingzhen",
          label: "Qingzhen0851"
        },
        {
          code: "0536",
          name: "青州",
          pinyin: "Qingzhou",
          label: "Qingzhou0536"
        },
        {
          code: "0391",
          name: "沁阳",
          pinyin: "Qinyang",
          label: "Qinyang0391"
        },
        {
          code: "028",
          name: "邛崃",
          pinyin: "Qionglai",
          label: "Qionglai028"
        },
        {
          code: "0535",
          name: "栖霞",
          pinyin: "Qixia",
          label: "Qixia0535"
        },
        {
          code: "0550",
          name: "全椒",
          pinyin: "Quanjiao",
          label: "Quanjiao0550"
        },
        {
          code: "0797",
          name: "全南",
          pinyin: "Quannan",
          label: "Quannan0797"
        },
        {
          code: "0537",
          name: "曲阜",
          pinyin: "Qufu",
          label: "Qufu0537"
        },
        {
          code: "0751",
          name: "曲江",
          pinyin: "Qujiang",
          label: "Qujiang0751"
        }
      ]
    },
    {
      initial: "R",
      list: [
        {
          code: "0892",
          name: "日喀则",
          pinyin: "Rikaze",
          label: "Rikaze0892"
        },
        {
          code: "0633",
          name: "日照",
          pinyin: "Rizhao",
          label: "Rizhao0633"
        },
        {
          code: "0768",
          name: "饶平",
          pinyin: "Raoping",
          label: "Raoping0768"
        },
        {
          code: "0751",
          name: "仁化",
          pinyin: "Renhua",
          label: "Renhua0751"
        },
        {
          code: "0772",
          name: "融安",
          pinyin: "Rongan",
          label: "Rongan0772"
        },
        {
          code: "023",
          name: "荣昌",
          pinyin: "Rongchang",
          label: "Rongchang023"
        },
        {
          code: "0631",
          name: "荣成",
          pinyin: "Rongcheng",
          label: "Rongcheng0631"
        },
        {
          code: "0772",
          name: "融水",
          pinyin: "Rongshui",
          label: "Rongshui0772"
        },
        {
          code: "0513",
          name: "如东",
          pinyin: "Rudong",
          label: "Rudong0513"
        },
        {
          code: "0513",
          name: "如皋",
          pinyin: "Rugao",
          label: "Rugao0513"
        },
        {
          code: "0577",
          name: "瑞安",
          pinyin: "Ruian",
          label: "Ruian0577"
        },
        {
          code: "0792",
          name: "瑞昌",
          pinyin: "Ruichang",
          label: "Ruichang0792"
        },
        {
          code: "0797",
          name: "瑞金",
          pinyin: "Ruijin",
          label: "Ruijin0797"
        },
        {
          code: "0631",
          name: "乳山",
          pinyin: "Rushan",
          label: "Rushan0631"
        },
        {
          code: "0379",
          name: "汝阳",
          pinyin: "Ruyang",
          label: "Ruyang0379"
        },
        {
          code: "0751",
          name: "乳源",
          pinyin: "Ruyuan",
          label: "Ruyuan0751"
        }
      ]
    },
    {
      initial: "S",
      list: [
        {
          code: "0398",
          name: "三门峡",
          pinyin: "Sanmenxia",
          label: "Sanmenxia0398"
        },
        {
          code: "021",
          name: "上海",
          pinyin: "Shanghai",
          label: "Shanghai021"
        },
        {
          code: "024",
          name: "沈阳",
          pinyin: "Shenyang",
          label: "Shenyang024"
        },
        {
          code: "0755",
          name: "深圳",
          pinyin: "Shenzhen",
          label: "Shenzhen0755"
        },
        {
          code: "0311",
          name: "石家庄",
          pinyin: "Shijiazhuang",
          label: "Shijiazhuang0311"
        },
        {
          code: "0512",
          name: "苏州",
          pinyin: "Suzhou",
          label: "Suzhou0512"
        },
        {
          code: "0598",
          name: "三明",
          pinyin: "Sanming",
          label: "Sanming0598"
        },
        {
          code: "0899",
          name: "三亚",
          pinyin: "Sanya",
          label: "Sanya0899"
        },
        {
          code: "0914",
          name: "商洛",
          pinyin: "Shangluo",
          label: "Shangluo0914"
        },
        {
          code: "0370",
          name: "商丘",
          pinyin: "Shangqiu",
          label: "Shangqiu0370"
        },
        {
          code: "0793",
          name: "上饶",
          pinyin: "Shangrao",
          label: "Shangrao0793"
        },
        {
          code: "0893",
          name: "山南",
          pinyin: "Shannan",
          label: "Shannan0893"
        },
        {
          code: "0754",
          name: "汕头",
          pinyin: "Shantou",
          label: "Shantou0754"
        },
        {
          code: "0660",
          name: "汕尾",
          pinyin: "Shanwei",
          label: "Shanwei0660"
        },
        {
          code: "0751",
          name: "韶关",
          pinyin: "Shaoguan",
          label: "Shaoguan0751"
        },
        {
          code: "0575",
          name: "绍兴",
          pinyin: "Shaoxing",
          label: "Shaoxing0575"
        },
        {
          code: "0739",
          name: "邵阳",
          pinyin: "Shaoyang",
          label: "Shaoyang0739"
        },
        {
          code: "0719",
          name: "十堰",
          pinyin: "Shiyan",
          label: "Shiyan0719"
        },
        {
          code: "0952",
          name: "石嘴山",
          pinyin: "Shizuishan",
          label: "Shizuishan0952"
        },
        {
          code: "0469",
          name: "双鸭山",
          pinyin: "Shuangyashan",
          label: "Shuangyashan0469"
        },
        {
          code: "0349",
          name: "朔州",
          pinyin: "Shuozhou",
          label: "Shuozhou0349"
        },
        {
          code: "0434",
          name: "四平",
          pinyin: "Siping",
          label: "Siping0434"
        },
        {
          code: "0438",
          name: "松原",
          pinyin: "Songyuan",
          label: "Songyuan0438"
        },
        {
          code: "0455",
          name: "绥化",
          pinyin: "Suihua",
          label: "Suihua0455"
        },
        {
          code: "0825",
          name: "遂宁",
          pinyin: "Suining",
          label: "Suining0825"
        },
        {
          code: "0722",
          name: "随州",
          pinyin: "Suizhou",
          label: "Suizhou0722"
        },
        {
          code: "0527",
          name: "宿迁",
          pinyin: "Suqian",
          label: "Suqian0527"
        },
        {
          code: "0557",
          name: "宿州",
          pinyin: "Suzhou",
          label: "Suzhou0557"
        },
        {
          code: "0772",
          name: "三江",
          pinyin: "Sanjiang",
          label: "Sanjiang0772"
        },
        {
          code: "0576",
          name: "三门",
          pinyin: "Sanmen",
          label: "Sanmen0576"
        },
        {
          code: "0596",
          name: "诏安",
          pinyin: "Saoan",
          label: "Saoan0596"
        },
        {
          code: "0795",
          name: "上高",
          pinyin: "Shanggao",
          label: "Shanggao0795"
        },
        {
          code: "0597",
          name: "上杭",
          pinyin: "Shanghang",
          label: "Shanghang0597"
        },
        {
          code: "0531",
          name: "商河",
          pinyin: "Shanghe",
          label: "Shanghe0531"
        },
        {
          code: "0799",
          name: "上栗",
          pinyin: "Shangli",
          label: "Shangli0799"
        },
        {
          code: "0771",
          name: "上林",
          pinyin: "Shanglin",
          label: "Shanglin0771"
        },
        {
          code: "0793",
          name: "上饶",
          pinyin: "Shangrao",
          label: "Shangrao0793"
        },
        {
          code: "0797",
          name: "上犹",
          pinyin: "Shangyou",
          label: "Shangyou0797"
        },
        {
          code: "0575",
          name: "上虞",
          pinyin: "Shangyu",
          label: "Shangyu0575"
        },
        {
          code: "0451",
          name: "尚志",
          pinyin: "Shangzhi",
          label: "Shangzhi0451"
        },
        {
          code: "0599",
          name: "邵武",
          pinyin: "Shaowu",
          label: "Shaowu0599"
        },
        {
          code: "0575",
          name: "绍兴",
          pinyin: "Shaoxing",
          label: "Shaoxing0575"
        },
        {
          code: "0598",
          name: "沙县",
          pinyin: "Shaxian",
          label: "Shaxian0598"
        },
        {
          code: "0580",
          name: "嵊泗",
          pinyin: "Shengsi",
          label: "Shengsi0580"
        },
        {
          code: "0575",
          name: "嵊州",
          pinyin: "Shengzhou",
          label: "Shengzhou0575"
        },
        {
          code: "0635",
          name: "莘县",
          pinyin: "Shenxian",
          label: "Shenxian0635"
        },
        {
          code: "0311",
          name: "深泽",
          pinyin: "Shenze",
          label: "Shenze0311"
        },
        {
          code: "0559",
          name: "歙县",
          pinyin: "Shexian",
          label: "Shexian0559"
        },
        {
          code: "0515",
          name: "射阳",
          pinyin: "Sheyang",
          label: "Sheyang0515"
        },
        {
          code: "0797",
          name: "石城",
          pinyin: "Shicheng",
          label: "Shicheng0797"
        },
        {
          code: "0871",
          name: "石林",
          pinyin: "Shilin",
          label: "Shilin0871"
        },
        {
          code: "0595",
          name: "石狮",
          pinyin: "Shishi",
          label: "Shishi0595"
        },
        {
          code: "0566",
          name: "石台",
          pinyin: "Shitai",
          label: "Shitai0566"
        },
        {
          code: "0751",
          name: "始兴",
          pinyin: "Shixing",
          label: "Shixing0751"
        },
        {
          code: "023",
          name: "石柱",
          pinyin: "Shizhu",
          label: "Shizhu023"
        },
        {
          code: "0536",
          name: "寿光",
          pinyin: "Shouguang",
          label: "Shouguang0536"
        },
        {
          code: "0593",
          name: "寿宁",
          pinyin: "Shouning",
          label: "Shouning0593"
        },
        {
          code: "0564",
          name: "寿县",
          pinyin: "Shouxian",
          label: "Shouxian0564"
        },
        {
          code: "0451",
          name: "双城",
          pinyin: "Shuangcheng",
          label: "Shuangcheng0451"
        },
        {
          code: "028",
          name: "双流",
          pinyin: "Shuangliu",
          label: "Shuangliu028"
        },
        {
          code: "0564",
          name: "舒城",
          pinyin: "Shucheng",
          label: "Shucheng0564"
        },
        {
          code: "0423",
          name: "舒兰",
          pinyin: "Shulan",
          label: "Shulan0423"
        },
        {
          code: "0599",
          name: "顺昌",
          pinyin: "Shunchang",
          label: "Shunchang0599"
        },
        {
          code: "0527",
          name: "沭阳",
          pinyin: "Shuyang",
          label: "Shuyang0527"
        },
        {
          code: "0527",
          name: "泗洪",
          pinyin: "Sihong",
          label: "Sihong0527"
        },
        {
          code: "0758",
          name: "四会",
          pinyin: "Sihui",
          label: "Sihui0758"
        },
        {
          code: "0537",
          name: "泗水",
          pinyin: "Sishui",
          label: "Sishui0537"
        },
        {
          code: "0557",
          name: "泗县",
          pinyin: "Sixian",
          label: "Sixian0557"
        },
        {
          code: "0527",
          name: "泗阳",
          pinyin: "Siyang",
          label: "Siyang0527"
        },
        {
          code: "0871",
          name: "嵩明",
          pinyin: "Songming",
          label: "Songming0871"
        },
        {
          code: "0599",
          name: "松溪",
          pinyin: "Songxi",
          label: "Songxi0599"
        },
        {
          code: "0379",
          name: "嵩县",
          pinyin: "Songxian",
          label: "Songxian0379"
        },
        {
          code: "0578",
          name: "松阳",
          pinyin: "Songyang",
          label: "Songyang0578"
        },
        {
          code: "0578",
          name: "遂昌",
          pinyin: "Suichang",
          label: "Suichang0578"
        },
        {
          code: "0796",
          name: "遂川",
          pinyin: "Suichuan",
          label: "Suichuan0796"
        },
        {
          code: "0516",
          name: "睢宁",
          pinyin: "Suining",
          label: "Suining0516"
        },
        {
          code: "0561",
          name: "濉溪",
          pinyin: "Suixi",
          label: "Suixi0561"
        },
        {
          code: "0759",
          name: "遂溪",
          pinyin: "Suixi",
          label: "Suixi0759"
        },
        {
          code: "0556",
          name: "宿松",
          pinyin: "Susong",
          label: "Susong0556"
        },
        {
          code: "0527",
          name: "宿豫",
          pinyin: "Suyu",
          label: "Suyu0527"
        }
      ]
    },
    {
      initial: "T",
      list: [
        {
          code: "0901",
          name: "塔城地",
          pinyin: "Tachengdi",
          label: "Tachengdi0901"
        },
        {
          code: "022",
          name: "天津",
          pinyin: "Tianjin",
          label: "Tianjin022"
        },
        {
          code: "0576",
          name: "台州",
          pinyin: "Taizhou",
          label: "Taizhou0576"
        },
        {
          code: "0315",
          name: "唐山",
          pinyin: "Tangshan",
          label: "Tangshan0315"
        },
        {
          code: "0538",
          name: "泰安",
          pinyin: "Taian",
          label: "Taian0538"
        },
        {
          code: "0351",
          name: "太原",
          pinyin: "Taiyuan",
          label: "Taiyuan0351"
        },
        {
          code: "0523",
          name: "泰州",
          pinyin: "Taizhou",
          label: "Taizhou0523"
        },
        {
          code: "0938",
          name: "天水",
          pinyin: "Tianshui",
          label: "Tianshui0938"
        },
        {
          code: "0410",
          name: "铁岭",
          pinyin: "Tieling",
          label: "Tieling0410"
        },
        {
          code: "0919",
          name: "铜川",
          pinyin: "Tongchuan",
          label: "Tongchuan0919"
        },
        {
          code: "0435",
          name: "通化",
          pinyin: "Tonghua",
          label: "Tonghua0435"
        },
        {
          code: "0475",
          name: "通辽",
          pinyin: "Tongliao",
          label: "Tongliao0475"
        },
        {
          code: "0562",
          name: "铜陵",
          pinyin: "Tongling",
          label: "Tongling0562"
        },
        {
          code: "0856",
          name: "铜仁",
          pinyin: "Tongren",
          label: "Tongren0856"
        },
        {
          code: "0995",
          name: "吐鲁番",
          pinyin: "Tulufan",
          label: "Tulufan0995"
        },
        {
          code: "0512",
          name: "太仓",
          pinyin: "Taicang",
          label: "Taicang0512"
        },
        {
          code: "0558",
          name: "太和",
          pinyin: "Taihe",
          label: "Taihe0558"
        },
        {
          code: "0796",
          name: "泰和",
          pinyin: "Taihe",
          label: "Taihe0796"
        },
        {
          code: "0556",
          name: "太湖",
          pinyin: "Taihu",
          label: "Taihu0556"
        },
        {
          code: "0598",
          name: "泰宁",
          pinyin: "Taining",
          label: "Taining0598"
        },
        {
          code: "0750",
          name: "台山",
          pinyin: "Taishan",
          label: "Taishan0750"
        },
        {
          code: "0577",
          name: "泰顺",
          pinyin: "Taishun",
          label: "Taishun0577"
        },
        {
          code: "0523",
          name: "泰兴",
          pinyin: "Taixing",
          label: "Taixing0523"
        },
        {
          code: "0539",
          name: "郯城",
          pinyin: "Tancheng",
          label: "Tancheng0539"
        },
        {
          code: "0315",
          name: "唐海",
          pinyin: "Tanghai",
          label: "Tanghai0315"
        },
        {
          code: "0623",
          name: "滕州",
          pinyin: "Tengzhou",
          label: "Tengzhou0623"
        },
        {
          code: "0550",
          name: "天长",
          pinyin: "Tianchang",
          label: "Tianchang0550"
        },
        {
          code: "0576",
          name: "天台",
          pinyin: "Tiantai",
          label: "Tiantai0576"
        },
        {
          code: "0556",
          name: "桐城",
          pinyin: "Tongcheng",
          label: "Tongcheng0556"
        },
        {
          code: "0795",
          name: "铜鼓",
          pinyin: "Tonggu",
          label: "Tonggu0795"
        },
        {
          code: "0451",
          name: "通河",
          pinyin: "Tonghe",
          label: "Tonghe0451"
        },
        {
          code: "023",
          name: "铜梁",
          pinyin: "Tongliang",
          label: "Tongliang023"
        },
        {
          code: "0562",
          name: "铜陵",
          pinyin: "Tongling",
          label: "Tongling0562"
        },
        {
          code: "0571",
          name: "桐庐",
          pinyin: "Tonglu",
          label: "Tonglu0571"
        },
        {
          code: "023",
          name: "潼南",
          pinyin: "Tongnan",
          label: "Tongnan023"
        },
        {
          code: "0516",
          name: "铜山",
          pinyin: "Tongshan",
          label: "Tongshan0516"
        },
        {
          code: "0573",
          name: "桐乡",
          pinyin: "Tongxiang",
          label: "Tongxiang0573"
        },
        {
          code: "0513",
          name: "通州",
          pinyin: "Tongzhou",
          label: "Tongzhou0513"
        }
      ]
    },
    {
      initial: "W",
      list: [
        {
          code: "0913",
          name: "渭南",
          pinyin: "Weinan",
          label: "Weinan0913"
        },
        {
          code: "0536",
          name: "潍坊",
          pinyin: "Weifang",
          label: "Weifang0536"
        },
        {
          code: "0631",
          name: "威海",
          pinyin: "Weihai",
          label: "Weihai0631"
        },
        {
          code: "027",
          name: "武汉",
          pinyin: "Wuhan",
          label: "Wuhan027"
        },
        {
          code: "0510",
          name: "无锡",
          pinyin: "Wuxi",
          label: "Wuxi0510"
        },
        {
          code: "0876",
          name: "文山",
          pinyin: "Wenshan",
          label: "Wenshan0876"
        },
        {
          code: "0577",
          name: "温州",
          pinyin: "Wenzhou",
          label: "Wenzhou0577"
        },
        {
          code: "0473",
          name: "乌海",
          pinyin: "Wuhai",
          label: "Wuhai0473"
        },
        {
          code: "0553",
          name: "芜湖",
          pinyin: "Wuhu",
          label: "Wuhu0553"
        },
        {
          code: "0474",
          name: "乌兰察布",
          pinyin: "Wulanchabu",
          label: "Wulanchabu0474"
        },
        {
          code: "0991",
          name: "乌鲁木齐",
          pinyin: "Wulumuqi",
          label: "Wulumuqi0991"
        },
        {
          code: "0935",
          name: "武威",
          pinyin: "Wuwei",
          label: "Wuwei0935"
        },
        {
          code: "0953",
          name: "吴忠",
          pinyin: "Wuzhong",
          label: "Wuzhong0953"
        },
        {
          code: "0774",
          name: "梧州",
          pinyin: "Wuzhou",
          label: "Wuzhou0774"
        },
        {
          code: "0411",
          name: "瓦房店",
          pinyin: "Wafangdian",
          label: "Wafangdian0411"
        },
        {
          code: "0796",
          name: "万安",
          pinyin: "Wanan",
          label: "Wanan0796"
        },
        {
          code: "0731",
          name: "望城",
          pinyin: "Wangcheng",
          label: "Wangcheng0731"
        },
        {
          code: "0556",
          name: "望江",
          pinyin: "Wangjiang",
          label: "Wangjiang0556"
        },
        {
          code: "0793",
          name: "万年",
          pinyin: "Wannian",
          label: "Wannian0793"
        },
        {
          code: "0795",
          name: "万载",
          pinyin: "Wanzai",
          label: "Wanzai0795"
        },
        {
          code: "0537",
          name: "微山",
          pinyin: "Weishan",
          label: "Weishan0537"
        },
        {
          code: "0577",
          name: "文成",
          pinyin: "Wencheng",
          label: "Wencheng0577"
        },
        {
          code: "0631",
          name: "文登",
          pinyin: "Wendeng",
          label: "Wendeng0631"
        },
        {
          code: "0751",
          name: "翁源",
          pinyin: "Wengyuan",
          label: "Wengyuan0751"
        },
        {
          code: "0576",
          name: "温岭",
          pinyin: "Wenling",
          label: "Wenling0576"
        },
        {
          code: "0537",
          name: "汶上",
          pinyin: "Wenshang",
          label: "Wenshang0537"
        },
        {
          code: "0391",
          name: "温县",
          pinyin: "Wenxian",
          label: "Wenxian0391"
        },
        {
          code: "0558",
          name: "涡阳",
          pinyin: "Woyang",
          label: "Woyang0558"
        },
        {
          code: "0451",
          name: "五常",
          pinyin: "Wuchang",
          label: "Wuchang0451"
        },
        {
          code: "0534",
          name: "武城",
          pinyin: "Wucheng",
          label: "Wucheng0534"
        },
        {
          code: "0759",
          name: "吴川",
          pinyin: "Wuchuan",
          label: "Wuchuan0759"
        },
        {
          code: "0543",
          name: "无棣",
          pinyin: "Wudi",
          label: "Wudi0543"
        },
        {
          code: "0552",
          name: "五河",
          pinyin: "Wuhe",
          label: "Wuhe0552"
        },
        {
          code: "0553",
          name: "芜湖",
          pinyin: "Wuhu",
          label: "Wuhu0553"
        },
        {
          code: "0753",
          name: "五华",
          pinyin: "Wuhua",
          label: "Wuhua0753"
        },
        {
          code: "0311",
          name: "无极",
          pinyin: "Wuji",
          label: "Wuji0311"
        },
        {
          code: "0512",
          name: "吴江",
          pinyin: "Wujiang",
          label: "Wujiang0512"
        },
        {
          code: "0633",
          name: "五莲",
          pinyin: "Wulian",
          label: "Wulian0633"
        },
        {
          code: "023",
          name: "武隆",
          pinyin: "Wulong",
          label: "Wulong023"
        },
        {
          code: "0771",
          name: "武鸣",
          pinyin: "Wuming",
          label: "Wuming0771"
        },
        {
          code: "0792",
          name: "武宁",
          pinyin: "Wuning",
          label: "Wuning0792"
        },
        {
          code: "0597",
          name: "武平",
          pinyin: "Wuping",
          label: "Wuping0597"
        },
        {
          code: "023",
          name: "巫山",
          pinyin: "Wushan",
          label: "Wushan023"
        },
        {
          code: "0565",
          name: "无为",
          pinyin: "Wuwei",
          label: "Wuwei0565"
        },
        {
          code: "023",
          name: "巫溪",
          pinyin: "Wuxi",
          label: "Wuxi023"
        },
        {
          code: "0579",
          name: "武义",
          pinyin: "Wuyi",
          label: "Wuyi0579"
        },
        {
          code: "0599",
          name: "武夷山",
          pinyin: "Wuyishan",
          label: "Wuyishan0599"
        },
        {
          code: "0793",
          name: "婺源",
          pinyin: "Wuyuan",
          label: "Wuyuan0793"
        },
        {
          code: "0391",
          name: "武陟",
          pinyin: "Wuzhi",
          label: "Wuzhi0391"
        }
      ]
    },
    {
      initial: "X",
      list: [
        {
          code: "0710",
          name: "襄樊",
          pinyin: "Xiangfan",
          label: "Xiangfan0710"
        },
        {
          code: "0592",
          name: "厦门",
          pinyin: "Xiamen",
          label: "Xiamen0592"
        },
        {
          code: "029",
          name: "西安",
          pinyin: "Xian",
          label: "Xian029"
        },
        {
          code: "0374",
          name: "许昌",
          pinyin: "Xuchang",
          label: "Xuchang0374"
        },
        {
          code: "0516",
          name: "徐州",
          pinyin: "Xuzhou",
          label: "Xuzhou0516"
        },
        {
          code: "0732",
          name: "湘潭",
          pinyin: "Xiangtan",
          label: "Xiangtan0732"
        },
        {
          code: "0743",
          name: "湘西",
          pinyin: "Xiangxi",
          label: "Xiangxi0743"
        },
        {
          code: "0715",
          name: "咸宁",
          pinyin: "Xianning",
          label: "Xianning0715"
        },
        {
          code: "029",
          name: "咸阳",
          pinyin: "Xianyang",
          label: "Xianyang029"
        },
        {
          code: "0712",
          name: "孝感",
          pinyin: "Xiaogan",
          label: "Xiaogan0712"
        },
        {
          code: "0479",
          name: "锡林郭勒盟",
          pinyin: "Xilinguolemeng",
          label: "Xilinguolemeng0479"
        },
        {
          code: "0482",
          name: "兴安盟",
          pinyin: "Xinganmeng",
          label: "Xinganmeng0482"
        },
        {
          code: "0319",
          name: "邢台",
          pinyin: "Xingtai",
          label: "Xingtai0319"
        },
        {
          code: "0971",
          name: "西宁",
          pinyin: "Xining",
          label: "Xining0971"
        },
        {
          code: "0373",
          name: "新乡",
          pinyin: "Xinxiang",
          label: "Xinxiang0373"
        },
        {
          code: "0376",
          name: "信阳",
          pinyin: "Xinyang",
          label: "Xinyang0376"
        },
        {
          code: "0790",
          name: "新余",
          pinyin: "Xinyu",
          label: "Xinyu0790"
        },
        {
          code: "0350",
          name: "忻州",
          pinyin: "Xinzhou",
          label: "Xinzhou0350"
        },
        {
          code: "0691",
          name: "西双版纳",
          pinyin: "Xishuangbanna",
          label: "Xishuangbanna0691"
        },
        {
          code: "0563",
          name: "宣城",
          pinyin: "Xuancheng",
          label: "Xuancheng0563"
        },
        {
          code: "0796",
          name: "峡江",
          pinyin: "Xiajiang",
          label: "Xiajiang0796"
        },
        {
          code: "0534",
          name: "夏津",
          pinyin: "Xiajin",
          label: "Xiajin0534"
        },
        {
          code: "0574",
          name: "象山",
          pinyin: "Xiangshan",
          label: "Xiangshan0574"
        },
        {
          code: "0515",
          name: "响水",
          pinyin: "Xiangshui",
          label: "Xiangshui0515"
        },
        {
          code: "0576",
          name: "仙居",
          pinyin: "Xianju",
          label: "Xianju0576"
        },
        {
          code: "0594",
          name: "仙游",
          pinyin: "Xianyou",
          label: "Xianyou0594"
        },
        {
          code: "0557",
          name: "萧县",
          pinyin: "Xiaoxian",
          label: "Xiaoxian0557"
        },
        {
          code: "0593",
          name: "霞浦",
          pinyin: "Xiapu",
          label: "Xiapu0593"
        },
        {
          code: "0851",
          name: "息烽",
          pinyin: "Xifeng",
          label: "Xifeng0851"
        },
        {
          code: "0379",
          name: "新安",
          pinyin: "Xinan",
          label: "Xinan0379"
        },
        {
          code: "0575",
          name: "新昌",
          pinyin: "Xinchang",
          label: "Xinchang0575"
        },
        {
          code: "0797",
          name: "信丰",
          pinyin: "Xinfeng",
          label: "Xinfeng0797"
        },
        {
          code: "0751",
          name: "新丰",
          pinyin: "Xinfeng",
          label: "Xinfeng0751"
        },
        {
          code: "0796",
          name: "新干",
          pinyin: "Xingan",
          label: "Xingan0796"
        },
        {
          code: "0797",
          name: "兴国",
          pinyin: "Xingguo",
          label: "Xingguo0797"
        },
        {
          code: "0523",
          name: "兴化",
          pinyin: "Xinghua",
          label: "Xinghua0523"
        },
        {
          code: "0753",
          name: "兴宁",
          pinyin: "Xingning",
          label: "Xingning0753"
        },
        {
          code: "0311",
          name: "行唐",
          pinyin: "Xingtang",
          label: "Xingtang0311"
        },
        {
          code: "0371",
          name: "荥阳",
          pinyin: "Xingyang",
          label: "Xingyang0371"
        },
        {
          code: "0792",
          name: "星子",
          pinyin: "Xingzi",
          label: "Xingzi0792"
        },
        {
          code: "0311",
          name: "辛集",
          pinyin: "Xinji",
          label: "Xinji0311"
        },
        {
          code: "0791",
          name: "新建",
          pinyin: "Xinjian",
          label: "Xinjian0791"
        },
        {
          code: "028",
          name: "新津",
          pinyin: "Xinjin",
          label: "Xinjin028"
        },
        {
          code: "0311",
          name: "新乐",
          pinyin: "Xinle",
          label: "Xinle0311"
        },
        {
          code: "024",
          name: "新民",
          pinyin: "Xinmin",
          label: "Xinmin024"
        },
        {
          code: "0371",
          name: "新密",
          pinyin: "Xinmi",
          label: "Xinmi0371"
        },
        {
          code: "0538",
          name: "新泰",
          pinyin: "Xintai",
          label: "Xintai0538"
        },
        {
          code: "0766",
          name: "新兴",
          pinyin: "Xinxing",
          label: "Xinxing0766"
        },
        {
          code: "0516",
          name: "新沂",
          pinyin: "Xinyi",
          label: "Xinyi0516"
        },
        {
          code: "0668",
          name: "信宜",
          pinyin: "Xinyi",
          label: "Xinyi0668"
        },
        {
          code: "0371",
          name: "新郑",
          pinyin: "Xinzheng",
          label: "Xinzheng0371"
        },
        {
          code: "0559",
          name: "休宁",
          pinyin: "Xiuning",
          label: "Xiuning0559"
        },
        {
          code: "023",
          name: "秀山",
          pinyin: "Xiushan",
          label: "Xiushan023"
        },
        {
          code: "0792",
          name: "修水",
          pinyin: "Xiushui",
          label: "Xiushui0792"
        },
        {
          code: "0851",
          name: "修文",
          pinyin: "Xiuwen",
          label: "Xiuwen0851"
        },
        {
          code: "0391",
          name: "修武",
          pinyin: "Xiuwu",
          label: "Xiuwu0391"
        },
        {
          code: "0871",
          name: "寻甸",
          pinyin: "Xundian",
          label: "Xundian0871"
        },
        {
          code: "0797",
          name: "寻乌",
          pinyin: "Xunwu",
          label: "Xunwu0797"
        },
        {
          code: "0759",
          name: "徐闻",
          pinyin: "Xuwen",
          label: "Xuwen0759"
        },
        {
          code: "0517",
          name: "盱眙",
          pinyin: "Xuyi",
          label: "Xuyi0517"
        }
      ]
    },
    {
      initial: "Y",
      list: [
        {
          code: "0835",
          name: "雅安",
          pinyin: "Yaan",
          label: "Yaan0835"
        },
        {
          code: "0514",
          name: "扬州",
          pinyin: "Yangzhou",
          label: "Yangzhou0514"
        },
        {
          code: "0535",
          name: "烟台",
          pinyin: "Yantai",
          label: "Yantai0535"
        },
        {
          code: "0911",
          name: "延安",
          pinyin: "Yanan",
          label: "Yanan0911"
        },
        {
          code: "0433",
          name: "延边",
          pinyin: "Yanbian",
          label: "Yanbian0433"
        },
        {
          code: "0515",
          name: "盐城",
          pinyin: "Yancheng",
          label: "Yancheng0515"
        },
        {
          code: "0662",
          name: "阳江",
          pinyin: "Yangjiang",
          label: "Yangjiang0662"
        },
        {
          code: "0353",
          name: "阳泉",
          pinyin: "Yangquan",
          label: "Yangquan0353"
        },
        {
          code: "0831",
          name: "宜宾",
          pinyin: "Yibin",
          label: "Yibin0831"
        },
        {
          code: "0717",
          name: "宜昌",
          pinyin: "Yichang",
          label: "Yichang0717"
        },
        {
          code: "0458",
          name: "伊春",
          pinyin: "Yichun",
          label: "Yichun0458"
        },
        {
          code: "0795",
          name: "宜春",
          pinyin: "Yichun",
          label: "Yichun0795"
        },
        {
          code: "0999",
          name: "伊犁哈萨克",
          pinyin: "Yilihasake",
          label: "Yilihasake0999"
        },
        {
          code: "0951",
          name: "银川",
          pinyin: "Yinchuan",
          label: "Yinchuan0951"
        },
        {
          code: "0417",
          name: "营口",
          pinyin: "Yingkou",
          label: "Yingkou0417"
        },
        {
          code: "0701",
          name: "鹰潭",
          pinyin: "Yingtan",
          label: "Yingtan0701"
        },
        {
          code: "0737",
          name: "益阳",
          pinyin: "Yiyang",
          label: "Yiyang0737"
        },
        {
          code: "0746",
          name: "永州",
          pinyin: "Yongzhou",
          label: "Yongzhou0746"
        },
        {
          code: "0730",
          name: "岳阳",
          pinyin: "Yueyang",
          label: "Yueyang0730"
        },
        {
          code: "0775",
          name: "玉林",
          pinyin: "Yulin",
          label: "Yulin0775"
        },
        {
          code: "0912",
          name: "榆林",
          pinyin: "Yulin",
          label: "Yulin0912"
        },
        {
          code: "0359",
          name: "运城",
          pinyin: "Yuncheng",
          label: "Yuncheng0359"
        },
        {
          code: "0766",
          name: "云浮",
          pinyin: "Yunfu",
          label: "Yunfu0766"
        },
        {
          code: "0976",
          name: "玉树",
          pinyin: "Yushu",
          label: "Yushu0976"
        },
        {
          code: "0877",
          name: "玉溪",
          pinyin: "Yuxi",
          label: "Yuxi0877"
        },
        {
          code: "0662",
          name: "阳春",
          pinyin: "Yangchun",
          label: "Yangchun0662"
        },
        {
          code: "0662",
          name: "阳东",
          pinyin: "Yangdong",
          label: "Yangdong0662"
        },
        {
          code: "0635",
          name: "阳谷",
          pinyin: "Yanggu",
          label: "Yanggu0635"
        },
        {
          code: "0763",
          name: "阳山",
          pinyin: "Yangshan",
          label: "Yangshan0763"
        },
        {
          code: "0543",
          name: "阳信",
          pinyin: "Yangxin",
          label: "Yangxin0543"
        },
        {
          code: "0662",
          name: "阳西",
          pinyin: "Yangxi",
          label: "Yangxi0662"
        },
        {
          code: "0511",
          name: "扬中",
          pinyin: "Yangzhong",
          label: "Yangzhong0511"
        },
        {
          code: "0379",
          name: "偃师",
          pinyin: "Yanshi",
          label: "Yanshi0379"
        },
        {
          code: "0451",
          name: "延寿",
          pinyin: "Yanshou",
          label: "Yanshou0451"
        },
        {
          code: "0537",
          name: "兖州",
          pinyin: "Yanzhou",
          label: "Yanzhou0537"
        },
        {
          code: "0379",
          name: "伊川",
          pinyin: "Yichuan",
          label: "Yichuan0379"
        },
        {
          code: "0795",
          name: "宜丰",
          pinyin: "Yifeng",
          label: "Yifeng0795"
        },
        {
          code: "0794",
          name: "宜黄",
          pinyin: "Yihuang",
          label: "Yihuang0794"
        },
        {
          code: "0451",
          name: "依兰",
          pinyin: "Yilan",
          label: "Yilan0451"
        },
        {
          code: "0871",
          name: "宜良",
          pinyin: "Yiliang",
          label: "Yiliang0871"
        },
        {
          code: "0539",
          name: "沂南",
          pinyin: "Yinan",
          label: "Yinan0539"
        },
        {
          code: "0763",
          name: "英德",
          pinyin: "Yingde",
          label: "Yingde0763"
        },
        {
          code: "0558",
          name: "颍上",
          pinyin: "Yingshang",
          label: "Yingshang0558"
        },
        {
          code: "0539",
          name: "沂水",
          pinyin: "Yishui",
          label: "Yishui0539"
        },
        {
          code: "0579",
          name: "义乌",
          pinyin: "Yiwu",
          label: "Yiwu0579"
        },
        {
          code: "0559",
          name: "黟县",
          pinyin: "Yixian",
          label: "Yixian0559"
        },
        {
          code: "0510",
          name: "宜兴",
          pinyin: "Yixing",
          label: "Yixing0510"
        },
        {
          code: "0793",
          name: "弋阳",
          pinyin: "Yiyang",
          label: "Yiyang0793"
        },
        {
          code: "0379",
          name: "宜阳",
          pinyin: "Yiyang",
          label: "Yiyang0379"
        },
        {
          code: "0533",
          name: "沂源",
          pinyin: "Yiyuan",
          label: "Yiyuan0533"
        },
        {
          code: "0514",
          name: "仪征",
          pinyin: "Yizheng",
          label: "Yizheng0514"
        },
        {
          code: "0598",
          name: "永安",
          pinyin: "Yongan",
          label: "Yongan0598"
        },
        {
          code: "023",
          name: "永川",
          pinyin: "Yongchuan",
          label: "Yongchuan023"
        },
        {
          code: "0595",
          name: "永春",
          pinyin: "Yongchun",
          label: "Yongchun0595"
        },
        {
          code: "0931",
          name: "永登",
          pinyin: "Yongdeng",
          label: "Yongdeng0931"
        },
        {
          code: "0597",
          name: "永定",
          pinyin: "Yongding",
          label: "Yongding0597"
        },
        {
          code: "0796",
          name: "永丰",
          pinyin: "Yongfeng",
          label: "Yongfeng0796"
        },
        {
          code: "0423",
          name: "永吉",
          pinyin: "Yongji",
          label: "Yongji0423"
        },
        {
          code: "0577",
          name: "永嘉",
          pinyin: "Yongjia",
          label: "Yongjia0577"
        },
        {
          code: "0579",
          name: "永康",
          pinyin: "Yongkang",
          label: "Yongkang0579"
        },
        {
          code: "0771",
          name: "邕宁",
          pinyin: "Yongning",
          label: "Yongning0771"
        },
        {
          code: "0591",
          name: "永泰",
          pinyin: "Yongtai",
          label: "Yongtai0591"
        },
        {
          code: "0796",
          name: "永新",
          pinyin: "Yongxin",
          label: "Yongxin0796"
        },
        {
          code: "0792",
          name: "永修",
          pinyin: "Yongxiu",
          label: "Yongxiu0792"
        },
        {
          code: "0598",
          name: "尤溪",
          pinyin: "Youxi",
          label: "Youxi0598"
        },
        {
          code: "023",
          name: "酉阳",
          pinyin: "Youyang",
          label: "Youyang023"
        },
        {
          code: "0311",
          name: "元氏",
          pinyin: "Yuanshi",
          label: "Yuanshi0311"
        },
        {
          code: "0534",
          name: "禹城",
          pinyin: "Yucheng",
          label: "Yucheng0534"
        },
        {
          code: "0797",
          name: "于都",
          pinyin: "Yudu",
          label: "Yudu0797"
        },
        {
          code: "0556",
          name: "岳西",
          pinyin: "Yuexi",
          label: "Yuexi0556"
        },
        {
          code: "0793",
          name: "余干",
          pinyin: "Yugan",
          label: "Yugan0793"
        },
        {
          code: "0576",
          name: "玉环",
          pinyin: "Yuhuan",
          label: "Yuhuan0576"
        },
        {
          code: "0701",
          name: "余江",
          pinyin: "Yujiang",
          label: "Yujiang0701"
        },
        {
          code: "0766",
          name: "郁南",
          pinyin: "Yunan",
          label: "Yunan0766"
        },
        {
          code: "0766",
          name: "云安",
          pinyin: "Yunan",
          label: "Yunan0766"
        },
        {
          code: "0530",
          name: "郓城",
          pinyin: "Yuncheng",
          label: "Yuncheng0530"
        },
        {
          code: "0578",
          name: "云和",
          pinyin: "Yunhe",
          label: "Yunhe0578"
        },
        {
          code: "0596",
          name: "云霄",
          pinyin: "Yunxiao",
          label: "Yunxiao0596"
        },
        {
          code: "023",
          name: "云阳",
          pinyin: "Yunyang",
          label: "Yunyang023"
        },
        {
          code: "0793",
          name: "玉山",
          pinyin: "Yushan",
          label: "Yushan0793"
        },
        {
          code: "0431",
          name: "榆树",
          pinyin: "Yushu",
          label: "Yushu0431"
        },
        {
          code: "0537",
          name: "鱼台",
          pinyin: "Yutai",
          label: "Yutai0537"
        },
        {
          code: "0315",
          name: "玉田",
          pinyin: "Yutian",
          label: "Yutian0315"
        },
        {
          code: "0574",
          name: "余姚",
          pinyin: "Yuyao",
          label: "Yuyao0574"
        },
        {
          code: "0931",
          name: "榆中",
          pinyin: "Yuzhong",
          label: "Yuzhong0931"
        }
      ]
    },
    {
      initial: "Z",
      list: [
        {
          code: "0596",
          name: "漳州",
          pinyin: "Zhangzhou",
          label: "Zhangzhou0596"
        },
        {
          code: "0371",
          name: "郑州",
          pinyin: "Zhengzhou",
          label: "Zhengzhou0371"
        },
        {
          code: "0760",
          name: "中山",
          pinyin: "Zhongshan",
          label: "Zhongshan0760"
        },
        {
          code: "0756",
          name: "珠海",
          pinyin: "Zhuhai",
          label: "Zhuhai0756"
        },
        {
          code: "0623",
          name: "枣庄",
          pinyin: "Zaozhuang",
          label: "Zaozhuang0623"
        },
        {
          code: "0744",
          name: "张家界",
          pinyin: "Zhangjiajie",
          label: "Zhangjiajie0744"
        },
        {
          code: "0313",
          name: "张家口",
          pinyin: "Zhangjiakou",
          label: "Zhangjiakou0313"
        },
        {
          code: "0936",
          name: "张掖",
          pinyin: "Zhangye",
          label: "Zhangye0936"
        },
        {
          code: "0759",
          name: "湛江",
          pinyin: "Zhanjiang",
          label: "Zhanjiang0759"
        },
        {
          code: "0758",
          name: "肇庆",
          pinyin: "Zhaoqing",
          label: "Zhaoqing0758"
        },
        {
          code: "0870",
          name: "昭通",
          pinyin: "Zhaotong",
          label: "Zhaotong0870"
        },
        {
          code: "0511",
          name: "镇江",
          pinyin: "Zhenjiang",
          label: "Zhenjiang0511"
        },
        {
          code: "0955",
          name: "中卫",
          pinyin: "Zhongwei",
          label: "Zhongwei0955"
        },
        {
          code: "0394",
          name: "周口",
          pinyin: "Zhoukou",
          label: "Zhoukou0394"
        },
        {
          code: "0580",
          name: "舟山",
          pinyin: "Zhoushan",
          label: "Zhoushan0580"
        },
        {
          code: "0396",
          name: "驻马店",
          pinyin: "Zhumadian",
          label: "Zhumadian0396"
        },
        {
          code: "0731",
          name: "株洲",
          pinyin: "Zhuzhou",
          label: "Zhuzhou0731"
        },
        {
          code: "0533",
          name: "淄博",
          pinyin: "Zibo",
          label: "Zibo0533"
        },
        {
          code: "0813",
          name: "自贡",
          pinyin: "Zigong",
          label: "Zigong0813"
        },
        {
          code: "028",
          name: "资阳",
          pinyin: "Ziyang",
          label: "Ziyang028"
        },
        {
          code: "0852",
          name: "遵义",
          pinyin: "Zunyi",
          label: "Zunyi0852"
        },
        {
          code: "0311",
          name: "赞皇",
          pinyin: "Zanhuang",
          label: "Zanhuang0311"
        },
        {
          code: "020",
          name: "增城",
          pinyin: "Zengcheng",
          label: "Zengcheng020"
        },
        {
          code: "0512",
          name: "张家港",
          pinyin: "Zhangjiagang",
          label: "Zhangjiagang0512"
        },
        {
          code: "0597",
          name: "漳平",
          pinyin: "Zhangping",
          label: "Zhangping0597"
        },
        {
          code: "0596",
          name: "漳浦",
          pinyin: "Zhangpu",
          label: "Zhangpu0596"
        },
        {
          code: "0531",
          name: "章丘",
          pinyin: "Zhangqiu",
          label: "Zhangqiu0531"
        },
        {
          code: "0795",
          name: "樟树",
          pinyin: "Zhangshu",
          label: "Zhangshu0795"
        },
        {
          code: "0543",
          name: "沾化",
          pinyin: "Zhanhua",
          label: "Zhanhua0543"
        },
        {
          code: "0311",
          name: "赵县",
          pinyin: "Zhaoxian",
          label: "Zhaoxian0311"
        },
        {
          code: "0535",
          name: "招远",
          pinyin: "Zhaoyuan",
          label: "Zhaoyuan0535"
        },
        {
          code: "0311",
          name: "正定",
          pinyin: "Zhengding",
          label: "Zhengding0311"
        },
        {
          code: "0599",
          name: "政和",
          pinyin: "Zhenghe",
          label: "Zhenghe0599"
        },
        {
          code: "0593",
          name: "柘荣",
          pinyin: "Zherong",
          label: "Zherong0593"
        },
        {
          code: "0371",
          name: "中牟",
          pinyin: "Zhongmou",
          label: "Zhongmou0371"
        },
        {
          code: "023",
          name: "忠县",
          pinyin: "Zhongxian",
          label: "Zhongxian023"
        },
        {
          code: "0593",
          name: "周宁",
          pinyin: "Zhouning",
          label: "Zhouning0593"
        },
        {
          code: "029",
          name: "周至",
          pinyin: "Zhouzhi",
          label: "Zhouzhi029"
        },
        {
          code: "0411",
          name: "庄河",
          pinyin: "Zhuanghe",
          label: "Zhuanghe0411"
        },
        {
          code: "0536",
          name: "诸城",
          pinyin: "Zhucheng",
          label: "Zhucheng0536"
        },
        {
          code: "0575",
          name: "诸暨",
          pinyin: "Zhuji",
          label: "Zhuji0575"
        },
        {
          code: "0762",
          name: "紫金",
          pinyin: "Zijin",
          label: "Zijin0762"
        },
        {
          code: "0794",
          name: "资溪",
          pinyin: "Zixi",
          label: "Zixi0794"
        },
        {
          code: "0537",
          name: "邹城",
          pinyin: "Zoucheng",
          label: "Zoucheng0537"
        },
        {
          code: "0543",
          name: "邹平",
          pinyin: "Zouping",
          label: "Zouping0543"
        },
        {
          code: "0315",
          name: "遵化",
          pinyin: "Zunhua",
          label: "Zunhua0315"
        }
      ]
    }
  ];
  const cityData = {
    city
  };
  const _sfc_main$2 = {
    __name: "city",
    setup(__props) {
      const mainStore = useMainStore();
      let CityName = vue.computed(() => mainStore.currentCity);
      const HotCity = vue.ref(["北京", "深圳", "上海", "成都", "广州", "广东"]);
      const LatterName = vue.ref(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
      const CityList = vue.ref(cityData.city);
      const LetterId = vue.ref("");
      const key = "XW7BZ-HNCC5-QLRIH-IBKOZ-MHQ2F-CXFON";
      function getLetter(name) {
        LetterId.value = name;
      }
      function getStorage(Name) {
        mainStore.setCity(Name);
        uni.navigateBack({
          url: "/pages/home/home"
        });
      }
      function requestLocationPermission() {
        plus.geolocation.getCurrentPosition(getLocation, handleLocationPermissionDenied, { geocode: true });
      }
      function getLocation() {
        uni.getLocation({
          type: "gcj02",
          success: (res) => {
            let lat = res.latitude;
            let lng = res.longitude;
            getCityByLatLon(lat, lng);
          },
          fail: (errMsg) => {
            formatAppLog("log", "at pages/city/city.vue:121", errMsg);
            uni.showToast({
              title: "无法获取位置信息",
              icon: "none"
            });
          }
        });
      }
      function handleLocationPermissionDenied() {
        uni.showModal({
          title: "位置权限被拒绝",
          content: "请在系统设置或应用权限管理中允许使用位置信息",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            if (res.confirm) {
              uni.openSetting({
                success() {
                  uni.getLocation();
                }
              });
            }
          }
        });
      }
      function getCityByLatLon(lat, lng) {
        uni.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${lat},${lng}&key=${key}`,
          method: "GET",
          success(ress) {
            let CityNameResult = ress.data.result.address_component.city;
            mainStore.setCity(CityNameResult);
            CityName = CityNameResult;
          },
          fail() {
            uni.showToast({
              "title": "对不起，数据获取失败！",
              "icon": "none"
            });
          }
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "main-Location" }, [
          vue.createElementVNode("view", { class: "Location-Letter" }, [
            vue.createElementVNode("view", {
              "hover-class": "Click-Latter",
              onClick: _cache[0] || (_cache[0] = ($event) => getLetter("ScrollTop"))
            }, "*"),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(LatterName.value, (l, i) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: i,
                  "hover-class": "Click-Latter",
                  onClick: ($event) => getLetter(l),
                  style: vue.normalizeStyle({ "color": LetterId.value === l ? "#4662D9" : "#000" })
                }, vue.toDisplayString(l), 13, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "ynq-AutoLocation u_flex jcsb" }, [
            vue.createElementVNode("view", { class: "ynq-AutoAddress" }, [
              vue.createElementVNode("text", { class: "ynq ynq-dizhi" }),
              vue.createElementVNode("text", null, "当前定位："),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(vue.unref(CityName)),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", {
              class: "ynq-ReLocation u_flex",
              onClick: requestLocationPermission
            }, [
              vue.createElementVNode("i", { class: "iconfont icon-location" }),
              vue.createElementVNode("text", { class: "ml5" }, "重新定位")
            ])
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            class: "ynq-ScrollView",
            "scroll-into-view": LetterId.value
          }, [
            vue.createElementVNode("view", {
              class: "ynq-HotCity",
              id: "ScrollTop"
            }, [
              vue.createElementVNode("view", { class: "ynq-HotCityTitle" }, [
                vue.createElementVNode("text", { class: "ynq ynq-fire" }),
                vue.createElementVNode("text", null, "热门城市")
              ]),
              vue.createElementVNode("view", { class: "ynq-HotCityList flex" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(HotCity.value, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("text", {
                      class: "radius-3",
                      onClick: ($event) => getStorage(item),
                      key: index2
                    }, vue.toDisplayString(item), 9, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createElementVNode("view", { class: "ynq-CityList" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(CityList.value, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: index2 },
                    [
                      vue.createElementVNode("view", {
                        class: "ynq-CityLetter",
                        id: item.initial
                      }, vue.toDisplayString(item.initial), 9, ["id"]),
                      vue.createElementVNode("view", { class: "ynq-CityLine" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(item.list, (item_city, name_index) => {
                            return vue.openBlock(), vue.createElementBlock("text", {
                              onClick: ($event) => getStorage(item_city.name),
                              key: name_index
                            }, vue.toDisplayString(item_city.name), 9, ["onClick"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 8, ["scroll-into-view"])
        ]);
      };
    }
  };
  const PagesCityCity = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b6ff804d"], ["__file", "D:/khons-charge/pages/city/city.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 搜索界面 ");
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/khons-charge/pages/search/search.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/scan/scan", PagesScanScan);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/city/city", PagesCityCity);
  __definePage("pages/search/search", PagesSearchSearch);
  const _sfc_main = {
    onLaunch() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/khons-charge/App.vue"]]);
  function get(state, path) {
    return path.reduce((obj, p) => {
      return obj == null ? void 0 : obj[p];
    }, state);
  }
  function set(state, path, val) {
    return path.slice(0, -1).reduce((obj, p) => {
      if (!/^(__proto__)$/.test(p)) {
        return obj[p] = obj[p] || {};
      } else
        return {};
    }, state)[path[path.length - 1]] = val, state;
  }
  function pick(baseState, paths) {
    return paths.reduce((substate, path) => {
      const pathArray = path.split(".");
      return set(
        substate,
        pathArray,
        get(baseState, pathArray)
      );
    }, {});
  }
  const isObject = (v) => typeof v === "object" && v !== null;
  const normalizeOptions = (options, globalOptions) => {
    options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
    return new Proxy(options, {
      get(t2, p, r) {
        return Reflect.get(t2, p, r) || Reflect.get(globalOptions, p, r);
      }
    });
  };
  function passage(key) {
    return key;
  }
  function createUnistorage(globalOptions = {}) {
    const { key: normalizeKey = passage } = globalOptions || {};
    if (globalOptions == null ? void 0 : globalOptions.key) {
      delete globalOptions.key;
    }
    return function(ctx) {
      {
        const { store, options } = ctx;
        let { unistorage } = options || {};
        if (!unistorage)
          return;
        const {
          paths = null,
          afterRestore,
          beforeRestore,
          serializer = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
          },
          key = store.$id
        } = normalizeOptions(unistorage, globalOptions);
        beforeRestore == null ? void 0 : beforeRestore(ctx);
        const normalizedKey = normalizeKey(key);
        try {
          const fromStorage = uni.getStorageSync(normalizedKey);
          if (fromStorage) {
            store.$patch(serializer.deserialize(fromStorage));
          }
        } catch (_error) {
        }
        afterRestore == null ? void 0 : afterRestore(ctx);
        store.$subscribe(
          (_, state) => {
            try {
              const toStore = Array.isArray(paths) ? pick(state, paths) : state;
              uni.setStorageSync(
                normalizedKey,
                serializer.serialize(toStore)
              );
            } catch (_error) {
            }
          },
          { detached: true }
        );
      }
    };
  }
  function createApp() {
    const app = vue.createVueApp(App);
    const store = createPinia();
    store.use(createUnistorage());
    app.use(store);
    return {
      app,
      Pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
