<?php get_header(); ?>
<div class="search-page">
    <h1>Sökresultat</h1>
    <?php if (have_posts()) : ?>
        <div class="search-result">
            <?php while (have_posts()) : the_post(); ?>
                <h2><?php the_title(); ?></h1>
                    <?php $content = get_the_content(); ?>
                    <p><?php echo wp_trim_words($content, '20'); ?></p>
                    <div class="search-link">
                        <button>Event</button>
                        <a href="<?php the_permalink(); ?>"><img src="<?php echo get_template_directory_uri() . '/assets/images/back.png' ?>" alt="arrow"></a>
                    </div>
                <?php endwhile; ?>
        </div>
    <?php endif; ?>
</div>
<?php get_footer(); ?>
