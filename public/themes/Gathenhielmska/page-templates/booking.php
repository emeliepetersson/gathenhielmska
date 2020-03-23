<?php /* Template name: Booking */ ?>

<?php get_header(); ?>
<?php if (have_posts()) : ?>

    <div>

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>

            <div class="areas">
                <?php

                if (have_rows("bookable_areas")) :
                    while (have_rows("bookable_areas")) : the_row();
                ?>
                        <div>
                            <h3><?php the_sub_field("name"); ?></h3>
                            <img src="public/themes/Gathenhielmska/assets/images/expand-arrow.png" class="expand-arrow" alt="expand arrow">
                        </div>

                        <div class="area-wrapper">
                            <img src="<?php echo get_sub_field("image")['url'] ?>" alt="An area of the house">
                            <p><?php the_sub_field("description") ?></p>
                        </div>

                <?php
                    endwhile;
                endif;

                ?>
            </div>
        <?php endwhile; ?>

    </div>
<?php endif; ?>

<?php get_footer(); ?>