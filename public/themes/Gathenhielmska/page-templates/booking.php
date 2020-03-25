<?php /* Template name: Booking */ ?>

<?php get_header(); ?>
<?php if (have_posts()) : ?>

    <div class="container-booking">

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>

            <div class="areas">
                <h2>Lokaler</h2>
                <?php

                if (have_rows("bookable_areas")) :
                    while (have_rows("bookable_areas")) : the_row();
                ?>
                        <div class="title-wrapper">
                            <h3><?php the_sub_field("name"); ?></h3>
                            <div class="show-area plus-icon">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                            </div>
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
            <?php echo do_shortcode('[contact-form-7 id="53" title="Contact form 1"]'); ?>
        <?php endwhile; ?>


    </div>
<?php endif; ?>

<?php get_footer(); ?>
