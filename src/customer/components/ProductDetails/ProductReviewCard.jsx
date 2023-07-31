import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Hieu</p>
              <p className="opacity-70">11/11/1111</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>
            A radio group with its fields visually hidden. It contains six radio
            buttons, one for each star, and another for 0 stars that is checked
            by default. Be sure to provide a value for the name prop that is
            unique to the parent form.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
