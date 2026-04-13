<?php
if (!defined('ABSPATH')) { exit; }

/**
 * Theme functionality bootstrap
 * 
 * Loads modular function files for:
 * - Enqueuing scripts and styles
 * - Registering navigation menus
 * - Registering widget areas
 */

/**
 * Enqueue scripts and styles
 * 
 * Handles Vite assets and custom widget bundle
 */
get_template_part( 'functions/ew_enqueues' );

/**
 * Navigation menus
 *
 * Registers and configures WordPress menu locations.
 */
get_template_part( 'functions/ew_nav_menus' );

/**
 * Widget sidebar
 *
 * Registers sidebar areas for widgets.
 */
get_template_part('functions/ew_widget_sidebar');