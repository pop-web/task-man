import { useState, useContext } from "react";
import { MODAL_OPEN, READ_TASKS } from "../actions";
import AppContext from "../contexts/AppContext";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  Folder as FolderIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
import { db } from "../firebase";

interface Props {
  task: {
    docId: string;
    title: string;
    detail: string;
    CreatedAt: object;
  };
}

const ListsItem: React.FC<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { dispatch } = useContext(AppContext);

  const handleEdit = (task: any) => {
    dispatch({
      type: MODAL_OPEN,
    });
    handleClose();
  };

  const handleDelete = async (task: any) => {
    //データ削除
    try {
      await db.collection("tasks").doc(task.docId).delete();
    } catch (e) {
      alert(e);
    }

    //データ取得
    const colRef = db
      .collection("tasks")
      .orderBy("createdAt", "desc")
      .limit(10);
    const snapshots = await colRef.get();
    const docs = snapshots.docs.map((doc) => doc.data());
    dispatch({
      type: READ_TASKS,
      tasks: docs,
    });
    handleClose();
  };

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ListItem divider={true} button={true}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.task.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="menu" onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleEdit(props.task)}>編集</MenuItem>
          <MenuItem onClick={() => handleDelete(props.task)}>削除</MenuItem>
        </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListsItem;
