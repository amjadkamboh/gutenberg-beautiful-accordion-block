/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
const { RawHTML } = wp.element;
const { RichText } = wp.blockEditor;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const {
		attributes: { 
			sideTabLayout,
			blockTitle,
			content,
			themeBackground,
			AccordionStyleOption
		}
	} = props;

	var blockProps = useBlockProps.save();
	if (sideTabLayout){
		blockProps = useBlockProps.save({ 
			className: 'side-tab-layout'
		});
	}
	
	return (
		<div { ...blockProps } >
			<div className={AccordionStyleOption}>
				<div className="tab-content-outter Hero-outter">
					<h2>{ blockTitle }</h2>
					<div className="tab-content">
						<InnerBlocks.Content />
					</div>	
				</div>	
			</div>	
		</div>
	);
}
