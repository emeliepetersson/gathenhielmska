<?php /* Template name: Contact */ ?>

<?php get_header(); ?>

<div class="container">
    <?php if (have_posts()) : ?>

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>

        <?php endwhile; ?>


    <?php endif; ?>
    <?php echo do_shortcode('[contact-form-7 id="104" title="Kontakta oss"]'); ?>
</div>
<?php get_footer(); ?>
