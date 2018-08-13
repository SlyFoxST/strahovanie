<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Strahovanie
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'strahovanie' ) ); ?>">
						</a>
		<div class="col-md-4">
			<p class="title_footer">Частным лицам</p>
			<ul class="list_footer">
			<li><a href="/страхование-автомобиля-каско/">Страхование автомобиля - КАСКО</a></li>
			<li><a href="/осаго-автогрожданка/">ОСАГО "Автогрожданка"</a></li>
			<li><a href="/страхование-при-выезде-за-границу/">Выезд за границу</a></li>
			<li><a href="/медицинское-страхование/">Медицинское страхование</a></li>
			<li><a href="/застраховаться-от-несчастного-случа/">Несчастный случай</a></li>

		</ul>
		</div>
		<div class="col-md-4">
			<p class="title_footer">Юридическим лицам</p>
			<ul class="list_footer">
			<li><a href="/страхование-грузоперевозок/">Страхование грузоперевозок</a></li>
			<li><a href="/автострахование/">Автострохование</a></li>
			<li><a href="застраховать-имущество-предприятия">Имущество предприятия</a></li>
			<li><a href="/проф-ответственность/">Проф.ответственость</a></li>
			<li><a href="/страхование-спортсменов/">Страхование спортсменов</a></li>

		</ul>
		</div>
		<div class="col-md-4">
			<p class="title_footer">Калькуляторы</p>
			<ul class="list_footer">
			<li><a href="/osago/">Калькулятор - ОСАГО</a></li>
			<li><a href="/kasko/">Калькулятор - КАСКО</a></li>
			<li><a href="/green-cart/">Калькулятор - ЗЕЛЁНАЯ КАРТА</a></li>
			<li><a href="/turistic/">Калькулятор - ТУРИСТИЧЕСКОЕ СТРАХОВАНИЕ</a></li>

		</ul>
		</div>	
				
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/jquery.validate.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</body>
</html>
