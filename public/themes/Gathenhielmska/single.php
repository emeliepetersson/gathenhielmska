<?php get_header(); ?>
<?php if (have_posts()) : ?>

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

                <div>
                    <div>
                        <?php echo previous_post_link(); ?>
                    </div>
                    <div>
                        <?php echo next_post_link(); ?>
                    </div>
                </div>

            </div>

        <?php endwhile; ?>

    </div>
<?php endif; ?>

<?php get_footer(); ?>
