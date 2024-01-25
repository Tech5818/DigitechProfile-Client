import { Box } from "@mui/material";
import { Mobile } from "../Responsive";

export const Header = () => {
  return (
    <>
      <Mobile>
        <Box boxShadow="0 4px 4px rgba(0, 0, 0, 0.2)" height="80px"></Box>
      </Mobile>
    </>
  );
};
