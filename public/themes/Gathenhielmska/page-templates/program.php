<?php /* Template name: Program */ ?>

<?php get_header(); ?>
<?php if (have_posts()) : ?>

    <div class="program">

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

                <?php echo do_shortcode('[MEC id="242"]') ?>

            </div>

        <?php endwhile; ?>

    </div>
<?php endif; ?>
<?php get_footer(); ?>
