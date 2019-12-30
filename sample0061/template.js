$('.sample0').click(function () {
  alert('alert!');
});

$(document).on('click', '.sample0', function () {
  alert('on alert');
})

$('.sample0-html').html('<input type="button" class="sample0" value="イベント">');
