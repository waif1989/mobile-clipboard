var Clipboard = require('clipboard');
var $ = require('jquery');
function clip () {
    $(function () {
        new Clipboard('#img0');
        new Clipboard('.img0');
        $('#img1').attr('data-clipboard-text', '粘贴板$attr-img-id测试');
        new Clipboard('#img1');
        $('.img1').attr('data-clipboard-text', '粘贴板$attr-img-class测试');
        new Clipboard('.img1');
        //////////////////////////////////////////////////////////////////
        new Clipboard('#div0');
        new Clipboard('.div0');
        $('#div1').attr('data-clipboard-text', '粘贴板$attr-div-id测试');
        new Clipboard('#div1');
        $('.div1').attr('data-clipboard-text', '粘贴板$attr-div-class测试');
        new Clipboard('.div1');
    })
}
module.exports = {clip: clip};
module.exports.default = {clip: clip};