<?php
/**
 * Plugin Name: 10X Blocks
 * Description: Custom WordPress blocks for the 10X Landing Page — playbook sections and comparison table.
 * Version: 1.0.0
 * Author: 10X Team
 * License: GPL-2.0-or-later
 * Text Domain: 10x-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'TENX_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'TENX_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

/**
 * Register all custom blocks.
 */
function tenx_blocks_init() {
	// Playbook Section block (server-side rendered)
	register_block_type( TENX_BLOCKS_PATH . 'src/playbook-section' );

	// Comparison Table block (server-side rendered)
	register_block_type( TENX_BLOCKS_PATH . 'src/comparison-table' );
}
add_action( 'init', 'tenx_blocks_init' );

/**
 * Enqueue frontend JS for expand/collapse and sidenav interactivity.
 */
function tenx_blocks_frontend_scripts() {
	wp_enqueue_script(
		'tenx-frontend',
		TENX_BLOCKS_URL . 'assets/frontend.js',
		array(),
		'1.0.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'tenx_blocks_frontend_scripts' );
