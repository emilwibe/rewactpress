<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script>
        let rewactpress_data = {
            "site_url": "<?php echo get_site_url(); ?>",
            "API_endpoint": "<?php echo get_site_url(); ?>/wp-json/wp/v2/",
            "current_post_ID": "<?php echo get_the_ID(); ?>",
            "current_post_type": "<?php echo get_post_type(); ?>",
            "template_type": "<?php echo rewturn_template_type(); ?>",
        }
        <?php
            function rewturn_template_type() {
                if( is_home() && is_front_page() ) {
                    return "blog_page";
                } elseif( is_home() ) {
                    return "home";
                } elseif ( is_front_page() ) {
                    return "front_page";
                } elseif( is_single() ) {
                    return "single";
                } elseif ( is_page() ) {
                    return "single_page";
                }
            }
        ?>

    </script>

    <?php wp_head(); ?>
</head>
<body>