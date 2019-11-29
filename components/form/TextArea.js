function TextArea(meta) {
    return (
        <div className={meta.meta.field_options.classes}>
            <label for={meta.meta.field_key}>{meta.meta.name}</label>
            <textarea name={meta.meta.field_key} placeholder={meta.meta.placeholder}invmsg={meta.meta.field_options.invalid} ></textarea>
        </div>
    )

}

export default TextArea;