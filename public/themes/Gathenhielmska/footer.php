<div class="footer-wrapper">
    <div class="contact-wrapper">
        <h3><?php the_field('title_1', 'option') ?></h3>
        <p><?php the_field('adress', 'option') ?></p>
        <p><?php the_field('phone_number', 'option') ?></p>
        <p>Mail: <?php the_field('email', 'option') ?></p>
    </div>

    <div class="social-media-wrapper">
        <h3><?php the_field('title_2', 'option') ?></h3>
        <a href="<?php get_field('facebook-link', 'option') ?>"><img src="/themes/Gathenhielmska/assets/images/Facebook-green.svg" alt="Facebook icon"></a>
        <a href="<?php get_field('Instagram-link', 'option') ?>"><img src="/themes/Gathenhielmska/assets/images/Instagram-green.svg" alt="instagram icon"></a>
    </div>

    <div class="sponsors-wrapper">
        <h3><?php the_field('title_3', 'option') ?></h3>

        <div class="logo-wrapper">
            <?php
            if (have_rows('sponsors', 'option')) :
                while (have_rows('sponsors', 'option')) : the_row();
            ?>
                    <a href="<?php echo get_sub_field('link') ?>"><img src="<?php echo get_sub_field('logo') ?>" alt="sponsor's logo"></a>
            <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
</div>
</div> <!-- container -->
<?php wp_footer(); ?>

</body>

</html>
