<?php /* Template name: About */ ?>

<?php get_header(); ?>
<?php if (have_posts()) : ?>

    <div class="about">

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>

        <?php endwhile; ?>
        <div class="about-info">
            <div class="about-title">
                <h3>Test</h3>
                <div class="plus-icon">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                </div>
            </div>
            <div class="about-hide">
                Content
            </div>
        </div>
        <div class="about-info">
            <div class="about-title">
                <h3>Test</h3>
                <div class="plus-icon">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                </div>
            </div>
            <div class="about-hide">
                Content
            </div>
        </div>
        <div class="about-info">
            <div class="about-title">
                <h3>Test</h3>
                <div class="plus-icon">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                </div>
            </div>
            <div class="about-hide">
                Content
            </div>
        </div>
    </div>
<?php endif; ?>

<?php get_footer(); ?>
