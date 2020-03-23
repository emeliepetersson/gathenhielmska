<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
});

// Hide admin bar on the front end
add_filter('show_admin_bar', '__return_false');

// stylesheets and scripts
function custom_stylesheet()
{
    // link style sheets
    wp_enqueue_style('style', get_template_directory_uri() . '/assets/styles/app.css');
    wp_enqueue_style('nav', get_template_directory_uri() . '/assets/styles/nav.css');
    wp_enqueue_style('booking', get_template_directory_uri() . '/assets/styles/booking.css');

    // link scripts
    wp_enqueue_script('script', get_template_directory_uri() . '/assets/scripts/app.js', array(), 1.0, true);
    wp_enqueue_script('hamburger menu', get_template_directory_uri() . '/assets/scripts/nav.js', array(), 1.0, true);
    wp_enqueue_script('areas', get_template_directory_uri() . '/assets/scripts/areas.js', array(), 1.0, true);
}

// Call custom stylesheet function
add_action('wp_enqueue_scripts', 'custom_stylesheet');

// Enable featured image
add_theme_support('post-thumbnails');


/**
 * Enable features from Soil when plugin is activated
 * @link https://roots.io/plugins/soil/
 */
add_theme_support('soil-clean-up');
add_theme_support('soil-disable-asset-versioning');
add_theme_support('soil-disable-trackbacks');
add_theme_support('soil-js-to-footer');
add_theme_support('soil-nice-search');
add_theme_support('soil-relative-urls');


// Require the plate.php file
require __DIR__ . "/plate.php";

// Register news custom post type.
require get_template_directory() . "/post-types/news.php";

// Register person custom post type.
require get_template_directory() . "/post-types/person.php";
