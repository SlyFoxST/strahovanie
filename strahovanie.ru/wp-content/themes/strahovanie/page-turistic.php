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
if(isset($_POST['btn_turist'])){
	$names = htmlspecialchars(trim(stripcslashes($_POST['names'])));
	$country = htmlspecialchars(trim(stripcslashes($_POST['country'])));
	$date1 = $_POST['date1'];
	$phone = htmlspecialchars(trim(stripcslashes($_POST['phone'])));
	$count = $_POST['count'];
	$date2 = $_POST['date2'];
	$to = "yagoda303@gmail.com";
	$subject = "ПОЛЬЗОВАТЕЛЬ ЗАКАЗАЛ(ЛА) ТУРИСТИЧЕСКОЕ СТРАХОВАНИЕ" ." " . $names;
	$message = "Пользователь:" ." " . $names . "\n\r Контактный телефон:" . " " .$phone ." "."\n\r.страна поездки:" . " " . $country . "\n\r Количество туристов:" ." " .$count ."\n\r Дата отъезда:" . " " . $date1 . "\n\r Дата приезда:" . " " . $date2;
	$header = @header("Content-type: text/html;charset: utf8");
	$sendmail = mail($to,$subject,$message,$header);
}

?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
<div class="page-kasko-cart">
<div class="wrapper-section-kasko">
	<div class="col-md-8">
<h1 class="title-turistic">Туристическое страхование</h1>
<p class="description-kasko">Заказывай онлайн и получайте полис <span class="akcent"> на 10% дешевле</span></p>
<?php if(isset($sendmail) && $sendmail == true) { ?>
<div class="thanks">
<p class=>Спасибо, ваш сообщение успешно отправлено.<br />Вскоре наш менеджер с вами свяжется</p>
</div>
<?php } else{ ?>
<p class="p_question">Моментальное страхование, за 3 минуты!</p>
<form method="POST" class="form_kasko">
	<div class="col-md-6">
		<label>Ваше имя<br>
		<input type="text" name="names" />
	</label>
	<label>Страна поездки<br>
		<input type="text" name="country" />
	</label>
	<label>Дата отъезда<br>
		<input type="date" name="date1" />
	</label>

	</div>
	<div class="col-md-6">
		<label>Телефон<br>
		<input type="tel" name="phone" />
	</label>
  <label>Количество туристов<br>
  <input type="number"  name="count">
</label>
<label>Дата приезда<br>
  <input type="date"  name="date2">
</label>
	</div>
<input type="submit" value="Отправть" class="summ btn-turist" name="btn_turist"/>
</form>
<?php }?>
</div>
<div class="col-md-4">
 <div class="wrapper_opisanie_turist">
<i class="fa fa-percent" aria-hidden="true"></i><br>
<p class="opisanie_kasko">Экономия 10%, при заказе электронного полиса</p>
<hr>
<i class="fa fa-clock-o" aria-hidden="true"></i><br>
<p class="opisanie_kasko">Моментальный расчет и оформление за минуты</p>
<hr>
<i class="fa fa-medkit" aria-hidden="true"></i><br>
<p class="opisanie_kasko">Медицинская помощь в любой стране мира 24/7</p>

</div>
</div>
</div>
</div>
<div class="about">
	<h3>Что предстовляет собой <span class="akcent">туристическое страхование?</span></h3>
		<p class="turist-p">
			В контексте страхования туристом считается человек, временно выезжающий за пределы страны проживания и не осуществляющий за границей оплачиваемой деятельности. То есть туристическая страховка для выезда за границу нужна не только людям, которые отправляются на отдых. Ее должны оформлять те, кто отправляется на лечение, оздоровление, в командировки, деловые поездки за рубеж.
			Законом Украины «О туризме» страхование выезжающих за рубеж отнесено к категории обязательных. Оно включает:
		</p>
		<div class="col-md-6">
		<img src="<?php bloginfo('template_directory'); ?>/img/car2.png" class="img-kasko" alt="Зарегестрировать каско в Славянске">
	</div>
	<div class="col-md-6">
		<div class="block-txt-turist">
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
		страхование от несчастного случая;
		<br>
       <i class="fa fa-check-square-o" aria-hidden="true"></i>
		медицинское страхование. <br>
	<i class="fa fa-check-square-o" aria-hidden="true"></i>
		Страховые случаи — внезапные кратковременные заболевания, не спровоцированные умышленно и возникшие, когда турист пребывал на туристическом маршруте.<br>
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
	Полис не действует на территории страны постоянного проживания. В течение срока действия договора можно несколько раз выезжать за рубеж. <br>
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
		Оформляется медицинская страховка для визы только теми страховыми компаниями, которые имеют на это соответствующую лицензию.  <br><br>

          </div>
	</div>
	
</div>
<div class="about">
	<h3>Чем отличается страховка для получения <span class="akcent">шенгенской визы ? </span></h3>
		<p class="turist-p">
			Страны шенгенского пространства славятся среди наших соотечественников сложным получением разрешения на въезд, особенно в первый раз. Особые требования предъявляются и к страховке. Главное, чем отличается страхование туристов, выезжающих в Шенгенскую зону, — минимальный размер страхового покрытия. Он составляет 30 тыс. евро.
			Базовые условия включают:
		</p>
		
	<div class="col-md-6">
		<div class="block-txt-turist">
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
		услуги транспортировки специализированным авто к месту оказания медицинской помощи и обратно;
		<br>
       <i class="fa fa-check-square-o" aria-hidden="true"></i>
		амбулаторное и стационарное лечение; <br>
	<i class="fa fa-check-square-o" aria-hidden="true"></i>
		неотложное стоматологическое вмешательство;<br>
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
	репатриацию останков.<br>
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
		визит родственников и других лиц в экстренных ситуациях;<br>
<i class="fa fa-check-square-o" aria-hidden="true"></i>
		страхование багажа;<br>
		<i class="fa fa-check-square-o" aria-hidden="true"></i>
		юридическую помощь, в том числе при утере билетов, документов и т. п.;<br>
          </div>
	</div>
	<div class="col-md-6">
		<img src="<?php bloginfo('template_directory'); ?>/img/car3.png" class="img-kasko" alt="Зарегестрировать каско в Славянске">
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
