/*
  The script for the Disconnect DB icon page.

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

  Authors (one per line):

    Brian Kennish <byoogle@gmail.com>
*/

/* Identifies an image. */
function id(image) {
  var url = image.src;
  return $('#' + url.substr(url.lastIndexOf('/') + 1).split('.', 1));
}

/* Registers description and lightboxing handlers. */
$(function() {
  var defaultDescription = $('#default');
  var className = 'inlined';
  defaultDescription.addClass(className);

  $('.feature img:first-child').mouseover(function() {
    defaultDescription.removeClass(className);
    id(this).addClass(className);
  }).mouseout(function() {
    id(this).removeClass(className);
    defaultDescription.addClass(className);
  }).each(function() {
    var thumbnail = $(this);

    thumbnail.click(function() {
      var modal = thumbnail.next();

      modal.lightbox_me({
        centered: true,
        onClose: function() { thumbnail.after(modal); }
      });
    });
  });
});
