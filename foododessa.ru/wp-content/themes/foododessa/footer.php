<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package FoodOdessa
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
<div class="container-fluid">
	<div class="row">
	<div  class="col-md-3 footer_class">
	<p class="title_footer">О нас</p>
	<a href="/kontaktyi/">Контакты</a><br />
	<a href="/vakansii/">Вакансии</a>
	<p class="footer_p footer_class">
	Мы работаем с 2013 года и готовим горячую, вкусную пиццу 30 и 40 сантиметров в диаметре. У нас вкусное тесто и много начинки. Заказать пиццу можно круглосуточно.	
	</p>
	</div>
	<div  class="col-md-3 footer_class">
	<p class="title_footer">Информация</p>
	<p><strong>Yummy-Yummy,</strong><br />
     65007, Одесса,<br>
     ул.Малая Арнаутская, д.69<br>
     <a href="#"><i class="fa fa-vk" aria-hidden="true"></i></a>
     <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
     <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
     <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
	</p>
	<a class="phone_tel" href="tel:+38(063)641-16-68">+38(063)641-16-68</a><br />
	
	<a href="#" class="eModal-1 callback">Заказать звонок</a>
	<p class="title_footer">Доставка</p>
     <a href="/dostavka/">Доставка и оплата</a>
	</div>
	<div  class="col-md-3 footer_class">
	<p class="title_footer">Реквизиты</p>
	<p>
	ООО «ФВ Север»<br />
     ИНН: 7743106730<br />
     КПП: 774301001<br />
     ОГРН: 1157746587217<br />
     Юр. адрес: 125438,<br />
     г. Одесса, <br />
     ул.Малая Арнаутская, д.69<br />
     </p>
     
	</div>
	<div  class="col-md-3 footer_class">
	<p class="title_footer">Скачать приложение</p>
	<a href="#" class="a_android_apple">
<i class="fa fa-android" aria-hidden="true"></i>
	</a>
	<a href="#" class="a_android_apple">
<i class="fa fa-apple" aria-hidden="true"></i>
	</a>
	<div class="clearfix"></div>
	<p class="title_footer">Клиентам</p>
	<a href="/pravovaya-informatsiya/">Правила продажи</a>
	</div>
</div>
			&copy;Yummy-Yummy
			<span class="sep"> | </span>
			 2017
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script>
jQuery(document).ready(function($) {
	$(".woocommerce-product-gallery__image").click(function(){
	   $(".woocommerce-product-gallery__trigger").trigger('click');
   });
});
</script>
</body>

</html>
