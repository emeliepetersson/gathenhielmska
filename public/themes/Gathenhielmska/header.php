<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php wp_head(); ?>
</head>

<body>
    <nav class="container">
        <a href="/index.php">Gathenhielmska</a>
        <div class="menu-container">
            <?php get_search_form(); ?>
            <div class="hamburger">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <ul class="menu-items">
                <div class="logo">
                    <a href="/index.php">Gathenhielmska</a>
                </div>
                <?php foreach (get_pages(['sort_column' =>  'menu_order']) as $page) : ?>
                    <li class="
                    <?php
                    $obj_id = get_queried_object_id();
                    $current_url = get_permalink($obj_id);
                    $children = get_pages(['child_of' => $page->ID]);

                    if ($page->post_parent) {
                        echo "hide-child ";
                    }

                    if (!$page->post_parent && count($children) > 0) {
                        echo "parent ";
                    }

                    // Add active state to current url
                    if ($current_url === get_page_link($page->ID)) {
                        echo "active";
                    }
                    ?>
                    ">
                        <a href="<?php echo get_page_link($page->ID); ?>"><?php echo $page->post_title; ?></a>
                        <?php
                        if (!$page->post_parent && count($children) > 0) : ?>
                            <div class="plus-icon">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                            </div>
                        <?php endif ?>
                    </li>
                <?php endforeach; ?>
                <a href="http://localhost:8000/en">
                    <li class="languages">English</li>
                </a>
                <li class="media-icons">
                    <a href="https://www.facebook.com"><img src="<?php echo get_template_directory_uri() . '/assets/images/Facebook-white.svg' ?>" alt="Facebook icon"></a>
                    <a href="https://www.instagram.com"><img src="<?php echo get_template_directory_uri() . '/assets/images/Instagram-white.svg' ?>" alt="Instagram icon"></a>
                </li>
            </ul>
        </div>
    </nav>


    <div>
