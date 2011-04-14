/*
  The script for disconnectere.com.

  Copyright 2010 Brian Kennish

  Licensed under the Apache License, Version 2.0 (the "License"); you may not
  use this file except in compliance with the License. You may obtain a copy of
  the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
  License for the specific language governing permissions and limitations under
  the License.

  Brian Kennish <byoogle@gmail.com>
*/

/* Installs lightbox and form handlers. */
// MailChimp unaliases "$".
jQuery(function() {
  jQuery('.feature a').lightBox();
  var textbox = jQuery('#mce-EMAIL');
  var className = 'ghosted';

  textbox.focus(function() {
    if (textbox.hasClass(className)) textbox.val('').removeClass(className);
  }).blur(function() {
    if (textbox.val() == '') textbox.addClass(className).val('Email address');
  }).blur();

  if (jQuery.browser.msie) jQuery('#mc-embedded-subscribe').addClass('ie');
});
