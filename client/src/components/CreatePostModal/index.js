import React, { useCallback, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import FileBase64 from "react-file-base64";
import useStyles from "./styles";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import { createPost, hideModal } from "../../redux/actions";

export default function CreatePostModal() {
  const isShow = useSelector(modalState$);
  const classes = useStyles();

  const [data, setData] = useState({ title: "", content: "", attachment: "" });

  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
  }, [data, dispatch]);

  const body = (
    <div className={classes.paper}>
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          placeholder="Content ..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <Modal open={isShow} onClose={onClose}>
      {body}
    </Modal>
  );
}
