import { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from '../hooks/useLocalStorage';
function Edit화면() {
  const [html,setHtml] = useLocalStorage('html','');
  const  [css,setCss] = useLocalStorage('css','');
  const [js,setJs] = useLocalStorage('js','');
  const [srcDoc, setSrcDoc] = useState('');
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(` <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`)
    },250)

    return () => clearTimeout(timeout);
  },[css,js,html])
  
 
  return (
    <>
      <div className="pane top-pane">
        <Editor 
        language="xml"
        displayName = "HTML" 
        value={html} 
        onChange={setHtml} 
        />
        <Editor
        language="css"
        displayName = "CSS" 
        value={css} 
        onChange={setCss} 
        />
        <Editor
        language="javascript"
        displayName = "JS" 
        value={js} 
        onChange={setJs} 
        />
      </div>
      <div className="pane">
        <iframe
        srcDoc = {srcDoc}
          title="output"
          frameborder="0"
          sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default Edit화면;
