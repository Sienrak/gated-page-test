<?php
/**
 * Playbook Section block — server-side render.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks (unused).
 * @var WP_Block $block      Block instance.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$section_label   = esc_html( $attributes['sectionLabel'] ?? '' );
$title           = esc_html( $attributes['title'] ?? '' );
$description     = nl2br( esc_html( $attributes['description'] ?? '' ) );
$video_url       = esc_url( $attributes['videoUrl'] ?? '' );
$gif_url         = esc_url( $attributes['gifUrl'] ?? '' );
$gif_alt         = esc_attr( $attributes['gifAlt'] ?? '' );
$preview_url     = esc_url( $attributes['previewUrl'] ?? '' );
$view_output_url = esc_url( $attributes['viewOutputUrl'] ?? '' );
$expanded_text   = esc_html( $attributes['expandedText'] ?? '' );
$show_demo       = ! empty( $attributes['showDemoButton'] );
$cta_label       = esc_html( $attributes['ctaLabel'] ?? 'Get the playbook' );
$cta_url         = esc_url( $attributes['ctaUrl'] ?? '#' );
$anchor          = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$extra_class     = ! empty( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '';
?>

<article<?php echo $anchor; ?> class="glass-section tenx-playbook<?php echo $extra_class; ?>">
	<?php if ( $section_label ) : ?>
		<div class="tenx-playbook__label"><?php echo $section_label; ?></div>
	<?php endif; ?>

	<div class="tenx-playbook__grid">
		<!-- Copy column -->
		<div class="tenx-playbook__copy">
			<?php if ( $title ) : ?>
				<div class="tenx-playbook__copy-title"><?php echo $title; ?></div>
			<?php endif; ?>
			<div><?php echo $description; ?></div>
		</div>

		<!-- Video column -->
		<?php if ( $video_url ) : ?>
			<div class="tenx-playbook__video">
				<iframe
					src="<?php echo $video_url; ?>"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		<?php endif; ?>

		<!-- Media column: dashboard preview OR GIF -->
		<div class="tenx-playbook__media">
			<?php if ( $preview_url ) : ?>
				<a href="<?php echo $preview_url; ?>" target="_blank" rel="noopener noreferrer" class="tenx-playbook__preview">
					<iframe
						src="<?php echo $preview_url; ?>"
						title="Dashboard preview"
					></iframe>
					<div class="tenx-playbook__preview-overlay">
						<span class="tenx-playbook__preview-label">Open dashboard &#x2197;</span>
					</div>
				</a>
			<?php elseif ( $gif_url ) : ?>
				<img src="<?php echo $gif_url; ?>" alt="<?php echo $gif_alt; ?>" loading="lazy" />
			<?php endif; ?>
		</div>
	</div>

	<?php if ( $expanded_text ) : ?>
		<div class="tenx-expand-toggle" data-tenx-expand>
			<button type="button" class="tenx-expand-btn" aria-label="Expand section">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tenx-bounce">
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div class="tenx-expand-content">
				<div class="tenx-expand-content__text"><?php echo nl2br( $expanded_text ); ?></div>
			</div>
		</div>
	<?php endif; ?>

	<div class="tenx-playbook__buttons">
		<a href="<?php echo $cta_url; ?>" class="tenx-btn-primary"><?php echo $cta_label; ?></a>

		<?php if ( $view_output_url ) : ?>
			<a href="<?php echo $view_output_url; ?>" target="_blank" rel="noopener noreferrer" class="tenx-btn-secondary">View Output</a>
		<?php else : ?>
			<a href="<?php echo $cta_url; ?>" class="tenx-btn-secondary">View sample</a>
		<?php endif; ?>

		<?php if ( $show_demo ) : ?>
			<a href="#" class="tenx-btn-demo">Request a demo</a>
		<?php endif; ?>
	</div>
</article>
