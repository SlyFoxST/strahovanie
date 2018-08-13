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
if(isset($_POST['btn_kasko'])){
	$names = htmlspecialchars(trim(stripcslashes($_POST['names'])));
	$phone = htmlspecialchars(trim(stripcslashes($_POST['phone'])));
	$mark = htmlspecialchars(trim(stripcslashes($_POST['mark'])));
	$model = htmlspecialchars(trim(stripcslashes($_POST['model'])));
	$years = htmlspecialchars(trim(stripcslashes($_POST['years'])));
	$to = "yagoda303@gmail.com";
	$subject = "ПОЛЬЗОВАТЕЛЬ ЗАКАЗАЛ(ЛА) КАСКО" ." " . $names;
	$message = "Пользователь:" ." " . $names . "\n\r Контактный телефон:" . " " .$phone ."\n\r Марка автомобиля:" . " " .$mark . "\n\r Модель автомобиля:" . " " . $model . "\n\r Год выпуска автомобиля: " . " " .$years;
	$header = @header("Content-type: text/html;charset: utf8");
	$sendmail = mail($to,$subject,$message,$header);
}

?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
<div class="page-kasko-cart">
<div class="wrapper-section-kasko">
	<div class="col-md-8">
<h1 class="title-kasko">Каско+</h1>
<p class="description-kasko">Это когда вы получаете полную выплату <span class="akcent">в течении 7</span> дней с момента <span class="akcent">ДТП</span></p>
<?php if(isset($sendmail) && $sendmail == true) { ?>
<div class="thanks">
<p class=>Спасибо, ваш сообщение успешно отправлено.<br />Вскоре наш менеджер с вами свяжется</p>
</div>
<?php } else{ ?>
<p class="p_question">Узнай стоимость каско, за 3 минуты!</p>
<form method="POST" class="form_kasko">
	<div class="col-md-6">
		<label>Ваше имя<br>
		<input type="text" name="names" />
	</label>
	<label>Марка<br>
		<input type="text" name="mark" />
	</label>
	<label>Модель<br>
		<input type="text" name="model" />
	</label>

	</div>
	<div class="col-md-6">
		<label>Телефон<br>
		<input type="tel" name="phone" />
	</label>
  <label for="amount">Год выпуска авто:<br>
  <input type="text" id="amount" name="years" readonly style="border:0; color:#af5e00; font-weight:bold;">
<div id="slider-range-max"></div>
</label><br>
<input type="submit" value="Отправть" class="summ btn-kasko" name="btn_kasko"/>
	</div>

</form>
<?php }?>
</div>
<div class="col-md-4">
 <div class="wrapper_opisanie">
<i class="fa fa-balance-scale" aria-hidden="true"></i><br>
<p class="opisanie_kasko">Вне зависимости от того, кто виноват</p>
<hr>
<i class="fa fa-address-card-o" aria-hidden="true"></i>
<p class="opisanie_kasko">Без спрвок из полиции и бумажной волокиты</p>
<hr>
<i class="fa fa-usd" aria-hidden="true"></i>
<p class="opisanie_kasko">Без ограничений по суммам выплат</p>
<hr>
<i class="fa fa-gavel" aria-hidden="true"></i>
<p class="opisanie_kasko">Без ограничений по количеству страховых событий</p>
</div>
</div>
</div>
</div>
<div class="about">
	<h3>Мы делаем всё, что бы <span class="akcent">Вам было удобно</span></h3>
		<p>
			Мы внемательно относимся к деталям и молниеносно реагируем на запросы и ситуации
		</p>
	<div class="col-md-4">
		<div class="block-txt">
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
		Мы работаем со страховыми случаями, которые произошли как на территории
		<br><br>
       <i class="fa fa-check-square-o" aria-hidden="true"></i>
		Если СТО произвела некачественный ремонт — мы готовы устранить его<br><br>
	<i class="fa fa-check-square-o" aria-hidden="true"></i>
		Вы можете вносить страховой платёж 3-мя равными частями без удорожания<br><br>
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
		По условиям страхования нет привязки к месту хранения автомобиля <br><br>
	<i class="fa fa-check-square-o" aria-hidden="true"></i>
		Нет ограничений по тому факту, кто должен управлять автомобилем — за рулём <br><br>

          </div>
	</div>
	<div class="col-md-8">
		<img src="<?php bloginfo('template_directory'); ?>/img/car.png" class="img-kasko" alt="Зарегестрировать каско в Славянске">
	</div>
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
