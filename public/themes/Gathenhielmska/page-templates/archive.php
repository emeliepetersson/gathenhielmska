<?php /* Template name: Archive */ ?>

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

            </div>

        <?php endwhile; ?>

    </div>
<?php endif; ?>

<div class="images-post">
    <?php $imagesPosts = get_posts(['post_type' => 'images']); ?>

    <?php if (count($imagesPosts)) : ?>

        <?php foreach ($imagesPosts as $post) : setup_postdata($post); ?>

            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            <?php the_content(); ?>

            <?php the_field("date_and_time") ?>
            <?php the_field("location") ?>

            <div class="images">
                <?php
                if (have_rows("images")) :
                    while (have_rows("images")) : the_row();
                ?>
                        <div class="image">
                            <img src="<?php echo the_sub_field("image") ?>" alt="post image">
                        </div>

                <?php
                    endwhile;
                endif;
                ?>
            </div>

        <?php endforeach; ?>

    <?php endif; ?>
</div>

<div class="videos-post">
    <?php $videosPosts = get_posts(['post_type' => 'videos']); ?>

    <?php if (count($videosPosts)) : ?>

        <?php foreach ($videosPosts as $post) : setup_postdata($post); ?>

            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            <?php the_content(); ?>

            <?php the_field("date_and_time") ?>
            <?php the_field("location") ?>

            <div class="videos">
                <?php
                if (have_rows("videos")) :
                    while (have_rows("videos")) : the_row();
                ?>
                        <div class="video">
                            <video src="<?php echo the_sub_field("video") ?>" controls></video>
                        </div>

                <?php
                    endwhile;
                endif;
                ?>
            </div>

        <?php endforeach; ?>

    <?php endif; ?>
</div>


<?php get_footer(); ?>
