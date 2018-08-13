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
if(isset($_POST['btn_green_cart'])){
	$fam = stripcslashes(trim(htmlspecialchars($_POST['fam'])));
	$names = stripcslashes(trim(htmlspecialchars($_POST['names'])));
	$otch = stripcslashes(trim(htmlspecialchars($_POST['otch'])));
	$fio = stripcslashes(trim(htmlspecialchars($_POST['fio'])));
	$phone = stripcslashes(trim(htmlspecialchars($_POST['phone'])));
	$email = stripcslashes(trim(htmlspecialchars($_POST['email'])));
	$date = $_POST['date'];
	$inn = stripcslashes(trim(htmlspecialchars($_POST['inn'])));
	$gosnumber = $_POST['gosnumber'];
	$auto = $_POST['auto_select'];
	$gorod = stripcslashes(trim(htmlspecialchars($_POST['gorod'])));
	$street =stripcslashes(trim(htmlspecialchars( $_POST['street'])));
	$house = stripcslashes(trim(htmlspecialchars($_POST['house'])));
	$room = stripcslashes(trim(htmlspecialchars($_POST['room'])));
	$platej = $_POST['platej'];
	if($platej == 1){
		$platej = "Наложенный платёж в отделении новой почты";
	}
	else {
		$platej = "Прямой банковский перевод на карту";
	}
	$to = "yagoda303@gmail.com";
	$subject = "Пользователь," ." ".$names . " " ."заказал(ла) ЗЕЛЕНУЮ КАРТУ";
    $header = @header("Coontent-type: text/html;charsest: utf8");
    $message = "Пользователь заказал(ла) ЗЕЛЕНУЮ КАРТУ" ."\n\r Фамилия:" . " " . $fam ."\n\rИмя: " ." " .$names ."\n\r Отчество:". " " . $otch ."\n\r Ф.И.О на английском:" ." ". $fio."\n\r Телефон: " ." " . $phone ."\n\r E-mail:" . " " .$email . "\n\rДата рождения: " ." " . $date . "\n\rИНН:" . " " . $inn ."\n\rГос-номер:" . " " . $gosnumber ."\n\rМарка машины:" . " " . $auto ."\n\r Номер кузова: " . " " . $number_kuzov ."\n\r Город регистраци страхователя: " . " " . $gorod ."\n\rУлица регистрации страхователя: " ." " . $street ."\n\r Дои регистрации страхователя: " . " " .$house ."\n\r Квартира регистрации страхователя: " . " " . $room ."\n\r Способ оплаты: " . " " . $platej;
	$sendmail = mail($to, $subject,$message,$header);
}


?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
<div class="page-green-cart">
<div class="wrapper-section-green-cart">
<h1 class="title-h1-green-cart">Зеленая карта</h1>
<p>
&#171;ОСАГО&#187; на Вашу машину за границей<br>
Оформляй онлайн, чтобы не переплачивать на границе.	
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
<form action="form.php" method="get" class="form_green">
<div class="col-md-6 col-sm-12 col-xs-12">
<label>Тип транспортного средства<br>
<select class="select_auto">
<option value="1">Легковое авто</option>
<option value="2">Мотоцикл</option>
<option value="3">Грузовое авто</option>
<option value="4">Автобус</option>
<option value="5">Прицеп или полуприцеп</option>
</select>
</label>
<label>Страна поздки<br>
<input type="text" name="country" />
</label>
</div>
<div class="col-md-6 col-sm-12 col-xs-12">
<label>Срок поездки<br>
<select class="select_srok">
<option value="15">15 дней</option>
<option value="1">1 месяц</option>
<option value="2">2 месяца</option>
<option value="3">3 месяца</option>
<option value="4">4 месяца</option>
<option value="5">5 месяцев</option>
<option value="6">6 месяцев</option>
<option value="7">7 месяцев</option>
<option value="8">8 месяцев</option>
<option value="9">9 месяцев</option>
<option value="10">10 месяцев</option>
<option value="11">11 месяцев</option>
<option value="12">12 месяцев</option>
</select>
</label>
<label>Дата поездки<br>
<input type="date" name="date" class="date" id="date"/>
</label>
</fieldset>
<input type="button" class="summ" value="Рассчитать стоимость">
<div class="div-result">
<p class="itog" id="itog">Итоговая сумма:&nbsp;<strong><span id="summ"></span>&#8194;грв.</strong></p>
<a  class="btn_green_cart a_zayavka">Продолжить оформление</a>
</div>
</form>
</div>
</div>

