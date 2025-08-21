import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function CommonSelectInput({
  label,
  value: propValue,
  onChange,
  data = [], // [{id, name}]
  placeholder = "",
  fullWidth = true,
  inputSx = {},
  labelSx = {},
  ...rest
}) {
  const [value, setValue] = useState(propValue || data[0]?.id || 1);
  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (onChange) onChange(newValue);
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
        onChange={(e) => handleChange(e.target.value)}
        fullWidth={fullWidth}
        variant="outlined"
        size="small"
        placeholder={placeholder}
        InputProps={{
          sx: {
            fontSize: { xs: 12, md: 14 },
            py: 1,
            ...inputSx,
          },
        }}
        SelectProps={{
          MenuProps: {
            autoFocus: false,
          },
        }}
        {...rest}
      >
        {data.map((item) => (
          <MenuItem
            key={item.id}
            value={item.id}
            sx={{ fontSize: { xs: 12, md: 14 } }}
          >
            {item.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default CommonSelectInput;
