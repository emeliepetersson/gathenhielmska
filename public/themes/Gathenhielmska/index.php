<?php get_header(); ?>
<?php if (have_posts()) : ?>

    <div>

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <?php if (has_post_thumbnail()) : ?>
                    <div>
                        <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
                            <?php the_post_thumbnail(); ?>
                        </a>
                    </div>

                <?php endif; ?>
                <?php the_excerpt(); ?>
            </div>

        <?php endwhile; ?>

    </div>
<?php endif; ?>

<?php get_footer(); ?>