<div class="col-md-5 hidden-sm hidden-xs">
<div class="bg_raznoe">
<p class="title-prichini">3 причины оформить</p>
<i class="fa fa-check check-prichini" aria-hidden="true"></i> Не нужно переплачивать за полис на границе<br />
<i class="fa fa-check check-prichini" aria-hidden="true"></i> Не будет проблем при прохождении таможенного контроля<br />
<i class="fa fa-check check-prichini" aria-hidden="true"></i> Гарантия выплаты - вы можете быть уверены, что пострадавшие получат компенсацию
</div>
</div>


<div class="clearfix"></div>
<div class="next_form_green_cart">
<a class="back a_zayavka">Назад</a>
<p class="before-autor-green-cart etapi-title"">Введите Ваши данные</p>
<form  class="form-step-two" method="post">
<fieldset>
<div class="col-md-4">
<label>
Фамилия<br>
<input type="text" name="fam" class="fam" placeholder="Введите вашу фамилию" />
</label>
<label>
Имя<br/>
<input type="text" name="names"  class="name" placeholder="Введите Ваше имя" >
</label>
<label>
Ваше отчество<br />
<input type="text" name="otch" class="otch" placeholder="Введите Ваше отчество">
</label>
<label>
Дата рождения<br />
<input type="date" name="date" class="date" placeholder="Дата рождения">
</label>
</div>
<div class="col-md-4">
<label>
Фамилия и имя на английском<br />
<input type="text" name="fio" class="fio" placeholder="Введите Ваше отчество">
</label>
<label>
Телефон<br />
<input type="phone" name="phone" class="phone" placeholder="Ваш телефон">
</label>
<label>
E-mail<br />
<input type="email" name="email" class="email" placeholder="Ваш email">
</label>
</div>
<div class="col-md-4">
<label>
ИНН<br />
<input type="text" name="inn" class="inn" placeholder="Ваш ИНН">
</label>
<label>
Гос номер<br />
<input type="text" name="gosnumber" class="gosnumber" placeholder="Ваш гос-номер">
</label>
<label>
Марка<br />
<select name="auto_select" class="select_auto">
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

</div>
<div class="clearfix"></div>
<p class="etapi-title">Адресс регистрации страхователя</p><br />
<div class="col-md-3 col-sm-3 col-xs-12">
<label>
Город регисирации<br />
<input type="text" name="gorod" class="gorod" placeholder="Город регистрации"/>
</label>
</div>
<div class="col-md-3 col-sm-3 col-xs-12">
<label>
Улица<br />
<input type="text" name="street" class="street" placeholder="Улица регистрации"/>
</label>
</div>
<div class="col-md-3 col-sm-3 col-xs-12">
<label>
Дом<br />
<input type="text" name="house" class="home" placeholder="Дом">
</label>
</div>
<div class="col-md-3 col-sm-3 col-xs-12">
<label>
Квартира<br />
<input type="text" name="room" class="kvartira" placeholder="Квартира" />
</label> 
</div>
<div class="clearfix"></div>
<p class="etapi-title">
Выберите способ оплаты</p>
<input type="radio" name="platej" class="input-radio" id='input-radio1' value="1">Наложенный платёж в отделении новой почты<br >
<input type="radio" name="platej" class="input-radio" id="input-radio" value="2">Прямой банковский перевод на карту

<div class="hidden_green_cert">
Оплату нужно направлять напрямую на наш банковский счет.
 Для оплаты на карту Вам необходимо перевести полную сумму заказа на карту: 26003018291701, и выслать нам фото чека (копию или скриншот) на email,viber или watsup 
Cтраховой полис будет отправлен после поступления средств на наш счет.
</div><br />
<input type="submit" name="btn_green_cart" value="Заказать" class="btn-zakazat a_zayavka">
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
