<?php
/**
 * 10X Landing Page theme functions.
 *
 * @package 10x-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Google Fonts and custom stylesheet.
 */
function tenx_enqueue_assets() {
	// Google Fonts
	wp_enqueue_style(
		'tenx-google-fonts',
		'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	// Theme custom styles (glassmorphism, blobs, component classes)
	wp_enqueue_style(
		'tenx-custom',
		get_theme_file_uri( 'assets/css/custom.css' ),
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'tenx_enqueue_assets' );

/**
 * Enqueue editor styles so the block editor matches the frontend.
 */
function tenx_editor_assets() {
	wp_enqueue_style(
		'tenx-google-fonts',
		'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap',
		array(),
		null
	);
	add_editor_style( 'assets/css/custom.css' );
}
add_action( 'after_setup_theme', 'tenx_editor_assets' );
