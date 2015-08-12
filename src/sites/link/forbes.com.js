$.register({
  rule: {
    host: /^www\.forbes\.com$/,
  },
  ready: function () {
    'use strict';

    var o = $.window.ox_zones;
    if (o) {
      $.openLink(o.page_url);
    }
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
