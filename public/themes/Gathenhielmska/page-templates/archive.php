<?php /* Template name: Archive */ ?>

<?php get_header(); ?>
<?php if (have_posts()) : ?>

    <div class="archive">

        <?php while (have_posts()) : the_post(); ?>

            <div>
                <?php the_content(); ?>
            </div>

        <?php endwhile; ?>

    </div>
<?php endif; ?>

<div class="images-posts show">
    <?php $imagesPosts = get_posts(['post_type' => 'images']); ?>

    <?php if (count($imagesPosts)) : ?>

        <?php foreach ($imagesPosts as $post) : setup_postdata($post); ?>

            <div class="post">
                <h2><?php the_title(); ?></h2>
                <div class="info">
                    <span><?php the_field("date_and_time") ?></span>
                    <span><?php the_field("location") ?></span>
                </div>

                <?php the_content(); ?>

                <div class="images">
                    <?php
                    if (have_rows("images")) :
                        while (have_rows("images")) : the_row();
                    ?>
                            <div class="image">
                                <img src="<?php echo the_sub_field("image") ?>" id="image-modal" alt="post image">
                            </div>
                    <?php
                        endwhile;
                    endif;
                    ?>
                </div>
            </div>


        <?php endforeach; ?>

    <?php endif; ?>
</div>

<!-- Image modal -->
<div id="modal" class="modal">
    <span class="close" id="close-modal">&times;</span>
    <img class="modal-content" id="modal-img">
    <div id="caption" class="caption"></div>
</div>

<div class="videos-posts">
    <?php $videosPosts = get_posts(['post_type' => 'videos']); ?>

    <?php if (count($videosPosts)) : ?>

        <?php foreach ($videosPosts as $post) : setup_postdata($post); ?>

            <div class="post">
                <h2><?php the_title(); ?></h2>
                <div class="info">
                    <span><?php the_field("date_and_time") ?></span>
                    <span><?php the_field("location") ?></span>
                </div>

                <?php the_content(); ?>

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
            </div>


        <?php endforeach; ?>

    <?php endif; ?>
</div>


<?php get_footer(); ?>
