jQuery(document).ready(function() {
	//range input kasko
 $( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1997,
      max: 2018,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  } );

//валидация осаго
$('.form-step-two').validate({
   rules:{

            names:{
                required: true,
            },

              fam:{
                required: true,
              },
              otch:{
              	required: true,
              },
              year_auto:{
              required: true,
              minlength: 4,
              },
              phone:{
              	required: true,
              },
             date:{
              required: true,
             },
             inn:{
             	required:true,
             	number:true,
             }, 
             gosnumber:{
             	required: true,
             },
             number_kuzov:{
             	required:true,
             }, 
             adress:{
             	required: true,
             },
             fio:{
             	required: true,
             },
             gorod:{
             	required: true,
             },
             street:{
             	required: true,
             },
             house:{
             	required: true,
             },
             room:{
             	required: true,
             }
            
       },

       messages:{

            names:{
                required: "Пожалуйста, заполните поле имя",
            },

            fam:{
                required: "Пожалуйста, заполните поле фамилия",

            },
            otch:{
            	required: "Пожалуйста, заполните поле отчество"
            },
            year_auto:{
                required: "Введите год регистрации",
                minlength: "Минимальное значение 4-символа",                
            },
            phone:{
            	required: 'Введите, ваш контактный телефон',
            },
            date:{
              required: "Пожалуйста, укажите дату начала полиса",
            },
            inn:{
            	required: "Укажите ИНН",
            	number: "Поле, ИНН может содержать символы от 0-9",
            },
            gosnumber:{
            required: "Укажите, Ваш гос-номер",
            },
            number_kuzov:{
            	required: "Укажите, номер кузова",
            },
            adress:{
            	required: "Укажите адрес страхователя",
            },
            fio:{
             required: "Укажите, Ф.И.О на английском",
            },
            gorod:{
             required: "Укажите, город регистрации страхователя",
            },
            street:{
            	required: "Укажите улицу регистации страхователя",
            },
            house:{
            	required: "Укажите дом регистрации страхователя",
            },
            room:{
            	required: "Укажите квартиру регистрации страхователя",
            }
       }

});
//validate kasko
$('.form_kasko').validate({
	rules:{
		names:{
			required: true,
		},
		mark:{
			required:true,
		},
		model:{
			required:true,
		},
		phone:{
			required:true,
		},
		year:{
			required:true,
		},
		country:{
			required: true,
		},
		$count:{
			required: true,
			minlength: 1,
		}
	},
	messages:{
		names:{
			required: "Пожалуйста, укажите имя",
		},
		mark:{
			required: "Пожалуйста, укажите марку автомобиля",
		},
		model:{
			required: "Пожалуйста, укажите модель автомобиля",
		},
		phone:{
			required:"Пожалуйста, укажите ваш телефон",
		},
		year:{
			required: "Пожалуйста, укажите год выпуска авто",
		},
		country:{
			required: "Укажите страну поездки",
		},
		$count:{
			required: "Укажите количество ткристов",
		}
	}
});

$('.btn_green_cart').click(function(){
	$('.next_form_green_cart').fadeIn(1500);
	$('.btn_green_cart').hide();
	});	
$('.back').click(function(){
	$('.next_form_green_cart').hide(1000);
	$('.btn_green_cart').show();
	$('.div-result').fadeOut(500);

});
$('#input-radio').click(function(){
	$('.hidden_green_cert').fadeIn(1000);
});
$('#input-radio1').click(function(){
	$('.hidden_green_cert').fadeOut(500);

});
$('.summ').click(function(){
$('.div-result').show();
var summ;
var skidka;
var srok = $('.select_srok').val();
var auto = $('.select_auto').val();
var select_auto = $('.osago-auto').val();
var select_region = $('.osago_region').val();
//рассчет осаго киев
if(select_auto == 1 && select_region == 55){
	skidka = 440.64 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 440.64 - skidka;
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 2 && select_region == 55){
	skidka = 881.28 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 881.28 - skidka;
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 3 && select_region == 55){
	skidka = 1296 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1296 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 4 && select_region == 55){
	skidka = 1477.44 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1644.88 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 5 && select_region == 55){
	skidka = 1529.28 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1529.28 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 6 && select_region == 55){
	skidka = 2358.72 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2358.72 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 7 && select_region == 55){
	skidka = 2592 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2592 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 8 && select_region == 55){
	skidka = 2825.28 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2825.28 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 9 && select_region == 55){
	skidka = 3304.80 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 3304.80 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 10 && select_region == 55){
	skidka = 3888 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 3888 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 11 && select_region == 55){
	skidka = 440.64 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 440.64 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 12 && select_region == 55){
	skidka = 648 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 648 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}

//расчет одесса харьков
if(select_auto == 1 && select_region == 56 || select_auto == 1 && select_region == 57){
	skidka = 312.12 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 312.12 - skidka;
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 2 && select_region == 56 || select_auto == 2  && select_region == 57){
	skidka = 624.24 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 624.24 - skidka;
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 3 && select_region == 56 || select_auto == 3 && select_region == 57){
	skidka = 918 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 918 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 4 && select_region == 56 || select_auto == 4 && select_region == 57){
	skidka = 1046.52 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1046.52 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 5 && select_region == 56 || select_auto == 5 && select_region == 57){
	skidka = 1083.24 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1083.24 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 6 && select_region == 56 || select_auto == 6 && select_region == 57){
	skidka = 1670.76 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1670.76 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 7 && select_region == 56 || select_auto == 7 && select_region == 57){
	skidka = 1836 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1836 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 8 && select_region == 56 || select_auto == 8 && select_region == 57){
	skidka = 2001.24 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2001.24 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 9 && select_region == 56 || select_auto == 9 && select_region == 57){
	skidka = 2340.90 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2340.90 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 10 && select_region == 56 || select_auto == 10 && select_region == 57){
	skidka = 2754 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2754 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 11 && select_region == 56 || select_auto == 11 && select_region == 57){
	skidka = 312.12 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 312.12 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 12 && select_region == 56 || select_auto == 12 && select_region == 57){
	skidka = 459 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 459 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
// расчет стоимости борисполь, боярков, бровары, ирпинь, Васильков, Вишневая, Выжгород 58,59,60,61,62,64,63
if(select_auto == 1 && select_region == 58 || select_auto == 1 && select_region == 59 || select_auto == 1 && select_region == 60 || select_auto == 1 && select_region == 61 || select_auto == 1 && select_region == 62 || select_auto == 1 && select_region == 63 || select_auto == 1 && select_region == 64){
    skidka = 229.50 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 229.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 2 && select_region == 58 || select_auto == 2 && select_region == 59 || select_auto == 2 && select_region == 60 || select_auto == 2 && select_region == 61 || select_auto == 2 && select_region == 62 || select_auto == 2 && select_region == 63 || select_auto == 2 && select_region == 64){
    skidka = 459 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 459 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 3 && select_region == 58 || select_auto == 3 && select_region == 59 || select_auto == 3 && select_region == 60 || select_auto == 3 && select_region == 61 || select_auto == 3 && select_region == 62 || select_auto == 3 && select_region == 63 || select_auto == 3 && select_region == 64){
    skidka = 675 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 675 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 4 && select_region == 58 || select_auto == 4 && select_region == 59 || select_auto == 4 && select_region == 60 || select_auto == 4 && select_region == 61 || select_auto == 4 && select_region == 62 || select_auto == 4 && select_region == 63 || select_auto == 4 && select_region == 64){
    skidka = 769.50 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 769.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 5 && select_region == 58 || select_auto == 5 && select_region == 59 || select_auto == 5 && select_region == 60 || select_auto == 5 && select_region == 61 || select_auto == 5 && select_region == 62 || select_auto == 5 && select_region == 63 || select_auto == 5 && select_region == 64){
    skidka = 796.50 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 796.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 6 && select_region == 58 || select_auto == 6 && select_region == 59 || select_auto == 6 && select_region == 60 || select_auto == 6 && select_region == 61 || select_auto == 6 && select_region == 62 || select_auto == 6 && select_region == 63 || select_auto == 6 && select_region == 64){
    skidka = 1228.50 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1228.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 7 && select_region == 58 || select_auto == 7 && select_region == 59 || select_auto == 7 && select_region == 60 || select_auto == 7 && select_region == 61 || select_auto == 7 && select_region == 62 || select_auto == 7 && select_region == 63 || select_auto == 7 && select_region == 64){
    skidka = 1350 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1350 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 8 && select_region == 58 || select_auto == 8 && select_region == 59 || select_auto == 8 && select_region == 60 || select_auto == 8 && select_region == 61 || select_auto == 8 && select_region == 62 || select_auto == 8 && select_region == 63 || select_auto == 8 && select_region == 64){
    skidka = 1471.50 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1471.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 9 && select_region == 58 || select_auto == 9 && select_region == 59 || select_auto == 9 && select_region == 60 || select_auto == 9 && select_region == 61 || select_auto == 9 && select_region == 62 || select_auto == 9 && select_region == 63 || select_auto == 9 && select_region == 64){
    skidka = 1721.25 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1721.25 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 10 && select_region == 58 || select_auto == 10 && select_region == 59 || select_auto == 10 && select_region == 60 || select_auto == 10 && select_region == 61 || select_auto == 10 && select_region == 62 || select_auto == 10 && select_region == 63 || select_auto == 10 && select_region == 64){
    skidka = 2025 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2025 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 11 && select_region == 58 || select_auto == 11 && select_region == 59 || select_auto == 11 && select_region == 60 || select_auto == 11 && select_region == 61 || select_auto == 11 && select_region == 62 || select_auto == 11 && select_region == 63 || select_auto == 11 && select_region == 64){
    skidka = 229.50 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 229.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 12 && select_region == 58 || select_auto == 12 && select_region == 59 || select_auto == 12 && select_region == 60 || select_auto == 12 && select_region == 61 || select_auto == 12 && select_region == 62 || select_auto == 12 && select_region == 63 || select_auto == 12 && select_region == 64){
    skidka = 337.50 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 337.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
// другая страна
if(select_auto == 1 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 275.40;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 2 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 550.80;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 3 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 810.00;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 4 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 923.40;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 5 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 955.80;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 6 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 1474.20;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 7 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 1620;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 8 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 1765.80;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 9 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 2065.50;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 10 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 2430;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 11 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 275.40;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 12 && select_region == 67){
	skidka = " не потдерживает скидок";
	summ = 405;
	summ = parseFloat(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
//расчет стоимости на Днепропетровск, Донецк, Запорожье, кривой рог  65,15, 68, 66
if(select_auto == 1 && select_region == 65 || select_auto == 1 && select_region == 15 || select_auto == 1 && select_region == 68 || select_auto == 1 && select_region == 66){
    skidka = 257.04 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 229.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 2 && select_region == 65 || select_auto == 2 && select_region == 15 || select_auto == 2 && select_region == 68 || select_auto == 2 && select_region == 66){
    skidka = 514.08 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 514.08 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 3 && select_region == 65 || select_auto == 3 && select_region == 15 || select_auto == 3 && select_region == 68 || select_auto == 3 && select_region == 66){
    skidka = 756 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 756 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 4 && select_region == 65 || select_auto == 4 && select_region == 15 || select_auto == 4 && select_region == 68 || select_auto == 4 && select_region == 66){
    skidka = 861.84 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 861.84 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 5 && select_region == 65 || select_auto == 5 && select_region == 15 || select_auto == 5 && select_region == 68 || select_auto == 5 && select_region == 66){
    skidka = 892.08 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 892.08 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 6 && select_region == 65 || select_auto == 6 && select_region == 15 || select_auto == 6 && select_region == 68 || select_auto == 6 && select_region == 66){
    skidka = 1375.92 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1375.92 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}

if(select_auto == 7 && select_region == 65 || select_auto == 7 && select_region == 15 || select_auto == 7 && select_region == 68 || select_auto == 7 && select_region == 66){
    skidka = 1512 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1512 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 8 && select_region == 65 || select_auto == 8 && select_region == 15 || select_auto == 8 && select_region == 68 || select_auto == 8 && select_region == 66){
    skidka = 1648.08 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1648.08 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 9 && select_region == 65 || select_auto == 9 && select_region == 15 || select_auto == 9 && select_region == 68 || select_auto == 9 && select_region == 66){
    skidka = 1927.80 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 1927.80 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 10 && select_region == 65 || select_auto == 10 && select_region == 15 || select_auto == 10 && select_region == 68 || select_auto == 10 && select_region == 66){
    skidka = 2268 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 2268 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 11 && select_region == 65 || select_auto == 11 && select_region == 15 || select_auto == 11 && select_region == 68 || select_auto == 11 && select_region == 66){
    skidka = 257.04 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 257.04 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 12 && select_region == 65 || select_auto == 12 && select_region == 15 || select_auto == 12 && select_region == 68 || select_auto == 12 && select_region == 66){
    skidka = 378 * 30 /  100;
	skidka = parseInt(skidka);
	summ = 378 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
// расчет стоимости осаго Мариуполь, Енакьево, Краматорск, Макеевка 28,17, 23,70,27
if(select_auto == 1 && select_region == 28 || select_auto == 1 && select_region == 17 || select_auto == 1 && select_region == 23 || select_auto == 1 && select_region == 70 || select_auto == 1 && select_region == 27){
    skidka = 201.96 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 201.96 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 2 && select_region == 28 || select_auto == 2 && select_region == 17 || select_auto == 2 && select_region == 23 || select_auto == 2 && select_region == 70 || select_auto == 2 && select_region == 27){
    skidka = 403.92 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 403.92 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 3 && select_region == 28 || select_auto == 3 && select_region == 17 || select_auto == 3 && select_region == 23 || select_auto == 3 && select_region == 70 || select_auto == 3 && select_region == 27){
    skidka = 594 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 594 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 4 && select_region == 28 || select_auto == 4 && select_region == 17 || select_auto == 4 && select_region == 23 || select_auto == 4 && select_region == 70 || select_auto == 4 && select_region == 27){
    skidka = 677.16 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 677.16 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 5 && select_region == 28 || select_auto == 5 && select_region == 17 || select_auto == 5 && select_region == 23 || select_auto == 5 && select_region == 70 || select_auto == 5 && select_region == 27){
    skidka = 700.92 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 700.92 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 6 && select_region == 28 || select_auto == 6 && select_region == 17 || select_auto == 6 && select_region == 23 || select_auto == 6 && select_region == 70 || select_auto == 6 && select_region == 27){
    skidka = 1081.08 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 1081.08 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 7 && select_region == 28 || select_auto == 7 && select_region == 17 || select_auto == 7 && select_region == 23 || select_auto == 7 && select_region == 70 || select_auto == 7 && select_region == 27){
    skidka = 1188 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 1188 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 8 && select_region == 28 || select_auto == 8 && select_region == 17 || select_auto == 8 && select_region == 23 || select_auto == 8 && select_region == 70 || select_auto == 8 && select_region == 27){
    skidka = 1294.92 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 1294.92 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 9 && select_region == 28 || select_auto == 9 && select_region == 17 || select_auto == 9 && select_region == 23 || select_auto == 9 && select_region == 70 || select_auto == 9 && select_region == 27){
    skidka = 1514.70 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 1514.70 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 10 && select_region == 28 || select_auto == 10 && select_region == 17 || select_auto == 10 && select_region == 23 || select_auto == 10 && select_region == 70 || select_auto == 10 && select_region == 27){
    skidka = 1782 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 1782 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 11 && select_region == 28 || select_auto == 11 && select_region == 17 || select_auto == 11 && select_region == 23 || select_auto == 11 && select_region == 70 || select_auto == 11 && select_region == 27){
    skidka = 201.96 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 201.96 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}
if(select_auto == 12 && select_region == 28 || select_auto == 12 && select_region == 17 || select_auto == 12 && select_region == 23 || select_auto == 12 && select_region == 70 || select_auto == 12 && select_region == 27){
    skidka = 297 * 20 /  100;
	skidka = parseInt(skidka);
	summ = 297 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);
}

//расчет осаго по всем остальным городам
if(select_auto == 1 && select_region == 1 || select_auto == 1 && select_region == 2 || select_auto == 1 && select_region == 3 || select_auto == 1 && select_region == 4 || select_auto == 1 && select_region == 5 || select_auto == 1 && select_region == 6 || select_auto == 1 && select_region == 7 || select_auto == 1 && select_region == 8 || select_auto == 1 && select_region == 9 || select_auto == 1 && select_region == 10 || select_auto == 1 && select_region == 11 || select_auto == 1 && select_region == 12 || select_auto == 1 && select_region == 12 || select_auto == 1 && select_region == 13 || select_auto == 1 && select_region == 14 || select_auto == 1 && select_region == 16 || select_auto == 1 && select_region == 18 || select_auto == 1 && select_region == 19 || select_auto == 1 && select_region == 20 || select_auto == 1 && select_region == 21 || select_auto == 1 && select_region == 22 || select_auto == 1 && select_region == 24 || select_auto == 1 && select_region == 25 || select_auto == 1 && select_region == 26 || select_auto == 1 && select_region == 29 || select_auto == 1 && select_region == 30 || select_auto == 1 && select_region == 31 || select_auto == 1 && select_region == 32 || select_auto == 1 && select_region == 33 || select_auto == 1 && select_region == 34 || select_auto == 1 && select_region == 35 || select_auto == 1 && select_region == 37 || select_auto == 1 && select_region == 38 || select_auto == 1 && select_region == 39 || select_auto == 1 && select_region == 40 || select_auto == 1 && select_region == 41 || select_auto == 1 && select_region == 42 || select_auto == 1 && select_region == 43 || select_auto == 1 && select_region == 44 || select_auto == 1 && select_region == 45 || select_auto == 1 && select_region == 46 || select_auto == 1 && select_region == 47 || select_auto == 1 && select_region == 48 || select_auto == 1 && select_region == 49 || select_auto == 1 && select_region == 50 || select_auto == 1 && select_region == 51 || select_auto == 1 && select_region == 52 || select_auto == 1 && select_region == 53 || select_auto == 1 && select_region == 54){
  skidka = 137.70 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 137.70 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 2 && select_region == 1 || select_auto == 2 && select_region == 2 || select_auto == 2 && select_region == 3 || select_auto == 2 && select_region == 4 || select_auto == 2 && select_region == 5 || select_auto == 2 && select_region == 6 || select_auto == 2 && select_region == 7 || select_auto == 2 && select_region == 8 || select_auto == 2 && select_region == 9 || select_auto == 2 && select_region == 10 || select_auto == 2 && select_region == 11 || select_auto == 2 && select_region == 12 || select_auto == 2 && select_region == 12 || select_auto == 2 && select_region == 13 || select_auto == 2 && select_region == 14 || select_auto == 2 && select_region == 16 || select_auto == 2 && select_region == 18 || select_auto == 2 && select_region == 19 || select_auto == 2 && select_region == 20 || select_auto == 2 && select_region == 21 || select_auto == 2 && select_region == 22 || select_auto == 2 && select_region == 24 || select_auto == 2 && select_region == 25 || select_auto == 2 && select_region == 26 || select_auto == 2 && select_region == 29 || select_auto == 2 && select_region == 30 || select_auto == 2 && select_region == 31 || select_auto == 2 && select_region == 32 || select_auto == 2 && select_region == 33 || select_auto == 2 && select_region == 34 || select_auto == 2 && select_region == 35 || select_auto == 2 && select_region == 37 || select_auto == 2 && select_region == 38 || select_auto == 2 && select_region == 39 || select_auto == 2 && select_region == 40 || select_auto == 2 && select_region == 41 || select_auto == 2 && select_region == 42 || select_auto == 2 && select_region == 43 || select_auto == 2 && select_region == 44 || select_auto == 2 && select_region == 45 || select_auto == 2 && select_region == 46 || select_auto == 2 && select_region == 47 || select_auto == 2 && select_region == 48 || select_auto == 2 && select_region == 49 || select_auto == 2 && select_region == 50 || select_auto == 2 && select_region == 51 || select_auto == 2 && select_region == 52 || select_auto == 2 && select_region == 53 || select_auto == 2 && select_region == 54){
  skidka = 275.40 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 275.40 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 3 && select_region == 1 || select_auto == 3 && select_region == 2 || select_auto == 3 && select_region == 3 || select_auto == 3 && select_region == 4 || select_auto == 3 && select_region == 5 || select_auto == 3 && select_region == 6 || select_auto == 3 && select_region == 7 || select_auto == 3 && select_region == 8 || select_auto == 3 && select_region == 9 || select_auto == 3 && select_region == 10 || select_auto == 3 && select_region == 11 || select_auto == 3 && select_region == 12 || select_auto == 3 && select_region == 12 || select_auto == 3 && select_region == 13 || select_auto == 3 && select_region == 14 || select_auto == 3 && select_region == 16 || select_auto == 3 && select_region == 18 || select_auto == 3 && select_region == 19 || select_auto == 3 && select_region == 20 || select_auto == 3 && select_region == 21 || select_auto == 3 && select_region == 22 || select_auto == 3 && select_region == 24 || select_auto == 3 && select_region == 25 || select_auto == 3 && select_region == 26 || select_auto == 3 && select_region == 29 || select_auto == 3 && select_region == 30 || select_auto == 3 && select_region == 31 || select_auto == 3 && select_region == 32 || select_auto == 3 && select_region == 33 || select_auto == 3 && select_region == 34 || select_auto == 3 && select_region == 35 || select_auto == 3 && select_region == 37 || select_auto == 3 && select_region == 38 || select_auto == 3 && select_region == 39 || select_auto == 3 && select_region == 40 || select_auto == 3 && select_region == 41 || select_auto == 3 && select_region == 42 || select_auto == 3 && select_region == 43 || select_auto == 3 && select_region == 44 || select_auto == 3 && select_region == 45 || select_auto == 3 && select_region == 46 || select_auto == 3 && select_region == 47 || select_auto == 3 && select_region == 48 || select_auto == 3 && select_region == 49 || select_auto == 3 && select_region == 50 || select_auto == 3 && select_region == 51 || select_auto == 3 && select_region == 52 || select_auto == 3 && select_region == 53 || select_auto == 3 && select_region == 54){
  skidka = 405 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 405 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 4 && select_region == 1 || select_auto == 4 && select_region == 2 || select_auto == 4 && select_region == 3 || select_auto == 4 && select_region == 4 || select_auto == 4 && select_region == 5 || select_auto == 4 && select_region == 6 || select_auto == 4 && select_region == 7 || select_auto == 4 && select_region == 8 || select_auto == 4 && select_region == 9 || select_auto == 4 && select_region == 10 || select_auto == 4 && select_region == 11 || select_auto == 4 && select_region == 12 || select_auto == 4 && select_region == 12 || select_auto == 4 && select_region == 13 || select_auto == 4 && select_region == 14 || select_auto == 4 && select_region == 16 || select_auto == 4 && select_region == 18 || select_auto == 4 && select_region == 19 || select_auto == 4 && select_region == 20 || select_auto == 4 && select_region == 21 || select_auto == 4 && select_region == 22 || select_auto == 4 && select_region == 24 || select_auto == 4 && select_region == 25 || select_auto == 4 && select_region == 26 || select_auto == 4 && select_region == 29 || select_auto == 4 && select_region == 30 || select_auto == 4 && select_region == 31 || select_auto == 4 && select_region == 32 || select_auto == 4 && select_region == 33 || select_auto == 4 && select_region == 34 || select_auto == 4 && select_region == 35 || select_auto == 4 && select_region == 37 || select_auto == 4 && select_region == 38 || select_auto == 4 && select_region == 39 || select_auto == 4 && select_region == 40 || select_auto == 4 && select_region == 41 || select_auto == 4 && select_region == 42 || select_auto == 4 && select_region == 43 || select_auto == 4 && select_region == 44 || select_auto == 4 && select_region == 45 || select_auto == 4 && select_region == 46 || select_auto == 4 && select_region == 47 || select_auto == 4 && select_region == 48 || select_auto == 4 && select_region == 49 || select_auto == 4 && select_region == 50 || select_auto == 4 && select_region == 51 || select_auto == 4 && select_region == 52 || select_auto == 4 && select_region == 53 || select_auto == 4 && select_region == 54){
  skidka = 401.70 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 401.70 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 5 && select_region == 1 || select_auto == 5 && select_region == 2 || select_auto == 5 && select_region == 3 || select_auto == 5 && select_region == 4 || select_auto == 5 && select_region == 5 || select_auto == 5 && select_region == 6 || select_auto == 5 && select_region == 7 || select_auto == 5 && select_region == 8 || select_auto == 5 && select_region == 9 || select_auto == 5 && select_region == 10 || select_auto == 5 && select_region == 11 || select_auto == 5 && select_region == 12 || select_auto == 5 && select_region == 12 || select_auto == 5 && select_region == 13 || select_auto == 5 && select_region == 14 || select_auto == 5 && select_region == 16 || select_auto == 5 && select_region == 18 || select_auto == 5 && select_region == 19 || select_auto == 5 && select_region == 20 || select_auto == 5 && select_region == 21 || select_auto == 5 && select_region == 22 || select_auto == 5 && select_region == 24 || select_auto == 5 && select_region == 25 || select_auto == 5 && select_region == 26 || select_auto == 5 && select_region == 29 || select_auto == 5 && select_region == 30 || select_auto == 5 && select_region == 31 || select_auto == 5 && select_region == 32 || select_auto == 5 && select_region == 33 || select_auto == 5 && select_region == 34 || select_auto == 5 && select_region == 35 || select_auto == 5 && select_region == 37 || select_auto == 5 && select_region == 38 || select_auto == 5 && select_region == 39 || select_auto == 5 && select_region == 40 || select_auto == 5 && select_region == 41 || select_auto == 5 && select_region == 42 || select_auto == 5 && select_region == 43 || select_auto == 5 && select_region == 44 || select_auto == 5 && select_region == 45 || select_auto == 5 && select_region == 46 || select_auto == 5 && select_region == 47 || select_auto == 5 && select_region == 48 || select_auto == 5 && select_region == 49 || select_auto == 5 && select_region == 50 || select_auto == 5 && select_region == 51 || select_auto == 5 && select_region == 52 || select_auto == 5 && select_region == 53 || select_auto == 5 && select_region == 54){
  skidka = 407.90 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 407.90 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 6 && select_region == 1 || select_auto == 6 && select_region == 2 || select_auto == 6 && select_region == 3 || select_auto == 6 && select_region == 4 || select_auto == 6 && select_region == 5 || select_auto == 6 && select_region == 6 || select_auto == 6 && select_region == 7 || select_auto == 6 && select_region == 8 || select_auto == 6 && select_region == 9 || select_auto == 6 && select_region == 10 || select_auto == 6 && select_region == 11 || select_auto == 6 && select_region == 12 || select_auto == 6 && select_region == 12 || select_auto == 6 && select_region == 13 || select_auto == 6 && select_region == 14 || select_auto == 6 && select_region == 16 || select_auto == 6 && select_region == 18 || select_auto == 6 && select_region == 19 || select_auto == 6 && select_region == 20 || select_auto == 6 && select_region == 21 || select_auto == 6 && select_region == 22 || select_auto == 6 && select_region == 24 || select_auto == 6 && select_region == 25 || select_auto == 6 && select_region == 26 || select_auto == 6 && select_region == 29 || select_auto == 6 && select_region == 30 || select_auto == 6 && select_region == 31 || select_auto == 6 && select_region == 32 || select_auto == 6 && select_region == 33 || select_auto == 6 && select_region == 34 || select_auto == 6 && select_region == 35 || select_auto == 6 && select_region == 37 || select_auto == 6 && select_region == 38 || select_auto == 6 && select_region == 39 || select_auto == 6 && select_region == 40 || select_auto == 6 && select_region == 41 || select_auto == 6 && select_region == 42 || select_auto == 6 && select_region == 43 || select_auto == 6 && select_region == 44 || select_auto == 6 && select_region == 45 || select_auto == 6 && select_region == 46 || select_auto == 6 && select_region == 47 || select_auto == 6 && select_region == 48 || select_auto == 6 && select_region == 49 || select_auto == 6 && select_region == 50 || select_auto == 6 && select_region == 51 || select_auto == 6 && select_region == 52 || select_auto == 6 && select_region == 53 || select_auto == 6 && select_region == 54){
  skidka = 737.10 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 737.10 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 7 && select_region == 1 || select_auto == 7 && select_region == 2 || select_auto == 7 && select_region == 3 || select_auto == 7 && select_region == 4 || select_auto == 7 && select_region == 5 || select_auto ==7 && select_region == 6 || select_auto == 7 && select_region == 7 || select_auto == 7 && select_region == 8 || select_auto == 7 && select_region == 9 || select_auto == 7 && select_region == 10 || select_auto == 7 && select_region == 11 || select_auto == 7 && select_region == 12 || select_auto == 7 && select_region == 12 || select_auto == 7 && select_region == 13 || select_auto == 7 && select_region == 14 || select_auto == 7 && select_region == 16 || select_auto == 7 && select_region == 18 || select_auto == 7 && select_region == 19 || select_auto == 7 && select_region == 20 || select_auto == 7 && select_region == 21 || select_auto == 7 && select_region == 22 || select_auto == 7 && select_region == 24 || select_auto == 7 && select_region == 25 || select_auto == 7 && select_region == 26 || select_auto == 7 && select_region == 29 || select_auto == 7 && select_region == 30 || select_auto == 7 && select_region == 31 || select_auto == 7 && select_region == 32 || select_auto == 7 && select_region == 33 || select_auto == 7 && select_region == 34 || select_auto == 7 && select_region == 35 || select_auto == 7 && select_region == 37 || select_auto == 7 && select_region == 38 || select_auto == 7 && select_region == 39 || select_auto == 7 && select_region == 40 || select_auto == 7 && select_region == 41 || select_auto == 7 && select_region == 42 || select_auto == 7 && select_region == 43 || select_auto == 7 && select_region == 44 || select_auto == 7 && select_region == 45 || select_auto == 7 && select_region == 46 || select_auto == 7 && select_region == 47 || select_auto == 7 && select_region == 48 || select_auto == 7 && select_region == 49 || select_auto == 7 && select_region == 50 || select_auto == 7 && select_region == 51 || select_auto == 7 && select_region == 52 || select_auto == 7 && select_region == 53 || select_auto == 7 && select_region == 54){
  skidka = 810 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 810 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 8 && select_region == 1 || select_auto == 8 && select_region == 2 || select_auto == 8 && select_region == 3 || select_auto == 8 && select_region == 4 || select_auto == 8 && select_region == 5 || select_auto == 8 && select_region == 6 || select_auto == 8 && select_region == 7 || select_auto == 8 && select_region == 8 || select_auto == 8 && select_region == 9 || select_auto == 8 && select_region == 10 || select_auto == 8 && select_region == 11 || select_auto == 8 && select_region == 12 || select_auto == 8 && select_region == 12 || select_auto == 8 && select_region == 13 || select_auto == 8 && select_region == 14 || select_auto == 8 && select_region == 16 || select_auto == 8 && select_region == 18 || select_auto == 8 && select_region == 19 || select_auto == 8 && select_region == 20 || select_auto == 8 && select_region == 21 || select_auto == 8 && select_region == 22 || select_auto == 8 && select_region == 24 || select_auto == 8 && select_region == 25 || select_auto == 8 && select_region == 26 || select_auto == 8 && select_region == 29 || select_auto == 8 && select_region == 30 || select_auto == 8 && select_region == 31 || select_auto == 8 && select_region == 32 || select_auto == 8 && select_region == 33 || select_auto == 8 && select_region == 34 || select_auto == 8 && select_region == 35 || select_auto == 8 && select_region == 37 || select_auto == 8 && select_region == 38 || select_auto == 8 && select_region == 39 || select_auto == 8 && select_region == 40 || select_auto == 8 && select_region == 41 || select_auto == 8 && select_region == 42 || select_auto == 8 && select_region == 43 || select_auto == 8 && select_region == 44 || select_auto == 8 && select_region == 45 || select_auto == 8 && select_region == 46 || select_auto == 8 && select_region == 47 || select_auto == 8 && select_region == 48 || select_auto == 8 && select_region == 49 || select_auto == 8 && select_region == 50 || select_auto == 8 && select_region == 51 || select_auto == 8 && select_region == 52 || select_auto == 8 && select_region == 53 || select_auto == 8 && select_region == 54){
  skidka = 882.90 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 882.90 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 9 && select_region == 1 || select_auto == 9 && select_region == 2 || select_auto == 9 && select_region == 3 || select_auto == 9 && select_region == 4 || select_auto == 9 && select_region == 5 || select_auto == 9 && select_region == 6 || select_auto == 9 && select_region == 7 || select_auto == 9 && select_region == 8 || select_auto == 9 && select_region == 9 || select_auto == 9 && select_region == 10 || select_auto == 9 && select_region == 11 || select_auto == 9 && select_region == 12 || select_auto == 9 && select_region == 12 || select_auto == 9 && select_region == 13 || select_auto == 9 && select_region == 14 || select_auto == 9 && select_region == 16 || select_auto == 9 && select_region == 18 || select_auto == 9 && select_region == 19 || select_auto == 9 && select_region == 20 || select_auto == 9 && select_region == 21 || select_auto == 9 && select_region == 22 || select_auto == 9 && select_region == 24 || select_auto == 9 && select_region == 25 || select_auto == 9 && select_region == 26 || select_auto == 9 && select_region == 29 || select_auto == 9 && select_region == 30 || select_auto == 9 && select_region == 31 || select_auto == 9 && select_region == 32 || select_auto == 9 && select_region == 33 || select_auto == 9 && select_region == 34 || select_auto == 9 && select_region == 35 || select_auto == 9 && select_region == 37 || select_auto == 9 && select_region == 38 || select_auto == 9 && select_region == 39 || select_auto == 9 && select_region == 40 || select_auto == 9 && select_region == 41 || select_auto == 9 && select_region == 42 || select_auto == 9 && select_region == 43 || select_auto == 9 && select_region == 44 || select_auto == 9 && select_region == 45 || select_auto == 9 && select_region == 46 || select_auto == 9 && select_region == 47 || select_auto == 9 && select_region == 48 || select_auto == 9 && select_region == 49 || select_auto == 9 && select_region == 50 || select_auto == 9 && select_region == 51 || select_auto == 9 && select_region == 52 || select_auto == 9 && select_region == 53 || select_auto == 9 && select_region == 54){
  skidka = 1035.75 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 1035.75 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 10 && select_region == 1 || select_auto == 10 && select_region == 2 || select_auto == 10 && select_region == 3 || select_auto == 10 && select_region == 4 || select_auto == 10 && select_region == 5 || select_auto == 10 && select_region == 6 || select_auto == 10 && select_region == 7 || select_auto == 10 && select_region == 8 || select_auto == 10 && select_region == 9 || select_auto == 10 && select_region == 10 || select_auto == 10 && select_region == 11 || select_auto == 10 && select_region == 12 || select_auto == 10 && select_region == 12 || select_auto == 10 && select_region == 13 || select_auto == 10 && select_region == 14 || select_auto == 10 && select_region == 16 || select_auto == 10 && select_region == 18 || select_auto == 10 && select_region == 19 || select_auto == 10 && select_region == 20 || select_auto == 10 && select_region == 21 || select_auto == 10 && select_region == 22 || select_auto == 10 && select_region == 24 || select_auto == 10 && select_region == 25 || select_auto == 10 && select_region == 26 || select_auto == 10 && select_region == 29 || select_auto == 10 && select_region == 30 || select_auto == 10 && select_region == 31 || select_auto == 10 && select_region == 32 || select_auto == 10 && select_region == 33 || select_auto == 10 && select_region == 34 || select_auto == 10 && select_region == 35 || select_auto == 10 && select_region == 37 || select_auto == 10 && select_region == 38 || select_auto == 10 && select_region == 39 || select_auto == 10 && select_region == 40 || select_auto == 10 && select_region == 41 || select_auto == 10 && select_region == 42 || select_auto == 10 && select_region == 43 || select_auto == 10 && select_region == 44 || select_auto == 10 && select_region == 45 || select_auto == 10 && select_region == 46 || select_auto == 10 && select_region == 47 || select_auto == 10 && select_region == 48 || select_auto == 10 && select_region == 49 || select_auto == 10 && select_region == 50 || select_auto == 10 && select_region == 51 || select_auto == 10 && select_region == 52 || select_auto == 10 && select_region == 53 || select_auto == 10 && select_region == 54){
  skidka = 1215 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 1215 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 11 && select_region == 1 || select_auto == 11 && select_region == 2 || select_auto == 11 && select_region == 3 || select_auto == 11 && select_region == 4 || select_auto == 11 && select_region == 5 || select_auto == 11 && select_region == 6 || select_auto == 11 && select_region == 7 || select_auto == 11 && select_region == 8 || select_auto == 11 && select_region == 9 || select_auto == 11 && select_region == 10 || select_auto == 11 && select_region == 11 || select_auto == 11 && select_region == 12 || select_auto == 11 && select_region == 12 || select_auto == 11 && select_region == 13 || select_auto == 11 && select_region == 14 || select_auto == 11 && select_region == 16 || select_auto == 11 && select_region == 18 || select_auto == 11 && select_region == 19 || select_auto == 11 && select_region == 20 || select_auto == 11 && select_region == 21 || select_auto == 11 && select_region == 22 || select_auto == 11 && select_region == 24 || select_auto == 11 && select_region == 25 || select_auto == 11 && select_region == 26 || select_auto == 11 && select_region == 29 || select_auto == 11 && select_region == 30 || select_auto == 11 && select_region == 31 || select_auto == 11 && select_region == 32 || select_auto == 11 && select_region == 33 || select_auto == 11 && select_region == 34 || select_auto == 11 && select_region == 35 || select_auto == 11 && select_region == 37 || select_auto == 11 && select_region == 38 || select_auto == 11 && select_region == 39 || select_auto == 11 && select_region == 40 || select_auto == 11 && select_region == 41 || select_auto == 11 && select_region == 42 || select_auto == 11 && select_region == 43 || select_auto == 11 && select_region == 44 || select_auto == 11 && select_region == 45 || select_auto == 11 && select_region == 46 || select_auto == 11 && select_region == 47 || select_auto == 11 && select_region == 48 || select_auto == 11 && select_region == 49 || select_auto == 11 && select_region == 50 || select_auto == 11 && select_region == 51 || select_auto == 11 && select_region == 52 || select_auto == 11 && select_region == 53 || select_auto == 11 && select_region == 54){
  skidka = 137.70 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 137.70 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}
if(select_auto == 12 && select_region == 1 || select_auto == 12 && select_region == 2 || select_auto == 12 && select_region == 3 || select_auto == 12 && select_region == 4 || select_auto == 12 && select_region == 5 || select_auto == 12 && select_region == 6 || select_auto == 12 && select_region == 7 || select_auto == 12 && select_region == 8 || select_auto == 12 && select_region == 9 || select_auto == 12 && select_region == 10 || select_auto == 12 && select_region == 11 || select_auto == 12 && select_region == 12 || select_auto == 12 && select_region == 12 || select_auto == 12 && select_region == 13 || select_auto == 12 && select_region == 14 || select_auto == 12 && select_region == 16 || select_auto == 12 && select_region == 18 || select_auto == 12 && select_region == 19 || select_auto == 12 && select_region == 20 || select_auto == 12 && select_region == 21 || select_auto == 12 && select_region == 22 || select_auto == 12 && select_region == 24 || select_auto == 12 && select_region == 25 || select_auto == 12 && select_region == 26 || select_auto == 12 && select_region == 29 || select_auto == 12 && select_region == 30 || select_auto == 12 && select_region == 31 || select_auto == 12 && select_region == 32 || select_auto == 12 && select_region == 33 || select_auto == 12 && select_region == 34 || select_auto == 12 && select_region == 35 || select_auto == 12 && select_region == 37 || select_auto == 12 && select_region == 38 || select_auto == 12 && select_region == 39 || select_auto == 12 && select_region == 40 || select_auto == 12 && select_region == 41 || select_auto == 12 && select_region == 42 || select_auto == 12 && select_region == 43 || select_auto == 12 && select_region == 44 || select_auto == 12 && select_region == 45 || select_auto == 12 && select_region == 46 || select_auto == 12 && select_region == 47 || select_auto == 12 && select_region == 48 || select_auto == 12 && select_region == 49 || select_auto == 12 && select_region == 50 || select_auto == 12 && select_region == 51 || select_auto == 12 && select_region == 52 || select_auto == 12 && select_region == 53 || select_auto == 12 && select_region == 54){
  skidka = 202.50 * 10 /  100;
	skidka = parseInt(skidka);
	summ = 202.50 - skidka;
	summ = parseInt(summ);
	$('#skidka').html(skidka); 
	$('#summ').html(summ);	
}

//расчет зеленная карта
if(srok == 15 && auto == 1){
    summ = 548;
	$('#summ').html(summ);
}
if(srok == 1 && auto == 1){
    summ = 807;
	$('#summ').html(summ);
}
if(srok == 2 && auto == 1){
    summ = 1097;
	$('#summ').html(summ);
}
if(srok == 3 && auto == 1){
    summ = 1356;
	$('#summ').html(summ);
}
if(srok == 4 && auto == 1){
    summ = 1614;
	$('#summ').html(summ);
}
if(srok == 5 && auto == 1){
    summ = 1775;
	$('#summ').html(summ);
}
if(srok == 6 && auto == 1){
    summ = 1850;
	$('#summ').html(summ);
}
if(srok == 7 && auto == 1){
    summ = 1975;
	$('#summ').html(summ);
}
if(srok == 8 && auto == 1){
    summ = 2101;
	$('#summ').html(summ);
}
if(srok == 9 && auto == 1){
    summ = 2226;
	$('#summ').html(summ);
}
if(srok == 10 && auto == 1){
    summ = 2383;
	$('#summ').html(summ);
}
if(srok == 11 && auto == 1){
    summ = 2509;
	$('#summ').html(summ);
}
if(srok == 12 && auto == 1){
    summ = 2634;
	$('#summ').html(summ);
}
//2
if(srok == 15 && auto == 2){
    summ = 64;
	$('#summ').html(summ);
}
if(srok == 1 && auto == 2){
    summ = 129;
	$('#summ').html(summ);
}
if(srok == 2 && auto == 2){
    summ = 258;
	$('#summ').html(summ);
}
if(srok == 3 && auto == 2){
    summ = 355;
	$('#summ').html(summ);
}
if(srok == 4 && auto == 2){
    summ = 419;
	$('#summ').html(summ);
}
if(srok == 5 && auto == 2){
    summ = 516;
	$('#summ').html(summ);
}
if(srok == 6 && auto == 2){
    summ = 564;
	$('#summ').html(summ);
}
if(srok == 7 && auto == 2){
    summ = 595;
	$('#summ').html(summ);
}
if(srok == 8 && auto == 2){
    summ = 627;
	$('#summ').html(summ);
}
if(srok == 9 && auto == 2){
    summ = 658;
	$('#summ').html(summ);
}
if(srok == 10 && auto == 2){
    summ = 689;
	$('#summ').html(summ);
}
if(srok == 11 && auto == 2){
    summ = 721;
	$('#summ').html(summ);
}
if(srok == 12 && auto == 2){
    summ = 752;
	$('#summ').html(summ);
}
//3
if(srok == 15 && auto == 3){
    summ = 290;
	$('#summ').html(summ);
}
if(srok == 1 && auto == 3){
    summ = 581;
	$('#summ').html(summ);
}
if(srok == 2 && auto == 3){
    summ = 1033;
	$('#summ').html(summ);
}
if(srok == 3 && auto == 3){
    summ = 1485;
	$('#summ').html(summ);
}
if(srok == 4 && auto == 3){
    summ = 1840;
	$('#summ').html(summ);
}
if(srok == 5 && auto == 3){
    summ = 2130;
	$('#summ').html(summ);
}
if(srok == 6 && auto == 3){
    summ = 2320;
	$('#summ').html(summ);
}
if(srok == 7 && auto == 3){
    summ = 2509;
	$('#summ').html(summ);
}
if(srok == 8 && auto == 3){
    summ = 2697;
	$('#summ').html(summ);
}
if(srok == 9 && auto == 3){
    summ = 2822;
	$('#summ').html(summ);
}
if(srok == 10 && auto == 3){
    summ = 2948;
	$('#summ').html(summ);
}
if(srok == 11 && auto == 3){
    summ = 3073;
	$('#summ').html(summ);
}
if(srok == 12 && auto == 3){
    summ = 3167;
	$('#summ').html(summ);
}
//4
if(srok == 15 && auto == 4){
    summ = 581;
	$('#summ').html(summ);
}
if(srok == 1 && auto == 4){
    summ = 1162;
	$('#summ').html(summ);
}
if(srok == 2 && auto == 4){
    summ = 2066;
	$('#summ').html(summ);
}
if(srok == 3 && auto == 4){
    summ = 2938;
	$('#summ').html(summ);
}
if(srok == 4 && auto == 4){
    summ = 3648;
	$('#summ').html(summ);
}
if(srok == 5 && auto == 4){
    summ = 4229;
	$('#summ').html(summ);
}
if(srok == 6 && auto == 4){
    summ = 4610;
	$('#summ').html(summ);
}
if(srok == 7 && auto == 4){
    summ = 4986;
	$('#summ').html(summ);
}
if(srok == 8 && auto == 4){
    summ = 5363;
	$('#summ').html(summ);
}
if(srok == 9 && auto == 4){
    summ = 5614;
	$('#summ').html(summ);
}
if(srok == 10 && auto == 4){
    summ = 5864;
	$('#summ').html(summ);
}
if(srok == 11 && auto == 4){
    summ = 6115;
	$('#summ').html(summ);
}
if(srok == 12 && auto == 4){
    summ = 6304;
	$('#summ').html(summ);
}
//5
if(srok == 15 && auto == 5){
    summ = 126;
	$('#summ').html(summ);
}
if(srok == 1 && auto == 5){
    summ = 191;
	$('#summ').html(summ);
}
if(srok == 2 && auto == 5){
    summ = 317;
	$('#summ').html(summ);
}
if(srok == 3 && auto == 5){
    summ = 443;
	$('#summ').html(summ);
}
if(srok == 4 && auto == 5){
    summ = 573;
	$('#summ').html(summ);
}
if(srok == 5 && auto == 5){
    summ = 699;
	$('#summ').html(summ);
}
if(srok == 6 && auto == 5){
    summ = 806;
	$('#summ').html(summ);
}
if(srok == 7 && auto == 5){
    summ = 806;
	$('#summ').html(summ);
}
if(srok == 8 && auto == 5){
    summ = 833;
	$('#summ').html(summ);
}
if(srok == 9 && auto == 5){
    summ = 833;
	$('#summ').html(summ);
}
if(srok == 10 && auto == 5){
    summ = 865;
	$('#summ').html(summ);
}
if(srok == 11 && auto == 5){
    summ = 865;
	$('#summ').html(summ);
}
if(srok == 12 && auto == 5){
    summ = 896;
	$('#summ').html(summ);
}
});
});