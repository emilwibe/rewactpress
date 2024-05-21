<?php
if (!defined('ABSPATH')) { exit; }

if ( ! function_exists( 'mytheme_register_nav_menu' ) ) {

	function mytheme_register_nav_menu(){
		register_nav_menus( array(
	    	'primary_menu' => __( 'Primary Menu', 'rewactpress' ),
	    	'footer_menu'  => __( 'Footer Menu', 'rewactpress' ),
		) );
	}
	add_action( 'after_setup_theme', 'mytheme_register_nav_menu', 0 );
}