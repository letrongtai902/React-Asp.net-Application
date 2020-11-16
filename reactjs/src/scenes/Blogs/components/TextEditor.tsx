import * as React from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

import Context from '@ckeditor/ckeditor5-core/src/context';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

class Editor extends React.Component {
    render() {
        return (
            <div className="TextEditor">
                <CKEditorContext context={ Context }>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            plugins: [ Paragraph, Bold, Italic, Essentials ],
                            toolbar: [ 'bold', 'italic' ]
                        } }
                        data="<p>Hello from the first editor working with the context!</p>"
                        onReady={ editor => {
                            console.log( 'Editor1 is ready to use!', editor );
                        } }
                    />

                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            plugins: [ Paragraph, Bold, Italic, Essentials ],
                            toolbar: [ 'bold', 'italic' ]
                        } }
                        data="<p>Hello from the first editor working with the context!</p>"
                        onReady={ editor => {
                            console.log( 'Editor1 is ready to use!', editor );
                        } }
                    />
                </CKEditorContext>
            </div>
        );
    }
}
export default Editor;