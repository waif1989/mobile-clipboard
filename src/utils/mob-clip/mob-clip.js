var Clipboard = require('clipboard');
var $ = require('jquery');
function clip () {
    $(function () {
        $('.btn1').attr('data-clipboard-text', '粘贴板$attr-button-class-bodytouch测试');
        var clipboard = new Clipboard('.btn1');
        clipboard.on('success', function(e) {
            $('.btn1').hide()
        });
        /////////////////////////////////////////////////////////////////
        /*new Clipboard('#img0');
        new Clipboard('.img0');
        $('#img1').attr('data-clipboard-text', '粘贴板$attr-img-id测试');
        new Clipboard('#img1');
        $('.img1').attr('data-clipboard-text', '粘贴板$attr-img-class测试');
        new Clipboard('.img1');*/
        //////////////////////////////////////////////////////////////////
       /* new Clipboard('#div0');
        new Clipboard('.div0');
        $('#div1').attr('data-clipboard-text', '粘贴板$attr-div-id测试');
        new Clipboard('#div1');
        $('.div1').attr('data-clipboard-text', '粘贴板$attr-div-class测试');
        new Clipboard('.div1');*/
        /////////////////////////////////////////////////////////////////
       /* new Clipboard('#btn0');
        new Clipboard('.btn0');
        $('#btn1').attr('data-clipboard-text', '粘贴板$attr-button-id测试');
        new Clipboard('#btn1');
        $('.btn1').attr('data-clipboard-text', '粘贴板$attr-button-class测试');
        new Clipboard('.btn1');*/
    })
}
module.exports = {clip: clip};
module.exports.default = {clip: clip};