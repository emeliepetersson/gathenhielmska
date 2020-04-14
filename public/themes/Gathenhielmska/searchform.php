<form class="search-form" action="/" method="get">
    <input type="text" id="search-input" name="s" value="<?php the_search_query(); ?>" />
    <input type="image" id="search" alt="Search" src="/themes/Gathenhielmska/assets/images/Search.svg" />
</form>
<img class="search-icon" src="<?php echo get_template_directory_uri() . '/assets/images/Search.svg' ?>" alt="search-icon">
