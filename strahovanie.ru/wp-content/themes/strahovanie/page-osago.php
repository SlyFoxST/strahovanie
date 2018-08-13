<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Strahovanie
 */

get_header();
?>

<?php
if(isset($_POST['btn_zakaz'])){
	$errors = false;
    $result = "Спасибо, за ваше сообщение мы с вами скоро свяжемся";
$fam = trim(stripcslashes(htmlspecialchars($_POST['fam'])));
$names = trim(stripcslashes(htmlspecialchars($_POST['names'])));
$otch = trim(stripcslashes(htmlspecialchars($_POST['otch'])));
$year = trim(stripcslashes(htmlspecialchars($_POST['year_auto'])));
$phone = trim(stripcslashes(htmlspecialchars($_POST['phone'])));
$email = trim(stripcslashes(htmlspecialchars( $_POST['email'])));
$date = $_POST['date'];
$inn = $_POST['inn'];
$gosnumber = $_POST['gosnumber'];
$auto = $_POST["auto_select"];
$kuzov = $_POST["number_kuzov"];
$adress = $_POST["adress"];
$platej = $_POST["platej"];
if($platej == 1){
	$platej = "Наложенный платеж в отделении новой почты";
}
else{
	$platej = "Прямой банковский перевод на карту";
}
if($fam == ''){
	$errors[] = "Вы не заполнили поле фамилия";
}
if($name == ''){
	$errors[] = 'Вы не заполлнили поле имени';
}
if($otch == ''){
	$errors[] = 'Вы не заполлнили поле имени';
}	
 else if($errors == false) {
 	$to = "yagoda303@gmail.com";
 	$header = @header("Content-Type: text/html;charset= utf8");
 	$subject = $names;
 	$msg = "Пользователь заказал(ла) ОСАГО \n\r" ."Имя Фамилия Отчество:" . " ". $fam." ". $names. " " . $otch ."\n\rКонтактный телефон:". " " .$phone . "\n\rE-mail пользователя:"." ". $email . "\n\rДата начала действия полиса: " . " ". $date . "\n\r ИНН пользователя: " ." " .$inn . "\n\rГос-номер: " ." " . $gosnumber . "\n\rГод выпуска авто: " ." ". $year . "\n\r Марка автомобиля:" . " " . $auto . "\n\rНомер кузова(шасси):" . $kuzov . "\n\rАдрес:" . "" .$adress ."\n\rСпособ оплаты: " . " " .$platej;
        $sendmail = mail($to,$subject,$msg,$header);
        
    }

}


?>
<div class="page-green-cart">
<div class="wrapper-section-green-cart">
<h1 class="title-h1-green-cart">Страховка осаго (автоцивилка) в Украине</h1>
<p>Заказывай онлайн электронный полис осаго<br>
на 30% дешевле.	
</p>
</div>
<div class="col-md-7">
<div class="form-step-one-green">
<p class="etapi-title">Рассчитайте и закажите полюс за 4 минуты! </p>
<?php if(isset($sendmail) && $sendmail == true) { ?>
<div class="thanks">
<p class=>Спасибо, ваш сообщение успешно отправлено.<br />Вскоре наш менеджер с вами свяжется</p>
</div>
<?php } ?>
<fieldset>
<form class="form_green">
<div class="col-md-6 col-sm-6 col-xs-12">
<label>Тип транспортного средства
<select class="osago-auto">
<option value="1">Мото - до 300см3</option>
<option value="2">Мото - более 300см3</option>
<option value="3">Автомобиль - до 1600см3</option>
<option value="4">Автомобиль - 1601-2000см3</option>
<option value="5">Автомобиль - 2001-3000см3</option>
<option value="6">Автомобиль - более 3000см3</option>
<option value="7">Грузовик - до 2т.</option>
<option value="8">Грузовик - более 2т.</option>
<option value="9">Автобус - до 20чел.</option>
<option value="10">Автобус - более 20чел.</option>
<option value="11">Прицеп к легквым авто</option>
<option value="12">Прицеп к грузовым авто</option></select>
</label>
</div>
<div class="col-md-6 col-sm-6 col-xs-12">
<label>Город регистрации
<select class="osago_region">
<option value="55">Киев</option>
<option value="56">Харьков</option>
<option value="57">Одесса</option>
<option value="1">Авдеевка</option>
<option value="2">Амросиевка</option>
<option value="58">Барисполь</option>
<option value="59">Боярка</option>
<option value="60">Бровары</option>
<option value="3">Бахмут</option>
<option value="4">Белицкое</option>
<option value="5">Билозёрск</option>
<option value="6">Бунге</option>
<option value="7">Большая новосёлка</option>
<option value="62">Васильков</option>
<option value="63">Вышгород</option>
<option value="64">Вишнёвая</option>
<option value="8">Волноваха</option>
<option value="9">Углегорск</option>
<option value="10">Вугледар</option>
<option value="11">Горняк</option>
<option value="12">Горловка</option>
<option value="13">Дебальцово</option>
<option value="14">Докучаевск</option>
<option value="15">Донецк</option>
<option value="65">Днепропетровск</option>
<option value="16">Дружковка</option>
<option value="17">Енакиево</option>
<option value="18">Ждановка</option>
<option value="68">Запорожье</option>
<option value="19">Зугрес</option>
<option value="20">Иловайск</option>
<option value="61">Ирпень</option>
<option value="21">Кальмиусское</option>
<option value="22">Константиновка</option>
<option value="23">Краматорск</option>
<option value="24">Красногоривка</option>
<option value="66">Кривой рог</option>
<option value="25">Курахово</option>
<option value="26">Лиман</option>
<option value="27">Макеевка</option>
<option value="28">Мариуполь</option>
<option value="29">Марьинка</option>
<option value="30">Николаевка</option>
<option value="31">Мирноград</option>
<opiton value="32">Моспины</opiton>
<option value="33">Никольское</option>
<option value="34">Новоазовск</option>
<option value="35">Новогородовка</option>
<option value="37">Покровск</option>
<option value="38">Родинское</option>
<option value="39">Светлодарск</option>
<option value="40">Святогорск</option>
<option value="41">Cелидово</option>
<option value="42">Северск</option>
<option value="70">Северодонецк</option>
<option value="43">Славянск</option>
<option value="44">Снежное</option>
<option value="45">Салидар</option>
<option value="46">Старобешево</option>
<option value="47">Торецк</option>
<option value="48">Украинск</option>
<option value="49">Харцыск</option>
<option value="50">Хрестовка</option>
<option value="51">Часов яр</option>
<option value="52">Чистяково</option>
<option value="53">Шахтёрск</option>
<option value="54">Ясиноватая</option>
<option value="67">Другая страна</option>
</select>
</label>
</div>
</fieldset>
<input type="button" class="summ" value="Рассчитать стоимость">
<div class="div-result">
<p class="itog" id="itog">Итоговая сумма:&nbsp;<strong><span id="summ"></span>&#8194;грв.</strong></p>
<p class="itog">Вы экономите:&nbsp;<strong><span id="skidka"> </span>&#8194;грв.</strong></p>
<a  class="btn_green_cart a_zayavka">Продолжить оформление</a>
</div>
</form>
</div>
</div>
<div class="col-md-5 hidden-sm hidden-xs">
<div class="bg_raznoe">
<p class="title-prichini">3 причины оформить</p>
<i class="fa fa-check check-prichini" aria-hidden="true"></i> Экономия до 30% при заказе онлайн<br>
<i class="fa fa-check check-prichini" aria-hidden="true"></i> Работаем по системе прямого урегулирования<br />
<i class="fa fa-check check-prichini" aria-hidden="true"></i>  Получите полис, где вам удобно
</div>
</div>
<div class="clearfix"></div>
<div class="next_form_green_cart">
<a class="back a_zayavka">Назад</a>
<p class="before-autor-green-cart etapi-title"">Введите Ваши данные</p>
<form action="" method="post" class="form-step-two">
<fieldset>
<div class="col-md-4">

