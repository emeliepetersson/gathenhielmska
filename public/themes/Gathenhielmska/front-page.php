<?php get_header(); ?>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <?php if (have_posts()) : ?>

            <!-- ******* Display featured news! ******* -->

            <?php
            $args = array(
                'news_per_page' => 5,
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

<div>
    <?php while (have_posts()) : the_post(); ?>

        <div>
            <h1><?php the_title(); ?></h1>
            <?php if (has_post_thumbnail()) : ?>
                <div>
                    <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                        <?php the_post_thumbnail(); ?>
                    </a>
                </div>

            <?php endif; ?>
            <?php the_content(); ?>

        </div>

    <?php endwhile; ?>

</div>
<?php endif; ?>

<?php get_footer(); ?>
