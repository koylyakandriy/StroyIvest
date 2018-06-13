$(document).ready(function(){
	var elem = document.querySelector('.calc-range');
	var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true, step: 10000 });
	var per, month, result, total, monthly; /*стандартні змінні для відслдковування*/
	var money = +$('.calc-range').val(); /*значення грошей*/

	// output range summ
	$( '.calc-range' ).on('change', function(event){
		$( '.calc-summ_invest_number span' ).text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	})

	// Функція для передачі даних при натисканні на кнопку
	$('input[name="programms"]').on('change', function(event) {
		month = +$(this).attr('data-month');
		per = +$(this).attr('data-per');
		result = Math.round(per / 12 * month * money);
		total = result + money;
		monthly = parseInt(result / 12);
		$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('#month').text(month);
	});

	$( '.calc-range' ).on('change', function(event){
		$( '.calc-summ_invest_number span' ).text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		var radio = $('input[name="programms"]:checked'); /*відслідковуємо радіо кнопку*/
		money = +$(this).val();
		month = +radio.attr('data-month');
		per = +radio.attr('data-per');
		result = Math.round(per / 12 * month * money);
		total = result + money;
		monthly = parseInt(result / 12);
		$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	});
});