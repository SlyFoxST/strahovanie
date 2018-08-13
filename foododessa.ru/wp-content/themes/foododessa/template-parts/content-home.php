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
		the_tags();
		?>


		
		<?
			the_content();

		?>
		
	</div><!-- .entry-content -->

