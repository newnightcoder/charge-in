import { Box, Divider, styled, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Comment, Section, TitleSection } from ".";

const Commentaires = () => {
  const CommentsNumber = styled(Box)(() => ({
    height: "20px",
    width: "20px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: grey[300],
    color: "#000",
    fontSize: ".85rem",
    transform: "translateY(1px)",
  }));

  return (
    <Section span={"1/3"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "8px",
        }}
      >
        <TitleSection title="Commentaires" /> <CommentsNumber>9</CommentsNumber>
      </Box>

      <TextField
        fullWidth
        placeholder="Ajouter un commentaire"
        sx={{ backgroundColor: grey[200] }}
      />

      <Divider />

      <Comment />
    </Section>
  );
};

export default Commentaires;
