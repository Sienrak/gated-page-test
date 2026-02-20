<?php
/**
 * Comparison Table block — server-side render.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks (unused).
 * @var WP_Block $block      Block instance.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$image_url   = esc_url( $attributes['imageUrl'] ?? '' );
$image_alt   = esc_attr( $attributes['imageAlt'] ?? 'Playbooks vs Prompts comparison chart' );
$rows        = $attributes['rows'] ?? array();
$anchor      = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$extra_class = ! empty( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '';
?>

<section<?php echo $anchor; ?> class="glass-section tenx-comparison<?php echo $extra_class; ?>">
	<div class="tenx-comparison__label">Playbooks vs Prompts</div>

	<?php if ( $image_url ) : ?>
		<img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" class="tenx-comparison__image" loading="lazy" />
	<?php endif; ?>

	<?php if ( ! empty( $rows ) ) : ?>
		<div class="tenx-expand-toggle" data-tenx-expand>
			<button type="button" class="tenx-expand-btn" aria-label="Expand comparison table">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tenx-bounce">
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div class="tenx-expand-content">
				<div class="tenx-comparison-table-wrap">
					<table class="tenx-comparison-table">
						<thead>
							<tr>
								<th>Dimension</th>
								<th>Prompt</th>
								<th>Playbook</th>
							</tr>
						</thead>
						<tbody>
							<?php foreach ( $rows as $row ) : ?>
								<tr>
									<td><?php echo esc_html( $row[0] ?? '' ); ?></td>
									<td><?php echo esc_html( $row[1] ?? '' ); ?></td>
									<td><?php echo esc_html( $row[2] ?? '' ); ?></td>
								</tr>
							<?php endforeach; ?>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	<?php endif; ?>
</section>
