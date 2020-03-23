<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <?php wp_head(); ?>
</head>

<?php
if (is_front_page()) {
    $awesome_classes = ['awesome-class', 'my-class'];
} else {
    $awesome_classes = ['no-awesome-class'];
}

?>

<body <?php body_class($awesome_classes); ?>>


    <nav>
        <a href="/index.php">Gathenhielmska</a>
        <div class="container">
            <?php get_search_form(); ?>
            <div class="hamburger">
                <div class="bar1"></div>
                <div class="bar2"></div>
            </div>

            <ul class="menu-items">
                <?php foreach (get_pages(['sort_column' =>  'menu_order']) as $page) : ?>
                    <li class="
                    <?php $obj_id = get_queried_object_id();
                    $current_url = get_permalink($obj_id);

                    // Add active state to current url
                    if ($current_url === get_page_link($page->ID)) {
                        echo "active";
                    }; ?>
                    ">
                        <a href="<?php echo get_page_link($page->ID); ?>"><?php echo $page->post_title; ?></a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </nav>


    <div class="container">