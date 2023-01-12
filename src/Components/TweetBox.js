import { Avatar, Button } from "@mui/material";
import React from "react";

const TweetBox = () => {
  return (
    <div>
      <form>
        <div>
          <Avatar></Avatar>
        </div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#03A9F4", fontWeight: "600" }}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
