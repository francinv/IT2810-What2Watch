import * as React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import "./index.css";
import { alpha, styled } from "@mui/material/styles";
import {
  Button,
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
import SignIn from "../login";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";

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

interface NavBarProps{
  isLoginModalVisible:boolean;
  onCloseClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({isLoginModalVisible, onCloseClick}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [localSearch, setLocalSearch] = React.useState<string>("");
  const { setSearch, setUser } = actionDispatch(useAppDispatch());
  const isLoggedIn = useSelector(selectUserIsLoggedIn)


  const handleClose = () => {
    setAnchorEl(null);
    console.log()
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
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
      <SignIn  isLoginModalVisible={isLoginModalVisible} onCloseClick={onCloseClick}/>
      <AppBar className="navBar">
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
          <Search>
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
          {isLoggedIn 
              ? <Button onClick={handleLogin} variant="contained" endIcon={PersonIcon}>Log out</Button> /* Handle logout her */
              : <Button onClick={onCloseClick} variant="contained" endIcon={PersonIcon}> Log in</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;