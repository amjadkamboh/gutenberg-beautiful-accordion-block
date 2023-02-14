import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { TextControl } from '@wordpress/components';
import { subscribe } from '@wordpress/data';

/**********************************************************
 * Registering Child Innerblock for the Tabbed Content block
 **********************************************************/
registerBlockType( 'beautiful-captain-block/tab', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Single Accordion Item' ), // Block title.
	icon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	parent: [ 'create-block/tabs' ],
	category: 'design', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	supports: {
        color: true
    },
	attributes: {
        tabLabel:{
            type: 'string',
			default: ''
        },
		blockIndex:{
            type: 'number',
			default: ''
        },
		tabTagline:{
			type: 'string',
			default: ''
		}

    },
    keywords: [
		__( 'tab' ),
	],

	/**
	 * 
	 * Edit function for Child Slide Block
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
        const { 
			attributes: { tabLabel, blockIndex}, 
			setAttributes 
		} = props;


		// const onChangeTabLabel = newTabLabel => {
		// 	setAttributes({ tabLabel: newTabLabel});
		// 	setAttributes({ blockIndex: getBlockIndex});
		// 	wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( parentBlockID, { updateChild: true } );
		// };

		const onChangeTabLabel = newTitle => {
			setAttributes({ tabLabel: newTitle});
		};
		
		
		

		return (
			<div className={ props.className }>	
                <TextControl
					label="Single item title"
					className={ "tab-label_input" }
                    value={ tabLabel }
                    onChange={onChangeTabLabel}
                    placeholder="Single item title..."
					type="text"
                />
				<label className="components-base-control__label css-1v57ksj ej5x27r2 css-qy3gpb">Single item content</label>
				<InnerBlocks
				/>
				<hr></hr>
			</div>
			
		);
	},

	/**
	 *
	 * Save function for Child Slide Block
	 * 
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {

		const { attributes } = props;
		const { tabLabel} = attributes;

		return (
			<div className="tab-panel-wrapper" >
				<div className="tab-title" itemprop="name">{ tabLabel }</div>
				<div className="tab-panel">
					<div itemprop="text">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
} );