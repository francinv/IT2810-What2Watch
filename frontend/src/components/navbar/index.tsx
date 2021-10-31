import * as React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import "./index.css";
import { alpha, styled } from "@mui/material/styles";
import {
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import { useAppDispatch } from "../../services/hooks";
import { Dispatch } from "redux";
import { setSearchQuery } from "../../pages/mainPageSlice";
import { loginAsUser } from "../loginmodal/loginslice"
import { selectUserIsLoggedIn } from "../../services/selectors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const actionDispatch = (dispatch: Dispatch) => ({
  setSearch: (query: string) => dispatch(setSearchQuery(query)),
  setUser: (query: string) => dispatch(loginAsUser(query))
});

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [localSearch, setLocalSearch] = React.useState<string>("");
  const { setSearch, setUser } = actionDispatch(useAppDispatch());
  const isLoggedIn = useSelector(selectUserIsLoggedIn)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log()
  };

  const handleLogin = () => {
    setAnchorEl(null);
    setUser("test")
  }


  const keyPress = (event: any) => {
    if (event.keyCode === 13) {
      setSearch(localSearch);
    }
  };

  function inputChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setLocalSearch(event.target.value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navBar" id="nav-bar">
        <Toolbar>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "left",
            }}
            className="text-navbar"
          >
            What to Watch?
          </Typography>
          <Search id="search-field-in-navbar">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={keyPress}
              onChange={(event) => {
                inputChange(event);
              }}
              autoFocus={true}
            />
          </Search>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-in-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {isLoggedIn 
              ? <MenuItem onClick={handleLogin}>Log out</MenuItem> /* Handle logout her */
              : <MenuItem onClick={handleLogin}>Log in</MenuItem>}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
