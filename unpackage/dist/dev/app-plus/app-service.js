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
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$d = {
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
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$5], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/khons-charge/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
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
  const isObject = (val) => val !== null && typeof val === "object";
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
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
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
      index++;
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
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
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
  const _sfc_main$c = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$4], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/khons-charge/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
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
      onTabBar(item, index) {
        switch (index) {
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
          vue.renderList($data.TabBarList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "list",
              onClick: ($event) => $options.onTabBar(item, index),
              style: vue.normalizeStyle({ marginTop: index == 1 ? "-18px" : "0px" }),
              key: index
            }, [
              vue.withDirectives(vue.createElementVNode("image", {
                src: item.acImg,
                mode: "widthFix",
                style: vue.normalizeStyle({ width: index == 1 ? "60px" : "24px", borderRadius: index == 1 ? "50%" : "0px", boxShadow: index == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none" })
              }, null, 12, ["src"]), [
                [vue.vShow, $props.tabBarShow === index]
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                src: item.img,
                mode: "widthFix",
                style: vue.normalizeStyle({ width: index == 1 ? "60px" : "24px", borderRadius: index == 1 ? "50%" : "0px", boxShadow: index == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none" })
              }, null, 12, ["src"]), [
                [vue.vShow, $props.tabBarShow != index]
              ]),
              vue.createCommentVNode(" background: (index == 1) ?  'red' : '' "),
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass({ "action": $props.tabBarShow === index }),
                  style: vue.normalizeStyle({ marginTop: index == 1 ? "4px" : "0px" })
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
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$3], ["__scopeId", "data-v-61f40987"], ["__file", "D:/khons-charge/uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue"]]);
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
  const __default__$1 = {
    onReady() {
      uni.hideTabBar();
    }
  };
  const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$1, {
    __name: "home",
    setup(__props) {
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
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$2);
        const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", { class: "search" }, [
              vue.createElementVNode("button", {
                type: "default",
                onClick: chooseCity
              }, "选择城市"),
              vue.createVNode(_component_uni_search_bar, {
                placeholder: "输入目的地/电站名称",
                bgColor: "#ffffff",
                readonly: ""
              })
            ]),
            vue.createVNode(HomeBanner, { banners })
          ]),
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
    const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_0$1);
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
      function walletItemClick(index) {
        emits("walletItemClick", index);
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
                vue.renderList(wallet, (item, index) => {
                  return vue.createElementVNode("view", {
                    key: item,
                    class: "wallet-item",
                    onClick: ($event) => walletItemClick(index)
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
    __name: "MenuCard",
    emits: ["menuItemClick"],
    setup(__props, { emit: emits }) {
      function menuItemClick(index) {
        emits("menuItemClick", index);
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
        return vue.openBlock(), vue.createElementBlock("view", { class: "menu-card" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(menu, (item, index) => {
              return vue.createElementVNode("view", {
                key: item,
                class: "menu-item",
                onClick: ($event) => menuItemClick(index)
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
        ]);
      };
    }
  };
  const MenuCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-ecdae198"], ["__file", "D:/khons-charge/pages/user/cpns/MenuCard.vue"]]);
  const _sfc_main$5 = {
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
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-ae4bee67"], ["__file", "D:/khons-charge/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _imports_0 = "/static/images/add.png";
  const _sfc_main$4 = {
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
  const MyCar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-01e53afa"], ["__file", "D:/khons-charge/pages/user/cpns/MyCar.vue"]]);
  const _sfc_main$3 = {
    __name: "MoreService",
    emits: ["moreServItemClick"],
    setup(__props, { emit: emits }) {
      function moreServItemClick(index) {
        emits("moreServItemClick", index);
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
                  vue.renderList(menu, (item, index) => {
                    return vue.createElementVNode("view", {
                      class: "menu-item",
                      onClick: ($event) => moreServItemClick(index)
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
  const MoreService = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5fce1903"], ["__file", "D:/khons-charge/pages/user/cpns/MoreService.vue"]]);
  const __default__ = {
    onReady() {
      uni.hideTabBar();
    }
  };
  const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
    __name: "user",
    setup(__props) {
      vue.onMounted(() => {
        uni.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: "#e0ecfc"
        });
      });
      function handleSetClick() {
        formatAppLog("log", "at pages/user/user.vue:35", "设置按钮被点击了");
      }
      function handleWalletItemClick(index) {
        formatAppLog("log", "at pages/user/user.vue:40", "walletItem被点击了：", index);
      }
      function handleMenuItemClick(index) {
        formatAppLog("log", "at pages/user/user.vue:45", "menuItem被点击了：", index);
      }
      function handleAddCarClick() {
        formatAppLog("log", "at pages/user/user.vue:50", "点击了添加爱车");
      }
      function handleServiceClick(index) {
        formatAppLog("log", "at pages/user/user.vue:55", "更多服务被点击了：", index);
      }
      return (_ctx, _cache) => {
        const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "user" }, [
          vue.createVNode(UserInfo, {
            onSetClick: handleSetClick,
            onWalletItemClick: handleWalletItemClick
          }),
          vue.createVNode(MenuCard, { onMenuItemClick: handleMenuItemClick }),
          vue.createVNode(MyCar, { onAddCarClick: handleAddCarClick }),
          vue.createVNode(MoreService, { onMoreServItemClick: handleServiceClick }),
          vue.createVNode(_component_cc_myTabbar, { tabBarShow: 2 })
        ]);
      };
    }
  });
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/khons-charge/pages/user/user.vue"]]);
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
  const _sfc_main$1 = {
    data() {
      return {
        CityName: "北京",
        HotCity: ["北京", "深圳", "上海", "成都", "广州", "广东"],
        LatterName: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ],
        CityList: cityData.city,
        //引用json数据
        LetterId: ""
      };
    },
    onLoad() {
      this.getCityName();
    },
    methods: {
      //获取定位点
      getLetter(name) {
        this.LetterId = name;
      },
      //存储城市缓存
      getStorage(Name) {
        uni.setStorage({
          key: "City_Name",
          data: Name
        });
        this.CityName = Name;
        uni.navigateBack({
          url: "/pages/home/home"
        });
      },
      //获得城市缓存
      getCityName() {
        let _that = this;
        setTimeout(function() {
          uni.getStorage({
            key: "City_Name",
            success(res) {
              _that.CityName = res.data;
            }
          });
        }, 500);
      },
      //重新定位按钮
      getLocationAuth() {
        let that = this;
        uni.getSystemInfo({
          success(res) {
            formatAppLog("log", "at pages/city/city.vue:102", "getSystemInfo", res);
            let locationEnabled = res.locationEnabled;
            let locationAuthorized = res.locationAuthorized;
            if (locationEnabled == false || locationAuthorized == false) {
              uni.showModal({
                title: "提示",
                content: "请打开定位服务功能",
                showCancel: false,
                // 不显示取消按钮
                success: (res2) => {
                  formatAppLog("log", "at pages/city/city.vue:112", "showModalres", res2);
                }
              });
            } else {
              uni.authorize({
                scope: "scope.userLocation",
                //授权的类型为地理位置	
                success: (res2) => {
                  uni.getLocation({
                    type: "gcj02",
                    geocode: true,
                    isHighAccuracy: true,
                    accuracy: "best",
                    // 精度值为20m
                    success: function(res3) {
                      let lat = res3.latitude;
                      let lng = res3.longitude;
                      let key = "XW7BZ-HNCC5-QLRIH-IBKOZ-MHQ2F-CXFON";
                      uni.request({
                        url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + lat + "," + lng + "&key=" + key,
                        method: "GET",
                        success(ress) {
                          ress.data;
                          let CityName = ress.data.result.address_component.city;
                          that.CityName = CityName;
                          let Street = ress.data.result.address_component.street;
                          that.CityName = Street;
                          uni.setStorage({
                            key: "City_Name",
                            data: Street
                          });
                        },
                        fail() {
                          uni.showToast({
                            "title": "对不起，数据获取失败！",
                            "icon": "none"
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "main-Location" }, [
      vue.createCommentVNode(" 字母区域 "),
      vue.createElementVNode("view", { class: "Location-Letter" }, [
        vue.createElementVNode("view", {
          "hover-class": "Click-Latter",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.getLetter("ScrollTop"))
        }, "*"),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.LatterName, (l, i) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: i,
              "hover-class": "Click-Latter",
              onClick: ($event) => $options.getLetter(l),
              style: vue.normalizeStyle({ "color": $data.LetterId === l ? "#4662D9" : "#000" })
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
            vue.toDisplayString($data.CityName),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "ynq-ReLocation u_flex",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.getLocationAuth && $options.getLocationAuth(...args))
        }, [
          vue.createCommentVNode(' <u-icon name="reload" color="#000"></u-icon> '),
          vue.createElementVNode("text", { class: "ml5" }, "重新定位")
        ])
      ]),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        class: "ynq-ScrollView",
        "scroll-into-view": $data.LetterId
      }, [
        vue.createCommentVNode(" 热门城市 "),
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
              vue.renderList($data.HotCity, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("text", {
                  class: "radius-3",
                  onClick: ($event) => $options.getStorage(item),
                  key: index
                }, vue.toDisplayString(item), 9, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createCommentVNode(" 城市列表 "),
        vue.createElementVNode("view", { class: "ynq-CityList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.CityList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: index },
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
                          onClick: ($event) => $options.getStorage(item_city.name),
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
  }
  const PagesCityCity = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-b6ff804d"], ["__file", "D:/khons-charge/pages/city/city.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/scan/scan", PagesScanScan);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/city/city", PagesCityCity);
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
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
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
