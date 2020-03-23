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
    wp_enqueue_style('swiper', get_template_directory_uri() . '/assets/styles/swiper.css');
    wp_enqueue_style('style', get_template_directory_uri() . '/assets/styles/app.css');
    wp_enqueue_style('nav', get_template_directory_uri() . '/assets/styles/nav.css');

    // link scripts
    wp_enqueue_script('swiper-js', get_template_directory_uri() . '/assets/scripts/swiper.js',  array(), 5.2, true);
    wp_enqueue_script('script', get_template_directory_uri() . '/assets/scripts/app.js', array(), 1.0, true);
    wp_enqueue_script('hamburger menu', get_template_directory_uri() . '/assets/scripts/nav.js', array(), 1.0, true);
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


/**
 * Add featured news checkbox
 */
function sm_custom_meta()
{
    add_meta_box('sm_meta', __('Featured News', 'sm-textdomain'), 'sm_meta_callback', 'news');
}
function sm_meta_callback($news)
{
    $featured = get_post_meta($news->ID);
?>

    <p>
        <div class="sm-row-content">
            <label for="meta-checkbox">
                <input type="checkbox" name="meta-checkbox" id="meta-checkbox" value="yes" <?php if (isset($featured['meta-checkbox'])) checked($featured['meta-checkbox'][0], 'yes'); ?> />
                <?php _e('Featured this post', 'sm-textdomain') ?>
            </label>

        </div>
    </p>

<?php
}
add_action('add_meta_boxes', 'sm_custom_meta');

/**
 * Saves the custom meta input
 */
function sm_meta_save($news_id)
{

    // Checks save status
    $is_autosave = wp_is_post_autosave($news_id);
    $is_revision = wp_is_post_revision($news_id);
    $is_valid_nonce = (isset($_POST['sm_nonce']) && wp_verify_nonce($_POST['sm_nonce'], basename(__FILE__))) ? 'true' : 'false';

    // Exits script depending on save status
    if ($is_autosave || $is_revision || !$is_valid_nonce) {
        return;
    }

    // Checks for input and saves
    if (isset($_POST['meta-checkbox'])) {
        update_post_meta($news_id, 'meta-checkbox', 'yes');
    } else {
        update_post_meta($news_id, 'meta-checkbox', '');
    }
}
add_action('save_post', 'sm_meta_save');
