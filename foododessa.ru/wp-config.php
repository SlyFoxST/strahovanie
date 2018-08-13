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
define('DB_NAME', 'odessa2');

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
define('AUTH_KEY',         'NuMxB%=(FZrC.rVG1 mbU!RA/Hsj^1PD27{|f^]tSUx`%__/B80<e{er$uc~8A{D');
define('SECURE_AUTH_KEY',  ' P*]Ux-u;]uoz/@)^@RT.D}Nn_@@hbApR;5#iHh1b9%&5A&/%Xu-Nt$lI/[Ls#7^');
define('LOGGED_IN_KEY',    'H=0Ri_]TGf8q<$CP0/.gMtI{hAEvaBlxr_Cyhh{% X&C/xK}%=KWgw^~]2L[q()p');
define('NONCE_KEY',        'bpvG8Ny(Z2KILBPG7l8!bOC.DT*fD|Ets}mhyfRn4cS40z*<,[cI01jDyELhNr#L');
define('AUTH_SALT',        '<n1R~g!6WCZ&(4?#t|yh7u-os/d@&|Hw_nu}wl(UI--A>=!:a,3SrL[:DPe$S}bA');
define('SECURE_AUTH_SALT', 'R<0F xvi2[Gr=5zY.|O#d;HM+-j.ecqWQC4o%8B(nVd>8]%}5vorK!gf_O2X2syv');
define('LOGGED_IN_SALT',   'PU;Tiyljsi:GBJ(a[16SH8&{JduhFJW$b:/RoR_C|rUF=~+ehT2o2g=VzY9qu^_W');
define('NONCE_SALT',       '8nY5`yJL^Q.3Z}*GQCbr<Gq;hVBhUy%]ei,1&o/|!Z3$Z7_@twDTd wiyN6(5,,}');

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
