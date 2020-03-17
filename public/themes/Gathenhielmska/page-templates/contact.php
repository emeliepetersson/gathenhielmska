<?php /* Template name: Contact */ ?>

<?php get_header(); ?>

<?php if (have_posts()) : ?>

    <div>

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>

        <?php endwhile; ?>

    </div>
<?php endif; ?>

<?php get_footer(); ?>
