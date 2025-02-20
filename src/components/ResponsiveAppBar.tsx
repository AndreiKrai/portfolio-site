import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { SvgIcon } from "@mui/material";
import { pages } from "../navigationData.ts";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import { useNavigation } from "../context/navigationContext.tsx";
import ButtonsBar from "./ButtonsBar.jsx";
import LinkedinIcon from "./LinkedinIcon.tsx";
import Divider from "@mui/material/Divider";

function ResponsiveAppBar() {
  const { isMounted, navigateTo, isOpenMenu, menuHandler } = useNavigation();

  const socialLinks = [
    {
      label: "facebook",
      icon: <FacebookIcon sx={{ fontSize: "40px" }} />,
      onClick: () =>
        navigateTo.externalLink("https://www.facebook.com/okraichenko.andrei"),
      sx: {
        mr: 2,
        width: { xs: 40, md: 62 },
        height: { xs: 40, sm: 62 },
        color: "white",
      },
    },
    {
      label: "github",
      icon: <GitHubIcon sx={{ fontSize: "40px" }} />,
      onClick: () => navigateTo.externalLink("https://github.com/AndreiKrai"),
      sx: {
        mr: 2,
        width: { xs: 40, md: 62 },
        height: { xs: 40, sm: 62 },
        color: "white",
      },
    },
    {
      label: "linkedin",
      icon: <LinkedinIcon />,
      onClick: () =>
        navigateTo.externalLink(
          "https://www.linkedin.com/in/andrei-okraichenko-829700256/"
        ),
      sx: {
        mr: 2,
        width: { xs: 40, md: 62 },
        height: { xs: 40, sm: 62 },
        color: "white",
      },
    },
  ];
  return (
    <>
      {/* header */}
      <Slide
        direction="down"
        in={isMounted}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <AppBar
          position="absolute"
          sx={{ backgroundColor: "black", padding: 0, margin: 0, zIndex: 2 }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                height: { xs: 62, md: 92 },
                flexGrow: 1,
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <IconButton onClick={navigateTo.home} sx={{ color: "white" }}>
                <SvgIcon
                  sx={{ width: { xs: 40, md: 62 }, height: { xs: 40, sm: 62 } }}
                >
                  <path d="M11.25 23.991a16.994 16.994 0 0 1-1.384-.171c-4.813-.874-8.652-4.622-9.63-9.401-.184-.904-.218-1.275-.218-2.422 0-1.147.034-1.518.218-2.422A12.06 12.06 0 0 1 10.688.053c.592-.07 2.047-.07 2.61 0 1.728.215 3.226.702 4.631 1.505.447.255 1.143.73 1.57 1.07.502.4 1.458 1.357 1.856 1.857a12.082 12.082 0 0 1 2.59 6.344c.05.472.05 1.864 0 2.336a12.082 12.082 0 0 1-2.59 6.345c-.398.5-1.354 1.456-1.857 1.857-1.799 1.434-3.836 2.282-6.171 2.57-.343.043-1.782.08-2.077.054zm1.832-1.827c1.74-.206 3.238-.76 4.656-1.724a10.218 10.218 0 0 0 4.325-6.731c.11-.657.13-.925.13-1.712 0-.787-.02-1.054-.13-1.711-.711-4.255-4.11-7.655-8.366-8.366-.641-.107-.923-.129-1.683-.13-.953-.002-1.594.07-2.428.274-3.846.94-6.837 4.053-7.604 7.914-.158.798-.176 1-.176 2.02 0 1.018.018 1.22.176 2.018.812 4.088 4.125 7.327 8.23 8.045.214.037.539.082.721.1.182.017.377.036.433.043.181.021 1.45-.008 1.716-.04zm-4.802-5.57a4.425 4.425 0 0 1-.952-.203c-1.96-.625-3.293-2.547-3.191-4.597.104-2.097 1.593-3.866 3.626-4.306 2.662-.577 5.227 1.262 5.565 3.988a5.52 5.52 0 0 1-.059 1.437 4.664 4.664 0 0 1-.697 1.657c-.278.418-.847.99-1.25 1.257a4.614 4.614 0 0 1-3.042.768zm1.038-1.83c1.062-.223 1.873-1.003 2.17-2.084.08-.296.088-1.015.014-1.31a2.887 2.887 0 0 0-1.587-1.94c-.418-.193-.61-.23-1.174-.23-.445 0-.532.008-.735.068a2.862 2.862 0 0 0-1.759 1.424 2.822 2.822 0 0 0 3.071 4.073zm6.26-.443c-.845-1.268-1.532-2.318-1.526-2.333.006-.016.698-1.061 1.539-2.323l1.528-2.295h1.074c.591-.001 1.075.005 1.075.013s-.69 1.048-1.53 2.31c-.843 1.263-1.525 2.312-1.517 2.333.008.02.688 1.048 1.51 2.283a955.44 955.44 0 0 1 1.518 2.281c.018.029-.201.036-1.056.036h-1.079l-1.536-2.305z" />
                </SvgIcon>
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ display: { md: "none" } }}
                onClick={menuHandler.toggleMenu}
              >
                <MenuIcon sx={{ fontSize: "40px" }} />
              </IconButton>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                {/* nav */}
                {pages.map((page) => {
                  // const clickHandler =
                  //   navigateTo[page.onClick as keyof typeof navigateTo];
                  return (
                    <MenuItem
                      key={page.title}
                      onClick={page.onClick}
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      <Typography sx={{ textAlign: "center", mr: 5 }}>
                        {page.title}
                      </Typography>
                    </MenuItem>
                  );
                })}
                <ButtonsBar socialLinks={socialLinks} />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      {/* menu */}
      <Slide
        direction="down"
        in={isOpenMenu}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            pt: { xs: "64px" },
            backgroundColor: "black",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {pages.map((page) => (
            <Fade
              in={isOpenMenu}
              timeout={{ appear: 500, enter: 500, exit: 500 }}
              key={page.title} // Use title as the key since it is unique
            >
              <MenuItem
                onClick={page.onClick}
                sx={{ justifyContent: "center", height: "64px" }}
              >
                <Typography sx={{ color: "white" }}>{page.title}</Typography>
              </MenuItem>
            </Fade>
          ))}
          <Divider sx={{ borderColor: "gray", m: 0 }} />
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <ButtonsBar socialLinks={socialLinks} />
          </Box>
        </Box>

        {/* </> */}
      </Slide>
      {/* area to catch closemenu click on any screen place */}
      {isOpenMenu && (
        <Box
          onClick={menuHandler.closeMenu} // Close the menu on any outside click
          sx={{ position: "absolute", height: "100vh", width: "100vw" }}
        ></Box>
      )}
    </>
  );
}
export default ResponsiveAppBar;
