<?php
/* Template Name: Shop All */  // Allows this template to be assigned to a WordPress page
get_header(); ?>

<style>
    /* === Basic Reset / Container Styling === */
    .shop-all-container {
        max-width: 1200px;  /* Center container with a max width for large screens */
        margin: 0 auto;
        padding: 20px;
    }

    /* === Category Navigation Bar (Horizontal links) === */
    .category-nav {
        margin-bottom: 20px;
        text-align: center;
    }
    .category-nav ul {
        display: flex;                 /* Horizontal layout for category links */
        list-style: none;
        padding: 0;
        margin: 0;
        justify-content: center;
        gap: 15px;
    }
    .category-nav a {
        text-decoration: none;
        font-weight: 600;
        color: #000;
        padding: 5px 10px;
    }
    .category-nav a:hover {
        text-decoration: underline;
    }

    /* === Filter Bar (Desktop vs Mobile) === */
    .filter-bar {
        display: flex;                 /* Horizontal filters on desktop */
        flex-wrap: nowrap;
        gap: 10px;
        margin-bottom: 30px;
    }
    .filter-bar select {
        padding: 8px 12px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 8px;
        min-width: 180px;             /* Ensure a minimum width for dropdowns */
        max-width: 250px;
        width: 100%;
    }
    /* Responsive: stack filters vertically on small screens */
    @media (max-width: 767px) {
        .filter-bar {
            flex-direction: column;
            align-items: stretch;
        }
        .filter-bar select {
            margin-bottom: 10px;
            width: 100%;
        }
    }

    /* === Product Sections === */
    .product-section {
        margin: 50px 0;
    }
    .product-section h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
    }

    /* === Products Grid Layout === */
    .products-grid {
        display: grid;
        /* Responsive columns: auto-fit as many 250px columns as will fit, each column flexes to fill space :contentReference[oaicite:0]{index=0} */
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        justify-items: center;  /* Center items within each cell */
    }

    /* === Product Card Styling === */
    .product-card {
        background: #fff;
        padding: 15px;
        border: 1px solid #ddd;
        text-align: center;
    }
    .product-card img {
        max-width: 100%;
        height: auto;
        margin-bottom: 15px;
    }
    .product-card h2 {
        font-size: 16px;
        font-weight: 500;
        margin: 0 0 5px;
    }
    .product-card .price {
        color: #616161;
        font-weight: 600;
        margin: 0 0 10px;
    }
    /* Buttons (Add to Cart & View Details) */
    .product-card .button {
        display: block;
        text-align: center;
        text-decoration: none;
        padding: 10px 14px;
        font-size: 14px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        margin: 5px 0;
        color: #fff;
        background: #0073aa;  /* Button background color (blue) */
    }
    .product-card .button:hover {
        background: #005c85;  /* Darker on hover */
    }
</style>

