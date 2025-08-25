import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";

function CommonSelectInput({
  label,
  value: propValue,
  onChange,
  data = [], // [{id, name, group}]
  placeholder = "Chọn một mục",
  fullWidth = true,
  inputSx = {},
  labelSx = {},
  ...rest
}) {
  const [value, setValue] = useState(propValue || "");

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <Box width={fullWidth ? "100%" : "auto"} mb={2}>
      {label && (
        <Typography
          variant="body2"
          fontWeight={500}
          mb={0.5}
          sx={{ fontSize: { xs: 12, md: 14 }, ...labelSx }}
        >
          {label}
        </Typography>
      )}
      <TextField
        select
        value={value}
        onChange={handleChange}
        fullWidth
        size="small"
        sx={inputSx}
        {...rest}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>

        {data
          .filter((item) => item.group !== "other")
          .map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}

        <ListSubheader>Khác</ListSubheader>
        {data
          .filter((item) => item.group === "other")
          .map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
}

export default CommonSelectInput;
