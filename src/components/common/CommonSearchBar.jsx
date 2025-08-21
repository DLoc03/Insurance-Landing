import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CommonIconButton from "../common/CommonIconButton";
import { useTheme, useMediaQuery, ClickAwayListener } from "@mui/material";
import { useHandleNavigate } from "@/utils";
import { PATHS } from "@/constants";

function CommonSearchBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigate = useHandleNavigate();

  const handleSubmit = () => {
    handleNavigate(`${PATHS.SERVICE_SEARCH}?keyword=${searchValue}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClickAway = () => {
    setShowSearch(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box display="flex" alignItems="center" position="relative">
        {/* Search Icon */}
        <CommonIconButton
          onClick={() => setShowSearch((prev) => !prev)}
          sx={{ color: { xs: "white", lg: "primary.main" }, ml: 2 }}
        >
          <SearchIcon />
        </CommonIconButton>

        <Box
          sx={{
            ml: 1,
            width: showSearch ? (isMobile ? 150 : 300) : 0,
            opacity: showSearch ? 1 : 0,
            transition: "width 0.3s ease, opacity 0.3s ease",
            overflow: "hidden",
          }}
        >
          <InputBase
            autoFocus
            placeholder="Tìm kiếm dịch vụ..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
              width: "100%",
              fontSize: { xs: 12, md: 14 },
              borderBottom: 1,
              borderColor: isMobile ? "white" : "primary.main",
              "& input::placeholder": {
                fontSize: { xs: 12, md: 14 },
                color: { xs: "white", lg: "primary.strong" },
              },
              "& input": {
                fontSize: { xs: 12, md: 14 },
                color: { xs: "white", lg: "primary.strong" },
              },
              px: 1,
              py: 0.5,
            }}
          />
        </Box>
      </Box>
    </ClickAwayListener>
  );
}

export default CommonSearchBar;
