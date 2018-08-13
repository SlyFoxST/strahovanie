<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Strahovanie
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'strahovanie' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="col-md-2 col-sm-12">
			<div class="row">
		<div class="site-branding">
			<? the_custom_logo(); ?>
			<?php
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$strahovanie_description = get_bloginfo( 'description', 'display' );
			if ( $strahovanie_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $strahovanie_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->
</div>
</div>
<div class="col-md-7 col-sm-12">
	<div class="row">
		<nav id="site-navigation" class="main-navigation">

			<?php wp_nav_menu( array( 'theme_location' => 'menu-1' ) ); ?>
		</nav><!-- #site-navigation -->
	</div>
	</div>
	<div class="col-md-3 col-sm-12">
		<div class="row">
			<div class="header_btn">
	
				<button class="eModal-1" id="header_phone">Бесплатный звонок</button><br />
		<a href="tel:38066 870 5550" class="a_phone"><i class="fa fa-volume-control-phone" aria-hidden="true"></i>+38066 555 5555</a>
</div>
	</div>
</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
