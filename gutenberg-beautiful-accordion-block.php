<?php
/**
 * Plugin Name:       Gutenberg Beautiful Accordion Block
 * Description:       Beautiful accordion will let you add beautiful accordions in your pages, posts, and anywhere. It also supports nested accordions.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            amjadkambohwp
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-beautiful-accordion-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenberg_beautiful_accordion_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_gutenberg_beautiful_accordion_block_block_init' );


function block_enqueue_script_gutenberg_beautiful_accordion_block() {
	wp_enqueue_script( 'block-enqueue', plugins_url( 'inc/block-jq.js', __FILE__ ), array('jquery') );
}
add_action( 'wp_enqueue_scripts', 'block_enqueue_script_gutenberg_beautiful_accordion_block' );