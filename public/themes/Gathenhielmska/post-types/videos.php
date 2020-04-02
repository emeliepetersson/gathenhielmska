<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('Videos', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add Videos Post'),
            'edit_item' => __('Edit Videos Post'),
            'name' => __('Videos Posts'),
            'search_items' => __('Videos Posts'),
            'singular_name' => __('Videos Post'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-video-alt3',
        'menu_position' => 22,
        'public' => true,
        'show_in_rest' => true,
    ]);
});
