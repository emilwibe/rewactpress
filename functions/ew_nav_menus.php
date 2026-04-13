<?php
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Register theme navigation menus.
 *
 * Registers a primary and footer menu.
 *
 * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
 */
if (!function_exists('mytheme_register_nav_menu')) {
	function mytheme_register_nav_menu()
	{
		register_nav_menus(array(
			/** Main site nav */
			'primary_menu' => __('Primary Menu', 'rewactpress'),

			/** Footer links */
			'footer_menu' => __('Footer Menu', 'rewactpress'),  

		));
	}

	/**  Hook into 'after_setup_theme' to register menus */
	add_action('after_setup_theme', 'mytheme_register_nav_menu', 0);
}
