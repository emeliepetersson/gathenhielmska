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
                    <p class="name"><?php the_sub_field("name"); ?></p>
                    <p class='proffesion'><?php the_sub_field("proffesion"); ?></p>
                    <a class="mail" href="mailto:<?php the_sub_field("email"); ?>"><img src="<?php echo get_template_directory_uri() . '/assets/images/mail_icon.svg' ?>" alt="mail-icon"> <?php the_sub_field("email"); ?></a>
                    <a class="phone" href="callto:<?php the_sub_field("number"); ?>"><img src="<?php echo get_template_directory_uri() . '/assets/images/phone_icon.svg' ?>" alt="phone-icon"> <?php the_sub_field("number"); ?></a>
                </div>
            </div>
    <?php endwhile;
    endif; ?>

    <h2>In-houseaktörer</h2>
    <?php if (have_rows('company')) :
        while (have_rows('company')) : the_row(); ?>
            <div class="company-house">
                <p class="name"><?php the_sub_field("name"); ?></p>
                <a class="link" href="<?php the_sub_field("link"); ?>">HEMSIDA <img src="<?php echo get_template_directory_uri() . '/assets/images/arrow.png' ?>" alt="arrow"></a>
                <p class='proffesion'><?php the_sub_field("proffesion"); ?></p>
            </div> <?php endwhile;
            endif; ?>
    </div>
    <?php get_footer(); ?>
