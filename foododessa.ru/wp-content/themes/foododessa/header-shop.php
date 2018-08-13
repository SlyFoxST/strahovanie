<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package FoodOdessa
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
     <link href="http://allfont.ru/allfont.css?fonts=annabelle" rel="stylesheet" type="text/css" />

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="page" class="site">
	<header id="masthead" class="site-header">
	<div class="container-fluid">
	<div class="row">
	<div class="col-md-4 col-sm-2 col-xs-2">
	<div class="row">
	<div class="con-menu">
		<div class="site-branding">
		</div><!-- .site-branding -->

		<nav class="top-nav">
			 <div class="hide-nav">
                <span class="hide-nav__line hide-nav__line--top"></span>
                <span class="hide-nav__line hide-nav__line--middle"></span>
                <span class="hide-nav__line hide-nav__line--bottom"></span>
            </div>
            <ul class="nav_list">

            <? echo get_custom_logo();?>
            <div  class="title_menu"> 
           <h3>Меню</h3>
           <img src="<?php echo get_template_directory_uri().'/img/bg_line.png'?>" class='img-responsive img_line_menu'>
            </div>
			<?php
		 
				wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				) );
			?>

			 <img src="<?php echo get_template_directory_uri().'/img/bg_line.png'?>" class='img-responsive img_line_menu'>
			 <a href="http://tanechwk.beget.tech/kontaktyi/">Контакты</a>
            <a href="http://tanechwk.beget.tech/vakansii/">Вакансии</a>
            <a href="http://tanechwk.beget.tech/pravovaya-informatsiya/">Правила продажи</a>
			<a href="http://tanechwk.beget.tech/dostavka/">Доставка и оплата</a>
			<a href="/my-account/">Личный кабинет</a>

			</ul>
		</nav><!-- #site-navigation -->
		</div>
		</div>
		</div>
		<div class="col-md-3 col-sm-2 col-xs-2 hidden-xs hidden-sm">
		<div class="cart-content">
		<div class="logo-header">
     <img src="<?php echo get_template_directory_uri().'/img/logo1.png'?>" class='img-responsive'>
     </div> 
</div>
</div>
<div class="col-md-2  hidden-sm hidden-xs">
<div class="header_contakt">
<i class="fa fa-phone" aria-hidden="true"></i>+38(063)641-16-68<br />
<i class="fa fa-map-marker" aria-hidden="true"></i>Ул.Малая-Арнаутская, дом.69<br>
</div>
</div>
<div class="col-md-3 col-sm-10 col-xs-10">
<div class="cart-header">
<sapn class="hidden-md hidden-lg">+38(063)641-16-68<br /></sapn>
<a href="#" class="eModal-1 btn-header"><i class="fa fa-phone" aria-hidden="true"></i><span>Позвонить</span></a>
<div class="hidden">
	<form id="form" class="form_phpone_header">
	<p class="title_form">Мы перезвоним вам за 2 минуты!</p>
	<input type="text" name="name" placeholder="Ваше имя"/><br />
	<input type="text" name="phone" placeholder="Ваш телефон"/><br/>
	<button class="btn_header_form">Отправить</button>
	</form>
</div>
<?php wp_nav_menu(array( 'theme_location' => 'menu2')); ?>
</div>
</div>


</div><!--End row-->
</div><!--End contINER-FLUID-->
</header>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
