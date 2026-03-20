<?php
function paperfolio_enqueue_styles() {
  wp_enqueue_style( 'main-css', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'paperfolio_enqueue_styles' );
?>