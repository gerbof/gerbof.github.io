$(function(){
    $('#contacto').attr('novalidate', 'true');
    $('#contacto').attrvalidate();
    $('#resetButton').click(function(){ $('#contacto').attrvalidate('reset'); });
});
