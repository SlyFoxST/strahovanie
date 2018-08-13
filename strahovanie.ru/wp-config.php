<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'olya');

/** MySQL database username */
define('DB_USER', 'admin');

/** MySQL database password */
define('DB_PASSWORD', '123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'r))Mj~7ktD ^7s?F/@re 7.<V-%^*2OV=9kc4o134jF`9&&41{Ax:==mJbh]nq`U');
define('SECURE_AUTH_KEY',  'Rs(SpF04A<(;[:_h63?XU=K[B^X]U;j/R}kPns;d}LJ=_B1*=+ZcB<Gh2:>zB^Nr');
define('LOGGED_IN_KEY',    'H%9$hEK-i0Vb!c/H8y4;_=lrQ5m`/wYv Y!M{5.cu~;Amx}YGwc;=+6~&o$UFMv=');
define('NONCE_KEY',        'RD*/rJ74[@[ycYz|JGxU-[/Y#dYYtFX~82 II8jrj`bgX1ujOyzO8p}l.UUH&UCn');
define('AUTH_SALT',        'jLBs~{6-0,5JZg|;aKhjMsMIz @0,$V Rbl=sRL;iVTjk>SYB<dVekM2M3=KP 8{');
define('SECURE_AUTH_SALT', '~Ce3UI#7|-|J2Tpcjqw=Il@jo)UY_t;N@1b~c`{|3SC;k1AcEh;~N04:<3Mv{_Dp');
define('LOGGED_IN_SALT',   '|KqR!sw$-j<$;Gr>_3buT@- <1b|A]a7YGP))I|v[;8l!o1#pE{BV)}$`23~f/Zw');
define('NONCE_SALT',       '7Y)IThwZe~/5PvxALq4-{p<6B)cuXNi,H aQ2=6q&YZeAb$btNuFdVNld:y|=]Z/');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