<div class="shop-all-container">
    <!-- Category Navigation Bar -->
    <nav class="category-nav">
        <ul>
            <li><a href="#all">All</a></li>
            <li><a href="#hair">Hair</a></li>
            <li><a href="#skin">Skin</a></li>
            <li><a href="#supplements">Supplements</a></li>
            <li><a href="#bundle">Bundles</a></li>
        </ul>
    </nav>

    <!-- Filter Bar: Category, Price, Sort dropdowns -->
    <div class="filter-bar">
        <select id="categoryFilter">
            <option value="all">All Categories</option>
            <option value="hair">Hair</option>
            <option value="skin">Skin</option>
            <option value="supplements">Supplements</option>
            <option value="bundle">Bundles</option>
        </select>
        <select id="priceFilter">
            <option value="all">All Prices</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-100000">Over $200</option>
        </select>
        <select id="sortFilter">
            <option value="default">Sort By</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="name_asc">Name: A to Z</option>
        </select>
    </div>

    <?php
    // Define category slugs and display names
    $categories = array(
        'all'         => 'All Products',
        'hair'        => 'Hair',
        'skin'        => 'Skin',
        'supplements' => 'Supplements',
        'bundle'      => 'Bundles'
    );

    // Loop through each category (including 'all')
    foreach ($categories as $slug => $display_name) :
        // Set up heading text
        $heading = ($slug === 'all') ? 'All Products' : 'Shop ' . $display_name;
        // Build WP_Query arguments
        if ($slug === 'all') {
            $args = array(
                'post_type'      => 'product',
                'posts_per_page' => -1,
                'post_status'    => 'publish'
                // (Optional: 'orderby' => 'date', 'order' => 'DESC' for latest products first)
            );
        } else {
            $args = array(
                'post_type'      => 'product',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
                'tax_query'      => array(           // Filter by product category taxonomy:contentReference[oaicite:1]{index=1}
                    array(
                        'taxonomy' => 'product_cat',
                        'field'    => 'slug',
                        'terms'    => $slug
                    )
                )
            );
        }
        $loop = new WP_Query($args);
        if ($loop->have_posts()) : ?>
            <!-- Product Section: <?php echo esc_html($display_name); ?> -->
            <section id="<?php echo esc_attr($slug); ?>" class="product-section" data-category="<?php echo esc_attr($slug); ?>">
                <h2><?php echo esc_html($heading); ?></h2>
                <div class="products-grid">
                    <?php 
                    while ($loop->have_posts()) : $loop->the_post();
                        $product = wc_get_product(get_the_ID());  // Get WooCommerce product object
                        ?>
                        <div class="product-card" data-category="<?php echo esc_attr($slug); ?>" data-price="<?php echo esc_attr($product->get_price()); ?>">
                            <!-- Product Image -->
                            <a href="<?php the_permalink(); ?>">
                                <?php 
                                if (has_post_thumbnail()) {
                                    the_post_thumbnail('medium'); 
                                } else {
                                    // Fallback image or placeholder
                                    echo '<img src="' . esc_url(wc_placeholder_img_src()) . '" alt="Placeholder" />';
                                }
                                ?>
                            </a>
                            <!-- Product Title -->
                            <h2><?php the_title(); ?></h2>
                            <!-- Product Price -->
                            <p class="price"><?php echo $product->get_price_html(); ?></p>
                            <!-- Add to Cart and View Details Buttons -->
                            <a href="<?php echo esc_url('?add-to-cart=' . get_the_ID()); ?>" class="button add-to-cart">Add to cart</a>
                            <a href="<?php the_permalink(); ?>" class="button view-details">View Details</a>
                        </div>
                    <?php endwhile; ?>
                </div>
            </section>
        <?php endif;
        wp_reset_postdata();
    endforeach; ?>
</div>

<!-- Filter & Sort Functionality Script -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter    = document.getElementById('priceFilter');
    const sortFilter     = document.getElementById('sortFilter');

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice    = priceFilter.value;
        const selectedSort     = sortFilter.value;

        // Filter products by category and price
        document.querySelectorAll('.product-card').forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardPrice    = parseFloat(card.getAttribute('data-price')) || 0;
            // Check category match (or "all")
            const categoryMatch = (selectedCategory === 'all' || cardCategory === selectedCategory);
            // Check price match (if a price range is selected)
            let priceMatch = true;
            if (selectedPrice !== 'all') {
                const range = selectedPrice.split('-');
                const minPrice = parseFloat(range[0]) || 0;
                const maxPrice = parseFloat(range[1]) || 999999;
                priceMatch = (cardPrice >= minPrice && cardPrice <= maxPrice);
            }
            // Show or hide the product card based on filters
            if (categoryMatch && priceMatch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        // After filtering products, hide any empty category sections
        document.querySelectorAll('section.product-section').forEach(section => {
            // If no visible product cards inside, hide the section (otherwise show it)
            const hasVisibleProducts = section.querySelector('.product-card:not([style*="display: none"])');
            section.style.display = hasVisibleProducts ? '' : 'none';
        });

        // Sorting functionality: sort visible products by price or other criteria
        if (selectedSort === 'price_asc' || selectedSort === 'price_desc') {
            document.querySelectorAll('.products-grid').forEach(grid => {
                // Get all product cards in this grid that are currently visible
                const cards = Array.from(grid.querySelectorAll('.product-card')).filter(card => card.style.display !== 'none');
                // Sort cards array by price value
                cards.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
                if (selectedSort === 'price_desc') cards.reverse();
                // Append cards back to the grid in new order
                cards.forEach(card => grid.appendChild(card));
            });
        } else if (selectedSort === 'newest') {
            // Newest: sort by original order (assuming initial query was newest first)
            // (No action needed if WP_Query already returns newest first by default)
        } else if (selectedSort === 'name_asc') {
            // Name A-Z: sort alphabetically by product title
            document.querySelectorAll('.products-grid').forEach(grid => {
                const cards = Array.from(grid.querySelectorAll('.product-card')).filter(card => card.style.display !== 'none');
                cards.sort((a, b) => {
                    const titleA = a.querySelector('h2').innerText.trim();
                    const titleB = b.querySelector('h2').innerText.trim();
                    return titleA.localeCompare(titleB);
                });
                cards.forEach(card => grid.appendChild(card));
            });
        }
    }

    // Attach filterProducts to change events of the filters
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);
});
</script>

<?php get_footer(); ?>


