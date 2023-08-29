import { Divider, Grid, styled } from "@mui/material";
import { Divide as Hamburger } from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { Greeting, NotificationBtn, ProfileBtn, ProfileModal } from ".";
import { RootState } from "../../store";
import { toggle } from "../../store/menuSlice";

const UserBanner = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen);
  const dispatch = useDispatch();
  const toggleMenu = () => dispatch(toggle());

  const HamburgerBtn = styled("div")(({ theme }) => ({
    height: "52px",
    width: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    position: "fixed",
    top: "8px",
    left: "16px",
    zIndex: 150,
  }));

  const HbgPlaceholder = styled("div")(({ theme }) => ({
    height: "52px",
    width: "52px",
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  return (
    <Grid
      container
      item
      direction="column"
      rowGap={{ xs: 0.5, md: 1.5 }}
      sx={{ position: "relative" }}
    >
      <Grid
        container
        item
        wrap="nowrap"
        sx={{
          width: { xs: "100%", md: "max-content" },
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: {
            xs: "center",
            md: "flex-end",
          },
        }}
      >
        <HamburgerBtn>
          <Hamburger
            size={32}
            color={isMenuOpen ? "#fff" : "#000"}
            toggle={toggleMenu}
            toggled={isMenuOpen}
          />
        </HamburgerBtn>
        <Grid
          item
          sx={{
            width: "52px",
            display: { xs: "block", md: "none" },
            justifySelf: "flex-start",
          }}
        >
          <HbgPlaceholder />
        </Grid>

        <Grid
          item
          container
          columnGap={{ xs: 0.25, sm: 1.25, md: 2.5 }}
          width="auto"
          flexWrap={"nowrap"}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Greeting />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NotificationBtn />
          </Grid>
          <Grid item>
            <ProfileBtn />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <ProfileModal />
    </Grid>
  );
};

export default UserBanner;
