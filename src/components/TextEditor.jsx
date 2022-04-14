import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    this.props.setPostBody(this.state.text);
    return (
      <ReactQuill
        theme={"snow"}
        onChange={this.handleChange}
        value={this.state.text}
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        style={{ height: "91%" }}
        // bounds={".app"}
        // placeholder={this.props.placeholder}
      />
    );
  }
}

TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default TextEditor;
