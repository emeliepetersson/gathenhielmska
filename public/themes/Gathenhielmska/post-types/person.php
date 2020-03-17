<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('student', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Person'),
            'edit_item' => __('Edit Person'),
            'name' => __('People'),
            'search_items' => __('Search People'),
            'singular_name' => __('Person'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-groups',
        'menu_position' => 21,
        'public' => true,
        'show_in_rest' => true,
    ]);
});
