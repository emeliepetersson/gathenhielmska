<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('Images', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add Images Post'),
            'edit_item' => __('Edit Images Post'),
            'name' => __('Images Posts'),
            'search_items' => __('Images Posts'),
            'singular_name' => __('Images Post'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-images-alt2',
        'menu_position' => 21,
        'public' => true,
        'show_in_rest' => true,
    ]);
});
