<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php $page_title = get_field('page_title'); ?>
    <script>
        /**
         * Global JS object `window.rewactpress_data`
         * Exposes WordPress-specific data to the React frontend.
         * This allows React components to dynamically fetch content and determine context.
         */
        window.rewactpress_data = {
            /** Base URL of the WordPress Site */
            "site_url": "<?php echo get_site_url(); ?>",

            /** REST API endpoint */
            "API_endpoint": "<?php echo get_site_url(); ?>/wp-json/wp/v2/",

            /** ID of the current post/page */
            "current_post_ID": "<?php echo get_the_ID(); ?>",

            /** Post type */
            "current_post_type": "<?php echo get_post_type(); ?>",
            
            /** 
            * Custom template type from ew_enqueues.php
            * Responsible for telling React which template component to render dynamically.
            * Possible values: "front_page", "blog_page", "single", "single_page", "home_page"
            */
            "template_type": "<?php echo get_template_type(); ?>",

            /** ACF page title for React  */
            "page_title": <?php echo json_encode($page_title); ?> 
        }

    </script>
    
    <?php
    /** WordPress hook for plugins, themes, and core to enqueue scripts, styles, meta tags, and other <head> content */
    wp_head();
    ?>
</head>
<body>