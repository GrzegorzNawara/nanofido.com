import React from 'react'

class Document extends React.Component {
  state = {
    documentName:this.props.documentName.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
    content:''
  }

  componentDidMount() {
    this.loadDocument(this.state.documentName).then(result => this.setState({
      content: result
    }))
  }

  loadDocument = (document) => {
      return fetch('./documents/'+document+'.html')
        .then(response => Promise.resolve(response))
        .then(response => response.text());
  }


  render = () => (
    <div onClick={()=>window.history.back()}>
      <div className={'container rounded border-right border-left box-shadow pt-2 bg-white mydoc'}>
          <button onClick={()=>window.history.back()}
            type="button" className="color-gray close document-close-btn">&times;</button>
        <div dangerouslySetInnerHTML={{__html: this.state.content.replace(/(\n)/gm,"<br />")}} />
        <div className="text-right"><br /><small>/{this.state.documentName}</small></div>
      </div>
    </div> )
}

export default Document
