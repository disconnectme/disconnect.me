/*
  The script for disconnect.me.

  Copyright 2010, 2011 Disconnect, Inc.

  This program is free software: you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program. If not, see <http://www.gnu.org/licenses/>.

  Brian Kennish <byoogle@gmail.com>
*/

/* Registers lightboxing, installation, and subscription handlers. */
// MailChimp unaliases "$".
jQuery(function() {
  jQuery('.feature a').lightBox();
  var browser = jQuery.browser;
  var activated;
  var markup = '<br>';
  var button = jQuery('#mc-embedded-subscribe');

  if (browser.webkit) {
    activated = true;
    markup += 'Install <span class="name">Disconnect</span>';
  } else {
    markup +=
        'Subscribe to the Disconnect Newsletter to<br>find out when your browser is supported';
    if (browser.msie) button.addClass('ie');
  }

  var textbox = jQuery('#mce-EMAIL');

  setTimeout(function() {
    var attribute = 'tabindex';

    if (activated) {
      jQuery('#installation a').
        addClass('activated').
        attr(attribute, 1).
        attr(
          'href',
          navigator.userAgent.indexOf('Chrome') >= 0 ?
              'https://chrome.google.com/extensions/detail/jeoacafpbcihiomhlakheieifhpjdfeo'
                  : 'disconnect.safariextz'
        );
      textbox.attr(attribute, 2);
      button.attr(attribute, 3);
    }

    jQuery('#installation .description').html(markup);
  }, 1000);

  var className = 'ghosted';

  textbox.focus(function() {
    if (textbox.hasClass(className)) textbox.removeClass(className).val('');
  }).blur(function() {
    if (textbox.val() == '') textbox.addClass(className).val('Email address');
  }).blur();
});
