import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={30} />
    </Box>
  );
};

export default Loading;
