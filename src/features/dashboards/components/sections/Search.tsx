import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const Search = () => {
  const [searchBoxes, setSearchBoxes] = useState([0]);

  const handleAddBox = () => {
    setSearchBoxes([...searchBoxes, searchBoxes.length]);
  };

  return (
    <>
      <header>Dashboard Search</header>
      {searchBoxes.map((_, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          <div style={{ flex: 8 }}>
            <TextField
              label={`検索${idx + 1}`}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  color: 'black',
                  '& fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                  backgroundColor: 'white',
                  padding: '0 4px',
                },
              }}
              InputProps={{
                style: {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
              InputLabelProps={{
                style: {
                  color: 'black',
                  backgroundColor: 'white',
                },
              }}
            />
          </div>
          <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
            {idx === searchBoxes.length - 1 && (
              <IconButton
                aria-label="add"
                onClick={handleAddBox}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  border: '1px solid #ccc',
                  marginLeft: 8,
                }}
              >
                <AddIcon />
              </IconButton>
            )}
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <div style={{ width: '30%' }}>
          <Button variant="contained" color="primary" fullWidth>
            検索
          </Button>
        </div>
      </div>
    </>
  );
};
