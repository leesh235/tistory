import React, { useEffect, useImperativeHandle, useState } from 'react';
import { CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import List from "@ckeditor/ckeditor5-list/src/list";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import styled from 'styled-components';

const Wrapper = styled.div`

`

export const Editor = ({getFormData}) => {
  
  ClassicEditorBase.builtinPlugins = [
    Essentials,
    Bold,
    Italic,
    BlockQuote,
    Heading,
    Image,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Link,
    List,
    Paragraph,
    Alignment,
    SimpleUploadAdapter,
    MediaEmbed             
  ];
  
  ClassicEditorBase.defaultConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'alignment', 
        '|',
        'mediaEmbed',
        '|',
        'imageUpload',
        'undo',
        'redo',
      ]
    },
    mediaEmbed: {
      previewsInData: true
    },
    heading : {
      options:[
        { model: 'paragraph', view: 'p', title: '본문', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: '타이틀', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: '서브 타이틀', class: 'ck-heading_heading2' }
      ]
    },
    image: {
      // Configure the available styles.
      styles: [
        'alignLeft', 'alignCenter', 'alignRight'
      ],
      // Configure the available image resize options.
      toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        'imageTextAlternative'
      ]
    },
    simpleUpload: {
      uploadUrl: `http://localhost:5000/editorImg`,
      // headers: {
      //   user: "hi"
      // }
    },
    language: 'en'
  };


  const [editorData, setEditorData] = useState("");
  
  
  useEffect(()=> {

  },[])

  return (
    <Wrapper>
      <CKEditor 
      editor={ClassicEditorBase}
      data={editorData}
      onChange={(event, editor) => {
        console.log(editor.getData());
        getFormData(editor.getData())
      }}
      /> 
    </Wrapper>
  );
}