<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package FoodOdessa
 */

?>


	<div class="entry-content">
	<?php if (function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
		<?php
			the_content();

		?>
		<div class="wrapper_dostavka">
		<h1 class="h1_dostavka">Доставка и оплата</h1>
		<div class="container-fluid">
<div class="row">
		
		<div class="col-md-6">
		<div class="listing_dostavka">
	<p class="white">
	<strong style="border-bottom: 1px dotted #fff;font-size:21px;">Поселок Котовского (с 11:00 до 22:30):</strong><br />
Бесплатная доставка при заказе от 120 грн.
При заказе менее 120 грн - стоимость доставк</p>
<p class="green">
<strong style="color: rgb(0, 255, 0);border-bottom: 1px dotted rgb(0, 255, 0);font-size:21px;">Зеленая зона:</strong><br />
При заказе менее 100 грн - стоимость доставки 30 грн
Примерное время доставки: 60 минут
</p>
<p class="yellow">
<strong style="color: yellow;border-bottom: 1px dotted yellow;font-size:21px;">Желтая зона:</strong><br />
Бесплатная доставка при заказе от 120 грн.
При заказе менее 120 грн - стоимость доставки 35 грн
Примерное время доставки: 60 минут
</p>
<p class="gold">
<strong style="color: #FF9800;border-bottom: 1px dotted #ff9800;font-size:21px;">Оранжевая зона:</strong><br/>
Бесплатная доставка при заказе от 150 грн.
При заказе менее 150 грн - стоимость доставки 40 грн
Примерное время доставки: 80 минут
</p>
<p class="red">
<strong style="color: red;border-bottom: 1px dotted red;font-size:21px;">Красная зона:</strong><br/>
Бесплатная доставка при заказе от 220 грн.
При заказе менее 220 грн - стоимость доставки 45 грн
Примерное время доставки: 90 минут
</p>
<p class="pink">
<strong style="color: pink;border-bottom: 1px dotted pink;font-size:21px;">Розовая  зона:</strong><br />
Минимальный заказ: 350 грн
Примерное время доставки: 90-120 минут
</p>
<p class="blue">
<strong style="color:rgb(144, 62, 204);border-bottom: 1px dotted #4b0082;font-size:21px;">Фиолетовая  зона:</strong><br />
Минимальный заказ: 500 грн
Время доставки уточнит оператор
</p>
</div>
		</div>
    <div class="col-md-6">
		<iframe src="https://www.google.com/maps/d/embed?mid=1ZtY3IOdnzAf8RAPbGXWTahK8EjA" width="640" height="480"></iframe>
		</div>
		</div>
		</div><!--END WRAPPER-->
	</div><!-- .entry-content -->

