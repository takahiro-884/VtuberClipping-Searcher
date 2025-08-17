import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export const Header = () => (
  <Grid
    container
    spacing={10}
    direction="row"
    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
  >
    <Grid size={6}>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        機能説明：キーワード検索した動画を再生リストに保存
      </Box>
    </Grid>
    <Grid size={6}>
      <List>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <ListItemText primary="ユーザ名：名無しの権兵衛" />
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <ListItemButton>Youtube連携</ListItemButton>
        </ListItem>
        <ListItem sx={{ padding: 0, margin: 0 }}>
          <ListItemButton>ログアウト</ListItemButton>
        </ListItem>
      </List>
    </Grid>
  </Grid>
);
