<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>


        <?php
        $single = new MEC_skin_single();
        $single_event_main = $single->get_event_mec(get_the_ID());
        $single_event_obj = $single_event_main[0];
        ?>

        <div class="single-event-wrapper">
            <a href="/program"><img src="/themes/Gathenhielmska/assets/images/back-arrow.svg" alt="back-arrow"></a>

            <h1><?php the_title() ?></h1>

            <div class="info-wrapper">
                <?php
                $image_id = get_post_thumbnail_id();
                $image_alt = get_post_meta($image_id, '_wp_attachment_image_alt', TRUE);
                ?>
                <div class="image-wrapper">
                    <img src="<?php echo get_the_post_thumbnail_url() ?>" alt=" <?php echo $image_alt ?>">
                </div>

                <div>
                    <div class="date-wrapper">
                        <?php $single->display_date_widget($single_event_obj); ?>
                        <?php $single->display_time_widget($single_event_obj); ?>
                    </div>
                    <div class="buy-wrapper">
                        <?php $single->display_location_widget($single_event_obj); ?>
                        <p><?php echo get_post_meta(get_the_ID(), 'mec_cost', true); ?></p>
                        <button><?php $single->display_more_info_widget($single_event_obj); ?></button>
                    </div>
                </div>
            </div>
            <div class="content-wrapper">
                <?php $single->display_category_widget($single_event_obj); ?>
                <?php the_content() ?>
            </div>

        </div>

    <?php endwhile; ?>
<?php endif; ?>


<?php get_footer(); ?>
