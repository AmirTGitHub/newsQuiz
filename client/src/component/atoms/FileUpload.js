import React from "react";

const FileUpload = () => {
  return (
    <div class="custom-file">
      <input
        type="file"
        class="custom-file-input"
        accept="image/jpg , image/png , image/JPEG"
      />
      <label class="label custom-file-label">
        عکس برای این سوال انتخاب کنید
      </label>
    </div>
  );
};

export default FileUpload;
