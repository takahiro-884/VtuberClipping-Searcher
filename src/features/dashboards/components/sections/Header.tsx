import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import * as React from 'react';

export const Header = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid
        container
        spacing={10}
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'stretch',
          position: 'relative',
        }}
      >
        <Grid size={{ xs: 'auto' }} sx={{ height: 20 }} />
        <Grid size={{ xs: 8 }}>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            機能説明：キーワード検索した動画を再生リストに保存
          </Box>
        </Grid>
        <Grid
          size={{ xs: 'grow' }}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'absolute', right: 0, zIndex: 10 }}>
            <List sx={{ justifyContent: 'flex-end' }}>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="名無しの権兵衛" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Youtube連携" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="ログアウト" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
        </Grid>
        <Grid size={{ xs: 'auto' }} sx={{ height: 20 }} />
      </Grid>
    </>
  );
};