<label>
Фамилия<br />
<input type="text" name="fam" class="fam" placeholder="Введите вашу фамилию" required="required" />
</label>
<label>
Имя <br />
<input type="text" name="names" class="name" placeholder="Введите Ваше имя" >
</label>
<label>
Введите Ваше отчество <br />
<input type="text" name="otch" class="otch" placeholder="Введите Ваше отчество">
</label>
</div>
<div class="col-md-4">
<label>
Год выпуска авто <br />
<input type="number" name="year_auto" class="year_auto" placeholder="Год выпуска авто">
</label>
<label>
Телефон <br />
<input type="phone" name="phone" class="phone" placeholder="Ваш телефон">
</label>
<label>
E-mail <br />
<input type="email" name="email" class="email" placeholder="Ваш email">
</label>
<label>
Дата начала действия полиса <br />
<input type="date" class="date" name="date" placeholder="Дата начала действия полиса">
</label>
</div>
<div class="col-md-4">
<label>
ИНН <br />
<input type="text" name="inn" class="inn" placeholder="Ваш ИНН">
</label>
<label>
Гос номер <br />
<input type="text"  name="gosnumber" class="gosnumber" placeholder="Ваш гос-номер">
</label>
<label>
Марка <br />
<select name="auto_select">
<option value="scoda">Scoda</option>
<option value="Daewoo">Daewoo</option>
<option value="Nissan">Nissan</option>
<option value="Honda">Honda</option>
<option value="ЗАЗ">ЗАЗ</option>
<option value="Volkswagen">Volkswagen</option>
<option value="ВАЗ">ВАЗ</option>
<option value="Toyota">Toyota</option>
<option value="Mitsubishi">Mitsubishi</option>
<option value="Opel">Opel</option>
<option value="Ford">Ford</option>
<option value="Chevrolet">Chevrolet</option>
<option value="Kia">Kia</option>
<option value="Hyundai">Hyundai</option>
<option value="Mazda">Mazda</option>
</select>
</label>
<label>
Номер кузова(шасси) <br />
<input type="text" name="number_kuzov" class="kuzov" placeholder="Номер кузова" />
</label>
</div>
<div class="clearfix"></div>
<p class="etapi-title">Адрес страхователя</p>
<div class="col-md-3 col-sm-3 col-xs-12">
<label>
Укажите адрес
<input type="text" name="adress" class="gorod" placeholder="Укажите адрес"/>
</label>
</div>
<div class="clearfix"></div>
<p class="etapi-title">
Выберите способ оплаты</p>
<input type="radio" name="platej" class="input-radio" id='input-radio1' value="1">Наложенный платёж в отделении новой почты<br />
<input type="radio" name="platej" class="input-radio" id="input-radio" value="2">Прямой банковский перевод на карту

<div class="hidden_green_cert">
Оплату нужно направлять напрямую на наш банковский счет.
 Для оплаты на карту Вам необходимо перевести полную сумму заказа на карту: 26003018291701, и выслать нам фото чека (копию или скриншот) на email,viber или watsup 
Cтраховой полис будет отправлен после поступления средств на наш счет.
</div><br />
<input type="submit" name="btn_zakaz" value="Заказать" class="btn-zakazat a_zayavka">
</fieldset>
</form>
</div>
		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>


		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
