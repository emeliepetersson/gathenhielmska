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


    <nav class="container">
        <a href="/index.php">Gathenhielmska</a>
        <div class="menu-container">
            <?php get_search_form(); ?>
            <div class="hamburger">
                <div class="bar1"></div>
                <div class="bar2"></div>
            </div>

            <ul class="menu-items">
                <a class="logo" href="/index.php">Gathenhielmska</a>
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
                <li class="languages">Other language</li>
                <li class="media-icons">
                    <a href="#"><img src="/themes/Gathenhielmska/assets/images/Facebook.svg" alt="Facebook icon"></a>
                    <a href="#"><img src="/themes/Gathenhielmska/assets/images/Instagram.svg" alt="Instagram icon"></a>
                </li>
            </ul>
        </div>
    </nav>


    <div>
