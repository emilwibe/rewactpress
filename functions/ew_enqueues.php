<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue compiled frontend assets
 * Vite JS, CSS and custom widget bundle
 */
function ew_enqueues()
{
    /** JS entry file */
    wp_enqueue_script('vite-build', get_template_directory_uri() . '/dist/assets/rewact-entry.js', [], null, true);
    /** CSS entry file */
    wp_enqueue_style('vite-style', get_template_directory_uri() . '/dist/assets/rewact.css', [], null);
    /** Custom widget bundle (React-based, supports child themes) */
    wp_enqueue_script(
        'my-widget-script',
        get_stylesheet_directory_uri() . '/js/widget-bundle.js',
        ['react', 'react-dom'],
        null,
        true
    );
}

/**
 * Determines the current page type
 * Returns one of:
 * - front_page
 * - blog_page
 * - single
 * - single_page
 * - home_page
 * 
 * Used by src/template-files/TemplateMount.jsx for conditional rendering
 * 
 * @return string Page type identifier
 */
function get_template_type()
{
    if (is_front_page()) {
        return 'front_page';
    } elseif (is_home()) {
        return 'blog_page';
    } elseif (is_single()) {
        return 'single';
    } elseif (is_page()) {
        return 'single_page';
    } else {
        return 'home_page';
    }
}

/**  
 * Hook into WordPress to enqueue frontend assets
 */

add_action('wp_enqueue_scripts', 'ew_enqueues');
