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
    <h2>Ledningsgruppen</h2>
    <?php if (have_rows('ledningsgruppen')) :
        while (have_rows('ledningsgruppen')) : the_row(); ?>
            <div class="company-ledningsgruppen">
                <?php $image = get_sub_field('image'); ?>
                <div class="company-left">
                    <img src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>" />
                </div>
                <div class="company-right">
                    <h3><?php the_sub_field("name"); ?></h3>
                    <p><?php the_sub_field("proffesion"); ?></p>
                    <a class="mail" href="mailto:<?php the_sub_field("email"); ?>"><?php the_sub_field("email"); ?></a>
                    <a href="callto:<?php the_sub_field("number"); ?>"><?php the_sub_field("number"); ?></a>
                </div>
            </div>
    <?php endwhile;
    endif; ?>

    <h2>In-houseaktörer</h2>
    <?php if (have_rows('company')) :
        while (have_rows('company')) : the_row(); ?>
            <div class="company-house">
                <h3><?php the_sub_field("name"); ?></h3>
                <a href="<?php the_sub_field("link"); ?>">Hemsida</a>
                <p><?php the_sub_field("proffesion"); ?></p>
            </div> <?php endwhile;
            endif; ?>
    </div>
    <?php get_footer(); ?>
