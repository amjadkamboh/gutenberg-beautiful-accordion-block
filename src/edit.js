/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { ToggleControl, ColorPicker, SelectControl } from '@wordpress/components';
import { TextControl, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
const { InspectorControls, useSetting, RichText } = wp.blockEditor;
import { useBlockProps } from '@wordpress/block-editor';
const ALLOWED_BLOCKS = [ 'beautiful-captain-block/tab' ];

import './editor.scss';
import './tab.js';

export default function Edit( props ) {

	const { 
		attributes,
		setAttributes,

	} = props;
	const { tabLabelsArray, updateChild, sideTabLayout, blockTitle, blockText, content,themeBackground, AccordionStyleOption } = attributes;

	const onChangeTabLabel = toggle => {
		setAttributes({ sideTabLayout: toggle });
	};
	const onChangeTitle = newTitle => {
		setAttributes({ blockTitle: newTitle});
	};
   //  const onChangeText = newText => {
   // 	 setAttributes({ content: newText});
   //  };
	
	
	return (
		<div { ...useBlockProps() }>
		   <InspectorControls >
			   <PanelBody>
			   <SelectControl
				   label="Style Options"
				   value= { AccordionStyleOption }
				   onChange={(newval) => setAttributes({ AccordionStyleOption: newval })}
				   options={ [
					   { label: 'Simple', value: 'simple-Accordion1' },
					   { label: 'Right Border', value: 'border-Accordion1' },
					   { label: 'Simple Border', value: 'simpleborder-Accordion1' },
				   ] }
				   __nextHasNoMarginBottom
			   />
			   </PanelBody>
		   </InspectorControls>
		   <div className="theme-section-full">
		   <div className="captain-outter">
		   <div className="captain-1section">
			<span className="blockname">Beautiful Accordion Block</span>
			
			   <div className={ props.className }>
				   <TextControl
				   label="Block Title"
				   className={ "title-block" }
					   value={ blockTitle }
					   onChange={onChangeTitle}
					   placeholder="Title"
					   type="text"
				   />
				   </div>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>				
		</div>
		</div>
		</div>
		</div>
	);
}