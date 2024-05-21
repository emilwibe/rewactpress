<?php
if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_enqueue_scripts', 'ew_enqueues');

function ew_enqueues() {
    wp_enqueue_script('vite-build', get_template_directory_uri() . '/dist/assets/rewact-entry.js', [], null, true);
    wp_enqueue_style('vite-style', get_template_directory_uri() . '/dist/assets/rewact.css', [], null);
}
