<?php
/**
 * GeneratePress child theme functions and definitions.
 *
 * Add your custom PHP in this file.
 * Only edit this file if you have direct access to it on your server (to fix errors if they happen).
 */function add_tolstoy_script_to_header() {
    ?>
    <script>
        tolstoyAppKey = "ddba4ce6-e2f6-495a-8c59-dd484aa25663";
    </script>
    <script type="module" async src="https://widget.gotolstoy.com/we/widget.js"></script>
    <script type="text/javascript" nomodule async src="https://widget.gotolstoy.com/widget/widget.js"></script>
    <?php
}
add_action('wp_head', 'add_tolstoy_script_to_header');
add_action('woocommerce_before_cart', 'display_klarna_financing_message', 10);

function display_klarna_financing_message() {
    echo '<div class="klarna-financing-message" style="background-color: #f7f7f7; padding: 10px; font-size: 16px; border: 1px solid #e0e0e0; margin-bottom: 20px; text-align: center;">';
    echo 'Monthly Financing through Klarna issued by WebBank';
    echo '</div>';
}
add_filter( 'woocommerce_product_tabs', 'ulurx_replace_how_to_order_tab', 99 );
function ulurx_replace_how_to_order_tab( $tabs ) {
    if ( isset( $tabs['how_to_order_tab'] ) ) {
        $tabs['how_to_order_tab']['callback'] = 'ulurx_how_to_order_tab_content';
    }
    return $tabs;
}

function ulurx_how_to_order_tab_content() {
    ?>
    <h2>How to Order in 5 Simple Steps</h2>
    <ol>
        <li><strong>Buy Your Product:</strong> Add your item to cart and complete checkout as usual.</li>
        <li><strong>Prescription Check:</strong>  
            If your item requires a prescription, a pop-up will appear right after purchase:
            <ul>
                <li><em>Yes – You’re all set.</em></li>
                <li><em>No – Complete the quick, easy form now.</em></li>
            </ul>
            If your item is a supplement, no questionnaire is needed—your order skips straight to shipping.
        </li>
        <li><strong>Doctor Review & Prescription:</strong>  
            Our U.S.-licensed physician reviews your questionnaire and writes your prescription within 1–3 business days.
        </li>
        <li><strong>Formulation & Quality Check:</strong>  
            We compound your custom formula and perform final safety & potency checks—this takes 2–4 business days.
        </li>
        <li><strong>Ship to Your Door:</strong>  
            We pack and send your personalized product (or supplement) with tracking details emailed immediately.
        </li>
    </ol>
    <hr>
    <p><strong>Don’t Miss Important Updates:</strong><br>
    Add <a href="mailto:info@ulurx.com">info@ulurx.com</a> to your Safe Senders or Contacts list so you receive prescription confirmations, formulation updates, and tracking details.</p>

    <p><strong>Questions?</strong><br>
    Email <a href="mailto:info@ulurx.com">info@ulurx.com</a> or call/text <a href="tel:6023151530">602-315-1530</a> any time—we’re here to help!</p>
    <?php
}
