<?php get_header(); ?>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <?php if (have_posts()) : ?>

            <!-- ******* Display featured news! ******* -->

            <?php
            $args = array(
                'posts_per_page' => -1,
                'meta_key' => 'meta-checkbox',
                'post_type' => 'news',
                'meta_value' => 'yes'
            );
            $featured = new WP_Query($args);

            if ($featured->have_posts()) : while ($featured->have_posts()) : $featured->the_post(); ?>
                    <?php if (has_post_thumbnail()) : ?>

                        <div class="swiper-slide">
                            <a href="<?php the_permalink(); ?>">
                                <div class="slider-text">
                                    <h2><?php the_title(); ?></h2>
                                    <?php the_excerpt(); ?>
                                </div>
                            </a>
                            <?php the_post_thumbnail(); ?>
                        </div>
            <?php
                    endif;
                endwhile;
            else :
            endif;
            ?>

    </div>
    <div class="swiper-pagination swiper-pagination-black"></div>
</div>

<!-- ******* END OF Display featured news! ******* -->

<div class="front-page-wrapper">
    <?php while (have_posts()) : the_post(); ?>

        <?php the_content(); ?>

        <div class="upcoming-wrapper">
            <h2><?php the_field("events-title"); ?></h2>
            <?php echo do_shortcode('[MEC id="240"]') ?>
            <div class="text-wrapper">
                <p><?php the_field("events-description") ?></p>
                <button><a href="<?php the_field("events-link") ?>">Program</a></button>
            </div>
        </div>

        <div class="about-wrapper">
            <?php if (has_post_thumbnail()) : ?>
                <div class="image">
                    <?php the_post_thumbnail(); ?>
                </div>
            <?php endif; ?>
            <div class="text-wrapper">
                <h1><?php the_field("the-house") ?></h1>
                <p><?php the_field("paragraph_1") ?></p>
                <p class="center"><?php the_field("paragraph_2") ?></p>
                <div class="button-wrapper">
                    <button><a href="<?php echo the_field("rooms-link") ?>"><?php the_field("link_label_1") ?></a></button>
                    <button><a href="<?php echo the_field("booking_link") ?>"><?php the_field("link_label_2") ?></a></button>
                </div>
            </div>
        </div>

        <div class="footer-wrapper">
            <div class="contact-wrapper">
                <h3><?php the_field("title_1") ?></h3>
                <p><?php the_field("adress") ?></p>
                <p><?php the_field("phone_number") ?></p>
                <p>Mail: <?php the_field("email") ?></p>
            </div>

            <div class="social-media-wrapper">
                <h3><?php the_field("title_2") ?></h3>
                <a href="<?php get_field("facebook-link") ?>"><img src="/themes/Gathenhielmska/assets/images/Facebook.svg" alt="Facebook icon"></a>
                <a href="<?php get_field("Instagram-link") ?>"><img src="/themes/Gathenhielmska/assets/images/Instagram.svg" alt="Instagram icon"></a>
            </div>

            <div class="sponsors-wrapper">
                <h3><?php the_field("title_3") ?></h3>

                <?php
                if (have_rows("sponsors")) :
                    while (have_rows("sponsors")) : the_row();
                ?>
                        <a href="<?php get_sub_field("link") ?>"></a><img src="<?php echo get_sub_field("logo") ?>" alt="sponsor's logo">
                <?php
                    endwhile;
                endif;

                ?>

            </div>
        </div>

    <?php endwhile; ?>

</div>
<?php endif; ?>

<?php get_footer(); ?>
