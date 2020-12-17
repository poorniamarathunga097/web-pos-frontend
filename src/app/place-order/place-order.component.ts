/**
 * @author : Poonrni Amarathunga <poorniamarathunga097@gmail.com>
 * @since : 11/26/20
**/

import placeOrder from './place-order.component.html';
import style from './place-order.component.scss';

import '../../../node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '../../../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js';
//import '../../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
//import '../../../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
//import '../../../node_modules/admin-lte/dist/js/adminlte.js';
import '../../../node_modules/admin-lte/dist/js/pages/dashboard.js';
import '../../../node_modules/admin-lte/dist/js/demo.js';

$("app-place-order").replaceWith('<div id="place-order">' + placeOrder + '</div>');
var html = '<style>' + style + '</style>';
$("#place-order").append(html);