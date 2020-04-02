<?php /* Template name: About Company */ ?>

<?php get_header(); ?>
<?php if (have_posts()) : ?>

    <div class="about">

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>

        <?php endwhile; ?>

    <?php endif; ?>
    <?php if (have_rows('company')) :
        while (have_rows('company')) : the_row(); ?>
            <?php the_sub_field("name"); ?>
            <?php the_sub_field("link"); ?>
            <?php the_sub_field("proffesion"); ?>
    <?php endwhile;
    endif; ?>

    <?php if (have_rows('ledningsgruppen')) :
        while (have_rows('ledningsgruppen')) : the_row(); ?>
            <?php the_sub_field("image"); ?>
            <?php the_sub_field("name"); ?>
            <?php the_sub_field("proffesion"); ?>
            <?php the_sub_field("email"); ?>
            <?php the_sub_field("number"); ?>
    <?php endwhile;
    endif; ?>
    </div>
    <?php get_footer(); ?>
